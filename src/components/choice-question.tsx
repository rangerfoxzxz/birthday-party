"use client";

import { PartyScreen } from "@/components/party-screen";
import { QuizHeader } from "@/components/quiz-header";
import { buttonVariants } from "@/components/ui/button";
import { hasFailedAttempt, leaveAfterFailure } from "@/lib/attempt";
import { type ChoiceQuestion as ChoiceQuestionData } from "@/lib/questions";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function MaskedLabel({ text }: { text: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;

    const paint = () => {
      if (cancelled) return;
      const context = canvas.getContext("2d");
      if (!context) return;
      const style = getComputedStyle(canvas);
      const fontSize = 16;
      const font = `${style.fontWeight} ${fontSize}px ${style.fontFamily}`;
      context.font = font;
      const width = Math.ceil(context.measureText(text).width) + 4;
      const height = Math.ceil(fontSize * 1.5);
      const ratio = Math.min(window.devicePixelRatio || 1, 3);
      canvas.width = Math.max(1, width * ratio);
      canvas.height = Math.max(1, height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);
      context.font = font;
      context.fillStyle = style.color;
      context.textBaseline = "middle";
      context.fillText(text, 2, height / 2);
    };

    paint();
    document.fonts?.ready.then(paint).catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [text]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none block" />;
}

export function ChoiceQuestion({ question }: { question: ChoiceQuestionData }) {
  const router = useRouter();
  const locked = useRef(false);
  const [leaving, setLeaving] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const choices = expanded && question.expandedChoices ? question.expandedChoices : question.choices;
  const detail =
    question.expandIndex === undefined ? "เลือกได้ข้อเดียว ตอบผิดแล้วเล่นต่อไม่ได้" : "เลือกได้ข้อเดียว";

  function pick(index: number) {
    if (locked.current) return;
    if (hasFailedAttempt()) {
      leaveAfterFailure();
      return;
    }
    if (!expanded && index === question.expandIndex && question.expandedChoices) {
      setExpanded(true);
      return;
    }
    locked.current = true;
    setLeaving(true);
    if (!expanded && index !== question.correctIndex) {
      leaveAfterFailure();
      return;
    }
    router.push(question.nextHref);
  }

  return (
    <PartyScreen>
      <QuizHeader step={question.step} title={question.title} detail={detail} />
      <div
        className={cn(
          "mt-8 flex flex-col gap-3",
          choices.length > 8 && "min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 pb-2",
        )}
        role="group"
        aria-label={question.title}
      >
        {choices.map((choice, index) => {
          return (
            <button
              key={`${expanded ? "open" : "start"}-${index}`}
              type="button"
              disabled={leaving}
              onClick={() => pick(index)}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 w-full shrink-0 cursor-pointer justify-start gap-3 rounded-2xl px-4 text-base",
              )}
            >
              <span className="inline-flex h-8 min-w-8 shrink-0 items-center justify-center rounded-full bg-foreground/10 px-1.5 text-sm font-semibold tabular-nums">
                {index + 1}
              </span>
              {question.maskCorrect && index === question.correctIndex ? (
                <MaskedLabel text={choice} />
              ) : (
                <span className={cn(question.emojiChoices && "text-3xl leading-none")}>{choice}</span>
              )}
            </button>
          );
        })}
      </div>
    </PartyScreen>
  );
}

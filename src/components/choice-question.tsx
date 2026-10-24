"use client";

import { PartyScreen } from "@/components/party-screen";
import { QuizHeader } from "@/components/quiz-header";
import { buttonVariants } from "@/components/ui/button";
import { hasFailedAttempt, leaveAfterFailure } from "@/lib/attempt";
import { type ChoiceQuestion as ChoiceQuestionData } from "@/lib/questions";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

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
      <div className="mt-8 flex flex-col gap-3" role="group" aria-label={question.title}>
        {choices.map((choice, index) => {
          return (
            <button
              key={`${expanded ? "open" : "start"}-${index}`}
              type="button"
              disabled={leaving}
              onClick={() => pick(index)}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 w-full cursor-pointer justify-start gap-3 rounded-2xl px-4 text-base",
              )}
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-foreground/10 text-sm font-semibold">
                {index + 1}
              </span>
              <span className={cn(question.emojiChoices && "text-3xl leading-none")}>{choice}</span>
            </button>
          );
        })}
      </div>
    </PartyScreen>
  );
}

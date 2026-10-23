"use client";

import { PartyScreen } from "@/components/party-screen";
import { QuizHeader } from "@/components/quiz-header";
import { buttonVariants } from "@/components/ui/button";
import { hasFailedAttempt, leaveAfterFailure } from "@/lib/attempt";
import { CORRECT_CHOICE, type ChoiceQuestion as ChoiceQuestionData } from "@/lib/questions";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export function ChoiceQuestion({ question }: { question: ChoiceQuestionData }) {
  const router = useRouter();
  const locked = useRef(false);
  const [leaving, setLeaving] = useState(false);

  function pick(index: number) {
    if (locked.current) return;
    if (hasFailedAttempt()) {
      leaveAfterFailure();
      return;
    }
    locked.current = true;
    setLeaving(true);
    if (index !== CORRECT_CHOICE) {
      leaveAfterFailure();
      return;
    }
    router.push(question.nextHref);
  }

  return (
    <PartyScreen>
      <QuizHeader step={question.step} title={question.title} detail="เลือกได้ข้อเดียว ตอบผิดแล้วเล่นต่อไม่ได้" />
      <div className="mt-8 flex flex-col gap-3" role="group" aria-label={question.title}>
        {question.choices.map((choice, index) => (
          <button
            key={choice}
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
            {choice}
          </button>
        ))}
      </div>
    </PartyScreen>
  );
}

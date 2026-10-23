"use client";

import { PartyScreen } from "@/components/party-screen";
import { QuizHeader } from "@/components/quiz-header";
import { buttonVariants } from "@/components/ui/button";
import { CORRECT_CHOICE, type ChoiceQuestion as ChoiceQuestionData } from "@/lib/questions";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ChoiceQuestion({ question }: { question: ChoiceQuestionData }) {
  const router = useRouter();
  const [wrong, setWrong] = useState<number | null>(null);
  const [bump, setBump] = useState(0);
  const [misses, setMisses] = useState(0);
  const [leaving, setLeaving] = useState(false);

  function pick(index: number) {
    if (leaving) return;
    if (index !== CORRECT_CHOICE) {
      setWrong(index);
      setBump((n) => n + 1);
      setMisses((n) => n + 1);
      return;
    }
    setLeaving(true);
    router.push(question.nextHref);
  }

  const feedback =
    misses >= 2 ? "คำใบ้: ลองข้อที่ 4" : wrong === null ? "" : "ยังไม่ใช่ข้อนี้";

  return (
    <PartyScreen>
      <QuizHeader step={question.step} title={question.title} detail="เลือกได้ข้อเดียว" />
      <div className="mt-8 flex flex-col gap-3" role="group" aria-label={question.title}>
        {question.choices.map((choice, index) => {
          const missed = wrong === index;
          return (
            <button
              key={`${choice}-${missed ? bump : 0}`}
              type="button"
              disabled={leaving}
              onClick={() => pick(index)}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 w-full cursor-pointer justify-start gap-3 rounded-2xl px-4 text-base",
                missed && "animate-deny border-destructive text-destructive",
              )}
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-foreground/10 text-sm font-semibold">
                {index + 1}
              </span>
              {choice}
            </button>
          );
        })}
      </div>
      <p className="mt-4 min-h-6 text-center text-sm text-destructive" aria-live="polite">
        {feedback}
      </p>
    </PartyScreen>
  );
}

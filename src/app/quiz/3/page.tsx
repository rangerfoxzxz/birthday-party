import { ChoiceQuestion } from "@/components/choice-question";
import { choiceQuestions } from "@/lib/questions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ข้อ 3",
};

export default function QuizThreePage() {
  return <ChoiceQuestion question={choiceQuestions[3]} />;
}

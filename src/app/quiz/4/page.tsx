import { ChoiceQuestion } from "@/components/choice-question";
import { choiceQuestions } from "@/lib/questions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ข้อ 4",
};

export default function QuizFourPage() {
  return <ChoiceQuestion question={choiceQuestions[4]} />;
}

import { ChoiceQuestion } from "@/components/choice-question";
import { choiceQuestions } from "@/lib/questions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ข้อ 2",
};

export default function QuizTwoPage() {
  return <ChoiceQuestion question={choiceQuestions[2]} />;
}

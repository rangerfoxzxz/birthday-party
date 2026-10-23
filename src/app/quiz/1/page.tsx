import { QuestionOne } from "@/components/question-one";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ข้อ 1",
};

export default function QuizOnePage() {
  return <QuestionOne />;
}

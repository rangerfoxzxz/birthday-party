import { AttemptGate } from "@/components/attempt-gate";

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <AttemptGate>{children}</AttemptGate>;
}

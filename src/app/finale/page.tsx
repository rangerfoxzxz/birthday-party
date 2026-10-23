import { AttemptGate } from "@/components/attempt-gate";
import { FinaleScreen } from "@/components/finale-screen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "34",
};

export default function FinalePage() {
  return (
    <AttemptGate>
      <FinaleScreen />
    </AttemptGate>
  );
}

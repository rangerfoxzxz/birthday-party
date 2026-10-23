import { SorryScreen } from "@/components/sorry-screen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ตอบผิด",
};

export default function SorryPage() {
  return <SorryScreen />;
}

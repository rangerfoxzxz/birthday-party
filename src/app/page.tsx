import { AttemptGate } from "@/components/attempt-gate";
import { HomeScreen } from "@/components/home-screen";

export default function Home() {
  return (
    <AttemptGate>
      <HomeScreen />
    </AttemptGate>
  );
}

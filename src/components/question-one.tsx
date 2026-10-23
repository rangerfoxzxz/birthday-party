import { DodgeButton } from "@/components/dodge-button";
import { PartyScreen } from "@/components/party-screen";
import { QuizHeader } from "@/components/quiz-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function QuestionOne() {
  return (
    <PartyScreen>
      <QuizHeader
        step={1}
        title="Misfortune เป็นเคะหรือเมะ"
        detail="ลองชี้ คลิก หรือแตะคำว่าเคะดู ทั้งเมาส์และนิ้วบนมือถือ มันไม่ยอมอยู่นิ่ง"
      />
      <div className="relative mt-5 min-h-64 flex-1">
        <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-dashed border-foreground/20 bg-card/70">
          <div className="absolute inset-3">
            <DodgeButton label="เคะ" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Link
          href="/quiz/2"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-14 w-full cursor-pointer rounded-full px-6 text-lg font-semibold",
          )}
        >
          เมะ
        </Link>
      </div>
    </PartyScreen>
  );
}

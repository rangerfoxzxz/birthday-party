import { PartyScreen } from "@/components/party-screen";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function FinaleScreen() {
  return (
    <PartyScreen>
      <div className="relative flex flex-1 flex-col items-center justify-center text-center">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl"
          aria-hidden
        />
        <p className="relative text-sm font-semibold tracking-[0.35em] text-primary">HAPPY BIRTHDAY</p>
        <p className="gold-text number-in relative font-display text-[clamp(8rem,34vw,16rem)] leading-[0.8] tabular-nums">
          34
        </p>
        <p className="relative mt-6 text-lg leading-8">สุขสันต์วันเกิดนะ Misfortune</p>
        <p className="relative mt-1 text-sm text-muted-foreground">26 ตุลาคม</p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "relative mt-8 h-12 cursor-pointer rounded-full px-6",
          )}
        >
          กลับหน้าแรก
        </Link>
      </div>
    </PartyScreen>
  );
}

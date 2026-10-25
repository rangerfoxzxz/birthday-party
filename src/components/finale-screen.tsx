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
        <section className="rise-in relative w-full max-w-md rounded-[2rem] border border-foreground/15 bg-[oklch(0.17_0.05_305/0.9)] px-6 py-10 shadow-[0_30px_80px_oklch(0.12_0.06_305/0.55)] backdrop-blur-md sm:px-10">
          <p className="text-sm font-semibold tracking-[0.35em] text-primary">HAPPY BIRTHDAY</p>
          <h1 className="mt-4 font-display text-4xl italic leading-tight text-balance sm:text-5xl">
            ขอบคุณที่เข้ามาร่วมสนุก
          </h1>
          <p className="mt-4 text-lg leading-8">สุขสันต์วันเกิดของ Misfortune นะครับ</p>
          <p className="mt-6 text-sm text-muted-foreground">วันเกิดที่แท้จริง</p>
          <p className="gold-text number-in mt-1 font-display text-5xl leading-none sm:text-6xl">26/10/1992</p>
          <p className="mt-6 text-lg leading-8 text-balance">ถึงจะแก่ แต่ก็ยังแข็งงงงง (แรง) นะครับ</p>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mt-8 h-12 cursor-pointer rounded-full px-6",
            )}
          >
            กลับหน้าแรก
          </Link>
        </section>
      </div>
    </PartyScreen>
  );
}

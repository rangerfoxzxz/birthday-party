import { PartyScreen } from "@/components/party-screen";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PartyPopper } from "lucide-react";
import Link from "next/link";

function Balloon({ className, color }: { className: string; color: string }) {
  return (
    <div className={cn("pointer-events-none absolute hidden md:block", className)} aria-hidden>
      <div className="mx-auto h-20 w-14 rounded-[50%]" style={{ background: color }} />
      <div className="mx-auto h-3 w-3 rotate-45 bg-inherit" style={{ background: color, marginTop: -6 }} />
      <div className="mx-auto h-16 w-px bg-foreground/25" />
    </div>
  );
}

function Cake() {
  return (
    <svg viewBox="0 0 120 96" className="mx-auto h-24 w-28" aria-hidden>
      <ellipse cx="60" cy="86" rx="36" ry="5" fill="oklch(0.84 0.14 88 / 0.35)" />
      <rect x="22" y="54" width="76" height="28" rx="10" fill="#f2c14e" />
      <rect x="30" y="40" width="60" height="22" rx="9" fill="#ff8aa3" />
      <rect x="40" y="28" width="40" height="18" rx="8" fill="#fff4e4" />
      <path d="M60 8c2 6-2 8 0 14" stroke="#f2c14e" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="60" cy="8" r="3.2" fill="#ffb020" />
    </svg>
  );
}

export function HomeScreen() {
  return (
    <PartyScreen wide>
      <Balloon className="top-16 left-4" color="#ff8aa3" />
      <Balloon className="top-28 right-6" color="#f2c14e" />
      <Balloon className="bottom-16 left-16" color="#fff4e4" />
      <div className="m-auto w-full max-w-md">
        <section className="rise-in rounded-[2rem] border border-foreground/10 bg-card/85 px-6 py-8 text-center shadow-[0_30px_80px_oklch(0.12_0.03_18/0.45)] backdrop-blur-sm sm:px-10 sm:py-12">
          <p className="inline-flex rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-sm font-semibold text-primary">
            26 ตุลาคม
          </p>
          <Cake />
          <p className="mt-2 text-sm font-medium tracking-[0.22em] text-muted-foreground">ยินดีต้อนรับ</p>
          <h1 className="mt-2 font-display text-5xl italic leading-none tracking-tight text-balance sm:text-6xl">
            Misfortune
          </h1>
          <p className="mt-4 text-lg leading-8 text-foreground/90">สู่ปาร์ตี้วันเกิด</p>
          <p className="mt-2 text-base leading-7 text-muted-foreground">
            มีเกมตอบคำถาม 4 ข้อ เริ่มที่ข้อแรก แล้วหน้าจะพาไปข้อ 2, 3 และ 4 ตามลำดับ
          </p>
          <Link
            href="/quiz/1"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 h-14 w-full cursor-pointer rounded-full px-6 text-base font-semibold",
            )}
          >
            <PartyPopper />
            เริ่มเล่น
          </Link>
        </section>
      </div>
    </PartyScreen>
  );
}

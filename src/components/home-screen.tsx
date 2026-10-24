import { PartyScreen } from "@/components/party-screen";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PartyPopper } from "lucide-react";
import Link from "next/link";

export function HomeScreen() {
  return (
    <PartyScreen wide quiet>
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <picture>
          <source media="(orientation: landscape)" srcSet="/misfortune-birthday-16x9.jpg" />
          <img
            src="/misfortune-birthday-9x16.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent landscape:hidden" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_at_center,transparent_46%,oklch(0.1_0.05_305/0.55)_100%)] landscape:block" />
      </div>
      <div className="relative z-10 mt-auto w-full max-w-md landscape:fixed landscape:top-1/2 landscape:right-[max(1.25rem,6vw)] landscape:z-10 landscape:mt-0 landscape:-translate-y-1/2">
        <section className="rise-in rounded-[2rem] border border-foreground/15 bg-[oklch(0.17_0.05_305/0.9)] px-6 py-8 text-center shadow-[0_30px_80px_oklch(0.12_0.06_305/0.55)] backdrop-blur-md sm:px-10 sm:py-12">
          <p className="inline-flex rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-sm font-semibold text-primary">
            26 ตุลาคม
          </p>
          <p className="mt-6 text-sm font-medium tracking-[0.22em] text-muted-foreground">ยินดีต้อนรับ</p>
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

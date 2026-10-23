import { cn } from "@/lib/utils";

export function QuizHeader({
  step,
  title,
  detail,
}: {
  step: number;
  title: string;
  detail?: string;
}) {
  return (
    <header>
      <p className="text-sm font-semibold tracking-[0.18em] text-primary">ข้อ {step} จาก 4</p>
      <div className="mt-3 flex gap-2" aria-hidden>
        {[1, 2, 3, 4].map((n) => (
          <span
            key={n}
            className={cn("h-1.5 flex-1 rounded-full", n <= step ? "bg-primary" : "bg-foreground/15")}
          />
        ))}
      </div>
      <h1 className="mt-6 text-[1.7rem] font-semibold leading-snug text-balance sm:text-4xl">{title}</h1>
      {detail ? <p className="mt-3 text-base leading-7 text-muted-foreground">{detail}</p> : null}
    </header>
  );
}

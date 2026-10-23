import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

const PIECES: Array<{
  left: string;
  delay: string;
  duration: string;
  drift: string;
  color: string;
  size: number;
  radius: string;
}> = [
  { left: "6%", delay: "0s", duration: "11s", drift: "18px", color: "#f2c14e", size: 8, radius: "999px" },
  { left: "14%", delay: "1.4s", duration: "13s", drift: "-16px", color: "#ff8aa3", size: 10, radius: "2px" },
  { left: "24%", delay: "3s", duration: "10s", drift: "12px", color: "#fff4e4", size: 6, radius: "999px" },
  { left: "33%", delay: "0.6s", duration: "14s", drift: "-20px", color: "#f2c14e", size: 7, radius: "2px" },
  { left: "42%", delay: "2.2s", duration: "12s", drift: "22px", color: "#ff8aa3", size: 9, radius: "999px" },
  { left: "51%", delay: "4s", duration: "11s", drift: "-10px", color: "#fff4e4", size: 5, radius: "2px" },
  { left: "60%", delay: "1s", duration: "13s", drift: "16px", color: "#f2c14e", size: 8, radius: "999px" },
  { left: "69%", delay: "2.8s", duration: "10.5s", drift: "-18px", color: "#ff8aa3", size: 11, radius: "2px" },
  { left: "78%", delay: "0.2s", duration: "12.5s", drift: "14px", color: "#fff4e4", size: 6, radius: "999px" },
  { left: "87%", delay: "3.4s", duration: "14s", drift: "-12px", color: "#f2c14e", size: 9, radius: "2px" },
  { left: "94%", delay: "1.8s", duration: "11.5s", drift: "8px", color: "#ff8aa3", size: 7, radius: "999px" },
  { left: "19%", delay: "5s", duration: "12s", drift: "20px", color: "#ffb3c4", size: 8, radius: "2px" },
];

export function PartyScreen({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        {PIECES.map((piece) => (
          <span
            key={`${piece.left}-${piece.delay}`}
            className="confetti-piece absolute top-0 block"
            style={
              {
                left: piece.left,
                width: piece.size,
                height: piece.size * 1.35,
                borderRadius: piece.radius,
                background: piece.color,
                animationDuration: piece.duration,
                animationDelay: piece.delay,
                "--drift": piece.drift,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div
        className={cn(
          "relative z-10 mx-auto flex min-h-dvh w-full flex-col px-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))]",
          wide ? "max-w-3xl" : "max-w-xl",
        )}
      >
        {children}
      </div>
    </div>
  );
}

"use client";

import { hasFailedAttempt } from "@/lib/attempt";
import { useEffect, useState } from "react";

export function AttemptGate({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"check" | "open" | "locked">("check");

  useEffect(() => {
    const lockOut = () => {
      if (!hasFailedAttempt()) return;
      setPhase("locked");
      window.location.replace("/sorry");
    };

    if (hasFailedAttempt()) {
      lockOut();
      return;
    }

    setPhase("open");
    window.addEventListener("pageshow", lockOut);
    window.addEventListener("popstate", lockOut);
    window.addEventListener("storage", lockOut);
    return () => {
      window.removeEventListener("pageshow", lockOut);
      window.removeEventListener("popstate", lockOut);
      window.removeEventListener("storage", lockOut);
    };
  }, []);

  if (phase === "locked") {
    return (
      <div className="grid min-h-dvh place-items-center" aria-busy="true">
        <div className="h-2 w-24 animate-pulse rounded-full bg-primary/60" />
      </div>
    );
  }

  return (
    <div hidden={phase !== "open"} className={phase === "open" ? "contents" : undefined}>
      {children}
    </div>
  );
}

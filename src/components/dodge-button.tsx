"use client";

import { pickFleePosition, type Point } from "@/lib/flee";
import { useEffect, useRef, useState } from "react";

const NEAR_PAD = 32;
const FLEE_LOCK_MS = 140;

function claimFlee(lock: { current: number }, force: boolean) {
  const now = performance.now();
  if (!force && now < lock.current) return false;
  lock.current = now + FLEE_LOCK_MS;
  return true;
}

export function DodgeButton({ label }: { label: string }) {
  const areaRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const pos = useRef<Point>({ x: 24, y: 56 });
  const lock = useRef(0);
  const placed = useRef(false);
  const [point, setPoint] = useState<Point>({ x: 24, y: 56 });
  const [animate, setAnimate] = useState(false);

  const commit = (next: Point, withMotion: boolean) => {
    if (next.x === pos.current.x && next.y === pos.current.y) {
      if (withMotion) setAnimate(true);
      return;
    }
    pos.current = next;
    setPoint(next);
    if (withMotion) setAnimate(true);
  };

  const flee = (clientX: number, clientY: number, force = false, depth = 0) => {
    if (depth > 6) return;
    if (!claimFlee(lock, force)) return;
    const area = areaRef.current;
    const btn = btnRef.current;
    if (!area || !btn) return;
    const rect = area.getBoundingClientRect();
    const next = pickFleePosition(
      { width: rect.width, height: rect.height },
      { width: btn.offsetWidth, height: btn.offsetHeight },
      pos.current,
      { x: clientX - rect.left, y: clientY - rect.top },
    );
    commit(next, true);
    requestAnimationFrame(() => {
      const box = btnRef.current?.getBoundingClientRect();
      if (!box) return;
      const stillNear =
        clientX >= box.left - NEAR_PAD &&
        clientX <= box.right + NEAR_PAD &&
        clientY >= box.top - NEAR_PAD &&
        clientY <= box.bottom + NEAR_PAD;
      if (stillNear) flee(clientX, clientY, true, depth + 1);
    });
  };

  useEffect(() => {
    const area = areaRef.current;
    const btn = btnRef.current;
    if (!area || !btn) return;

    const place = () => {
      if (area.clientWidth < 40 || area.clientHeight < 40) return;
      const maxX = Math.max(0, area.clientWidth - btn.offsetWidth);
      const maxY = Math.max(0, area.clientHeight - btn.offsetHeight);
      if (!placed.current) {
        placed.current = true;
        const next = {
          x: Math.min(maxX, maxX * 0.12 + Math.random() * Math.max(8, maxX * 0.2)),
          y: Math.min(maxY, maxY * 0.18 + Math.random() * Math.max(8, maxY * 0.25)),
        };
        pos.current = next;
        setPoint(next);
        return;
      }
      const next = {
        x: Math.min(Math.max(0, pos.current.x), maxX),
        y: Math.min(Math.max(0, pos.current.y), maxY),
      };
      if (next.x === pos.current.x && next.y === pos.current.y) return;
      pos.current = next;
      setPoint(next);
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(area);
    observer.observe(btn);
    return () => {
      observer.disconnect();
      placed.current = false;
    };
  }, []);

  return (
    <div
      ref={areaRef}
      className="relative h-full min-h-56 w-full"
      onPointerMove={(event) => {
        const btn = btnRef.current?.getBoundingClientRect();
        if (!btn) return;
        const near =
          event.clientX >= btn.left - NEAR_PAD &&
          event.clientX <= btn.right + NEAR_PAD &&
          event.clientY >= btn.top - NEAR_PAD &&
          event.clientY <= btn.bottom + NEAR_PAD;
        if (near) flee(event.clientX, event.clientY);
      }}
    >
      <button
        ref={btnRef}
        type="button"
        tabIndex={-1}
        draggable={false}
        aria-disabled="true"
        aria-label={`${label} ปุ่มนี้จะวิ่งหนี กดเลือกไม่ได้`}
        className={`absolute top-0 left-0 z-10 min-h-14 min-w-24 cursor-pointer touch-none rounded-full bg-accent px-6 text-lg font-semibold whitespace-nowrap text-accent-foreground shadow-lg select-none ${
          animate ? "transition-transform duration-150 ease-out" : ""
        }`}
        style={{
          transform: `translate3d(${point.x}px, ${point.y}px, 0) rotate(${((point.x + point.y) % 14) - 7}deg)`,
        }}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") flee(event.clientX, event.clientY);
        }}
        onPointerDown={(event) => {
          event.preventDefault();
          flee(event.clientX, event.clientY);
        }}
        onClick={(event) => {
          event.preventDefault();
        }}
        onKeyDown={(event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          const area = areaRef.current?.getBoundingClientRect();
          if (!area) return;
          flee(area.left + 8, area.top + 8);
        }}
      >
        {label}
      </button>
    </div>
  );
}

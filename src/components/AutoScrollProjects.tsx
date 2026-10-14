"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function AutoScrollProjects({ children }: { children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last = 0;
    let direction = 1;
    const animate = (time: number) => {
      if (last === 0) last = time;
      const elapsed = Math.min(time - last, 64);
      last = time;
      const max = el.scrollWidth - el.clientWidth;
      if (!paused.current && !preference.matches && max > 0) {
        const next = el.scrollLeft + direction * (elapsed / 1000) * 25;
        if (next >= max) { el.scrollLeft = max; direction = -1; }
        else if (next <= 0) { el.scrollLeft = 0; direction = 1; }
        else el.scrollLeft = next;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={track}
      className="creative-project-strip creative-project-strip-auto"
      aria-label="Selected projects, horizontally scrollable"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onTouchStart={() => { paused.current = true; }}
      onTouchEnd={() => { paused.current = false; }}
      onFocusCapture={() => { paused.current = true; }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) paused.current = false;
      }}
    >
      {children}
    </div>
  );
}

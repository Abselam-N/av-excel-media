"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Slowly pans through the real project cards, reversing at either end. */
export function AutoScrollProjects({ children }: { children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const pausedUntil = useRef(0);
  const focused = useRef(false);
  const touching = useRef(false);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last = 0;
    let direction = 1;
    const animate = (now: number) => {
      const delta = last ? Math.min(now - last, 64) : 0;
      last = now;
      const max = Math.max(0, el.scrollWidth - el.clientWidth);
      if (document.visibilityState === "visible" && !motion.matches && !focused.current && !touching.current && now >= pausedUntil.current && max > 1) {
        // 30px/s is gentle enough for project titles to remain readable.
        const next = el.scrollLeft + direction * delta * 0.03;
        if (next >= max) { el.scrollLeft = max; direction = -1; }
        else if (next <= 0) { el.scrollLeft = 0; direction = 1; }
        else el.scrollLeft = next;
      }
      frame = window.requestAnimationFrame(animate);
    };
    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const hold = () => { pausedUntil.current = performance.now() + 3000; };

  return (
    <div
      ref={track}
      className="creative-project-strip creative-project-strip-auto"
      role="region"
      aria-label="Selected projects — automatically scrolling gallery; swipe or scroll to browse"
      onTouchStart={() => { touching.current = true; }}
      onTouchEnd={() => { touching.current = false; hold(); }}
      onTouchCancel={() => { touching.current = false; hold(); }}
      onWheel={hold}
      onPointerDown={hold}
      onFocusCapture={() => { focused.current = true; }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          focused.current = false;
        }
      }}
    >
      {children}
    </div>
  );
}

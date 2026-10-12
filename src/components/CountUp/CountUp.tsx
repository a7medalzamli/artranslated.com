"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Final value to count up to. */
  value: number;
  /** Text shown before the number (e.g. "$"). */
  prefix?: string;
  /** Text shown after the number (e.g. "+", "%", "M+"). */
  suffix?: string;
  /** Animation length in milliseconds. */
  duration?: number;
  className?: string;
};

/**
 * Counts up from 0 to `value` the first time it scrolls into view.
 * Honors `prefers-reduced-motion` (shows the final value immediately) and
 * degrades gracefully without JS by rendering the final value.
 */
export function CountUp({ value, prefix = "", suffix = "", duration = 1600, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      const id = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(id);
    }

    let frame = 0;
    let start = 0;

    const run = () => {
      const step = (now: number) => {
        if (!start) start = now;
        const progress = Math.min((now - start) / duration, 1);
        // easeOutCubic for a natural deceleration
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            obs.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

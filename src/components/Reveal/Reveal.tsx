"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: ReactNode;
  /** Slide-in direction as the element enters the viewport. */
  from?: "up" | "down" | "left" | "right" | "none";
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** Render as a different element (e.g. "li", "section"). Defaults to div. */
  as?: ElementType;
  className?: string;
};

/**
 * Reveals its children with a gentle fade + slide the first time they scroll
 * into view (the "moving images/sections" effect). Honors
 * `prefers-reduced-motion`: motion-averse visitors see the content immediately
 * with no transform or fade. Progressive enhancement — without JS the content
 * is visible from the start.
 */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  as,
  className,
}: RevealProps) {
  const Tag = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={[styles.reveal, styles[from], shown ? styles.in : "", className]
        .filter(Boolean)
        .join(" ")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

import type { CSSProperties } from "react";

const ARABIC = /[\u0600-\u06FF]/;

/**
 * Inline style for a title that shrinks to fit on one line on tablets and
 * computers (the `fit-title` class in globals.css; the box it fits is the
 * nearest `fit-box`). The font size comes from the title length and the
 * widest average letter width measured in our heading fonts: Lexend in
 * capitals ≈ 0.69em, IBM Plex Sans Arabic ≈ 0.38em (rounded up).
 */
export function fitTitle(title: string): CSSProperties {
  return {
    "--title-len": title.length,
    "--char-w": ARABIC.test(title) ? 0.4 : 0.7,
  } as CSSProperties;
}

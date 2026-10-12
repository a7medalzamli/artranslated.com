/**
 * "Past experience" counters shown on the home page (animated 0 → value).
 *
 * ⚠️ PLACEHOLDER FIGURES — confirm or replace before launch (tracked in
 * PLACEHOLDERS.md). These are conservative and must not overstate experience.
 * Ahmed will supply the real numbers; update `value`/`suffix`/`label` here or
 * via the admin content panel.
 */
export type Stat = {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const experienceStats: Stat[] = [
  { id: "years", value: 6, suffix: "+", label: "Years of experience" },
  { id: "words", value: 1000000, suffix: "+", label: "Words translated" },
  { id: "projects", value: 100, suffix: "+", label: "Projects delivered" },
  { id: "languages", value: 4, suffix: "", label: "Working languages" },
];

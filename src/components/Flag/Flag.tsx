import type { CSSProperties } from "react";

export type LanguageCode = "en" | "ar" | "fr" | "es";

/**
 * Small decorative language icons. Flags are simplified (rounded rectangles) and
 * purely illustrative; Arabic is represented by its script rather than a single
 * country flag, since Arabic spans many nations. Decorative only —
 * `aria-hidden`, with the language name provided as visible text alongside.
 */
export function Flag({ code, size = 28 }: { code: LanguageCode; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    role: "img" as const,
    "aria-hidden": true,
  };
  const clip: CSSProperties = { borderRadius: 6, overflow: "hidden", display: "block" };

  switch (code) {
    case "en":
      return (
        <svg {...common} style={clip}>
          <rect width="24" height="24" fill="#012169" />
          <path d="M0 0l24 24M24 0L0 24" stroke="#fff" strokeWidth="4" />
          <path d="M0 0l24 24M24 0L0 24" stroke="#C8102E" strokeWidth="2" />
          <path d="M12 0v24M0 12h24" stroke="#fff" strokeWidth="6" />
          <path d="M12 0v24M0 12h24" stroke="#C8102E" strokeWidth="3" />
        </svg>
      );
    case "fr":
      return (
        <svg {...common} style={clip}>
          <rect width="8" height="24" x="0" fill="#0055A4" />
          <rect width="8" height="24" x="8" fill="#fff" />
          <rect width="8" height="24" x="16" fill="#EF4135" />
        </svg>
      );
    case "es":
      return (
        <svg {...common} style={clip}>
          <rect width="24" height="24" fill="#AA151B" />
          <rect width="24" height="12" y="6" fill="#F1BF00" />
        </svg>
      );
    case "ar":
      return (
        <svg {...common} style={clip}>
          <rect width="24" height="24" fill="#0f766e" />
          <text
            x="12"
            y="17"
            textAnchor="middle"
            fontSize="15"
            fontFamily="'Noto Sans Arabic', 'Segoe UI', sans-serif"
            fill="#ffffff"
          >
            ع
          </text>
        </svg>
      );
  }
}

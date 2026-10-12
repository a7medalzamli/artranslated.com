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
      // United States flag (simplified).
      return (
        <svg {...common} style={clip}>
          <rect width="24" height="24" fill="#B22234" />
          {[1, 3, 5, 7, 9, 11].map((i) => (
            <rect key={i} y={(i * 24) / 13} width="24" height={24 / 13} fill="#ffffff" />
          ))}
          <rect width="10" height={(7 * 24) / 13} fill="#3C3B6E" />
          {[2, 5, 8].map((cx) =>
            [2, 5, 8, 11].map((cy) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.7" fill="#ffffff" />
            )),
          )}
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

/**
 * Site-wide identity values. Bracketed values are placeholders tracked in
 * PLACEHOLDERS.md — replace them with the real details when provided.
 */
export const site = {
  /** Wordmark / logo text shown in the header and footer. */
  name: "Ahmed Alzamli",
  /** Short professional descriptor used in the footer. */
  role: "English, French & Spanish into Arabic Translator",
  /**
   * Social links shown in the hero. `href: "#"` values are placeholders —
   * replace with the real profile URLs (tracked in PLACEHOLDERS.md).
   * Set an href to "" to hide that item.
   */
  socials: [
    { platform: "linkedin", label: "LinkedIn", href: "#" },
    { platform: "x", label: "X (Twitter)", href: "#" },
    { platform: "email", label: "Email", href: "#" },
  ],
} as const;

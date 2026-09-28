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
    { platform: "whatsapp", label: "WhatsApp", href: "#" },
    { platform: "email", label: "Email", href: "#" },
  ],
  /**
   * Credential / membership badges shown at the bottom of the footer.
   * `href: "#"` are placeholders — replace with the real profile/verification
   * URLs (tracked in PLACEHOLDERS.md). Edit `label` for accurate alt text.
   */
  badges: [
    { src: "/badges/badge-6.jpg", label: "Partner", href: "#" },
    { src: "/badges/badge-5.jpg", label: "Professional membership", href: "#" },
    { src: "/badges/badge-7.jpg", label: "Protemos", href: "#" },
    { src: "/badges/badge-8.jpg", label: "Smartcat", href: "#" },
  ],
} as const;

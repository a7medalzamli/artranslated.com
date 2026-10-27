/**
 * Telegram link for the footer icon. Replace with your own account, e.g.
 * "https://t.me/yourusername".
 */
const TELEGRAM_URL = "https://t.me/+970594808782";

/**
 * Site-wide identity values. Bracketed values are placeholders tracked in
 * PLACEHOLDERS.md — replace them with the real details when provided.
 */
export const site = {
  /** Wordmark / logo text shown in the header and footer. */
  name: "Ahmed Alzamli",
  /** Short professional descriptor used in the footer. */
  role: "English, French & Spanish into Arabic Translator & Localizer",
  /** Primary contact details — shown in the header, contact page and footer. */
  contact: {
    email: "ahmed@artranslated.com",
    /** International format for tel: links. */
    phone: "+970 594 808 782",
    phoneHref: "+970594808782",
    /** WhatsApp uses the number without the leading + or spaces. */
    whatsapp: "970594808782",
    telegram: TELEGRAM_URL,
  },
  /** Canonical public domain (no protocol). */
  domain: "artranslated.com",
  /**
   * Social links shown in the hero. `href: "#"` values are placeholders —
   * replace with the real profile URLs (tracked in PLACEHOLDERS.md).
   * Set an href to "" to hide that item.
   */
  socials: [
    { platform: "linkedin", label: "LinkedIn", href: "#" },
    { platform: "whatsapp", label: "WhatsApp", href: "https://wa.me/970594808782" },
    { platform: "telegram", label: "Telegram", href: TELEGRAM_URL },
  ],
  /**
   * Professional directory / network profiles shown in the footer.
   * `href: "#"` are placeholders — replace with the real profile URLs.
   */
  memberships: [
    { id: "proz", label: "ProZ.com", href: "#" },
    { id: "twb", label: "Translators without Borders", href: "#" },
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
    { src: "/badges/badge-9.jpg", label: "Wordfast", href: "#" },
    { src: "/badges/badge-10.jpg", label: "Partner", href: "#" },
  ],
} as const;

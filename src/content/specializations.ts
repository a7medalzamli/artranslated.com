import { routes } from "@/lib/routes";

/**
 * The five core specializations. Used on the home page and services overview so
 * the two never drift. Content is grounded in the brief; no invented claims.
 */
export type Specialization = {
  slug: string;
  title: string;
  href: string;
  /** One-line summary for cards. */
  summary: string;
};

export const specializations: Specialization[] = [
  {
    slug: "technical",
    title: "Technical",
    href: routes.technical,
    summary:
      "Engineering documentation, manuals and specifications — supported by an environmental engineering background and rigorous terminology control.",
  },
  {
    slug: "legal",
    title: "Legal",
    href: routes.legal,
    summary:
      "Contracts, compliance and legal documentation, handled under strict confidentiality and NDA.",
  },
  {
    slug: "financial",
    title: "Financial",
    href: routes.financial,
    summary:
      "Reports, statements and financial communications translated with precise, consistent terminology.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    href: routes.healthcare,
    summary:
      "Medical and healthcare documentation translated with accuracy, clarity and appropriate register.",
  },
  {
    slug: "audiovisual",
    title: "Audiovisual",
    href: routes.audiovisual,
    summary:
      "Subtitling, transcreation and dubbing adaptation with careful lip-sync alignment for Arabic audiences.",
  },
];

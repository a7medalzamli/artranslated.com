import { routes } from "@/lib/routes";

/**
 * The four trust signals from the brief. These stand in for an ISO
 * certification by making process, tooling, security and expertise explicit.
 */
export type TrustSignal = {
  title: string;
  summary: string;
  href: string;
  linkLabel: string;
};

export const trustSignals: TrustSignal[] = [
  {
    title: "A defined process",
    summary:
      "Every project follows a full TEP workflow — Translation, Editing and Proofreading — so quality is built in, not checked at the end.",
    href: routes.process,
    linkLabel: "See the process",
  },
  {
    title: "Professional tools",
    summary:
      "SDL Trados Studio drives terminology consistency through translation memories and project glossaries and termbases.",
    href: routes.process,
    linkLabel: "Tools & QA",
  },
  {
    title: "Confidentiality first",
    summary:
      "Sensitive files are handled under strict confidentiality, with secure transfers and a readiness to sign NDAs before any file is opened.",
    href: routes.confidentiality,
    linkLabel: "How files are protected",
  },
  {
    title: "Cross-field expertise",
    summary:
      "An environmental engineering degree alongside diplomas in translation and marketing brings genuine subject-matter understanding to each text.",
    href: routes.work,
    linkLabel: "Background & work",
  },
];

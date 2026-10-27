import type { ReactNode } from "react";
import type { Locale } from "@/i18n";
import styles from "./ProcessDiagram.module.css";

const labels: Record<Locale, { aria: string; start: string; end: string }> = {
  en: { aria: "Workflow diagram", start: "Your files", end: "Ready to publish" },
  ar: { aria: "مخطط سير العمل", start: "ملفاتك", end: "جاهز للنشر" },
  fr: { aria: "Schéma du processus", start: "Vos fichiers", end: "Prêt à publier" },
  es: { aria: "Diagrama del proceso", start: "Sus archivos", end: "Listo para publicar" },
};

const svg = (children: ReactNode) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const fileIcon = svg(
  <>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </>,
);

/** One icon per step, in workflow order. */
const stepIcons = [
  // Preparation & terminology
  svg(
    <>
      <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" />
      <path d="M4 21V5M9 8h5M9 12h5" />
    </>,
  ),
  // Translation
  svg(
    <>
      <path d="M3 5h8M7 3v2M5 5c0 4 2.5 7 6 8M9 5c-.5 3-2.5 6-6 8" />
      <path d="m13 21 4-9 4 9M14.5 18h5" />
    </>,
  ),
  // Editing
  svg(
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
    </>,
  ),
  // Proofreading
  svg(
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5M8 11l2 2 4-4" />
    </>,
  ),
  // QA checks & delivery
  svg(
    <>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>,
  ),
];

const publishIcon = svg(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" />
  </>,
);

const arrow = (
  <span className={styles.arrow} aria-hidden="true">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

/**
 * Visual overview of the workflow: client files → each step → ready to publish.
 * Horizontal on wide screens, vertical on phones; mirrors for RTL.
 */
export function ProcessDiagram({ steps, locale }: { steps: { title: string }[]; locale: string }) {
  const l = labels[locale as Locale] ?? labels.en;

  return (
    <figure className={styles.diagram} aria-label={l.aria}>
      <ol className={styles.flow}>
        <li className={`${styles.node} ${styles.endpoint}`}>
          <span className={styles.icon}>{fileIcon}</span>
          <span className={styles.label}>{l.start}</span>
        </li>

        {steps.map((step, i) => (
          <li key={step.title} className={styles.item}>
            {arrow}
            <div className={styles.node}>
              <span className={styles.number}>{i + 1}</span>
              <span className={`${styles.icon} ${styles.iconPrimary}`}>
                {stepIcons[i] ?? stepIcons[stepIcons.length - 1]}
              </span>
              <span className={styles.label}>{step.title}</span>
            </div>
          </li>
        ))}

        <li className={styles.item}>
          {arrow}
          <div className={`${styles.node} ${styles.endpoint} ${styles.done}`}>
            <span className={styles.icon}>{publishIcon}</span>
            <span className={styles.label}>{l.end}</span>
          </div>
        </li>
      </ol>
    </figure>
  );
}

import { Section } from "../Section/Section";
import { JsonLd } from "../JsonLd/JsonLd";
import { LocaleLink } from "../LocaleLink/LocaleLink";
import type { FaqItem } from "@/content/faqs";
import styles from "./Faq.module.css";

/**
 * Questions that open on click. Answers are always in the page HTML (only
 * visually collapsed), and the list is also published as FAQPage data.
 */
export function Faq({ title, items, tinted = false }: { title: string; items: FaqItem[]; tinted?: boolean }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <Section title={title} tinted={tinted} narrow>
      <JsonLd data={ld} />
      <div className={styles.list}>
        {items.map((it, i) => (
          <details key={it.q} className={styles.item} open={i === 0}>
            <summary className={styles.q}>
              <h3 className={styles.qText}>{it.q}</h3>
              <span className={styles.icon} aria-hidden="true" />
            </summary>
            <div className={styles.a}>
              <p>{it.a}</p>
              {it.link &&
                (it.link.href.startsWith("/") ? (
                  <LocaleLink href={it.link.href} className={styles.link}>
                    {it.link.label} →
                  </LocaleLink>
                ) : (
                  <a href={it.link.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                    {it.link.label} ↗
                  </a>
                ))}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}

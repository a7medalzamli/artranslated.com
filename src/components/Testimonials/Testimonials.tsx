import { Section } from "../Section/Section";
import { reviewLabels, reviews } from "@/content/testimonials";
import type { Locale } from "@/i18n";
import styles from "./Testimonials.module.css";

/** Quotation marks as each language writes them. */
const QUOTES: Record<Locale, [string, string]> = { en: ["“", "”"], ar: ["«", "»"], fr: ["« ", " »"], es: ["«", "»"] };

const DATE_LOCALES: Record<Locale, string> = { en: "en-US", ar: "ar-u-nu-latn", fr: "fr-FR", es: "es-ES" };

/** Client reviews from ProZ.com. */
export function Testimonials({ locale, tinted = false }: { locale: string; tinted?: boolean }) {
  const loc = (["en", "ar", "fr", "es"].includes(locale) ? locale : "en") as Locale;
  const l = reviewLabels[loc];
  const fmt = new Intl.DateTimeFormat(DATE_LOCALES[loc], { month: "long", year: "numeric" });

  return (
    <Section title={l.title} intro={l.intro} tinted={tinted}>
      <ul className={styles.grid}>
        {reviews.map((r) => (
          <li key={r.name} className={styles.card}>
            <figure className={styles.figure}>
              <p className={styles.stars} role="img" aria-label={l.stars}>
                ★★★★★
              </p>
              <blockquote className={styles.quote}>
                <p>
                  {QUOTES[loc][0]}
                  {r.quote[loc]}
                  {QUOTES[loc][1]}
                </p>
              </blockquote>
              <figcaption className={styles.caption}>
                <span className={styles.name}>{r.name}</span>
                <span className={styles.company}>{r.company}</span>
                <span className={styles.meta}>
                  {r.tag[loc]} · {fmt.format(new Date(r.date))}
                </span>
                {l.translated && <span className={styles.note}>{l.translated}</span>}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}

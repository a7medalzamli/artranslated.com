import { Section } from "../Section/Section";
import { getAiVisibility } from "@/content/aiVisibility";
import styles from "./AiVisibility.module.css";

/** SEO / AEO / GEO / LLMO cards and the three roles, on the Digital Marketing page. */
export function AiVisibility({ locale }: { locale: string }) {
  const c = getAiVisibility(locale);

  return (
    <Section tinted title={c.title} intro={c.intro}>
      <ul className={styles.roles} aria-label={c.title}>
        {c.roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
      <ul className={styles.grid}>
        {c.cards.map((card) => (
          <li key={card.abbr} className={styles.card}>
            <span className={styles.abbr}>{card.abbr}</span>
            <h3 className={styles.name}>{card.name}</h3>
            <p className={styles.text}>{card.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

import { Section } from "../Section/Section";
import { getSpecializationDetails, type SpecSlug } from "@/content/specializationDetails";
import styles from "./SpecializationDetails.module.css";

/** Translation / SaaS and digital content / Marketing and consulting blocks. */
export function SpecializationDetails({ locale, slug }: { locale: string; slug: SpecSlug }) {
  return (
    <Section tinted>
      <div className={styles.grid}>
        {getSpecializationDetails(locale, slug).map((block) => (
          <div key={block.title} className={styles.block}>
            <h2 className={styles.title}>{block.title}</h2>
            <p>{block.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

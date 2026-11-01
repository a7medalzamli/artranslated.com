import Image from "next/image";
import { LocaleLink as Link } from "../LocaleLink/LocaleLink";
import { Section } from "../Section/Section";
import { getTrust, LINKEDIN, PROZ_PROFILE } from "@/content/trust";
import { routes } from "@/lib/routes";
import styles from "./Trust.module.css";

/** "Why work with me": five verified credibility signals, on service pages. */
export function TrustStrip({ locale, tinted = false }: { locale: string; tinted?: boolean }) {
  const t = getTrust(locale).strip;
  return (
    <Section tinted={tinted} title={t.title}>
      <ul className={styles.strip}>
        {t.items.map((item) => (
          <li key={item.title} className={styles.item}>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.itemTitle}>
                {item.title} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className={styles.itemTitle}>{item.title}</span>
            )}
            <span className={styles.itemText}>{item.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** Author box under blog articles: who wrote it and why they are credible. */
export function AuthorBox({ locale }: { locale: string }) {
  const a = getTrust(locale).author;
  return (
    <aside className={styles.author} aria-label={a.label}>
      <Image src="/portrait.jpg" alt="Ahmed Alzamli" width={96} height={96} className={styles.photo} />
      <div>
        <p className={styles.authorLabel}>{a.label}</p>
        <p className={styles.authorName}>Ahmed Alzamli</p>
        <p className={styles.authorRole}>{a.role}</p>
        <p className={styles.authorBio}>{a.bio}</p>
        <p className={styles.authorLinks}>
          <Link href={routes.about}>{a.about}</Link>
          <a href={PROZ_PROFILE} target="_blank" rel="noopener noreferrer">
            {a.proz}
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            {a.linkedin}
          </a>
        </p>
      </div>
    </aside>
  );
}

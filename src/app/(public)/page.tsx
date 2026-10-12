import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { Reveal } from "@/components/Reveal/Reveal";
import { CountUp } from "@/components/CountUp/CountUp";
import { AvailabilityHours } from "@/components/AvailabilityHours/AvailabilityHours";
import { Flag, type LanguageCode } from "@/components/Flag/Flag";
import { getHomeContent } from "@/lib/content/getHomeContent";
import { experienceStats } from "@/content/stats";
import { routes } from "@/lib/routes";
import { siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const professionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "Website translation and localization into English and Arabic, plus English, French and Spanish into Arabic translation across technical, legal, financial, healthcare and audiovisual specializations.",
  url: siteUrl,
  areaServed: "Worldwide",
  availableLanguage: ["English", "French", "Spanish", "Arabic"],
  email: site.contact.email,
  telephone: site.contact.phone,
  serviceType: [
    "Website localization",
    "Technical translation",
    "Legal translation",
    "Financial translation",
    "Healthcare translation",
    "Audiovisual translation",
  ],
};

const languages: { code: LanguageCode; name: string }[] = [
  { code: "en", name: "English" },
  { code: "ar", name: "Arabic" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
];

export default async function HomePage() {
  const content = await getHomeContent();

  return (
    <>
      <JsonLd data={professionalService} />

      {/* ---- Hero ---- */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            {content.hero.label && <p className={styles.heroLabel}>{content.hero.label}</p>}
            <h1 className={styles.heroTitle}>{content.hero.title}</h1>
            {content.hero.lead && <p className={styles.heroLead}>{content.hero.lead}</p>}
            <div className={styles.heroActions}>
              <Button href={routes.contact} variant="primary" size="lg">
                Let&apos;s talk
              </Button>
              <Link href={routes.services} className={styles.heroSecondary}>
                Explore services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Languages ---- */}
      <section className={styles.languages} aria-labelledby="languages-title">
        <Container>
          <h2 id="languages-title" className={styles.languagesTitle}>
            Languages I work in
          </h2>
          <ul className={styles.languageList}>
            {languages.map((lang, i) => (
              <Reveal as="li" key={lang.code} from="up" delay={i * 80} className={styles.languageItem}>
                <Flag code={lang.code} size={34} />
                <span>{lang.name}</span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- Past experience (animated counters) ---- */}
      <section className={`${styles.stats} ${styles.tinted}`} aria-labelledby="stats-title">
        <Container>
          <div className={styles.servicesHead}>
            <p className={styles.label}>Past experience</p>
            <h2 id="stats-title" className={styles.servicesTitle}>
              A track record agencies trust
            </h2>
          </div>
          <ul className={styles.statGrid}>
            {experienceStats.map((stat) => (
              <li key={stat.id} className={styles.statItem}>
                <span className={styles.statValue}>
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- Availability ---- */}
      <section className={styles.availability} aria-labelledby="availability-title">
        <Container>
          <Reveal from="up" className={styles.availabilityCard}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            <div>
              <p className={styles.label}>Availability</p>
              <h2 id="availability-title" className={styles.availabilityTitle}>
                Currently accepting new projects
              </h2>
              <AvailabilityHours />
            </div>
            <Button href={routes.contact} variant="primary" size="lg">
              Let&apos;s talk
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* ---- Why partner / QA ---- */}
      <section className={styles.section}>
        <Container className={styles.wideContainer}>
          <div className={styles.whyHead}>
            <p className={styles.label}>{content.why.eyebrow}</p>
            <h2 className={styles.whyTitle}>{content.why.title}</h2>
            <p className={styles.whyIntro}>{content.why.intro}</p>
          </div>
          <ul className={styles.whyList}>
            {content.why.items.map((item, i) => (
              <Reveal as="li" key={item.title} from="up" delay={(i % 3) * 90} className={styles.whyItem}>
                <span className={styles.whyCheck} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="m5 12 5 5 9-11"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className={styles.whyItemTitle}>{item.title}</h3>
                  <p className={styles.whyItemText}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- Partners / credentials ---- */}
      <section className={styles.partners} aria-label="Partners">
        <Container>
          <ul className={styles.partnerList}>
            {content.partners.map((badge, i) => (
              <li key={`${badge.src}-${i}`} className={styles.partnerItem}>
                <Image
                  src={badge.src}
                  alt={badge.label}
                  width={280}
                  height={140}
                  className={styles.partnerImg}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

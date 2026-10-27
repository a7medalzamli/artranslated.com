import type { Metadata } from "next";
import { LocaleLink as Link } from "@/components/LocaleLink/LocaleLink";
import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { Reveal } from "@/components/Reveal/Reveal";
import { CountUp } from "@/components/CountUp/CountUp";
import { AvailabilityHours } from "@/components/AvailabilityHours/AvailabilityHours";
import { Flag, type LanguageCode } from "@/components/Flag/Flag";
import { getLocalizedHome } from "@/lib/content/getLocalizedHome";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import { siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  return buildCmsMetadata({
    path: "",
    locale,
    defaultTitle: "Website Translation & Localization into English & Arabic | Ahmed Alzamli",
    defaultDescription: "Website translation and localization into English and Arabic, plus English, French and Spanish into Arabic translation across technical, legal, financial, healthcare and audiovisual specializations.",
    seo: t.seo.home,
  });
}

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

const languageCodes: LanguageCode[] = ["en", "ar", "fr", "es"];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const content = await getLocalizedHome(loc);
  const t = await getContent(loc);

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
                {t.common.letsTalk}
              </Button>
              <Link href={routes.services} className={styles.heroSecondary}>
                {t.common.exploreServices}
              </Link>
            </div>

            <div className={styles.heroLanguages} aria-labelledby="languages-title">
              <h2 id="languages-title" className={styles.languagesTitle}>
                {t.home.languagesTitle}
              </h2>
              <ul className={styles.languageList}>
                {languageCodes.map((code, i) => (
                  <Reveal
                    as="li"
                    key={code}
                    from="up"
                    delay={i * 80}
                    className={styles.languageItem}
                  >
                    <Flag code={code} size={34} />
                    <span>{t.home.langNames[code]}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Past experience (animated counters) ---- */}
      <section className={`${styles.stats} ${styles.tinted}`} aria-labelledby="stats-title">
        <Container>
          <div className={styles.servicesHead}>
            <p className={styles.label}>{t.home.pastExperienceEyebrow}</p>
            <h2 id="stats-title" className={styles.servicesTitle}>
              {t.home.pastExperienceTitle}
            </h2>
          </div>
          <ul className={styles.statGrid}>
            {(["years", "words", "projects", "languages"] as const).map((id) => (
              <li key={id} className={styles.statItem}>
                <span className={styles.statValue}>
                  <CountUp value={t.home.statValues[id].value} suffix={t.home.statValues[id].suffix} />
                </span>
                <span className={styles.statLabel}>{t.home.stats[id]}</span>
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
              <h2 id="availability-title" className={styles.availabilityTitle}>
                {t.home.availabilityEyebrow}
              </h2>
              <AvailabilityHours labels={t.home.availability} />
            </div>
            <Button href={routes.contact} variant="primary" size="lg">
              {t.common.letsTalk}
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* ---- Why partner / QA ---- */}
      <section className={styles.section}>
        <Container>
          <div className={styles.whyHead}>
            {content.why.eyebrow && <p className={styles.label}>{content.why.eyebrow}</p>}
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

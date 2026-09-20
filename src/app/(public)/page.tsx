import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { CTA } from "@/components/CTA/CTA";
import { LanguageSample } from "@/components/LanguageSample/LanguageSample";
import { SocialLinks } from "@/components/SocialLinks/SocialLinks";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { specializations } from "@/content/specializations";
import { trustSignals } from "@/content/trustSignals";
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
    "Professional English, French and Spanish into Arabic translation across technical, legal, financial, healthcare and audiovisual specializations.",
  url: siteUrl,
  areaServed: "Worldwide",
  availableLanguage: ["English", "French", "Spanish", "Arabic"],
  serviceType: [
    "Technical translation",
    "Legal translation",
    "Financial translation",
    "Healthcare translation",
    "Audiovisual translation",
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={professionalService} />
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <p className={styles.label}>English &middot; French &middot; Spanish &rarr; Arabic</p>
              <h1 className={styles.title}>
                Precise Arabic translation agencies and companies can rely on
              </h1>
              <p className={styles.lead}>
                Technical, legal, financial, healthcare and audiovisual specializations &mdash;
                delivered with a full Translation&ndash;Editing&ndash;Proofreading workflow and SDL
                Trados terminology control.
              </p>
              <div className={styles.actions}>
                <Button href={routes.contact} size="lg">
                  Request a quote
                </Button>
                <Button href={routes.services} variant="secondary" size="lg">
                  Explore services
                </Button>
              </div>
              <SocialLinks className={styles.heroSocials} />
            </div>
            <LanguageSample />
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <p className={styles.label}>Specializations</p>
          <p className={styles.sectionLead}>
            Focused expertise where accuracy and terminology matter most.
          </p>
          <ul className={styles.index}>
            {specializations.map((item) => (
              <li key={item.slug} className={styles.indexRow}>
                <Link href={item.href} className={styles.indexTerm}>
                  {item.title}
                </Link>
                <p className={styles.indexDesc}>{item.summary}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.tinted}`}>
        <Container>
          <div className={styles.split}>
            <div className={styles.splitAside}>
              <p className={styles.label}>Why clients trust the work</p>
              <p className={styles.sectionLead}>
                In place of a certification logo, four concrete signals: a defined process, the
                right tools, strict confidentiality and genuine subject-matter expertise.
              </p>
            </div>
            <div className={styles.splitMain}>
              {trustSignals.map((signal) => (
                <div key={signal.title} className={styles.trustItem}>
                  <h2 className={styles.trustTitle}>{signal.title}</h2>
                  <p className={styles.trustDesc}>{signal.summary}</p>
                  <Link href={signal.href} className={styles.trustLink}>
                    {signal.linkLabel} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Have a project in mind?"
        description="Tell me your language pair, specialization and deadline, and I'll get back to you with a clear quote."
        primary={{ label: "Request a quote", href: routes.contact }}
        secondary={{ label: "See how I work", href: routes.process }}
      />
    </>
  );
}

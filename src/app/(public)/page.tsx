import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { CTA } from "@/components/CTA/CTA";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { LanguageSample } from "@/components/LanguageSample/LanguageSample";
import { ServiceIcon } from "@/components/ServiceIcon/ServiceIcon";
import { specializations } from "@/content/specializations";
import { homeServices } from "@/content/homeServices";
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
          <div className={styles.heroInner}>
            <p className={styles.heroLabel}>
              English &middot; French &middot; Spanish &rarr; Arabic
            </p>
            <h1 className={styles.heroTitle}>
              Precise Arabic translation agencies and companies can rely on
            </h1>
            <p className={styles.heroLead}>
              Technical, legal, financial, healthcare and audiovisual specializations &mdash;
              delivered with a full Translation&ndash;Editing&ndash;Proofreading workflow and SDL
              Trados terminology control.
            </p>
            <div className={styles.heroActions}>
              <Button href={routes.contact} variant="accent" size="lg">
                Request a quote
              </Button>
              <Link href={routes.services} className={styles.heroSecondary}>
                Explore services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.about} id="about">
        <Container>
          <div className={styles.aboutGrid}>
            <Image
              src="/portrait.jpg"
              alt="Ahmed Alzamli"
              width={640}
              height={640}
              className={styles.portrait}
              priority
            />
            <div>
              <h2 className={styles.aboutTitle}>About me</h2>
              <p className={styles.aboutText}>{site.role}.</p>
              <Button href={routes.work} variant="secondary">
                Read my background
              </Button>
            </div>
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

      <section className={styles.services}>
        <Container>
          <div className={styles.servicesHead}>
            <p className={styles.label}>Our expertise</p>
            <h2 className={styles.servicesTitle}>Specialized translation services</h2>
          </div>
          <div className={styles.serviceGrid}>
            {homeServices.map((service) => (
              <div key={service.title} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>
                  <ServiceIcon name={service.icon} />
                </span>
                <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                <p className={styles.serviceCardText}>{service.summary}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.tinted}`}>
        <Container>
          <div className={styles.whyGrid}>
            <div>
              <p className={styles.label}>The advantage</p>
              <h2 className={styles.whyTitle}>Why partner with me?</h2>
              <p className={styles.whyIntro}>
                Reaching the Arabic market takes cultural intelligence, technical precision and
                reliability &mdash; not just language.
              </p>
              <ul className={styles.whyList}>
                {[
                  {
                    title: "Meticulous quality assurance",
                    text: "A full Translation–Editing–Proofreading review keeps quality and tone consistent.",
                  },
                  {
                    title: "Industry-standard tools",
                    text: "SDL Trados translation memories and termbases ensure consistency and efficiency.",
                  },
                  {
                    title: "Cultural & terminology accuracy",
                    text: "Content is adapted so it reads naturally and correctly for the target audience.",
                  },
                ].map((item) => (
                  <li key={item.title} className={styles.whyItem}>
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
                  </li>
                ))}
              </ul>
            </div>
            <LanguageSample />
          </div>
        </Container>
      </section>

      <section className={styles.partners} aria-label="Partners">
        <Container>
          <ul className={styles.partnerList}>
            {site.badges.map((badge, i) => (
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

      <CTA
        title="Have a project in mind?"
        description="Tell me your language pair, specialization and deadline, and I'll get back to you with a clear quote."
        primary={{ label: "Request a quote", href: routes.contact }}
        secondary={{ label: "See how I work", href: routes.process }}
      />
    </>
  );
}

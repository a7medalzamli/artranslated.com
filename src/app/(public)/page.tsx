import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { ServiceIcon } from "@/components/ServiceIcon/ServiceIcon";
import { QuoteForm } from "./contact/QuoteForm";
import { getHomeContent } from "@/lib/content/getHomeContent";
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

export default async function HomePage() {
  const content = await getHomeContent();

  return (
    <>
      <JsonLd data={professionalService} />
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            <p className={styles.heroLabel}>{content.hero.label}</p>
            <h1 className={styles.heroTitle}>{content.hero.title}</h1>
            <p className={styles.heroLead}>{content.hero.lead}</p>
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
              src={content.about.image}
              alt={site.name}
              width={640}
              height={640}
              className={styles.portrait}
              priority
            />
            <div>
              <h2 className={styles.aboutTitle}>{content.about.title}</h2>
              <p className={styles.aboutText}>{content.about.text}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.services}>
        <Container>
          <div className={styles.servicesHead}>
            <p className={styles.label}>{content.services.eyebrow}</p>
            <h2 className={styles.servicesTitle}>{content.services.title}</h2>
          </div>
          <div className={styles.serviceGrid}>
            {content.services.items.map((service) => (
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
          <div className={styles.whyHead}>
            <p className={styles.label}>{content.why.eyebrow}</p>
            <h2 className={styles.whyTitle}>{content.why.title}</h2>
            <p className={styles.whyIntro}>{content.why.intro}</p>
          </div>
          <ul className={styles.whyList}>
            {content.why.items.map((item) => (
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
        </Container>
      </section>

      <section className={styles.contact} id="contact">
        <Container>
          <div className={styles.contactHead}>
            <p className={styles.label}>{content.contact.eyebrow}</p>
            <h2 className={styles.contactTitle}>{content.contact.title}</h2>
            <p className={styles.contactIntro}>{content.contact.intro}</p>
          </div>
          <div className={styles.contactCard}>
            <QuoteForm />
          </div>
        </Container>
      </section>

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

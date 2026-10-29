import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { courses, getAboutPage, volunteering, webinars } from "@/content/aboutPage";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";
import styles from "./about.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  const a = getAboutPage(locale);
  return buildCmsMetadata({
    path: "/about",
    locale,
    defaultTitle: a.title,
    defaultDescription: a.lead,
    seo: t.seo.about,
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = await getContent(locale as Locale);
  const a = getAboutPage(locale);

  return (
    <>
      {/* Top box: short heading */}
      <header className={styles.header}>
        <Container>
          <h1 className={styles.heading}>{a.heading}</h1>
        </Container>
      </header>

      {/* What I offer */}
      <Section>
        <p className={styles.lead}>{a.lead}</p>
        <ul className={styles.offerings}>
          {a.offerings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Portrait beside the introduction */}
      <Section tinted>
        <div className={styles.bioGrid}>
          <Image
            src="/portrait.jpg"
            alt={site.name}
            width={560}
            height={560}
            className={styles.portrait}
            priority
          />
          <p className={styles.introText}>{a.intro}</p>
        </div>
      </Section>

      <Section title={a.approach.title} intro={a.approach.text}>
        <ul className={styles.credentials}>
          {a.approach.credentials.map((cred) => (
            <li key={cred.title} className={styles.credential}>
              <h3 className={styles.credentialTitle}>{cred.title}</h3>
              <p className={styles.credentialText}>{cred.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={a.journey.title} tinted>
        <div className="prose">
          {a.journey.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <Section title={a.commitment.title}>
        <div className="prose">
          {a.commitment.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Professional development */}
      <Section tinted>
        <div className={styles.twoCol}>
          <div>
            <h2 className={styles.listTitle}>{a.webinarsTitle}</h2>
            <ul className={styles.list} dir="ltr">
              {webinars.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.listTitle}>{a.coursesTitle}</h2>
            <ul className={styles.list} dir="ltr">
              {courses.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Volunteering and memberships */}
      <Section>
        <div className={styles.twoCol}>
          <div>
            <h2 className={styles.listTitle}>{a.volunteerTitle}</h2>
            <ul className={styles.list}>
              {volunteering.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.listTitle}>{a.membershipsTitle}</h2>
            <ul className={styles.list}>
              {a.memberships.map((m) => (
                <li key={m.name}>
                  <strong>{m.name}:</strong>{" "}
                  {m.href ? (
                    <a href={m.href} target="_blank" rel="noopener noreferrer">
                      {m.text}
                    </a>
                  ) : (
                    m.text
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTA
        title={c.about.ctaTitle}
        description={c.about.ctaDescription}
        primary={{ label: c.common.letsTalk, href: routes.contact }}
        secondary={{ label: c.about.howItWorks, href: routes.process }}
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
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
  return buildCmsMetadata({
    path: "/about",
    locale,
    defaultTitle: t.about.title,
    defaultDescription: t.about.description,
    seo: t.seo.about,
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = await getContent(locale as Locale);
  const t = c.about;

  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        breadcrumbs={[{ label: c.common.homeCrumb, href: routes.home }, { label: t.crumb }]}
      />

      <Section>
        <div className={styles.bioGrid}>
          <Image
            src="/portrait.jpg"
            alt={site.name}
            width={560}
            height={560}
            className={styles.portrait}
            priority
          />
          <div className="prose">
            {t.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <CTA
        title={t.ctaTitle}
        description={t.ctaDescription}
        primary={{ label: c.common.letsTalk, href: routes.contact }}
        secondary={{ label: t.howItWorks, href: routes.process }}
      />
    </>
  );
}

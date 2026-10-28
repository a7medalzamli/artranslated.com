import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Container } from "@/components/Container/Container";
import { CTA } from "@/components/CTA/CTA";
import { LocaleLink as Link } from "@/components/LocaleLink/LocaleLink";
import { getServicePages, serviceImages, serviceSlugs, type ServiceSlug } from "@/content/servicePages";
import { getContent } from "@/i18n/content";
import { getDictionary } from "@/i18n";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import styles from "./services.module.css";

/** Dictionary key for each service's menu label. */
const menuKey = {
  translation: "translation",
  mtpe: "mtpe",
  transcreation: "transcreation",
  consulting: "consulting",
  "ai-data-annotation": "aiDataAnnotation",
  "digital-marketing": "digitalMarketing",
} as const satisfies Record<ServiceSlug, string>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  return buildCmsMetadata({
    path: "/services",
    locale,
    defaultTitle: t.services.title,
    defaultDescription: t.services.description,
    seo: t.seo.services,
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  const dict = getDictionary(locale as Locale);
  const { overview } = getServicePages(locale);

  const services = serviceSlugs.map((slug) => ({
    slug,
    name: dict.serviceMenu[menuKey[slug]],
    ...overview.items[slug],
  }));

  return (
    <>
      <PageHeader title={t.services.title} description={t.services.description} />

      {/* ---- "I can help with": tiles that jump to each section below ---- */}
      <section className={styles.help}>
        <Container>
          <h2 className={styles.helpTitle}>{overview.helpTitle}</h2>
          <ul className={styles.tiles}>
            {services.map((s) => (
              <li key={s.slug}>
                <a href={`#${s.slug}`} className={styles.tile}>
                  <span className={styles.tileIcon}>{icons[s.slug]}</span>
                  <span className={styles.tileName}>{s.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- One section per service: photo on one side, text on the other ---- */}
      <div className={styles.list}>
        <Container>
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className={`${styles.row} ${i % 2 === 1 ? styles.reverse : ""}`}
            >
              <div className={styles.media}>
                <Image
                  src={serviceImages[s.slug]}
                  alt=""
                  fill
                  sizes="(min-width: 60em) 45vw, 100vw"
                />
              </div>
              <div className={styles.text}>
                <h2 className={styles.name}>{s.name}</h2>
                <p className={styles.question}>{s.question}</p>
                <p className={styles.body}>{s.text}</p>
                <Link href={`/services/${s.slug}`} className={styles.more}>
                  {overview.learnMore}
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </div>

      <CTA
        title={t.services.ctaTitle}
        description={t.services.ctaDescription}
        primary={{ label: t.common.letsTalk, href: routes.contact }}
        secondary={{ label: t.common.seeProcess, href: routes.process }}
      />
    </>
  );
}

const icon = (children: ReactNode) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const icons: Record<ServiceSlug, ReactNode> = {
  // Two scripts
  translation: icon(
    <>
      <path d="M3 5h8M7 3v2M5 5c0 4 2.5 7 6 8M9 5c-.5 3-2.5 6-6 8" />
      <path d="m13 21 4-9 4 9M14.5 18h5" />
    </>,
  ),
  // Document being corrected
  mtpe: icon(
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4" />
      <path d="M14 3v5h5M9 9h3M9 13h4" />
      <path d="M18.5 13.5a1.6 1.6 0 0 1 2.3 2.3L16 20.6l-3 .7.7-3z" />
    </>,
  ),
  // Pen nib
  transcreation: icon(
    <>
      <path d="m12 19 7-7 3 3-7 7z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18z" />
      <path d="m2 2 7.6 7.6" />
      <circle cx="11" cy="11" r="2" />
    </>,
  ),
  // Conversation
  consulting: icon(
    <>
      <path d="M21 12a8 8 0 0 1-11.7 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
      <path d="M9 11h.01M12 11h.01M15 11h.01" />
    </>,
  ),
  // Chip
  "ai-data-annotation": icon(
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M10 10h4v4h-4zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </>,
  ),
  // Megaphone
  "digital-marketing": icon(
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1z" />
      <path d="M17 9a4 4 0 0 1 0 6M20 6.5a8 8 0 0 1 0 11" />
    </>,
  ),
};

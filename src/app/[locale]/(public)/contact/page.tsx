import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Container } from "@/components/Container/Container";
import { QuoteForm } from "./QuoteForm";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { getLocalizedHome } from "@/lib/content/getLocalizedHome";
import type { Locale } from "@/i18n";
import { site } from "@/lib/site";
import styles from "./contact.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  return buildCmsMetadata({
    path: "/contact",
    locale,
    defaultTitle: t.contact.title,
    defaultDescription: t.contact.description,
    seo: t.seo.contact,
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const t = await getContent(loc);
  const c = t.contact;
  const home = await getLocalizedHome(loc);
  const specializationOptions = t.cards.specializations.map((s) => s.title);
  const serviceOptions = home.services.items.map((s) => s.title);

  return (
    <>
      <PageHeader title={c.title} />

      <Container className="section-pad">
        <p className={styles.lead}>{c.lead}</p>
        <div className={styles.intro}>
          <div className={styles.introText}>
            <p style={{ fontSize: "var(--font-size-lg)", marginBottom: "var(--space-lg)" }}>
              {c.directIntro}{" "}
              <a href={`mailto:${site.contact.email}`} style={{ fontWeight: 600 }}>
                {site.contact.email}
              </a>{" "}
              {c.directOr}{" "}
              <a href={`tel:${site.contact.phoneHref}`} style={{ fontWeight: 600 }}>
                {site.contact.phone}
              </a>
              .
            </p>
          </div>

          <div className={styles.introMedia}>
            <Image
              src="/images/photos/contact.jpg"
              alt=""
              fill
              sizes="(min-width: 60em) 40vw, 100vw"
              priority
            />
          </div>
        </div>

        <div className="section-gap">
          <QuoteForm
            labels={t.form}
            specializationOptions={specializationOptions}
            serviceOptions={serviceOptions}
          />
        </div>
      </Container>
    </>
  );
}

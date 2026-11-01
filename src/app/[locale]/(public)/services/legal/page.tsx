import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { SpecializationDetails } from "@/components/SpecializationDetails/SpecializationDetails";
import { RelatedGuides } from "@/components/RelatedGuides/RelatedGuides";
import { TrustStrip } from "@/components/Trust/Trust";
import { getContent, getStaticContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  return buildCmsMetadata({
    path: "/services/legal",
    locale,
    defaultTitle: t.serviceDetail.legal.title,
    defaultDescription: t.serviceDetail.legal.description,
    seo: t.seo.legal,
  });
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  // Page text always from code (an older CMS copy could hide updates).
  const s = getStaticContent(locale as Locale).serviceDetail.legal;

  return (
    <>
      <PageHeader
        eyebrow={t.serviceDetail.eyebrow}
        title={s.title}
        description={s.description}
        locale={locale}
        breadcrumbs={[
          { label: t.common.homeCrumb, href: routes.home },
          { label: t.services.crumb, href: routes.services },
          { label: s.crumb },
        ]}
      />

      <Section title={s.s1Title}>
        <div className="prose">
          <p>{s.s1p1}</p>
          <p>{s.s1p2}</p>
        </div>
      </Section>

      <Section tinted title={s.s2Title}>
        <div className="prose">
          <ul>
            {s.s2List.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <SpecializationDetails locale={locale} slug="legal" />
      <TrustStrip locale={locale} />
      <RelatedGuides locale={locale} clusters={["industries"]} tinted />

      <CTA
        title={s.ctaTitle}
        description={s.ctaDescription}
        primary={{ label: t.common.letsTalk, href: routes.contact }}
        secondary={{ label: t.common.confidentiality, href: routes.confidentiality }}
      />
    </>
  );
}

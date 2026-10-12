import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { getContent } from "@/i18n/content";
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
    path: "/services/financial",
    locale,
    defaultTitle: t.serviceDetail.financial.title,
    defaultDescription: t.serviceDetail.financial.description,
    seo: t.seo.financial,
  });
}

export default async function FinancialPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  const s = t.serviceDetail.financial;

  return (
    <>
      <PageHeader
        eyebrow={t.serviceDetail.eyebrow}
        title={s.title}
        description={s.description}
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

      <CTA
        title={s.ctaTitle}
        description={s.ctaDescription}
        primary={{ label: t.common.letsTalk, href: routes.contact }}
        secondary={{ label: t.common.seeProcess, href: routes.process }}
      />
    </>
  );
}

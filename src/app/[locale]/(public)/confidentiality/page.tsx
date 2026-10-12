import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  alternates: { canonical: "/confidentiality" },
  title: "Confidentiality & Data Security",
  description:
    "How confidential files are handled: NDAs signed before files are opened, secure transfers, careful storage and a clear data-retention policy.",
};

export default async function ConfidentialityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getContent(locale as Locale);
  const c = t.confidentiality;

  return (
    <>
      <PageHeader
        title={c.title}
        description={c.description}
        breadcrumbs={[{ label: t.common.homeCrumb, href: routes.home }, { label: c.crumb }]}
      />

      <Section title={c.ndaTitle}>
        <div className="prose">
          <p>{c.ndaText}</p>
        </div>
      </Section>

      <Section tinted title={c.transfersTitle}>
        <div className="prose">
          <p>{c.transfersText}</p>
        </div>
      </Section>

      <Section title={c.storageTitle}>
        <div className="prose">
          <p>{c.storageText}</p>
        </div>
      </Section>

      <Section tinted title={c.retentionTitle}>
        <div className="prose">
          <p>{c.retentionText}</p>
        </div>
      </Section>

      <CTA
        title={c.ctaTitle}
        description={c.ctaDescription}
        primary={{ label: t.common.letsTalk, href: routes.contact }}
        secondary={{ label: t.common.seeProcess, href: routes.process }}
      />
    </>
  );
}

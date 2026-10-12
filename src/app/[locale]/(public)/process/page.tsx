import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { ProcessSteps } from "@/components/ProcessSteps/ProcessSteps";
import { CTA } from "@/components/CTA/CTA";
import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  alternates: { canonical: "/process" },
  title: "How it works?",
  description:
    "How it works — the TEP (Translation, Editing, Proofreading) workflow, quality-assurance policy and SDL Trados tools behind every Arabic translation and localization project.",
};

export default async function ProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  const p = t.process;

  return (
    <>
      <PageHeader
        eyebrow={p.eyebrow}
        title={p.title}
        description={p.description}
        breadcrumbs={[{ label: t.common.homeCrumb, href: routes.home }, { label: p.crumb }]}
      />

      <Section title={p.tepTitle} intro={p.tepIntro}>
        <ProcessSteps steps={p.steps} />
      </Section>

      <Section tinted title={p.qaTitle}>
        <div className="prose">
          {p.qaParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Section>

      <Section title={p.toolsTitle}>
        <div className="prose">
          <ul>
            {p.tools.map((tool) => (
              <li key={tool.name}>
                <strong>{tool.name}</strong> — {tool.text}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTA
        title={p.ctaTitle}
        description={p.ctaDescription}
        primary={{ label: t.common.letsTalk, href: routes.contact }}
        secondary={{ label: t.common.confidentiality, href: routes.confidentiality }}
      />
    </>
  );
}

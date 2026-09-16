import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { ProcessSteps } from "@/components/ProcessSteps/ProcessSteps";
import { CTA } from "@/components/CTA/CTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Process & QA",
  description:
    "The TEP (Translation, Editing, Proofreading) workflow, quality-assurance policy and SDL Trados tools behind every Arabic translation project.",
};

const tepSteps = [
  {
    title: "Preparation & terminology",
    description:
      "Analyze the source, confirm or build a project glossary and termbase, and set up the project in SDL Trados with the relevant translation memory.",
  },
  {
    title: "Translation",
    description:
      "Translate with terminology control and translation-memory leverage, keeping meaning, tone and consistency intact.",
  },
  {
    title: "Editing",
    description:
      "Compare the translation against the source for accuracy, completeness and consistency, refining terminology and style.",
  },
  {
    title: "Proofreading",
    description:
      "Read the Arabic on its own for language, flow, formatting and typography — catching anything a bilingual pass can miss.",
  },
  {
    title: "QA checks & delivery",
    description:
      "Run automated QA checks (terminology, numbers, tags and consistency), resolve any flags, then deliver in the required format.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        title="Process & QA"
        description="Quality is built in through a defined workflow — not bolted on at the end."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Process & QA" }]}
      />

      <Section
        title="The TEP workflow"
        intro="Every project runs through Translation, Editing and Proofreading, with terminology and QA around it."
      >
        <ProcessSteps steps={tepSteps} />
      </Section>

      <Section tinted title="Quality-assurance policy">
        <div className="prose">
          <p>
            Quality assurance combines automated checks with human judgement. Automated checks in
            SDL Trados flag terminology mismatches, number and tag errors and inconsistencies; a
            human editing and proofreading pass ensures the Arabic reads naturally and accurately.
          </p>
          <p>
            Terminology decisions are captured in glossaries and termbases so they carry forward to
            future work, and translation memories keep updated or repeat content consistent.
          </p>
        </div>
      </Section>

      <Section title="Tools">
        <div className="prose">
          <ul>
            <li>
              <strong>SDL Trados Studio</strong> — the core CAT environment for translation and QA
            </li>
            <li>
              <strong>Translation memories</strong> — consistency across large and updated documents
            </li>
            <li>
              <strong>Glossaries &amp; termbases</strong> — controlled, client-approved terminology
            </li>
          </ul>
        </div>
      </Section>

      <CTA
        title="Want this level of care on your project?"
        description="Tell me what you're working on and I'll explain exactly how it would be handled."
        primary={{ label: "Request a quote", href: routes.contact }}
        secondary={{ label: "Confidentiality", href: routes.confidentiality }}
      />
    </>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Technical Translation into Arabic",
  description:
    "English, French and Spanish to Arabic technical translation for engineering documentation, manuals and specifications — with MTPE, digital product testing and AI data annotation.",
};

export default function TechnicalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Specialization"
        title="Technical translation into Arabic"
        description="Engineering and industrial documentation translated by someone who understands the subject, not just the words."
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: "Technical" },
        ]}
      />

      <Section title="Subject-matter understanding, not just language">
        <div className="prose">
          <p>
            A degree in environmental engineering means technical source texts are read the way the
            author intended — the concepts, units and standards behind the terminology are familiar,
            so the Arabic reads correctly to specialists in the field.
          </p>
          <p>
            Consistency is enforced with SDL Trados Studio: project glossaries and termbases keep
            key terms uniform, and translation memories keep long or frequently updated documents
            aligned from one version to the next.
          </p>
        </div>
      </Section>

      <Section tinted title="What I translate">
        <div className="prose">
          <ul>
            <li>Engineering manuals, user guides and operating procedures</li>
            <li>Technical specifications and datasheets</li>
            <li>Environmental and engineering reports</li>
            <li>Safety, standards and compliance documentation</li>
            <li>Product and equipment documentation</li>
          </ul>
        </div>
      </Section>

      <Section title="Related technical services">
        <div className="prose">
          <p>Technical projects often pair translation with:</p>
          <ul>
            <li>
              <strong>Machine translation post-editing (MTPE)</strong> — bringing machine output up
              to human quality while keeping turnaround efficient.
            </li>
            <li>
              <strong>Digital product testing</strong> — checking localized interfaces in context
              for layout, truncation and usability issues.
            </li>
            <li>
              <strong>AI data annotation &amp; evaluation (RLHF)</strong> — assessing and improving
              AI-generated Arabic output.
            </li>
          </ul>
          <p>
            See the full list on the <a href={routes.services}>services overview</a>.
          </p>
        </div>
      </Section>

      <CTA
        title="Have technical documentation to translate?"
        description="Share the language pair, subject area and deadline for a clear quote."
        primary={{ label: "Request a quote", href: routes.contact }}
        secondary={{ label: "How I work", href: routes.process }}
      />
    </>
  );
}

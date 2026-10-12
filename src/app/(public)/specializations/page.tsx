import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { specializations } from "@/content/specializations";
import { routes } from "@/lib/routes";
import styles from "./specializations.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/specializations" },
  title: "Specializations",
  description:
    "Fields I specialize in — technical, legal, financial, healthcare and audiovisual translation and localization into Arabic.",
};

export default function SpecializationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Specializations"
        title="Fields I specialize in"
        description="Deep, domain-specific experience across the areas where accuracy and terminology matter most."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Specializations" }]}
      />

      <Section>
        <ul className={styles.index}>
          {specializations.map((spec) => (
            <li key={spec.slug} className={styles.indexRow}>
              <Link href={spec.href} className={styles.indexTerm}>
                {spec.title}
              </Link>
              <p className={styles.indexDesc}>{spec.summary}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTA
        title="Have a project in one of these fields?"
        description="Tell me what you're working on and I'll reply with a clear, honest quote."
        primary={{ label: "Let's talk", href: routes.contact }}
        secondary={{ label: "View services", href: routes.services }}
      />
    </>
  );
}

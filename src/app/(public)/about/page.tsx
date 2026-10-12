import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description:
    "Ahmed Alzamli — a specialist translator and localizer working into English and Arabic, with an environmental-engineering and marketing background and a rigorous TEP quality workflow.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About Ahmed Alzamli"
        description="A specialist translator and localizer helping agencies and companies reach Arabic- and English-speaking audiences with accuracy, cultural nuance and dependable delivery."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "About" }]}
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
            <p>
              I translate and localize websites and digital products into{" "}
              <strong>English</strong> and <strong>Arabic</strong>, and translate specialized
              documentation from English, French and Spanish into Arabic. My goal is simple: content
              that reads as though it was written for its audience — never merely converted word for
              word.
            </p>
            <p>
              My background combines <strong>environmental engineering</strong> and a{" "}
              <strong>marketing diploma</strong>, which is why technical precision and persuasive,
              natural-sounding copy sit comfortably together in my work. That mix is especially
              valuable for website localization, UI/UX copy and transcreation, where accuracy alone
              is not enough — the message has to land.
            </p>
            <p>
              Every project runs through a disciplined{" "}
              <strong>Translation–Editing–Proofreading (TEP)</strong> workflow with SDL Trados
              translation memories and client-approved termbases, so terminology stays consistent
              and quality is built in rather than bolted on. Files are handled confidentially, with
              an NDA available before anything is shared.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        title="Let's talk about your project"
        description="Tell me what you're working on and I'll reply with a clear, honest quote."
        primary={{ label: "Let's talk", href: routes.contact }}
        secondary={{ label: "How it works?", href: routes.process }}
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { CountUp } from "@/components/CountUp/CountUp";
import { Flag, type LanguageCode } from "@/components/Flag/Flag";
import { experienceStats } from "@/content/stats";
import { specializations } from "@/content/specializations";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description:
    "Ahmed Alzamli — a specialist translator and localizer working into English and Arabic, with an environmental-engineering and marketing background and a rigorous TEP quality workflow.",
};

const languages: { code: LanguageCode; name: string; note: string }[] = [
  { code: "en", name: "English", note: "Source & target" },
  { code: "ar", name: "Arabic", note: "Native target" },
  { code: "fr", name: "French", note: "Source" },
  { code: "es", name: "Spanish", note: "Source" },
];

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

      <Section tinted title="Experience at a glance">
        <ul className={styles.statGrid}>
          {experienceStats.map((stat) => (
            <li key={stat.id} className={styles.statItem}>
              <span className={styles.statValue}>
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Languages">
        <ul className={styles.languageList}>
          {languages.map((lang) => (
            <li key={lang.code} className={styles.languageItem}>
              <Flag code={lang.code} size={36} />
              <span className={styles.languageName}>{lang.name}</span>
              <span className={styles.languageNote}>{lang.note}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tinted title="What I specialize in">
        <ul className={styles.specList}>
          {specializations.map((spec) => (
            <li key={spec.slug} className={styles.specItem}>
              <h3 className={styles.specTitle}>{spec.title}</h3>
              <p className={styles.specText}>{spec.summary}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="How I work">
        <div className="prose">
          <ul>
            <li>
              <strong>Clarity first</strong> — questions are raised early and progress is easy to
              follow from brief to delivery.
            </li>
            <li>
              <strong>Terminology control</strong> — glossaries and translation memories keep large
              and repeat projects consistent.
            </li>
            <li>
              <strong>Cultural accuracy</strong> — content is adapted so it reads naturally for the
              target market, not just translated.
            </li>
            <li>
              <strong>Reliable delivery</strong> — realistic scoping and on-time delivery, with
              flexibility for urgent agency deadlines.
            </li>
          </ul>
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

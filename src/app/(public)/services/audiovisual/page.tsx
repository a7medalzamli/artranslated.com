import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { ProcessSteps } from "@/components/ProcessSteps/ProcessSteps";
import { CTA } from "@/components/CTA/CTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  alternates: { canonical: "/services/audiovisual" },
  title: "Audiovisual Translation & Dubbing into Arabic",
  description:
    "Spanish, English and French to Arabic audiovisual translation: subtitling, transcreation and dubbing adaptation with careful lip-sync alignment.",
};

const dubbingSteps = [
  {
    title: "Script & timecode review",
    description:
      "Study the timecoded script alongside the on-screen performance to understand timing, tone and intent.",
  },
  {
    title: "Translation & transcreation",
    description:
      "Translate the meaning and transcreate culturally specific idioms so they carry the same emotional weight in Arabic without sounding unnatural.",
  },
  {
    title: "Syllable & lip-sync matching",
    description:
      "Adjust Arabic phrasing and syllable count to match the actors' lip movements and the timing of each line.",
  },
  {
    title: "Review against picture",
    description:
      "Check the adapted dialogue against the footage for timing accuracy and cultural fit, refining where needed.",
  },
  {
    title: "Studio-ready delivery",
    description:
      "Deliver an adapted script that recording can use directly, respecting the original director's intent.",
  },
];

export default function AudiovisualPage() {
  return (
    <>
      <PageHeader
        eyebrow="Specialization"
        title="Audiovisual translation & dubbing into Arabic"
        description="Subtitling, transcreation and dubbing adaptation — with the lip-sync precision streaming and broadcast work demands."
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: "Audiovisual" },
        ]}
      />

      <Section title="Dialogue that sounds native — and lands on the lips">
        <div className="prose">
          <p>
            Audiovisual work is about more than words on a page: the Arabic has to fit the picture,
            the timing and the performance. That means transcreating idioms so they feel native to
            Arab audiences while preserving the drama and intent of the original.
          </p>
        </div>
      </Section>

      <Section tinted title="The dubbing & lip-sync adaptation process">
        <ProcessSteps steps={dubbingSteps} />
      </Section>

      <Section title="What I offer">
        <div className="prose">
          <ul>
            <li>Subtitling and timecoded script translation</li>
            <li>Dubbing adaptation with lip-sync alignment</li>
            <li>Transcreation of culturally specific dialogue</li>
          </ul>
        </div>
      </Section>

      <CTA
        title="Localizing a series or film into Arabic?"
        description="Tell me the source language, format and deadline for a clear quote."
        primary={{ label: "Let's talk", href: routes.contact }}
        secondary={{ label: "See the process", href: routes.process }}
      />
    </>
  );
}

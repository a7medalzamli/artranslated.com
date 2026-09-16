import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Card, CardGrid } from "@/components/Card/Card";
import { CTA } from "@/components/CTA/CTA";
import { successStories } from "@/content/successStories";
import { routes } from "@/lib/routes";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work & CV",
  description:
    "Anonymized success stories across environmental engineering, audiovisual dubbing and AI localization, plus client types and professional background.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Work & CV"
        description="Anonymized examples of recent work, the kinds of clients I serve, and the background behind it."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Work & CV" }]}
      />

      <Section
        title="Success stories"
        intro="Client names are withheld for confidentiality; each example reflects real project work."
      >
        <div className={styles.stories}>
          {successStories.map((story) => (
            <article key={story.id} className={styles.story}>
              <header className={styles.storyHead}>
                <h3 className={styles.storyTitle}>{story.title}</h3>
                <span className={styles.pair}>{story.languagePair}</span>
              </header>
              <dl className={styles.detail}>
                <dt>Scope</dt>
                <dd>{story.scope}</dd>
                <dt>Challenge</dt>
                <dd>{story.challenge}</dd>
                <dt>Solution</dt>
                <dd>{story.solution}</dd>
                <dt>Result</dt>
                <dd>{story.result}</dd>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section tinted title="Who I work with">
        <CardGrid columns={2}>
          <Card title="Localization agencies">
            Agencies needing a reliable Arabic specialist for technical, legal, financial,
            healthcare and audiovisual projects.
          </Card>
          <Card title="Direct companies & enterprises">
            Organizations translating documentation, communications and compliance material into
            Arabic.
          </Card>
          <Card title="Streaming & media">
            Studios and platforms localizing series and film with subtitling and lip-sync dubbing.
          </Card>
          <Card title="Technology companies">
            Product teams localizing interfaces and improving AI output quality for Arabic users.
          </Card>
        </CardGrid>
      </Section>

      <Section title="Background & CV">
        <div className="prose">
          <p>A combination of technical, linguistic and marketing training underpins the work:</p>
          <ul>
            <li>Degree in environmental engineering — [institution &amp; year]</li>
            <li>Diploma in translation — [institution &amp; year]</li>
            <li>Diploma in marketing — [institution &amp; year]</li>
            <li>Core CAT tool: SDL Trados Studio (translation memories, glossaries, termbases)</li>
            <li>Years of professional experience: [add number]</li>
          </ul>
          <p>[Add a link to a downloadable CV / PDF here, if desired.]</p>
        </div>
      </Section>

      <CTA
        title="Think we might be a good fit?"
        description="Tell me about your project and I'll reply with a clear quote."
        primary={{ label: "Request a quote", href: routes.contact }}
        secondary={{ label: "How I work", href: routes.process }}
      />
    </>
  );
}

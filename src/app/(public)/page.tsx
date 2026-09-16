import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { Card, CardGrid } from "@/components/Card/Card";
import { CTA } from "@/components/CTA/CTA";
import { LanguageSample } from "@/components/LanguageSample/LanguageSample";
import { specializations } from "@/content/specializations";
import { trustSignals } from "@/content/trustSignals";
import { routes } from "@/lib/routes";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>
                English &middot; French &middot; Spanish &rarr; Arabic
              </p>
              <h1 className={styles.title}>
                Precise Arabic translation agencies and companies can rely on
              </h1>
              <p className={styles.lead}>
                Technical, legal, financial, healthcare and audiovisual specializations &mdash;
                delivered with a full Translation&ndash;Editing&ndash;Proofreading workflow and SDL
                Trados terminology control.
              </p>
              <div className={styles.actions}>
                <Button href={routes.contact} size="lg">
                  Request a quote
                </Button>
                <Button href={routes.services} variant="secondary" size="lg">
                  Explore services
                </Button>
              </div>
            </div>
            <LanguageSample />
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Specializations</h2>
            <p className={styles.sectionIntro}>
              Focused expertise where accuracy and terminology matter most.
            </p>
          </div>
          <CardGrid columns={3}>
            {specializations.map((item) => (
              <Card key={item.slug} title={item.title} href={item.href}>
                {item.summary}
              </Card>
            ))}
          </CardGrid>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.tinted}`}>
        <Container>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Why clients trust the work</h2>
            <p className={styles.sectionIntro}>
              In place of a certification logo, four concrete signals: a defined process, the right
              tools, strict confidentiality and genuine subject-matter expertise.
            </p>
          </div>
          <CardGrid columns={2}>
            {trustSignals.map((signal) => (
              <Card
                key={signal.title}
                title={signal.title}
                href={signal.href}
                linkLabel={signal.linkLabel}
              >
                {signal.summary}
              </Card>
            ))}
          </CardGrid>
        </Container>
      </section>

      <CTA
        title="Have a project in mind?"
        description="Tell me your language pair, specialization and deadline, and I'll get back to you with a clear quote."
        primary={{ label: "Request a quote", href: routes.contact }}
        secondary={{ label: "See how I work", href: routes.process }}
      />
    </>
  );
}

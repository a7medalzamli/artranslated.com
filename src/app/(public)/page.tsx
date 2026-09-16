import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { CTA } from "@/components/CTA/CTA";
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

            {/* Static translation-editor panel. The language switcher arrives in Milestone 3. */}
            <div
              className={styles.panel}
              role="img"
              aria-label="Sample English to Arabic translation"
            >
              <div className={styles.panelBar}>
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.panelTitle}>Translation editor</span>
              </div>
              <div className={styles.segment}>
                <span className={styles.segLabel}>EN &mdash; source</span>
                <p className={styles.segSource} lang="en">
                  The report must comply with local environmental regulations.
                </p>
              </div>
              <div className={styles.segment}>
                <span className={styles.segLabel}>AR &mdash; target</span>
                <p className={styles.segTarget} lang="ar" dir="rtl">
                  يجب أن يتوافق التقرير مع اللوائح البيئية المحلية.
                </p>
              </div>
            </div>
          </div>
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

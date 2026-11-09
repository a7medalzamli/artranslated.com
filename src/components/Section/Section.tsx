import type { ReactNode } from "react";
import { Container } from "../Container/Container";
import { fitTitle } from "@/lib/fitTitle";
import styles from "./Section.module.css";

type SectionProps = {
  title?: string;
  intro?: string;
  children: ReactNode;
  tinted?: boolean;
  narrow?: boolean;
};

export function Section({ title, intro, children, tinted = false, narrow = false }: SectionProps) {
  return (
    <section className={`${styles.section} ${tinted ? styles.tinted : ""}`.trim()}>
      <Container size={narrow ? "narrow" : "default"} className="fit-box scroll-reveal">
        {title && (
          <h2 className={`${styles.title} fit-title`} style={fitTitle(title)}>
            {title}
          </h2>
        )}
        {intro && <p className={styles.intro}>{intro}</p>}
        <div className={styles.body}>{children}</div>
      </Container>
    </section>
  );
}

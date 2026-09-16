import type { ReactNode } from "react";
import { Container } from "../Container/Container";
import styles from "./ContentRow.module.css";

type ContentRowProps = {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  /** Optional media/visual placed beside the text. */
  media?: ReactNode;
  /** Place the media before the text (alternating layouts). */
  reversed?: boolean;
  /** Tint the section background with the surface color. */
  tinted?: boolean;
  id?: string;
};

export function ContentRow({
  title,
  eyebrow,
  children,
  media,
  reversed = false,
  tinted = false,
  id,
}: ContentRowProps) {
  const sectionCls = [styles.section, tinted && styles.tinted].filter(Boolean).join(" ");
  const gridCls = [styles.grid, media && styles.withMedia, reversed && styles.reversed]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionCls} id={id}>
      <Container>
        <div className={gridCls}>
          <div className={styles.body}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {title && <h2 className={styles.title}>{title}</h2>}
            <div className={styles.prose}>{children}</div>
          </div>
          {media && <div className={styles.media}>{media}</div>}
        </div>
      </Container>
    </section>
  );
}

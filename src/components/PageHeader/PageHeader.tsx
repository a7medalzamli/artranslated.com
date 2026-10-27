import { Container } from "../Container/Container";
import type { Crumb } from "../Breadcrumbs/Breadcrumbs";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  /** Breadcrumbs are no longer shown on the site; accepted so pages need no changes. */
  breadcrumbs?: Crumb[];
  breadcrumbLabel?: string;
};

export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <Container>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </Container>
    </header>
  );
}

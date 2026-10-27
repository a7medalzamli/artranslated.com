import { Container } from "../Container/Container";
import type { Crumb } from "../Breadcrumbs/Breadcrumbs";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  description?: string;
  /** Not shown on the site any more; accepted so pages need no changes. */
  eyebrow?: string;
  /** Breadcrumbs are no longer shown on the site; accepted so pages need no changes. */
  breadcrumbs?: Crumb[];
  breadcrumbLabel?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <Container>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </Container>
    </header>
  );
}

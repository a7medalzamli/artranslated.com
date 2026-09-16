import { Container } from "../Container/Container";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs/Breadcrumbs";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
  breadcrumbLabel?: string;
};

export function PageHeader({
  title,
  description,
  eyebrow,
  breadcrumbs,
  breadcrumbLabel,
}: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className={styles.crumbs}>
            <Breadcrumbs items={breadcrumbs} label={breadcrumbLabel} />
          </div>
        )}
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </Container>
    </header>
  );
}

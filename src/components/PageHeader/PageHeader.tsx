import { Container } from "../Container/Container";
import { JsonLd } from "../JsonLd/JsonLd";
import type { Crumb } from "../Breadcrumbs/Breadcrumbs";
import { siteUrl } from "@/lib/seo";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  description?: string;
  /** Not shown on the site any more; accepted so pages need no changes. */
  eyebrow?: string;
  /**
   * Breadcrumb trail. Not shown on the page, but published as structured data
   * (BreadcrumbList) for search engines when `locale` is given.
   */
  breadcrumbs?: Crumb[];
  breadcrumbLabel?: string;
  locale?: string;
};

export function PageHeader({ title, description, breadcrumbs, locale }: PageHeaderProps) {
  const crumbLd =
    breadcrumbs && breadcrumbs.length > 1 && locale
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            // The last crumb is the current page, which needs no link.
            ...(c.href ? { item: `${siteUrl}/${locale}${c.href === "/" ? "" : c.href}` } : {}),
          })),
        }
      : null;

  return (
    <header className={styles.header}>
      {crumbLd && <JsonLd data={crumbLd} />}
      <Container>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </Container>
    </header>
  );
}

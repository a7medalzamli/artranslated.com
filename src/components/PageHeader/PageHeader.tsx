import type React from "react";
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
  /** Smaller title for long headings (blog articles), so it uses the full width. */
  long?: boolean;
};

/**
 * Long titles shrink to fit on one line on wide screens: the font size comes
 * from the title length and an average letter width (Arabic letters are
 * narrower than Latin ones in our fonts). Phones still wrap.
 */
function fitStyle(title: string, locale?: string) {
  return {
    "--title-len": title.length,
    "--char-w": locale === "ar" ? 0.5 : 0.58,
  } as React.CSSProperties;
}

export function PageHeader({ title, description, breadcrumbs, locale, long }: PageHeaderProps) {
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
      <Container className={long ? styles.fit : undefined}>
        <h1
          className={long ? styles.titleLong : styles.title}
          style={long ? fitStyle(title, locale) : undefined}
        >
          {title}
        </h1>
        {description && <p className={styles.description}>{description}</p>}
      </Container>
    </header>
  );
}

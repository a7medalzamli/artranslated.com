import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export type Crumb = { label: string; href?: string };

type BreadcrumbsProps = {
  items: Crumb[];
  /** Accessible label for the breadcrumb nav (localizable). */
  label?: string;
};

export function Breadcrumbs({ items, label = "Breadcrumb" }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label={label} className={styles.nav}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className={styles.item}>
              {item.href && !isLast ? (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={styles.current}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden="true" className={styles.separator}>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

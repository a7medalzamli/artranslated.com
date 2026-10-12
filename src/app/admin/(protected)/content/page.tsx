import Link from "next/link";
import { CMS_PAGES } from "@/lib/cms/registry";
import { locales, localeLabels } from "@/i18n/config";
import { SeedButton } from "./SeedButton";
import styles from "./content.module.css";

export const dynamic = "force-dynamic";

export default function AdminContentPage() {
  const groups = CMS_PAGES.reduce<Record<string, typeof CMS_PAGES>>((acc, page) => {
    (acc[page.group] ??= []).push(page);
    return acc;
  }, {});

  return (
    <div className={styles.pageList}>
      <div className={styles.topbar}>
        <div>
          <h1>Content</h1>
          <p className={styles.sub}>
            Edit the content of every page, independently in each language:{" "}
            {locales.map((l) => localeLabels[l]).join(" · ")}.
          </p>
        </div>
      </div>

      <SeedButton />

      {Object.entries(groups).map(([group, pages]) => (
        <section key={group} className={styles.pageGroup}>
          <h2 className={styles.groupTitle}>{group}</h2>
          <ul className={styles.rows}>
            {pages.map((page) => (
              <li key={page.id} className={styles.pageRow}>
                <div className={styles.pageInfo}>
                  <Link href={`/admin/content/${page.id}`} className={styles.pageLink}>
                    {page.label}
                  </Link>
                  {page.route && <span className={styles.route}>{page.route}</span>}
                </div>
                <div className={styles.localeLinks}>
                  {locales.map((l) => (
                    <Link
                      key={l}
                      href={`/admin/content/${page.id}?locale=${l}`}
                      className={styles.localeLink}
                    >
                      {l.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { getCmsPage, getAtPath } from "@/lib/cms/registry";
import { getEffectiveDocument } from "@/lib/cms/read";
import { isLocale, defaultLocale, locales, localeLabels, type Locale } from "@/i18n/config";
import { CmsEditor } from "../CmsEditor";
import styles from "../content.module.css";

export const dynamic = "force-dynamic";

export default async function CmsPageEditor({
  params,
  searchParams,
}: {
  params: Promise<{ pageId: string }>;
  searchParams: Promise<{ locale?: string }>;
}) {
  const { pageId } = await params;
  const { locale: localeParam } = await searchParams;
  const page = getCmsPage(pageId);
  if (!page) notFound();

  const locale: Locale = localeParam && isLocale(localeParam) ? localeParam : defaultLocale;
  const doc = await getEffectiveDocument(page.store, locale);
  const section = getAtPath(doc, page.path);

  return (
    <div>
      <div className={styles.breadcrumbRow}>
        <Link href="/admin/content" className={styles.back}>
          ← All content
        </Link>
        {page.route && (
          <a href={`/${locale}${page.route}`} target="_blank" rel="noopener noreferrer" className={styles.preview}>
            Preview ↗
          </a>
        )}
      </div>

      <div className={styles.localeTabs} role="tablist" aria-label="Language">
        {locales.map((l) => (
          <Link
            key={l}
            href={`/admin/content/${pageId}?locale=${l}`}
            className={l === locale ? styles.activeTab : styles.tab}
            aria-selected={l === locale}
            role="tab"
          >
            {localeLabels[l]}
          </Link>
        ))}
      </div>

      <CmsEditor
        key={`${pageId}:${locale}`}
        pageId={pageId}
        pageLabel={page.label}
        locale={locale}
        localeLabel={localeLabels[locale]}
        section={section}
      />
    </div>
  );
}

import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, localeDirection, locales, type Locale } from "@/i18n";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { getSiteSettings } from "@/lib/content/getSiteSettings";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { entityGraph } from "@/lib/entity";
import styles from "./layout.module.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PublicLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);
  const settings = await getSiteSettings();

  return (
    <div lang={locale} dir={localeDirection[locale as Locale]} className={styles.localeRoot}>
      {/* Who is behind the site (business + owner), shared by every page. */}
      <JsonLd data={entityGraph(locale)} />
      <a href="#main-content" className="skip-link">
        {dict.actions.skipToContent}
      </a>
      <SiteHeader dict={dict} settings={settings} />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <SiteFooter dict={dict} settings={settings} />
    </div>
  );
}

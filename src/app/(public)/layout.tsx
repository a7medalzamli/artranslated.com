import type { ReactNode } from "react";
import { getDictionary, defaultLocale } from "@/i18n";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { getSiteSettings } from "@/lib/content/getSiteSettings";
import styles from "./layout.module.css";

export default async function PublicLayout({ children }: { children: ReactNode }) {
  const dict = getDictionary(defaultLocale);
  const settings = await getSiteSettings();

  return (
    <>
      <a href="#main-content" className="skip-link">
        {dict.actions.skipToContent}
      </a>
      <SiteHeader dict={dict} settings={settings} />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <SiteFooter dict={dict} settings={settings} />
    </>
  );
}

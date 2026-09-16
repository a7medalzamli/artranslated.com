import type { ReactNode } from "react";
import { getDictionary, defaultLocale } from "@/i18n";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import styles from "./layout.module.css";

export default function PublicLayout({ children }: { children: ReactNode }) {
  const dict = getDictionary(defaultLocale);

  return (
    <>
      <a href="#main-content" className="skip-link">
        {dict.actions.skipToContent}
      </a>
      <SiteHeader dict={dict} />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}

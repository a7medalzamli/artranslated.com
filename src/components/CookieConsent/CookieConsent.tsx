"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { LocaleLink } from "../LocaleLink/LocaleLink";
import { isLocale, defaultLocale } from "@/i18n/config";
import styles from "./CookieConsent.module.css";

const KEY = "cookie-consent";

// Google Analytics 4 measurement ID. Loaded only after the visitor accepts cookies.
const GA_ID = "G-1HGXTWKZGJ";

const COOKIE_LABELS = {
  en: {
    text: "This website uses analytics cookies (Google Analytics) to understand how the site is used. They are only set if you accept. See the",
    privacy: "privacy policy",
    decline: "Decline",
    accept: "Accept",
  },
  ar: {
    text: "يستخدم هذا الموقع ملفات تعريف ارتباط تحليلية (Google Analytics) لفهم كيفية استخدام الموقع، ولا تُفعَّل إلا بعد موافقتك. اطّلع على",
    privacy: "سياسة الخصوصية",
    decline: "رفض",
    accept: "قبول",
  },
  fr: {
    text: "Ce site utilise des cookies de mesure d’audience (Google Analytics) pour comprendre son utilisation. Ils ne sont déposés qu’avec votre accord. Consultez la",
    privacy: "politique de confidentialité",
    decline: "Refuser",
    accept: "Accepter",
  },
  es: {
    text: "Este sitio utiliza cookies de analítica (Google Analytics) para entender cómo se usa. Solo se instalan si las aceptas. Consulta la",
    privacy: "política de privacidad",
    decline: "Rechazar",
    accept: "Aceptar",
  },
} as const;

// External store so the banner reads the saved choice without setState-in-effect
// and stays in sync across tabs.
const listeners = new Set<() => void>();
function emit() {
  listeners.forEach((l) => l());
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}
function getSnapshot(): string {
  try {
    const v = localStorage.getItem(KEY);
    if (v === "accepted" || v === "declined") return v;
  } catch {
    /* storage blocked */
  }
  return "none";
}
function getServerSnapshot(): string {
  return "ssr";
}
function setConsent(value: "accepted" | "declined") {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    /* storage blocked */
  }
  emit();
}

export function CookieConsent() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const pathname = usePathname();

  // No cookie banner / analytics in the admin area.
  if (pathname?.startsWith("/admin")) return null;

  const seg = pathname?.split("/")[1] ?? "";
  const locale = isLocale(seg) ? seg : defaultLocale;
  const l = COOKIE_LABELS[locale];

  return (
    <>
      {snapshot === "accepted" && (
        <>
          <Analytics />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {snapshot === "none" && (
        <div className={styles.banner} role="region" aria-label="Cookie consent">
          <p className={styles.text}>
            {l.text} <LocaleLink href="/privacy">{l.privacy}</LocaleLink>.
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.decline} onClick={() => setConsent("declined")}>
              {l.decline}
            </button>
            <button type="button" className={styles.accept} onClick={() => setConsent("accepted")}>
              {l.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

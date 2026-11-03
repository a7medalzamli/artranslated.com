"use client";

import { useEffect, useSyncExternalStore } from "react";
import { trackEvent } from "@/lib/analytics";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { LocaleLink } from "../LocaleLink/LocaleLink";
import { isLocale, defaultLocale } from "@/i18n/config";
import styles from "./CookieConsent.module.css";

const KEY = "cookie-consent";

// Google Analytics 4 measurement ID.
const GA_ID = "G-1HGXTWKZGJ";
// Microsoft Clarity project ID.
const CLARITY_ID = "z7usn1ltby";

/**
 * Google Consent Mode. Analytics loads on every public page but starts with
 * all storage denied, so no cookies are set. If the visitor accepted (now or
 * on an earlier visit), analytics cookies are allowed. Without consent Google
 * only receives anonymous, cookie-free signals that it uses to estimate visits.
 */
const GA_BOOT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
var c=null;try{c=localStorage.getItem('${KEY}')}catch(e){}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:c==='accepted'?'granted':'denied'});
gtag('js',new Date());gtag('config','${GA_ID}');`;

function updateConsent(value: "accepted" | "declined") {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("consent", "update", { analytics_storage: value === "accepted" ? "granted" : "denied" });
  }
}

const COOKIE_LABELS = {
  en: {
    text: "This website uses analytics cookies (Google Analytics, Microsoft Clarity) to understand how the site is used. They are only set if you accept. See the",
    privacy: "privacy policy",
    decline: "Decline",
    accept: "Accept",
  },
  ar: {
    text: "يستخدم هذا الموقع ملفات تعريف ارتباط تحليلية (Google Analytics, Microsoft Clarity) لفهم كيفية استخدام الموقع، ولا تُفعَّل إلا بعد موافقتك. اطّلع على",
    privacy: "سياسة الخصوصية",
    decline: "رفض",
    accept: "قبول",
  },
  fr: {
    text: "Ce site utilise des cookies de mesure d’audience (Google Analytics, Microsoft Clarity) pour comprendre son utilisation. Ils ne sont déposés qu’avec votre accord. Consultez la",
    privacy: "politique de confidentialité",
    decline: "Refuser",
    accept: "Accepter",
  },
  es: {
    text: "Este sitio utiliza cookies de analítica (Google Analytics, Microsoft Clarity) para entender cómo se usa. Solo se instalan si las aceptas. Consulta la",
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
  updateConsent(value);
  emit();
}

export function CookieConsent() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const pathname = usePathname();

  // Count clicks on email / phone / WhatsApp / Telegram links anywhere on the
  // site as "contact" events (cookie-free unless the visitor accepted).
  useEffect(() => {
    if (snapshot === "ssr") return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const method = href.startsWith("mailto:")
        ? "email"
        : href.startsWith("tel:")
          ? "phone"
          : href.startsWith("https://wa.me/")
            ? "whatsapp"
            : href.startsWith("https://t.me/")
              ? "telegram"
              : null;
      if (method) trackEvent("contact", { method, page_path: window.location.pathname });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [snapshot]);

  // No cookie banner / analytics in the admin area.
  if (pathname?.startsWith("/admin")) return null;

  const seg = pathname?.split("/")[1] ?? "";
  const locale = isLocale(seg) ? seg : defaultLocale;
  const l = COOKIE_LABELS[locale];

  return (
    <>
      {snapshot !== "ssr" && (
        <>
          <Script id="ga4" strategy="afterInteractive">
            {GA_BOOT}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
        </>
      )}
      {snapshot === "accepted" && (
        <>
          <Analytics />
          {/* Microsoft Clarity (heatmaps and session recordings), only after consent. */}
          <Script id="clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");window.clarity("consent");`}
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

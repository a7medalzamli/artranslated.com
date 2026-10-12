"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { LocaleLink } from "../LocaleLink/LocaleLink";
import { isLocale, defaultLocale } from "@/i18n/config";
import styles from "./CookieConsent.module.css";

const KEY = "cookie-consent";

const COOKIE_LABELS = {
  en: {
    text: "This website uses privacy-friendly analytics to understand how the site is used. See the",
    privacy: "privacy policy",
    decline: "Decline",
    accept: "Accept",
  },
  ar: {
    text: "يستخدم هذا الموقع تحليلات تحترم الخصوصية لفهم كيفية استخدام الموقع. اطّلع على",
    privacy: "سياسة الخصوصية",
    decline: "رفض",
    accept: "قبول",
  },
  fr: {
    text: "Ce site utilise des statistiques respectueuses de la vie privée pour comprendre son utilisation. Consultez la",
    privacy: "politique de confidentialité",
    decline: "Refuser",
    accept: "Accepter",
  },
  es: {
    text: "Este sitio utiliza analíticas respetuosas con la privacidad para entender cómo se usa. Consulta la",
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
      {snapshot === "accepted" && <Analytics />}
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

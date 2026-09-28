"use client";

import { useSyncExternalStore } from "react";
import { Analytics } from "@vercel/analytics/next";
import styles from "./CookieConsent.module.css";

const KEY = "cookie-consent";

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

  return (
    <>
      {snapshot === "accepted" && <Analytics />}
      {snapshot === "none" && (
        <div className={styles.banner} role="region" aria-label="Cookie consent">
          <p className={styles.text}>
            This website uses privacy-friendly analytics to understand how the site is used. See the{" "}
            <a href="/privacy">privacy policy</a>.
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.decline} onClick={() => setConsent("declined")}>
              Decline
            </button>
            <button type="button" className={styles.accept} onClick={() => setConsent("accepted")}>
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}

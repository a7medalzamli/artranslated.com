"use client";

import { useRouter, usePathname } from "next/navigation";
import { locales, localeLabels, isLocale, defaultLocale } from "@/i18n/config";
import styles from "./LanguageSwitcher.module.css";

/**
 * Switches language by rewriting the locale segment of the current path and
 * remembering the choice in a cookie (so the middleware honors it next visit).
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const parts = pathname.split("/");
  const current = isLocale(parts[1]) ? parts[1] : defaultLocale;

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    const segments = pathname.split("/");
    if (isLocale(segments[1])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    const target = segments.join("/") || "/";
    try {
      document.cookie = `locale=${next};path=/;max-age=31536000;samesite=lax`;
    } catch {
      /* ignore */
    }
    router.push(target);
  }

  return (
    <select
      value={current}
      onChange={handleChange}
      aria-label="Choose language"
      className={[styles.select, className].filter(Boolean).join(" ")}
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {localeLabels[loc]}
        </option>
      ))}
    </select>
  );
}

"use client";

import { useActionState, useEffect } from "react";
import { useParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { sendFooterMessage, type FooterMessageState } from "./footerActions";
import type { Dictionary } from "@/i18n";
import styles from "./SiteFooter.module.css";

const initialState: FooterMessageState = { ok: false, error: null };

/** Small contact form in the footer: name, email and message. */
export function FooterContactForm({ labels }: { labels: Dictionary["footer"]["form"] }) {
  const params = useParams();
  const locale = String(params?.locale ?? "en");
  const [state, formAction, pending] = useActionState(sendFooterMessage, initialState);

  useEffect(() => {
    if (state.ok) trackEvent("generate_lead", { form: "footer", page_language: locale });
  }, [state.ok, locale]);

  if (state.ok) {
    return (
      <p className={styles.formSuccess} role="status">
        {labels.success}
      </p>
    );
  }

  const error =
    state.error === "invalid" ? labels.invalid : state.error ? labels.failed : null;

  return (
    <form action={formAction} className={styles.form}>
      <input type="hidden" name="locale" value={locale} />
      {/* Honeypot: hidden from humans; bots that fill it are ignored. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className={styles.honeypot}
      />
      <input name="name" required maxLength={120} placeholder={labels.name} aria-label={labels.name} autoComplete="name" />
      <input
        name="email"
        type="email"
        required
        placeholder={labels.email}
        aria-label={labels.email}
        autoComplete="email"
      />
      <textarea name="message" required rows={3} maxLength={4000} placeholder={labels.message} aria-label={labels.message} />
      {error && (
        <p className={styles.formError} role="alert">
          {error}
        </p>
      )}
      <button type="submit" disabled={pending}>
        {pending ? labels.sending : labels.send}
      </button>
    </form>
  );
}

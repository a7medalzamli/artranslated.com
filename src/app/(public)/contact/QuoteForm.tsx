"use client";

import { useActionState } from "react";
import { submitQuote, type QuoteState } from "./actions";
import { specializations } from "@/content/specializations";
import styles from "./contact.module.css";

const initialState: QuoteState = { ok: false, error: null };

const languagePairs = ["English → Arabic", "French → Arabic", "Spanish → Arabic"];

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);

  if (state.ok) {
    return (
      <div className={styles.success} role="status">
        <h2>Thank you — your request has been received.</h2>
        <p>
          I&rsquo;ll get back to you shortly. Please don&rsquo;t send any confidential files until
          we&rsquo;ve agreed terms.
        </p>
      </div>
    );
  }

  const fieldError = (name: string) => state.fieldErrors?.[name];

  return (
    <form action={formAction} className={styles.form} noValidate>
      {/* Honeypot: hidden from humans; bots that fill it are silently ignored. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Name *</span>
          <input name="name" required aria-invalid={Boolean(fieldError("name"))} />
          {fieldError("name") && <em className={styles.err}>{fieldError("name")}</em>}
        </label>

        <label className={styles.field}>
          <span>Email *</span>
          <input name="email" type="email" required aria-invalid={Boolean(fieldError("email"))} />
          {fieldError("email") && <em className={styles.err}>{fieldError("email")}</em>}
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Language pair *</span>
          <select name="language_pair" required defaultValue="">
            <option value="" disabled>
              Choose…
            </option>
            {languagePairs.map((pair) => (
              <option key={pair} value={pair}>
                {pair}
              </option>
            ))}
          </select>
          {fieldError("language_pair") && (
            <em className={styles.err}>{fieldError("language_pair")}</em>
          )}
        </label>

        <label className={styles.field}>
          <span>Specialization</span>
          <select name="specialization" defaultValue="">
            <option value="">Not sure / other</option>
            {specializations.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Word count or runtime</span>
          <input name="volume" placeholder="e.g. 5,000 words or 20 minutes" />
        </label>

        <label className={styles.field}>
          <span>Deadline</span>
          <input name="deadline" placeholder="e.g. 15 October, or flexible" />
        </label>
      </div>

      <label className={styles.field}>
        <span>Project details</span>
        <textarea name="message" rows={5} placeholder="Tell me about your project…" />
        {fieldError("message") && <em className={styles.err}>{fieldError("message")}</em>}
      </label>

      <label className={styles.checkbox}>
        <input type="checkbox" name="nda_requested" />
        <span>I&rsquo;d like an NDA signed before I share files.</span>
      </label>

      {state.error && (
        <p role="alert" className={styles.formError}>
          {state.error}
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}

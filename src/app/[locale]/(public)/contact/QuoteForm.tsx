"use client";

import { useActionState, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { submitQuote, type QuoteState } from "./actions";
import styles from "./contact.module.css";

const initialState: QuoteState = { ok: false, error: null };

export type QuoteFormLabels = {
  successTitle: string;
  successText: string;
  company: string;
  name: string;
  email: string;
  languagePair: string;
  choose: string;
  specialization: string;
  notSure: string;
  volume: string;
  volumePlaceholder: string;
  deadline: string;
  deadlinePlaceholder: string;
  service: string;
  selectService: string;
  details: string;
  detailsPlaceholder: string;
  nda: string;
  sending: string;
  send: string;
  pairs: string[];
};

export function QuoteForm({
  labels,
  specializationOptions,
  serviceOptions,
  locale,
}: {
  labels: QuoteFormLabels;
  locale: string;
  specializationOptions: string[];
  serviceOptions: string[];
}) {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);

  // Count a successful request as a lead in Google Analytics (if consented).
  useEffect(() => {
    if (state.ok) trackEvent("generate_lead", { form: "quote", page_language: locale });
  }, [state.ok, locale]);

  if (state.ok) {
    return (
      <div className={styles.success} role="status">
        <h2>{labels.successTitle}</h2>
        <p>{labels.successText}</p>
      </div>
    );
  }

  const fieldError = (name: string) => state.fieldErrors?.[name];

  return (
    <form action={formAction} className={styles.form} noValidate>
      <input type="hidden" name="locale" value={locale} />
      {/* Honeypot: hidden from humans; bots that fill it are silently ignored. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label>
          {labels.company}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>{labels.name} *</span>
          <input name="name" required aria-invalid={Boolean(fieldError("name"))} />
          {fieldError("name") && <em className={styles.err}>{fieldError("name")}</em>}
        </label>

        <label className={styles.field}>
          <span>{labels.email} *</span>
          <input name="email" type="email" required aria-invalid={Boolean(fieldError("email"))} />
          {fieldError("email") && <em className={styles.err}>{fieldError("email")}</em>}
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>{labels.languagePair} *</span>
          <select name="language_pair" required defaultValue="">
            <option value="" disabled>
              {labels.choose}
            </option>
            {labels.pairs.map((pair) => (
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
          <span>{labels.specialization}</span>
          <select name="specialization" defaultValue="">
            <option value="">{labels.notSure}</option>
            {specializationOptions.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>{labels.volume}</span>
          <input name="volume" placeholder={labels.volumePlaceholder} />
        </label>

        <label className={styles.field}>
          <span>{labels.deadline}</span>
          <input name="deadline" placeholder={labels.deadlinePlaceholder} />
        </label>
      </div>

      <label className={styles.field}>
        <span>{labels.service}</span>
        <select name="service" defaultValue="">
          <option value="">{labels.selectService}</option>
          {serviceOptions.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>{labels.details}</span>
        <textarea name="message" rows={5} placeholder={labels.detailsPlaceholder} />
        {fieldError("message") && <em className={styles.err}>{fieldError("message")}</em>}
      </label>

      <label className={styles.checkbox}>
        <input type="checkbox" name="nda_requested" />
        <span>{labels.nda}</span>
      </label>

      {state.error && (
        <p role="alert" className={styles.formError}>
          {state.error}
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? labels.sending : labels.send}
      </button>
    </form>
  );
}

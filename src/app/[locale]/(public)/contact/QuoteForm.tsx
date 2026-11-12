"use client";

import { useActionState, useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";
import { submitQuote, type QuoteState } from "./actions";
import styles from "./contact.module.css";

const initialState: QuoteState = { ok: false, error: null };

/** "How did you hear about me?": shows which channels bring clients, including AI assistants. */
const HEARD: Record<string, { label: string; options: [string, string][] }> = {
  en: {
    label: "How did you hear about me? (optional)",
    options: [["", "Choose…"], ["google", "Google or another search engine"], ["ai", "AI assistant (ChatGPT, Claude, Gemini, Perplexity…)"], ["linkedin", "LinkedIn"], ["proz", "ProZ.com or a translator directory"], ["referral", "Recommended by someone"], ["other", "Other"]],
  },
  ar: {
    label: "كيف عرفت عني؟ (اختياري)",
    options: [["", "اختر…"], ["google", "Google أو محرك بحث آخر"], ["ai", "مساعد ذكاء اصطناعي (AI) مثل ChatGPT أو Claude أو Gemini"], ["linkedin", "LinkedIn"], ["proz", "ProZ.com أو دليل للمترجمين"], ["referral", "توصية من شخص ما"], ["other", "غير ذلك"]],
  },
  fr: {
    label: "Comment m’avez-vous connu ? (facultatif)",
    options: [["", "Choisir…"], ["google", "Google ou un autre moteur de recherche"], ["ai", "Assistant IA (ChatGPT, Claude, Gemini, Perplexity…)"], ["linkedin", "LinkedIn"], ["proz", "ProZ.com ou un annuaire de traducteurs"], ["referral", "Recommandation"], ["other", "Autre"]],
  },
  es: {
    label: "¿Cómo me conociste? (opcional)",
    options: [["", "Elegir…"], ["google", "Google u otro buscador"], ["ai", "Asistente de IA (ChatGPT, Claude, Gemini, Perplexity…)"], ["linkedin", "LinkedIn"], ["proz", "ProZ.com o un directorio de traductores"], ["referral", "Recomendación de alguien"], ["other", "Otro"]],
  },
};

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
  defaultService = "",
}: {
  labels: QuoteFormLabels;
  locale: string;
  /** Service pre-selected in the "Service needed" menu (e.g. on a service page). */
  defaultService?: string;
  specializationOptions: string[];
  serviceOptions: string[];
}) {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);
  const volumeRef = useRef<HTMLInputElement>(null);

  // Arriving from the word counter (?words=1234): fill in the word count.
  useEffect(() => {
    const w = new URLSearchParams(window.location.search).get("words");
    const input = volumeRef.current;
    if (!w || !/^\d{1,7}$/.test(w) || !input || input.value) return;
    const unit: Record<string, string> = { en: "words", ar: "كلمة", fr: "mots", es: "palabras" };
    input.value = `${Number(w).toLocaleString(locale === "ar" ? "en" : locale)} ${unit[locale] ?? unit.en}`;
  }, [locale]);

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
          <span>{labels.languagePair}</span>
          <select name="language_pair" defaultValue="">
            <option value="">
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
          <input name="volume" ref={volumeRef} placeholder={labels.volumePlaceholder} />
        </label>

        <label className={styles.field}>
          <span>{labels.deadline}</span>
          <input name="deadline" placeholder={labels.deadlinePlaceholder} />
        </label>
      </div>

      <label className={styles.field}>
        <span>{labels.service}</span>
        <select name="service" defaultValue={defaultService}>
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

      <label className={styles.field}>
        <span>{(HEARD[locale] ?? HEARD.en).label}</span>
        <select name="heard" defaultValue="">
          {(HEARD[locale] ?? HEARD.en).options.map(([value, text]) => (
            <option key={value || "none"} value={value}>
              {text}
            </option>
          ))}
        </select>
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

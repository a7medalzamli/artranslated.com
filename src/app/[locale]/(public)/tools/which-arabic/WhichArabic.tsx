"use client";

import { useState } from "react";
import { LocaleLink as Link } from "@/components/LocaleLink/LocaleLink";
import { routes } from "@/lib/routes";
import {
  audiences,
  contentTypes,
  recommend,
  serviceFor,
  type Audience,
  type ContentType,
  type WhichArabicText,
} from "@/content/whichArabicTool";
import styles from "./whichArabic.module.css";

/** Two questions and a live recommendation. Nothing is sent anywhere. */
export function WhichArabic({ ui }: { ui: WhichArabicText["ui"] }) {
  const [type, setType] = useState<ContentType>("website");
  const [audience, setAudience] = useState<Audience>("all");

  const key = recommend(type, audience);
  const region = audience === "all" ? "" : ui.regions[audience];
  const dialect = audience === "all" ? "" : ui.dialects[audience];
  const result = ui.results[key];
  const fill = (s: string) => s.replace("{region}", region).replace("{dialect}", dialect);

  return (
    <div className={styles.tool}>
      <div className={styles.questions}>
        <label className={styles.field}>
          <span className={styles.label}>{ui.typeLabel}</span>
          <select value={type} onChange={(e) => setType(e.target.value as ContentType)}>
            {contentTypes.map((t) => (
              <option key={t} value={t}>
                {ui.types[t]}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          <span className={styles.label}>{ui.audienceLabel}</span>
          <select value={audience} onChange={(e) => setAudience(e.target.value as Audience)}>
            {audiences.map((a) => (
              <option key={a} value={a}>
                {ui.audiences[a]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.result} aria-live="polite">
        <p className={styles.resultLabel}>{ui.resultLabel}</p>
        <p className={styles.resultTitle}>{fill(result.title)}</p>
        <p className={styles.resultText}>{fill(result.text)}</p>
        {key === "dialect" && audience === "maghreb" && <p className={styles.note}>{ui.maghrebNote}</p>}
        <div className={styles.actions}>
          <Link href={routes.contact} className={styles.quote}>
            {ui.quoteButton}
          </Link>
          <Link href={routes[serviceFor[type]]} className={styles.service}>
            {ui.serviceLink}
          </Link>
        </div>
      </div>
    </div>
  );
}

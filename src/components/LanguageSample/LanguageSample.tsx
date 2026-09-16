"use client";

import { useState } from "react";
import styles from "./LanguageSample.module.css";

type Sample = { code: string; label: string; lang: string; text: string };

const samples: Sample[] = [
  {
    code: "EN",
    label: "English",
    lang: "en",
    text: "The report must comply with local environmental regulations.",
  },
  {
    code: "FR",
    label: "Français",
    lang: "fr",
    text: "Le rapport doit être conforme à la réglementation environnementale locale.",
  },
  {
    code: "ES",
    label: "Español",
    lang: "es",
    text: "El informe debe cumplir con la normativa medioambiental local.",
  },
];

// All three sources share the same meaning, so the Arabic target is constant.
const arabicTarget = "يجب أن يتوافق التقرير مع اللوائح البيئية المحلية.";

export function LanguageSample() {
  const [active, setActive] = useState(0);
  const current = samples[active];

  return (
    <div className={styles.panel}>
      <div className={styles.bar}>
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.panelTitle}>Translation editor</span>
        <div className={styles.tabs} role="group" aria-label="Choose source language">
          {samples.map((sample, index) => (
            <button
              key={sample.code}
              type="button"
              className={styles.tab}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              {sample.code}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.segment}>
        <span className={styles.segLabel}>{current.label} &mdash; source</span>
        <p className={styles.source} lang={current.lang}>
          {current.text}
        </p>
      </div>

      <div className={styles.segment}>
        <span className={styles.segLabel}>Arabic &mdash; target</span>
        <p className={styles.target} lang="ar" dir="rtl">
          {arabicTarget}
        </p>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { LocaleLink as Link } from "@/components/LocaleLink/LocaleLink";
import { routes } from "@/lib/routes";
import type { WordCounterText } from "@/content/wordCounterPage";
import styles from "./wordCounter.module.css";

/** Words translated into Arabic per working day (the stated minimum capacity). */
const WORDS_PER_DAY = 5000;
/** Average silent reading speed, words per minute. */
const READING_WPM = 230;

const CJK = new RegExp("[\\p{Script=Han}\\p{Script=Hiragana}\\p{Script=Katakana}\\p{Script=Hangul}]", "u");

/** Words as translation tools count them; splits Chinese/Japanese text without spaces. */
function countWords(text: string, locale: string): number {
  if (!text.trim()) return 0;
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const seg = new Intl.Segmenter(locale, { granularity: "word" });
    let n = 0;
    // Words joined by a hyphen or apostrophe ("well-known", "l'arabe") count once.
    let prev: "word" | "joiner" | "other" = "other";
    for (const s of seg.segment(text)) {
      if (s.isWordLike) {
        if (prev !== "joiner") n++;
        prev = "word";
      } else {
        prev = prev === "word" && /^[-‐‑'’]$/.test(s.segment) ? "joiner" : "other";
      }
    }
    return n;
  }
  return text.trim().split(/\s+/).length;
}

function countStats(text: string, locale: string) {
  const words = countWords(text, locale);
  const trimmed = text.trim();
  return {
    words,
    characters: [...text].length,
    charactersNoSpaces: [...text.replace(/\s/g, "")].length,
    sentences: trimmed ? (trimmed.match(/[^.!?؟。！？]+[.!?؟。！？]*/gu) ?? []).filter((s) => s.trim()).length : 0,
    paragraphs: trimmed ? trimmed.split(/\n\s*\n/).filter((p) => p.trim()).length : 0,
    readingMinutes: words ? Math.max(1, Math.round(words / READING_WPM)) : 0,
    hasCjk: CJK.test(text),
  };
}

export function WordCounter({ ui, locale }: { ui: WordCounterText["ui"]; locale: string }) {
  const [text, setText] = useState("");
  const s = useMemo(() => countStats(text, locale), [text, locale]);
  const nf = useMemo(() => new Intl.NumberFormat(locale === "ar" ? "ar-EG-u-nu-latn" : locale), [locale]);
  const days = Math.max(1, Math.ceil(s.words / WORDS_PER_DAY));

  const openFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setText(await file.text());
    e.target.value = "";
  };

  const stats: [string, string][] = [
    [ui.words, nf.format(s.words)],
    [ui.characters, nf.format(s.characters)],
    [ui.charactersNoSpaces, nf.format(s.charactersNoSpaces)],
    [ui.sentences, nf.format(s.sentences)],
    [ui.paragraphs, nf.format(s.paragraphs)],
    [ui.readingTime, `${nf.format(s.readingMinutes)} ${ui.minutes}`],
  ];

  return (
    <div className={styles.tool}>
      <label className={styles.label} htmlFor="wc-text">
        {ui.label}
      </label>
      <textarea
        id="wc-text"
        className={styles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={ui.placeholder}
        rows={10}
        dir="auto"
        spellCheck={false}
      />
      <div className={styles.actions}>
        <label className={styles.fileButton}>
          {ui.openFile}
          <input type="file" accept=".txt,.srt,.md,text/plain" onChange={openFile} className={styles.fileInput} />
        </label>
        <button type="button" className={styles.clear} onClick={() => setText("")} disabled={!text}>
          {ui.clear}
        </button>
        <span className={styles.privacy}>{ui.privacy}</span>
      </div>

      <dl className={styles.stats} aria-live="polite">
        {stats.map(([label, value]) => (
          <div key={label} className={styles.stat}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      {s.words > 0 ? (
        <div className={styles.estimate}>
          <h2 className={styles.estimateTitle}>{ui.estimateTitle}</h2>
          <p className={styles.estimateValue}>
            {days === 1 ? ui.estimateDay : ui.estimateDays.replace("{n}", nf.format(days))}
          </p>
          <p className={styles.note}>{ui.estimateNote}</p>
          {s.hasCjk && <p className={styles.note}>{ui.cjkNote}</p>}
          <Link href={`${routes.contact}?words=${s.words}`} className={styles.quote}>
            {ui.quoteButton.replace("{n}", nf.format(s.words))}
          </Link>
        </div>
      ) : (
        <p className={styles.empty}>{ui.empty}</p>
      )}
    </div>
  );
}

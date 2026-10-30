"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./AvailabilityHours.module.css";

/**
 * Availability is defined once in Palestine local time (Asia/Hebron) and shown
 * to every visitor converted into their own time zone. All time-zone math goes
 * through the Intl APIs, so daylight-saving changes are handled automatically.
 */
const PALESTINE_TZ = "Asia/Hebron";
/** Fallback zone when the visitor's own time zone can't be detected. */
const DISPLAY_TZ = "America/New_York";
/** Working window in Palestine local time (24h). Edit here to change hours. */
const WINDOW = { startHour: 9, startMin: 0, endHour: 23, endMin: 0 };

/** Friendly country / time-zone choices offered in the picker. */
const ZONES: { tz: string; label: string }[] = [
  { tz: "America/New_York", label: "US Eastern (New York)" },
  { tz: "America/Chicago", label: "US Central (Chicago)" },
  { tz: "America/Denver", label: "US Mountain (Denver)" },
  { tz: "America/Los_Angeles", label: "US Pacific (Los Angeles)" },
  { tz: "America/Anchorage", label: "Alaska" },
  { tz: "Pacific/Honolulu", label: "Hawaii" },
  { tz: "Europe/London", label: "UK · Ireland · Portugal" },
  { tz: "Europe/Paris", label: "Western Europe (France, Germany, Spain)" },
  { tz: "Europe/Athens", label: "Eastern Europe (Greece, Romania)" },
  { tz: "Africa/Cairo", label: "Egypt" },
  { tz: "Asia/Riyadh", label: "Saudi Arabia · Gulf" },
  { tz: "Asia/Dubai", label: "United Arab Emirates" },
  { tz: "Asia/Kolkata", label: "India" },
  { tz: "Asia/Hebron", label: "Palestine" },
  { tz: "Australia/Sydney", label: "Australia (Sydney)" },
];

/** Picker names in the other page languages (English names live in ZONES). */
const ZONE_NAMES: Record<string, Record<string, string>> = {
  fr: {
    "America/New_York": "États-Unis, côte Est (New York)",
    "America/Chicago": "États-Unis, Centre (Chicago)",
    "America/Denver": "États-Unis, Rocheuses (Denver)",
    "America/Los_Angeles": "États-Unis, côte Ouest (Los Angeles)",
    "America/Anchorage": "Alaska",
    "Pacific/Honolulu": "Hawaï",
    "Europe/London": "Royaume-Uni · Irlande · Portugal",
    "Europe/Paris": "Europe de l’Ouest (France, Allemagne, Espagne)",
    "Europe/Athens": "Europe de l’Est (Grèce, Roumanie)",
    "Africa/Cairo": "Égypte",
    "Asia/Riyadh": "Arabie saoudite · Golfe",
    "Asia/Dubai": "Émirats arabes unis",
    "Asia/Kolkata": "Inde",
    "Asia/Hebron": "Palestine",
    "Australia/Sydney": "Australie (Sydney)",
  },
  es: {
    "America/New_York": "EE. UU., costa este (Nueva York)",
    "America/Chicago": "EE. UU., centro (Chicago)",
    "America/Denver": "EE. UU., montaña (Denver)",
    "America/Los_Angeles": "EE. UU., costa oeste (Los Ángeles)",
    "America/Anchorage": "Alaska",
    "Pacific/Honolulu": "Hawái",
    "Europe/London": "Reino Unido · Irlanda · Portugal",
    "Europe/Paris": "Europa occidental (Francia, Alemania, España)",
    "Europe/Athens": "Europa oriental (Grecia, Rumanía)",
    "Africa/Cairo": "Egipto",
    "Asia/Riyadh": "Arabia Saudí · Golfo",
    "Asia/Dubai": "Emiratos Árabes Unidos",
    "Asia/Kolkata": "India",
    "Asia/Hebron": "Palestina",
    "Australia/Sydney": "Australia (Sídney)",
  },
  ar: {
    "America/New_York": "الولايات المتحدة، الساحل الشرقي (نيويورك)",
    "America/Chicago": "الولايات المتحدة، الوسط (شيكاغو)",
    "America/Denver": "الولايات المتحدة، المنطقة الجبلية (دنفر)",
    "America/Los_Angeles": "الولايات المتحدة، الساحل الغربي (لوس أنجلوس)",
    "America/Anchorage": "ألاسكا",
    "Pacific/Honolulu": "هاواي",
    "Europe/London": "المملكة المتحدة · أيرلندا · البرتغال",
    "Europe/Paris": "أوروبا الغربية (فرنسا، ألمانيا، إسبانيا)",
    "Europe/Athens": "أوروبا الشرقية (اليونان، رومانيا)",
    "Africa/Cairo": "مصر",
    "Asia/Riyadh": "السعودية · الخليج",
    "Asia/Dubai": "الإمارات العربية المتحدة",
    "Asia/Kolkata": "الهند",
    "Asia/Hebron": "فلسطين",
    "Australia/Sydney": "أستراليا (سيدني)",
  },
};

/** "Your location" prefix for an unlisted detected zone, per language. */
const YOUR_LOCATION: Record<string, string> = {
  en: "Your location",
  fr: "Votre position",
  es: "Tu ubicación",
  ar: "موقعك",
};

/** Offset (minutes) of a time zone at a given instant. */
function tzOffsetMinutes(date: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(date);
  const map: Record<string, number> = {};
  for (const p of parts) if (p.type !== "literal") map[p.type] = Number(p.value);
  const asUTC = Date.UTC(map.year, map.month - 1, map.day, map.hour, map.minute, map.second);
  return (asUTC - date.getTime()) / 60000;
}

/** The UTC instant at which it is `h:min` wall-clock time in `timeZone` on y-m-d. */
function wallTimeToInstant(y: number, m: number, d: number, h: number, min: number, timeZone: string): Date {
  const utcGuess = Date.UTC(y, m - 1, d, h, min);
  const offset1 = tzOffsetMinutes(new Date(utcGuess), timeZone);
  let instant = new Date(utcGuess - offset1 * 60000);
  const offset2 = tzOffsetMinutes(instant, timeZone);
  if (offset2 !== offset1) instant = new Date(utcGuess - offset2 * 60000);
  return instant;
}

/**
 * Clock style per page language: 12-hour AM/PM for English, the Arabic
 * ص/م markers (with Western digits) for Arabic, and 24-hour for French and
 * Spanish, as readers of each language expect.
 */
const TIME_FORMATS: Record<string, { locale: string; hour12: boolean }> = {
  en: { locale: "en-US", hour12: true },
  ar: { locale: "ar-u-nu-latn", hour12: true },
  fr: { locale: "fr-FR", hour12: false },
  es: { locale: "es-ES", hour12: false },
};

function formatTime(instant: Date, timeZone: string, lang: string): string {
  const f = TIME_FORMATS[lang] ?? TIME_FORMATS.en;
  return new Intl.DateTimeFormat(f.locale, {
    timeZone,
    hour: f.hour12 ? "numeric" : "2-digit",
    minute: "2-digit",
    hourCycle: f.hour12 ? "h12" : "h23",
  }).format(instant);
}

function dayKey(instant: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(instant);
}

type AvailabilityLabels = {
  days: string;
  displayZone: string;
  yourTime: string;
  picker: string;
  nextDay: string;
};

const defaultLabels: AvailabilityLabels = {
  days: "Daily — Monday to Sunday",
  displayZone: "United States (Eastern)",
  yourTime: "Your time",
  picker: "See these hours in your country / time zone:",
  nextDay: "(next day)",
};

export function AvailabilityHours({ labels = defaultLabels }: { labels?: AvailabilityLabels }) {
  const [selected, setSelected] = useState(DISPLAY_TZ);
  const [detected, setDetected] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
      setLang(document.documentElement.lang.slice(0, 2) || "en");
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz) {
          setDetected(tz);
          setSelected(tz);
        }
      } catch {
        /* keep the US default */
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // Today's date in Palestine, and the window's start/end instants.
  const { startInstant, endInstant } = useMemo(() => {
    const [y, m, d] = dayKey(new Date(), PALESTINE_TZ).split("-").map(Number);
    return {
      startInstant: wallTimeToInstant(y, m, d, WINDOW.startHour, WINDOW.startMin, PALESTINE_TZ),
      endInstant: wallTimeToInstant(y, m, d, WINDOW.endHour, WINDOW.endMin, PALESTINE_TZ),
    };
  }, []);

  // Build the options, adding the detected zone if it isn't already listed.
  const options = useMemo(() => {
    const names = ZONE_NAMES[lang];
    const list = ZONES.map((z) => ({ tz: z.tz, label: names?.[z.tz] ?? z.label }));
    if (detected && !list.some((z) => z.tz === detected)) {
      const prefix = YOUR_LOCATION[lang] ?? YOUR_LOCATION.en;
      list.unshift({ tz: detected, label: `${prefix} (${detected.replace(/_/g, " ")})` });
    }
    return list;
  }, [detected, lang]);

  const localStart = formatTime(startInstant, selected, lang);
  const localEnd = formatTime(endInstant, selected, lang);
  const crossesDay = dayKey(endInstant, selected) !== dayKey(startInstant, selected);

  // Label for the shown zone: "Your time (City)" for the visitor's own zone,
  // otherwise the picked zone's name.
  const zoneLabel =
    mounted && selected === detected
      ? `${labels.yourTime} (${selected.split("/").pop()?.replace(/_/g, " ")})`
      : (options.find((z) => z.tz === selected)?.label ?? labels.displayZone);

  return (
    <div className={styles.wrap}>
      <p className={styles.days}>{labels.days}</p>

      {/* Shown in the visitor's own time zone once detected; hidden until then so
          the server-rendered fallback time never flashes. */}
      <p className={styles.row} style={{ opacity: mounted ? 1 : 0 }}>
        <span className={styles.zoneName}>{zoneLabel}</span>
        <span className={styles.time}>
          {localStart} – {localEnd}
          {crossesDay && <span className={styles.nextDay}> {labels.nextDay}</span>}
        </span>
      </p>

      <label className={styles.picker}>
        <span>{labels.picker}</span>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className={styles.select}
          aria-label="Choose your country or time zone"
        >
          {options.map((z) => (
            <option key={z.tz} value={z.tz}>
              {z.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

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

function formatTime(instant: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
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

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
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
    const list = [...ZONES];
    if (detected && !list.some((z) => z.tz === detected)) {
      list.unshift({ tz: detected, label: `Your location (${detected.replace(/_/g, " ")})` });
    }
    return list;
  }, [detected]);

  const localStart = formatTime(startInstant, selected);
  const localEnd = formatTime(endInstant, selected);
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

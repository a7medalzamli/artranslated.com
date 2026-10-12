// One-off CMS seed: upserts cms:content:<locale> and cms:home:<locale> rows from
// the current content, skipping any that already exist. Run with:
//   SUPABASE_URL=... SUPABASE_SRK=... node --experimental-strip-types scripts/seed-cms.ts
import en from "../src/i18n/content/en.ts";
import ar from "../src/i18n/content/ar.ts";
import fr from "../src/i18n/content/fr.ts";
import es from "../src/i18n/content/es.ts";
import { localizedHome } from "../src/content/homeLocalized.ts";

const URL = process.env.SUPABASE_URL as string;
const SRK = process.env.SUPABASE_SRK as string;
const locales = ["en", "ar", "fr", "es"] as const;
const content: Record<string, unknown> = { en, ar, fr, es };

function rest(path: string, opts: RequestInit = {}) {
  return fetch(`${URL}/rest/v1/${path}`, {
    ...opts,
    headers: {
      apikey: SRK,
      Authorization: `Bearer ${SRK}`,
      "Content-Type": "application/json",
      ...(opts.headers || {}),
    },
  });
}

const existing = await (await rest("site_content?key=like.cms:*&select=key")).json();
const have = new Set((existing as { key: string }[]).map((r) => r.key));

const homeRow = await (await rest("site_content?key=eq.home&select=data")).json();
const liveHomeEn = (homeRow as { data: unknown }[])[0]?.data ?? {};

const rows: { key: string; data: unknown }[] = [];
for (const l of locales) {
  const ck = `cms:content:${l}`;
  if (!have.has(ck)) rows.push({ key: ck, data: content[l] });
  const hk = `cms:home:${l}`;
  if (!have.has(hk)) {
    rows.push({ key: hk, data: l === "en" ? liveHomeEn : (localizedHome as Record<string, unknown>)[l] });
  }
}

if (rows.length === 0) {
  console.log("Nothing to seed — all cms rows already exist.");
} else {
  const r = await rest("site_content", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates" },
    body: JSON.stringify(rows),
  });
  console.log("seed status:", r.status, "| rows:", rows.length);
  console.log("keys:", rows.map((x) => x.key).join(", "));
  if (!r.ok) console.log(await r.text());
}

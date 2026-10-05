"use client";

import { useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import type { SiteSettings } from "@/lib/content/settings";
import { saveSiteSettings } from "./actions";
import styles from "../content/content.module.css";

const PLATFORMS = ["linkedin", "whatsapp", "email"] as const;
const MAX_BYTES = 5 * 1024 * 1024;

async function uploadImage(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) throw new Error("Please choose an image file.");
  if (file.size > MAX_BYTES) throw new Error("Image must be 5 MB or smaller.");
  const supabase = createClient();
  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `site/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from("post-images").upload(path, file);
  if (error) throw new Error(error.message);
  return supabase.storage.from("post-images").getPublicUrl(path).data.publicUrl;
}

export function SettingsEditor({ initial }: { initial: SiteSettings }) {
  const [settings, setSettings] = useState<SiteSettings>(initial);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  function update(mutator: (draft: SiteSettings) => void) {
    setSettings((prev) => {
      const next = structuredClone(prev);
      mutator(next);
      return next;
    });
  }

  async function handleLogo(file: File | undefined) {
    if (!file) return;
    try {
      const url = await uploadImage(file);
      update((d) => (d.logo = url));
      setMessage({ ok: true, text: "Logo uploaded — remember to Save." });
    } catch (e) {
      setMessage({ ok: false, text: e instanceof Error ? e.message : "Upload failed." });
    }
  }

  async function save() {
    setSaving(true);
    setMessage(null);
    const result = await saveSiteSettings(settings);
    setSaving(false);
    setMessage({
      ok: result.ok,
      text: result.ok
        ? "Saved. The site header and footer are updated."
        : (result.error ?? "Error."),
    });
  }

  return (
    <div className={styles.editor}>
      <div className={styles.topbar}>
        <h1>Site settings</h1>
        <button type="button" className={styles.save} onClick={save} disabled={saving}>
          {saving ? "Saving…" : "Save changes"}
        </button>
      </div>
      {message && (
        <p className={message.ok ? styles.ok : styles.err} role="status">
          {message.text}
        </p>
      )}

      <fieldset className={styles.group}>
        <legend>Identity</legend>
        <label className={styles.field}>
          <span>Site name</span>
          <input value={settings.name} onChange={(e) => update((d) => (d.name = e.target.value))} />
        </label>
        <label className={styles.field}>
          <span>Role / descriptor</span>
          <input value={settings.role} onChange={(e) => update((d) => (d.role = e.target.value))} />
        </label>
        <label className={styles.field}>
          <span>Logo (header &amp; footer)</span>
          <div className={styles.imageRow}>
            {settings.logo && (
              <Image src={settings.logo} alt="" width={120} height={34} className={styles.thumb} />
            )}
            <input type="file" accept="image/*" onChange={(e) => handleLogo(e.target.files?.[0])} />
          </div>
        </label>
        <label className={styles.field}>
          <span>Footer tagline</span>
          <input
            value={settings.footerTagline}
            onChange={(e) => update((d) => (d.footerTagline = e.target.value))}
          />
        </label>
      </fieldset>

      <fieldset className={styles.group}>
        <legend>Social links</legend>
        {settings.socials.map((s, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardHead}>
              <strong>Link {i + 1}</strong>
              <button
                type="button"
                className={styles.remove}
                onClick={() => update((d) => d.socials.splice(i, 1))}
              >
                Remove
              </button>
            </div>
            <label className={styles.field}>
              <span>Platform</span>
              <select
                value={s.platform}
                onChange={(e) =>
                  update(
                    (d) => (d.socials[i].platform = e.target.value as (typeof PLATFORMS)[number]),
                  )
                }
              >
                {PLATFORMS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>
            <label className={styles.field}>
              <span>Label (for screen readers)</span>
              <input
                value={s.label}
                onChange={(e) => update((d) => (d.socials[i].label = e.target.value))}
              />
            </label>
            <label className={styles.field}>
              <span>Link (URL, or mailto:/https://wa.me/…)</span>
              <input
                value={s.href}
                placeholder="https://…"
                onChange={(e) => update((d) => (d.socials[i].href = e.target.value))}
              />
            </label>
          </div>
        ))}
        <button
          type="button"
          className={styles.add}
          onClick={() =>
            update((d) => d.socials.push({ platform: "linkedin", label: "", href: "" }))
          }
        >
          + Add link
        </button>
      </fieldset>

      <div className={styles.bottomBar}>
        <button type="button" className={styles.save} onClick={save} disabled={saving}>
          {saving ? "Saving…" : "Save changes"}
        </button>
      </div>
    </div>
  );
}

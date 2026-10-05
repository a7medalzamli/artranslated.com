"use client";

import { useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import type { HomeContent } from "@/lib/content/home";
import { saveHomeContent } from "./actions";
import styles from "./content.module.css";

const ICONS = ["chip", "scale", "finance", "heart", "film", "robot", "globe"] as const;
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

export function HomeContentEditor({ initial }: { initial: HomeContent }) {
  const [content, setContent] = useState<HomeContent>(initial);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  // Generic deep setter via a small immutable update helper.
  function update(mutator: (draft: HomeContent) => void) {
    setContent((prev) => {
      const next = structuredClone(prev);
      mutator(next);
      return next;
    });
  }

  async function handleUpload(file: File | undefined, apply: (url: string) => void) {
    if (!file) return;
    try {
      const url = await uploadImage(file);
      apply(url);
      setMessage({ ok: true, text: "Image uploaded — remember to Save." });
    } catch (e) {
      setMessage({ ok: false, text: e instanceof Error ? e.message : "Upload failed." });
    }
  }

  async function save() {
    setSaving(true);
    setMessage(null);
    const result = await saveHomeContent(content);
    setSaving(false);
    setMessage({
      ok: result.ok,
      text: result.ok ? "Saved. The home page is updated." : (result.error ?? "Error."),
    });
  }

  return (
    <div className={styles.editor}>
      <div className={styles.topbar}>
        <h1>Home page content</h1>
        <button type="button" className={styles.save} onClick={save} disabled={saving}>
          {saving ? "Saving…" : "Save changes"}
        </button>
      </div>
      {message && (
        <p className={message.ok ? styles.ok : styles.err} role="status">
          {message.text}
        </p>
      )}

      {/* Hero */}
      <fieldset className={styles.group}>
        <legend>Hero</legend>
        <Field label="Label">
          <input
            value={content.hero.label}
            onChange={(e) => update((d) => (d.hero.label = e.target.value))}
          />
        </Field>
        <Field label="Title">
          <textarea
            rows={2}
            value={content.hero.title}
            onChange={(e) => update((d) => (d.hero.title = e.target.value))}
          />
        </Field>
        <Field label="Lead text">
          <textarea
            rows={3}
            value={content.hero.lead}
            onChange={(e) => update((d) => (d.hero.lead = e.target.value))}
          />
        </Field>
      </fieldset>

      {/* About */}
      <fieldset className={styles.group}>
        <legend>About me</legend>
        <Field label="Title">
          <input
            value={content.about.title}
            onChange={(e) => update((d) => (d.about.title = e.target.value))}
          />
        </Field>
        <Field label="Text">
          <textarea
            rows={3}
            value={content.about.text}
            onChange={(e) => update((d) => (d.about.text = e.target.value))}
          />
        </Field>
        <Field label="Photo">
          <div className={styles.imageRow}>
            {content.about.image && (
              <Image
                src={content.about.image}
                alt=""
                width={64}
                height={64}
                className={styles.thumb}
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleUpload(e.target.files?.[0], (url) => update((d) => (d.about.image = url)))
              }
            />
          </div>
        </Field>
      </fieldset>

      {/* Services */}
      <fieldset className={styles.group}>
        <legend>Services</legend>
        <Field label="Eyebrow">
          <input
            value={content.services.eyebrow}
            onChange={(e) => update((d) => (d.services.eyebrow = e.target.value))}
          />
        </Field>
        <Field label="Section title">
          <input
            value={content.services.title}
            onChange={(e) => update((d) => (d.services.title = e.target.value))}
          />
        </Field>
        {content.services.items.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardHead}>
              <strong>Service {i + 1}</strong>
              <button
                type="button"
                className={styles.remove}
                onClick={() => update((d) => d.services.items.splice(i, 1))}
              >
                Remove
              </button>
            </div>
            <Field label="Title">
              <input
                value={item.title}
                onChange={(e) => update((d) => (d.services.items[i].title = e.target.value))}
              />
            </Field>
            <Field label="Description">
              <textarea
                rows={2}
                value={item.summary}
                onChange={(e) => update((d) => (d.services.items[i].summary = e.target.value))}
              />
            </Field>
            <Field label="Icon">
              <select
                value={item.icon}
                onChange={(e) =>
                  update(
                    (d) => (d.services.items[i].icon = e.target.value as (typeof ICONS)[number]),
                  )
                }
              >
                {ICONS.map((ic) => (
                  <option key={ic} value={ic}>
                    {ic}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        ))}
        <button
          type="button"
          className={styles.add}
          onClick={() =>
            update((d) =>
              d.services.items.push({ title: "New service", summary: "", icon: "chip" }),
            )
          }
        >
          + Add service
        </button>
      </fieldset>

      {/* Why partner */}
      <fieldset className={styles.group}>
        <legend>Why partner with me</legend>
        <Field label="Eyebrow">
          <input
            value={content.why.eyebrow}
            onChange={(e) => update((d) => (d.why.eyebrow = e.target.value))}
          />
        </Field>
        <Field label="Title">
          <input
            value={content.why.title}
            onChange={(e) => update((d) => (d.why.title = e.target.value))}
          />
        </Field>
        <Field label="Intro">
          <textarea
            rows={2}
            value={content.why.intro}
            onChange={(e) => update((d) => (d.why.intro = e.target.value))}
          />
        </Field>
        {content.why.items.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardHead}>
              <strong>Advantage {i + 1}</strong>
              <button
                type="button"
                className={styles.remove}
                onClick={() => update((d) => d.why.items.splice(i, 1))}
              >
                Remove
              </button>
            </div>
            <Field label="Title">
              <input
                value={item.title}
                onChange={(e) => update((d) => (d.why.items[i].title = e.target.value))}
              />
            </Field>
            <Field label="Text">
              <textarea
                rows={2}
                value={item.text}
                onChange={(e) => update((d) => (d.why.items[i].text = e.target.value))}
              />
            </Field>
          </div>
        ))}
        <button
          type="button"
          className={styles.add}
          onClick={() => update((d) => d.why.items.push({ title: "New advantage", text: "" }))}
        >
          + Add advantage
        </button>
      </fieldset>

      {/* Contact */}
      <fieldset className={styles.group}>
        <legend>Contact section</legend>
        <Field label="Eyebrow">
          <input
            value={content.contact.eyebrow}
            onChange={(e) => update((d) => (d.contact.eyebrow = e.target.value))}
          />
        </Field>
        <Field label="Title">
          <input
            value={content.contact.title}
            onChange={(e) => update((d) => (d.contact.title = e.target.value))}
          />
        </Field>
        <Field label="Intro">
          <textarea
            rows={2}
            value={content.contact.intro}
            onChange={(e) => update((d) => (d.contact.intro = e.target.value))}
          />
        </Field>
      </fieldset>

      {/* Partners */}
      <fieldset className={styles.group}>
        <legend>Partners</legend>
        <div className={styles.partners}>
          {content.partners.map((p, i) => (
            <div key={i} className={styles.partner}>
              {p.src ? (
                <Image src={p.src} alt="" width={56} height={56} className={styles.thumb} />
              ) : (
                <span className={styles.thumbEmpty} />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleUpload(e.target.files?.[0], (url) =>
                    update((d) => (d.partners[i].src = url)),
                  )
                }
              />
              <input
                placeholder="Name (alt text)"
                value={p.label}
                onChange={(e) => update((d) => (d.partners[i].label = e.target.value))}
              />
              <button
                type="button"
                className={styles.remove}
                onClick={() => update((d) => d.partners.splice(i, 1))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className={styles.add}
          onClick={() => update((d) => d.partners.push({ src: "", label: "" }))}
        >
          + Add partner
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      {children}
    </label>
  );
}

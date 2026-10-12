"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { uploadImageAction } from "@/lib/content/uploadImageAction";
import { saveCmsPage } from "@/lib/cms/actions";
import styles from "./content.module.css";

type Path = (string | number)[];

function humanize(key: string): string {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase());
}

function isImageKey(key: string): boolean {
  return /image|cover|logo|photo|avatar|src|url/i.test(key);
}

function setByPath(root: unknown, path: Path, value: unknown): unknown {
  if (path.length === 0) return value;
  const [head, ...rest] = path;
  if (Array.isArray(root)) {
    const next = [...root];
    next[head as number] = setByPath(next[head as number], rest, value);
    return next;
  }
  const obj = { ...(root as Record<string, unknown>) };
  obj[head as string] = setByPath(obj[head as string], rest, value);
  return obj;
}

async function uploadImage(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) throw new Error("Please choose an image file.");
  if (file.size > 5 * 1024 * 1024) throw new Error("Image must be 5 MB or smaller.");
  const fd = new FormData();
  fd.append("file", file);
  const res = await uploadImageAction(fd);
  if (res.error || !res.url) throw new Error(res.error ?? "Upload failed.");
  return res.url;
}

export function CmsEditor({
  pageId,
  pageLabel,
  locale,
  localeLabel,
  section,
}: {
  pageId: string;
  pageLabel: string;
  locale: string;
  localeLabel: string;
  section: unknown;
}) {
  const [data, setData] = useState<unknown>(section);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  // Warn before leaving with unsaved edits.
  useEffect(() => {
    if (!dirty) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  function update(path: Path, value: unknown) {
    setData((prev: unknown) => setByPath(prev, path, value));
    setDirty(true);
  }

  async function handleImage(path: Path, file: File | undefined) {
    if (!file) return;
    try {
      const url = await uploadImage(file);
      update(path, url);
      setMessage({ ok: true, text: "Image uploaded — remember to Save." });
    } catch (e) {
      setMessage({ ok: false, text: e instanceof Error ? e.message : "Upload failed." });
    }
  }

  async function save() {
    setSaving(true);
    setMessage(null);
    const res = await saveCmsPage(pageId, locale, data);
    setSaving(false);
    setDirty(!res.ok);
    setMessage({
      ok: res.ok,
      text: res.ok ? "Saved. The live page is updated." : (res.error ?? "Error."),
    });
  }

  return (
    <div className={styles.editor}>
      <div className={styles.topbar}>
        <div>
          <h1>{pageLabel}</h1>
          <p className={styles.sub}>
            Editing <strong>{localeLabel}</strong>
            {dirty ? " · unsaved changes" : ""}
          </p>
        </div>
        <button type="button" className={styles.save} onClick={save} disabled={saving}>
          {saving ? "Saving…" : "Save changes"}
        </button>
      </div>
      {message && (
        <p className={message.ok ? styles.ok : styles.err} role="status">
          {message.text}
        </p>
      )}
      <Node value={data} path={[]} onChange={update} onImage={handleImage} topLevel />
    </div>
  );
}

function Node({
  value,
  path,
  onChange,
  onImage,
  fieldKey,
  topLevel = false,
}: {
  value: unknown;
  path: Path;
  onChange: (p: Path, v: unknown) => void;
  onImage: (p: Path, f: File | undefined) => void;
  fieldKey?: string;
  topLevel?: boolean;
}) {
  // Primitive: string
  if (typeof value === "string") {
    if (fieldKey && isImageKey(fieldKey)) {
      return <ImageField value={value} path={path} onChange={onChange} onImage={onImage} />;
    }
    const multiline = value.length > 60 || value.includes("\n");
    return multiline ? (
      <textarea
        className={styles.input}
        rows={Math.min(8, Math.max(2, Math.ceil(value.length / 60)))}
        value={value}
        onChange={(e) => onChange(path, e.target.value)}
      />
    ) : (
      <input className={styles.input} value={value} onChange={(e) => onChange(path, e.target.value)} />
    );
  }

  if (typeof value === "number") {
    return (
      <input
        className={styles.input}
        type="number"
        value={value}
        onChange={(e) => onChange(path, Number(e.target.value))}
      />
    );
  }

  if (typeof value === "boolean") {
    return (
      <input type="checkbox" checked={value} onChange={(e) => onChange(path, e.target.checked)} />
    );
  }

  // Array
  if (Array.isArray(value)) {
    const primitive = value.every((v) => typeof v === "string" || typeof v === "number");
    return (
      <div className={styles.list}>
        {value.map((item, i) => (
          <div key={i} className={primitive ? styles.listRow : styles.group}>
            {!primitive && <div className={styles.itemHead}>Item {i + 1}</div>}
            <Node value={item} path={[...path, i]} onChange={onChange} onImage={onImage} />
            <button
              type="button"
              className={styles.remove}
              onClick={() => onChange(path, value.filter((_, j) => j !== i))}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className={styles.add}
          onClick={() => {
            const template = value.length > 0 ? structuredClone(value[value.length - 1]) : "";
            onChange(path, [...value, blankLike(template)]);
          }}
        >
          + Add item
        </button>
      </div>
    );
  }

  // Object
  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    const fields = entries.map(([k, v]) => (
      <div key={k} className={styles.field}>
        <label className={styles.fieldLabel}>{humanize(k)}</label>
        <Node value={v} path={[...path, k]} onChange={onChange} onImage={onImage} fieldKey={k} />
      </div>
    ));
    return topLevel ? <div>{fields}</div> : <fieldset className={styles.group}>{fields}</fieldset>;
  }

  return <em className={styles.muted}>(empty)</em>;
}

/** Produce a blank value shaped like a template (for "add item"). */
function blankLike(template: unknown): unknown {
  if (typeof template === "string") return "";
  if (typeof template === "number") return 0;
  if (typeof template === "boolean") return false;
  if (Array.isArray(template)) return [];
  if (template && typeof template === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(template)) out[k] = blankLike(v);
    return out;
  }
  return "";
}

function ImageField({
  value,
  path,
  onChange,
  onImage,
}: {
  value: string;
  path: Path;
  onChange: (p: Path, v: unknown) => void;
  onImage: (p: Path, f: File | undefined) => void;
}) {
  return (
    <div className={styles.imageField}>
      {value ? (
        <Image
          src={value}
          alt=""
          width={120}
          height={80}
          className={styles.thumb}
          unoptimized
        />
      ) : (
        <div className={styles.thumbEmpty}>No image</div>
      )}
      <div className={styles.imageControls}>
        <input
          className={styles.input}
          value={value}
          placeholder="Image URL"
          onChange={(e) => onChange(path, e.target.value)}
        />
        <label className={styles.upload}>
          Upload…
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => onImage(path, e.target.files?.[0])}
          />
        </label>
      </div>
    </div>
  );
}

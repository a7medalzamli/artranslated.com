"use client";

import { useState } from "react";
import { seedCms } from "@/lib/cms/actions";
import styles from "./content.module.css";

export function SeedButton() {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function run() {
    setBusy(true);
    setMsg(null);
    const res = await seedCms();
    setBusy(false);
    if (!res.ok) {
      setMsg({ ok: false, text: res.error ?? "Failed." });
    } else if (res.seeded === 0) {
      setMsg({ ok: true, text: "CMS already populated — nothing to import." });
    } else {
      setMsg({ ok: true, text: `Imported ${res.seeded} content document(s) from the current site.` });
    }
  }

  return (
    <div className={styles.seedBox}>
      <div>
        <strong>First-time setup</strong>
        <p className={styles.sub}>
          Import the website&rsquo;s current text into the CMS. Safe to run again — it never
          overwrites content you&rsquo;ve already edited.
        </p>
      </div>
      <button type="button" className={styles.add} onClick={run} disabled={busy}>
        {busy ? "Importing…" : "Import current content"}
      </button>
      {msg && (
        <p className={msg.ok ? styles.ok : styles.err} role="status">
          {msg.text}
        </p>
      )}
    </div>
  );
}

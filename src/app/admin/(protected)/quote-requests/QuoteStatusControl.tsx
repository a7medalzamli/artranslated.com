"use client";

import { useRef } from "react";
import type { QuoteStatus } from "@/lib/supabase/database.types";
import { updateQuoteStatus } from "./actions";
import styles from "./quotes.module.css";

export function QuoteStatusControl({ id, status }: { id: string; status: QuoteStatus }) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form action={updateQuoteStatus} ref={formRef} className={styles.statusForm}>
      <input type="hidden" name="id" value={id} />
      <label className={styles.statusLabel}>
        Status
        <select
          name="status"
          defaultValue={status}
          onChange={() => formRef.current?.requestSubmit()}
        >
          <option value="new">New</option>
          <option value="replied">Replied</option>
          <option value="closed">Closed</option>
        </select>
      </label>
    </form>
  );
}

import type { ReactNode } from "react";
import styles from "./template.module.css";

// A template (unlike a layout) is re-created on every navigation, so each new
// page plays a short fade-in instead of appearing all at once.
export default function PublicTemplate({ children }: { children: ReactNode }) {
  return <div className={styles.page}>{children}</div>;
}

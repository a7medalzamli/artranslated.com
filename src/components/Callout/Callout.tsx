import type { ReactNode } from "react";
import styles from "./Callout.module.css";

type CalloutProps = {
  children: ReactNode;
  tone?: "info" | "warning";
};

export function Callout({ children, tone = "info" }: CalloutProps) {
  return (
    <div className={`${styles.callout} ${styles[tone]}`} role="note">
      {children}
    </div>
  );
}

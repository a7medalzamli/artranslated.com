import type { ReactNode } from "react";
import { site } from "@/lib/site";
import styles from "./SocialLinks.module.css";

const icons: Record<string, ReactNode> = {
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4V24h-4V8Zm7 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78V24h-4V8Z" />
    </svg>
  ),
  x: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  ),
  email: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

export function SocialLinks({ className }: { className?: string }) {
  const items = site.socials.filter((s) => s.href);
  if (items.length === 0) return null;

  return (
    <ul className={[styles.list, className].filter(Boolean).join(" ")}>
      {items.map((s) => {
        const external = s.href.startsWith("http");
        return (
          <li key={s.platform}>
            <a
              href={s.href}
              className={styles.link}
              aria-label={s.label}
              title={s.label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {icons[s.platform]}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

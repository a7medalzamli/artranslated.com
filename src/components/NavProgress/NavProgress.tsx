"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./NavProgress.module.css";

type Phase = "idle" | "loading" | "done";

/**
 * A thin bar across the top of the window that grows while the next page
 * loads, then fills and fades out once it arrives.
 */
export function NavProgress() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");

  // The new page has arrived: finish the bar.
  useEffect(() => {
    setPhase((p) => (p === "loading" ? "done" : p));
  }, [pathname]);

  useEffect(() => {
    if (phase !== "done") return;
    const id = window.setTimeout(() => setPhase("idle"), 450);
    return () => window.clearTimeout(id);
  }, [phase]);

  // Start the bar when a link to another page on this site is clicked.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.("a");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      setPhase("loading");
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return <div aria-hidden="true" className={`${styles.bar} ${styles[phase]}`} />;
}

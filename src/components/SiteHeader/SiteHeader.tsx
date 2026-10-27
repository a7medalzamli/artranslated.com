"use client";

import { useState } from "react";
import { LocaleLink as Link } from "../LocaleLink/LocaleLink";
import Image from "next/image";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { routes } from "@/lib/routes";
import type { Dictionary } from "@/i18n";
import type { SiteSettings } from "@/lib/content/settings";
import styles from "./SiteHeader.module.css";

export function SiteHeader({ dict, settings }: { dict: Dictionary; settings: SiteSettings }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: routes.home, label: dict.nav.home },
    { href: routes.about, label: dict.nav.about },
    { href: routes.services, label: dict.nav.services },
    { href: routes.specializations, label: dict.nav.specializations },
    { href: routes.process, label: dict.nav.howItWorks },
    { href: routes.blog, label: dict.nav.blog },
    { href: routes.contact, label: dict.nav.contact },
  ];

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.bar}>
          <Link href={routes.home} className={styles.brand} aria-label={`${settings.name} — home`}>
            <Image
              src={settings.logo}
              alt={settings.name}
              width={172}
              height={40}
              className={styles.logo}
              priority
            />
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.desktopCta}>
            <LanguageSwitcher />
            <Button href={routes.contact}>{dict.actions.requestQuote}</Button>
          </div>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.actions.closeMenu : dict.actions.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" className={styles.mobileNav} aria-label="Primary">
            <ul className={styles.mobileList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.mobileLink}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className={styles.mobileCta}>
                <LanguageSwitcher className={styles.mobileSwitcher} />
                <Button href={routes.contact} size="lg" onClick={() => setOpen(false)}>
                  {dict.actions.requestQuote}
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

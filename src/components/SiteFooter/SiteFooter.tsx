import Link from "next/link";
import Image from "next/image";
import { Container } from "../Container/Container";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";
import type { Dictionary } from "@/i18n";
import type { SiteSettings } from "@/lib/content/settings";
import styles from "./SiteFooter.module.css";

export function SiteFooter({ dict, settings }: { dict: Dictionary; settings: SiteSettings }) {
  const year = new Date().getFullYear();
  const prozHref = site.memberships.find((m) => m.id === "proz")?.href ?? "#";

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link
              href={routes.home}
              className={styles.brand}
              aria-label={`${settings.name} — home`}
            >
              <Image
                src={settings.logo}
                alt={settings.name}
                width={172}
                height={40}
                className={styles.logo}
              />
            </Link>
            <p className={styles.tagline}>{settings.footerTagline}</p>
          </div>

          <nav className={styles.col} aria-label={dict.footer.servicesHeading}>
            <h2 className={styles.heading}>{dict.footer.servicesHeading}</h2>
            <ul className={styles.list}>
              <li>
                <Link href={routes.technical}>Technical</Link>
              </li>
              <li>
                <Link href={routes.legal}>Legal</Link>
              </li>
              <li>
                <Link href={routes.financial}>Financial</Link>
              </li>
              <li>
                <Link href={routes.healthcare}>Healthcare</Link>
              </li>
              <li>
                <Link href={routes.audiovisual}>Audiovisual</Link>
              </li>
            </ul>
          </nav>

          <nav className={styles.col} aria-label={dict.footer.companyHeading}>
            <h2 className={styles.heading}>{dict.footer.companyHeading}</h2>
            <ul className={styles.list}>
              <li>
                <Link href={routes.about}>{dict.footer.about}</Link>
              </li>
              <li>
                <Link href={routes.process}>{dict.footer.howItWorks}</Link>
              </li>
              <li>
                <Link href={routes.confidentiality}>{dict.nav.confidentiality}</Link>
              </li>
              <li>
                <Link href={routes.blog}>{dict.nav.blog}</Link>
              </li>
              <li>
                <Link href={routes.contact}>{dict.nav.contact}</Link>
              </li>
            </ul>
          </nav>

          <nav className={styles.col} aria-label={dict.footer.legalHeading}>
            <h2 className={styles.heading}>{dict.footer.legalHeading}</h2>
            <ul className={styles.list}>
              <li>
                <Link href={routes.terms}>{dict.footer.terms}</Link>
              </li>
              <li>
                <Link href={routes.privacy}>{dict.footer.privacy}</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.col}>
            <h2 className={styles.heading}>{dict.footer.contactHeading}</h2>
            <ul className={styles.list}>
              <li>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </li>
              <li>
                <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.credBadges}>
          <a
            href={prozHref}
            className={styles.credBadge}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ProZ.com Certified PRO — Professional Translator (opens in a new tab)"
          >
            <Image
              src="/proz-certified-pro.jpg"
              alt="ProZ.com Certified PRO — Professional Translator, member of the ProZ.com Certified PRO Network"
              width={1600}
              height={528}
              className={styles.credImg}
            />
          </a>
          <Image
            src="/twb-trados.jpg"
            alt="Translators without Borders — I work with Trados"
            width={1600}
            height={528}
            className={`${styles.credBadge} ${styles.credImg}`}
          />
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {year} {settings.name}. {dict.footer.rightsReserved}
          </p>
          <SocialLinks socials={settings.socials} className={styles.footerSocials} />
        </div>
      </Container>
    </footer>
  );
}

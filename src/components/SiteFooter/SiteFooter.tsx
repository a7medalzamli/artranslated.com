import Link from "next/link";
import Image from "next/image";
import { Container } from "../Container/Container";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";
import type { Dictionary } from "@/i18n";
import styles from "./SiteFooter.module.css";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <p className={styles.brand}>{site.name}</p>
            <p className={styles.tagline}>{dict.footer.tagline}</p>
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
                <Link href={routes.process}>{dict.nav.process}</Link>
              </li>
              <li>
                <Link href={routes.confidentiality}>{dict.nav.confidentiality}</Link>
              </li>
              <li>
                <Link href={routes.work}>{dict.nav.work}</Link>
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
        </div>

        <ul className={styles.badges}>
          {site.badges.map((badge, i) => {
            const external = badge.href.startsWith("http");
            return (
              <li key={`${badge.src}-${i}`}>
                <a
                  href={badge.href}
                  className={styles.badgeLink}
                  aria-label={badge.label}
                  title={badge.label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Image
                    src={badge.src}
                    alt={badge.label}
                    width={120}
                    height={60}
                    className={styles.badgeImg}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className={styles.bottom}>
          <p>
            &copy; {year} {site.name}. {dict.footer.rightsReserved}
          </p>
        </div>
      </Container>
    </footer>
  );
}

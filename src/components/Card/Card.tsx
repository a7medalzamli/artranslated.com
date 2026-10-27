import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
  children: ReactNode;
  href?: string;
  /** When set with href, renders a labelled link; without it the whole card links. */
  linkLabel?: string;
  /** Optional decorative photo shown across the top of the card. */
  image?: string;
};

function CardImage({ src }: { src: string }) {
  return (
    <div className={styles.media}>
      <Image src={src} alt="" fill sizes="(min-width: 60em) 33vw, (min-width: 40em) 50vw, 100vw" />
    </div>
  );
}

export function Card({ title, children, href, linkLabel, image }: CardProps) {
  if (href && !linkLabel) {
    return (
      <Link href={href} className={`${styles.card} ${styles.clickable}`}>
        {image && <CardImage src={image} />}
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.body}>{children}</div>
        <span className={styles.arrow} aria-hidden="true">
          &rarr;
        </span>
      </Link>
    );
  }

  return (
    <div className={styles.card}>
      {image && <CardImage src={image} />}
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>{children}</div>
      {href && linkLabel && (
        <Link href={href} className={styles.link}>
          {linkLabel} <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </div>
  );
}

export function CardGrid({ children, columns = 3 }: { children: ReactNode; columns?: 2 | 3 }) {
  return (
    <div className={`${styles.grid} ${columns === 2 ? styles.cols2 : styles.cols3}`}>
      {children}
    </div>
  );
}

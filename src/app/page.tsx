import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <span className={styles.badge}>Site coming soon</span>
        <h1 className={styles.title}>
          English, French &amp; Spanish
          <br />
          into Arabic translation
        </h1>
        <p className={styles.subtitle}>
          Technical &middot; Legal &middot; Financial &middot; Healthcare &middot; Audiovisual
        </p>
        <div className={styles.sample} lang="en">
          <span>The report must comply with local environmental regulations.</span>
          <span className={styles.sampleAr} lang="ar">
            يجب أن يتوافق التقرير مع اللوائح البيئية المحلية.
          </span>
        </div>
        <p className={styles.status}>Milestone 1 &mdash; project foundation deployed.</p>
      </main>
    </div>
  );
}

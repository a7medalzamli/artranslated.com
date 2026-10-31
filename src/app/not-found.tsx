import Link from "next/link";
import styles from "./not-found.module.css";

/**
 * Site-wide "page not found" page. Kept self-contained (no header, footer or
 * database reads) so it can never fail and turn a missing page into a server
 * error. It can't know the visitor's language here, so it speaks all four.
 */
const LANGS = [
  { code: "en", dir: "ltr", title: "Page not found", text: "The page you’re looking for doesn’t exist or may have moved.", home: "Go to the home page" },
  { code: "ar", dir: "rtl", title: "الصفحة غير موجودة", text: "الصفحة التي تبحث عنها غير موجودة أو ربما نُقلت.", home: "الذهاب إلى الصفحة الرئيسية" },
  { code: "fr", dir: "ltr", title: "Page introuvable", text: "La page que vous cherchez n’existe pas ou a été déplacée.", home: "Aller à l’accueil" },
  { code: "es", dir: "ltr", title: "Página no encontrada", text: "La página que buscas no existe o se ha movido.", home: "Ir a la página de inicio" },
] as const;

export default function NotFound() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.inner}>
        <p className={styles.code}>404</p>
        <p className={styles.brand}>Translated into Arabic (TIA)</p>
        <ul className={styles.list}>
          {LANGS.map((l) => (
            <li key={l.code} lang={l.code} dir={l.dir} className={styles.item}>
              <h2 className={styles.title}>{l.title}</h2>
              <p className={styles.text}>{l.text}</p>
              <Link href={`/${l.code}`} className={styles.link}>
                {l.home}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

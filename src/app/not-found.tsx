import { getDictionary, defaultLocale } from "@/i18n";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { getSiteSettings } from "@/lib/content/getSiteSettings";
import { routes } from "@/lib/routes";
import styles from "./not-found.module.css";

export default async function NotFound() {
  const dict = getDictionary(defaultLocale);
  const settings = await getSiteSettings();

  return (
    <>
      <SiteHeader dict={dict} settings={settings} />
      <main id="main-content" className={styles.main}>
        <Container>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.text}>
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
          </p>
          <div className={styles.actions}>
            <Button href={routes.home} size="lg">
              Go to home
            </Button>
            <Button href={routes.services} variant="secondary" size="lg">
              Browse services
            </Button>
          </div>
        </Container>
      </main>
      <SiteFooter dict={dict} settings={settings} />
    </>
  );
}

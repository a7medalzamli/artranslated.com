import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import styles from "./CTA.module.css";

type CTAAction = { label: string; href: string };

type CTAProps = {
  title: string;
  description?: string;
  primary: CTAAction;
  secondary?: CTAAction;
};

export function CTA({ title, description, primary, secondary }: CTAProps) {
  return (
    <section className={styles.cta}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.text}>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
          </div>
          <div className={styles.actions}>
            <Button href={primary.href} variant="primary" size="lg">
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="secondary" size="lg">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

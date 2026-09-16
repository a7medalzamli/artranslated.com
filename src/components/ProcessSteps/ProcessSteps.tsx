import styles from "./ProcessSteps.module.css";

export type ProcessStep = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className={styles.list}>
      {steps.map((step, index) => (
        <li key={step.title} className={styles.step}>
          <span className={styles.number} aria-hidden="true">
            {index + 1}
          </span>
          <div className={styles.content}>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

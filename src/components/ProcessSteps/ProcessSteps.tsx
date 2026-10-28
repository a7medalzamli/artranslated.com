import styles from "./ProcessSteps.module.css";

export type ProcessStep = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
};

/**
 * Workflow steps as a row of circles: a large step number above each circle,
 * with the step's title and description inside it. Wraps on smaller screens.
 */
export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className={styles.list}>
      {steps.map((step, index) => (
        <li key={step.title} className={styles.step}>
          <span className={styles.number} aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className={styles.circle}>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

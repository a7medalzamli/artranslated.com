/**
 * Additional (granular) services highlighted in the brief. Shown on the services
 * overview and relevant specialization pages.
 */
export type AdditionalService = {
  title: string;
  summary: string;
};

export const additionalServices: AdditionalService[] = [
  {
    title: "Machine translation post-editing (MTPE)",
    summary:
      "Editing machine-translated output to human quality — correcting accuracy, terminology and style while keeping turnaround efficient.",
  },
  {
    title: "Transcreation & UI copy",
    summary:
      "Adapting marketing and product interface copy so it reads naturally in Arabic and preserves intent, tone and conversion — informed by a marketing background.",
  },
  {
    title: "Digital product testing",
    summary:
      "Reviewing localized apps and interfaces in context to catch layout, truncation and usability issues before release.",
  },
  {
    title: "AI data annotation & evaluation (RLHF)",
    summary:
      "Evaluating and ranking AI-generated Arabic output, correcting errors and giving structured feedback to improve model quality and safety.",
  },
  {
    title: "Dubbing adaptation with lip-sync",
    summary:
      "Adapting timecoded scripts and adjusting Arabic syllable counts to match on-screen lip movements, while carrying the original meaning and emotion.",
  },
];

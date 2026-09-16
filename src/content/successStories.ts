/**
 * Anonymized success stories, taken from the content brief. Wording is drawn
 * directly from the brief; no additional clients, metrics or claims are invented.
 * (Confirm the figures — e.g. word counts, QA pass rate — are safe to publish;
 * tracked in PLACEHOLDERS.md.)
 */
export type SuccessStory = {
  id: string;
  title: string;
  languagePair: string;
  scope: string;
  challenge: string;
  solution: string;
  result: string;
};

export const successStories: SuccessStory[] = [
  {
    id: "environmental-manual",
    title: "Environmental engineering manual localization",
    languagePair: "English → Arabic",
    scope:
      "A multinational infrastructure firm required the localization of a 50,000-word environmental engineering manual from English into Arabic.",
    challenge:
      "The text contained highly specialized technical terminology that needed to align with strict local regulations, and the agency required a rapid turnaround without compromising quality.",
    solution:
      "I developed a comprehensive bilingual glossary approved by the client before starting, then used SDL Trados to maintain strict terminology consistency across the entire document and applied a full TEP (Translation, Editing, Proofreading) workflow.",
    result:
      "The project was delivered ahead of schedule with a 100% pass rate on the agency's automated QA checks, allowing the firm to launch their project in the Middle East on time.",
  },
  {
    id: "audiovisual-dubbing",
    title: "Audiovisual & dubbing — thriller series",
    languagePair: "Spanish → Arabic",
    scope:
      "A major European localization agency required translation and dubbing adaptation from Spanish into Arabic for a 10-episode thriller series destined for a global streaming platform.",
    challenge:
      "The project required strict lip-sync alignment and timing precision. The script also contained culturally specific Spanish idioms that needed to carry the same emotional weight and dramatic tension in Arabic without sounding unnatural.",
    solution:
      "I translated the timecoded scripts, meticulously adjusting the Arabic syllable count to match the on-screen actors' lip movements, and transcreated the cultural nuances so the dialogue felt native to Arab audiences while respecting the original director's intent.",
    result:
      "The studio accepted the adapted script with zero rejections for timing or cultural misalignment, allowing the agency to deliver the localized series on a tight deadline.",
  },
  {
    id: "marketing-ai-annotation",
    title: "Digital marketing & AI data annotation",
    languagePair: "English & French → Arabic",
    scope:
      "A global technology company needed to localize their digital product interface and optimize their machine learning outputs for the MENA region, translating from English and French into Arabic.",
    challenge:
      "A literal translation of the app's interface would have resulted in poor user experience. The client also needed a subject-matter expert to evaluate and rank AI-generated responses (RLHF) so the AI sounded natural, safe and contextually accurate in Arabic.",
    solution:
      "I drew on my marketing diploma to transcreate the UI/UX copy for a seamless user journey, and for the AI component I rigorously evaluated model outputs, corrected machine translation errors (MTPE) and provided structural feedback to train the language model.",
    result:
      "The localized interface drove higher user engagement in the target market, and the data annotation improved the AI model's natural-language accuracy for Arabic-speaking users.",
  },
];

import type { Locale } from "@/i18n";

/**
 * Client reviews from Ahmed's public ProZ.com profile (WWA feedback), lightly
 * edited for grammar. Non-English pages show a translation with a note.
 */
export const PROZ_PROFILE = "https://www.proz.com/profile/2522215";

type Review = {
  name: string;
  company: string;
  /** ISO date of the review on ProZ. */
  date: string;
  quote: Record<Locale, string>;
  /** Project details shown under the quote. */
  tag: Record<Locale, string>;
};

export const reviews: Review[] = [
  {
    name: "Irene B.",
    company: "Berba Translations SL",
    date: "2022-11-25",
    quote: {
      en: "He helped us with a specialized engineering translation. Throughout the project, he asked questions to clear up any doubts and delivered high-quality work. He is reliable, accurate and on time.",
      ar: "ساعدنا في ترجمة هندسية متخصصة. وطوال المشروع كان يطرح الأسئلة لتوضيح أي لبس، وسلّم عملًا عالي الجودة. إنه موثوق ودقيق ويلتزم بالمواعيد.",
      fr: "Il nous a aidés pour une traduction spécialisée en ingénierie. Tout au long du projet, il a posé des questions pour lever le moindre doute et a livré un travail de grande qualité. Il est fiable, précis et ponctuel.",
      es: "Nos ayudó con una traducción especializada de ingeniería. Durante todo el proyecto hizo preguntas para aclarar cualquier duda y entregó un trabajo de gran calidad. Es fiable, preciso y puntual.",
    },
    tag: { en: "Engineering translation", ar: "ترجمة هندسية", fr: "Traduction en ingénierie", es: "Traducción de ingeniería" },
  },
  {
    name: "Ahmed Mahany",
    company: "ALTARGAMA / Al Rwad Translation Centre",
    date: "2025-01-06",
    quote: {
      en: "A professional and reliable translator.",
      ar: "مترجم محترف وموثوق.",
      fr: "Un traducteur professionnel et fiable.",
      es: "Un traductor profesional y fiable.",
    },
    tag: {
      en: "French → Arabic · Accounting",
      ar: "من الفرنسية إلى العربية · محاسبة",
      fr: "Français → arabe · Comptabilité",
      es: "Francés → árabe · Contabilidad",
    },
  },
  {
    name: "Huda Al-Hussain",
    company: "Al-Andalus",
    date: "2025-01-18",
    quote: {
      en: "A diligent translator with wide experience, strong skills and a broad knowledge of languages. You can certainly depend on him.",
      ar: "مترجم مجتهد يتمتع بخبرة واسعة ومهارات قوية ومعرفة عميقة باللغات. يمكنك الاعتماد عليه بكل تأكيد.",
      fr: "Un traducteur consciencieux, doté d’une vaste expérience, de solides compétences et d’une large connaissance des langues. Vous pouvez compter sur lui sans hésiter.",
      es: "Un traductor diligente, con amplia experiencia, grandes habilidades y un amplio conocimiento de idiomas. Sin duda, puedes confiar en él.",
    },
    tag: { en: "Spanish → Arabic", ar: "من الإسبانية إلى العربية", fr: "Espagnol → arabe", es: "Español → árabe" },
  },
];

export const reviewLabels: Record<
  Locale,
  { title: string; intro: string; all: string; translated: string; stars: string; badge: string }
> = {
  en: {
    title: "What clients say",
    intro: "Feedback from translation agencies I have worked with, published on my ProZ.com profile.",
    all: "Read all reviews on ProZ.com",
    translated: "",
    stars: "5 out of 5 stars",
    badge: "ProZ.com Certified PRO: verify my profile",
  },
  ar: {
    title: "آراء العملاء",
    intro: "آراء وكالات ترجمة عملت معها، منشورة في ملفي على ProZ.com.",
    all: "اقرأ جميع التقييمات على ProZ.com",
    translated: "مترجم من الإنجليزية",
    stars: "5 من 5 نجوم",
    badge: "عضو ProZ.com Certified PRO: تحقّق من ملفي",
  },
  fr: {
    title: "Ce que disent mes clients",
    intro: "Avis d’agences de traduction avec lesquelles j’ai travaillé, publiés sur mon profil ProZ.com.",
    all: "Lire tous les avis sur ProZ.com",
    translated: "Traduit de l’anglais",
    stars: "5 étoiles sur 5",
    badge: "ProZ.com Certified PRO : vérifier mon profil",
  },
  es: {
    title: "Lo que dicen mis clientes",
    intro: "Opiniones de agencias de traducción con las que he trabajado, publicadas en mi perfil de ProZ.com.",
    all: "Leer todas las opiniones en ProZ.com",
    translated: "Traducido del inglés",
    stars: "5 de 5 estrellas",
    badge: "ProZ.com Certified PRO: verifica mi perfil",
  },
};

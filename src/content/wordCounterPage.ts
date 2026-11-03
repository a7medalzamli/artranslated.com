import type { Locale } from "@/i18n";
import type { FaqItem } from "@/content/faqs";

/** Text for the free Word Counter tool page, in each language. */
export type WordCounterText = {
  crumb: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  ui: {
    label: string;
    placeholder: string;
    words: string;
    characters: string;
    charactersNoSpaces: string;
    sentences: string;
    paragraphs: string;
    readingTime: string;
    minutes: string;
    openFile: string;
    clear: string;
    estimateTitle: string;
    /** "{n}" is replaced by the number of working days. */
    estimateDays: string;
    estimateDay: string;
    estimateNote: string;
    cjkNote: string;
    privacy: string;
    /** "{n}" is replaced by the word count. */
    quoteButton: string;
    empty: string;
  };
  howTitle: string;
  how: string[];
  faqTitle: string;
  faq: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

const en: WordCounterText = {
  crumb: "Word counter",
  title: "Word Counter & Arabic Translation Time Estimator",
  seoTitle: "Free Word Counter & Arabic Translation Time Estimator",
  seoDescription:
    "Count words and characters in any language, including Chinese and Japanese, and see how long an Arabic translation takes. Free, private, in your browser.",
  intro:
    "Paste your text to count words, characters, sentences and paragraphs in any language, and see how long its translation into Arabic would take. Everything happens in your browser: your text is never sent or saved.",
  ui: {
    label: "Your text",
    placeholder: "Paste or type your text here…",
    words: "Words",
    characters: "Characters",
    charactersNoSpaces: "Characters (no spaces)",
    sentences: "Sentences",
    paragraphs: "Paragraphs",
    readingTime: "Reading time",
    minutes: "min",
    openFile: "Open a .txt file",
    clear: "Clear",
    estimateTitle: "Estimated translation time into Arabic",
    estimateDays: "{n} working days",
    estimateDay: "1 working day",
    estimateNote:
      "Based on a capacity of at least 5,000 words a day. Editing, proofreading and the exact deadline are confirmed in your quote.",
    cjkNote:
      "Your text contains Chinese, Japanese or Korean characters. These languages are usually counted by character; the exact count is confirmed in your quote.",
    privacy: "Your text stays on your device. Nothing is uploaded.",
    quoteButton: "Request a quote for {n} words",
    empty: "Start typing or paste a text to see the counts.",
  },
  howTitle: "How the count and the estimate work",
  how: [
    "Words are counted the way translation tools count them: numbers and words joined by hyphens or apostrophes count as one word. For Chinese and Japanese, which have no spaces, the text is split into words automatically.",
    "The translation time is calculated from a capacity of at least 5,000 words a day for translation into Arabic. Repeated text, formatting and review steps can change the final deadline, so it is always confirmed in your quote.",
  ],
  faqTitle: "Frequently asked questions",
  faq: [
    {
      q: "Is my text private?",
      a: "Yes. The counter runs entirely in your browser. Your text is not sent to any server, stored or shared.",
    },
    {
      q: "How long does a translation into Arabic take?",
      a: "I translate at least 5,000 words a day, so a 10,000-word document takes about two working days, plus time for editing and proofreading when needed. Small updates are usually returned within 1–2 working days.",
    },
    {
      q: "Why do translators work with word counts?",
      a: "The number of source words is the standard way to plan a translation project, estimate its timeline and prepare a quote, so it helps to know it before you ask.",
    },
    {
      q: "Which languages can I translate into Arabic?",
      a: "I translate from English, French and Spanish into Arabic, and from Arabic into English, for websites, SaaS products, marketing and legal, technical, financial and healthcare content.",
      link: { label: "See the translation service", href: "/services/translation" },
    },
  ],
  ctaTitle: "Need this text in Arabic?",
  ctaText: "Send the text or the file and receive a clear quote and deadline.",
  ctaButton: "Request a quote",
};

const ar: WordCounterText = {
  crumb: "عدّاد الكلمات",
  title: "عدّاد الكلمات وتقدير مدة الترجمة إلى العربية",
  seoTitle: "عدّاد كلمات مجاني وتقدير مدة الترجمة إلى العربية",
  seoDescription:
    "عُدّ الكلمات والأحرف بأي لغة، بما فيها الصينية واليابانية، واعرف المدة التقريبية لترجمة النص إلى العربية. مجاني وخاص ويعمل في متصفحك.",
  intro:
    "الصق نصك لتعدّ كلماته وأحرفه وجمله وفقراته بأي لغة، وتعرف المدة التقريبية لترجمته إلى العربية. يجري كل شيء داخل متصفحك، فلا يُرسَل نصك ولا يُحفَظ.",
  ui: {
    label: "نصك",
    placeholder: "الصق نصك أو اكتبه هنا…",
    words: "الكلمات",
    characters: "الأحرف",
    charactersNoSpaces: "الأحرف (دون مسافات)",
    sentences: "الجمل",
    paragraphs: "الفقرات",
    readingTime: "مدة القراءة",
    minutes: "دقيقة",
    openFile: "افتح ملف ‎.txt",
    clear: "مسح",
    estimateTitle: "المدة التقريبية للترجمة إلى العربية",
    estimateDays: "{n} أيام عمل",
    estimateDay: "يوم عمل واحد",
    estimateNote:
      "تُحسَب على أساس ترجمة 5,000 كلمة يوميًا على الأقل. ويُحدَّد التحرير والتدقيق والموعد النهائي الدقيق في عرض السعر.",
    cjkNote:
      "يحتوي نصك على أحرف صينية أو يابانية أو كورية، وتُحسَب هذه اللغات عادةً بعدد الأحرف، ويُؤكَّد العدد الدقيق في عرض السعر.",
    privacy: "يبقى نصك على جهازك، ولا يُرفَع أي شيء.",
    quoteButton: "اطلب عرض سعر لـ {n} كلمة",
    empty: "ابدأ الكتابة أو الصق نصًا لترى الأعداد.",
  },
  howTitle: "كيف يجري العدّ والتقدير",
  how: [
    "تُعَدّ الكلمات بالطريقة التي تعدّها بها أدوات الترجمة: الأرقام والكلمات الموصولة بشرطة أو فاصلة عليا تُحسَب كلمة واحدة. أما الصينية واليابانية، وهما لغتان بلا مسافات، فيُقسَّم نصهما إلى كلمات تلقائيًا.",
    "تُحسَب مدة الترجمة على أساس ترجمة 5,000 كلمة يوميًا على الأقل إلى العربية. وقد تغيّر النصوص المتكررة والتنسيق ومراحل المراجعة الموعد النهائي، لذا يُؤكَّد دائمًا في عرض السعر.",
  ],
  faqTitle: "الأسئلة الشائعة",
  faq: [
    {
      q: "هل نصي خاص؟",
      a: "نعم. يعمل العدّاد بالكامل داخل متصفحك، ولا يُرسَل نصك إلى أي خادم، ولا يُخزَّن ولا يُشارَك.",
    },
    {
      q: "كم تستغرق الترجمة إلى العربية؟",
      a: "أترجم 5,000 كلمة يوميًا على الأقل، فتستغرق وثيقة من 10,000 كلمة نحو يومَي عمل، إضافةً إلى وقت التحرير والتدقيق عند الحاجة. وتُسلَّم التحديثات الصغيرة عادةً خلال يوم إلى يومَي عمل.",
    },
    {
      q: "لماذا يعتمد المترجمون على عدد الكلمات؟",
      a: "عدد كلمات النص المصدر هو الطريقة المعتمدة لتخطيط مشروع الترجمة وتقدير مدته وإعداد عرض السعر، لذا يفيدك أن تعرفه قبل أن تسأل.",
    },
    {
      q: "من أي لغات تترجم إلى العربية؟",
      a: "أترجم من الإنجليزية والفرنسية والإسبانية إلى العربية، ومن العربية إلى الإنجليزية، للمواقع والبرمجيات (SaaS) والتسويق والمحتوى القانوني والتقني والمالي والصحي.",
      link: { label: "اطّلع على خدمة الترجمة", href: "/services/translation" },
    },
  ],
  ctaTitle: "تحتاج هذا النص بالعربية؟",
  ctaText: "أرسل النص أو الملف واحصل على عرض سعر وموعد تسليم واضحين.",
  ctaButton: "اطلب عرض سعر",
};

const fr: WordCounterText = {
  crumb: "Compteur de mots",
  title: "Compteur de mots et délai de traduction en arabe",
  seoTitle: "Compteur de mots gratuit et délai de traduction en arabe",
  seoDescription:
    "Comptez les mots et les caractères dans toutes les langues, y compris le chinois et le japonais, et estimez le délai d’une traduction en arabe. Gratuit et privé.",
  intro:
    "Collez votre texte pour compter ses mots, caractères, phrases et paragraphes, dans n’importe quelle langue, et estimer le délai de sa traduction en arabe. Tout se passe dans votre navigateur : votre texte n’est jamais envoyé ni enregistré.",
  ui: {
    label: "Votre texte",
    placeholder: "Collez ou saisissez votre texte ici…",
    words: "Mots",
    characters: "Caractères",
    charactersNoSpaces: "Caractères (sans espaces)",
    sentences: "Phrases",
    paragraphs: "Paragraphes",
    readingTime: "Temps de lecture",
    minutes: "min",
    openFile: "Ouvrir un fichier .txt",
    clear: "Effacer",
    estimateTitle: "Délai estimé de traduction en arabe",
    estimateDays: "{n} jours ouvrés",
    estimateDay: "1 jour ouvré",
    estimateNote:
      "Calculé sur une capacité d’au moins 5 000 mots par jour. La révision, la relecture et le délai exact sont confirmés dans votre devis.",
    cjkNote:
      "Votre texte contient des caractères chinois, japonais ou coréens. Ces langues se comptent généralement en caractères ; le décompte exact est confirmé dans votre devis.",
    privacy: "Votre texte reste sur votre appareil. Rien n’est envoyé.",
    quoteButton: "Demander un devis pour {n} mots",
    empty: "Commencez à écrire ou collez un texte pour voir les résultats.",
  },
  howTitle: "Comment fonctionnent le décompte et l’estimation",
  how: [
    "Les mots sont comptés comme dans les outils de traduction : les nombres et les mots reliés par un trait d’union ou une apostrophe comptent pour un mot. Pour le chinois et le japonais, qui s’écrivent sans espaces, le texte est découpé en mots automatiquement.",
    "Le délai est calculé sur une capacité d’au moins 5 000 mots par jour pour la traduction vers l’arabe. Les répétitions, la mise en forme et les étapes de révision peuvent modifier le délai final, qui est donc toujours confirmé dans votre devis.",
  ],
  faqTitle: "Questions fréquentes",
  faq: [
    {
      q: "Mon texte reste-t-il privé ?",
      a: "Oui. Le compteur fonctionne entièrement dans votre navigateur. Votre texte n’est envoyé à aucun serveur, ni stocké, ni partagé.",
    },
    {
      q: "Combien de temps prend une traduction en arabe ?",
      a: "Je traduis au moins 5 000 mots par jour : un document de 10 000 mots demande environ deux jours ouvrés, plus le temps de révision et de relecture si nécessaire. Les petites mises à jour sont généralement livrées sous 1 à 2 jours ouvrés.",
    },
    {
      q: "Pourquoi les traducteurs travaillent-ils au nombre de mots ?",
      a: "Le nombre de mots source est la référence pour planifier un projet de traduction, estimer son délai et préparer un devis : mieux vaut le connaître avant de demander.",
    },
    {
      q: "Depuis quelles langues traduisez-vous vers l’arabe ?",
      a: "Je traduis de l’anglais, du français et de l’espagnol vers l’arabe, et de l’arabe vers l’anglais : sites web, produits SaaS, marketing, contenus juridiques, techniques, financiers et médicaux.",
      link: { label: "Voir le service de traduction", href: "/services/translation" },
    },
  ],
  ctaTitle: "Besoin de ce texte en arabe ?",
  ctaText: "Envoyez le texte ou le fichier et recevez un devis et un délai clairs.",
  ctaButton: "Demander un devis",
};

const es: WordCounterText = {
  crumb: "Contador de palabras",
  title: "Contador de palabras y plazo de traducción al árabe",
  seoTitle: "Contador de palabras gratis y plazo de traducción al árabe",
  seoDescription:
    "Cuenta palabras y caracteres en cualquier idioma, incluidos el chino y el japonés, y calcula el plazo de una traducción al árabe. Gratis y privado.",
  intro:
    "Pega tu texto para contar sus palabras, caracteres, frases y párrafos en cualquier idioma, y calcular cuánto tardaría su traducción al árabe. Todo ocurre en tu navegador: tu texto nunca se envía ni se guarda.",
  ui: {
    label: "Tu texto",
    placeholder: "Pega o escribe tu texto aquí…",
    words: "Palabras",
    characters: "Caracteres",
    charactersNoSpaces: "Caracteres (sin espacios)",
    sentences: "Frases",
    paragraphs: "Párrafos",
    readingTime: "Tiempo de lectura",
    minutes: "min",
    openFile: "Abrir un archivo .txt",
    clear: "Borrar",
    estimateTitle: "Plazo estimado de traducción al árabe",
    estimateDays: "{n} días hábiles",
    estimateDay: "1 día hábil",
    estimateNote:
      "Calculado sobre una capacidad de al menos 5.000 palabras al día. La edición, la revisión y el plazo exacto se confirman en tu presupuesto.",
    cjkNote:
      "Tu texto contiene caracteres chinos, japoneses o coreanos. Estos idiomas suelen contarse por caracteres; el recuento exacto se confirma en tu presupuesto.",
    privacy: "Tu texto se queda en tu dispositivo. No se sube nada.",
    quoteButton: "Pedir presupuesto para {n} palabras",
    empty: "Empieza a escribir o pega un texto para ver los resultados.",
  },
  howTitle: "Cómo funcionan el recuento y el cálculo",
  how: [
    "Las palabras se cuentan como en las herramientas de traducción: los números y las palabras unidas por guion o apóstrofo cuentan como una sola. En chino y japonés, que se escriben sin espacios, el texto se divide en palabras automáticamente.",
    "El plazo se calcula sobre una capacidad de al menos 5.000 palabras al día para la traducción al árabe. El texto repetido, el formato y las fases de revisión pueden cambiar el plazo final, por eso siempre se confirma en tu presupuesto.",
  ],
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      q: "¿Mi texto es privado?",
      a: "Sí. El contador funciona por completo en tu navegador. Tu texto no se envía a ningún servidor, ni se guarda ni se comparte.",
    },
    {
      q: "¿Cuánto tarda una traducción al árabe?",
      a: "Traduzco al menos 5.000 palabras al día, así que un documento de 10.000 palabras lleva unos dos días hábiles, más el tiempo de edición y revisión cuando hace falta. Las actualizaciones pequeñas se entregan normalmente en 1 o 2 días hábiles.",
    },
    {
      q: "¿Por qué los traductores trabajan con el número de palabras?",
      a: "El número de palabras del texto original es la referencia para planificar un proyecto de traducción, calcular su plazo y preparar un presupuesto, así que conviene conocerlo antes de preguntar.",
    },
    {
      q: "¿Desde qué idiomas traduces al árabe?",
      a: "Traduzco del inglés, el francés y el español al árabe, y del árabe al inglés: webs, productos SaaS, marketing y contenido jurídico, técnico, financiero y sanitario.",
      link: { label: "Ver el servicio de traducción", href: "/services/translation" },
    },
  ],
  ctaTitle: "¿Necesitas este texto en árabe?",
  ctaText: "Envía el texto o el archivo y recibe un presupuesto y un plazo claros.",
  ctaButton: "Pedir presupuesto",
};

const all: Record<Locale, WordCounterText> = { en, ar, fr, es };

export function getWordCounterText(locale: string): WordCounterText {
  return all[locale as Locale] ?? en;
}

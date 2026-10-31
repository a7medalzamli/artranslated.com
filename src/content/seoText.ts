import type { Locale } from "@/i18n";

/**
 * Search-result titles and descriptions for pages whose on-page text is too
 * short (or empty) to serve as a meta description. Kept in code so stale CMS
 * values can't blank them. Descriptions aim for 120–160 characters.
 * A non-empty SEO override saved in the CMS still takes priority.
 */
type SeoText = {
  homeTitle: string;
  home: string;
  about: string;
  process: string;
  contact: string;
  blog: string;
};

const en: SeoText = {
  homeTitle: "Arabic Translation & Localization Services",
  home: "Professional English, French and Spanish to Arabic translation and localization for websites, SaaS, marketing, legal, technical and healthcare content.",
  about: "Ahmed Alzamli, English, French and Spanish to Arabic translator and localizer, helping clients expand into Arabic-speaking markets with accurate, native content.",
  process: "How your Arabic translation project runs, step by step: translation, editing and proofreading (TEP), quality checks, CAT tools and on-time delivery.",
  contact: "Request a quote for Arabic translation or localization. Share your languages, subject and deadline and get a clear, tailored quote by email.",
  blog: "Articles on Arabic translation, localization, transcreation and terminology: practical tips for reaching Arabic-speaking audiences.",
};

const ar: SeoText = {
  homeTitle: "خدمات الترجمة والتوطين إلى العربية",
  home: "ترجمة وتوطين احترافي من الإنجليزية والفرنسية والإسبانية إلى العربية للمواقع الإلكترونية والبرمجيات والتسويق والمحتوى القانوني والتقني والطبي.",
  about: "أحمد الزاملي، مترجم ومختص في التوطين من الإنجليزية والفرنسية والإسبانية إلى العربية، يساعد العملاء على التوسّع في الأسواق العربية بمحتوى دقيق وأصيل.",
  process: "كيف يُنجَز مشروع الترجمة إلى العربية خطوة بخطوة: الترجمة والتحرير والتدقيق، وفحوص الجودة، وأدوات الترجمة بمساعدة الحاسوب، والتسليم في الموعد.",
  contact: "اطلب عرض سعر لخدمات الترجمة أو التوطين إلى العربية. شاركني اللغات والموضوع والموعد النهائي، وستصلك عبر البريد الإلكتروني عرض سعر واضح ومفصّل.",
  blog: "مقالات عن الترجمة إلى العربية والتوطين وإعادة الصياغة الإبداعية والمصطلحات: نصائح عملية للوصول إلى الجمهور الناطق بالعربية.",
};

const fr: SeoText = {
  homeTitle: "Traduction et localisation vers l’arabe",
  home: "Traduction et localisation professionnelles de l’anglais, du français et de l’espagnol vers l’arabe : sites web, SaaS, marketing, juridique, technique et santé.",
  about: "Ahmed Alzamli, traducteur et localisateur de l’anglais, du français et de l’espagnol vers l’arabe, aide ses clients à se développer sur les marchés arabophones.",
  process: "Le déroulement de votre projet de traduction vers l’arabe, étape par étape : traduction, révision et relecture, contrôle qualité, outils TAO et livraison.",
  contact: "Demandez un devis de traduction ou de localisation vers l’arabe. Indiquez les langues, le sujet et le délai, et recevez un devis clair et personnalisé.",
  blog: "Articles sur la traduction vers l’arabe, la localisation, la transcréation et la terminologie : conseils pratiques pour toucher le public arabophone.",
};

const es: SeoText = {
  homeTitle: "Traducción y localización al árabe",
  home: "Traducción y localización profesional del inglés, francés y español al árabe para sitios web, SaaS, marketing y contenido jurídico, técnico y sanitario.",
  about: "Ahmed Alzamli, traductor y localizador del inglés, francés y español al árabe, ayuda a sus clientes a expandirse en los mercados de habla árabe.",
  process: "Cómo se gestiona tu proyecto de traducción al árabe, paso a paso: traducción, edición y revisión, controles de calidad, herramientas TAO y entrega puntual.",
  contact: "Solicita un presupuesto de traducción o localización al árabe. Indica los idiomas, el tema y el plazo y recibe un presupuesto claro y personalizado.",
  blog: "Artículos sobre traducción al árabe, localización, transcreación y terminología: consejos prácticos para llegar al público de habla árabe.",
};

const byLocale: Record<Locale, SeoText> = { en, ar, fr, es };

export function getSeoText(locale: string): SeoText {
  return byLocale[locale as Locale] ?? en;
}

/**
 * Search-result titles for the Services page and each service page. More
 * descriptive than the on-page headings (which stay short), so Google shows
 * what each page offers. " | Ahmed Alzamli" is added by the title template.
 */
type ServiceTitles = {
  services: string;
  translation: string;
  mtpe: string;
  transcreation: string;
  consulting: string;
  "ai-data-annotation": string;
  "digital-marketing": string;
};

const serviceTitles: Record<Locale, ServiceTitles> = {
  en: {
    services: "Arabic Linguistic Services",
    translation: "Professional Translation into Arabic",
    mtpe: "Arabic Machine Translation Post-Editing (MTPE)",
    transcreation: "Arabic Transcreation & UI Copy",
    consulting: "Arabic Localization Consulting",
    "ai-data-annotation": "Arabic AI Data Annotation & RLHF",
    "digital-marketing": "Arabic Digital Marketing & SEO",
  },
  ar: {
    services: "الخدمات اللغوية بالعربية",
    translation: "ترجمة احترافية إلى العربية",
    mtpe: "التحرير اللاحق للترجمة الآلية إلى العربية (MTPE)",
    transcreation: "الترجمة الإبداعية ونصوص الواجهات بالعربية",
    consulting: "استشارات التوطين إلى العربية",
    "ai-data-annotation": "توسيم بيانات الذكاء الاصطناعي بالعربية (RLHF)",
    "digital-marketing": "التسويق الرقمي وتحسين محركات البحث بالعربية",
  },
  fr: {
    services: "Services linguistiques en arabe",
    translation: "Traduction professionnelle vers l’arabe",
    mtpe: "Post-édition de traduction automatique (MTPE) arabe",
    transcreation: "Transcréation et textes d’interface en arabe",
    consulting: "Conseil en localisation arabe",
    "ai-data-annotation": "Annotation de données IA en arabe (RLHF)",
    "digital-marketing": "Marketing digital et SEO en arabe",
  },
  es: {
    services: "Servicios lingüísticos en árabe",
    translation: "Traducción profesional al árabe",
    mtpe: "Posedición de traducción automática (MTPE) al árabe",
    transcreation: "Transcreación y textos de interfaz en árabe",
    consulting: "Consultoría de localización al árabe",
    "ai-data-annotation": "Anotación de datos de IA en árabe (RLHF)",
    "digital-marketing": "Marketing digital y SEO en árabe",
  },
};

export function getServiceSeoTitles(locale: string): ServiceTitles {
  return serviceTitles[locale as Locale] ?? serviceTitles.en;
}

/**
 * Homepage summary under the headline: who runs the site, what it offers and
 * since when, in plain words that people and AI assistants can quote.
 */
const homeSummary: Record<Locale, string> = {
  en: "I’m Ahmed Alzamli, a Palestinian translator working professionally from English, French and Spanish into Arabic since 2014. Through Translated into Arabic (TIA), I help businesses and agencies reach Arabic-speaking audiences with accurate, natural Arabic for websites, software, marketing and specialized documents.",
  ar: "أنا أحمد الزاملي، مترجم فلسطيني محترف من الإنجليزية والفرنسية والإسبانية إلى العربية منذ عام 2014. ومن خلال Translated into Arabic (TIA)، أساعد الشركات ووكالات الترجمة على الوصول إلى الجمهور الناطق بالعربية بنصوص عربية دقيقة وطبيعية للمواقع الإلكترونية والبرمجيات والتسويق والوثائق المتخصصة.",
  fr: "Je suis Ahmed Alzamli, traducteur palestinien professionnel de l’anglais, du français et de l’espagnol vers l’arabe depuis 2014. Avec Translated into Arabic (TIA), j’aide entreprises et agences à toucher le public arabophone grâce à un arabe exact et naturel pour les sites web, les logiciels, le marketing et les documents spécialisés.",
  es: "Soy Ahmed Alzamli, traductor palestino profesional del inglés, el francés y el español al árabe desde 2014. Con Translated into Arabic (TIA), ayudo a empresas y agencias a llegar al público de habla árabe con un árabe preciso y natural para sitios web, software, marketing y documentos especializados.",
};

export function getHomeSummary(locale: string): string {
  return homeSummary[locale as Locale] ?? homeSummary.en;
}

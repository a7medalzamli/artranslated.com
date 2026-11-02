import type { Locale } from "@/i18n";

/**
 * Search-result titles and descriptions tuned for Google (2026 audit).
 * Titles: about 50 characters before " | Ahmed Alzamli". Descriptions: under
 * 160 characters, so they show in full. Keyed by path without the locale
 * ("" = homepage). A non-empty SEO override saved in the CMS still wins.
 */
type Meta = { title?: string; description?: string };

const en: Record<string, Meta> = {
  "": {
    description:
      "English, French and Spanish to Arabic translation and localization by Ahmed Alzamli, ProZ Certified PRO: websites, SaaS, marketing, legal and technical.",
  },
  "/about": {
    description:
      "Ahmed Alzamli: Arabic translator and localizer since 2014, ProZ Certified PRO and ArTA-accredited, working from English, French and Spanish.",
  },
  "/services": { title: "Arabic Translation, Editing & MTPE Services" },
  "/process": { title: "How Arabic Translation Projects Work (TEP & QA)" },
  "/blog": { title: "Arabic Translation & Localization Blog" },
  "/contact": { title: "Get an Arabic Translation Quote" },
  "/services/translation": {
    description:
      "Human translation into Arabic from English, French and Spanish, with editing and proofreading included. Websites, software, marketing and documents.",
  },
  "/services/editing": {
    description:
      "Bilingual editing, proofreading and LQA scoring of Arabic translations, including other translators’ work and machine output, for companies and agencies.",
  },
  "/services/mtpe": {
    description:
      "Light and full post-editing of machine-translated Arabic (MTPE): accurate, natural text at machine-assisted speed, with consistent terminology.",
  },
  "/services/transcreation": {
    title: "Arabic Transcreation for Marketing & Apps",
    description:
      "Arabic transcreation for ads, slogans, apps and websites: your message adapted to Arabic culture and tone, not just translated word for word.",
  },
  "/services/consulting": {
    description:
      "Advice on launching in Arabic-speaking markets: which Arabic to use, terminology, style guides, localization workflow and vendor quality checks.",
  },
  "/services/digital-marketing": {
    description:
      "SEO, AEO and GEO strategy to make your business visible in Google and AI answers, plus Arabic SEO, social media, ads and email content.",
  },
  "/services/saas-localization": {
    description:
      "Arabic localization for SaaS and apps: UI strings, help centers and app store pages, right-to-left (RTL) ready and shipped with every release.",
  },
  "/services/technical": { title: "Technical Translation into Arabic" },
  "/services/legal": { title: "Legal Translation into Arabic" },
  "/services/financial": { title: "Financial Translation into Arabic" },
  "/services/healthcare": { title: "Medical & Healthcare Translation into Arabic" },
  "/for-agencies": {
    description:
      "Freelance Arabic translator for agencies: translation, review, LQA and MTPE from English, French and Spanish, 5,000+ words a day in your CAT tool.",
  },
  "/for-businesses": {
    title: "Arabic Translation for Businesses: How It Works",
    description:
      "A plain-language guide to getting your content translated into Arabic: how projects work, what to send, delivery times and what’s included.",
  },
  "/spanish-to-arabic": {
    title: "Spanish to Arabic Translation Services",
    description:
      "Spanish to Arabic translation by a native Arabic translator: business, marketing, legal and audiovisual content, edited and proofread before delivery.",
  },
  "/french-to-arabic": {
    title: "French to Arabic Translation Services",
    description:
      "French to Arabic translation by a native Arabic translator: business, technical, legal and marketing content, edited and proofread before delivery.",
  },
  "/arabic-markets": { title: "Arabic Markets: Gulf, Levant, Egypt & Maghreb" },
};

const ar: Record<string, Meta> = {
  "": {
    description:
      "ترجمة وتوطين من الإنجليزية والفرنسية والإسبانية إلى العربية على يد أحمد الزاملي (ProZ Certified PRO): المواقع والبرمجيات (SaaS) والتسويق والمحتوى القانوني والتقني.",
  },
  "/about": {
    description:
      "أحمد الزاملي: مترجم ومختص في التوطين إلى العربية منذ 2014، حاصل على ProZ Certified PRO واعتماد جمعية المترجمين العرب (ArTA)، يترجم من الإنجليزية والفرنسية والإسبانية.",
  },
  "/services": { title: "خدمات الترجمة والتحرير إلى العربية" },
  "/process": { title: "كيف يُنجَز مشروع الترجمة إلى العربية" },
  "/blog": { title: "مدونة الترجمة والتوطين إلى العربية" },
  "/contact": { title: "اطلب عرض سعر للترجمة إلى العربية" },
  "/services/translation": {
    description:
      "ترجمة بشرية إلى العربية من الإنجليزية والفرنسية والإسبانية، مع التحرير والتدقيق: المواقع والبرمجيات والتسويق والوثائق المتخصصة.",
  },
  "/services/editing": {
    description:
      "تحرير وتدقيق ثنائي اللغة للترجمات العربية وتقييم جودتها (LQA)، بما في ذلك أعمال مترجمين آخرين ومخرجات الترجمة الآلية، للشركات والوكالات.",
  },
  "/services/mtpe": {
    description:
      "تحرير لاحق خفيف وكامل للترجمة الآلية إلى العربية (MTPE): نص دقيق وطبيعي بسرعة الترجمة الآلية، مع مصطلحات متّسقة.",
  },
  "/services/transcreation": {
    description:
      "ترجمة إبداعية إلى العربية للإعلانات والشعارات والتطبيقات والمواقع: رسالتك مكيّفة مع الثقافة والنبرة العربية، لا مترجمة حرفيًا.",
  },
  "/services/consulting": {
    description:
      "استشارات لدخول الأسواق العربية: اختيار نوع العربية، والمصطلحات، وأدلة الأسلوب، وسير عمل التوطين، وفحص جودة الموردين.",
  },
  "/services/digital-marketing": {
    title: "التسويق الرقمي وتحسين محركات البحث (SEO)",
    description:
      "تحسين محركات البحث (SEO) والظهور في إجابات الذكاء الاصطناعي (AI) عبر (AEO) و(GEO)، مع محتوى عربي لوسائل التواصل والإعلانات والبريد الإلكتروني.",
  },
  "/services/saas-localization": {
    title: "توطين البرمجيات كخدمة (SaaS) والتطبيقات إلى العربية",
    description:
      "توطين منصات البرمجيات كخدمة (SaaS) والتطبيقات إلى العربية: نصوص الواجهة ومراكز المساعدة وصفحات المتاجر، جاهزة للاتجاه من اليمين إلى اليسار (RTL) مع كل إصدار.",
  },
  "/for-agencies": {
    description:
      "مترجم عربي مستقل لوكالات الترجمة (LSPs): ترجمة ومراجعة وتقييم جودة (LQA) وتحرير لاحق (MTPE) من الإنجليزية والفرنسية والإسبانية، أكثر من 5,000 كلمة يوميًا.",
  },
  "/for-businesses": {
    title: "الترجمة إلى العربية للشركات: كيف نعمل",
    description:
      "دليل مبسّط لترجمة محتوى شركتك إلى العربية: كيف يسير المشروع، وماذا ترسل، ومواعيد التسليم، وما الذي يشمله العمل.",
  },
  "/spanish-to-arabic": {
    title: "الترجمة من الإسبانية إلى العربية",
    description:
      "ترجمة من الإسبانية إلى العربية على يد مترجم لغته الأم العربية: محتوى الأعمال والتسويق والقانون والمواد السمعية البصرية، مع التحرير والتدقيق قبل التسليم.",
  },
  "/french-to-arabic": { title: "الترجمة من الفرنسية إلى العربية" },
  "/arabic-markets": { title: "الأسواق العربية: الخليج والشام ومصر والمغرب العربي" },
};

const fr: Record<string, Meta> = {
  "": {
    description:
      "Traduction et localisation de l’anglais, du français et de l’espagnol vers l’arabe par Ahmed Alzamli, ProZ Certified PRO : sites web, SaaS, marketing, juridique.",
  },
  "/about": {
    description:
      "Ahmed Alzamli, traducteur et localisateur arabe depuis 2014, ProZ Certified PRO et accrédité ArTA, traduit de l’anglais, du français et de l’espagnol.",
  },
  "/services": { title: "Traduction, révision et MTPE vers l’arabe" },
  "/process": { title: "Déroulement d’un projet de traduction en arabe" },
  "/blog": { title: "Blog traduction et localisation arabe" },
  "/contact": { title: "Devis de traduction vers l’arabe" },
  "/services/translation": {
    description:
      "Traduction humaine vers l’arabe depuis l’anglais, le français et l’espagnol, révision et relecture incluses : sites web, logiciels, marketing, documents.",
  },
  "/services/editing": {
    description:
      "Révision bilingue, relecture et évaluation LQA de traductions arabes, y compris celles d’autres traducteurs ou issues de la traduction automatique.",
  },
  "/services/mtpe": {
    description:
      "Post-édition légère ou complète de traduction automatique vers l’arabe (MTPE) : un texte juste et naturel, des délais réduits, une terminologie cohérente.",
  },
  "/services/transcreation": {
    description:
      "Transcréation en arabe pour publicités, slogans, applications et sites : votre message adapté à la culture et au ton arabes, pas traduit mot à mot.",
  },
  "/services/consulting": {
    description:
      "Conseil pour lancer votre activité en arabe : choix de la variété d’arabe, terminologie, guides de style, flux de localisation et contrôle qualité.",
  },
  "/services/digital-marketing": {
    title: "Marketing digital, SEO et visibilité IA",
    description:
      "Stratégie SEO, AEO et GEO pour être visible sur Google et dans les réponses des IA, plus SEO arabe, réseaux sociaux, publicités et e-mails.",
  },
  "/services/saas-localization": {
    description:
      "Localisation SaaS et d’applications en arabe : interface, centre d’aide et fiches app store, prêts pour le RTL et livrés à chaque version.",
  },
  "/for-agencies": {
    title: "Traducteur arabe indépendant pour agences",
    description:
      "Traducteur arabe indépendant pour agences : traduction, révision, LQA et MTPE depuis l’anglais, le français et l’espagnol, plus de 5 000 mots par jour.",
  },
  "/for-businesses": {
    title: "Traduction en arabe pour les entreprises",
    description:
      "Guide simple pour faire traduire vos contenus en arabe : déroulement d’un projet, fichiers à envoyer, délais de livraison et prestations incluses.",
  },
  "/spanish-to-arabic": {
    title: "Traduction espagnol-arabe professionnelle",
    description:
      "Traduction espagnol-arabe par un traducteur de langue maternelle arabe : contenus d’entreprise, marketing, juridiques et audiovisuels, révisés.",
  },
  "/french-to-arabic": {
    title: "Traduction français-arabe professionnelle",
    description:
      "Traduction français-arabe par un traducteur de langue maternelle arabe : contenus d’entreprise, techniques, juridiques et marketing, révisés.",
  },
  "/arabic-markets": {
    title: "Marchés arabophones : Golfe, Levant, Maghreb",
    description:
      "Golfe, Levant, Égypte, Maghreb et Irak : quel arabe utiliser et comment adapter votre contenu à chaque marché arabophone.",
  },
};

const es: Record<string, Meta> = {
  "": {
    description:
      "Traducción y localización del inglés, francés y español al árabe por Ahmed Alzamli, ProZ Certified PRO: webs, SaaS, marketing, contenido jurídico y técnico.",
  },
  "/about": {
    description:
      "Ahmed Alzamli, traductor y localizador de árabe desde 2014, ProZ Certified PRO y acreditado por ArTA, traduce del inglés, francés y español.",
  },
  "/services": { title: "Traducción, edición y MTPE al árabe" },
  "/process": { title: "Cómo funciona un proyecto de traducción al árabe" },
  "/blog": { title: "Blog de traducción y localización al árabe" },
  "/contact": { title: "Presupuesto de traducción al árabe" },
  "/services/translation": {
    description:
      "Traducción humana al árabe desde el inglés, francés y español, con edición y revisión incluidas: webs, software, marketing y documentos.",
  },
  "/services/editing": {
    description:
      "Edición bilingüe, revisión y evaluación LQA de traducciones al árabe, incluidas las de otros traductores y las de traducción automática.",
  },
  "/services/mtpe": {
    description:
      "Posedición ligera o completa de traducción automática al árabe (MTPE): un texto preciso y natural, en menos tiempo y con terminología coherente.",
  },
  "/services/transcreation": {
    description:
      "Transcreación al árabe para anuncios, eslóganes, apps y webs: tu mensaje adaptado a la cultura y el tono árabes, no traducido palabra por palabra.",
  },
  "/services/consulting": {
    description:
      "Asesoría para lanzarte en árabe: qué variedad de árabe usar, terminología, guías de estilo, flujo de localización y control de calidad.",
  },
  "/services/digital-marketing": {
    title: "Marketing digital, SEO y visibilidad en IA",
    description:
      "Estrategia SEO, AEO y GEO para aparecer en Google y en las respuestas de la IA, además de SEO en árabe, redes sociales, anuncios y email.",
  },
  "/services/saas-localization": {
    description:
      "Localización de SaaS y apps al árabe: interfaz, centro de ayuda y fichas de app store, listos para RTL y entregados con cada versión.",
  },
  "/for-agencies": {
    title: "Traductor de árabe para agencias de traducción",
    description:
      "Traductor autónomo de árabe para agencias: traducción, revisión, LQA y MTPE desde el inglés, francés y español, más de 5.000 palabras al día.",
  },
  "/for-businesses": {
    title: "Traducción al árabe para empresas",
    description:
      "Guía sencilla para traducir tus contenidos al árabe: cómo funciona un proyecto, qué enviar, plazos de entrega y qué incluye el servicio.",
  },
  "/spanish-to-arabic": {
    title: "Traducción profesional del español al árabe",
    description:
      "Traducción del español al árabe por un traductor nativo de árabe: contenido empresarial, marketing, jurídico y audiovisual, revisado antes de la entrega.",
  },
  "/french-to-arabic": { title: "Traducción profesional del francés al árabe" },
  "/arabic-markets": { title: "Mercados árabes: Golfo, Levante, Egipto y Magreb" },
};

const byLocale: Record<Locale, Record<string, Meta>> = { en, ar, fr, es };

export function getMetaOverride(locale: string, path: string): Meta {
  return byLocale[locale as Locale]?.[path] ?? {};
}

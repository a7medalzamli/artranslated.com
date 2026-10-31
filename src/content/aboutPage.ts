import type { Locale } from "@/i18n";

/**
 * About page content in all four languages. Kept in code (not the CMS) so an
 * older saved CMS copy can't override it.
 *
 * Course and webinar names are the events' own titles, so they stay as given.
 */

export type AboutPageContent = {
  title: string;
  /** Short heading in the top box. */
  heading: string;
  lead: string;
  offerings: string[];
  intro: string;
  approach: { title: string; text: string; credentials: { title: string; text: string }[] };
  journey: { title: string; paragraphs: string[] };
  commitment: { title: string; paragraphs: string[] };
  webinarsTitle: string;
  coursesTitle: string;
  volunteerTitle: string;
  membershipsTitle: string;
  memberships: { name: string; text: string; href?: string }[];
};

/** Same in every language (event titles, organisations, dates). */
export const webinars = [
  "Transcreation for non-Copywriters — March 19, 2026 — ProZ",
  "Artificial Intelligence in the Workplace: Tools and Practical Applications — July 6, 2026 — Edraak",
  "What is bad AI translation really costing your business? — Oct 28, 2026 — RWS",
  "Thinking: the super-skill to engineer and anchor knowledge — Oct 28, 2026 — ProZ",
  "Legal translation in the age of AI — Oct 29, 2026 — ProZ",
  "International Translation Day 2026 — Oct 29, 2026 — ProZ",
];

export const courses = [
  "Certified MTPE Translation (20 hours) — Oct 23, 2026 — ProZ",
  "Project Management — June 21, 2026 — Edraak",
  "Mastering CAT Tools Skills (SDL Trados, memoQ, Wordfast and Xbench) — Aug 1, 2022 — AST & TET",
  "Editing and Proofreading Skills (including Arabic grammar) — Sep 1, 2022 — AST & TET",
  "ICDL Course — July 5, 2026 — Palestinian International Center (PIC)",
  "Advanced Excel — July 28, 2026 — CSCED, Islamic University of Gaza",
];

export const volunteering = ["Translators without Borders", "ProZ Pro Bono", "Global Voices"];

const PROZ = "https://www.proz.com/profile/2522215";
// TranslatorsCafe profile subdomains only work over http (it forwards to the https profile).
const CAFE = "http://ahmedalzamly.translatorscafe.com";

const en: AboutPageContent = {
  title: "About Me: Arabic Translator & Localizer",
  heading: "About",
  lead: "Creative solutions for clients who want to expand to the Arabic-speaking countries.",
  offerings: [
    "Website Localization",
    "Creative Marketing Solutions & Consultations",
    "SEO Strategy & Optimization",
    "App Testing & QA",
    "SaaS Localization",
    "Targeted B2B Marketing Strategies & Campaigns",
  ],
  intro:
    "I am Ahmed Alzamli, a Palestinian translator and digital marketing specialist. At Translated into Arabic (TIA), my mission is to help global businesses confidently reach the Arab-speaking world, ensuring their products, services, and core messages resonate authentically and accurately with a new audience.",
  approach: {
    title: "Approach to Translation and Localization",
    text: "Effective translation requires more than just language proficiency; it requires a deep understanding of the subject matter. My expertise is built on a unique, tri-fold educational foundation:",
    credentials: [
      {
        title: "Bachelor’s Degree in Environmental Engineering, Islamic University of Gaza (Class of 2014)",
        text: "Ensures absolute precision, structural understanding, and accurate terminology when localizing complex technical texts.",
      },
      {
        title: "Diploma in Translation, University College of Applied Sciences (UCAS), Gaza (Class of 2018)",
        text: "Provides the academic framework and linguistic mastery required for seamless, culturally nuanced communication.",
      },
      {
        title: "Diploma in Digital Marketing, University College of Applied Sciences (UCAS), Gaza (Class of 2026)",
        text: "Formally certifies years of hands-on digital marketing experience that came before it, and allows me to optimize translated content for the modern web so marketing materials stay persuasive, engaging and search-friendly in the target market.",
      },
    ],
  },
  journey: {
    title: "From Passion to Profession",
    paragraphs: [
      "My journey into linguistics began organically in 2011 during my engineering studies. Recognizing that language barriers were hindering my colleagues’ understanding of complex lectures, I began translating course materials into Arabic. The success they achieved relying on my translations sparked a deep passion for linguistic accessibility.",
      "This dedication formalized in 2014 when I launched my career as a professional freelance translator. Since then, I have specialized primarily in technical and marketing content, combining my engineering background with my deep research acumen to reach clients and deliver high-impact translations.",
    ],
  },
  commitment: {
    title: "Unwavering Commitment to Quality and Ethics",
    paragraphs: [
      "Trust and professionalism are the cornerstones of my practice. As a certified member of the ProZ.com Certified PRO Network and the Arabic Translators Association, I strictly adhere to their comprehensive codes of professional conduct and career ethics.",
      "I am committed to working responsibly, delivering excellence on every project, and making a tangible, positive impact on businesses expanding across the globe.",
      "The landscape of language and digital marketing is always evolving. To provide my clients with the most up-to-date and effective services, I am deeply committed to continuous career development. I actively pursue advanced courses and regularly attend industry conferences and webinars to hone my specialized skills.",
    ],
  },
  webinarsTitle: "Latest attended webinars",
  coursesTitle: "Courses",
  volunteerTitle: "I volunteer at",
  membershipsTitle: "Memberships",
  memberships: [
    { name: "ProZ", text: "Certified Translator — www.proz.com/profile/2522215", href: PROZ },
    { name: "TranslatorsCafe", text: "ahmedalzamly.TranslatorsCafe.com", href: CAFE },
    { name: "TranslationDirectory", text: "Ahmed Alzamly English-Arabic Translator Profile" },
  ],
};

const ar: AboutPageContent = {
  title: "من أنا: مترجم ومختص في التوطين إلى العربية",
  heading: "من أنا",
  lead: "حلول إبداعية للعملاء الراغبين في التوسّع إلى الدول الناطقة بالعربية.",
  offerings: [
    "توطين المواقع الإلكترونية",
    "حلول واستشارات تسويقية إبداعية",
    "استراتيجيات تحسين محركات البحث (SEO) وتطبيقها",
    "اختبار التطبيقات وضمان الجودة",
    "توطين البرمجيات كخدمة (SaaS)",
    "استراتيجيات وحملات تسويق موجّهة للشركات (B2B)",
  ],
  intro:
    "أنا أحمد الزاملي، مترجم فلسطيني ومتخصص في التسويق الرقمي. مهمّتي في Translated into Arabic (TIA) هي مساعدة الشركات العالمية على الوصول بثقة إلى العالم العربي، بحيث تصل منتجاتها وخدماتها ورسائلها الأساسية إلى الجمهور الجديد بأصالة ودقة.",
  approach: {
    title: "منهجي في الترجمة والتوطين",
    text: "الترجمة الفعّالة تتطلب أكثر من إتقان اللغة؛ إنها تتطلب فهمًا عميقًا للموضوع. تقوم خبرتي على أساس تعليمي فريد من ثلاثة محاور:",
    credentials: [
      {
        title: "بكالوريوس الهندسة البيئية، الجامعة الإسلامية بغزة (دفعة 2014)",
        text: "يضمن الدقة التامة والفهم البنيوي والمصطلحات الصحيحة عند توطين النصوص التقنية المعقّدة.",
      },
      {
        title: "دبلوم الترجمة، الكلية الجامعية للعلوم التطبيقية (UCAS) بغزة (دفعة 2018)",
        text: "يوفّر الإطار الأكاديمي والإتقان اللغوي اللازمين لتواصل سلس يراعي الفروق الثقافية.",
      },
      {
        title: "دبلوم التسويق الرقمي، الكلية الجامعية للعلوم التطبيقية (UCAS) بغزة (دفعة 2026)",
        text: "يوثّق رسميًا خبرة عملية في التسويق الرقمي سبقته بسنوات، ويتيح لي تحسين المحتوى المترجم للويب الحديث، لتبقى المواد التسويقية مقنعة وجذابة وملائمة لمحركات البحث في السوق المستهدفة.",
      },
    ],
  },
  journey: {
    title: "من الشغف إلى الاحتراف",
    paragraphs: [
      "بدأت رحلتي مع اللغة بشكل عفوي عام 2011 خلال دراستي للهندسة. فحين لاحظت أن الحاجز اللغوي يعيق فهم زملائي للمحاضرات المعقّدة، بدأت بترجمة المواد الدراسية إلى العربية. وقد أشعل النجاح الذي حققوه اعتمادًا على ترجماتي شغفًا عميقًا بإتاحة المعرفة لغويًا.",
      "وتحوّل هذا الشغف إلى مهنة عام 2014 حين بدأت مسيرتي مترجمًا مستقلًا محترفًا. ومنذ ذلك الحين تخصصت أساسًا في المحتوى التقني والتسويقي، جامعًا بين خلفيتي الهندسية وقدرتي البحثية العميقة للوصول إلى العملاء وتقديم ترجمات عالية الأثر.",
    ],
  },
  commitment: {
    title: "التزام راسخ بالجودة والأخلاقيات المهنية",
    paragraphs: [
      "الثقة والاحترافية هما حجر الأساس في عملي. وبصفتي عضوًا معتمدًا في شبكة ProZ.com Certified PRO وجمعية المترجمين العرب، ألتزم التزامًا صارمًا بمدوّنات السلوك المهني وأخلاقيات المهنة لديهما.",
      "ألتزم بالعمل بمسؤولية، وتقديم التميّز في كل مشروع، وإحداث أثر إيجابي ملموس للشركات التي تتوسّع حول العالم.",
      "يتطور مجال اللغة والتسويق الرقمي باستمرار. ولكي أقدّم لعملائي أحدث الخدمات وأكثرها فاعلية، ألتزم التزامًا عميقًا بالتطوير المهني المستمر؛ فأتابع الدورات المتقدمة وأحضر بانتظام المؤتمرات والندوات المتخصصة لصقل مهاراتي.",
    ],
  },
  webinarsTitle: "أحدث الندوات التي حضرتها",
  coursesTitle: "الدورات",
  volunteerTitle: "أتطوّع في",
  membershipsTitle: "العضويات",
  memberships: [
    { name: "ProZ", text: "مترجم معتمد — www.proz.com/profile/2522215", href: PROZ },
    { name: "TranslatorsCafe", text: "ahmedalzamly.TranslatorsCafe.com", href: CAFE },
    { name: "TranslationDirectory", text: "الملف الشخصي لأحمد الزاملي، مترجم من الإنجليزية إلى العربية" },
  ],
};

const fr: AboutPageContent = {
  title: "À propos : traducteur et localisateur arabe",
  heading: "À propos",
  lead: "Des solutions créatives pour les clients qui souhaitent se développer dans les pays arabophones.",
  offerings: [
    "Localisation de sites web",
    "Solutions et conseils marketing créatifs",
    "Stratégie et optimisation SEO",
    "Tests d’applications et contrôle qualité",
    "Localisation de SaaS",
    "Stratégies et campagnes marketing B2B ciblées",
  ],
  intro:
    "Je suis Ahmed Alzamli, traducteur palestinien et spécialiste du marketing digital. Chez Translated into Arabic (TIA), ma mission est d’aider les entreprises internationales à s’adresser en toute confiance au monde arabophone, en veillant à ce que leurs produits, services et messages clés trouvent un écho authentique et fidèle auprès d’un nouveau public.",
  approach: {
    title: "Mon approche de la traduction et de la localisation",
    text: "Une traduction efficace exige plus que la maîtrise de la langue : elle exige une compréhension approfondie du sujet. Mon expertise repose sur une formation unique en trois volets :",
    credentials: [
      {
        title: "Licence en génie de l’environnement, Université islamique de Gaza (promotion 2014)",
        text: "Garantit une précision absolue, une compréhension structurelle et une terminologie exacte lors de la localisation de textes techniques complexes.",
      },
      {
        title: "Diplôme de traduction, University College of Applied Sciences (UCAS), Gaza (promotion 2018)",
        text: "Apporte le cadre académique et la maîtrise linguistique nécessaires à une communication fluide et attentive aux nuances culturelles.",
      },
      {
        title: "Diplôme de marketing digital, University College of Applied Sciences (UCAS), Gaza (promotion 2026)",
        text: "Vient certifier des années d’expérience pratique en marketing digital acquise auparavant, et me permet d’optimiser les contenus traduits pour le web, afin que les supports marketing restent convaincants, engageants et bien référencés sur le marché cible.",
      },
    ],
  },
  journey: {
    title: "De la passion à la profession",
    paragraphs: [
      "Mon parcours dans les langues a commencé naturellement en 2011, pendant mes études d’ingénieur. Constatant que la barrière de la langue empêchait mes camarades de comprendre des cours complexes, j’ai commencé à traduire les supports de cours en arabe. Leur réussite, obtenue grâce à mes traductions, a éveillé en moi une véritable passion pour l’accessibilité linguistique.",
      "Cet engagement s’est concrétisé en 2014, lorsque j’ai lancé ma carrière de traducteur indépendant. Depuis, je me suis spécialisé principalement dans les contenus techniques et marketing, en associant ma formation d’ingénieur à de solides compétences de recherche pour toucher mes clients et livrer des traductions à fort impact.",
    ],
  },
  commitment: {
    title: "Un engagement sans faille pour la qualité et l’éthique",
    paragraphs: [
      "La confiance et le professionnalisme sont les piliers de ma pratique. En tant que membre certifié du réseau ProZ.com Certified PRO et de l’Association des traducteurs arabes, je respecte rigoureusement leurs codes de conduite professionnelle et de déontologie.",
      "Je m’engage à travailler de manière responsable, à viser l’excellence sur chaque projet et à avoir un impact positif et concret sur les entreprises qui se développent à l’international.",
      "Le monde des langues et du marketing digital évolue sans cesse. Pour offrir à mes clients des services toujours actuels et efficaces, je m’investis dans un développement professionnel continu : je suis des formations avancées et participe régulièrement à des conférences et webinaires du secteur pour affiner mes compétences.",
    ],
  },
  webinarsTitle: "Derniers webinaires suivis",
  coursesTitle: "Formations",
  volunteerTitle: "Bénévolat",
  membershipsTitle: "Adhésions",
  memberships: [
    { name: "ProZ", text: "Traducteur certifié — www.proz.com/profile/2522215", href: PROZ },
    { name: "TranslatorsCafe", text: "ahmedalzamly.TranslatorsCafe.com", href: CAFE },
    { name: "TranslationDirectory", text: "Profil d’Ahmed Alzamly, traducteur anglais-arabe" },
  ],
};

const es: AboutPageContent = {
  title: "Sobre mí: traductor y localizador de árabe",
  heading: "Sobre mí",
  lead: "Soluciones creativas para clientes que quieren expandirse a los países de habla árabe.",
  offerings: [
    "Localización de sitios web",
    "Soluciones y consultoría de marketing creativo",
    "Estrategia y optimización SEO",
    "Pruebas de aplicaciones y control de calidad",
    "Localización de SaaS",
    "Estrategias y campañas de marketing B2B dirigidas",
  ],
  intro:
    "Soy Ahmed Alzamli, traductor palestino y especialista en marketing digital. En Translated into Arabic (TIA), mi misión es ayudar a las empresas internacionales a llegar con confianza al mundo árabe, haciendo que sus productos, servicios y mensajes clave conecten de forma auténtica y precisa con un nuevo público.",
  approach: {
    title: "Mi enfoque de la traducción y la localización",
    text: "Una traducción eficaz requiere algo más que dominar el idioma: exige un conocimiento profundo del tema. Mi experiencia se basa en una formación única en tres pilares:",
    credentials: [
      {
        title: "Grado en Ingeniería Ambiental, Universidad Islámica de Gaza (promoción de 2014)",
        text: "Garantiza una precisión absoluta, comprensión estructural y terminología exacta al localizar textos técnicos complejos.",
      },
      {
        title: "Diploma en Traducción, University College of Applied Sciences (UCAS), Gaza (promoción de 2018)",
        text: "Aporta el marco académico y el dominio lingüístico necesarios para una comunicación fluida y atenta a los matices culturales.",
      },
      {
        title: "Diploma en Marketing Digital, University College of Applied Sciences (UCAS), Gaza (promoción de 2026)",
        text: "Acredita formalmente años de experiencia práctica en marketing digital previos al diploma y me permite optimizar el contenido traducido para la web actual, de modo que los materiales de marketing sigan siendo persuasivos, atractivos y bien posicionados en el mercado de destino.",
      },
    ],
  },
  journey: {
    title: "De la pasión a la profesión",
    paragraphs: [
      "Mi camino en el mundo de las lenguas comenzó de forma natural en 2011, durante mis estudios de ingeniería. Al darme cuenta de que la barrera del idioma dificultaba a mis compañeros entender clases complejas, empecé a traducir los materiales del curso al árabe. El éxito que lograron gracias a mis traducciones despertó en mí una gran pasión por la accesibilidad lingüística.",
      "Esa dedicación se formalizó en 2014, cuando inicié mi carrera como traductor autónomo profesional. Desde entonces me he especializado principalmente en contenido técnico y de marketing, combinando mi formación en ingeniería con una sólida capacidad de investigación para llegar a los clientes y ofrecer traducciones de gran impacto.",
    ],
  },
  commitment: {
    title: "Un compromiso firme con la calidad y la ética",
    paragraphs: [
      "La confianza y la profesionalidad son la base de mi trabajo. Como miembro certificado de la red ProZ.com Certified PRO y de la Asociación de Traductores Árabes, cumplo estrictamente sus códigos de conducta profesional y ética.",
      "Me comprometo a trabajar con responsabilidad, ofrecer excelencia en cada proyecto y generar un impacto positivo y tangible en las empresas que se expanden por el mundo.",
      "El ámbito de las lenguas y el marketing digital evoluciona constantemente. Para ofrecer a mis clientes servicios actualizados y eficaces, estoy muy comprometido con el desarrollo profesional continuo: realizo cursos avanzados y asisto con regularidad a conferencias y seminarios web del sector para perfeccionar mis habilidades.",
    ],
  },
  webinarsTitle: "Últimos seminarios web",
  coursesTitle: "Cursos",
  volunteerTitle: "Voluntariado",
  membershipsTitle: "Afiliaciones",
  memberships: [
    { name: "ProZ", text: "Traductor certificado — www.proz.com/profile/2522215", href: PROZ },
    { name: "TranslatorsCafe", text: "ahmedalzamly.TranslatorsCafe.com", href: CAFE },
    { name: "TranslationDirectory", text: "Perfil de Ahmed Alzamly, traductor de inglés a árabe" },
  ],
};

const all: Record<Locale, AboutPageContent> = { en, ar, fr, es };

export function getAboutPage(locale: string): AboutPageContent {
  return all[locale as Locale] ?? en;
}

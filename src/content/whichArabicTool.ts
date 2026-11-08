import type { Locale } from "@/i18n";
import type { FaqItem } from "@/content/faqs";

/**
 * Free tool "Which Arabic should I use?": the reader picks what they are
 * translating and who will read it, and gets a recommendation. The advice
 * follows the blog article "Which Arabic: MSA vs dialects".
 */

export const contentTypes = ["legal", "docs", "app", "website", "marketing", "social", "video", "support"] as const;
export type ContentType = (typeof contentTypes)[number];

export const audiences = ["all", "gulf", "egypt", "levant", "iraq", "maghreb"] as const;
export type Audience = (typeof audiences)[number];
export type Region = Exclude<Audience, "all">;

export type ResultKey =
  | "formal"
  | "clear"
  | "friendly"
  | "msa"
  | "localTouch"
  | "dialect"
  | "videoBroad"
  | "supportLocal";

/** The recommendation for a content type and audience. */
export function recommend(type: ContentType, audience: Audience): ResultKey {
  const one = audience !== "all";
  switch (type) {
    case "legal":
      return "formal";
    case "docs":
      return "clear";
    case "app":
      return "friendly";
    case "website":
      return one ? "localTouch" : "msa";
    case "marketing":
      return one ? "localTouch" : "msa";
    case "social":
      return one ? "dialect" : "friendly";
    case "video":
      return one ? "dialect" : "videoBroad";
    case "support":
      return one ? "supportLocal" : "clear";
  }
}

/** Service page that matches each content type. */
export const serviceFor: Record<ContentType, "legal" | "technical" | "saasLocalization" | "translation" | "transcreation" | "audiovisual"> = {
  legal: "legal",
  docs: "technical",
  app: "saasLocalization",
  website: "translation",
  marketing: "transcreation",
  social: "transcreation",
  video: "audiovisual",
  support: "translation",
};

export type WhichArabicText = {
  crumb: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  ui: {
    typeLabel: string;
    types: Record<ContentType, string>;
    audienceLabel: string;
    audiences: Record<Audience, string>;
    resultLabel: string;
    /** Region names, used in the result text ("{region}"). */
    regions: Record<Region, string>;
    /** Dialect names, used in the result title ("{dialect}"). */
    dialects: Record<Region, string>;
    results: Record<ResultKey, { title: string; text: string }>;
    maghrebNote: string;
    serviceLink: string;
    quoteButton: string;
  };
  tableTitle: string;
  tableHead: [string, string];
  table: [string, string][];
  infographicAlt: string;
  faqTitle: string;
  faq: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

const en: WhichArabicText = {
  crumb: "Which Arabic?",
  title: "Which Arabic Should I Use?",
  seoTitle: "Which Arabic Should I Use? MSA or Dialect: Free Tool",
  seoDescription:
    "Choose between Modern Standard Arabic (MSA) and a dialect in two clicks. Pick what you're translating and who will read it, and get a clear recommendation.",
  intro:
    "Arabic has one shared written standard and many spoken dialects. Answer two questions to see which one your text should use, and why.",
  ui: {
    typeLabel: "What are you translating?",
    types: {
      legal: "Contracts, policies or financial documents",
      docs: "Manuals, help center or documentation",
      app: "App or software interface",
      website: "Website",
      marketing: "Marketing campaign or brochure",
      social: "Social media posts or ads",
      video: "Video or subtitles",
      support: "Customer support messages",
    },
    audienceLabel: "Who will read it?",
    audiences: {
      all: "Readers in several Arab countries",
      gulf: "Mainly readers in the Gulf",
      egypt: "Mainly readers in Egypt",
      levant: "Mainly readers in the Levant",
      iraq: "Mainly readers in Iraq",
      maghreb: "Mainly readers in the Maghreb",
    },
    resultLabel: "Recommended Arabic",
    regions: {
      gulf: "the Gulf (Saudi Arabia, the UAE, Kuwait, Qatar, Bahrain and Oman)",
      egypt: "Egypt",
      levant: "the Levant (Palestine, Jordan, Lebanon and Syria)",
      iraq: "Iraq",
      maghreb: "the Maghreb (Morocco, Algeria, Tunisia and Libya)",
    },
    dialects: {
      gulf: "Gulf (Khaleeji)",
      egypt: "Egyptian",
      levant: "Levantine (Shami)",
      iraq: "Iraqi",
      maghreb: "Maghrebi (Darija)",
    },
    results: {
      formal: {
        title: "Formal Modern Standard Arabic (MSA)",
        text: "Legal and financial texts must be exact, and they are read the same way in every country. Formal MSA is the standard for official documents across the Arab world.",
      },
      clear: {
        title: "Clear Modern Standard Arabic (MSA)",
        text: "People read this content to solve a problem quickly. Clear MSA, with short sentences and the same terms every time, is understood by every reader.",
      },
      friendly: {
        title: "MSA with a simple, friendly tone",
        text: "MSA is understood in every market, and a simple, friendly tone keeps it from sounding stiff. Short words and a direct voice work best on screens.",
      },
      msa: {
        title: "Modern Standard Arabic (MSA)",
        text: "For readers in several countries, MSA is the safe choice: every educated Arabic speaker understands it. Written well, it reads naturally, not like a newspaper.",
      },
      localTouch: {
        title: "MSA with a local touch",
        text: "Keep MSA as the base, then use words, examples and references familiar to readers in {region}. It stays professional and feels close to home.",
      },
      dialect: {
        title: "{dialect} Arabic",
        text: "Short, informal content for one market often performs best in the local dialect, because it sounds personal. Have it written by a native speaker from {region}. For formal content, use MSA.",
      },
      videoBroad: {
        title: "MSA, or Egyptian for informal videos",
        text: "MSA suits training, corporate and documentary videos. For entertainment and informal videos, Egyptian Arabic is widely understood across the region thanks to Egyptian film and TV.",
      },
      supportLocal: {
        title: "Simple MSA with local words",
        text: "Simple MSA keeps answers clear, and a few everyday words familiar in {region} make them sound friendly and human.",
      },
    },
    maghrebNote:
      "Maghrebi Darija is the most different from MSA, so readers in other Arab countries may not follow it. Use it only for content aimed at the Maghreb.",
    serviceLink: "See the matching service",
    quoteButton: "Get a free quote",
  },
  tableTitle: "Which Arabic for which content: at a glance",
  tableHead: ["Content", "Recommended Arabic"],
  table: [
    ["Contracts, policies, financial reports", "Formal MSA"],
    ["Manuals, help centers, documentation", "Clear MSA"],
    ["App or SaaS interface", "MSA with a simple, friendly tone"],
    ["Website for the whole Arab world", "MSA"],
    ["Marketing for one country", "MSA with a local touch, or that country's dialect"],
    ["Social media and ads for one market", "The local dialect often performs best"],
    ["Video for a broad audience", "MSA, or Egyptian for informal content"],
    ["Customer support for one country", "Simple MSA, with local words where natural"],
  ],
  infographicAlt: "Infographic: which Arabic to use for each type of content, MSA or a dialect",
  faqTitle: "Questions about MSA and dialects",
  faq: [
    {
      q: "What is Modern Standard Arabic (MSA)?",
      a:
        "MSA (al-fuṣḥā) is the shared written language of the Arab world, used in newspapers, books, official documents, education and most websites. Every educated Arabic speaker understands it, from Morocco to Oman.",
    },
    {
      q: "Is one Arabic version enough for every country?",
      a:
        "For most content, yes. One well-written MSA version works across the region. Only marketing, social media and informal video aimed at one country usually benefit from a local version.",
    },
    {
      q: "Does MSA sound too formal for marketing?",
      a:
        "It doesn't have to. MSA can be warm and simple. A good translator chooses everyday words and a tone that suits your brand, from formal to friendly.",
    },
  ],
  ctaTitle: "Need your text in the right Arabic?",
  ctaText: "Tell me what you're translating and who it's for, and I'll recommend the right Arabic and send a clear quote.",
  ctaButton: "Get a free quote",
};

const ar: WhichArabicText = {
  crumb: "أي عربية؟",
  title: "أي عربية أستخدم؟",
  seoTitle: "أي عربية أستخدم؟ الفصحى أم اللهجة: أداة مجانية",
  seoDescription:
    "اختر بين العربية الفصحى المعاصرة (MSA) واللهجة بنقرتين: حدّد ما تترجمه ومن سيقرؤه، واحصل على توصية واضحة.",
  intro:
    "للعربية لغة مكتوبة مشتركة واحدة ولهجات محكية كثيرة. أجب عن سؤالين لتعرف أيها يناسب نصك، ولماذا.",
  ui: {
    typeLabel: "ماذا تترجم؟",
    types: {
      legal: "عقود أو سياسات أو مستندات مالية",
      docs: "أدلة استخدام أو مركز مساعدة أو وثائق",
      app: "واجهة تطبيق أو برنامج",
      website: "موقع إلكتروني",
      marketing: "حملة تسويقية أو كتيّب",
      social: "منشورات أو إعلانات على وسائل التواصل",
      video: "فيديو أو ترجمة مرئية",
      support: "رسائل دعم العملاء",
    },
    audienceLabel: "من سيقرؤه؟",
    audiences: {
      all: "قرّاء في عدة دول عربية",
      gulf: "قرّاء في الخليج غالبًا",
      egypt: "قرّاء في مصر غالبًا",
      levant: "قرّاء في بلاد الشام غالبًا",
      iraq: "قرّاء في العراق غالبًا",
      maghreb: "قرّاء في المغرب العربي غالبًا",
    },
    resultLabel: "العربية الموصى بها",
    regions: {
      gulf: "الخليج (السعودية والإمارات والكويت وقطر والبحرين وعُمان)",
      egypt: "مصر",
      levant: "بلاد الشام (فلسطين والأردن ولبنان وسوريا)",
      iraq: "العراق",
      maghreb: "المغرب العربي (المغرب والجزائر وتونس وليبيا)",
    },
    dialects: {
      gulf: "الخليجية",
      egypt: "المصرية",
      levant: "الشامية",
      iraq: "العراقية",
      maghreb: "المغاربية (الدارجة)",
    },
    results: {
      formal: {
        title: "العربية الفصحى المعاصرة (MSA) بأسلوب رسمي",
        text: "النصوص القانونية والمالية يجب أن تكون دقيقة، وتُقرأ بالطريقة نفسها في كل دولة. والفصحى الرسمية هي المعيار للمستندات الرسمية في العالم العربي كله.",
      },
      clear: {
        title: "العربية الفصحى المعاصرة (MSA) بأسلوب واضح",
        text: "يقرأ الناس هذا المحتوى لحل مشكلة بسرعة. والفصحى الواضحة، بجمل قصيرة ومصطلحات ثابتة، يفهمها كل قارئ.",
      },
      friendly: {
        title: "الفصحى بنبرة بسيطة وودودة",
        text: "الفصحى مفهومة في كل الأسواق، والنبرة البسيطة الودودة تُبعدها عن الجمود. الكلمات القصيرة والأسلوب المباشر أنسب للشاشات.",
      },
      msa: {
        title: "العربية الفصحى المعاصرة (MSA)",
        text: "للقرّاء في عدة دول، الفصحى هي الخيار الآمن: يفهمها كل متحدث متعلم بالعربية. وإذا كُتبت جيدًا قُرئت بسلاسة، لا كأنها مقال في صحيفة.",
      },
      localTouch: {
        title: "الفصحى بلمسة محلية",
        text: "اجعل الفصحى أساس النص، ثم استخدم كلمات وأمثلة وإشارات مألوفة للقرّاء في {region}. يبقى النص احترافيًا ويشعر القارئ بأنه قريب منه.",
      },
      dialect: {
        title: "اللهجة {dialect}",
        text: "المحتوى القصير غير الرسمي الموجّه إلى سوق واحدة يحقق غالبًا أفضل النتائج باللهجة المحلية، لأنه يبدو شخصيًا. احرص على أن يكتبه متحدث أصلي من {region}. أما المحتوى الرسمي فبالفصحى.",
      },
      videoBroad: {
        title: "الفصحى، أو المصرية للفيديوهات غير الرسمية",
        text: "الفصحى تناسب فيديوهات التدريب والشركات والأفلام الوثائقية. أما الترفيه والفيديوهات غير الرسمية، فاللهجة المصرية مفهومة على نطاق واسع في المنطقة بفضل السينما والدراما المصرية.",
      },
      supportLocal: {
        title: "فصحى بسيطة مع كلمات محلية",
        text: "الفصحى البسيطة تُبقي الردود واضحة، وبضع كلمات يومية مألوفة في {region} تجعلها ودودة وقريبة من الناس.",
      },
    },
    maghrebNote:
      "الدارجة المغاربية هي الأبعد عن الفصحى، وقد لا يفهمها القرّاء في الدول العربية الأخرى. استخدمها فقط للمحتوى الموجّه إلى المغرب العربي.",
    serviceLink: "اطّلع على الخدمة المناسبة",
    quoteButton: "احصل على عرض سعر مجاني",
  },
  tableTitle: "أي عربية لأي محتوى: نظرة سريعة",
  tableHead: ["المحتوى", "العربية الموصى بها"],
  table: [
    ["العقود والسياسات والتقارير المالية", "فصحى رسمية"],
    ["الأدلة ومراكز المساعدة والوثائق", "فصحى واضحة"],
    ["واجهة تطبيق أو برمجيات كخدمة (SaaS)", "فصحى بنبرة بسيطة وودودة"],
    ["موقع موجّه إلى العالم العربي كله", "الفصحى"],
    ["تسويق موجّه إلى دولة واحدة", "فصحى بلمسة محلية، أو لهجة تلك الدولة"],
    ["وسائل التواصل والإعلانات لسوق واحدة", "اللهجة المحلية غالبًا الأفضل"],
    ["فيديو لجمهور واسع", "الفصحى، أو المصرية للمحتوى غير الرسمي"],
    ["دعم العملاء في دولة واحدة", "فصحى بسيطة مع كلمات محلية حيث يناسب"],
  ],
  infographicAlt: "إنفوجرافيك: أي عربية تستخدم لكل نوع من المحتوى، الفصحى أم اللهجة",
  faqTitle: "أسئلة عن الفصحى واللهجات",
  faq: [
    {
      q: "ما العربية الفصحى المعاصرة (MSA)؟",
      a:
        "الفصحى هي اللغة المكتوبة المشتركة في العالم العربي، وتُستخدم في الصحف والكتب والمستندات الرسمية والتعليم ومعظم المواقع الإلكترونية. ويفهمها كل متحدث متعلم بالعربية، من المغرب إلى عُمان.",
    },
    {
      q: "هل تكفي نسخة عربية واحدة لكل الدول؟",
      a:
        "لمعظم المحتوى، نعم. نسخة فصحى واحدة مكتوبة جيدًا تصلح للمنطقة كلها. أما التسويق ووسائل التواصل والفيديو غير الرسمي الموجّه إلى دولة واحدة، فيستفيد عادةً من نسخة محلية.",
    },
    {
      q: "هل الفصحى رسمية أكثر من اللازم للتسويق؟",
      a:
        "ليس بالضرورة. يمكن أن تكون الفصحى دافئة وبسيطة. فالمترجم الجيد يختار كلمات يومية ونبرة تناسب علامتك التجارية، من الرسمية إلى الودودة.",
    },
  ],
  ctaTitle: "تحتاج إلى نصك بالعربية المناسبة؟",
  ctaText: "أخبرني بما تترجمه ولمن هو، وسأوصي بالعربية المناسبة وأرسل إليك عرض سعر واضحًا.",
  ctaButton: "احصل على عرض سعر مجاني",
};

const fr: WhichArabicText = {
  crumb: "Quel arabe ?",
  title: "Quel arabe utiliser ?",
  seoTitle: "Quel arabe utiliser ? Arabe standard ou dialecte : outil gratuit",
  seoDescription:
    "Choisissez entre l’arabe standard moderne (MSA) et un dialecte en deux clics : indiquez ce que vous traduisez et qui le lira, et obtenez une recommandation claire.",
  intro:
    "L’arabe a une langue écrite commune et de nombreux dialectes parlés. Répondez à deux questions pour savoir lequel convient à votre texte, et pourquoi.",
  ui: {
    typeLabel: "Que traduisez-vous ?",
    types: {
      legal: "Contrats, politiques ou documents financiers",
      docs: "Manuels, centre d’aide ou documentation",
      app: "Interface d’application ou de logiciel",
      website: "Site web",
      marketing: "Campagne marketing ou brochure",
      social: "Publications ou publicités sur les réseaux sociaux",
      video: "Vidéo ou sous-titres",
      support: "Messages du service client",
    },
    audienceLabel: "Qui le lira ?",
    audiences: {
      all: "Des lecteurs de plusieurs pays arabes",
      gulf: "Surtout des lecteurs du Golfe",
      egypt: "Surtout des lecteurs d’Égypte",
      levant: "Surtout des lecteurs du Levant",
      iraq: "Surtout des lecteurs d’Irak",
      maghreb: "Surtout des lecteurs du Maghreb",
    },
    resultLabel: "Arabe recommandé",
    regions: {
      gulf: "du Golfe (Arabie saoudite, Émirats, Koweït, Qatar, Bahreïn et Oman)",
      egypt: "d’Égypte",
      levant: "du Levant (Palestine, Jordanie, Liban et Syrie)",
      iraq: "d’Irak",
      maghreb: "du Maghreb (Maroc, Algérie, Tunisie et Libye)",
    },
    dialects: {
      gulf: "du Golfe (khaleeji)",
      egypt: "égyptien",
      levant: "levantin (shami)",
      iraq: "irakien",
      maghreb: "maghrébin (darija)",
    },
    results: {
      formal: {
        title: "Arabe standard moderne (MSA) formel",
        text: "Les textes juridiques et financiers doivent être exacts, et ils se lisent de la même façon dans chaque pays. Le MSA formel est la norme pour les documents officiels dans tout le monde arabe.",
      },
      clear: {
        title: "Arabe standard moderne (MSA) clair",
        text: "On lit ce contenu pour résoudre un problème rapidement. Un MSA clair, avec des phrases courtes et toujours les mêmes termes, est compris par tous les lecteurs.",
      },
      friendly: {
        title: "MSA au ton simple et chaleureux",
        text: "Le MSA est compris sur tous les marchés, et un ton simple et chaleureux lui évite d’être rigide. Des mots courts et un style direct fonctionnent mieux à l’écran.",
      },
      msa: {
        title: "Arabe standard moderne (MSA)",
        text: "Pour des lecteurs de plusieurs pays, le MSA est le choix sûr : tout arabophone instruit le comprend. Bien écrit, il se lit naturellement, pas comme un article de journal.",
      },
      localTouch: {
        title: "MSA avec une touche locale",
        text: "Gardez le MSA comme base, puis utilisez des mots, des exemples et des références familiers aux lecteurs {region}. Le texte reste professionnel et proche du lecteur.",
      },
      dialect: {
        title: "L’arabe {dialect}",
        text: "Un contenu court et informel pour un seul marché fonctionne souvent mieux dans le dialecte local, car il paraît personnel. Faites-le rédiger par un locuteur natif {region}. Pour un contenu formel, utilisez le MSA.",
      },
      videoBroad: {
        title: "MSA, ou égyptien pour les vidéos informelles",
        text: "Le MSA convient aux vidéos de formation, d’entreprise et documentaires. Pour le divertissement et les vidéos informelles, l’arabe égyptien est largement compris dans la région grâce au cinéma et à la télévision égyptiens.",
      },
      supportLocal: {
        title: "MSA simple avec des mots locaux",
        text: "Un MSA simple garde les réponses claires, et quelques mots du quotidien familiers aux lecteurs {region} les rendent chaleureuses et humaines.",
      },
    },
    maghrebNote:
      "La darija maghrébine est la plus éloignée du MSA : les lecteurs d’autres pays arabes risquent de ne pas la comprendre. Réservez-la aux contenus destinés au Maghreb.",
    serviceLink: "Voir le service correspondant",
    quoteButton: "Obtenir un devis gratuit",
  },
  tableTitle: "Quel arabe pour quel contenu : l’essentiel",
  tableHead: ["Contenu", "Arabe recommandé"],
  table: [
    ["Contrats, politiques, rapports financiers", "MSA formel"],
    ["Manuels, centres d’aide, documentation", "MSA clair"],
    ["Interface d’application ou de SaaS", "MSA au ton simple et chaleureux"],
    ["Site pour tout le monde arabe", "MSA"],
    ["Marketing pour un seul pays", "MSA avec une touche locale, ou le dialecte du pays"],
    ["Réseaux sociaux et publicités pour un marché", "Le dialecte local fonctionne souvent le mieux"],
    ["Vidéo pour un large public", "MSA, ou égyptien pour les contenus informels"],
    ["Service client pour un seul pays", "MSA simple, avec des mots locaux quand c’est naturel"],
  ],
  infographicAlt: "Infographie : quel arabe utiliser pour chaque type de contenu, MSA ou dialecte",
  faqTitle: "Questions sur le MSA et les dialectes",
  faq: [
    {
      q: "Qu’est-ce que l’arabe standard moderne (MSA) ?",
      a:
        "Le MSA (al-fuṣḥā) est la langue écrite commune du monde arabe : presse, livres, documents officiels, enseignement et la plupart des sites web. Tout arabophone instruit le comprend, du Maroc à Oman.",
    },
    {
      q: "Une seule version arabe suffit-elle pour tous les pays ?",
      a:
        "Pour la plupart des contenus, oui. Une version en MSA bien écrite fonctionne dans toute la région. Seuls le marketing, les réseaux sociaux et les vidéos informelles destinés à un seul pays gagnent généralement à avoir une version locale.",
    },
    {
      q: "Le MSA est-il trop formel pour le marketing ?",
      a:
        "Pas forcément. Le MSA peut être chaleureux et simple. Un bon traducteur choisit des mots du quotidien et un ton adapté à votre marque, du formel au convivial.",
    },
  ],
  ctaTitle: "Votre texte dans le bon arabe ?",
  ctaText: "Dites-moi ce que vous traduisez et pour qui : je vous recommanderai le bon arabe et vous enverrai un devis clair.",
  ctaButton: "Obtenir un devis gratuit",
};

const es: WhichArabicText = {
  crumb: "¿Qué árabe?",
  title: "¿Qué árabe debo usar?",
  seoTitle: "¿Qué árabe usar? Árabe estándar o dialecto: herramienta gratis",
  seoDescription:
    "Elige entre el árabe estándar moderno (MSA) y un dialecto en dos clics: indica qué traduces y quién lo leerá, y recibe una recomendación clara.",
  intro:
    "El árabe tiene una lengua escrita común y muchos dialectos hablados. Responde a dos preguntas para saber cuál conviene a tu texto, y por qué.",
  ui: {
    typeLabel: "¿Qué estás traduciendo?",
    types: {
      legal: "Contratos, políticas o documentos financieros",
      docs: "Manuales, centro de ayuda o documentación",
      app: "Interfaz de una app o software",
      website: "Sitio web",
      marketing: "Campaña de marketing o folleto",
      social: "Publicaciones o anuncios en redes sociales",
      video: "Vídeo o subtítulos",
      support: "Mensajes de atención al cliente",
    },
    audienceLabel: "¿Quién lo leerá?",
    audiences: {
      all: "Lectores de varios países árabes",
      gulf: "Sobre todo lectores del Golfo",
      egypt: "Sobre todo lectores de Egipto",
      levant: "Sobre todo lectores del Levante",
      iraq: "Sobre todo lectores de Irak",
      maghreb: "Sobre todo lectores del Magreb",
    },
    resultLabel: "Árabe recomendado",
    regions: {
      gulf: "del Golfo (Arabia Saudí, Emiratos, Kuwait, Catar, Baréin y Omán)",
      egypt: "de Egipto",
      levant: "del Levante (Palestina, Jordania, Líbano y Siria)",
      iraq: "d’Irak",
      maghreb: "del Magreb (Marruecos, Argelia, Túnez y Libia)",
    },
    dialects: {
      gulf: "del Golfo (khaleeji)",
      egypt: "egipcio",
      levant: "levantino (shami)",
      iraq: "iraquí",
      maghreb: "magrebí (dariya)",
    },
    results: {
      formal: {
        title: "Árabe estándar moderno (MSA) formal",
        text: "Los textos jurídicos y financieros deben ser exactos, y se leen igual en todos los países. El MSA formal es la norma para los documentos oficiales en todo el mundo árabe.",
      },
      clear: {
        title: "Árabe estándar moderno (MSA) claro",
        text: "Este contenido se lee para resolver un problema rápido. Un MSA claro, con frases cortas y siempre los mismos términos, lo entiende cualquier lector.",
      },
      friendly: {
        title: "MSA con un tono sencillo y cercano",
        text: "El MSA se entiende en todos los mercados, y un tono sencillo y cercano evita que suene rígido. Las palabras cortas y un estilo directo funcionan mejor en pantalla.",
      },
      msa: {
        title: "Árabe estándar moderno (MSA)",
        text: "Para lectores de varios países, el MSA es la opción segura: lo entiende cualquier hablante de árabe con estudios. Bien escrito, se lee con naturalidad, no como un periódico.",
      },
      localTouch: {
        title: "MSA con un toque local",
        text: "Mantén el MSA como base y usa palabras, ejemplos y referencias familiares para los lectores {region}. El texto sigue siendo profesional y se siente cercano.",
      },
      dialect: {
        title: "El árabe {dialect}",
        text: "El contenido breve e informal para un solo mercado suele funcionar mejor en el dialecto local, porque suena personal. Que lo escriba un hablante nativo {region}. Para contenido formal, usa el MSA.",
      },
      videoBroad: {
        title: "MSA, o egipcio para vídeos informales",
        text: "El MSA encaja en vídeos de formación, corporativos y documentales. Para entretenimiento y vídeos informales, el árabe egipcio se entiende en toda la región gracias al cine y la televisión de Egipto.",
      },
      supportLocal: {
        title: "MSA sencillo con palabras locales",
        text: "Un MSA sencillo mantiene las respuestas claras, y algunas palabras cotidianas conocidas por los lectores {region} las hacen cercanas y humanas.",
      },
    },
    maghrebNote:
      "La dariya magrebí es la más distinta del MSA, y los lectores de otros países árabes pueden no entenderla. Úsala solo para contenido dirigido al Magreb.",
    serviceLink: "Ver el servicio correspondiente",
    quoteButton: "Pide un presupuesto gratis",
  },
  tableTitle: "Qué árabe para cada contenido: de un vistazo",
  tableHead: ["Contenido", "Árabe recomendado"],
  table: [
    ["Contratos, políticas, informes financieros", "MSA formal"],
    ["Manuales, centros de ayuda, documentación", "MSA claro"],
    ["Interfaz de una app o SaaS", "MSA con un tono sencillo y cercano"],
    ["Web para todo el mundo árabe", "MSA"],
    ["Marketing para un solo país", "MSA con un toque local, o el dialecto del país"],
    ["Redes sociales y anuncios para un mercado", "El dialecto local suele funcionar mejor"],
    ["Vídeo para un público amplio", "MSA, o egipcio para contenido informal"],
    ["Atención al cliente para un solo país", "MSA sencillo, con palabras locales cuando sea natural"],
  ],
  infographicAlt: "Infografía: qué árabe usar para cada tipo de contenido, MSA o dialecto",
  faqTitle: "Preguntas sobre el MSA y los dialectos",
  faq: [
    {
      q: "¿Qué es el árabe estándar moderno (MSA)?",
      a:
        "El MSA (al-fuṣḥā) es la lengua escrita común del mundo árabe: prensa, libros, documentos oficiales, educación y la mayoría de las webs. Lo entiende cualquier hablante de árabe con estudios, de Marruecos a Omán.",
    },
    {
      q: "¿Basta con una sola versión en árabe para todos los países?",
      a:
        "Para la mayoría del contenido, sí. Una versión en MSA bien escrita funciona en toda la región. Solo el marketing, las redes sociales y los vídeos informales para un solo país suelen ganar con una versión local.",
    },
    {
      q: "¿El MSA es demasiado formal para el marketing?",
      a:
        "No tiene por qué. El MSA puede ser cálido y sencillo. Un buen traductor elige palabras cotidianas y un tono adecuado a tu marca, de formal a cercano.",
    },
  ],
  ctaTitle: "¿Necesitas tu texto en el árabe adecuado?",
  ctaText: "Cuéntame qué traduces y para quién, y te recomendaré el árabe adecuado y te enviaré un presupuesto claro.",
  ctaButton: "Pide un presupuesto gratis",
};

const all: Record<Locale, WhichArabicText> = { en, ar, fr, es };

export function getWhichArabicText(locale: string): WhichArabicText {
  return all[locale as Locale] ?? en;
}

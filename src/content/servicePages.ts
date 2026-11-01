import type { Locale } from "@/i18n";

/**
 * Content for the individual service pages (/services/<slug>), in all four
 * languages. Menu labels for these pages live in the UI dictionaries
 * (dict.serviceMenu) so the header and footer can use them.
 */

export const serviceSlugs = [
  "translation",
  "editing",
  "mtpe",
  "transcreation",
  "consulting",
  "digital-marketing",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

/** Photo shown beside each page's intro (also used on the services overview cards). */
export const serviceImages: Record<ServiceSlug, string> = {
  translation: "/images/photos/service-translation.jpg",
  editing: "/images/photos/spec-mtpe.jpg",
  mtpe: "/images/photos/service-mtpe.jpg",
  transcreation: "/images/photos/service-transcreation.jpg",
  consulting: "/images/photos/service-consulting.jpg",
  "digital-marketing": "/images/photos/service-digital-marketing.jpg",
};

export type ServicePage = {
  title: string;
  description: string;
  intro: string[];
  /** Overrides the shared "What's included" heading for this page. */
  includedTitle?: string;
  included: string[];
  ctaTitle: string;
  ctaDescription: string;
};

type Shared = {
  eyebrow: string;
  includedTitle: string;
  /** Translation page only: the specializations section. */
  specTitle: string;
  specIntro: string;
  /** Extra specialization cards (no detail page yet), shown after the main five. */
  extraSpecializations: { title: string; summary: string; image: string; href?: string }[];
};

/** Services overview page: one section per service, question + first-person text. */
type Overview = {
  helpTitle: string;
  learnMore: string;
  /** Services page title (kept in code so a saved CMS title can’t override it). */
  pageTitle: string;
  /** Closing "tell me about your project" block with contact details. */
  closingTitle: string;
  closingText: string;
  getInTouch: string;
  contactLabels: { email: string; whatsapp: string; telegram: string; timezone: string };
  timezone: string;
  /** `text` may wrap key phrases in **double asterisks** to show them in bold. */
  items: Record<ServiceSlug, { question: string; text: string }>;
};

type LocaleContent = {
  shared: Shared;
  overview: Overview;
  pages: Record<ServiceSlug, ServicePage>;
};

const en: LocaleContent = {
  shared: {
    eyebrow: "Service",
    includedTitle: "What’s included",
    specTitle: "Specializations",
    specIntro:
      "Accurate translation depends on knowing the field. Each specialization below is handled with subject-matter knowledge, dedicated glossaries and terminology checks, so your Arabic reads correctly to experts and everyday readers alike.",
    extraSpecializations: [
      {
        title: "Education",
        summary:
          "Curricula, textbooks, e-learning courses and academic documents translated clearly for students, teachers and institutions.",
        image: "/images/photos/spec-education.jpg",
      },
      {
        title: "Environment",
        summary:
          "Environmental impact assessments, sustainability reports and research — backed by a degree in environmental engineering.",
        image: "/images/photos/spec-environment.jpg",
      },
      {
        title: "Language teaching",
        summary:
          "Translation and adaptation of language-learning materials — lessons, exercises and assessments — for learners at every level.",
        image: "/images/photos/spec-language-teaching.jpg",
      },
      {
        title: "SaaS Localization",
        summary:
          "Helping SaaS companies reach Arabic-speaking users by localizing platforms, dashboards, help centres and release notes for a seamless product experience.",
        image: "/images/photos/spec-saas.jpg",
        href: "/services/saas-localization",
      },
    ],
  },
  overview: {
    helpTitle: "I can help with",
    learnMore: "Learn more",
    pageTitle: "Linguistic Services",
    closingTitle: "I’d love to hear more about your project",
    closingText: "Tell me what you need translated, adapted or reviewed, and I’ll get back to you with a plan and a quote.",
    getInTouch: "Get in touch",
    contactLabels: { email: "Email", whatsapp: "WhatsApp", telegram: "Telegram", timezone: "Time zone" },
    timezone: "Palestine (GMT+2 / GMT+3)",
    items: {
      translation: {
        question: "Do you need documents, websites or software translated into Arabic?",
        text: "I translate from **English, French and Spanish into Arabic**, and from **Arabic into English**, across technical, legal, financial, healthcare, education, environmental and audiovisual content — accurate, natural and consistent with your terminology.",
      },
      editing: {
        question: "Need an Arabic translation checked before it goes out?",
        text: "I **edit, proofread and quality-score Arabic translations**, including other translators’ work and machine output, against the source and your style guide, and deliver clean files with tracked changes and, for agencies, **LQA scorecards and reports**.",
      },
      mtpe: {
        question: "Do you use machine translation but need human-quality Arabic?",
        text: "I **post-edit machine-translated output**, correcting meaning, terminology and style so it reads naturally — light or full post-editing, depending on how the text will be used.",
      },
      transcreation: {
        question: "Does your marketing or app copy need to feel native in Arabic?",
        text: "I adapt **slogans, campaigns and interface text** so they carry the same intent and emotion for Arab audiences, fit the space available and follow right-to-left conventions.",
      },
      consulting: {
        question: "Planning to enter Arabic-speaking markets?",
        text: "I advise on **terminology, style guides, workflows and tools** so your content is ready for Arabic and quality stays consistent as you grow.",
      },
      "digital-marketing": {
        question: "Want to be found by customers and by AI?",
        text: "I combine **SEO, AEO, GEO and AI search strategy** with Arabic content and campaigns, so your business is visible, citable and competitive in the age of AI.",
      },
    },
  },
  pages: {
    translation: {
      title: "Translation into Arabic",
      description:
        "Professional human translation into Arabic from English, French and Spanish, and from Arabic into English, for technical, legal, financial, medical, software and marketing content, written in Modern Standard Arabic or adapted to your target market.",
      intro: [
        "Every project is translated by a native Arabic linguist, not run through a machine and lightly checked. The goal is Arabic that is accurate, idiomatic and consistent with your terminology, brand voice and the conventions of your industry, whether readers are in the Gulf, the Levant, Egypt or the Maghreb.",
        "Work follows a translation, editing and proofreading (TEP) workflow in CAT tools such as SDL Trados Studio and memoQ, with termbases, translation memories and automated QA checks, so numbers, tags, terminology and formatting stay right across every file, version and update.",
      ],
      includedTitle: "Projects handled",
      included: [
        "Technical documentation, user manuals and specifications",
        "Websites, mobile apps and software strings (JSON, XLIFF, XML)",
        "Contracts, policies and regulatory compliance documents",
        "Annual reports, financial statements and corporate communications",
        "Medical, healthcare and patient information",
        "Subtitles, video scripts and e-learning courses",
        "Termbases, glossaries and translation memory maintenance",
      ],
      ctaTitle: "Have files to translate?",
      ctaDescription: "Send your documents for a quote and a clear delivery timeline.",
    },
    editing: {
      title: "Editing & Proofreading",
      description:
        "Bilingual editing, monolingual proofreading and language quality assessment (LQA) of Arabic translations, including other translators’ work and machine output, so every text is accurate, consistent and ready to publish.",
      intro: [
        "A second expert review is what turns a good translation into a reliable one. I revise Arabic translations against the source text, your glossary and your style guide, and correct anything that affects meaning, terminology, grammar, register, fluency, punctuation or right-to-left formatting, whether the first draft came from a freelancer, an in-house team or a machine translation engine.",
        "For translation agencies (LSPs) and localization teams, I also score quality objectively: each error is logged by category and severity using the MQM framework or your own scorecard, and summarized in an LQA report with a quality score, examples and actionable feedback for the translator.",
      ],
      included: [
        "Bilingual revision against the source text",
        "Monolingual proofreading of the final Arabic",
        "Terminology, glossary and style-guide compliance",
        "Automated QA checks for numbers, tags and consistency (Xbench)",
        "LQA scoring by error category and severity (MQM)",
        "Reviewer feedback and quality reports for vendor management",
        "Final formatting, layout and pre-publication checks",
      ],
      ctaTitle: "Request a quote",
      ctaDescription: "Send the source and the translation, or tell me about the project, and I’ll reply with a clear quote.",
    },
    mtpe: {
      title: "Machine translation post-editing (MTPE)",
      description:
        "Post-editing of Arabic machine translation and AI-generated text to the quality your audience expects: faster turnaround on large volumes, without the errors raw engine output leaves behind.",
      intro: [
        "Neural machine translation engines and large language models can speed up big projects, but their Arabic often contains mistranslations, gender and agreement errors, inconsistent terminology and unnatural phrasing. Post-editing by a native linguist turns that output into text you can rely on.",
        "Light post-editing makes content accurate and understandable for internal use and high-volume reference material; full post-editing brings it to the standard of human translation for anything customers will read. Both follow your guidelines and terminology, and recurring engine errors are reported so they can be fixed at the source.",
      ],
      included: [
        "Light and full post-editing (MTPE)",
        "Correction of meaning, grammar, gender agreement and fluency",
        "Terminology, glossary and style-guide alignment",
        "Work inside your CAT tool or translation management system",
        "Feedback on recurring engine errors and output quality",
        "Quality scoring (LQA) on request",
        "Final proofreading and formatting checks",
      ],
      ctaTitle: "Using machine translation?",
      ctaDescription: "Get the speed of MT with the quality your audience expects.",
    },
    transcreation: {
      title: "Transcreation",
      description:
        "Transcreation of slogans, campaigns and product copy into Arabic, so your message keeps its intent, emotion and persuasive power with Arab audiences, rather than reading like a translation.",
      intro: [
        "Taglines, ad copy and brand messages rarely survive a word-for-word translation: puns disappear, cultural references miss, and the call to action loses its force. Transcreation recreates the message in Arabic for the target market, drawing on copywriting, cultural insight and a digital marketing background.",
        "Each brief gets several creative options with back-translations, so non-Arabic speakers can compare them. For apps and websites, UX copy is adapted to character limits, right-to-left layouts and the user journey, and checked in context on screenshots or a staging site.",
      ],
      included: [
        "Taglines, slogans and advertising copy",
        "Social media, video and campaign scripts",
        "Website and landing-page copy written to convert",
        "App and software UX copy with character limits",
        "Several creative options with back-translation",
        "In-context review on screenshots or staging",
        "Arabic brand voice and tone-of-voice guidelines",
      ],
      ctaTitle: "Launching in Arabic?",
      ctaDescription: "Make your message land with Arab audiences from day one.",
    },
    consulting: {
      title: "Consulting",
      description:
        "Localization consulting for companies entering Arabic-speaking markets: choosing the right Arabic, building terminology and style guides, and setting up a translation workflow that scales with quality.",
      intro: [
        "Launching in Arabic involves more than translation: right-to-left layouts, Modern Standard Arabic versus regional dialects, terminology management, cultural adaptation, and choosing the right tools, vendors and quality checks. Early decisions on these points save time and budget later.",
        "I help you make them with practical, market-specific advice, from a localization-readiness review of your website or app to a quality process your in-house team or language service providers can follow as your content grows.",
      ],
      included: [
        "Market and audience guidance for the Gulf, Levant, Egypt and Maghreb",
        "Modern Standard Arabic versus dialect, tone and register",
        "Terminology management: glossaries, termbases and style guides",
        "Localization-readiness and internationalization (i18n) review",
        "Translation workflow, tools and vendor selection",
        "Quality process, review guidelines and LQA",
        "Cultural adaptation of images, names, dates and currencies",
      ],
      ctaTitle: "Planning an Arabic launch?",
      ctaDescription: "Book a call to discuss your content, markets and goals.",
    },
    "digital-marketing": {
      title: "Digital Marketing & AI Visibility",
      description:
        "Search engine optimization (SEO), answer engine optimization (AEO) and generative engine optimization (GEO), with Arabic and multilingual content and campaigns, so your business is visible, citable and competitive in Google and in AI search.",
      intro: [
        "Buyers no longer only scroll search results. They ask AI assistants and read AI-generated overviews, and those answers cite the businesses whose expertise, entities and facts are easiest to understand and verify. I help you stay visible in both traditional search engines and AI search, for Arabic-speaking and international audiences.",
        "As a researcher, digital marketing strategist and web developer, I combine keyword and search-intent research, topic clusters and internal linking, content that answers real questions, structured data (schema.org), technical SEO and Core Web Vitals, and Arabic social media and paid campaigns written for each market rather than translated line by line.",
      ],
      included: [
        "SEO: keyword research, search intent, on-page and technical SEO",
        "AEO: FAQ and question-led content that answers directly",
        "GEO and LLMO: clear entities and facts AI tools can cite",
        "Structured data (schema.org), E-E-A-T and AI visibility audits",
        "Multilingual SEO: hreflang, Arabic keyword research and local search",
        "Topic clusters, landing pages and blog content",
        "Social media management and paid campaigns",
        "Analytics, Search Console reporting and recommendations",
      ],
      ctaTitle: "Want to be found by people and by AI?",
      ctaDescription: "Let’s plan a search and AI visibility strategy that gets your business found, cited and chosen.",
    },
  },
};

const ar: LocaleContent = {
  shared: {
    eyebrow: "خدمة",
    includedTitle: "ما تشمله الخدمة",
    specTitle: "التخصصات",
    specIntro:
      "تعتمد دقة الترجمة على فهم المجال. ويُتعامل مع كل تخصص أدناه بمعرفة متخصصة ومسارد مصطلحات مخصّصة وتدقيق للمصطلحات، ليقرأ المختصون والقرّاء العاديون نصك العربي بالشكل الصحيح.",
    extraSpecializations: [
      {
        title: "التعليم",
        summary:
          "ترجمة المناهج والكتب الدراسية ودورات التعلّم الإلكتروني والوثائق الأكاديمية بلغة واضحة للطلاب والمعلمين والمؤسسات.",
        image: "/images/photos/spec-education.jpg",
      },
      {
        title: "البيئة",
        summary: "تقييمات الأثر البيئي وتقارير الاستدامة والأبحاث — بدعم من شهادة في الهندسة البيئية.",
        image: "/images/photos/spec-environment.jpg",
      },
      {
        title: "تعليم اللغات",
        summary:
          "ترجمة مواد تعلّم اللغات وتكييفها — من الدروس والتمارين إلى الاختبارات — للمتعلمين في جميع المستويات.",
        image: "/images/photos/spec-language-teaching.jpg",
      },
      {
        title: "توطين البرمجيات كخدمة (SaaS)",
        summary:
          "مساعدة شركات البرمجيات كخدمة (SaaS) على الوصول إلى المستخدمين العرب من خلال توطين المنصات ولوحات التحكم ومراكز المساعدة وملاحظات الإصدار، لتقديم تجربة منتج سلسة.",
        image: "/images/photos/spec-saas.jpg",
        href: "/services/saas-localization",
      },
    ],
  },
  overview: {
    helpTitle: "يمكنني مساعدتك في",
    learnMore: "اعرف المزيد",
    pageTitle: "الخدمات اللغوية",
    closingTitle: "يسعدني أن أعرف المزيد عن مشروعك",
    closingText: "أخبرني بما تحتاج إلى ترجمته أو تكييفه أو مراجعته، وسأعود إليك بخطة وعرض سعر.",
    getInTouch: "تواصل معي",
    contactLabels: { email: "البريد الإلكتروني", whatsapp: "واتساب", telegram: "تيليجرام", timezone: "المنطقة الزمنية" },
    timezone: "فلسطين (GMT+2 / GMT+3)",
    items: {
      translation: {
        question: "هل تحتاج إلى ترجمة مستندات أو مواقع إلكترونية أو برمجيات إلى العربية؟",
        text: "أترجم **من الإنجليزية والفرنسية والإسبانية إلى العربية**، و**من العربية إلى الإنجليزية**، في المجالات التقنية والقانونية والمالية والطبية والتعليمية والبيئية والسمعية البصرية — ترجمة دقيقة وسلسة ومتّسقة مع مصطلحاتك.",
      },
      editing: {
        question: "هل تحتاج إلى مراجعة ترجمة عربية قبل اعتمادها؟",
        text: "**أحرّر الترجمات العربية وأدقّقها وأقيّم جودتها**، بما في ذلك أعمال مترجمين آخرين ومخرجات الترجمة الآلية، مقابل النص المصدر ودليل الأسلوب الخاص بك، وأسلّم ملفات نظيفة بتعديلات متتبَّعة، إضافةً إلى **بطاقات تقييم الجودة (LQA) وتقاريرها** للوكالات.",
      },
      mtpe: {
        question: "هل تستخدم الترجمة الآلية (MT) وتحتاج إلى نص عربي بجودة بشرية؟",
        text: "أحرّر **مخرجات الترجمة الآلية (MT)** لأصحّح المعنى والمصطلحات والأسلوب حتى يُقرأ النص بسلاسة — تحريرًا خفيفًا أو كاملًا بحسب استخدام النص.",
      },
      transcreation: {
        question: "هل تحتاج نصوصك التسويقية أو نصوص تطبيقك إلى أن تبدو أصيلة بالعربية؟",
        text: "أكيّف **الشعارات والحملات ونصوص الواجهات** لتحمل المقصد والمشاعر نفسها للجمهور العربي، وتناسب المساحة المتاحة، وتراعي اتجاه الكتابة من اليمين إلى اليسار (RTL).",
      },
      consulting: {
        question: "هل تخطط لدخول الأسواق الناطقة بالعربية؟",
        text: "أقدّم المشورة بشأن **المصطلحات وأدلة الأسلوب وسير العمل والأدوات**، ليكون محتواك جاهزًا للعربية وتبقى الجودة متّسقة مع نموّك.",
      },
      "digital-marketing": {
        question: "هل تريد أن يجدك العملاء والذكاء الاصطناعي؟",
        text: "أجمع بين **تحسين محركات البحث (SEO) ومحركات الإجابة (AEO) والمحركات التوليدية (GEO) واستراتيجية البحث بالذكاء الاصطناعي (AI)** والمحتوى والحملات العربية، لتكون شركتك ظاهرة وموثوقة كمصدر وقادرة على المنافسة في عصر الذكاء الاصطناعي.",
      },
    },
  },
  pages: {
    translation: {
      title: "الترجمة إلى العربية",
      description:
        "ترجمة بشرية احترافية إلى العربية من الإنجليزية والفرنسية والإسبانية، ومن العربية إلى الإنجليزية، للمحتوى التقني والقانوني والمالي والطبي والبرمجي والتسويقي، بالفصحى المعاصرة أو بما يناسب سوقك المستهدفة.",
      intro: [
        "يتولى كل مشروع مترجم لغته الأم العربية، لا آلة يُراجَع ناتجها على عجل. والهدف نص عربي دقيق وسليم الأسلوب ومتّسق مع مصطلحاتك وهوية علامتك وأعراف مجالك، سواء كان قرّاؤك في الخليج أو الشام أو مصر أو المغرب العربي.",
        "يسير العمل وفق منهجية الترجمة والتحرير والتدقيق (TEP) في أدوات الترجمة بمساعدة الحاسوب (CAT) مثل SDL Trados Studio وmemoQ، مع قواعد المصطلحات وذاكرات الترجمة (TM) وفحوص ضمان الجودة (QA) الآلية، لتبقى الأرقام والوسوم والمصطلحات والتنسيق صحيحة في كل ملف وإصدار وتحديث.",
      ],
      includedTitle: "المشاريع التي أتولاها",
      included: [
        "الوثائق التقنية وأدلة المستخدم والمواصفات",
        "المواقع الإلكترونية وتطبيقات الجوال ونصوص البرمجيات (JSON وXLIFF وXML)",
        "العقود والسياسات ومستندات الامتثال التنظيمي",
        "التقارير السنوية والقوائم المالية ومراسلات الشركات",
        "المحتوى الطبي والصحي ومعلومات المرضى",
        "الترجمة المرئية ونصوص الفيديو ودورات التعلّم الإلكتروني",
        "قواعد المصطلحات والمسارد وصيانة ذاكرات الترجمة (TM)",
      ],
      ctaTitle: "لديك ملفات للترجمة؟",
      ctaDescription: "أرسل مستنداتك لتحصل على عرض سعر وموعد تسليم واضح.",
    },
    editing: {
      title: "التحرير والتدقيق",
      description:
        "تحرير ثنائي اللغة وتدقيق أحادي اللغة وتقييم جودة اللغة (LQA) للترجمات العربية، بما فيها أعمال مترجمين آخرين ومخرجات الترجمة الآلية (MT)، ليكون كل نص دقيقًا ومتّسقًا وجاهزًا للنشر.",
      intro: [
        "المراجعة الثانية على يد خبير هي ما يحوّل الترجمة الجيدة إلى ترجمة يُعتمد عليها. أراجع الترجمات العربية مقابل النص المصدر ومسردك ودليل الأسلوب، وأصحّح كل ما يمسّ المعنى أو المصطلحات أو القواعد أو المستوى اللغوي أو السلاسة أو علامات الترقيم أو تنسيق الاتجاه من اليمين إلى اليسار (RTL)، سواء أنجز المسودة الأولى مترجم مستقل أو فريق داخلي أو محرك ترجمة آلية.",
        "ولوكالات الترجمة (LSPs) وفرق التوطين، أقيّم الجودة بموضوعية: يُسجَّل كل خطأ حسب فئته وخطورته وفق إطار MQM أو بطاقة التقييم الخاصة بكم، ويُلخَّص في تقرير تقييم جودة (LQA) يتضمن درجة الجودة وأمثلة وملاحظات عملية للمترجم.",
      ],
      included: [
        "مراجعة ثنائية اللغة مقابل النص المصدر",
        "تدقيق أحادي اللغة للنص العربي النهائي",
        "الالتزام بالمصطلحات والمسرد ودليل الأسلوب",
        "فحوص ضمان الجودة (QA) الآلية للأرقام والوسوم والاتساق (Xbench)",
        "تقييم الجودة (LQA) حسب فئة الخطأ وخطورته (MQM)",
        "ملاحظات المراجع وتقارير الجودة لإدارة المترجمين",
        "مراجعة التنسيق والتخطيط النهائي قبل النشر",
      ],
      ctaTitle: "اطلب عرض سعر",
      ctaDescription: "أرسل النص المصدر والترجمة، أو أخبرني عن المشروع، وسأرد عليك بعرض سعر واضح.",
    },
    mtpe: {
      title: "التحرير اللاحق للترجمة الآلية (MTPE)",
      description:
        "التحرير اللاحق للترجمة الآلية (MTPE) والنصوص المولّدة بالذكاء الاصطناعي (AI) بالعربية حتى تبلغ الجودة التي يتوقعها جمهورك: تسليم أسرع للأحجام الكبيرة دون الأخطاء التي يتركها ناتج المحركات الخام.",
      intro: [
        "تستطيع محركات الترجمة الآلية (MT) العصبية والنماذج اللغوية الكبيرة (LLM) تسريع المشاريع الكبيرة، لكن عربيتها كثيرًا ما تحمل أخطاء في المعنى والتذكير والتأنيث والمطابقة، ومصطلحات غير متّسقة، وصياغات غير طبيعية. والتحرير اللاحق (MTPE) على يد لغوي عربي يحوّل هذا الناتج إلى نص يمكن الاعتماد عليه.",
        "التحرير اللاحق (MTPE) الخفيف يجعل المحتوى دقيقًا ومفهومًا للاستخدام الداخلي والمواد المرجعية الكبيرة، أما التحرير اللاحق الكامل فيرتقي به إلى مستوى الترجمة البشرية لكل ما سيقرؤه عملاؤك. ويلتزم الاثنان بإرشاداتك ومصطلحاتك، مع الإبلاغ عن أخطاء المحرك المتكررة لمعالجتها من المصدر.",
      ],
      included: [
        "التحرير اللاحق الخفيف والكامل (MTPE)",
        "تصحيح المعنى والقواعد والتذكير والتأنيث والسلاسة",
        "الالتزام بالمصطلحات والمسرد ودليل الأسلوب",
        "العمل داخل أداة الترجمة (CAT) أو نظام إدارة الترجمة لديك",
        "ملاحظات حول أخطاء المحرك المتكررة وجودة الناتج",
        "تقييم الجودة (LQA) عند الطلب",
        "التدقيق النهائي ومراجعة التنسيق",
      ],
      ctaTitle: "تستخدم الترجمة الآلية؟",
      ctaDescription: "احصل على سرعة الترجمة الآلية (MT) بالجودة التي يتوقعها جمهورك.",
    },
    transcreation: {
      title: "الترجمة الإبداعية",
      description:
        "الترجمة الإبداعية (Transcreation) للشعارات والحملات ونصوص المنتجات إلى العربية، لتحتفظ رسالتك بمقصدها وأثرها العاطفي وقوتها الإقناعية لدى الجمهور العربي، لا أن تبدو ترجمة.",
      intro: [
        "نادرًا ما تنجو الشعارات والنصوص الإعلانية ورسائل العلامة التجارية من الترجمة الحرفية: يضيع التلاعب اللفظي، وتخفق المرجعيات الثقافية، وتفقد الدعوة إلى الإجراء قوتها. والترجمة الإبداعية تعيد صياغة الرسالة بالعربية للسوق المستهدفة، اعتمادًا على كتابة المحتوى الإعلاني والفهم الثقافي وخبرة التسويق الرقمي.",
        "يحصل كل طلب على عدة خيارات إبداعية مع ترجمة عكسية (Back-translation) ليقارنها غير الناطقين بالعربية. وفي التطبيقات والمواقع، تُكيَّف نصوص تجربة المستخدم (UX) مع حدود الأحرف واتجاه اليمين إلى اليسار (RTL) ورحلة المستخدم، وتُراجَع في سياقها على لقطات الشاشة أو بيئة الاختبار.",
      ],
      included: [
        "الشعارات والعبارات الرئيسية والنصوص الإعلانية",
        "نصوص وسائل التواصل الاجتماعي والفيديو والحملات",
        "نصوص المواقع وصفحات الهبوط المكتوبة لتحقيق التحويل",
        "نصوص تجربة المستخدم (UX) في التطبيقات والبرمجيات ضمن حدود الأحرف",
        "عدة خيارات إبداعية مع ترجمة عكسية",
        "مراجعة في السياق على لقطات الشاشة أو بيئة الاختبار",
        "إرشادات صوت العلامة التجارية ونبرتها بالعربية",
      ],
      ctaTitle: "تطلق منتجك بالعربية؟",
      ctaDescription: "اجعل رسالتك تصل إلى الجمهور العربي من اليوم الأول.",
    },
    consulting: {
      title: "الاستشارات",
      description:
        "استشارات التوطين (Localization) للشركات التي تدخل الأسواق العربية: اختيار العربية المناسبة، وإعداد المسارد وأدلة الأسلوب، وبناء سير عمل للترجمة ينمو دون أن تتراجع الجودة.",
      intro: [
        "الدخول إلى السوق العربية يتطلب أكثر من الترجمة: الاتجاه من اليمين إلى اليسار (RTL)، والاختيار بين الفصحى واللهجات، وإدارة المصطلحات، والتكييف الثقافي، واختيار الأدوات والمزوّدين وفحوص الجودة المناسبة. والقرارات المبكرة في هذه المسائل توفّر الوقت والميزانية لاحقًا.",
        "أساعدك على اتخاذها بمشورة عملية خاصة بكل سوق، من مراجعة جاهزية موقعك أو تطبيقك للتوطين إلى منهجية جودة يتبعها فريقك الداخلي أو مزوّدو الخدمات اللغوية مع نمو محتواك.",
      ],
      included: [
        "إرشادات السوق والجمهور في الخليج والشام ومصر والمغرب العربي",
        "الفصحى أم اللهجة، والنبرة والمستوى اللغوي",
        "إدارة المصطلحات: المسارد وقواعد المصطلحات وأدلة الأسلوب",
        "مراجعة الجاهزية للتوطين والتدويل (i18n)",
        "سير عمل الترجمة والأدوات واختيار المزوّدين",
        "منهجية الجودة وإرشادات المراجعة وتقييم الجودة (LQA)",
        "التكييف الثقافي للصور والأسماء والتواريخ والعملات",
      ],
      ctaTitle: "تخطط لإطلاق بالعربية؟",
      ctaDescription: "احجز مكالمة لمناقشة محتواك وأسواقك وأهدافك.",
    },
    "digital-marketing": {
      title: "التسويق الرقمي والظهور في الذكاء الاصطناعي (AI)",
      description:
        "تحسين محركات البحث (SEO) ومحركات الإجابة (AEO) والمحركات التوليدية (GEO)، مع محتوى وحملات عربية ومتعددة اللغات، لتكون شركتك ظاهرة وموثوقة كمصدر وقادرة على المنافسة في Google وفي البحث بالذكاء الاصطناعي (AI).",
      intro: [
        "لم يعد المشترون يكتفون بتصفّح نتائج البحث، بل يسألون مساعدات الذكاء الاصطناعي (AI) ويقرؤون الملخصات التي تولّدها، وهذه الإجابات تستشهد بالشركات التي يسهل فهم خبرتها وكياناتها ومعلوماتها والتحقق منها. أساعدك على البقاء ظاهرًا في محركات البحث التقليدية وفي البحث بالذكاء الاصطناعي، للجمهور الناطق بالعربية والجمهور الدولي.",
        "بصفتي باحثًا وخبيرًا في استراتيجيات التسويق الرقمي ومطوّر مواقع، أجمع بين أبحاث الكلمات المفتاحية ونية البحث، والمجموعات الموضوعية والروابط الداخلية، ومحتوى يجيب عن أسئلة حقيقية، والبيانات المنظّمة (schema.org)، والتحسين التقني ومؤشرات أداء الويب الأساسية (Core Web Vitals)، وحملات عربية على وسائل التواصل والإعلانات المدفوعة مكتوبة لكل سوق لا مترجَمة سطرًا بسطر.",
      ],
      included: [
        "SEO: أبحاث الكلمات المفتاحية ونية البحث والتحسين الداخلي والتقني",
        "AEO: محتوى قائم على الأسئلة الشائعة يجيب مباشرة",
        "GEO وLLMO: كيانات ومعلومات واضحة تستشهد بها أدوات الذكاء الاصطناعي (AI)",
        "البيانات المنظّمة (schema.org) ومعايير E-E-A-T وتقييم الظهور في الذكاء الاصطناعي (AI)",
        "تحسين محركات البحث (SEO) متعدد اللغات: وسوم hreflang وأبحاث الكلمات العربية والبحث المحلي",
        "المجموعات الموضوعية وصفحات الهبوط ومحتوى المدونة",
        "إدارة وسائل التواصل الاجتماعي والحملات المدفوعة",
        "تقارير Google Analytics وSearch Console والتوصيات",
      ],
      ctaTitle: "هل تريد أن يجدك الناس والذكاء الاصطناعي؟",
      ctaDescription: "لنخطط معًا لاستراتيجية ظهور في البحث والذكاء الاصطناعي (AI) تجعل شركتك تُكتشف ويُستشهد بها وتُختار.",
    },
  },
};

const fr: LocaleContent = {
  shared: {
    eyebrow: "Service",
    includedTitle: "Ce qui est inclus",
    specTitle: "Spécialisations",
    specIntro:
      "Une traduction juste repose sur la connaissance du domaine. Chaque spécialisation ci-dessous est traitée avec une expertise du sujet, des glossaires dédiés et des contrôles terminologiques, pour que votre texte arabe soit juste aux yeux des experts comme du grand public.",
    extraSpecializations: [
      {
        title: "Éducation",
        summary:
          "Programmes, manuels, cours en ligne et documents académiques traduits clairement pour les élèves, les enseignants et les établissements.",
        image: "/images/photos/spec-education.jpg",
      },
      {
        title: "Environnement",
        summary:
          "Études d’impact environnemental, rapports de développement durable et travaux de recherche — avec une formation d’ingénieur en environnement.",
        image: "/images/photos/spec-environment.jpg",
      },
      {
        title: "Enseignement des langues",
        summary:
          "Traduction et adaptation de supports d’apprentissage des langues — leçons, exercices et évaluations — pour les apprenants de tous niveaux.",
        image: "/images/photos/spec-language-teaching.jpg",
      },
      {
        title: "Localisation de SaaS",
        summary:
          "Aider les entreprises SaaS à toucher les utilisateurs arabophones en localisant plateformes, tableaux de bord, centres d’aide et notes de version, pour une expérience produit fluide.",
        image: "/images/photos/spec-saas.jpg",
        href: "/services/saas-localization",
      },
    ],
  },
  overview: {
    helpTitle: "Je peux vous aider avec",
    learnMore: "En savoir plus",
    pageTitle: "Services linguistiques",
    closingTitle: "J’aimerais en savoir plus sur votre projet",
    closingText: "Dites-moi ce que vous souhaitez traduire, adapter ou réviser, et je reviendrai vers vous avec un plan et un devis.",
    getInTouch: "Me contacter",
    contactLabels: { email: "E-mail", whatsapp: "WhatsApp", telegram: "Telegram", timezone: "Fuseau horaire" },
    timezone: "Palestine (GMT+2 / GMT+3)",
    items: {
      translation: {
        question: "Vous avez besoin de traduire des documents, un site web ou un logiciel en arabe ?",
        text: "Je traduis **de l’anglais, du français et de l’espagnol vers l’arabe**, et **de l’arabe vers l’anglais**, dans les domaines technique, juridique, financier, médical, éducatif, environnemental et audiovisuel — avec précision, naturel et cohérence terminologique.",
      },
      editing: {
        question: "Besoin de faire vérifier une traduction arabe avant sa diffusion ?",
        text: "Je **révise, relis et évalue la qualité de traductions arabes**, y compris le travail d’autres traducteurs et les sorties de traduction automatique, par rapport à la source et à votre guide de style, et je livre des fichiers propres avec suivi des modifications et, pour les agences, des **grilles et rapports LQA**.",
      },
      mtpe: {
        question: "Vous utilisez la traduction automatique mais visez une qualité humaine ?",
        text: "Je **post-édite les traductions automatiques** en corrigeant le sens, la terminologie et le style pour un arabe naturel — post-édition légère ou complète selon l’usage du texte.",
      },
      transcreation: {
        question: "Vos textes marketing ou d’interface doivent sonner naturels en arabe ?",
        text: "J’adapte **slogans, campagnes et textes d’interface** pour qu’ils gardent la même intention et la même émotion auprès du public arabophone, tiennent dans l’espace disponible et respectent la lecture de droite à gauche.",
      },
      consulting: {
        question: "Vous préparez votre arrivée sur les marchés arabophones ?",
        text: "Je vous conseille sur **la terminologie, les guides de style, les processus et les outils** pour que vos contenus soient prêts pour l’arabe et que la qualité reste constante à mesure que vous grandissez.",
      },
      "digital-marketing": {
        question: "Vous voulez être trouvé par vos clients et par l’IA ?",
        text: "J’associe **SEO, AEO, GEO et stratégie de recherche IA** à des contenus et campagnes en arabe, pour que votre entreprise soit visible, citable et compétitive à l’ère de l’IA.",
      },
    },
  },
  pages: {
    translation: {
      title: "Traduction vers l’arabe",
      description:
        "Traduction humaine professionnelle vers l’arabe depuis l’anglais, le français et l’espagnol, et de l’arabe vers l’anglais, pour les contenus techniques, juridiques, financiers, médicaux, logiciels et marketing, en arabe standard moderne ou adaptée à votre marché cible.",
      intro: [
        "Chaque projet est traduit par un linguiste de langue maternelle arabe, et non passé dans une machine puis survolé. L’objectif : un arabe exact, idiomatique et cohérent avec votre terminologie, votre ton de marque et les usages de votre secteur, que vos lecteurs soient dans le Golfe, au Levant, en Égypte ou au Maghreb.",
        "Le travail suit un processus de traduction, révision et relecture (TEP) dans des outils de TAO comme SDL Trados Studio et memoQ, avec bases terminologiques, mémoires de traduction et contrôles qualité automatisés, pour que chiffres, balises, terminologie et mise en forme restent justes dans chaque fichier, version et mise à jour.",
      ],
      includedTitle: "Projets pris en charge",
      included: [
        "Documentation technique, manuels utilisateur et spécifications",
        "Sites web, applications mobiles et chaînes logicielles (JSON, XLIFF, XML)",
        "Contrats, politiques et documents de conformité réglementaire",
        "Rapports annuels, états financiers et communication d’entreprise",
        "Contenus médicaux, de santé et informations patients",
        "Sous-titres, scripts vidéo et modules e-learning",
        "Bases terminologiques, glossaires et maintenance des mémoires de traduction",
      ],
      ctaTitle: "Des fichiers à traduire ?",
      ctaDescription: "Envoyez vos documents pour obtenir un devis et un délai de livraison clair.",
    },
    editing: {
      title: "Révision et relecture",
      description:
        "Révision bilingue, relecture unilingue et évaluation de la qualité linguistique (LQA) de traductions arabes, y compris le travail d’autres traducteurs et la traduction automatique, pour des textes exacts, cohérents et prêts à publier.",
      intro: [
        "Un second regard expert transforme une bonne traduction en traduction fiable. Je révise les traductions arabes par rapport au texte source, à votre glossaire et à votre guide de style, et je corrige tout ce qui touche au sens, à la terminologie, à la grammaire, au registre, à la fluidité, à la ponctuation ou à la mise en forme de droite à gauche, que le premier jet vienne d’un indépendant, d’une équipe interne ou d’un moteur de traduction automatique.",
        "Pour les agences de traduction et les équipes de localisation, j’évalue aussi la qualité de façon objective : chaque erreur est consignée par catégorie et par gravité selon le référentiel MQM ou votre propre grille, puis synthétisée dans un rapport LQA avec une note de qualité, des exemples et des retours concrets pour le traducteur.",
      ],
      included: [
        "Révision bilingue par rapport au texte source",
        "Relecture unilingue de l’arabe final",
        "Respect de la terminologie, du glossaire et du guide de style",
        "Contrôles qualité automatisés des chiffres, balises et cohérence (Xbench)",
        "Notation LQA par catégorie et gravité d’erreur (MQM)",
        "Retours de révision et rapports qualité pour la gestion des prestataires",
        "Contrôle final de la mise en forme et de la mise en page avant publication",
      ],
      ctaTitle: "Demander un devis",
      ctaDescription: "Envoyez-moi la source et la traduction, ou décrivez votre projet, et je vous répondrai avec un devis clair.",
    },
    mtpe: {
      title: "Post-édition de traduction automatique (MTPE)",
      description:
        "Post-édition de traduction automatique et de textes générés par IA en arabe, jusqu’à la qualité qu’attend votre public : des délais plus courts sur les gros volumes, sans les erreurs que laisse la sortie brute des moteurs.",
      intro: [
        "Les moteurs de traduction automatique neuronale et les grands modèles de langage accélèrent les gros projets, mais leur arabe contient souvent des contresens, des erreurs de genre et d’accord, une terminologie incohérente et des tournures peu naturelles. La post-édition par un linguiste natif transforme ce résultat en texte fiable.",
        "La post-édition légère rend le contenu exact et compréhensible pour un usage interne et les gros volumes de référence ; la post-édition complète l’amène au niveau d’une traduction humaine pour tout ce que liront vos clients. Les deux respectent vos consignes et votre terminologie, et les erreurs récurrentes du moteur sont signalées pour être corrigées à la source.",
      ],
      included: [
        "Post-édition légère et complète (MTPE)",
        "Correction du sens, de la grammaire, des accords et de la fluidité",
        "Alignement sur la terminologie, le glossaire et le guide de style",
        "Travail dans votre outil de TAO ou système de gestion de traduction",
        "Retours sur les erreurs récurrentes du moteur et la qualité de sortie",
        "Notation de la qualité (LQA) sur demande",
        "Relecture finale et contrôle de la mise en forme",
      ],
      ctaTitle: "Vous utilisez la traduction automatique ?",
      ctaDescription: "Profitez de sa rapidité avec la qualité qu’attend votre public.",
    },
    transcreation: {
      title: "Transcréation",
      description:
        "Transcréation de slogans, de campagnes et de textes produit en arabe, pour que votre message garde son intention, son émotion et sa force de persuasion auprès du public arabophone, au lieu de sonner comme une traduction.",
      intro: [
        "Accroches, textes publicitaires et messages de marque résistent rarement à une traduction mot à mot : les jeux de mots disparaissent, les références culturelles tombent à plat et l’appel à l’action perd sa force. La transcréation recrée le message en arabe pour le marché cible, en s’appuyant sur la rédaction publicitaire, la connaissance culturelle et une expérience du marketing digital.",
        "Chaque brief reçoit plusieurs propositions créatives avec rétrotraduction, pour que les non-arabophones puissent les comparer. Pour les applications et les sites, les textes UX sont adaptés aux limites de caractères, à l’écriture de droite à gauche et au parcours utilisateur, puis vérifiés en contexte sur captures d’écran ou environnement de test.",
      ],
      included: [
        "Accroches, slogans et textes publicitaires",
        "Scripts pour les réseaux sociaux, la vidéo et les campagnes",
        "Textes de sites et de landing pages pensés pour convertir",
        "Textes UX d’applications et de logiciels avec limites de caractères",
        "Plusieurs propositions créatives avec rétrotraduction",
        "Vérification en contexte sur captures d’écran ou environnement de test",
        "Charte de ton et de voix de marque en arabe",
      ],
      ctaTitle: "Vous lancez une version arabe ?",
      ctaDescription: "Faites passer votre message auprès du public arabophone dès le premier jour.",
    },
    consulting: {
      title: "Conseil",
      description:
        "Conseil en localisation pour les entreprises qui abordent les marchés arabophones : choisir le bon arabe, construire glossaires et guides de style, et mettre en place un processus de traduction qui grandit sans perdre en qualité.",
      intro: [
        "Se lancer en arabe ne se limite pas à traduire : écriture de droite à gauche, arabe standard moderne ou dialectes, gestion terminologique, adaptation culturelle, choix des outils, des prestataires et des contrôles qualité. Les décisions prises tôt sur ces points font gagner du temps et du budget ensuite.",
        "Je vous aide à les prendre avec des conseils pratiques et propres à chaque marché, de l’audit de préparation à la localisation de votre site ou application jusqu’à un processus qualité que votre équipe interne ou vos prestataires linguistiques pourront suivre à mesure que vos contenus grandissent.",
      ],
      included: [
        "Conseils marché et public pour le Golfe, le Levant, l’Égypte et le Maghreb",
        "Arabe standard ou dialecte, ton et registre",
        "Gestion terminologique : glossaires, bases terminologiques et guides de style",
        "Audit de préparation à la localisation et d’internationalisation (i18n)",
        "Processus de traduction, outils et choix des prestataires",
        "Processus qualité, consignes de révision et LQA",
        "Adaptation culturelle des images, noms, dates et devises",
      ],
      ctaTitle: "Vous préparez un lancement en arabe ?",
      ctaDescription: "Réservez un appel pour parler de vos contenus, marchés et objectifs.",
    },
    "digital-marketing": {
      title: "Marketing digital et visibilité IA",
      description:
        "Référencement naturel (SEO), optimisation pour les moteurs de réponse (AEO) et référencement génératif (GEO), avec des contenus et campagnes en arabe et multilingues, pour que votre entreprise soit visible, citable et compétitive dans Google comme dans la recherche IA.",
      intro: [
        "Les acheteurs ne se contentent plus de parcourir les résultats de recherche : ils interrogent des assistants IA et lisent des synthèses générées, qui citent les entreprises dont l’expertise, les entités et les informations sont les plus faciles à comprendre et à vérifier. Je vous aide à rester visible dans les moteurs de recherche classiques comme dans la recherche IA, auprès des publics arabophones et internationaux.",
        "Chercheur, stratège en marketing digital et développeur web, j’associe recherche de mots-clés et d’intention de recherche, clusters thématiques et maillage interne, contenus qui répondent à de vraies questions, données structurées (schema.org), SEO technique et Core Web Vitals, ainsi que des campagnes réseaux sociaux et publicitaires en arabe conçues pour chaque marché plutôt que traduites ligne à ligne.",
      ],
      included: [
        "SEO : mots-clés, intention de recherche, SEO on-page et technique",
        "AEO : contenus FAQ et questions-réponses qui répondent directement",
        "GEO et LLMO : des entités et faits clairs que l’IA peut citer",
        "Données structurées (schema.org), E-E-A-T et audits de visibilité IA",
        "SEO multilingue : hreflang, mots-clés arabes et recherche locale",
        "Clusters thématiques, landing pages et articles de blog",
        "Gestion des réseaux sociaux et campagnes payantes",
        "Rapports Analytics et Search Console, et recommandations",
      ],
      ctaTitle: "Vous voulez être trouvé par le public et par l’IA ?",
      ctaDescription: "Construisons une stratégie de visibilité dans la recherche et l’IA pour que votre entreprise soit trouvée, citée et choisie.",
    },
  },
};

const es: LocaleContent = {
  shared: {
    eyebrow: "Servicio",
    includedTitle: "Qué incluye",
    specTitle: "Especializaciones",
    specIntro:
      "Una traducción precisa depende de conocer el ámbito. Cada especialización se trabaja con conocimiento del tema, glosarios específicos y controles terminológicos, para que tu texto en árabe sea correcto tanto para expertos como para el público general.",
    extraSpecializations: [
      {
        title: "Educación",
        summary:
          "Planes de estudio, libros de texto, cursos en línea y documentos académicos traducidos con claridad para estudiantes, docentes e instituciones.",
        image: "/images/photos/spec-education.jpg",
      },
      {
        title: "Medio ambiente",
        summary:
          "Evaluaciones de impacto ambiental, informes de sostenibilidad e investigaciones, con el respaldo de una titulación en ingeniería ambiental.",
        image: "/images/photos/spec-environment.jpg",
      },
      {
        title: "Enseñanza de idiomas",
        summary:
          "Traducción y adaptación de materiales para aprender idiomas — lecciones, ejercicios y evaluaciones — para estudiantes de todos los niveles.",
        image: "/images/photos/spec-language-teaching.jpg",
      },
      {
        title: "Localización de SaaS",
        summary:
          "Ayudar a las empresas SaaS a llegar a los usuarios de habla árabe localizando plataformas, paneles, centros de ayuda y notas de versión, para ofrecer una experiencia de producto fluida.",
        image: "/images/photos/spec-saas.jpg",
        href: "/services/saas-localization",
      },
    ],
  },
  overview: {
    helpTitle: "Puedo ayudarte con",
    learnMore: "Más información",
    pageTitle: "Servicios lingüísticos",
    closingTitle: "Me encantaría saber más sobre tu proyecto",
    closingText: "Cuéntame qué necesitas traducir, adaptar o revisar y te responderé con un plan y un presupuesto.",
    getInTouch: "Contactar",
    contactLabels: { email: "Correo electrónico", whatsapp: "WhatsApp", telegram: "Telegram", timezone: "Zona horaria" },
    timezone: "Palestina (GMT+2 / GMT+3)",
    items: {
      translation: {
        question: "¿Necesitas traducir documentos, sitios web o software al árabe?",
        text: "Traduzco **del inglés, el francés y el español al árabe**, y **del árabe al inglés**, en los ámbitos técnico, jurídico, financiero, sanitario, educativo, medioambiental y audiovisual, con precisión, naturalidad y coherencia terminológica.",
      },
      editing: {
        question: "¿Necesitas revisar una traducción al árabe antes de publicarla?",
        text: "**Edito, reviso y evalúo la calidad de traducciones al árabe**, incluido el trabajo de otros traductores y la traducción automática, frente al original y tu guía de estilo, y entrego archivos limpios con control de cambios y, para agencias, **fichas e informes LQA**.",
      },
      mtpe: {
        question: "¿Usas traducción automática pero necesitas un árabe de calidad humana?",
        text: "Realizo la **posedición de traducciones automáticas**, corrigiendo sentido, terminología y estilo para que el texto se lea con naturalidad: posedición ligera o completa según el uso del texto.",
      },
      transcreation: {
        question: "¿Tus textos de marketing o de tu aplicación deben sonar naturales en árabe?",
        text: "Adapto **eslóganes, campañas y textos de interfaz** para que transmitan la misma intención y emoción al público árabe, quepan en el espacio disponible y respeten la lectura de derecha a izquierda.",
      },
      consulting: {
        question: "¿Planeas entrar en los mercados de habla árabe?",
        text: "Te asesoro sobre **terminología, guías de estilo, flujos de trabajo y herramientas** para que tu contenido esté listo para el árabe y la calidad se mantenga a medida que creces.",
      },
      "digital-marketing": {
        question: "¿Quieres que te encuentren tus clientes y la IA?",
        text: "Combino **SEO, AEO, GEO y estrategia de búsqueda con IA** con contenido y campañas en árabe, para que tu empresa sea visible, citable y competitiva en la era de la IA.",
      },
    },
  },
  pages: {
    translation: {
      title: "Traducción al árabe",
      description:
        "Traducción humana profesional al árabe desde el inglés, el francés y el español, y del árabe al inglés, para contenido técnico, jurídico, financiero, médico, de software y de marketing, en árabe estándar moderno o adaptada a tu mercado objetivo.",
      intro: [
        "Cada proyecto lo traduce un lingüista nativo de árabe, no una máquina con una revisión rápida. El objetivo es un árabe preciso, idiomático y coherente con tu terminología, tu voz de marca y las convenciones de tu sector, estén tus lectores en el Golfo, el Levante, Egipto o el Magreb.",
        "El trabajo sigue un flujo de traducción, edición y revisión (TEP) en herramientas TAO como SDL Trados Studio y memoQ, con bases terminológicas, memorias de traducción y controles de calidad automáticos, para que cifras, etiquetas, terminología y formato sean correctos en cada archivo, versión y actualización.",
      ],
      includedTitle: "Proyectos gestionados",
      included: [
        "Documentación técnica, manuales de usuario y especificaciones",
        "Webs, apps móviles y cadenas de software (JSON, XLIFF, XML)",
        "Contratos, políticas y documentación de cumplimiento normativo",
        "Informes anuales, estados financieros y comunicación corporativa",
        "Contenido médico, sanitario e información para pacientes",
        "Subtítulos, guiones de vídeo y cursos de e-learning",
        "Bases terminológicas, glosarios y mantenimiento de memorias de traducción",
      ],
      ctaTitle: "¿Tienes archivos para traducir?",
      ctaDescription: "Envía tus documentos y recibe un presupuesto y un plazo de entrega claros.",
    },
    editing: {
      title: "Edición y revisión",
      description:
        "Edición bilingüe, revisión monolingüe y evaluación de la calidad lingüística (LQA) de traducciones al árabe, incluido el trabajo de otros traductores y la traducción automática, para que cada texto sea preciso, coherente y esté listo para publicar.",
      intro: [
        "Una segunda revisión experta es lo que convierte una buena traducción en una traducción fiable. Reviso traducciones al árabe frente al texto original, tu glosario y tu guía de estilo, y corrijo todo lo que afecte al sentido, la terminología, la gramática, el registro, la fluidez, la puntuación o el formato de derecha a izquierda, tanto si el primer borrador lo hizo un autónomo, un equipo interno o un motor de traducción automática.",
        "Para agencias de traducción y equipos de localización, también evalúo la calidad de forma objetiva: cada error se registra por categoría y gravedad con el marco MQM o tu propia ficha, y se resume en un informe LQA con una puntuación de calidad, ejemplos y comentarios prácticos para el traductor.",
      ],
      included: [
        "Edición bilingüe frente al texto original",
        "Revisión monolingüe del árabe final",
        "Cumplimiento de terminología, glosario y guía de estilo",
        "Controles de calidad automáticos de cifras, etiquetas y coherencia (Xbench)",
        "Puntuación LQA por categoría y gravedad del error (MQM)",
        "Comentarios de revisión e informes de calidad para la gestión de proveedores",
        "Comprobación final del formato y la maquetación antes de publicar",
      ],
      ctaTitle: "Solicitar un presupuesto",
      ctaDescription: "Envíame el original y la traducción, o cuéntame el proyecto, y te responderé con un presupuesto claro.",
    },
    mtpe: {
      title: "Posedición de traducción automática (MTPE)",
      description:
        "Posedición de traducción automática y texto generado por IA en árabe, hasta la calidad que espera tu público: entregas más rápidas en grandes volúmenes, sin los errores que deja la salida en bruto de los motores.",
      intro: [
        "Los motores de traducción automática neuronal y los grandes modelos de lenguaje aceleran los proyectos grandes, pero su árabe suele tener errores de sentido, de género y concordancia, terminología incoherente y giros poco naturales. La posedición de un lingüista nativo convierte esa salida en un texto fiable.",
        "La posedición ligera deja el contenido preciso y comprensible para uso interno y grandes volúmenes de referencia; la posedición completa lo lleva al nivel de una traducción humana para todo lo que leerán tus clientes. Ambas siguen tus pautas y tu terminología, y los errores recurrentes del motor se notifican para corregirlos en origen.",
      ],
      included: [
        "Posedición ligera y completa (MTPE)",
        "Corrección de sentido, gramática, concordancia y fluidez",
        "Alineación con la terminología, el glosario y la guía de estilo",
        "Trabajo en tu herramienta TAO o sistema de gestión de traducción",
        "Comentarios sobre errores recurrentes del motor y calidad de salida",
        "Puntuación de calidad (LQA) si lo necesitas",
        "Revisión final y comprobación del formato",
      ],
      ctaTitle: "¿Usas traducción automática?",
      ctaDescription: "Consigue su rapidez con la calidad que espera tu público.",
    },
    transcreation: {
      title: "Transcreación",
      description:
        "Transcreación de eslóganes, campañas y textos de producto al árabe, para que tu mensaje conserve su intención, su emoción y su poder de persuasión ante el público árabe, en lugar de sonar a traducción.",
      intro: [
        "Los eslóganes, los textos publicitarios y los mensajes de marca rara vez sobreviven a una traducción palabra por palabra: se pierden los juegos de palabras, las referencias culturales no funcionan y la llamada a la acción pierde fuerza. La transcreación recrea el mensaje en árabe para el mercado objetivo, con base en redacción publicitaria, conocimiento cultural y experiencia en marketing digital.",
        "Cada encargo recibe varias propuestas creativas con retrotraducción, para que quienes no leen árabe puedan compararlas. En apps y webs, los textos de UX se adaptan a los límites de caracteres, al diseño de derecha a izquierda y al recorrido del usuario, y se revisan en contexto con capturas o en un entorno de pruebas.",
      ],
      included: [
        "Eslóganes, claims y textos publicitarios",
        "Guiones para redes sociales, vídeo y campañas",
        "Textos de webs y landing pages pensados para convertir",
        "Textos de UX de apps y software con límites de caracteres",
        "Varias propuestas creativas con retrotraducción",
        "Revisión en contexto con capturas o entorno de pruebas",
        "Guía de voz y tono de marca en árabe",
      ],
      ctaTitle: "¿Lanzas tu producto en árabe?",
      ctaDescription: "Haz que tu mensaje llegue al público árabe desde el primer día.",
    },
    consulting: {
      title: "Consultoría",
      description:
        "Consultoría de localización para empresas que entran en mercados de habla árabe: elegir el árabe adecuado, crear glosarios y guías de estilo, y montar un proceso de traducción que crezca sin perder calidad.",
      intro: [
        "Lanzarse en árabe implica más que traducir: diseño de derecha a izquierda, árabe estándar moderno o dialectos, gestión terminológica, adaptación cultural y elección de herramientas, proveedores y controles de calidad. Decidir bien estos puntos desde el principio ahorra tiempo y presupuesto después.",
        "Te ayudo a decidir con consejos prácticos y específicos para cada mercado, desde una revisión de la preparación de tu web o app para la localización hasta un proceso de calidad que tu equipo interno o tus proveedores lingüísticos puedan seguir a medida que crece tu contenido.",
      ],
      included: [
        "Orientación de mercado y público para el Golfo, el Levante, Egipto y el Magreb",
        "Árabe estándar o dialecto, tono y registro",
        "Gestión terminológica: glosarios, bases terminológicas y guías de estilo",
        "Revisión de preparación para la localización e internacionalización (i18n)",
        "Proceso de traducción, herramientas y selección de proveedores",
        "Proceso de calidad, pautas de revisión y LQA",
        "Adaptación cultural de imágenes, nombres, fechas y monedas",
      ],
      ctaTitle: "¿Preparas un lanzamiento en árabe?",
      ctaDescription: "Reserva una llamada para hablar de tus contenidos, mercados y objetivos.",
    },
    "digital-marketing": {
      title: "Marketing digital y visibilidad en IA",
      description:
        "Posicionamiento en buscadores (SEO), optimización para motores de respuesta (AEO) y posicionamiento generativo (GEO), con contenido y campañas en árabe y multilingües, para que tu empresa sea visible, citable y competitiva en Google y en la búsqueda con IA.",
      intro: [
        "Los compradores ya no solo recorren resultados de búsqueda: preguntan a asistentes de IA y leen resúmenes generados, que citan a las empresas cuya experiencia, entidades y datos son más fáciles de entender y verificar. Te ayudo a seguir siendo visible en los buscadores tradicionales y en la búsqueda con IA, para el público de habla árabe y el internacional.",
        "Como investigador, estratega de marketing digital y desarrollador web, combino investigación de palabras clave e intención de búsqueda, clusters temáticos y enlazado interno, contenido que responde a preguntas reales, datos estructurados (schema.org), SEO técnico y Core Web Vitals, y campañas en redes sociales y de pago en árabe pensadas para cada mercado en lugar de traducidas línea por línea.",
      ],
      included: [
        "SEO: palabras clave, intención de búsqueda, SEO on-page y técnico",
        "AEO: contenido de preguntas frecuentes que responde directamente",
        "GEO y LLMO: entidades y datos claros que la IA puede citar",
        "Datos estructurados (schema.org), E-E-A-T y auditorías de visibilidad en IA",
        "SEO multilingüe: hreflang, palabras clave en árabe y búsqueda local",
        "Clusters temáticos, landing pages y contenido de blog",
        "Gestión de redes sociales y campañas de pago",
        "Informes de Analytics y Search Console, y recomendaciones",
      ],
      ctaTitle: "¿Quieres que te encuentren las personas y la IA?",
      ctaDescription: "Planifiquemos una estrategia de visibilidad en buscadores e IA para que tu empresa sea encontrada, citada y elegida.",
    },
  },
};

const all: Record<Locale, LocaleContent> = { en, ar, fr, es };

export function getServicePages(locale: string): LocaleContent {
  return all[locale as Locale] ?? en;
}

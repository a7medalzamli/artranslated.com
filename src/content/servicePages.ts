import type { Locale } from "@/i18n";

/**
 * Content for the individual service pages (/services/<slug>), in all four
 * languages. Menu labels for these pages live in the UI dictionaries
 * (dict.serviceMenu) so the header and footer can use them.
 */

export const serviceSlugs = [
  "translation",
  "mtpe",
  "transcreation",
  "consulting",
  "ai-data-annotation",
  "digital-marketing",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

/** Photo shown beside each page's intro (also used on the services overview cards). */
export const serviceImages: Record<ServiceSlug, string> = {
  translation: "/images/photos/service-translation.jpg",
  mtpe: "/images/photos/service-mtpe.jpg",
  transcreation: "/images/photos/service-transcreation.jpg",
  consulting: "/images/photos/service-consulting.jpg",
  "ai-data-annotation": "/images/photos/service-ai-annotation.jpg",
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
  extraSpecializations: { title: string; summary: string; image: string }[];
};

/** Services overview page: one section per service, question + first-person text. */
type Overview = {
  helpTitle: string;
  learnMore: string;
  /** Line under the page title, above the header photo. */
  tagline: string;
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
        title: "SaaS",
        summary:
          "Helping SaaS companies reach Arabic-speaking users by localizing platforms, dashboards, help centres and release notes for a seamless product experience.",
        image: "/images/photos/spec-saas.jpg",
      },
    ],
  },
  overview: {
    helpTitle: "I can help with",
    learnMore: "Learn more",
    tagline: "Excellence in Arabic, from English, French and Spanish",
    closingTitle: "I’d love to hear more about your project",
    closingText: "Tell me what you need translated, adapted or reviewed, and I’ll get back to you with a plan and a quote.",
    getInTouch: "Get in touch",
    contactLabels: { email: "Email", whatsapp: "WhatsApp", telegram: "Telegram", timezone: "Time zone" },
    timezone: "Palestine (GMT+2 / GMT+3)",
    items: {
      translation: {
        question: "Do you need documents, websites or software translated into Arabic?",
        text: "I translate from **English, French and Spanish into Arabic** across technical, legal, financial, healthcare, education, environmental and audiovisual content — accurate, natural and consistent with your terminology.",
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
      "ai-data-annotation": {
        question: "Training or evaluating AI models in Arabic?",
        text: "I **rate, rank and correct Arabic AI output**, write prompts and responses, and give structured feedback against your guidelines to improve model quality and safety.",
      },
      "digital-marketing": {
        question: "Want your brand to be found and trusted by Arab audiences?",
        text: "I combine localization with a marketing background to create **Arabic SEO, social media and campaign content** written for your target market, not translated line by line.",
      },
    },
  },
  pages: {
    translation: {
      title: "Translation into Arabic",
      description:
        "Professional human translation from English, French and Spanish into Arabic, across technical, legal, financial, healthcare and audiovisual content.",
      intro: [
        "Every project is translated by a professional linguist, not just run through a machine. The goal is Arabic that is accurate, reads naturally and stays consistent with your terminology and brand voice.",
        "Work follows a defined translation, editing and proofreading process, supported by CAT tools, glossaries and translation memories so quality holds across every file and every update.",
      ],
      includedTitle: "Projects handled",
      included: [
        "Documents, reports and manuals",
        "Websites, apps and software strings",
        "Contracts and compliance documents",
        "Marketing and corporate communications",
        "Glossary and translation memory maintenance",
        "Videos and audio",
      ],
      ctaTitle: "Have files to translate?",
      ctaDescription: "Send your documents for a quote and a clear delivery timeline.",
    },
    mtpe: {
      title: "Machine translation post-editing (MTPE)",
      description:
        "Editing machine-translated Arabic to human quality — fast turnaround without compromising accuracy.",
      intro: [
        "Machine translation can speed up large projects, but raw output often contains mistranslations, inconsistent terminology and unnatural Arabic. Post-editing turns it into text you can publish.",
        "Light post-editing makes output understandable and accurate for internal use; full post-editing brings it to the same standard as human translation.",
      ],
      included: [
        "Light and full post-editing",
        "Terminology and style-guide alignment",
        "Correction of meaning, grammar and fluency errors",
        "Feedback on recurring engine errors",
        "Quality scoring on request",
      ],
      ctaTitle: "Using machine translation?",
      ctaDescription: "Get the speed of MT with the quality your audience expects.",
    },
    transcreation: {
      title: "Transcreation & UI copy",
      description:
        "Adapting marketing and product copy so it feels native to Arabic audiences — keeping intent, tone and conversion.",
      intro: [
        "Slogans, campaigns and interface text rarely work when translated word for word. Transcreation rewrites the message in Arabic so it carries the same intent and emotion, informed by a marketing background.",
        "For apps and websites, UI copy is adapted to fit the space available, follow right-to-left conventions and keep the user journey clear.",
      ],
      included: [
        "Taglines, ads and campaign copy",
        "Website and landing-page copy",
        "App and software interface strings",
        "Several creative options with back-translation",
        "Review of copy in context (screenshots or staging)",
      ],
      ctaTitle: "Launching in Arabic?",
      ctaDescription: "Make your message land with Arab audiences from day one.",
    },
    consulting: {
      title: "Localization consulting",
      description:
        "Practical advice on entering Arabic-speaking markets and building a localization workflow that scales.",
      intro: [
        "Going into Arabic involves more than translation: right-to-left layouts, regional variations, terminology decisions and choosing the right tools and partners.",
        "Consulting helps you make those decisions early, so content is easier to localize and quality stays consistent as you grow.",
      ],
      included: [
        "Arabic market and audience considerations",
        "Terminology glossaries and style guides",
        "Workflow, CAT tool and TMS recommendations",
        "Quality process and review guidelines",
        "Localization-readiness review of websites and apps",
      ],
      ctaTitle: "Planning an Arabic launch?",
      ctaDescription: "Book a call to discuss your content, markets and goals.",
    },
    "ai-data-annotation": {
      title: "AI data annotation & evaluation (RLHF)",
      description:
        "Evaluating, ranking and correcting Arabic AI output to improve model quality and safety.",
      intro: [
        "Language models need native-speaker judgement to perform well in Arabic. Annotation and evaluation work provides that signal: rating responses, correcting errors and flagging unsafe or unnatural output.",
        "Work follows your guidelines precisely, with consistent scoring and clear written feedback.",
      ],
      included: [
        "Response rating and ranking (RLHF)",
        "Correction of machine-translated and generated Arabic",
        "Prompt and response writing",
        "Safety, bias and cultural-appropriateness review",
        "Structured feedback against your guidelines",
      ],
      ctaTitle: "Training models in Arabic?",
      ctaDescription: "Get native, consistent Arabic evaluation for your AI data.",
    },
    "digital-marketing": {
      title: "Digital marketing in Arabic",
      description:
        "Arabic SEO, social media and campaign content that reaches Arab audiences and drives results.",
      intro: [
        "Reaching Arab audiences online means speaking their language — and the way they search. Digital marketing combines localization with a marketing background to make your content visible and persuasive in Arabic.",
        "From keyword research to social posts and ad copy, every piece is written for the target market rather than translated line by line.",
      ],
      included: [
        "Arabic keyword research and SEO",
        "Localized website and blog content",
        "Social media posts and captions",
        "Ad copy for search and social campaigns",
        "Email and newsletter localization",
      ],
      ctaTitle: "Want to grow in Arab markets?",
      ctaDescription: "Let’s plan Arabic content that gets found and drives action.",
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
        title: "البرمجيات كخدمة (SaaS)",
        summary:
          "مساعدة شركات البرمجيات كخدمة على الوصول إلى المستخدمين العرب من خلال توطين المنصات ولوحات التحكم ومراكز المساعدة وملاحظات الإصدار، لتقديم تجربة منتج سلسة.",
        image: "/images/photos/spec-saas.jpg",
      },
    ],
  },
  overview: {
    helpTitle: "يمكنني مساعدتك في",
    learnMore: "اعرف المزيد",
    tagline: "التميّز في العربية، من الإنجليزية والفرنسية والإسبانية",
    closingTitle: "يسعدني أن أعرف المزيد عن مشروعك",
    closingText: "أخبرني بما تحتاج إلى ترجمته أو تكييفه أو مراجعته، وسأعود إليك بخطة وعرض سعر.",
    getInTouch: "تواصل معي",
    contactLabels: { email: "البريد الإلكتروني", whatsapp: "واتساب", telegram: "تيليجرام", timezone: "المنطقة الزمنية" },
    timezone: "فلسطين (GMT+2 / GMT+3)",
    items: {
      translation: {
        question: "هل تحتاج إلى ترجمة مستندات أو مواقع إلكترونية أو برمجيات إلى العربية؟",
        text: "أترجم **من الإنجليزية والفرنسية والإسبانية إلى العربية** في المجالات التقنية والقانونية والمالية والطبية والتعليمية والبيئية والسمعية البصرية — ترجمة دقيقة وسلسة ومتّسقة مع مصطلحاتك.",
      },
      mtpe: {
        question: "هل تستخدم الترجمة الآلية وتحتاج إلى نص عربي بجودة بشرية؟",
        text: "أحرّر **مخرجات الترجمة الآلية** لأصحّح المعنى والمصطلحات والأسلوب حتى يُقرأ النص بسلاسة — تحريرًا خفيفًا أو كاملًا بحسب استخدام النص.",
      },
      transcreation: {
        question: "هل تحتاج نصوصك التسويقية أو نصوص تطبيقك إلى أن تبدو أصيلة بالعربية؟",
        text: "أكيّف **الشعارات والحملات ونصوص الواجهات** لتحمل المقصد والمشاعر نفسها للجمهور العربي، وتناسب المساحة المتاحة، وتراعي اتجاه الكتابة من اليمين إلى اليسار.",
      },
      consulting: {
        question: "هل تخطط لدخول الأسواق الناطقة بالعربية؟",
        text: "أقدّم المشورة بشأن **المصطلحات وأدلة الأسلوب وسير العمل والأدوات**، ليكون محتواك جاهزًا للعربية وتبقى الجودة متّسقة مع نموّك.",
      },
      "ai-data-annotation": {
        question: "هل تدرّب نماذج ذكاء اصطناعي بالعربية أو تقيّمها؟",
        text: "**أقيّم مخرجات الذكاء الاصطناعي العربية وأرتّبها وأصحّحها**، وأكتب الأوامر والإجابات، وأقدّم ملاحظات منظَّمة وفق إرشاداتك لتحسين جودة النماذج وأمانها.",
      },
      "digital-marketing": {
        question: "هل تريد أن يجد الجمهور العربي علامتك التجارية ويثق بها؟",
        text: "أجمع بين التوطين والخبرة التسويقية لإنشاء **محتوى عربي لتحسين محركات البحث ووسائل التواصل الاجتماعي والحملات**، مكتوب لسوقك المستهدفة لا مترجَم سطرًا بسطر.",
      },
    },
  },
  pages: {
    translation: {
      title: "الترجمة إلى العربية",
      description:
        "ترجمة بشرية احترافية من الإنجليزية والفرنسية والإسبانية إلى العربية، في المجالات التقنية والقانونية والمالية والطبية والسمعية البصرية.",
      intro: [
        "يتولى ترجمة كل مشروع لغويٌّ محترف، ولا يُكتفى بتمريره عبر الترجمة الآلية. والهدف نصٌّ عربي دقيق وسلس ومتّسق مع مصطلحاتك وأسلوب علامتك التجارية.",
        "يسير العمل وفق منهجية محددة للترجمة والتحرير والتدقيق، بدعم من أدوات الترجمة بمساعدة الحاسوب ومسارد المصطلحات وذاكرات الترجمة، للحفاظ على الجودة في كل ملف وكل تحديث.",
      ],
      includedTitle: "المشاريع التي أتولاها",
      included: [
        "المستندات والتقارير والأدلة",
        "المواقع الإلكترونية والتطبيقات ونصوص البرمجيات",
        "العقود ووثائق الامتثال",
        "المواد التسويقية والمراسلات المؤسسية",
        "إعداد مسارد المصطلحات وذاكرات الترجمة وتحديثها",
        "مقاطع الفيديو والملفات الصوتية",
      ],
      ctaTitle: "لديك ملفات للترجمة؟",
      ctaDescription: "أرسل مستنداتك لتحصل على عرض سعر وموعد تسليم واضح.",
    },
    mtpe: {
      title: "التحرير اللاحق للترجمة الآلية (MTPE)",
      description:
        "تحرير مخرجات الترجمة الآلية إلى العربية لترقى إلى الجودة البشرية — بسرعة ودون التضحية بالدقة.",
      intro: [
        "قد تُسرّع الترجمة الآلية المشاريع الكبيرة، لكن مخرجاتها كثيرًا ما تتضمن أخطاء في المعنى ومصطلحات غير متّسقة وعربية غير طبيعية. ويحوّلها التحرير اللاحق إلى نص قابل للنشر.",
        "يجعل التحرير الخفيف المخرجات مفهومة ودقيقة للاستخدام الداخلي، بينما يرتقي التحرير الكامل بها إلى مستوى الترجمة البشرية.",
      ],
      included: [
        "تحرير لاحق خفيف وكامل",
        "مواءمة المصطلحات ودليل الأسلوب",
        "تصحيح أخطاء المعنى والقواعد والسلاسة",
        "ملاحظات حول الأخطاء المتكررة في محرك الترجمة",
        "تقييم الجودة عند الطلب",
      ],
      ctaTitle: "تستخدم الترجمة الآلية؟",
      ctaDescription: "احصل على سرعة الترجمة الآلية بالجودة التي يتوقعها جمهورك.",
    },
    transcreation: {
      title: "الترجمة الإبداعية ونصوص الواجهات",
      description:
        "تكييف النصوص التسويقية ونصوص المنتجات لتبدو أصيلة لدى الجمهور العربي — مع الحفاظ على المقصد والنبرة وقدرتها على الإقناع.",
      intro: [
        "نادرًا ما تنجح الشعارات والحملات ونصوص الواجهات عند ترجمتها حرفيًا. فالترجمة الإبداعية تعيد صياغة الرسالة بالعربية لتحمل المقصد والمشاعر نفسها، بالاستناد إلى خلفية تسويقية.",
        "أما في التطبيقات والمواقع، فتُكيَّف نصوص الواجهات لتناسب المساحة المتاحة، وتراعي اتجاه الكتابة من اليمين إلى اليسار، وتحافظ على وضوح رحلة المستخدم.",
      ],
      included: [
        "الشعارات والإعلانات ونصوص الحملات",
        "نصوص المواقع وصفحات الهبوط",
        "نصوص واجهات التطبيقات والبرمجيات",
        "عدة خيارات إبداعية مع ترجمة عكسية",
        "مراجعة النصوص في سياقها (لقطات شاشة أو بيئة تجريبية)",
      ],
      ctaTitle: "تطلق منتجك بالعربية؟",
      ctaDescription: "اجعل رسالتك تصل إلى الجمهور العربي من اليوم الأول.",
    },
    consulting: {
      title: "استشارات التوطين",
      description: "نصائح عملية لدخول الأسواق الناطقة بالعربية وبناء سير عمل للتوطين قابل للتوسع.",
      intro: [
        "لا يقتصر دخول السوق العربية على الترجمة، بل يشمل تصميمات من اليمين إلى اليسار، والفروق الإقليمية، وقرارات المصطلحات، واختيار الأدوات والشركاء المناسبين.",
        "تساعدك الاستشارات على اتخاذ هذه القرارات مبكرًا، ليصبح توطين المحتوى أسهل وتبقى الجودة متّسقة مع نموّك.",
      ],
      included: [
        "اعتبارات السوق والجمهور العربي",
        "مسارد المصطلحات وأدلة الأسلوب",
        "توصيات بشأن سير العمل وأدوات الترجمة وأنظمة إدارة الترجمة",
        "إجراءات الجودة وإرشادات المراجعة",
        "تقييم جاهزية المواقع والتطبيقات للتوطين",
      ],
      ctaTitle: "تخطط لإطلاق بالعربية؟",
      ctaDescription: "احجز مكالمة لمناقشة محتواك وأسواقك وأهدافك.",
    },
    "ai-data-annotation": {
      title: "توسيم البيانات وتقييمها للذكاء الاصطناعي (RLHF)",
      description: "تقييم مخرجات الذكاء الاصطناعي العربية وترتيبها وتصحيحها لتحسين جودة النماذج وأمانها.",
      intro: [
        "تحتاج النماذج اللغوية إلى حكم متحدث أصلي لتؤدي جيدًا بالعربية. ويوفّر عمل التوسيم والتقييم هذه الإشارة: تقييم الإجابات، وتصحيح الأخطاء، ورصد المخرجات غير الآمنة أو غير الطبيعية.",
        "يسير العمل وفق إرشاداتك بدقة، مع تقييم متّسق وملاحظات مكتوبة واضحة.",
      ],
      included: [
        "تقييم الإجابات وترتيبها (RLHF)",
        "تصحيح النصوص العربية المترجمة آليًا والمولَّدة",
        "كتابة الأوامر والإجابات",
        "مراجعة الأمان والتحيّز والملاءمة الثقافية",
        "ملاحظات منظَّمة وفق إرشاداتك",
      ],
      ctaTitle: "تدرّب نماذج بالعربية؟",
      ctaDescription: "احصل على تقييم عربي أصيل ومتّسق لبيانات الذكاء الاصطناعي.",
    },
    "digital-marketing": {
      title: "التسويق الرقمي بالعربية",
      description:
        "تحسين محركات البحث بالعربية ومحتوى وسائل التواصل الاجتماعي والحملات للوصول إلى الجمهور العربي وتحقيق النتائج.",
      intro: [
        "يتطلب الوصول إلى الجمهور العربي عبر الإنترنت التحدث بلغته — وبالطريقة التي يبحث بها. ويجمع التسويق الرقمي بين التوطين والخبرة التسويقية لجعل محتواك ظاهرًا ومقنعًا بالعربية.",
        "من البحث عن الكلمات المفتاحية إلى منشورات التواصل الاجتماعي والنصوص الإعلانية، يُكتب كل محتوى للسوق المستهدفة بدلًا من ترجمته سطرًا بسطر.",
      ],
      included: [
        "البحث عن الكلمات المفتاحية العربية وتحسين محركات البحث",
        "محتوى مواقع ومدونات موطَّن",
        "منشورات وتعليقات وسائل التواصل الاجتماعي",
        "نصوص إعلانية لحملات البحث ووسائل التواصل",
        "توطين الرسائل البريدية والنشرات الإخبارية",
      ],
      ctaTitle: "تريد النمو في الأسواق العربية؟",
      ctaDescription: "لنخطط معًا لمحتوى عربي يسهل العثور عليه ويدفع إلى التفاعل.",
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
        title: "SaaS",
        summary:
          "Aider les entreprises SaaS à toucher les utilisateurs arabophones en localisant plateformes, tableaux de bord, centres d’aide et notes de version, pour une expérience produit fluide.",
        image: "/images/photos/spec-saas.jpg",
      },
    ],
  },
  overview: {
    helpTitle: "Je peux vous aider avec",
    learnMore: "En savoir plus",
    tagline: "L’excellence en arabe, depuis l’anglais, le français et l’espagnol",
    closingTitle: "J’aimerais en savoir plus sur votre projet",
    closingText: "Dites-moi ce que vous souhaitez traduire, adapter ou réviser, et je reviendrai vers vous avec un plan et un devis.",
    getInTouch: "Me contacter",
    contactLabels: { email: "E-mail", whatsapp: "WhatsApp", telegram: "Telegram", timezone: "Fuseau horaire" },
    timezone: "Palestine (GMT+2 / GMT+3)",
    items: {
      translation: {
        question: "Vous avez besoin de traduire des documents, un site web ou un logiciel en arabe ?",
        text: "Je traduis **de l’anglais, du français et de l’espagnol vers l’arabe** dans les domaines technique, juridique, financier, médical, éducatif, environnemental et audiovisuel — avec précision, naturel et cohérence terminologique.",
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
      "ai-data-annotation": {
        question: "Vous entraînez ou évaluez des modèles d’IA en arabe ?",
        text: "J’**évalue, classe et corrige les réponses d’IA en arabe**, rédige des prompts et des réponses, et fournis des retours structurés selon vos consignes pour améliorer la qualité et la sécurité des modèles.",
      },
      "digital-marketing": {
        question: "Vous voulez que votre marque soit trouvée et appréciée par le public arabophone ?",
        text: "J’associe localisation et expertise marketing pour créer des **contenus SEO, réseaux sociaux et campagnes en arabe**, écrits pour votre marché cible et non traduits ligne à ligne.",
      },
    },
  },
  pages: {
    translation: {
      title: "Traduction vers l’arabe",
      description:
        "Traduction humaine professionnelle de l’anglais, du français et de l’espagnol vers l’arabe, dans les domaines technique, juridique, financier, médical et audiovisuel.",
      intro: [
        "Chaque projet est traduit par un linguiste professionnel, et pas seulement passé par une machine. L’objectif : un arabe exact, naturel et cohérent avec votre terminologie et votre ton.",
        "Le travail suit un processus défini de traduction, révision et relecture, appuyé par des outils de TAO, des glossaires et des mémoires de traduction pour garantir la qualité sur chaque fichier et chaque mise à jour.",
      ],
      includedTitle: "Projets pris en charge",
      included: [
        "Documents, rapports et manuels",
        "Sites web, applications et chaînes logicielles",
        "Contrats et documents de conformité",
        "Communication marketing et institutionnelle",
        "Gestion des glossaires et des mémoires de traduction",
        "Vidéos et contenus audio",
      ],
      ctaTitle: "Des fichiers à traduire ?",
      ctaDescription: "Envoyez vos documents pour obtenir un devis et un délai de livraison clair.",
    },
    mtpe: {
      title: "Post-édition de traduction automatique (MTPE)",
      description:
        "Révision de la traduction automatique vers l’arabe pour atteindre une qualité humaine — rapidement, sans sacrifier l’exactitude.",
      intro: [
        "La traduction automatique accélère les gros projets, mais le résultat brut contient souvent des contresens, une terminologie incohérente et un arabe peu naturel. La post-édition en fait un texte publiable.",
        "La post-édition légère rend le texte compréhensible et exact pour un usage interne ; la post-édition complète l’amène au niveau d’une traduction humaine.",
      ],
      included: [
        "Post-édition légère et complète",
        "Alignement sur la terminologie et le guide de style",
        "Correction des erreurs de sens, de grammaire et de fluidité",
        "Retours sur les erreurs récurrentes du moteur",
        "Évaluation de la qualité sur demande",
      ],
      ctaTitle: "Vous utilisez la traduction automatique ?",
      ctaDescription: "Profitez de sa rapidité avec la qualité qu’attend votre public.",
    },
    transcreation: {
      title: "Transcréation et textes d’interface",
      description:
        "Adapter vos textes marketing et produit pour qu’ils sonnent naturels en arabe — en préservant l’intention, le ton et la conversion.",
      intro: [
        "Slogans, campagnes et textes d’interface fonctionnent rarement traduits mot à mot. La transcréation réécrit le message en arabe pour qu’il garde la même intention et la même émotion, avec un regard marketing.",
        "Pour les applications et les sites, les textes d’interface sont adaptés à l’espace disponible, aux conventions de lecture de droite à gauche et à la clarté du parcours utilisateur.",
      ],
      included: [
        "Slogans, annonces et textes de campagne",
        "Textes de sites web et de pages d’atterrissage",
        "Chaînes d’interface d’applications et de logiciels",
        "Plusieurs propositions créatives avec rétrotraduction",
        "Vérification des textes en contexte (captures ou préproduction)",
      ],
      ctaTitle: "Vous lancez une version arabe ?",
      ctaDescription: "Faites passer votre message auprès du public arabophone dès le premier jour.",
    },
    consulting: {
      title: "Conseil en localisation",
      description:
        "Des conseils concrets pour aborder les marchés arabophones et bâtir un processus de localisation évolutif.",
      intro: [
        "Se lancer en arabe ne se limite pas à la traduction : mises en page de droite à gauche, variantes régionales, choix terminologiques, sélection des bons outils et partenaires.",
        "Le conseil vous aide à prendre ces décisions tôt, pour que vos contenus soient plus simples à localiser et que la qualité reste constante à mesure que vous grandissez.",
      ],
      included: [
        "Spécificités du marché et du public arabophones",
        "Glossaires terminologiques et guides de style",
        "Recommandations de processus, d’outils de TAO et de TMS",
        "Processus qualité et consignes de révision",
        "Audit de préparation à la localisation de sites et d’applications",
      ],
      ctaTitle: "Vous préparez un lancement en arabe ?",
      ctaDescription: "Réservez un appel pour parler de vos contenus, marchés et objectifs.",
    },
    "ai-data-annotation": {
      title: "Annotation et évaluation de données IA (RLHF)",
      description:
        "Évaluer, classer et corriger les réponses d’IA en arabe pour améliorer la qualité et la sécurité des modèles.",
      intro: [
        "Les modèles de langue ont besoin du jugement d’un locuteur natif pour bien fonctionner en arabe. L’annotation et l’évaluation apportent ce signal : noter les réponses, corriger les erreurs et signaler les contenus inappropriés ou peu naturels.",
        "Le travail suit précisément vos consignes, avec une notation cohérente et des retours écrits clairs.",
      ],
      included: [
        "Notation et classement des réponses (RLHF)",
        "Correction de textes arabes traduits automatiquement ou générés",
        "Rédaction de prompts et de réponses",
        "Revue de sécurité, de biais et d’adéquation culturelle",
        "Retours structurés selon vos consignes",
      ],
      ctaTitle: "Vous entraînez des modèles en arabe ?",
      ctaDescription: "Obtenez une évaluation native et cohérente de vos données d’IA.",
    },
    "digital-marketing": {
      title: "Marketing digital en arabe",
      description:
        "SEO en arabe, réseaux sociaux et contenus de campagne pour toucher les publics arabophones et obtenir des résultats.",
      intro: [
        "Toucher le public arabophone en ligne, c’est parler sa langue — et chercher comme lui. Le marketing digital associe localisation et expertise marketing pour rendre vos contenus visibles et convaincants en arabe.",
        "De la recherche de mots-clés aux publications sur les réseaux sociaux et aux annonces, chaque contenu est écrit pour le marché cible plutôt que traduit ligne à ligne.",
      ],
      included: [
        "Recherche de mots-clés et SEO en arabe",
        "Contenus de sites et de blogs localisés",
        "Publications et légendes pour les réseaux sociaux",
        "Textes d’annonces pour le search et les réseaux sociaux",
        "Localisation d’e-mails et de newsletters",
      ],
      ctaTitle: "Envie de vous développer sur les marchés arabes ?",
      ctaDescription: "Planifions des contenus en arabe qui se trouvent facilement et font agir.",
    },
  },
};

const es: LocaleContent = {
  shared: {
    eyebrow: "Servicio",
    includedTitle: "Qué incluye",
    specTitle: "Especializaciones",
    specIntro:
      "Una traducción precisa depende de conocer el ámbito. Cada especialización se trabaja con conocimiento del tema, glosarios específicos y controles terminológicos, para que su texto en árabe sea correcto tanto para expertos como para el público general.",
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
        title: "SaaS",
        summary:
          "Ayudar a las empresas SaaS a llegar a los usuarios de habla árabe localizando plataformas, paneles, centros de ayuda y notas de versión, para ofrecer una experiencia de producto fluida.",
        image: "/images/photos/spec-saas.jpg",
      },
    ],
  },
  overview: {
    helpTitle: "Puedo ayudarle con",
    learnMore: "Más información",
    tagline: "Excelencia en árabe, desde el inglés, el francés y el español",
    closingTitle: "Me encantaría saber más sobre su proyecto",
    closingText: "Cuénteme qué necesita traducir, adaptar o revisar y le responderé con un plan y un presupuesto.",
    getInTouch: "Contactar",
    contactLabels: { email: "Correo electrónico", whatsapp: "WhatsApp", telegram: "Telegram", timezone: "Zona horaria" },
    timezone: "Palestina (GMT+2 / GMT+3)",
    items: {
      translation: {
        question: "¿Necesita traducir documentos, sitios web o software al árabe?",
        text: "Traduzco **del inglés, el francés y el español al árabe** en los ámbitos técnico, jurídico, financiero, sanitario, educativo, medioambiental y audiovisual, con precisión, naturalidad y coherencia terminológica.",
      },
      mtpe: {
        question: "¿Utiliza traducción automática pero necesita un árabe de calidad humana?",
        text: "Realizo la **posedición de traducciones automáticas**, corrigiendo sentido, terminología y estilo para que el texto se lea con naturalidad: posedición ligera o completa según el uso del texto.",
      },
      transcreation: {
        question: "¿Sus textos de marketing o de su aplicación deben sonar naturales en árabe?",
        text: "Adapto **eslóganes, campañas y textos de interfaz** para que transmitan la misma intención y emoción al público árabe, quepan en el espacio disponible y respeten la lectura de derecha a izquierda.",
      },
      consulting: {
        question: "¿Planea entrar en los mercados de habla árabe?",
        text: "Le asesoro sobre **terminología, guías de estilo, flujos de trabajo y herramientas** para que su contenido esté listo para el árabe y la calidad se mantenga a medida que crece.",
      },
      "ai-data-annotation": {
        question: "¿Entrena o evalúa modelos de IA en árabe?",
        text: "**Puntúo, clasifico y corrijo respuestas de IA en árabe**, redacto instrucciones y respuestas, y ofrezco comentarios estructurados según sus pautas para mejorar la calidad y la seguridad de los modelos.",
      },
      "digital-marketing": {
        question: "¿Quiere que el público árabe encuentre su marca y confíe en ella?",
        text: "Combino localización y experiencia en marketing para crear **contenido en árabe para SEO, redes sociales y campañas**, escrito para su mercado objetivo y no traducido línea por línea.",
      },
    },
  },
  pages: {
    translation: {
      title: "Traducción al árabe",
      description:
        "Traducción humana profesional del inglés, el francés y el español al árabe, en los ámbitos técnico, jurídico, financiero, sanitario y audiovisual.",
      intro: [
        "Cada proyecto lo traduce un lingüista profesional, no solo una máquina. El objetivo es un árabe preciso, natural y coherente con su terminología y su tono de marca.",
        "El trabajo sigue un proceso definido de traducción, edición y corrección, con herramientas TAO, glosarios y memorias de traducción para mantener la calidad en cada archivo y cada actualización.",
      ],
      includedTitle: "Proyectos gestionados",
      included: [
        "Documentos, informes y manuales",
        "Sitios web, aplicaciones y cadenas de software",
        "Contratos y documentos de cumplimiento",
        "Comunicación de marketing y corporativa",
        "Mantenimiento de glosarios y memorias de traducción",
        "Vídeos y audio",
      ],
      ctaTitle: "¿Tiene archivos para traducir?",
      ctaDescription: "Envíe sus documentos y reciba un presupuesto y un plazo de entrega claros.",
    },
    mtpe: {
      title: "Posedición de traducción automática (MTPE)",
      description:
        "Edición de la traducción automática al árabe hasta alcanzar calidad humana, con rapidez y sin sacrificar la exactitud.",
      intro: [
        "La traducción automática agiliza los proyectos grandes, pero el resultado en bruto suele incluir errores de sentido, terminología incoherente y un árabe poco natural. La posedición lo convierte en un texto publicable.",
        "La posedición ligera hace que el texto sea comprensible y exacto para uso interno; la posedición completa lo lleva al nivel de una traducción humana.",
      ],
      included: [
        "Posedición ligera y completa",
        "Alineación con la terminología y la guía de estilo",
        "Corrección de errores de sentido, gramática y fluidez",
        "Comentarios sobre errores recurrentes del motor",
        "Evaluación de la calidad bajo petición",
      ],
      ctaTitle: "¿Utiliza traducción automática?",
      ctaDescription: "Obtenga su rapidez con la calidad que espera su público.",
    },
    transcreation: {
      title: "Transcreación y textos de interfaz",
      description:
        "Adaptar textos de marketing y de producto para que suenen naturales en árabe, conservando intención, tono y conversión.",
      intro: [
        "Los eslóganes, las campañas y los textos de interfaz rara vez funcionan traducidos palabra por palabra. La transcreación reescribe el mensaje en árabe para que transmita la misma intención y emoción, con criterio de marketing.",
        "En aplicaciones y sitios web, los textos de interfaz se adaptan al espacio disponible, a la lectura de derecha a izquierda y a la claridad del recorrido del usuario.",
      ],
      included: [
        "Eslóganes, anuncios y textos de campaña",
        "Textos de sitios web y páginas de destino",
        "Cadenas de interfaz de aplicaciones y software",
        "Varias propuestas creativas con retrotraducción",
        "Revisión de los textos en contexto (capturas o entorno de pruebas)",
      ],
      ctaTitle: "¿Lanza su producto en árabe?",
      ctaDescription: "Haga que su mensaje llegue al público árabe desde el primer día.",
    },
    consulting: {
      title: "Consultoría de localización",
      description:
        "Asesoramiento práctico para entrar en los mercados de habla árabe y crear un flujo de localización escalable.",
      intro: [
        "Lanzarse en árabe no es solo traducir: implica diseños de derecha a izquierda, variantes regionales, decisiones terminológicas y elegir las herramientas y los socios adecuados.",
        "La consultoría le ayuda a tomar esas decisiones desde el principio, para que el contenido sea más fácil de localizar y la calidad se mantenga a medida que crece.",
      ],
      included: [
        "Particularidades del mercado y del público árabes",
        "Glosarios terminológicos y guías de estilo",
        "Recomendaciones de flujo de trabajo, herramientas TAO y TMS",
        "Proceso de calidad y pautas de revisión",
        "Revisión de la preparación para la localización de sitios web y aplicaciones",
      ],
      ctaTitle: "¿Prepara un lanzamiento en árabe?",
      ctaDescription: "Reserve una llamada para hablar de sus contenidos, mercados y objetivos.",
    },
    "ai-data-annotation": {
      title: "Anotación y evaluación de datos de IA (RLHF)",
      description:
        "Evaluar, clasificar y corregir respuestas de IA en árabe para mejorar la calidad y la seguridad de los modelos.",
      intro: [
        "Los modelos de lenguaje necesitan el criterio de un hablante nativo para funcionar bien en árabe. La anotación y la evaluación aportan esa señal: puntuar respuestas, corregir errores y señalar contenidos inseguros o poco naturales.",
        "El trabajo sigue sus pautas con precisión, con una puntuación coherente y comentarios escritos claros.",
      ],
      included: [
        "Puntuación y clasificación de respuestas (RLHF)",
        "Corrección de textos árabes traducidos automáticamente o generados",
        "Redacción de instrucciones y respuestas",
        "Revisión de seguridad, sesgos y adecuación cultural",
        "Comentarios estructurados según sus pautas",
      ],
      ctaTitle: "¿Entrena modelos en árabe?",
      ctaDescription: "Obtenga una evaluación nativa y coherente de sus datos de IA.",
    },
    "digital-marketing": {
      title: "Marketing digital en árabe",
      description:
        "SEO en árabe, redes sociales y contenidos de campaña para llegar al público árabe y obtener resultados.",
      intro: [
        "Llegar al público árabe en internet significa hablar su idioma y buscar como él. El marketing digital combina localización y experiencia en marketing para que su contenido sea visible y convincente en árabe.",
        "Desde la investigación de palabras clave hasta las publicaciones en redes sociales y los anuncios, cada contenido se escribe para el mercado objetivo en lugar de traducirse línea por línea.",
      ],
      included: [
        "Investigación de palabras clave y SEO en árabe",
        "Contenido localizado para sitios web y blogs",
        "Publicaciones y textos para redes sociales",
        "Textos de anuncios para campañas de búsqueda y redes sociales",
        "Localización de correos electrónicos y boletines",
      ],
      ctaTitle: "¿Quiere crecer en los mercados árabes?",
      ctaDescription: "Planifiquemos contenido en árabe que se encuentre fácilmente y genere resultados.",
    },
  },
};

const all: Record<Locale, LocaleContent> = { en, ar, fr, es };

export function getServicePages(locale: string): LocaleContent {
  return all[locale as Locale] ?? en;
}

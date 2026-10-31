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
        text: "I translate from **English, French and Spanish into Arabic** across technical, legal, financial, healthcare, education, environmental and audiovisual content — accurate, natural and consistent with your terminology.",
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
    editing: {
      title: "Editing & Proofreading",
      description:
        "Bilingual editing, proofreading and language quality assessment (LQA) of Arabic translations, so every text is accurate, consistent and ready to publish.",
      intro: [
        "A second pair of expert eyes is what turns a good translation into a reliable one. I review Arabic translations, whether done by other translators, in-house teams or machine translation, against the source text, your glossary and your style guide, and correct anything that affects meaning, terminology, grammar, fluency or formatting.",
        "For agencies, I also provide language quality assessment (LQA): errors are logged by category and severity using standard frameworks such as MQM or your own scorecard, and summarized in a clear report with a quality score and feedback for the translator.",
      ],
      included: [
        "Bilingual editing against the source text",
        "Monolingual proofreading of the Arabic",
        "Terminology and style-guide compliance checks",
        "LQA scoring by error category and severity",
        "Quality reports and feedback for translators",
        "Final formatting and pre-publication checks",
      ],
      ctaTitle: "Request a quote",
      ctaDescription: "Send the source and the translation, or tell me about the project, and I’ll reply with a clear quote.",
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
        "Final proofreading and formatting checks",
      ],
      ctaTitle: "Using machine translation?",
      ctaDescription: "Get the speed of MT with the quality your audience expects.",
    },
    transcreation: {
      title: "Transcreation",
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
        "Arabic brand voice and tone guidelines",
      ],
      ctaTitle: "Launching in Arabic?",
      ctaDescription: "Make your message land with Arab audiences from day one.",
    },
    consulting: {
      title: "Consulting",
      description:
        "Practical advice on entering Arabic-speaking markets and building a localization workflow that scales.",
      intro: [
        "Going into Arabic involves more than translation: right-to-left layouts, regional variations, terminology decisions and choosing the right tools and partners.",
        "Consulting helps you make those decisions early, so content is easier to localize and quality stays consistent as you grow.",
      ],
      included: [
        "Arabic market and audience considerations",
        "Terminology glossaries and style guides",
        "Dialect and tone guidance (Modern Standard Arabic or regional)",
        "Quality process and review guidelines",
        "Localization-readiness review of websites and apps",
        "Cultural adaptation of visuals, names, dates and currencies",
      ],
      ctaTitle: "Planning an Arabic launch?",
      ctaDescription: "Book a call to discuss your content, markets and goals.",
    },
    "digital-marketing": {
      title: "Digital Marketing",
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
        "Campaign performance review and recommendations",
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
        title: "توطين البرمجيات كخدمة (SaaS)",
        summary:
          "مساعدة شركات البرمجيات كخدمة على الوصول إلى المستخدمين العرب من خلال توطين المنصات ولوحات التحكم ومراكز المساعدة وملاحظات الإصدار، لتقديم تجربة منتج سلسة.",
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
        text: "أترجم **من الإنجليزية والفرنسية والإسبانية إلى العربية** في المجالات التقنية والقانونية والمالية والطبية والتعليمية والبيئية والسمعية البصرية — ترجمة دقيقة وسلسة ومتّسقة مع مصطلحاتك.",
      },
      editing: {
        question: "هل تحتاج إلى مراجعة ترجمة عربية قبل اعتمادها؟",
        text: "**أحرّر الترجمات العربية وأدقّقها وأقيّم جودتها**، بما في ذلك أعمال مترجمين آخرين ومخرجات الترجمة الآلية، مقابل النص المصدر ودليل الأسلوب الخاص بك، وأسلّم ملفات نظيفة بتعديلات متتبَّعة، إضافةً إلى **بطاقات تقييم الجودة (LQA) وتقاريرها** للوكالات.",
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
    editing: {
      title: "التحرير والتدقيق",
      description:
        "تحرير الترجمات العربية مقابل النص المصدر وتدقيقها وتقييم جودتها (LQA)، ليكون كل نص دقيقًا ومتّسقًا وجاهزًا للنشر.",
      intro: [
        "العين الخبيرة الثانية هي ما يحوّل الترجمة الجيدة إلى ترجمة يمكن الاعتماد عليها. أراجع الترجمات العربية، سواء أنجزها مترجمون آخرون أو فرق داخلية أو الترجمة الآلية، مقابل النص المصدر ومسرد المصطلحات ودليل الأسلوب الخاص بك، وأصحّح كل ما يمسّ المعنى أو المصطلحات أو القواعد أو السلاسة أو التنسيق.",
        "وللوكالات، أقدّم أيضًا تقييم جودة اللغة (LQA): تُسجَّل الأخطاء حسب الفئة ودرجة الخطورة باستخدام أطر معيارية مثل MQM أو بطاقة التقييم الخاصة بكم، وتُلخَّص في تقرير واضح يتضمن درجة الجودة وملاحظات للمترجم.",
      ],
      included: [
        "تحرير ثنائي اللغة مقابل النص المصدر",
        "تدقيق أحادي اللغة للنص العربي",
        "التحقق من الالتزام بالمصطلحات ودليل الأسلوب",
        "تقييم الجودة (LQA) حسب فئة الخطأ ودرجة خطورته",
        "تقارير الجودة وملاحظات للمترجمين",
        "مراجعة التنسيق النهائي والفحص قبل النشر",
      ],
      ctaTitle: "اطلب عرض سعر",
      ctaDescription: "أرسل النص المصدر والترجمة، أو أخبرني عن المشروع، وسأرد عليك بعرض سعر واضح.",
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
        "تدقيق لغوي نهائي وفحص التنسيق",
      ],
      ctaTitle: "تستخدم الترجمة الآلية؟",
      ctaDescription: "احصل على سرعة الترجمة الآلية بالجودة التي يتوقعها جمهورك.",
    },
    transcreation: {
      title: "الترجمة الإبداعية",
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
        "إرشادات صوت العلامة التجارية ونبرتها بالعربية",
      ],
      ctaTitle: "تطلق منتجك بالعربية؟",
      ctaDescription: "اجعل رسالتك تصل إلى الجمهور العربي من اليوم الأول.",
    },
    consulting: {
      title: "الاستشارات",
      description: "نصائح عملية لدخول الأسواق الناطقة بالعربية وبناء سير عمل للتوطين قابل للتوسع.",
      intro: [
        "لا يقتصر دخول السوق العربية على الترجمة، بل يشمل تصميمات من اليمين إلى اليسار، والفروق الإقليمية، وقرارات المصطلحات، واختيار الأدوات والشركاء المناسبين.",
        "تساعدك الاستشارات على اتخاذ هذه القرارات مبكرًا، ليصبح توطين المحتوى أسهل وتبقى الجودة متّسقة مع نموّك.",
      ],
      included: [
        "اعتبارات السوق والجمهور العربي",
        "مسارد المصطلحات وأدلة الأسلوب",
        "إرشادات اختيار اللهجة والنبرة (العربية الفصحى المعاصرة أو اللهجات المحلية)",
        "إجراءات الجودة وإرشادات المراجعة",
        "تقييم جاهزية المواقع والتطبيقات للتوطين",
        "التكييف الثقافي للصور والأسماء والتواريخ والعملات",
      ],
      ctaTitle: "تخطط لإطلاق بالعربية؟",
      ctaDescription: "احجز مكالمة لمناقشة محتواك وأسواقك وأهدافك.",
    },
    "digital-marketing": {
      title: "التسويق الرقمي",
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
        "مراجعة أداء الحملات وتقديم التوصيات",
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
        text: "Je traduis **de l’anglais, du français et de l’espagnol vers l’arabe** dans les domaines technique, juridique, financier, médical, éducatif, environnemental et audiovisuel — avec précision, naturel et cohérence terminologique.",
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
    editing: {
      title: "Révision et relecture",
      description:
        "Révision bilingue, relecture et évaluation de la qualité linguistique (LQA) de traductions arabes, pour des textes exacts, cohérents et prêts à publier.",
      intro: [
        "Un second regard expert transforme une bonne traduction en traduction fiable. Je révise des traductions arabes, qu’elles soient réalisées par d’autres traducteurs, par des équipes internes ou par traduction automatique, par rapport au texte source, à votre glossaire et à votre guide de style, et je corrige tout ce qui touche au sens, à la terminologie, à la grammaire, à la fluidité ou à la mise en forme.",
        "Pour les agences, je propose aussi l’évaluation de la qualité linguistique (LQA) : les erreurs sont consignées par catégorie et par gravité selon des référentiels comme MQM ou votre propre grille, puis synthétisées dans un rapport clair avec une note de qualité et des commentaires pour le traducteur.",
      ],
      included: [
        "Révision bilingue par rapport au texte source",
        "Relecture unilingue de l’arabe",
        "Vérification de la terminologie et du guide de style",
        "Notation LQA par catégorie et gravité d’erreur",
        "Rapports qualité et retours aux traducteurs",
        "Contrôle final de la mise en forme avant publication",
      ],
      ctaTitle: "Demander un devis",
      ctaDescription: "Envoyez-moi la source et la traduction, ou décrivez votre projet, et je vous répondrai avec un devis clair.",
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
        "Relecture finale et vérification de la mise en forme",
      ],
      ctaTitle: "Vous utilisez la traduction automatique ?",
      ctaDescription: "Profitez de sa rapidité avec la qualité qu’attend votre public.",
    },
    transcreation: {
      title: "Transcréation",
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
        "Lignes directrices sur la voix et le ton de la marque en arabe",
      ],
      ctaTitle: "Vous lancez une version arabe ?",
      ctaDescription: "Faites passer votre message auprès du public arabophone dès le premier jour.",
    },
    consulting: {
      title: "Conseil",
      description:
        "Des conseils concrets pour aborder les marchés arabophones et bâtir un processus de localisation évolutif.",
      intro: [
        "Se lancer en arabe ne se limite pas à la traduction : mises en page de droite à gauche, variantes régionales, choix terminologiques, sélection des bons outils et partenaires.",
        "Le conseil vous aide à prendre ces décisions tôt, pour que vos contenus soient plus simples à localiser et que la qualité reste constante à mesure que vous grandissez.",
      ],
      included: [
        "Spécificités du marché et du public arabophones",
        "Glossaires terminologiques et guides de style",
        "Conseils sur la variante et le ton (arabe standard moderne ou dialectes régionaux)",
        "Processus qualité et consignes de révision",
        "Audit de préparation à la localisation de sites et d’applications",
        "Adaptation culturelle des visuels, noms, dates et devises",
      ],
      ctaTitle: "Vous préparez un lancement en arabe ?",
      ctaDescription: "Réservez un appel pour parler de vos contenus, marchés et objectifs.",
    },
    "digital-marketing": {
      title: "Marketing digital",
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
        "Analyse des performances des campagnes et recommandations",
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
        text: "Traduzco **del inglés, el francés y el español al árabe** en los ámbitos técnico, jurídico, financiero, sanitario, educativo, medioambiental y audiovisual, con precisión, naturalidad y coherencia terminológica.",
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
        question: "¿Quieres que el público árabe encuentre tu marca y confíe en ella?",
        text: "Combino localización y experiencia en marketing para crear **contenido en árabe para SEO, redes sociales y campañas**, escrito para tu mercado objetivo y no traducido línea por línea.",
      },
    },
  },
  pages: {
    translation: {
      title: "Traducción al árabe",
      description:
        "Traducción humana profesional del inglés, el francés y el español al árabe, en los ámbitos técnico, jurídico, financiero, sanitario y audiovisual.",
      intro: [
        "Cada proyecto lo traduce un lingüista profesional, no solo una máquina. El objetivo es un árabe preciso, natural y coherente con tu terminología y tu tono de marca.",
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
      ctaTitle: "¿Tienes archivos para traducir?",
      ctaDescription: "Envía tus documentos y recibe un presupuesto y un plazo de entrega claros.",
    },
    editing: {
      title: "Edición y revisión",
      description:
        "Edición bilingüe, revisión y evaluación de la calidad lingüística (LQA) de traducciones al árabe, para que cada texto sea preciso, coherente y esté listo para publicar.",
      intro: [
        "Una segunda mirada experta es lo que convierte una buena traducción en una traducción fiable. Reviso traducciones al árabe, hechas por otros traductores, equipos internos o traducción automática, frente al texto original, tu glosario y tu guía de estilo, y corrijo todo lo que afecte al sentido, la terminología, la gramática, la fluidez o el formato.",
        "Para agencias, también ofrezco evaluación de la calidad lingüística (LQA): los errores se registran por categoría y gravedad con marcos estándar como MQM o vuestra propia ficha, y se resumen en un informe claro con una puntuación de calidad y comentarios para el traductor.",
      ],
      included: [
        "Edición bilingüe frente al texto original",
        "Revisión monolingüe del árabe",
        "Comprobación de terminología y guía de estilo",
        "Puntuación LQA por categoría y gravedad del error",
        "Informes de calidad y comentarios para traductores",
        "Comprobación final del formato antes de publicar",
      ],
      ctaTitle: "Solicitar un presupuesto",
      ctaDescription: "Envíame el original y la traducción, o cuéntame el proyecto, y te responderé con un presupuesto claro.",
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
        "Revisión final y comprobación del formato",
      ],
      ctaTitle: "¿Usas traducción automática?",
      ctaDescription: "Consigue su rapidez con la calidad que espera tu público.",
    },
    transcreation: {
      title: "Transcreación",
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
        "Pautas de voz y tono de marca en árabe",
      ],
      ctaTitle: "¿Lanzas tu producto en árabe?",
      ctaDescription: "Haz que tu mensaje llegue al público árabe desde el primer día.",
    },
    consulting: {
      title: "Consultoría",
      description:
        "Asesoramiento práctico para entrar en los mercados de habla árabe y crear un flujo de localización escalable.",
      intro: [
        "Lanzarse en árabe no es solo traducir: implica diseños de derecha a izquierda, variantes regionales, decisiones terminológicas y elegir las herramientas y los socios adecuados.",
        "La consultoría te ayuda a tomar esas decisiones desde el principio, para que el contenido sea más fácil de localizar y la calidad se mantenga a medida que creces.",
      ],
      included: [
        "Particularidades del mercado y del público árabes",
        "Glosarios terminológicos y guías de estilo",
        "Orientación sobre variante y tono (árabe estándar moderno o dialectos regionales)",
        "Proceso de calidad y pautas de revisión",
        "Revisión de la preparación para la localización de sitios web y aplicaciones",
        "Adaptación cultural de imágenes, nombres, fechas y monedas",
      ],
      ctaTitle: "¿Preparas un lanzamiento en árabe?",
      ctaDescription: "Reserva una llamada para hablar de tus contenidos, mercados y objetivos.",
    },
    "digital-marketing": {
      title: "Marketing digital",
      description:
        "SEO en árabe, redes sociales y contenidos de campaña para llegar al público árabe y obtener resultados.",
      intro: [
        "Llegar al público árabe en internet significa hablar su idioma y buscar como él. El marketing digital combina localización y experiencia en marketing para que tu contenido sea visible y convincente en árabe.",
        "Desde la investigación de palabras clave hasta las publicaciones en redes sociales y los anuncios, cada contenido se escribe para el mercado objetivo en lugar de traducirse línea por línea.",
      ],
      included: [
        "Investigación de palabras clave y SEO en árabe",
        "Contenido localizado para sitios web y blogs",
        "Publicaciones y textos para redes sociales",
        "Textos de anuncios para campañas de búsqueda y redes sociales",
        "Localización de correos electrónicos y boletines",
        "Análisis del rendimiento de campañas y recomendaciones",
      ],
      ctaTitle: "¿Quieres crecer en los mercados árabes?",
      ctaDescription: "Planifiquemos contenido en árabe que se encuentre fácilmente y genere resultados.",
    },
  },
};

const all: Record<Locale, LocaleContent> = { en, ar, fr, es };

export function getServicePages(locale: string): LocaleContent {
  return all[locale as Locale] ?? en;
}

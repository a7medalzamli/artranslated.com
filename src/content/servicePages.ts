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

type Step = { title: string; description: string };

export type ServicePage = {
  title: string;
  description: string;
  intro: string[];
  /** Overrides the shared "What's included" heading for this page. */
  includedTitle?: string;
  included: string[];
  steps: Step[];
  ctaTitle: string;
  ctaDescription: string;
};

type Shared = {
  eyebrow: string;
  includedTitle: string;
  stepsTitle: string;
  /** Translation page only: the specializations section. */
  specTitle: string;
  specIntro: string;
  /** Extra specialization cards (no detail page yet), shown after the main five. */
  extraSpecializations: { title: string; summary: string; image: string }[];
};

type LocaleContent = { shared: Shared; pages: Record<ServiceSlug, ServicePage> };

const s = (title: string, description: string): Step => ({ title, description });

const en: LocaleContent = {
  shared: {
    eyebrow: "Service",
    includedTitle: "What’s included",
    stepsTitle: "How it works",
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
          "Software-as-a-Service platforms, dashboards, help centres and release notes localized so Arabic-speaking users get a seamless product experience.",
        image: "/images/photos/spec-saas.jpg",
      },
    ],
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
      steps: [
        s("Brief & quote", "Share your files, deadline and audience; you receive a clear quote and timeline."),
        s("Translation", "A specialist linguist translates using your terminology and reference material."),
        s("Editing & proofreading", "A full review for accuracy, style and consistency, followed by a final proofread."),
        s("QA & delivery", "Automated QA checks, then delivery in the format you need."),
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
      steps: [
        s("Scope", "Agree the level of post-editing (light or full) and the quality target."),
        s("Sample review", "Check a sample to estimate the effort and the quality of the output."),
        s("Post-editing", "Edit the full output against the source text and glossary."),
        s("QA & delivery", "Final checks, then delivery."),
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
      steps: [
        s("Creative brief", "Audience, tone, goals and constraints."),
        s("Transcreation", "Options written in Arabic, with an explanation for each."),
        s("Review in context", "Checked in the layout for length and right-to-left display."),
        s("Final copy", "Approved copy delivered ready to implement."),
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
      steps: [
        s("Discovery call", "Understand your goals, markets and content."),
        s("Assessment", "Review your content, tools and current process."),
        s("Recommendations", "A clear written plan with next steps."),
        s("Set-up support", "Help putting glossaries, style guides and workflows in place."),
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
      steps: [
        s("Guidelines", "Study the project guidelines and examples."),
        s("Calibration", "A test batch to align with your scoring."),
        s("Annotation", "Ongoing tasks with consistent judgement."),
        s("Feedback", "Report recurring patterns and edge cases."),
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
      steps: [
        s("Goals & audience", "Define the markets, audience and results you want."),
        s("Research", "Keywords, competitors and platforms."),
        s("Content creation", "Arabic content optimized for search and each platform."),
        s("Review & refine", "Adjustments based on performance."),
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
    stepsTitle: "كيف تسير العملية",
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
          "توطين منصات البرمجيات كخدمة ولوحات التحكم ومراكز المساعدة وملاحظات الإصدار، ليحظى المستخدم العربي بتجربة منتج سلسة.",
        image: "/images/photos/spec-saas.jpg",
      },
    ],
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
      steps: [
        s("المتطلبات وعرض السعر", "أرسل ملفاتك وموعد التسليم والجمهور المستهدف، لتحصل على عرض سعر وجدول زمني واضحين."),
        s("الترجمة", "يترجم لغويٌّ متخصص النص بالاعتماد على مصطلحاتك والمواد المرجعية."),
        s("التحرير والتدقيق", "مراجعة شاملة للدقة والأسلوب والاتساق، يليها تدقيق لغوي نهائي."),
        s("ضمان الجودة والتسليم", "فحوص جودة آلية، ثم التسليم بالصيغة التي تحتاجها."),
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
      steps: [
        s("تحديد النطاق", "الاتفاق على مستوى التحرير (خفيف أو كامل) ومعيار الجودة المطلوب."),
        s("مراجعة عيّنة", "فحص عيّنة لتقدير الجهد المطلوب وجودة المخرجات."),
        s("التحرير اللاحق", "تحرير المخرجات كاملةً مقارنةً بالنص المصدر ومسرد المصطلحات."),
        s("ضمان الجودة والتسليم", "فحوص نهائية ثم التسليم."),
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
      steps: [
        s("الموجز الإبداعي", "تحديد الجمهور والنبرة والأهداف والقيود."),
        s("الترجمة الإبداعية", "كتابة خيارات بالعربية مع شرح لكل منها."),
        s("المراجعة في السياق", "التحقق من النص داخل التصميم من حيث الطول واتجاه الكتابة."),
        s("النص النهائي", "تسليم النص المعتمد جاهزًا للتنفيذ."),
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
      steps: [
        s("مكالمة تعارف", "التعرّف على أهدافك وأسواقك ومحتواك."),
        s("التقييم", "مراجعة المحتوى والأدوات وطريقة العمل الحالية."),
        s("التوصيات", "خطة مكتوبة وواضحة بالخطوات التالية."),
        s("دعم التنفيذ", "المساعدة في إعداد المسارد وأدلة الأسلوب وسير العمل."),
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
      steps: [
        s("الإرشادات", "دراسة إرشادات المشروع والأمثلة."),
        s("المعايرة", "دفعة تجريبية للتوافق مع معايير التقييم لديك."),
        s("التوسيم", "تنفيذ المهام بشكل مستمر وبحكم متّسق."),
        s("الملاحظات", "الإبلاغ عن الأنماط المتكررة والحالات الخاصة."),
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
      steps: [
        s("الأهداف والجمهور", "تحديد الأسواق والجمهور والنتائج المطلوبة."),
        s("البحث", "الكلمات المفتاحية والمنافسون والمنصات."),
        s("إنشاء المحتوى", "محتوى عربي محسَّن لمحركات البحث والمنصات."),
        s("المراجعة والتحسين", "تعديلات مبنية على الأداء."),
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
    stepsTitle: "Déroulement",
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
          "Plateformes SaaS, tableaux de bord, centres d’aide et notes de version localisés pour offrir aux utilisateurs arabophones une expérience fluide.",
        image: "/images/photos/spec-saas.jpg",
      },
    ],
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
      steps: [
        s("Brief et devis", "Envoyez vos fichiers, votre délai et votre public cible ; vous recevez un devis et un calendrier clairs."),
        s("Traduction", "Un linguiste spécialisé traduit à partir de votre terminologie et de vos documents de référence."),
        s("Révision et relecture", "Une révision complète de l’exactitude, du style et de la cohérence, suivie d’une relecture finale."),
        s("Contrôle qualité et livraison", "Contrôles qualité automatisés, puis livraison au format souhaité."),
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
      steps: [
        s("Périmètre", "Choix du niveau de post-édition (légère ou complète) et de l’objectif de qualité."),
        s("Analyse d’un échantillon", "Vérification d’un extrait pour estimer l’effort et la qualité."),
        s("Post-édition", "Révision de l’ensemble par rapport au texte source et au glossaire."),
        s("Contrôle qualité et livraison", "Vérifications finales, puis livraison."),
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
      steps: [
        s("Brief créatif", "Public, ton, objectifs et contraintes."),
        s("Transcréation", "Propositions rédigées en arabe, avec une explication pour chacune."),
        s("Vérification en contexte", "Contrôle dans la mise en page : longueur et sens de lecture."),
        s("Texte final", "Livraison des textes validés, prêts à intégrer."),
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
      steps: [
        s("Appel de découverte", "Comprendre vos objectifs, vos marchés et vos contenus."),
        s("Analyse", "Examen de vos contenus, outils et processus actuels."),
        s("Recommandations", "Un plan écrit et clair des prochaines étapes."),
        s("Accompagnement", "Aide à la mise en place des glossaires, guides de style et processus."),
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
      steps: [
        s("Consignes", "Étude des consignes du projet et des exemples."),
        s("Calibrage", "Lot d’essai pour s’aligner sur votre grille de notation."),
        s("Annotation", "Traitement continu des tâches avec un jugement cohérent."),
        s("Retours", "Signalement des tendances et des cas particuliers."),
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
      steps: [
        s("Objectifs et public", "Définir les marchés, le public et les résultats attendus."),
        s("Recherche", "Mots-clés, concurrents et plateformes."),
        s("Création de contenu", "Contenus arabes optimisés pour la recherche et chaque plateforme."),
        s("Suivi et ajustements", "Améliorations basées sur les performances."),
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
    stepsTitle: "Cómo funciona",
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
          "Plataformas SaaS, paneles, centros de ayuda y notas de versión localizados para que los usuarios de habla árabe disfruten de una experiencia fluida.",
        image: "/images/photos/spec-saas.jpg",
      },
    ],
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
      steps: [
        s("Briefing y presupuesto", "Envíe sus archivos, plazo y público; recibirá un presupuesto y un calendario claros."),
        s("Traducción", "Un lingüista especializado traduce con su terminología y su material de referencia."),
        s("Edición y corrección", "Revisión completa de exactitud, estilo y coherencia, seguida de una corrección final."),
        s("Control de calidad y entrega", "Controles de calidad automatizados y entrega en el formato que necesite."),
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
      steps: [
        s("Alcance", "Acordar el nivel de posedición (ligera o completa) y el objetivo de calidad."),
        s("Revisión de una muestra", "Revisar un fragmento para estimar el esfuerzo y la calidad."),
        s("Posedición", "Editar todo el resultado frente al texto original y el glosario."),
        s("Control de calidad y entrega", "Comprobaciones finales y entrega."),
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
      steps: [
        s("Briefing creativo", "Público, tono, objetivos y limitaciones."),
        s("Transcreación", "Propuestas redactadas en árabe, con una explicación para cada una."),
        s("Revisión en contexto", "Comprobación en el diseño: longitud y dirección de lectura."),
        s("Texto final", "Entrega de los textos aprobados, listos para implementar."),
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
      steps: [
        s("Llamada inicial", "Conocer sus objetivos, mercados y contenidos."),
        s("Análisis", "Revisión de sus contenidos, herramientas y proceso actual."),
        s("Recomendaciones", "Un plan escrito y claro con los próximos pasos."),
        s("Apoyo en la implantación", "Ayuda para crear glosarios, guías de estilo y flujos de trabajo."),
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
      steps: [
        s("Pautas", "Estudio de las pautas del proyecto y de los ejemplos."),
        s("Calibración", "Lote de prueba para alinearse con su sistema de puntuación."),
        s("Anotación", "Tareas continuas con un criterio coherente."),
        s("Comentarios", "Informe de patrones recurrentes y casos límite."),
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
      steps: [
        s("Objetivos y público", "Definir mercados, público y resultados esperados."),
        s("Investigación", "Palabras clave, competencia y plataformas."),
        s("Creación de contenido", "Contenido en árabe optimizado para buscadores y cada plataforma."),
        s("Revisión y mejora", "Ajustes basados en el rendimiento."),
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

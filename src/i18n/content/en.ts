/**
 * Page body content, English (source of truth for the SiteContent shape).
 * Other locales must provide the same keys. UI chrome lives in
 * src/i18n/dictionaries; this file is the translatable page copy.
 */
const en = {
  common: {
    letsTalk: "Let's talk",
    exploreServices: "Explore services",
    homeCrumb: "Home",
    seeProcess: "See the process",
    viewServices: "View services",
    confidentiality: "Confidentiality",
  },
  home: {
    languagesTitle: "Languages I work in",
    langNames: { en: "English", ar: "Arabic", fr: "French", es: "Spanish" },
    pastExperienceEyebrow: "Past experience",
    pastExperienceTitle: "A track record agencies trust",
    stats: {
      years: "Years of experience",
      words: "Words translated",
      projects: "Projects delivered",
      languages: "Working languages",
    },
    statValues: {
      years: { value: 14, suffix: "+" },
      words: { value: 1000000, suffix: "+" },
      projects: { value: 100, suffix: "+" },
      languages: { value: 4, suffix: "" },
    },
    availabilityEyebrow: "Availability",
    availabilityTitle: "Currently accepting new projects",
    availability: {
      days: "Daily — Monday to Sunday",
      displayZone: "United States (Eastern)",
      yourTime: "Your time",
      picker: "See these hours in your country / time zone:",
      nextDay: "(next day)",
    },
  },
  about: {
    eyebrow: "About",
    title: "About Ahmed Alzamli",
    description:
      "A specialist translator and localizer helping agencies and companies reach Arabic- and English-speaking audiences with accuracy, cultural nuance and dependable delivery.",
    crumb: "About",
    paragraphs: [
      "I translate and localize websites and digital products into English and Arabic, and translate specialized documentation from English, French and Spanish into Arabic. My goal is simple: content that reads as though it was written for its audience — never merely converted word for word.",
      "My background combines environmental engineering and a marketing diploma, which is why technical precision and persuasive, natural-sounding copy sit comfortably together in my work. That mix is especially valuable for website localization, UI/UX copy and transcreation, where accuracy alone is not enough — the message has to land.",
      "Every project runs through a disciplined Translation–Editing–Proofreading (TEP) workflow with SDL Trados translation memories and client-approved termbases, so terminology stays consistent and quality is built in rather than bolted on. Files are handled confidentially, with an NDA available before anything is shared.",
    ],
    ctaTitle: "Let's talk about your project",
    ctaDescription: "Tell me what you're working on and I'll reply with a clear, honest quote.",
    howItWorks: "How it works?",
  },
  specializations: {
    eyebrow: "Specializations",
    title: "Fields I specialize in",
    description:
      "Deep, domain-specific experience across the areas where accuracy and terminology matter most.",
    crumb: "Specializations",
    ctaTitle: "Have a project in one of these fields?",
    ctaDescription: "Tell me what you're working on and I'll reply with a clear, honest quote.",
  },
  services: {
    title: "Translation services",
    description:
      "English, French and Spanish into Arabic — across nine specializations, backed by a defined process and the right tools.",
    crumb: "Services",
    specializationsTitle: "Specializations",
    specializationsIntro:
      "Each specialization has its own page explaining what is covered and how the work is handled.",
    translationTitle: "Translation",
    translationSummary:
      "Professional human translation from English, French and Spanish into Arabic — accurate, natural and consistent with your terminology, for documents, websites and software.",
    consultingTitle: "Consulting",
    consultingSummary:
      "Localization consulting: advice on entering Arabic-speaking markets, setting up terminology and style guides, and choosing the right workflow, tools and quality process.",
    marketingTitle: "Digital Marketing",
    marketingSummary:
      "Arabic SEO, social media and campaign content that reaches Arab audiences — combining localization with a marketing background to drive traffic and conversions.",
    additionalTitle: "Additional services",
    additionalIntro:
      "Beyond straight translation, these services support localization and AI projects end to end.",
    ctaTitle: "Not sure which service fits?",
    ctaDescription:
      "Describe your project and I'll recommend the right approach and give you a clear quote.",
  },
  process: {
    eyebrow: "Process & QA",
    title: "How it works?",
    description:
      "Quality is built in through a defined workflow — not bolted on at the end. Here's exactly how your project is handled, step by step.",
    crumb: "How it works?",
    tepTitle: "The TEP workflow",
    tepIntro:
      "Every project runs through Translation, Editing and Proofreading, with terminology and QA around it.",
    workflowSteps: [
      {
        title: "Preparation & terminology",
        description:
          "Analyze the source and set up glossaries and translation memory.",
      },
      {
        title: "Translation",
        description:
          "Translate with consistent terminology, keeping meaning and tone.",
      },
      {
        title: "Editing",
        description:
          "Check the translation against the source for accuracy.",
      },
      {
        title: "Proofreading",
        description:
          "Polish the Arabic for flow, style and formatting.",
      },
      {
        title: "QA checks & delivery",
        description:
          "Run final QA checks and deliver in your format.",
      },
    ],
    qaTitle: "Quality-assurance policy",
    qaParagraphs: [
      "Quality assurance combines automated checks with human judgement. Automated checks in SDL Trados flag terminology mismatches, number and tag errors and inconsistencies; a human editing and proofreading pass ensures the Arabic reads naturally and accurately.",
      "Terminology decisions are captured in glossaries and termbases so they carry forward to future work, and translation memories keep updated or repeat content consistent.",
    ],
    toolsTitle: "Tools",
    tools: [
      { name: "SDL Trados Studio", text: "the core CAT environment for translation and QA" },
      { name: "Translation memories", text: "consistency across large and updated documents" },
      { name: "Glossaries & termbases", text: "controlled, client-approved terminology" },
    ],
    ctaTitle: "Want this level of care on your project?",
    ctaDescription: "Tell me what you're working on and I'll explain exactly how it would be handled.",
  },
  contact: {
    title: "Contact & request a quote",
    description: "Tell me about your project and I'll reply with a clear quote.",
    crumb: "Contact",
    directIntro: "Prefer to reach out directly? Email",
    directOr: "or call",
    calloutStrong: "Please don't send confidential files yet.",
    calloutText:
      "This form is for project details only. Wait until we've agreed terms — and an NDA, if you'd like one — before sharing any sensitive documents. See the",
    calloutLink: "confidentiality page",
  },
  confidentiality: {
    title: "Confidentiality & data security",
    description:
      "For legal, financial and commercial material, discretion is not optional. Here is how your files are protected.",
    crumb: "Confidentiality",
    ndaTitle: "NDAs before any file is opened",
    ndaText:
      "I operate under strict confidentiality and am ready to sign a non-disclosure agreement before viewing any project files. If you have your own NDA, I'm happy to review and sign it; if not, one can be put in place quickly so you can share materials with confidence.",
    transfersTitle: "Secure transfers",
    transfersText:
      "Files are received and returned through secure channels rather than open, unprotected email attachments.",
    storageTitle: "Storage & handling",
    storageText:
      "Working files are stored carefully and access is limited to what a project requires.",
    retentionTitle: "Data retention",
    retentionText:
      "Files are kept only as long as needed for the project and any agreed follow-up, then deleted.",
    ctaTitle: "Ready to share your project securely?",
    ctaDescription: "An NDA can be in place before you send a single file.",
  },
  // Card text for the Services overview page. Same order as
  // content/specializations.ts and content/additionalServices.ts.
  cards: {
    specializations: [
      {
        title: "Technical",
        summary:
          "Engineering documentation, manuals and specifications — supported by an environmental engineering background and rigorous terminology control.",
      },
      {
        title: "Legal",
        summary:
          "Contracts, compliance and legal documentation, handled under strict confidentiality and NDA.",
      },
      {
        title: "Financial",
        summary:
          "Reports, statements and financial communications translated with precise, consistent terminology.",
      },
      {
        title: "Healthcare",
        summary:
          "Medical and healthcare documentation translated with accuracy, clarity and appropriate register.",
      },
      {
        title: "Audiovisual",
        summary:
          "Subtitling, transcreation and dubbing adaptation with careful lip-sync alignment for Arabic audiences.",
      },
    ],
    additional: [
      {
        title: "Machine translation post-editing (MTPE)",
        summary:
          "Editing machine-translated output to human quality — correcting accuracy, terminology and style while keeping turnaround efficient.",
      },
      {
        title: "Transcreation & UI copy",
        summary:
          "Adapting marketing and product interface copy so it reads naturally in Arabic and preserves intent, tone and conversion — informed by a marketing background.",
      },
      {
        title: "Digital product testing",
        summary:
          "Reviewing localized apps and interfaces in context to catch layout, truncation and usability issues before release.",
      },
      {
        title: "AI data annotation & evaluation (RLHF)",
        summary:
          "Evaluating and ranking AI-generated Arabic output, correcting errors and giving structured feedback to improve model quality and safety.",
      },
      {
        title: "Dubbing adaptation with lip-sync",
        summary:
          "Adapting timecoded scripts and adjusting Arabic syllable counts to match on-screen lip movements, while carrying the original meaning and emotion.",
      },
    ],
  },
  serviceDetail: {
    eyebrow: "Specialization",
    technical: {
      title: "Technical translation into Arabic",
      description:
        "Engineering and industrial documentation translated by someone who understands the subject, not just the words.",
      crumb: "Technical",
      s1Title: "Subject-matter understanding, not just language",
      s1p1: "A degree in environmental engineering means technical source texts are read the way the author intended — the concepts, units and standards behind the terminology are familiar, so the Arabic reads correctly to specialists in the field.",
      s1p2: "Consistency is enforced with SDL Trados Studio: project glossaries and termbases keep key terms uniform, and translation memories keep long or frequently updated documents aligned from one version to the next.",
      s2Title: "What I translate",
      s2List: [
        "Engineering manuals, user guides and operating procedures",
        "Technical specifications and datasheets",
        "Environmental and engineering reports",
        "Safety, standards and compliance documentation",
        "Product and equipment documentation",
      ],
      s3Title: "Related technical services",
      s3Intro: "Technical projects often pair translation with:",
      s3List: [
        "Machine translation post-editing (MTPE) — bringing machine output up to human quality while keeping turnaround efficient.",
        "Digital product testing — checking localized interfaces in context for layout, truncation and usability issues.",
        "AI data annotation & evaluation (RLHF) — assessing and improving AI-generated Arabic output.",
      ],
      ctaTitle: "Have technical documentation to translate?",
      ctaDescription: "Share the language pair, subject area and deadline for a clear quote.",
    },
    legal: {
      title: "Legal translation into Arabic",
      description:
        "Contracts and legal documentation translated with precision and handled with the confidentiality the material demands.",
      crumb: "Legal",
      s1Title: "Precision and confidentiality",
      s1p1: "Legal texts leave no room for ambiguity: terminology, structure and meaning must carry across accurately. Each project uses SDL Trados termbases so defined terms stay consistent throughout a document and across related documents.",
      s1p2: "Legal material is sensitive by nature. Files are handled under strict confidentiality, transferred securely, and I am ready to sign a non-disclosure agreement before any file is opened.",
      s2Title: "What I translate",
      s2List: [
        "Contracts and agreements",
        "Terms and conditions, policies and compliance documents",
        "Corporate and regulatory documentation",
        "Correspondence and supporting legal materials",
      ],
      ctaTitle: "Need legal documents translated in confidence?",
      ctaDescription: "Tell me the scope and deadline — an NDA can be in place before you share anything.",
    },
    financial: {
      title: "Financial translation into Arabic",
      description:
        "Financial documents translated with the accuracy, discretion and terminology consistency the numbers require.",
      crumb: "Financial",
      s1Title: "Accuracy where figures and wording both matter",
      s1p1: "Financial documents combine exact figures with carefully chosen language. Terminology is kept consistent with SDL Trados termbases and translation memories, so recurring terms and standard phrasing stay uniform across reporting periods and document sets.",
      s1p2: "Financial material is treated as confidential: secure transfers, careful handling and readiness to sign an NDA before any file is opened.",
      s2Title: "What I translate",
      s2List: [
        "Financial reports and statements",
        "Investor and corporate communications",
        "Audit and compliance documentation",
        "Presentations and financial marketing materials",
      ],
      ctaTitle: "Have financial documents to translate?",
      ctaDescription: "Share the scope, language pair and deadline for a clear quote.",
    },
    healthcare: {
      title: "Healthcare translation into Arabic",
      description:
        "Medical and healthcare documentation translated with accuracy, clarity and the right register for its readers.",
      crumb: "Healthcare",
      s1Title: "Clarity and correctness for sensitive content",
      s1p1: "Healthcare content carries real consequences, so accuracy and clarity come first. Terms are kept consistent with SDL Trados termbases, and the register is matched to the audience — whether the readers are clinicians or patients.",
      s1p2: "Every project follows a full Translation–Editing–Proofreading workflow, and files are handled under strict confidentiality.",
      s2Title: "What I translate",
      s2List: [
        "Medical and clinical documentation",
        "Patient-facing information and instructions",
        "Healthcare product and device documentation",
        "Regulatory and compliance materials",
      ],
      ctaTitle: "Need healthcare content translated into Arabic?",
      ctaDescription: "Tell me the document type, language pair and deadline for a clear quote.",
    },
    audiovisual: {
      title: "Audiovisual translation & dubbing into Arabic",
      description:
        "Subtitling, transcreation and dubbing adaptation — with the lip-sync precision streaming and broadcast work demands.",
      crumb: "Audiovisual",
      s1Title: "Dialogue that sounds native — and lands on the lips",
      s1p1: "Audiovisual work is about more than words on a page: the Arabic has to fit the picture, the timing and the performance. That means transcreating idioms so they feel native to Arab audiences while preserving the drama and intent of the original.",
      stepsTitle: "The dubbing & lip-sync adaptation process",
      workflowSteps: [
        {
          title: "Script & timecode review",
          description:
            "Study the script, timing and tone.",
        },
        {
          title: "Translation & transcreation",
          description:
            "Translate the meaning and adapt idioms naturally.",
        },
        {
          title: "Syllable & lip-sync matching",
          description:
            "Match Arabic syllables to lip movements.",
        },
        {
          title: "Review against picture",
          description:
            "Check the dialogue against the footage.",
        },
        {
          title: "Studio-ready delivery",
          description:
            "Deliver a script ready for recording.",
        },
      ],
      offerTitle: "What I offer",
      offerList: [
        "Subtitling and timecoded script translation",
        "Dubbing adaptation with lip-sync alignment",
        "Transcreation of culturally specific dialogue",
      ],
      ctaTitle: "Localizing a series or film into Arabic?",
      ctaDescription: "Tell me the source language, format and deadline for a clear quote.",
    },
  },
  form: {
    successTitle: "Thank you — your request has been received.",
    successText:
      "I'll get back to you shortly. Please don't send any confidential files until we've agreed terms.",
    company: "Company",
    name: "Name",
    email: "Email",
    languagePair: "Language pair",
    choose: "Choose…",
    specialization: "Specialization",
    notSure: "Not sure / other",
    volume: "Word count or runtime",
    volumePlaceholder: "e.g. 5,000 words or 20 minutes",
    deadline: "Deadline",
    deadlinePlaceholder: "e.g. 15 October, or flexible",
    service: "Service needed",
    selectService: "Select a service…",
    details: "Project details",
    detailsPlaceholder: "Tell me about your project…",
    nda: "I'd like an NDA signed before I share files.",
    sending: "Sending…",
    send: "Send request",
    pairs: ["English → Arabic", "French → Arabic", "Spanish → Arabic"],
  },
  cookie: {
    text: "This website uses privacy-friendly analytics to understand how the site is used. See the",
    privacy: "privacy policy",
    decline: "Decline",
    accept: "Accept",
  },
  notFound: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist or may have moved.",
    goHome: "Go to home",
    browse: "Browse services",
  },
  blog: {
    title: "Blog",
    description: "Notes on translation workflow, localization and terminology.",
    crumb: "Blog",
    all: "All",
    filterAria: "Filter by category",
    emptyCategory: "No posts in this category yet.",
    emptyNone: "No posts published yet — check back soon.",
    minRead: "min read",
  },
  seo: {
    home: { title: "", description: "", ogImage: "" },
    about: { title: "", description: "", ogImage: "" },
    specializations: { title: "", description: "", ogImage: "" },
    services: { title: "", description: "", ogImage: "" },
    process: { title: "", description: "", ogImage: "" },
    contact: { title: "", description: "", ogImage: "" },
    confidentiality: { title: "", description: "", ogImage: "" },
    blog: { title: "", description: "", ogImage: "" },
    technical: { title: "", description: "", ogImage: "" },
    legal: { title: "", description: "", ogImage: "" },
    financial: { title: "", description: "", ogImage: "" },
    healthcare: { title: "", description: "", ogImage: "" },
    audiovisual: { title: "", description: "", ogImage: "" },
  },
};

export default en;

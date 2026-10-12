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
    availabilityEyebrow: "Availability",
    availabilityTitle: "Currently accepting new projects",
    availability: {
      days: "Daily — Monday to Sunday",
      palestine: "Palestine",
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
      "English, French and Spanish into Arabic — across five specializations, backed by a defined process and the right tools.",
    crumb: "Services",
    specializationsTitle: "Specializations",
    specializationsIntro:
      "Each specialization has its own page explaining what is covered and how the work is handled.",
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
    steps: [
      {
        title: "Preparation & terminology",
        description:
          "Analyze the source, confirm or build a project glossary and termbase, and set up the project in SDL Trados with the relevant translation memory.",
      },
      {
        title: "Translation",
        description:
          "Translate with terminology control and translation-memory leverage, keeping meaning, tone and consistency intact.",
      },
      {
        title: "Editing",
        description:
          "Compare the translation against the source for accuracy, completeness and consistency, refining terminology and style.",
      },
      {
        title: "Proofreading",
        description:
          "Read the Arabic on its own for language, flow, formatting and typography — catching anything a bilingual pass can miss.",
      },
      {
        title: "QA checks & delivery",
        description:
          "Run automated QA checks (terminology, numbers, tags and consistency), resolve any flags, then deliver in the required format.",
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
};

export default en;

import type { Dictionary } from "../index";

/**
 * Arabic UI strings (interface chrome only).
 *
 * These cover navigation/buttons/footer so the right-to-left layout can be
 * demonstrated and is ready to enable. Translating full page *content* into
 * Arabic is intentionally out of scope for launch (structure only).
 */
const ar: Dictionary = {
  nav: {
    home: "الرئيسية",
    about: "نبذة",
    services: "الخدمات",
    specializations: "التخصصات",
    howItWorks: "كيف نعمل؟",
    process: "سير العمل والجودة",
    confidentiality: "السرية",
    blog: "المدونة",
    contact: "تواصل",
  },
  actions: {
    requestQuote: "لنتحدث",
    openMenu: "افتح القائمة",
    closeMenu: "أغلق القائمة",
    skipToContent: "تخطَّ إلى المحتوى الرئيسي",
    home: "الرئيسية",
  },
  footer: {
    tagline: "خدمات احترافية في الترجمة والتسويق الرقمي.",
    servicesHeading: "الخدمات",
    companyHeading: "الشركة",
    legalHeading: "قانوني",
    contactHeading: "تواصل",
    terms: "الشروط والأحكام",
    privacy: "سياسة الخصوصية",
    rightsReserved: "جميع الحقوق محفوظة.",
    alconost: "معتمد من Alconost",
    arta: "معتمد من جمعية المترجمين العرب (ArTA)",
    about: "نبذة",
    howItWorks: "كيف نعمل؟",
    forBusinesses: "للشركات",
    forAgencies: "للوكالات",
    arabicMarkets: "الأسواق العربية",
    wordCounter: "عدّاد الكلمات المجاني",
    form: {
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "رسالتك",
      send: "إرسال",
      sending: "جارٍ الإرسال…",
      success: "شكرًا لك! تم إرسال رسالتك، وسأرد عليك قريبًا.",
      invalid: "يرجى إدخال اسمك وبريد إلكتروني صحيح ورسالة.",
      failed: "عذرًا، تعذّر إرسال الرسالة. حاول مرة أخرى أو راسلني مباشرة عبر البريد الإلكتروني.",
    },
    serviceLinks: {
      technical: "التقنية",
      legal: "القانونية",
      financial: "المالية",
      healthcare: "الرعاية الصحية",
      audiovisual: "السمعية البصرية",
    },
  },
  /** Labels for the Services menu (header dropdown and footer). */
  serviceMenu: {
    translation: "الترجمة",
    editing: "التحرير والتدقيق",
    mtpe: "MTPE",
    transcreation: "الترجمة الإبداعية",
    saasLocalization: "توطين البرمجيات (SaaS)",
    consulting: "الاستشارات",
    digitalMarketing: "التسويق الرقمي",
  },
  breadcrumbs: {
    home: "الرئيسية",
    label: "مسار التنقل",
  },
};

export default ar;

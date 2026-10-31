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
    about: "نبذة",
    howItWorks: "كيف نعمل؟",
    forBusinesses: "للشركات",
    forAgencies: "للوكالات",
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
    mtpe: "التحرير اللاحق للترجمة الآلية",
    transcreation: "الترجمة الإبداعية",
    consulting: "الاستشارات",
    digitalMarketing: "التسويق الرقمي",
  },
  breadcrumbs: {
    home: "الرئيسية",
    label: "مسار التنقل",
  },
};

export default ar;

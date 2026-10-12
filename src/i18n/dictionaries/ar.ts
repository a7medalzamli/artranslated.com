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
    about: "نبذة",
    services: "الخدمات",
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
    tagline: "ترجمة وتوطين المواقع الإلكترونية إلى الإنجليزية والعربية.",
    servicesHeading: "الخدمات",
    companyHeading: "الشركة",
    legalHeading: "قانوني",
    contactHeading: "تواصل",
    terms: "الشروط والأحكام",
    privacy: "سياسة الخصوصية",
    rightsReserved: "جميع الحقوق محفوظة.",
    about: "نبذة",
    howItWorks: "كيف نعمل؟",
  },
  breadcrumbs: {
    home: "الرئيسية",
    label: "مسار التنقل",
  },
};

export default ar;

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
    services: "الخدمات",
    process: "سير العمل والجودة",
    confidentiality: "السرية",
    blog: "المدونة",
    contact: "تواصل",
  },
  actions: {
    requestQuote: "اطلب عرض سعر",
    openMenu: "افتح القائمة",
    closeMenu: "أغلق القائمة",
    skipToContent: "تخطَّ إلى المحتوى الرئيسي",
    home: "الرئيسية",
  },
  footer: {
    tagline: "ترجمة من الإنجليزية والفرنسية والإسبانية إلى العربية.",
    servicesHeading: "الخدمات",
    companyHeading: "نبذة",
    legalHeading: "قانوني",
    terms: "الشروط والأحكام",
    privacy: "سياسة الخصوصية",
    rightsReserved: "جميع الحقوق محفوظة.",
  },
  breadcrumbs: {
    home: "الرئيسية",
    label: "مسار التنقل",
  },
};

export default ar;

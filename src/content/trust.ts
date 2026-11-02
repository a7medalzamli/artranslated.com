import type { Locale } from "@/i18n";

/**
 * Credibility signals (E-E-A-T): the author box under blog articles and the
 * "Why work with me" strip on service pages. Every fact here is verified with
 * Ahmed; don't add claims (clients, figures, certifications) without his OK.
 */
export const PROZ_PROFILE = "https://www.proz.com/profile/2522215";
export const LINKEDIN = "https://www.linkedin.com/in/ahmed-alzamly";

type Trust = {
  author: {
    label: string;
    role: string;
    bio: string;
    about: string;
    proz: string;
    linkedin: string;
  };
  strip: {
    title: string;
    items: { title: string; text: string; href?: string }[];
  };
};

const content: Record<Locale, Trust> = {
  en: {
    author: {
      label: "About the author",
      role: "Arabic translator and localization specialist, founder of Translated into Arabic (TIA)",
      bio: "Ahmed has translated professionally since 2014, from English, French and Spanish into Arabic and from Arabic into English, for translation agencies and companies worldwide. He is a ProZ.com Certified PRO, accredited by the Arab Translators Association (ArTA), holds an Alconost certificate, an engineering degree from the Islamic University of Gaza, and diplomas in translation and digital marketing.",
      about: "Full profile",
      proz: "Client reviews on ProZ.com",
      linkedin: "LinkedIn",
    },
    strip: {
      title: "Why work with me",
      items: [
        { title: "Since 2014", text: "Over a decade of professional translation for agencies and companies." },
        { title: "ProZ.com Certified PRO", text: "Vetted professional, with five-star client reviews.", href: PROZ_PROFILE },
        { title: "Alconost & ArTA", text: "Certified by Alconost and accredited by the Arab Translators Association (ArTA)." },
        { title: "Engineering + language", text: "Engineering degree and diplomas in translation and digital marketing." },
        { title: "Confidential", text: "NDA on request, secure file handling." },
      ],
    },
  },
  ar: {
    author: {
      label: "عن الكاتب",
      role: "مترجم عربي ومختص في التوطين (Localization)، ومؤسس Translated into Arabic (TIA)",
      bio: "يعمل أحمد في الترجمة باحتراف منذ عام 2014، من الإنجليزية والفرنسية والإسبانية إلى العربية ومن العربية إلى الإنجليزية، لوكالات الترجمة (LSPs) والشركات حول العالم. يحمل اعتماد ProZ.com Certified PRO واعتماد جمعية المترجمين العرب (ArTA) وشهادة من Alconost، وشهادة في الهندسة من الجامعة الإسلامية بغزة، ودبلومين في الترجمة والتسويق الرقمي.",
      about: "الملف الكامل",
      proz: "تقييمات العملاء على ProZ.com",
      linkedin: "LinkedIn",
    },
    strip: {
      title: "لماذا تعمل معي",
      items: [
        { title: "منذ عام 2014", text: "أكثر من عشر سنوات من الترجمة الاحترافية للوكالات والشركات." },
        { title: "ProZ.com Certified PRO", text: "مترجم محترف معتمد، بتقييمات عملاء من خمس نجوم.", href: PROZ_PROFILE },
        { title: "Alconost وArTA", text: "شهادة من Alconost واعتماد من جمعية المترجمين العرب (ArTA)." },
        { title: "الهندسة واللغة", text: "شهادة في الهندسة ودبلومان في الترجمة والتسويق الرقمي." },
        { title: "سرية تامة", text: "اتفاقية عدم إفصاح (NDA) عند الطلب، وتعامل آمن مع الملفات." },
      ],
    },
  },
  fr: {
    author: {
      label: "À propos de l’auteur",
      role: "Traducteur arabe et spécialiste de la localisation, fondateur de Translated into Arabic (TIA)",
      bio: "Ahmed traduit professionnellement depuis 2014, de l’anglais, du français et de l’espagnol vers l’arabe, et de l’arabe vers l’anglais, pour des agences de traduction et des entreprises du monde entier. Certifié PRO sur ProZ.com et accrédité par l’Association des traducteurs arabes (ArTA), il est titulaire d’un certificat Alconost, d’un diplôme d’ingénieur de l’Université islamique de Gaza et de diplômes en traduction et en marketing digital.",
      about: "Profil complet",
      proz: "Avis clients sur ProZ.com",
      linkedin: "LinkedIn",
    },
    strip: {
      title: "Pourquoi travailler avec moi",
      items: [
        { title: "Depuis 2014", text: "Plus de dix ans de traduction professionnelle pour agences et entreprises." },
        { title: "Certifié PRO ProZ.com", text: "Professionnel vérifié, avec des avis clients cinq étoiles.", href: PROZ_PROFILE },
        { title: "Alconost et ArTA", text: "Certifié par Alconost et accrédité par l’Association des traducteurs arabes (ArTA)." },
        { title: "Ingénierie et langues", text: "Diplôme d’ingénieur et diplômes en traduction et marketing digital." },
        { title: "Confidentialité", text: "Accord de confidentialité sur demande, fichiers traités en sécurité." },
      ],
    },
  },
  es: {
    author: {
      label: "Sobre el autor",
      role: "Traductor de árabe y especialista en localización, fundador de Translated into Arabic (TIA)",
      bio: "Ahmed traduce profesionalmente desde 2014, del inglés, el francés y el español al árabe, y del árabe al inglés, para agencias de traducción y empresas de todo el mundo. Es Certified PRO de ProZ.com, está acreditado por la Asociación de Traductores Árabes (ArTA), tiene un certificado de Alconost, una titulación en ingeniería por la Universidad Islámica de Gaza y diplomas en traducción y marketing digital.",
      about: "Perfil completo",
      proz: "Opiniones de clientes en ProZ.com",
      linkedin: "LinkedIn",
    },
    strip: {
      title: "Por qué trabajar conmigo",
      items: [
        { title: "Desde 2014", text: "Más de una década de traducción profesional para agencias y empresas." },
        { title: "Certified PRO de ProZ.com", text: "Profesional verificado, con opiniones de clientes de cinco estrellas.", href: PROZ_PROFILE },
        { title: "Alconost y ArTA", text: "Certificado por Alconost y acreditado por la Asociación de Traductores Árabes (ArTA)." },
        { title: "Ingeniería e idiomas", text: "Titulación en ingeniería y diplomas en traducción y marketing digital." },
        { title: "Confidencialidad", text: "Acuerdo de confidencialidad si lo necesitas y archivos tratados con seguridad." },
      ],
    },
  },
};

export function getTrust(locale: string): Trust {
  return content[locale as Locale] ?? content.en;
}

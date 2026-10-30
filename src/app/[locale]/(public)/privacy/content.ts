import type { Locale } from "@/i18n";
import type { LegalContent } from "../LegalDocument";

const en: LegalContent = {
  title: "Privacy Policy",
  crumb: "Privacy Policy",
  description:
    "How Translated into Arabic (TIA) collects, uses and protects your personal data when you use its translation and localization services or visit artranslated.com.",
  introBefore:
    "This Privacy Policy explains how Translated into Arabic (TIA) collects, uses, and protects your personal data when you use my translation and localization services or visit ",
  introAfter:
    ". I am committed to ensuring that your privacy is protected and that your data is handled securely and in accordance with standard data protection principles.",
  sections: [
    {
      heading: "1. Who I Am",
      paragraphs: [
        "This website and the services provided are operated by Ahmed Alzamli, doing business as Translated into Arabic, based in Palestine.",
      ],
    },
    {
      heading: "2. What Personal Data I Collect",
      paragraphs: [
        "In the course of providing professional translation, localization, and digital marketing services, I may collect the following information:",
      ],
      items: [
        {
          lead: "Identity and Contact Data:",
          text: "Your name, job title, company name, email address (e.g., when you request a quote or contact me).",
        },
        {
          lead: "Project Data:",
          text: "The source texts, files, glossaries, and translation memories you provide for me to work on.",
        },
        {
          lead: "Technical Data:",
          text: "Basic website usage data (such as pages visited, approximate location, device and browser type) collected through Google Analytics and Vercel Analytics. These tools, and the cookies Google Analytics sets, are used only if you accept them in the cookie banner. Google processes this data under its own privacy policy (policies.google.com/privacy).",
        },
      ],
    },
    {
      heading: "3. How I Use Your Data",
      paragraphs: [
        "Your personal data is used solely for normal business operations, which include:",
      ],
      items: [
        "Providing accurate quotes and processing your orders.",
        "Performing the requested translation, editing, and localization services.",
        "Communicating with you regarding project updates, clarifications, and feedback.",
        "Managing administrative tasks such as invoicing and payment processing.",
      ],
    },
    {
      heading: "4. Data Security and Confidentiality",
      paragraphs: [
        "I take the security of your data and intellectual property seriously. All translation work is subject to strict confidentiality. Source files, translation memories, and client termbases are stored on secure, password-protected systems. I do not sell, rent, or trade your personal information or proprietary documents to third parties.",
      ],
    },
    {
      heading: "5. Third-Party Sharing",
      paragraphs: [
        "I will only share your data with third parties when it is strictly necessary to deliver the requested services. This includes:",
      ],
      items: [
        "Trusted linguistic partners or vendors working under a strict Non-Disclosure Agreement (NDA).",
        "Secure platform providers used for business operations (such as secure email hosting, invoicing software, or cloud storage).",
      ],
    },
    {
      heading: "6. Data Retention",
      paragraphs: [
        "I keep your personal data only for as long as necessary to fulfill the purposes for which it was collected. This includes maintaining translation memories and glossaries for your future projects to ensure brand consistency, or keeping a record of past projects for quality assurance and reference.",
      ],
    },
    {
      heading: "7. Your Privacy Rights",
      paragraphs: [
        "You have full control over the personal data you share with me. You have the right to:",
      ],
      items: [
        "Request access to the personal data I hold about you.",
        "Request that I correct any inaccurate or incomplete information.",
        "Request the deletion or removal of your personal data from my active systems.",
        "Object to the processing of your data for specific purposes.",
      ],
    },
  ],
  contactHeading: "8. Contact",
  contactText:
    "If you have any questions about this Privacy Policy, wish to exercise your data rights, or want to discuss the confidentiality of a specific project, please contact me at:",
  emailLabel: "Email:",
};

const ar: LegalContent = {
  title: "سياسة الخصوصية",
  crumb: "سياسة الخصوصية",
  description:
    "كيف يجمع Translated into Arabic (TIA) بياناتك الشخصية ويستخدمها ويحميها عند استخدامك لخدمات الترجمة والتوطين أو زيارتك لموقع artranslated.com.",
  introBefore:
    "توضّح سياسة الخصوصية هذه كيفية جمع Translated into Arabic (TIA) لبياناتك الشخصية واستخدامها وحمايتها عند استخدامك لخدمات الترجمة والتوطين التي أقدّمها أو عند زيارتك لموقع ",
  introAfter:
    ". وأنا ملتزم بضمان حماية خصوصيتك والتعامل مع بياناتك بأمان ووفقًا للمبادئ المعتمدة لحماية البيانات.",
  sections: [
    {
      heading: "1. من أنا",
      paragraphs: [
        "يتولّى أحمد الزاملي تشغيل هذا الموقع وتقديم الخدمات المعروضة فيه، ويعمل تحت الاسم التجاري Translated into Arabic، ومقرّه فلسطين.",
      ],
    },
    {
      heading: "2. البيانات الشخصية التي أجمعها",
      paragraphs: [
        "في سياق تقديم خدمات الترجمة والتوطين والتسويق الرقمي الاحترافية، قد أجمع المعلومات التالية:",
      ],
      items: [
        {
          lead: "بيانات الهوية والتواصل:",
          text: "اسمك، ومسمّاك الوظيفي، واسم شركتك، وبريدك الإلكتروني (مثلًا عند طلبك عرض سعر أو تواصلك معي).",
        },
        {
          lead: "بيانات المشاريع:",
          text: "النصوص المصدرية والملفات ومسارد المصطلحات وذاكرات الترجمة التي تزوّدني بها للعمل عليها.",
        },
        {
          lead: "البيانات التقنية:",
          text: "بيانات أساسية عن استخدام الموقع (مثل الصفحات التي تمت زيارتها، والموقع التقريبي، ونوع الجهاز والمتصفح) تُجمع عبر Google Analytics وVercel Analytics. ولا تُستخدم هذه الأدوات، ولا ملفات تعريف الارتباط التي يضعها Google Analytics، إلا إذا وافقت عليها في شريط ملفات تعريف الارتباط. وتعالج Google هذه البيانات وفق سياسة الخصوصية الخاصة بها (policies.google.com/privacy).",
        },
      ],
    },
    {
      heading: "3. كيف أستخدم بياناتك",
      paragraphs: ["تُستخدم بياناتك الشخصية حصرًا لأغراض العمل المعتادة، ومنها:"],
      items: [
        "تقديم عروض أسعار دقيقة ومعالجة طلباتك.",
        "تنفيذ خدمات الترجمة والتحرير والتوطين المطلوبة.",
        "التواصل معك بشأن مستجدات المشروع والاستيضاحات والملاحظات.",
        "إدارة المهام الإدارية مثل إصدار الفواتير ومعالجة المدفوعات.",
      ],
    },
    {
      heading: "4. أمن البيانات وسرّيتها",
      paragraphs: [
        "أولي أمن بياناتك وملكيتك الفكرية أهمية بالغة. وتخضع جميع أعمال الترجمة لسرّية تامة. وتُحفظ الملفات المصدرية وذاكرات الترجمة وقواعد مصطلحات العملاء على أنظمة آمنة محمية بكلمات مرور. ولا أبيع معلوماتك الشخصية أو مستنداتك الخاصة ولا أؤجّرها ولا أتبادلها مع أي طرف ثالث.",
      ],
    },
    {
      heading: "5. مشاركة البيانات مع أطراف ثالثة",
      paragraphs: [
        "لا أشارك بياناتك مع أطراف ثالثة إلا عند الضرورة القصوى لتقديم الخدمات المطلوبة، ويشمل ذلك:",
      ],
      items: [
        "شركاء لغويين أو مورّدين موثوقين يعملون بموجب اتفاقية عدم إفصاح (NDA) صارمة.",
        "مزوّدي منصات آمنة تُستخدم في تسيير العمل (مثل استضافة البريد الإلكتروني الآمنة، أو برامج الفوترة، أو التخزين السحابي).",
      ],
    },
    {
      heading: "6. الاحتفاظ بالبيانات",
      paragraphs: [
        "أحتفظ ببياناتك الشخصية فقط للمدة اللازمة لتحقيق الأغراض التي جُمعت من أجلها. ويشمل ذلك الاحتفاظ بذاكرات الترجمة ومسارد المصطلحات لمشاريعك المستقبلية بما يضمن اتساق هويتك التجارية، أو الاحتفاظ بسجل للمشاريع السابقة لأغراض ضمان الجودة والرجوع إليها.",
      ],
    },
    {
      heading: "7. حقوقك المتعلقة بالخصوصية",
      paragraphs: ["لك السيطرة الكاملة على البيانات الشخصية التي تشاركها معي، ويحق لك:"],
      items: [
        "طلب الاطلاع على البيانات الشخصية التي أحتفظ بها عنك.",
        "طلب تصحيح أي معلومات غير دقيقة أو غير مكتملة.",
        "طلب حذف بياناتك الشخصية أو إزالتها من أنظمتي النشطة.",
        "الاعتراض على معالجة بياناتك لأغراض محددة.",
      ],
    },
  ],
  contactHeading: "8. التواصل",
  contactText:
    "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، أو رغبت في ممارسة حقوقك المتعلقة ببياناتك، أو أردت مناقشة سرّية مشروع معيّن، فيُرجى التواصل معي عبر:",
  emailLabel: "البريد الإلكتروني:",
};

const fr: LegalContent = {
  title: "Politique de confidentialité",
  crumb: "Politique de confidentialité",
  description:
    "Comment Translated into Arabic (TIA) collecte, utilise et protège vos données personnelles lorsque vous faites appel à ses services de traduction et de localisation ou visitez artranslated.com.",
  introBefore:
    "La présente politique de confidentialité explique comment Translated into Arabic (TIA) collecte, utilise et protège vos données personnelles lorsque vous faites appel à mes services de traduction et de localisation ou que vous visitez ",
  introAfter:
    ". Je m’engage à garantir la protection de votre vie privée et à traiter vos données de manière sécurisée, conformément aux principes usuels de protection des données.",
  sections: [
    {
      heading: "1. Qui suis-je",
      paragraphs: [
        "Ce site web et les services proposés sont exploités par Ahmed Alzamli, sous le nom commercial Translated into Arabic, établi en Palestine.",
      ],
    },
    {
      heading: "2. Données personnelles collectées",
      paragraphs: [
        "Dans le cadre de la prestation de services professionnels de traduction, de localisation et de marketing digital, je peux être amené à collecter les informations suivantes :",
      ],
      items: [
        {
          lead: "Données d’identité et de contact :",
          text: "vos nom, fonction, nom de votre entreprise et adresse e-mail (par exemple, lorsque vous demandez un devis ou me contactez).",
        },
        {
          lead: "Données de projet :",
          text: "les textes sources, fichiers, glossaires et mémoires de traduction que vous me confiez.",
        },
        {
          lead: "Données techniques :",
          text: "des données de base sur l’utilisation du site (pages consultées, localisation approximative, type d’appareil et de navigateur) collectées au moyen de Google Analytics et de Vercel Analytics. Ces outils, ainsi que les cookies déposés par Google Analytics, ne sont utilisés que si vous les acceptez dans le bandeau cookies. Google traite ces données conformément à sa propre politique de confidentialité (policies.google.com/privacy).",
        },
      ],
    },
    {
      heading: "3. Utilisation de vos données",
      paragraphs: [
        "Vos données personnelles sont utilisées exclusivement dans le cadre normal de mon activité, notamment pour :",
      ],
      items: [
        "établir des devis précis et traiter vos commandes ;",
        "réaliser les prestations de traduction, de révision et de localisation demandées ;",
        "communiquer avec vous au sujet de l’avancement des projets, des points à clarifier et de vos retours ;",
        "gérer les tâches administratives telles que la facturation et le traitement des paiements.",
      ],
    },
    {
      heading: "4. Sécurité et confidentialité des données",
      paragraphs: [
        "J’accorde une grande importance à la sécurité de vos données et de votre propriété intellectuelle. Tous les travaux de traduction sont soumis à une stricte confidentialité. Les fichiers sources, les mémoires de traduction et les bases terminologiques des clients sont conservés sur des systèmes sécurisés et protégés par mot de passe. Je ne vends, ne loue ni n’échange vos informations personnelles ou vos documents confidentiels avec des tiers.",
      ],
    },
    {
      heading: "5. Partage avec des tiers",
      paragraphs: [
        "Je ne partage vos données avec des tiers que lorsque cela est strictement nécessaire à la réalisation des services demandés, notamment avec :",
      ],
      items: [
        "des partenaires linguistiques ou prestataires de confiance liés par un accord de confidentialité (NDA) strict ;",
        "des fournisseurs de plateformes sécurisées utilisées pour mon activité (comme un hébergement de messagerie sécurisé, un logiciel de facturation ou un stockage dans le cloud).",
      ],
    },
    {
      heading: "6. Conservation des données",
      paragraphs: [
        "Je conserve vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées. Cela inclut la conservation des mémoires de traduction et des glossaires pour vos futurs projets afin d’assurer la cohérence de votre marque, ou la tenue d’un historique des projets passés à des fins d’assurance qualité et de référence.",
      ],
    },
    {
      heading: "7. Vos droits en matière de confidentialité",
      paragraphs: [
        "Vous gardez le plein contrôle des données personnelles que vous me communiquez. Vous avez le droit de :",
      ],
      items: [
        "demander l’accès aux données personnelles que je détiens à votre sujet ;",
        "demander la rectification de toute information inexacte ou incomplète ;",
        "demander la suppression de vos données personnelles de mes systèmes actifs ;",
        "vous opposer au traitement de vos données à des fins spécifiques.",
      ],
    },
  ],
  contactHeading: "8. Contact",
  contactText:
    "Pour toute question concernant la présente politique de confidentialité, pour exercer vos droits ou pour discuter de la confidentialité d’un projet particulier, veuillez me contacter à l’adresse suivante :",
  emailLabel: "E-mail :",
};

const es: LegalContent = {
  title: "Política de privacidad",
  crumb: "Política de privacidad",
  description:
    "Cómo Translated into Arabic (TIA) recopila, utiliza y protege sus datos personales cuando utiliza sus servicios de traducción y localización o visita artranslated.com.",
  introBefore:
    "Esta Política de privacidad explica cómo Translated into Arabic (TIA) recopila, utiliza y protege sus datos personales cuando utiliza mis servicios de traducción y localización o visita ",
  introAfter:
    ". Me comprometo a garantizar la protección de su privacidad y a tratar sus datos de forma segura y conforme a los principios habituales de protección de datos.",
  sections: [
    {
      heading: "1. Quién soy",
      paragraphs: [
        "Este sitio web y los servicios ofrecidos están gestionados por Ahmed Alzamli, que opera con el nombre comercial Translated into Arabic, con sede en Palestina.",
      ],
    },
    {
      heading: "2. Qué datos personales recopilo",
      paragraphs: [
        "En el marco de la prestación de servicios profesionales de traducción, localización y marketing digital, puedo recopilar la siguiente información:",
      ],
      items: [
        {
          lead: "Datos de identidad y contacto:",
          text: "su nombre, cargo, nombre de la empresa y dirección de correo electrónico (por ejemplo, cuando solicita un presupuesto o se pone en contacto conmigo).",
        },
        {
          lead: "Datos del proyecto:",
          text: "los textos de origen, archivos, glosarios y memorias de traducción que me facilita para trabajar.",
        },
        {
          lead: "Datos técnicos:",
          text: "datos básicos de uso del sitio web (como las páginas visitadas, la ubicación aproximada y el tipo de dispositivo y navegador) recopilados mediante Google Analytics y Vercel Analytics. Estas herramientas, y las cookies que instala Google Analytics, solo se utilizan si las acepta en el aviso de cookies. Google trata estos datos conforme a su propia política de privacidad (policies.google.com/privacy).",
        },
      ],
    },
    {
      heading: "3. Cómo utilizo sus datos",
      paragraphs: [
        "Sus datos personales se utilizan exclusivamente para las operaciones habituales del negocio, que incluyen:",
      ],
      items: [
        "Elaborar presupuestos precisos y tramitar sus pedidos.",
        "Prestar los servicios de traducción, edición y localización solicitados.",
        "Comunicarme con usted sobre el avance de los proyectos, aclaraciones y comentarios.",
        "Gestionar tareas administrativas como la facturación y el procesamiento de pagos.",
      ],
    },
    {
      heading: "4. Seguridad y confidencialidad de los datos",
      paragraphs: [
        "Me tomo muy en serio la seguridad de sus datos y de su propiedad intelectual. Todo el trabajo de traducción está sujeto a una estricta confidencialidad. Los archivos de origen, las memorias de traducción y las bases terminológicas de los clientes se almacenan en sistemas seguros y protegidos con contraseña. No vendo, alquilo ni intercambio su información personal ni sus documentos confidenciales con terceros.",
      ],
    },
    {
      heading: "5. Cesión de datos a terceros",
      paragraphs: [
        "Solo compartiré sus datos con terceros cuando sea estrictamente necesario para prestar los servicios solicitados. Esto incluye:",
      ],
      items: [
        "Socios lingüísticos o proveedores de confianza que trabajan bajo un estricto acuerdo de confidencialidad (NDA).",
        "Proveedores de plataformas seguras utilizadas para la actividad del negocio (como alojamiento de correo electrónico seguro, software de facturación o almacenamiento en la nube).",
      ],
    },
    {
      heading: "6. Conservación de los datos",
      paragraphs: [
        "Conservo sus datos personales solo durante el tiempo necesario para cumplir los fines para los que se recopilaron. Esto incluye mantener memorias de traducción y glosarios para sus proyectos futuros a fin de garantizar la coherencia de su marca, o conservar un registro de proyectos anteriores con fines de control de calidad y consulta.",
      ],
    },
    {
      heading: "7. Sus derechos de privacidad",
      paragraphs: [
        "Usted tiene pleno control sobre los datos personales que comparte conmigo. Tiene derecho a:",
      ],
      items: [
        "Solicitar el acceso a los datos personales que tengo sobre usted.",
        "Solicitar la corrección de cualquier información inexacta o incompleta.",
        "Solicitar la supresión o eliminación de sus datos personales de mis sistemas activos.",
        "Oponerse al tratamiento de sus datos para fines específicos.",
      ],
    },
  ],
  contactHeading: "8. Contacto",
  contactText:
    "Si tiene alguna pregunta sobre esta Política de privacidad, desea ejercer sus derechos sobre sus datos o quiere tratar la confidencialidad de un proyecto concreto, póngase en contacto conmigo en:",
  emailLabel: "Correo electrónico:",
};

export const privacyContent: Record<Locale, LegalContent> = { en, ar, fr, es };

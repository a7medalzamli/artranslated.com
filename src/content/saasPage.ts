import type { Locale } from "@/i18n";
import type { FaqItem } from "./faqs";

/** SaaS Localization page (a specialization with its own page), in four languages. */
export type SaasPage = {
  title: string;
  crumb: string;
  seoTitle: string;
  description: string;
  intro: [string, string];
  listTitle: string;
  list: string[];
  blocks: { title: string; text: string }[];
  raas: { title: string; intro: string; items: { title: string; text: string }[] };
  faqTitle: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaDescription: string;
};

const en: SaasPage = {
  title: "SaaS Localization into Arabic",
  crumb: "SaaS Localization",
  seoTitle: "Arabic SaaS Localization",
  description:
    "Localizing SaaS platforms, apps and help centers into Arabic, so Arabic-speaking users get a product that feels built for them.",
  intro: [
    "Arabic is spoken by more than 400 million people, and users across the Gulf, the Levant and North Africa expect software in their own language. Localizing a SaaS product means more than translating strings: the interface has to work from right to left, terminology has to stay consistent across the product, help center and marketing site, and the tone has to match your brand.",
    "I combine translation, localization and digital marketing experience, so your Arabic product, documentation and go-to-market content are handled by one specialist who understands both the language and how SaaS products grow.",
  ],
  listTitle: "What I localize",
  list: [
    "Interface text, onboarding flows and in-app messages",
    "Dashboards, settings, notifications and email templates",
    "Help centers, knowledge bases and release notes",
    "Terms of service, privacy policies and in-app legal text",
    "Marketing websites, landing pages and app store listings",
    "Product videos, demos and onboarding tutorials",
  ],
  blocks: [
    {
      title: "Who it’s for",
      text: "SaaS companies, start-ups and scale-ups launching in Arabic-speaking markets, and localization agencies that need a dedicated Arabic linguist for software accounts, from the first launch to continuous releases.",
    },
    {
      title: "How it works",
      text: "I work in your localization platform or in the files your developers export, such as JSON or XLIFF, build a glossary of product terms, and translate with your character limits in mind. Strings are then reviewed in context, in screenshots or a test environment, to catch right-to-left layout, truncation and plural-form issues before release.",
    },
    {
      title: "What you receive",
      text: "A localized Arabic product ready to ship, a product glossary and style guide, a list of any layout or internationalization issues found during review, and quick turnaround on new strings with each release, so Arabic stays in step with your other languages.",
    },
  ],
  raas: {
    title: "Localization as a result, not a tool",
    intro: "SaaS gives you software to run. Results as a Service (RaaS) gives you the finished outcome. That’s how I approach SaaS localization: we agree on the result you need, and I deliver it ready to ship.",
    items: [
      { title: "A launch-ready Arabic product", text: "Interface, help center and key marketing pages translated, reviewed in context and ready to release, with any layout or right-to-left issues already reported." },
      { title: "Arabic in every release", text: "New and changed strings localized with each sprint or release, so Arabic never falls behind your other languages." },
      { title: "Quality you can measure", text: "An LQA score and short report on request, so you can see the quality of your Arabic instead of taking it on trust." },
    ],
  },
  faqTitle: "Frequently asked questions",
  faqs: [
    {
      q: "Do you work inside our localization platform?",
      a: "Yes. I can translate directly in the localization or translation management platform your team uses, or in the files your developers export, so strings flow back into your product without extra work.",
    },
    {
      q: "Can you keep up with continuous releases?",
      a: "Yes. For products that ship updates every week or sprint, new and changed strings are translated in small batches as they arrive, using your translation memory and glossary so terminology stays consistent from one release to the next.",
    },
    {
      q: "Should our app use Modern Standard Arabic or a dialect?",
      a: "Most SaaS products use Modern Standard Arabic for the interface and documentation, because it is understood in every Arabic-speaking market. A lighter, more conversational tone, or a regional dialect, can work for marketing and social media aimed at one country. I’ll recommend what fits your audience.",
    },
    {
      q: "What is Results as a Service (RaaS), and how does it apply to localization?",
      a: "Instead of paying for tools or hours and managing the work yourself, you agree on a clear outcome, such as an Arabic release ready to ship, and I take care of everything needed to deliver it: translation, review, in-context checks and quality reporting. Every project has a clear scope and quote before work starts.",
    },
  ],
  ctaTitle: "Launching your SaaS product in Arabic?",
  ctaDescription: "Tell me about your product, platform and release schedule for a clear quote.",
};

const ar: SaasPage = {
  title: "توطين البرمجيات كخدمة (SaaS) إلى العربية",
  crumb: "توطين SaaS",
  seoTitle: "توطين البرمجيات كخدمة (SaaS) إلى العربية",
  description:
    "توطين منصات البرمجيات كخدمة (SaaS) والتطبيقات ومراكز المساعدة إلى العربية، ليحصل المستخدمون الناطقون بالعربية على منتج يبدو كأنه صُمّم لهم.",
  intro: [
    "يتحدث العربية أكثر من 400 مليون شخص، ويتوقع المستخدمون في الخليج والشام وشمال أفريقيا برمجيات بلغتهم. وتوطين منتج SaaS أكثر من مجرد ترجمة نصوص: يجب أن تعمل الواجهة من اليمين إلى اليسار، وأن تبقى المصطلحات متّسقة بين المنتج ومركز المساعدة والموقع التسويقي، وأن تناسب النبرة هوية علامتك.",
    "أجمع بين خبرة الترجمة والتوطين والتسويق الرقمي، ليتولّى منتجك العربي ووثائقه ومحتوى إطلاقه في السوق مختصٌّ واحد يفهم اللغة ويفهم كيف تنمو منتجات SaaS.",
  ],
  listTitle: "ما الذي أوطّنه",
  list: [
    "نصوص الواجهة وخطوات البدء والرسائل داخل التطبيق",
    "لوحات التحكم والإعدادات والإشعارات وقوالب البريد الإلكتروني",
    "مراكز المساعدة وقواعد المعرفة وملاحظات الإصدار",
    "شروط الخدمة وسياسات الخصوصية والنصوص القانونية داخل التطبيق",
    "المواقع التسويقية وصفحات الهبوط وصفحات المتاجر الإلكترونية للتطبيقات",
    "مقاطع فيديو المنتجات والعروض التوضيحية ودروس البدء",
  ],
  blocks: [
    {
      title: "لمن هذه الخدمة",
      text: "شركات البرمجيات كخدمة (SaaS) والشركات الناشئة والنامية التي تطلق منتجاتها في الأسواق الناطقة بالعربية، ووكالات التوطين التي تحتاج إلى لغوي مختص بالعربية لحسابات البرمجيات، من الإطلاق الأول حتى الإصدارات المتتالية.",
    },
    {
      title: "كيف يسير العمل",
      text: "أعمل على منصة التوطين التي تستخدمها أو على الملفات التي يصدّرها مطوّروك، مثل JSON أو XLIFF، وأبني مسردًا لمصطلحات المنتج، وأترجم مع مراعاة حدود عدد الأحرف. ثم تُراجَع النصوص في سياقها، عبر لقطات الشاشة أو بيئة تجريبية، لاكتشاف مشكلات التصميم من اليمين إلى اليسار (RTL) واقتطاع النصوص وصيغ الجمع قبل الإصدار.",
    },
    {
      title: "ما الذي تحصل عليه",
      text: "منتج عربي مُوطَّن جاهز للإطلاق، ومسرد مصطلحات للمنتج ودليل أسلوب، وقائمة بأي مشكلات في التصميم أو التدويل (i18n) تُكتشف أثناء المراجعة، وتسليم سريع للنصوص الجديدة مع كل إصدار، لتبقى العربية مواكبة للغاتك الأخرى.",
    },
  ],
  raas: {
    title: "التوطين نتيجةً لا أداة",
    intro: "تمنحك البرمجيات كخدمة (SaaS) برنامجًا عليك تشغيله، أما النتائج كخدمة (RaaS) فتمنحك النتيجة النهائية. وهكذا أتعامل مع توطين منتجات SaaS: نتفق على النتيجة التي تحتاجها، وأسلّمها جاهزة للإطلاق.",
    items: [
      { title: "منتج عربي جاهز للإطلاق", text: "واجهة ومركز مساعدة وصفحات تسويقية أساسية مترجمة ومراجَعة في سياقها وجاهزة للإصدار، مع الإبلاغ مسبقًا عن أي مشكلات في التخطيط أو الاتجاه من اليمين إلى اليسار (RTL)." },
      { title: "العربية في كل إصدار", text: "توطين النصوص الجديدة والمعدّلة مع كل دورة تطوير أو إصدار، لكي لا تتأخر العربية عن لغاتك الأخرى." },
      { title: "جودة يمكن قياسها", text: "درجة تقييم جودة (LQA) وتقرير موجز عند الطلب، لترى جودة نصك العربي بدل أن تعتمد على الثقة وحدها." },
    ],
  },
  faqTitle: "الأسئلة الشائعة",
  faqs: [
    {
      q: "هل تعمل داخل منصة التوطين التي نستخدمها؟",
      a: "نعم. يمكنني الترجمة مباشرة على منصة التوطين أو إدارة الترجمة التي يستخدمها فريقك، أو على الملفات التي يصدّرها مطوّروك، لتعود النصوص إلى منتجك دون عمل إضافي.",
    },
    {
      q: "هل يمكنك مواكبة الإصدارات المتتالية؟",
      a: "نعم. في المنتجات التي تصدر تحديثاتها كل أسبوع أو كل دورة تطوير، تُترجم النصوص الجديدة والمعدّلة على دفعات صغيرة فور وصولها، باستخدام ذاكرة الترجمة (TM) والمسرد الخاصين بك، لتبقى المصطلحات متّسقة من إصدار إلى آخر.",
    },
    {
      q: "هل يستخدم تطبيقنا العربية الفصحى المعاصرة أم لهجة محلية؟",
      a: "تستخدم معظم منتجات SaaS العربية الفصحى المعاصرة في الواجهة والوثائق، لأنها مفهومة في كل الأسواق الناطقة بالعربية. أما النبرة الأخف والأقرب إلى الحديث، أو اللهجة المحلية، فقد تناسب التسويق ووسائل التواصل الاجتماعي الموجّهة إلى بلد واحد. وسأوصيك بما يناسب جمهورك.",
    },
    {
      q: "ما المقصود بالنتائج كخدمة (RaaS)، وكيف ينطبق ذلك على التوطين؟",
      a: "بدل أن تدفع مقابل الأدوات أو الساعات وتدير العمل بنفسك، نتفق على نتيجة واضحة، كإصدار عربي جاهز للإطلاق، وأتولّى كل ما يلزم لتحقيقها: الترجمة والمراجعة والفحص في السياق وتقارير الجودة. ولكل مشروع نطاق واضح وعرض سعر قبل بدء العمل.",
    },
  ],
  ctaTitle: "هل تطلق منتج SaaS بالعربية؟",
  ctaDescription: "أخبرني عن منتجك ومنصتك وجدول إصداراتك للحصول على عرض سعر واضح.",
};

const fr: SaasPage = {
  title: "Localisation de SaaS vers l’arabe",
  crumb: "Localisation de SaaS",
  seoTitle: "Localisation de SaaS vers l’arabe",
  description:
    "Localisation de plateformes SaaS, d’applications et de centres d’aide vers l’arabe, pour offrir aux utilisateurs arabophones un produit qui semble conçu pour eux.",
  intro: [
    "L’arabe est parlé par plus de 400 millions de personnes, et les utilisateurs du Golfe, du Levant et d’Afrique du Nord attendent des logiciels dans leur langue. Localiser un produit SaaS ne se limite pas à traduire des chaînes : l’interface doit fonctionner de droite à gauche, la terminologie doit rester cohérente entre le produit, le centre d’aide et le site marketing, et le ton doit refléter votre marque.",
    "J’associe une expérience en traduction, en localisation et en marketing digital : votre produit arabe, sa documentation et vos contenus de lancement sont pris en charge par un seul spécialiste qui comprend à la fois la langue et la croissance des produits SaaS.",
  ],
  listTitle: "Ce que je localise",
  list: [
    "Textes d’interface, parcours d’accueil et messages dans l’application",
    "Tableaux de bord, paramètres, notifications et modèles d’e-mails",
    "Centres d’aide, bases de connaissances et notes de version",
    "Conditions d’utilisation, politiques de confidentialité et mentions juridiques",
    "Sites marketing, pages d’atterrissage et fiches sur les stores",
    "Vidéos produit, démonstrations et tutoriels de prise en main",
  ],
  blocks: [
    {
      title: "Pour qui",
      text: "Les éditeurs SaaS, start-up et scale-up qui se lancent sur les marchés arabophones, ainsi que les agences de localisation qui ont besoin d’un linguiste arabe dédié pour leurs comptes logiciels, du premier lancement aux mises à jour continues.",
    },
    {
      title: "Comment ça se passe",
      text: "Je travaille dans votre plateforme de localisation ou sur les fichiers exportés par vos développeurs, comme JSON ou XLIFF, je constitue un glossaire des termes du produit et je traduis en tenant compte de vos limites de caractères. Les chaînes sont ensuite vérifiées en contexte, sur captures d’écran ou dans un environnement de test, pour repérer avant la mise en production les problèmes de mise en page de droite à gauche, de troncature et de pluriels.",
    },
    {
      title: "Ce que vous recevez",
      text: "Un produit localisé en arabe prêt à être publié, un glossaire produit et un guide de style, la liste des éventuels problèmes de mise en page ou d’internationalisation relevés pendant la vérification, et une livraison rapide des nouvelles chaînes à chaque version, pour que l’arabe suive le rythme de vos autres langues.",
    },
  ],
  raas: {
    title: "La localisation comme un résultat, pas un outil",
    intro: "Le SaaS vous donne un logiciel à faire tourner. Le Results as a Service (RaaS) vous livre le résultat final. C’est ainsi que j’aborde la localisation SaaS : nous définissons ensemble le résultat attendu, et je le livre prêt à être déployé.",
    items: [
      { title: "Un produit arabe prêt au lancement", text: "Interface, centre d’aide et pages marketing clés traduits, vérifiés en contexte et prêts à être publiés, avec les éventuels problèmes de mise en page ou d’écriture de droite à gauche déjà signalés." },
      { title: "L’arabe à chaque version", text: "Les chaînes nouvelles ou modifiées localisées à chaque sprint ou version, pour que l’arabe ne prenne jamais de retard sur vos autres langues." },
      { title: "Une qualité mesurable", text: "Une note LQA et un court rapport sur demande, pour constater la qualité de votre arabe au lieu de la supposer." },
    ],
  },
  faqTitle: "Questions fréquentes",
  faqs: [
    {
      q: "Travaillez-vous directement dans notre plateforme de localisation ?",
      a: "Oui. Je peux traduire directement dans la plateforme de localisation ou de gestion de traduction utilisée par votre équipe, ou sur les fichiers exportés par vos développeurs, pour que les chaînes reviennent dans votre produit sans travail supplémentaire.",
    },
    {
      q: "Pouvez-vous suivre un rythme de mises à jour continu ?",
      a: "Oui. Pour les produits mis à jour chaque semaine ou à chaque sprint, les chaînes nouvelles ou modifiées sont traduites par petits lots dès leur arrivée, avec votre mémoire de traduction et votre glossaire, pour une terminologie cohérente d’une version à l’autre.",
    },
    {
      q: "Notre application doit-elle utiliser l’arabe standard moderne ou un dialecte ?",
      a: "La plupart des produits SaaS utilisent l’arabe standard moderne pour l’interface et la documentation, car il est compris sur tous les marchés arabophones. Un ton plus léger et conversationnel, voire un dialecte régional, peut convenir au marketing et aux réseaux sociaux ciblant un seul pays. Je vous recommanderai ce qui correspond à votre public.",
    },
    {
      q: "Qu’est-ce que le Results as a Service (RaaS), et comment s’applique-t-il à la localisation ?",
      a: "Au lieu de payer des outils ou des heures et de gérer le travail vous-même, nous convenons d’un résultat clair, par exemple une version arabe prête à déployer, et je prends en charge tout ce qu’il faut pour le livrer : traduction, révision, vérifications en contexte et rapports qualité. Chaque projet a un périmètre et un devis clairs avant de commencer.",
    },
  ],
  ctaTitle: "Vous lancez votre produit SaaS en arabe ?",
  ctaDescription: "Parlez-moi de votre produit, de votre plateforme et de votre rythme de versions pour obtenir un devis clair.",
};

const es: SaasPage = {
  title: "Localización de SaaS al árabe",
  crumb: "Localización de SaaS",
  seoTitle: "Localización de SaaS al árabe",
  description:
    "Localización de plataformas SaaS, aplicaciones y centros de ayuda al árabe, para que los usuarios de habla árabe tengan un producto que parezca hecho para ellos.",
  intro: [
    "El árabe lo hablan más de 400 millones de personas, y los usuarios del Golfo, el Levante y el norte de África esperan software en su idioma. Localizar un producto SaaS es más que traducir cadenas: la interfaz tiene que funcionar de derecha a izquierda, la terminología debe ser coherente entre el producto, el centro de ayuda y el sitio de marketing, y el tono debe encajar con tu marca.",
    "Combino experiencia en traducción, localización y marketing digital, así que tu producto en árabe, su documentación y el contenido de lanzamiento están en manos de un solo especialista que entiende tanto el idioma como el crecimiento de los productos SaaS.",
  ],
  listTitle: "Qué localizo",
  list: [
    "Textos de interfaz, procesos de bienvenida y mensajes dentro de la aplicación",
    "Paneles, ajustes, notificaciones y plantillas de correo",
    "Centros de ayuda, bases de conocimiento y notas de versión",
    "Términos del servicio, políticas de privacidad y textos legales",
    "Sitios de marketing, páginas de aterrizaje y fichas en tiendas de aplicaciones",
    "Vídeos de producto, demostraciones y tutoriales de inicio",
  ],
  blocks: [
    {
      title: "Para quién es",
      text: "Empresas SaaS, startups y scale-ups que se lanzan en mercados de habla árabe, y agencias de localización que necesitan un lingüista de árabe dedicado para sus cuentas de software, desde el primer lanzamiento hasta las versiones continuas.",
    },
    {
      title: "Cómo funciona",
      text: "Trabajo en tu plataforma de localización o en los archivos que exportan tus desarrolladores, como JSON o XLIFF, creo un glosario de términos del producto y traduzco teniendo en cuenta tus límites de caracteres. Después, las cadenas se revisan en contexto, en capturas de pantalla o en un entorno de pruebas, para detectar problemas de diseño de derecha a izquierda, textos cortados y formas del plural antes del lanzamiento.",
    },
    {
      title: "Qué recibes",
      text: "Un producto localizado al árabe listo para publicar, un glosario del producto y una guía de estilo, una lista de los problemas de diseño o internacionalización detectados en la revisión y entregas rápidas de las cadenas nuevas en cada versión, para que el árabe avance al mismo ritmo que tus otros idiomas.",
    },
  ],
  raas: {
    title: "La localización como resultado, no como herramienta",
    intro: "El SaaS te da un software que tienes que manejar. Results as a Service (RaaS) te entrega el resultado final. Así enfoco la localización de SaaS: acordamos el resultado que necesitas y lo entrego listo para lanzar.",
    items: [
      { title: "Un producto en árabe listo para lanzar", text: "Interfaz, centro de ayuda y páginas de marketing clave traducidos, revisados en contexto y listos para publicar, con cualquier problema de diseño o de escritura de derecha a izquierda ya señalado." },
      { title: "Árabe en cada versión", text: "Las cadenas nuevas o modificadas se localizan en cada sprint o versión, para que el árabe nunca se quede atrás respecto a tus otros idiomas." },
      { title: "Calidad que puedes medir", text: "Una puntuación LQA y un breve informe si lo pides, para que veas la calidad de tu árabe en lugar de darla por supuesta." },
    ],
  },
  faqTitle: "Preguntas frecuentes",
  faqs: [
    {
      q: "¿Trabajas dentro de nuestra plataforma de localización?",
      a: "Sí. Puedo traducir directamente en la plataforma de localización o de gestión de traducciones que use tu equipo, o en los archivos que exportan tus desarrolladores, para que las cadenas vuelvan a tu producto sin trabajo adicional.",
    },
    {
      q: "¿Puedes seguir el ritmo de lanzamientos continuos?",
      a: "Sí. En productos que publican actualizaciones cada semana o cada sprint, las cadenas nuevas y modificadas se traducen en pequeños lotes a medida que llegan, con tu memoria de traducción y tu glosario, para que la terminología sea coherente de una versión a otra.",
    },
    {
      q: "¿Nuestra aplicación debe usar árabe estándar moderno o un dialecto?",
      a: "La mayoría de los productos SaaS usan árabe estándar moderno en la interfaz y la documentación, porque se entiende en todos los mercados de habla árabe. Un tono más ligero y conversacional, o un dialecto regional, puede funcionar en marketing y redes sociales dirigidos a un solo país. Te recomendaré lo que mejor encaje con tu público.",
    },
    {
      q: "¿Qué es Results as a Service (RaaS) y cómo se aplica a la localización?",
      a: "En lugar de pagar por herramientas u horas y gestionar el trabajo tú mismo, acordamos un resultado claro, como una versión en árabe lista para lanzar, y me encargo de todo lo necesario para entregarlo: traducción, revisión, comprobaciones en contexto e informes de calidad. Cada proyecto tiene un alcance y un presupuesto claros antes de empezar.",
    },
  ],
  ctaTitle: "¿Vas a lanzar tu producto SaaS en árabe?",
  ctaDescription: "Cuéntame sobre tu producto, tu plataforma y tu calendario de versiones para recibir un presupuesto claro.",
};

const all: Record<Locale, SaasPage> = { en, ar, fr, es };

export function getSaasPage(locale: string): SaasPage {
  return all[locale as Locale] ?? en;
}

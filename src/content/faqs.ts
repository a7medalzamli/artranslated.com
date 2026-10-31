import type { Locale } from "@/i18n";

/**
 * Frequently asked questions, in all four languages. "home" appears on the
 * homepage, "translation" on the Translation service page. Each answer may end
 * with one link. Published as FAQPage structured data as well.
 */
export type FaqItem = {
  q: string;
  a: string;
  /** Optional link after the answer; internal paths start with "/". */
  link?: { label: string; href: string };
};

type FaqSet = { title: string; home: FaqItem[]; translation: FaqItem[] };

const PROZ = "https://www.proz.com/profile/2522215";

const en: FaqSet = {
  title: "Frequently asked questions",
  home: [
    {
      q: "Which languages do you translate between?",
      a: "I translate from English, French and Spanish into Arabic, my native language, so the result reads as if it had been written in Arabic for your audience.",
    },
    {
      q: "Do you work with translation agencies or direct clients?",
      a: "Both. Translation agencies work with me as a dedicated Arabic linguist on one-off and ongoing projects, following their style guides, CAT tools and deadlines. Direct clients get a ready-to-use Arabic translation and one person to deal with, from the quote to final delivery.",
    },
    {
      q: "Will you sign a non-disclosure agreement (NDA)?",
      a: "Yes. I’m happy to sign your NDA, or provide one, before you share any files. Documents are handled confidentially and transferred securely.",
      link: { label: "How your files are protected", href: "/confidentiality" },
    },
    {
      q: "Where can I see reviews from your clients?",
      a: "Feedback from clients I have worked with is published on my ProZ.com profile, the largest professional network for translators.",
      link: { label: "Read client reviews on ProZ.com", href: PROZ },
    },
  ],
  translation: [
    {
      q: "Do you translate websites and software, not just documents?",
      a: "Yes. Besides documents, I translate websites, web and mobile apps, software interfaces, help centers and marketing content. I can work in the files your team exports, such as XLIFF, HTML or spreadsheets, and check the Arabic in context for right-to-left layout.",
    },
    {
      q: "Can you handle large or ongoing projects?",
      a: "Yes. Large and recurring projects run through an organized workflow: the work is planned in stages with agreed delivery dates, and translation memories and glossaries keep terminology consistent across files, batches and updates. On ongoing accounts, each new job builds on the previous ones, so quality stays consistent from one delivery to the next.",
    },
    {
      q: "Is editing and proofreading included?",
      a: "Yes. For direct clients, every project goes through translation, editing and proofreading (TEP) followed by quality checks, so you receive a document that is ready to publish or use, not a draft. Agencies that run their own review step can order translation only.",
    },
  ],
};

const ar: FaqSet = {
  title: "الأسئلة الشائعة",
  home: [
    {
      q: "ما اللغات التي تترجم منها وإليها؟",
      a: "أترجم من الإنجليزية والفرنسية والإسبانية إلى العربية، لغتي الأم، ليُقرأ النص كأنه كُتب بالعربية أصلًا لجمهورك.",
    },
    {
      q: "هل تعمل مع وكالات الترجمة أم مع العملاء المباشرين؟",
      a: "مع الطرفين. تتعاون معي وكالات الترجمة بصفتي لغويًا مختصًا بالعربية في مشاريع فردية ومستمرة، مع الالتزام بأدلة الأسلوب وأدوات الترجمة والمواعيد الخاصة بها. أما العملاء المباشرون فيحصلون على ترجمة عربية جاهزة للاستخدام وشخص واحد يتعاملون معه من عرض السعر حتى التسليم النهائي.",
    },
    {
      q: "هل توقّع اتفاقية عدم إفصاح (NDA)؟",
      a: "نعم. يسعدني توقيع اتفاقيتك أو تقديم اتفاقية خاصة بي قبل أن تشارك أي ملفات. وتُعامَل المستندات بسرية تامة وتُنقل بطرق آمنة.",
      link: { label: "كيف تُحمى ملفاتك", href: "/confidentiality" },
    },
    {
      q: "أين يمكنني الاطلاع على تقييمات عملائك؟",
      a: "آراء العملاء الذين عملت معهم منشورة في ملفي على ProZ.com، أكبر شبكة مهنية للمترجمين.",
      link: { label: "اقرأ تقييمات العملاء على ProZ.com", href: PROZ },
    },
  ],
  translation: [
    {
      q: "هل تترجم المواقع الإلكترونية والبرمجيات، لا المستندات فقط؟",
      a: "نعم. إلى جانب المستندات، أترجم المواقع الإلكترونية وتطبيقات الويب والهاتف وواجهات البرمجيات ومراكز المساعدة والمحتوى التسويقي. ويمكنني العمل على الملفات التي يصدّرها فريقك، مثل XLIFF وHTML وجداول البيانات، ومراجعة النص العربي في سياقه للتأكد من سلامة الاتجاه من اليمين إلى اليسار.",
    },
    {
      q: "هل يمكنك التعامل مع المشاريع الكبيرة أو المستمرة؟",
      a: "نعم. تسير المشاريع الكبيرة والمتكررة وفق منهجية عمل منظّمة: يُقسَّم العمل إلى مراحل بمواعيد تسليم متفق عليها، وتحافظ ذاكرات الترجمة ومسارد المصطلحات على اتساق المصطلحات عبر الملفات والدفعات والتحديثات. وفي المشاريع المستمرة، يُبنى كل عمل جديد على ما سبقه، فتبقى الجودة ثابتة من تسليم إلى آخر.",
    },
    {
      q: "هل يشمل العمل التحرير والتدقيق؟",
      a: "نعم. بالنسبة للعملاء المباشرين، يمرّ كل مشروع بمراحل الترجمة والتحرير والتدقيق (TEP) ثم فحوص الجودة، لتستلم مستندًا جاهزًا للنشر أو الاستخدام لا مسودة. ويمكن للوكالات التي تتولى المراجعة بنفسها طلب الترجمة فقط.",
    },
  ],
};

const fr: FaqSet = {
  title: "Questions fréquentes",
  home: [
    {
      q: "Dans quelles langues traduisez-vous ?",
      a: "Je traduis de l’anglais, du français et de l’espagnol vers l’arabe, ma langue maternelle, pour un texte qui se lit comme s’il avait été écrit directement en arabe pour votre public.",
    },
    {
      q: "Travaillez-vous avec des agences de traduction ou des clients directs ?",
      a: "Les deux. Les agences de traduction font appel à moi comme linguiste arabe dédié pour des projets ponctuels ou réguliers, en respectant leurs guides de style, leurs outils TAO et leurs délais. Les clients directs reçoivent une traduction arabe prête à l’emploi et ont un seul interlocuteur, du devis à la livraison finale.",
    },
    {
      q: "Signez-vous un accord de confidentialité (NDA) ?",
      a: "Oui. Je signe volontiers votre accord de confidentialité, ou je vous en propose un, avant que vous ne partagiez le moindre fichier. Les documents sont traités en toute confidentialité et transférés de manière sécurisée.",
      link: { label: "Comment vos fichiers sont protégés", href: "/confidentiality" },
    },
    {
      q: "Où puis-je consulter les avis de vos clients ?",
      a: "Les avis des clients avec qui j’ai travaillé sont publiés sur mon profil ProZ.com, le plus grand réseau professionnel de traducteurs.",
      link: { label: "Lire les avis clients sur ProZ.com", href: PROZ },
    },
  ],
  translation: [
    {
      q: "Traduisez-vous aussi des sites web et des logiciels, pas seulement des documents ?",
      a: "Oui. En plus des documents, je traduis des sites web, des applications web et mobiles, des interfaces logicielles, des centres d’aide et des contenus marketing. Je peux travailler directement sur les fichiers exportés par votre équipe, comme XLIFF, HTML ou des tableurs, et vérifier l’arabe en contexte pour la mise en page de droite à gauche.",
    },
    {
      q: "Pouvez-vous gérer des projets volumineux ou réguliers ?",
      a: "Oui. Les projets volumineux et récurrents suivent un flux de travail organisé : le travail est planifié par étapes avec des dates de livraison convenues, et les mémoires de traduction et glossaires assurent une terminologie cohérente d’un fichier, d’un lot et d’une mise à jour à l’autre. Sur les comptes réguliers, chaque nouveau travail s’appuie sur les précédents, pour une qualité constante d’une livraison à l’autre.",
    },
    {
      q: "La révision et la relecture sont-elles incluses ?",
      a: "Oui. Pour les clients directs, chaque projet passe par la traduction, la révision et la relecture (TEP), suivies de contrôles qualité : vous recevez un document prêt à être publié ou utilisé, pas un brouillon. Les agences qui assurent leur propre relecture peuvent commander la traduction seule.",
    },
  ],
};

const es: FaqSet = {
  title: "Preguntas frecuentes",
  home: [
    {
      q: "¿Entre qué idiomas traduces?",
      a: "Traduzco del inglés, el francés y el español al árabe, mi lengua materna, para que el texto se lea como si se hubiera escrito directamente en árabe para tu público.",
    },
    {
      q: "¿Trabajas con agencias de traducción o con clientes directos?",
      a: "Con ambos. Las agencias de traducción trabajan conmigo como lingüista de árabe dedicado en proyectos puntuales y recurrentes, siguiendo sus guías de estilo, herramientas TAO y plazos. Los clientes directos reciben una traducción al árabe lista para usar y tratan con una sola persona, desde el presupuesto hasta la entrega final.",
    },
    {
      q: "¿Firmas un acuerdo de confidencialidad (NDA)?",
      a: "Sí. Firmo con gusto tu acuerdo de confidencialidad, o te facilito uno, antes de que compartas cualquier archivo. Los documentos se tratan de forma confidencial y se transfieren de manera segura.",
      link: { label: "Cómo se protegen tus archivos", href: "/confidentiality" },
    },
    {
      q: "¿Dónde puedo ver opiniones de tus clientes?",
      a: "Las opiniones de los clientes con los que he trabajado están publicadas en mi perfil de ProZ.com, la mayor red profesional de traductores.",
      link: { label: "Leer opiniones de clientes en ProZ.com", href: PROZ },
    },
  ],
  translation: [
    {
      q: "¿Traduces sitios web y software, no solo documentos?",
      a: "Sí. Además de documentos, traduzco sitios web, aplicaciones web y móviles, interfaces de software, centros de ayuda y contenido de marketing. Puedo trabajar en los archivos que exporta tu equipo, como XLIFF, HTML u hojas de cálculo, y revisar el árabe en contexto para la lectura de derecha a izquierda.",
    },
    {
      q: "¿Puedes encargarte de proyectos grandes o continuos?",
      a: "Sí. Los proyectos grandes y recurrentes siguen un flujo de trabajo organizado: el trabajo se planifica por etapas con fechas de entrega acordadas, y las memorias de traducción y los glosarios mantienen la terminología coherente entre archivos, lotes y actualizaciones. En las cuentas continuas, cada nuevo encargo se apoya en los anteriores, de modo que la calidad se mantiene de una entrega a otra.",
    },
    {
      q: "¿Incluye edición y revisión?",
      a: "Sí. Para los clientes directos, cada proyecto pasa por traducción, edición y revisión (TEP), seguidas de controles de calidad, así que recibes un documento listo para publicar o usar, no un borrador. Las agencias que hacen su propia revisión pueden pedir solo la traducción.",
    },
  ],
};

const all: Record<Locale, FaqSet> = { en, ar, fr, es };

export function getFaqs(locale: string): FaqSet {
  return all[locale as Locale] ?? en;
}

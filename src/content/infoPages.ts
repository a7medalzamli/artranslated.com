import type { Locale } from "@/i18n";
import type { FaqItem } from "./faqs";

/**
 * "For agencies" and "Rates & turnaround" pages, in four languages.
 * Facts given by Ahmed: up to 4,000 words of translation a day; translation
 * USD 0.04–0.06 per word; no sworn or certified translation. A free test
 * translation is offered only when asked, so it is deliberately not mentioned.
 */
export type InfoTable = {
  title: string;
  head: [string, string];
  rows: [string, string][];
  note?: string;
};

export type InfoPage = {
  title: string;
  crumb: string;
  seoTitle: string;
  description: string;
  intro: [string, string];
  listTitle: string;
  list: string[];
  tables?: InfoTable[];
  blocks?: { title: string; text: string }[];
  /** Show the availability hours widget (agency page). */
  showAvailability?: boolean;
  availabilityTitle?: string;
  faqTitle: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaDescription: string;
};

/* ------------------------------------------------------------------ */
/* For agencies                                                        */
/* ------------------------------------------------------------------ */

const agencies: Record<Locale, InfoPage> = {
  en: {
    title: "Arabic Translator for Translation Agencies",
    crumb: "For agencies",
    seoTitle: "Freelance Arabic Translator for Agencies (LSPs)",
    description:
      "A dependable English, French and Spanish to Arabic linguist for translation agencies: translation, review, LQA and MTPE in your CAT tools, with up to 4,000 words of translation a day.",
    intro: [
      "Most of my work since 2014 has been with translation agencies (LSPs). I know how vendor work runs: purchase orders, CAT tools, translation memories, glossaries, style guides, query sheets, QA checks and firm deadlines, and I fit into your workflow without extra management from your project managers.",
      "I translate from English, French and Spanish into Arabic, my native language, review other translators’ work, score quality with LQA and post-edit machine translation, so one Arabic linguist can cover your whole workflow from translation to final check.",
    ],
    listTitle: "What I offer agencies",
    list: [
      "Translation from English, French and Spanish into Arabic, up to 4,000 words a day",
      "Bilingual review and proofreading of other translators’ work",
      "LQA scoring with MQM or your own scorecard, with reports",
      "Machine translation post-editing (light and full)",
      "Work in SDL Trados, memoQ and Wordfast, or in the online platform you assign",
      "QA checks with Xbench before every delivery",
      "NDAs signed and confidential files handled with care",
    ],
    blocks: [
      {
        title: "Capacity and scheduling",
        text: "I translate up to 4,000 words a day. Larger projects are scheduled with your project manager in advance and can be delivered in parts, so your downstream review and DTP steps can start early.",
      },
      {
        title: "How I work with your PMs",
        text: "I confirm the deadline and scope when I accept a job, follow your glossary, style guide and instructions, raise source questions early in your query sheet, run QA before delivery, and take reviewer feedback on board for the next job.",
      },
      {
        title: "Rates",
        text: "Translation is charged per source word, from USD 0.04 to 0.06 depending on subject, volume and deadline. Review, LQA and post-editing are quoted per project or per hour. Send me your rate sheet or project details and I’ll confirm.",
      },
    ],
    showAvailability: true,
    availabilityTitle: "Working hours",
    faqTitle: "Questions from agencies",
    faqs: [
      {
        q: "Which language pairs do you cover?",
        a: "English to Arabic, French to Arabic and Spanish to Arabic. Arabic is my native language.",
      },
      {
        q: "How many words can you translate per day?",
        a: "Up to 4,000 words of translation a day. For larger volumes, we agree a schedule in advance, with partial deliveries if needed.",
      },
      {
        q: "Which CAT tools do you use?",
        a: "SDL Trados, memoQ and Wordfast, with Xbench for QA. I can also work in the online CAT or localization platform your team assigns.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes. I’m happy to sign your NDA and vendor agreement before receiving any files.",
      },
      {
        q: "Do you provide sworn or certified translation?",
        a: "No. I don’t provide sworn or certified translations with an official stamp. I focus on commercial, technical, legal, financial, healthcare, marketing and software content.",
      },
      {
        q: "How do we add you to our vendor database?",
        a: "Send me your onboarding link or vendor form through the contact form or by email, and I’ll complete it and return any documents you need.",
      },
    ],
    ctaTitle: "Need a reliable Arabic linguist for your projects?",
    ctaDescription: "Send me your project details, onboarding form or rate request, and I’ll reply promptly.",
  },
  ar: {
    title: "مترجم عربي لوكالات الترجمة",
    crumb: "للوكالات",
    seoTitle: "مترجم عربي مستقل لوكالات الترجمة",
    description:
      "مترجم موثوق من الإنجليزية والفرنسية والإسبانية إلى العربية لوكالات الترجمة: ترجمة ومراجعة وتقييم جودة (LQA) وتحرير لاحق للترجمة الآلية في أدوات الترجمة التي تستخدمها، بطاقة تصل إلى 4,000 كلمة يوميًا.",
    intro: [
      "معظم عملي منذ عام 2014 كان مع وكالات الترجمة. أعرف كيف يسير العمل مع المترجمين المستقلين: أوامر الشراء، وأدوات الترجمة بمساعدة الحاسوب، وذاكرات الترجمة، والمسارد، وأدلة الأسلوب، وجداول الاستفسارات، وفحوص الجودة، والمواعيد النهائية الصارمة، وأندمج في سير عملكم دون أن يحتاج مديرو المشاريع إلى متابعة إضافية.",
      "أترجم من الإنجليزية والفرنسية والإسبانية إلى العربية، لغتي الأم، وأراجع أعمال مترجمين آخرين، وأقيّم الجودة (LQA)، وأحرّر مخرجات الترجمة الآلية، ليغطي مترجم عربي واحد سير عملكم كله من الترجمة حتى الفحص النهائي.",
    ],
    listTitle: "ما أقدّمه للوكالات",
    list: [
      "الترجمة من الإنجليزية والفرنسية والإسبانية إلى العربية، حتى 4,000 كلمة يوميًا",
      "مراجعة ثنائية اللغة وتدقيق لأعمال مترجمين آخرين",
      "تقييم الجودة (LQA) وفق إطار MQM أو بطاقة التقييم الخاصة بكم، مع تقارير",
      "التحرير اللاحق للترجمة الآلية (الخفيف والكامل)",
      "العمل على SDL Trados وmemoQ وWordfast، أو على المنصة الإلكترونية التي تحددونها",
      "فحوص الجودة بأداة Xbench قبل كل تسليم",
      "توقيع اتفاقيات عدم الإفصاح والتعامل بعناية مع الملفات السرية",
    ],
    blocks: [
      {
        title: "الطاقة الإنتاجية والجدولة",
        text: "أترجم حتى 4,000 كلمة يوميًا. وتُجدوَل المشاريع الأكبر مسبقًا مع مدير المشروع، ويمكن تسليمها على دفعات ليبدأ فريق المراجعة والتنسيق لديكم مبكرًا.",
      },
      {
        title: "كيف أعمل مع مديري المشاريع",
        text: "أؤكد الموعد النهائي ونطاق العمل عند قبول المهمة، وألتزم بالمسرد ودليل الأسلوب والتعليمات، وأطرح استفسارات النص المصدر مبكرًا في جدول الاستفسارات، وأُجري فحص الجودة قبل التسليم، وآخذ ملاحظات المراجعين بعين الاعتبار في المهام التالية.",
      },
      {
        title: "الأسعار",
        text: "تُحتسب الترجمة لكل كلمة في النص المصدر، من 0.04 إلى 0.06 دولار أمريكي حسب الموضوع والحجم والموعد النهائي. أما المراجعة وتقييم الجودة والتحرير اللاحق فتُسعَّر حسب المشروع أو بالساعة. أرسلوا إليّ جدول أسعاركم أو تفاصيل المشروع وسأؤكد السعر.",
      },
    ],
    showAvailability: true,
    availabilityTitle: "ساعات العمل",
    faqTitle: "أسئلة الوكالات",
    faqs: [
      {
        q: "ما أزواج اللغات التي تعمل بها؟",
        a: "من الإنجليزية إلى العربية، ومن الفرنسية إلى العربية، ومن الإسبانية إلى العربية. والعربية لغتي الأم.",
      },
      {
        q: "كم كلمة يمكنك أن تترجم يوميًا؟",
        a: "حتى 4,000 كلمة يوميًا. وللأحجام الأكبر، نتفق مسبقًا على جدول زمني، مع التسليم على دفعات عند الحاجة.",
      },
      {
        q: "ما أدوات الترجمة التي تستخدمها؟",
        a: "SDL Trados وmemoQ وWordfast، مع Xbench لفحص الجودة. ويمكنني أيضًا العمل على منصة الترجمة أو التوطين الإلكترونية التي يحددها فريقكم.",
      },
      {
        q: "هل توقّع اتفاقيات عدم الإفصاح؟",
        a: "نعم. يسعدني توقيع اتفاقية عدم الإفصاح واتفاقية التعامل مع المترجمين قبل استلام أي ملفات.",
      },
      {
        q: "هل تقدّم ترجمة محلّفة أو معتمدة؟",
        a: "لا. لا أقدّم ترجمات محلّفة أو معتمدة بختم رسمي. أركّز على المحتوى التجاري والتقني والقانوني والمالي والطبي والتسويقي والبرمجي.",
      },
      {
        q: "كيف نضيفك إلى قاعدة بيانات المترجمين لدينا؟",
        a: "أرسلوا إليّ رابط التسجيل أو نموذج المترجمين عبر نموذج التواصل أو بالبريد الإلكتروني، وسأستكمله وأرسل أي مستندات تحتاجونها.",
      },
    ],
    ctaTitle: "هل تحتاجون إلى مترجم عربي موثوق لمشاريعكم؟",
    ctaDescription: "أرسلوا إليّ تفاصيل المشروع أو نموذج التسجيل أو طلب الأسعار، وسأرد عليكم سريعًا.",
  },
  fr: {
    title: "Traducteur arabe pour agences de traduction",
    crumb: "Pour les agences",
    seoTitle: "Traducteur arabe indépendant pour agences de traduction",
    description:
      "Un linguiste fiable de l’anglais, du français et de l’espagnol vers l’arabe pour les agences de traduction : traduction, révision, LQA et post-édition dans vos outils de TAO, jusqu’à 4 000 mots traduits par jour.",
    intro: [
      "Depuis 2014, je travaille principalement avec des agences de traduction. Je connais le fonctionnement du travail en sous-traitance : bons de commande, outils de TAO, mémoires de traduction, glossaires, guides de style, fichiers de questions, contrôles qualité et délais fermes. Je m’intègre à votre flux de travail sans suivi supplémentaire de vos chefs de projet.",
      "Je traduis de l’anglais, du français et de l’espagnol vers l’arabe, ma langue maternelle, je révise le travail d’autres traducteurs, j’évalue la qualité (LQA) et je post-édite la traduction automatique : un seul linguiste arabe peut couvrir tout votre processus, de la traduction au contrôle final.",
    ],
    listTitle: "Ce que je propose aux agences",
    list: [
      "Traduction de l’anglais, du français et de l’espagnol vers l’arabe, jusqu’à 4 000 mots par jour",
      "Révision bilingue et relecture du travail d’autres traducteurs",
      "Notation LQA selon MQM ou votre propre grille, avec rapports",
      "Post-édition de traduction automatique (légère et complète)",
      "Travail sous SDL Trados, memoQ et Wordfast, ou sur la plateforme en ligne de votre choix",
      "Contrôle qualité avec Xbench avant chaque livraison",
      "Signature d’accords de confidentialité et traitement soigneux des fichiers confidentiels",
    ],
    blocks: [
      {
        title: "Capacité et planification",
        text: "Je traduis jusqu’à 4 000 mots par jour. Les projets plus importants sont planifiés à l’avance avec votre chef de projet et peuvent être livrés en plusieurs parties, pour que vos étapes de révision et de PAO puissent commencer plus tôt.",
      },
      {
        title: "Ma façon de travailler avec vos chefs de projet",
        text: "Je confirme le délai et le périmètre en acceptant un projet, je respecte votre glossaire, votre guide de style et vos instructions, je pose mes questions sur la source tôt dans votre fichier de questions, je fais un contrôle qualité avant livraison et je tiens compte des retours des réviseurs pour les projets suivants.",
      },
      {
        title: "Tarifs",
        text: "La traduction est facturée au mot source, de 0,04 à 0,06 USD selon le domaine, le volume et le délai. La révision, la LQA et la post-édition sont chiffrées au projet ou à l’heure. Envoyez-moi votre grille tarifaire ou les détails du projet et je vous confirmerai le tarif.",
      },
    ],
    showAvailability: true,
    availabilityTitle: "Horaires de travail",
    faqTitle: "Questions des agences",
    faqs: [
      {
        q: "Quelles combinaisons de langues couvrez-vous ?",
        a: "Anglais vers arabe, français vers arabe et espagnol vers arabe. L’arabe est ma langue maternelle.",
      },
      {
        q: "Combien de mots pouvez-vous traduire par jour ?",
        a: "Jusqu’à 4 000 mots par jour. Pour des volumes plus importants, nous convenons d’un planning à l’avance, avec des livraisons partielles si nécessaire.",
      },
      {
        q: "Quels outils de TAO utilisez-vous ?",
        a: "SDL Trados, memoQ et Wordfast, avec Xbench pour le contrôle qualité. Je peux aussi travailler sur la plateforme de TAO ou de localisation en ligne que votre équipe m’attribue.",
      },
      {
        q: "Signez-vous des accords de confidentialité ?",
        a: "Oui. Je signe volontiers votre accord de confidentialité et votre contrat de sous-traitance avant de recevoir des fichiers.",
      },
      {
        q: "Proposez-vous des traductions assermentées ou certifiées ?",
        a: "Non. Je ne fournis pas de traductions assermentées ou certifiées avec cachet officiel. Je me concentre sur les contenus commerciaux, techniques, juridiques, financiers, médicaux, marketing et logiciels.",
      },
      {
        q: "Comment vous ajouter à notre base de prestataires ?",
        a: "Envoyez-moi votre lien d’inscription ou votre formulaire prestataire via le formulaire de contact ou par e-mail : je le remplirai et vous renverrai les documents nécessaires.",
      },
    ],
    ctaTitle: "Besoin d’un linguiste arabe fiable pour vos projets ?",
    ctaDescription: "Envoyez-moi les détails du projet, votre formulaire d’inscription ou une demande de tarifs : je vous réponds rapidement.",
  },
  es: {
    title: "Traductor de árabe para agencias de traducción",
    crumb: "Para agencias",
    seoTitle: "Traductor autónomo de árabe para agencias de traducción",
    description:
      "Un lingüista fiable del inglés, el francés y el español al árabe para agencias de traducción: traducción, revisión, LQA y posedición en tus herramientas TAO, con hasta 4000 palabras traducidas al día.",
    intro: [
      "Desde 2014 trabajo sobre todo con agencias de traducción. Conozco cómo funciona el trabajo como proveedor: órdenes de compra, herramientas TAO, memorias de traducción, glosarios, guías de estilo, hojas de consultas, controles de calidad y plazos firmes, y me integro en tu flujo de trabajo sin que tus gestores de proyecto tengan que hacer un seguimiento extra.",
      "Traduzco del inglés, el francés y el español al árabe, mi lengua materna, reviso el trabajo de otros traductores, evalúo la calidad con LQA y poseedito traducción automática, para que un solo lingüista de árabe cubra todo tu proceso, de la traducción a la comprobación final.",
    ],
    listTitle: "Qué ofrezco a las agencias",
    list: [
      "Traducción del inglés, el francés y el español al árabe, hasta 4000 palabras al día",
      "Revisión bilingüe y corrección del trabajo de otros traductores",
      "Puntuación LQA con MQM o tu propia ficha, con informes",
      "Posedición de traducción automática (ligera y completa)",
      "Trabajo en SDL Trados, memoQ y Wordfast, o en la plataforma en línea que asignes",
      "Control de calidad con Xbench antes de cada entrega",
      "Firma de acuerdos de confidencialidad y trato cuidadoso de los archivos confidenciales",
    ],
    blocks: [
      {
        title: "Capacidad y planificación",
        text: "Traduzco hasta 4000 palabras al día. Los proyectos más grandes se planifican con antelación con tu gestor de proyectos y pueden entregarse por partes, para que la revisión y la maquetación puedan empezar antes.",
      },
      {
        title: "Cómo trabajo con tus gestores de proyecto",
        text: "Confirmo el plazo y el alcance al aceptar un encargo, sigo tu glosario, tu guía de estilo y tus instrucciones, planteo las dudas sobre el original pronto en tu hoja de consultas, paso el control de calidad antes de entregar y tengo en cuenta los comentarios de los revisores en los siguientes encargos.",
      },
      {
        title: "Tarifas",
        text: "La traducción se cobra por palabra del original, de 0,04 a 0,06 USD según el tema, el volumen y el plazo. La revisión, la LQA y la posedición se presupuestan por proyecto o por hora. Envíame tu tabla de tarifas o los detalles del proyecto y te lo confirmo.",
      },
    ],
    showAvailability: true,
    availabilityTitle: "Horario de trabajo",
    faqTitle: "Preguntas de las agencias",
    faqs: [
      {
        q: "¿Qué combinaciones de idiomas cubres?",
        a: "Inglés a árabe, francés a árabe y español a árabe. El árabe es mi lengua materna.",
      },
      {
        q: "¿Cuántas palabras puedes traducir al día?",
        a: "Hasta 4000 palabras al día. Para volúmenes mayores, acordamos un calendario con antelación, con entregas parciales si hace falta.",
      },
      {
        q: "¿Qué herramientas TAO usas?",
        a: "SDL Trados, memoQ y Wordfast, con Xbench para el control de calidad. También puedo trabajar en la plataforma TAO o de localización en línea que asigne tu equipo.",
      },
      {
        q: "¿Firmas acuerdos de confidencialidad?",
        a: "Sí. Firmo encantado tu acuerdo de confidencialidad y tu contrato de proveedor antes de recibir cualquier archivo.",
      },
      {
        q: "¿Ofreces traducción jurada o certificada?",
        a: "No. No ofrezco traducciones juradas ni certificadas con sello oficial. Me centro en contenido comercial, técnico, jurídico, financiero, sanitario, de marketing y de software.",
      },
      {
        q: "¿Cómo te añadimos a nuestra base de proveedores?",
        a: "Envíame tu enlace de alta o tu formulario de proveedor a través del formulario de contacto o por correo electrónico, y lo completaré y te enviaré los documentos que necesites.",
      },
    ],
    ctaTitle: "¿Necesitas un lingüista de árabe fiable para tus proyectos?",
    ctaDescription: "Envíame los detalles del proyecto, tu formulario de alta o una solicitud de tarifas, y te responderé enseguida.",
  },
};

/* ------------------------------------------------------------------ */
/* Rates & turnaround                                                  */
/* ------------------------------------------------------------------ */

const rates: Record<Locale, InfoPage> = {
  en: {
    title: "Rates & Turnaround",
    crumb: "Rates & turnaround",
    seoTitle: "Arabic Translation Rates & Turnaround",
    description:
      "Clear Arabic translation rates, from USD 0.04 to 0.06 per word, and realistic delivery times based on up to 4,000 words a day.",
    intro: [
      "Translation into Arabic is charged per word of the source text, at USD 0.04 to 0.06 per word. Where your project falls in that range depends on the subject, the file format, the volume and the deadline.",
      "Every project starts with a clear written quote, so you know the price and the delivery date before any work begins. Quotes are free and without obligation.",
    ],
    tables: [
      {
        title: "Rates",
        head: ["Service", "Rate"],
        rows: [
          ["Translation (English, French or Spanish into Arabic)", "USD 0.04–0.06 per word"],
          ["Editing, proofreading and LQA", "Quoted per project or per hour"],
          ["Machine translation post-editing (MTPE)", "Quoted per project, based on the machine output"],
          ["Transcreation, consulting and digital marketing", "Quoted per project"],
        ],
        note: "Prices in US dollars, per word of the source text. Your final rate is confirmed in your quote.",
      },
      {
        title: "Typical turnaround",
        head: ["Project size", "Typical delivery"],
        rows: [
          ["Up to 1,000 words", "Within 1 working day"],
          ["1,000–4,000 words", "1–2 working days"],
          ["4,000–10,000 words", "2–4 working days"],
          ["10,000–20,000 words", "4–6 working days"],
          ["Over 20,000 words", "Agreed schedule, with partial deliveries"],
        ],
        note: "Based on up to 4,000 words of translation a day, including my own review. Editing, proofreading and post-editing are usually faster. Urgent deadlines are possible depending on availability.",
      },
    ],
    listTitle: "What affects the price",
    list: [
      "Subject and technical complexity",
      "File format and any layout or formatting work",
      "Deadline, including urgent delivery",
      "Volume and repeated text across the project",
      "Services needed, such as translation only, or translation with editing and proofreading",
    ],
    faqTitle: "Questions about rates and delivery",
    faqs: [
      {
        q: "Do you charge per word or per page?",
        a: "Translation is charged per word of the source text, which is the most transparent method. Editing, LQA, post-editing and other services are quoted per project or per hour.",
      },
      {
        q: "Is the quote free?",
        a: "Yes. Quotes are free and without obligation. Send me the files or a description of the project, and I’ll reply with the price and delivery date.",
      },
      {
        q: "Can you handle urgent projects?",
        a: "Often, yes, depending on availability and the size of the project. Tell me your deadline when you request a quote and I’ll confirm whether I can meet it.",
      },
      {
        q: "How are large projects delivered?",
        a: "Large projects are scheduled in advance and can be delivered in parts, so you can start reviewing or publishing before the whole project is finished.",
      },
      {
        q: "Do you provide sworn or certified translation?",
        a: "No. I don’t provide sworn or certified translations with an official stamp, such as for immigration or court documents. I focus on commercial, technical, legal, financial, healthcare, marketing and software content.",
      },
    ],
    ctaTitle: "Get a clear quote",
    ctaDescription: "Send me your files or tell me about the project, and I’ll reply with the price and delivery date.",
  },
  ar: {
    title: "الأسعار ومواعيد التسليم",
    crumb: "الأسعار ومواعيد التسليم",
    seoTitle: "أسعار الترجمة إلى العربية ومواعيد التسليم",
    description:
      "أسعار واضحة للترجمة إلى العربية، من 0.04 إلى 0.06 دولار أمريكي للكلمة، ومواعيد تسليم واقعية بطاقة تصل إلى 4,000 كلمة يوميًا.",
    intro: [
      "تُحتسب الترجمة إلى العربية لكل كلمة في النص المصدر، بسعر يتراوح بين 0.04 و0.06 دولار أمريكي للكلمة. ويتحدد موقع مشروعك ضمن هذا النطاق حسب الموضوع وصيغة الملف والحجم والموعد النهائي.",
      "يبدأ كل مشروع بعرض سعر مكتوب وواضح، لتعرف السعر وموعد التسليم قبل بدء العمل. وعروض الأسعار مجانية ودون أي التزام.",
    ],
    tables: [
      {
        title: "الأسعار",
        head: ["الخدمة", "السعر"],
        rows: [
          ["الترجمة (من الإنجليزية أو الفرنسية أو الإسبانية إلى العربية)", "0.04–0.06 دولار أمريكي للكلمة"],
          ["التحرير والتدقيق وتقييم الجودة (LQA)", "حسب المشروع أو بالساعة"],
          ["التحرير اللاحق للترجمة الآلية (MTPE)", "حسب المشروع، بناءً على جودة الترجمة الآلية"],
          ["الترجمة الإبداعية والاستشارات والتسويق الرقمي", "حسب المشروع"],
        ],
        note: "الأسعار بالدولار الأمريكي، لكل كلمة في النص المصدر. ويُؤكَّد السعر النهائي في عرض السعر.",
      },
      {
        title: "مواعيد التسليم المعتادة",
        head: ["حجم المشروع", "مدة التسليم المعتادة"],
        rows: [
          ["حتى 1,000 كلمة", "خلال يوم عمل واحد"],
          ["1,000–4,000 كلمة", "1–2 يوم عمل"],
          ["4,000–10,000 كلمة", "2–4 أيام عمل"],
          ["10,000–20,000 كلمة", "4–6 أيام عمل"],
          ["أكثر من 20,000 كلمة", "جدول زمني متفق عليه، مع التسليم على دفعات"],
        ],
        note: "بناءً على ترجمة حتى 4,000 كلمة يوميًا، شاملةً مراجعتي الخاصة. وعادةً ما يكون التحرير والتدقيق والتحرير اللاحق أسرع. ويمكن تلبية المواعيد العاجلة حسب التوفر.",
      },
    ],
    listTitle: "ما الذي يؤثر في السعر",
    list: [
      "الموضوع ودرجة تعقيده التقني",
      "صيغة الملف وأي عمل على التنسيق أو التخطيط",
      "الموعد النهائي، بما في ذلك التسليم العاجل",
      "حجم المشروع والنصوص المتكررة فيه",
      "الخدمات المطلوبة، كالترجمة فقط أو الترجمة مع التحرير والتدقيق",
    ],
    faqTitle: "أسئلة عن الأسعار والتسليم",
    faqs: [
      {
        q: "هل تحتسب السعر بالكلمة أم بالصفحة؟",
        a: "تُحتسب الترجمة لكل كلمة في النص المصدر، وهي الطريقة الأكثر شفافية. أما التحرير وتقييم الجودة والتحرير اللاحق والخدمات الأخرى فتُسعَّر حسب المشروع أو بالساعة.",
      },
      {
        q: "هل عرض السعر مجاني؟",
        a: "نعم. عروض الأسعار مجانية ودون أي التزام. أرسل إليّ الملفات أو وصفًا للمشروع، وسأرد عليك بالسعر وموعد التسليم.",
      },
      {
        q: "هل يمكنك تنفيذ المشاريع العاجلة؟",
        a: "غالبًا نعم، حسب التوفر وحجم المشروع. أخبرني بموعدك النهائي عند طلب عرض السعر وسأؤكد لك إن كان بإمكاني الالتزام به.",
      },
      {
        q: "كيف تُسلَّم المشاريع الكبيرة؟",
        a: "تُجدوَل المشاريع الكبيرة مسبقًا ويمكن تسليمها على دفعات، لتبدأ المراجعة أو النشر قبل اكتمال المشروع كله.",
      },
      {
        q: "هل تقدّم ترجمة محلّفة أو معتمدة؟",
        a: "لا. لا أقدّم ترجمات محلّفة أو معتمدة بختم رسمي، كتلك المطلوبة لمعاملات الهجرة أو المحاكم. أركّز على المحتوى التجاري والتقني والقانوني والمالي والطبي والتسويقي والبرمجي.",
      },
    ],
    ctaTitle: "احصل على عرض سعر واضح",
    ctaDescription: "أرسل إليّ ملفاتك أو أخبرني عن المشروع، وسأرد عليك بالسعر وموعد التسليم.",
  },
  fr: {
    title: "Tarifs et délais",
    crumb: "Tarifs et délais",
    seoTitle: "Tarifs et délais de traduction vers l’arabe",
    description:
      "Des tarifs clairs pour la traduction vers l’arabe, de 0,04 à 0,06 USD le mot, et des délais réalistes, sur la base de 4 000 mots par jour maximum.",
    intro: [
      "La traduction vers l’arabe est facturée au mot du texte source, de 0,04 à 0,06 USD le mot. La place de votre projet dans cette fourchette dépend du domaine, du format des fichiers, du volume et du délai.",
      "Chaque projet commence par un devis écrit et clair : vous connaissez le prix et la date de livraison avant le début du travail. Les devis sont gratuits et sans engagement.",
    ],
    tables: [
      {
        title: "Tarifs",
        head: ["Service", "Tarif"],
        rows: [
          ["Traduction (de l’anglais, du français ou de l’espagnol vers l’arabe)", "0,04–0,06 USD le mot"],
          ["Révision, relecture et LQA", "Sur devis, au projet ou à l’heure"],
          ["Post-édition de traduction automatique (MTPE)", "Sur devis, selon la qualité de la traduction automatique"],
          ["Transcréation, conseil et marketing digital", "Sur devis, au projet"],
        ],
        note: "Prix en dollars américains, par mot du texte source. Votre tarif définitif est confirmé dans le devis.",
      },
      {
        title: "Délais habituels",
        head: ["Taille du projet", "Délai habituel"],
        rows: [
          ["Jusqu’à 1 000 mots", "Sous 1 jour ouvré"],
          ["1 000 à 4 000 mots", "1 à 2 jours ouvrés"],
          ["4 000 à 10 000 mots", "2 à 4 jours ouvrés"],
          ["10 000 à 20 000 mots", "4 à 6 jours ouvrés"],
          ["Plus de 20 000 mots", "Planning convenu, avec livraisons partielles"],
        ],
        note: "Sur la base de 4 000 mots traduits par jour maximum, relecture personnelle comprise. La révision, la relecture et la post-édition sont généralement plus rapides. Les délais urgents sont possibles selon les disponibilités.",
      },
    ],
    listTitle: "Ce qui influence le prix",
    list: [
      "Le domaine et la complexité technique",
      "Le format des fichiers et le travail de mise en forme éventuel",
      "Le délai, y compris les livraisons urgentes",
      "Le volume et les répétitions dans le projet",
      "Les services demandés : traduction seule, ou traduction avec révision et relecture",
    ],
    faqTitle: "Questions sur les tarifs et les délais",
    faqs: [
      {
        q: "Facturez-vous au mot ou à la page ?",
        a: "La traduction est facturée au mot du texte source, la méthode la plus transparente. La révision, la LQA, la post-édition et les autres services sont chiffrés au projet ou à l’heure.",
      },
      {
        q: "Le devis est-il gratuit ?",
        a: "Oui. Les devis sont gratuits et sans engagement. Envoyez-moi les fichiers ou une description du projet, et je vous répondrai avec le prix et la date de livraison.",
      },
      {
        q: "Pouvez-vous traiter des projets urgents ?",
        a: "Souvent, oui, selon mes disponibilités et la taille du projet. Indiquez votre délai dans votre demande de devis et je vous confirmerai si je peux le respecter.",
      },
      {
        q: "Comment les gros projets sont-ils livrés ?",
        a: "Les gros projets sont planifiés à l’avance et peuvent être livrés en plusieurs parties, pour que vous puissiez commencer la relecture ou la publication avant la fin du projet.",
      },
      {
        q: "Proposez-vous des traductions assermentées ou certifiées ?",
        a: "Non. Je ne fournis pas de traductions assermentées ou certifiées avec cachet officiel, comme pour les démarches d’immigration ou les tribunaux. Je me concentre sur les contenus commerciaux, techniques, juridiques, financiers, médicaux, marketing et logiciels.",
      },
    ],
    ctaTitle: "Obtenez un devis clair",
    ctaDescription: "Envoyez-moi vos fichiers ou décrivez votre projet, et je vous répondrai avec le prix et la date de livraison.",
  },
  es: {
    title: "Tarifas y plazos",
    crumb: "Tarifas y plazos",
    seoTitle: "Tarifas y plazos de traducción al árabe",
    description:
      "Tarifas claras de traducción al árabe, de 0,04 a 0,06 USD por palabra, y plazos de entrega realistas, con hasta 4000 palabras al día.",
    intro: [
      "La traducción al árabe se cobra por palabra del texto original, de 0,04 a 0,06 USD por palabra. El punto de esa horquilla en el que queda tu proyecto depende del tema, el formato de los archivos, el volumen y el plazo.",
      "Cada proyecto empieza con un presupuesto claro y por escrito, para que conozcas el precio y la fecha de entrega antes de empezar. Los presupuestos son gratuitos y sin compromiso.",
    ],
    tables: [
      {
        title: "Tarifas",
        head: ["Servicio", "Tarifa"],
        rows: [
          ["Traducción (del inglés, el francés o el español al árabe)", "0,04–0,06 USD por palabra"],
          ["Edición, revisión y LQA", "Presupuesto por proyecto o por hora"],
          ["Posedición de traducción automática (MTPE)", "Presupuesto por proyecto, según la traducción automática"],
          ["Transcreación, consultoría y marketing digital", "Presupuesto por proyecto"],
        ],
        note: "Precios en dólares estadounidenses, por palabra del texto original. Tu tarifa final se confirma en el presupuesto.",
      },
      {
        title: "Plazos habituales",
        head: ["Tamaño del proyecto", "Entrega habitual"],
        rows: [
          ["Hasta 1000 palabras", "En 1 día laborable"],
          ["1000–4000 palabras", "1–2 días laborables"],
          ["4000–10 000 palabras", "2–4 días laborables"],
          ["10 000–20 000 palabras", "4–6 días laborables"],
          ["Más de 20 000 palabras", "Calendario acordado, con entregas parciales"],
        ],
        note: "Basado en hasta 4000 palabras traducidas al día, incluida mi propia revisión. La edición, la revisión y la posedición suelen ser más rápidas. Los plazos urgentes son posibles según disponibilidad.",
      },
    ],
    listTitle: "Qué influye en el precio",
    list: [
      "El tema y la complejidad técnica",
      "El formato de los archivos y cualquier trabajo de maquetación o formato",
      "El plazo, incluidas las entregas urgentes",
      "El volumen y el texto repetido en el proyecto",
      "Los servicios necesarios: solo traducción, o traducción con edición y revisión",
    ],
    faqTitle: "Preguntas sobre tarifas y plazos",
    faqs: [
      {
        q: "¿Cobras por palabra o por página?",
        a: "La traducción se cobra por palabra del texto original, que es el método más transparente. La edición, la LQA, la posedición y los demás servicios se presupuestan por proyecto o por hora.",
      },
      {
        q: "¿El presupuesto es gratuito?",
        a: "Sí. Los presupuestos son gratuitos y sin compromiso. Envíame los archivos o una descripción del proyecto y te responderé con el precio y la fecha de entrega.",
      },
      {
        q: "¿Puedes encargarte de proyectos urgentes?",
        a: "A menudo, sí, según mi disponibilidad y el tamaño del proyecto. Indícame tu plazo al pedir el presupuesto y te confirmaré si puedo cumplirlo.",
      },
      {
        q: "¿Cómo se entregan los proyectos grandes?",
        a: "Los proyectos grandes se planifican con antelación y pueden entregarse por partes, para que puedas empezar a revisar o publicar antes de que termine todo el proyecto.",
      },
      {
        q: "¿Ofreces traducción jurada o certificada?",
        a: "No. No ofrezco traducciones juradas ni certificadas con sello oficial, como las que se piden para trámites de inmigración o tribunales. Me centro en contenido comercial, técnico, jurídico, financiero, sanitario, de marketing y de software.",
      },
    ],
    ctaTitle: "Pide un presupuesto claro",
    ctaDescription: "Envíame tus archivos o cuéntame el proyecto, y te responderé con el precio y la fecha de entrega.",
  },
};

export function getAgencyPage(locale: string): InfoPage {
  return agencies[locale as Locale] ?? agencies.en;
}

export function getRatesPage(locale: string): InfoPage {
  return rates[locale as Locale] ?? rates.en;
}

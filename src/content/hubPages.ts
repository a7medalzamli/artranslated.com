import type { Locale } from "@/i18n";
import type { InfoPage } from "./infoPages";

/**
 * Hub pages: "Arabic markets" and the French → Arabic / Spanish → Arabic
 * language-pair pages, in four languages. Rendered with the shared InfoPage layout.
 */

/* ------------------------------------------------------------------ */
/* Arabic markets                                                      */
/* ------------------------------------------------------------------ */

const markets: Record<Locale, InfoPage> = {
  en: {
    title: "Arabic-Speaking Markets",
    crumb: "Arabic markets",
    seoTitle: "Arabic-Speaking Markets: Gulf, Levant, Egypt, Maghreb & Iraq",
    description:
      "Arabic is spoken by more than 400 million people in over 20 countries. An overview of the main markets, the Arabic each one reads, and how to reach them.",
    intro: [
      "The Arab world is not one market. Customers in Riyadh, Cairo, Beirut and Casablanca share a written language, but they differ in everyday dialects, business languages, buying habits and cultural references. Getting the language right for each market is the first step to being trusted there.",
      "I help companies of every size, from startups to multinationals, enter Arabic-speaking markets with translation, localization and digital marketing that fit each audience, translating directly from English, French and Spanish.",
    ],
    blocksTitle: "The main markets",
    blocksFirst: true,
    blocks: [
      {
        title: "The Gulf",
        text: "Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain and Oman. High purchasing power and fast digital adoption. English is common in business, but consumers and institutions expect careful Modern Standard Arabic, with a Gulf tone for local marketing.",
      },
      {
        title: "The Levant",
        text: "Palestine, Jordan, Lebanon and Syria. Highly educated, multilingual audiences; English, and French in Lebanon, are common in business. Modern Standard Arabic for written content, Levantine Arabic for informal marketing and video.",
      },
      {
        title: "Egypt",
        text: "The most populous Arab country and a large consumer market. Egyptian Arabic is understood across the region thanks to film and TV, while Modern Standard Arabic remains the norm for written and official content.",
      },
      {
        title: "The Maghreb",
        text: "Morocco, Algeria, Tunisia and Libya. Darija is the everyday language, French is widely used in business in Morocco, Algeria and Tunisia, and Modern Standard Arabic dominates official writing and the media.",
      },
      {
        title: "Iraq",
        text: "A large market with growing demand for services. Modern Standard Arabic for written content and Iraqi Arabic for informal communication; Kurdish is also an official language, mainly in the Kurdistan Region.",
      },
    ],
    tables: [
      {
        title: "Which Arabic for which market?",
        head: ["Your content", "Recommended Arabic"],
        rows: [
          ["Website, app or documents for several countries", "Modern Standard Arabic"],
          ["Contracts, policies and official documents", "Formal Modern Standard Arabic"],
          ["Consumer marketing in the Gulf", "Modern Standard Arabic with a Gulf touch"],
          ["Social media in Morocco, Algeria or Tunisia", "Darija, or Modern Standard Arabic with a local touch"],
          ["Informal video for a wide audience", "Modern Standard Arabic, or Egyptian Arabic"],
        ],
      },
    ],
    listTitle: "How I help you enter these markets",
    list: [
      "Translation into Arabic from English, French and Spanish",
      "Advice on the right Arabic and tone for each market",
      "Website, app and SaaS localization, including right-to-left layout",
      "Transcreation of slogans and campaigns",
      "Arabic SEO and AI search visibility",
      "Editing, proofreading and quality assessment (LQA)",
    ],
    faqTitle: "Questions about Arabic markets",
    faqs: [
      {
        q: "Do I need a different Arabic version for each country?",
        a: "Usually not. One version written in Modern Standard Arabic (MSA) is understood in all Arabic-speaking countries, from Morocco to the Gulf, and works for websites, apps, documents and most marketing. Separate country versions make sense mainly for campaigns, social media and video aimed at one market, or where local terms differ, for example for products, units or legal references. Start with MSA, then localize the content closest to the customer.",
      },
      {
        q: "Is English enough to do business in the Gulf?",
        a: "English is common in many business contacts, but consumers, public institutions and many decision-makers expect Arabic. Content in good Arabic widens your reach and builds trust.",
      },
      {
        q: "Can you help companies from French- or Spanish-speaking countries?",
        a: "Yes. I translate directly from French and Spanish into Arabic, without going through English, and I advise on the markets that matter most for your sector.",
      },
    ],
    ctaTitle: "Planning to enter an Arabic-speaking market?",
    ctaDescription: "Tell me which markets you are targeting and I’ll recommend the right Arabic and approach.",
  },
  ar: {
    title: "الأسواق العربية",
    crumb: "الأسواق العربية",
    seoTitle: "الأسواق العربية: الخليج والشام ومصر والمغرب العربي والعراق",
    description:
      "يتحدث العربية أكثر من 400 مليون شخص في أكثر من 20 دولة. نظرة عامة على أبرز الأسواق، ونوع العربية الذي يقرؤه كل منها، وكيف تصل إليها.",
    intro: [
      "العالم العربي ليس سوقًا واحدة. فالعملاء في الرياض والقاهرة وبيروت والدار البيضاء يشتركون في لغة مكتوبة واحدة، لكنهم يختلفون في اللهجات اليومية ولغات الأعمال وعادات الشراء والمرجعيات الثقافية. واختيار اللغة المناسبة لكل سوق هو أول خطوة لكسب ثقتها.",
      "أساعد الشركات بمختلف أحجامها، من الشركات الناشئة إلى الشركات متعددة الجنسيات، على دخول الأسواق العربية بترجمة وتوطين (Localization) وتسويق رقمي يناسب كل جمهور، مع الترجمة مباشرة من الإنجليزية والفرنسية والإسبانية.",
    ],
    blocksTitle: "أبرز الأسواق",
    blocksFirst: true,
    blocks: [
      {
        title: "الخليج",
        text: "السعودية والإمارات وقطر والكويت والبحرين وعُمان. قوة شرائية مرتفعة وتبنٍّ سريع للتقنية. الإنجليزية شائعة في الأعمال، لكن المستهلكين والمؤسسات يتوقعون فصحى متقنة، مع نبرة خليجية في التسويق المحلي.",
      },
      {
        title: "الشام",
        text: "فلسطين والأردن ولبنان وسوريا. جمهور متعلّم ومتعدد اللغات، والإنجليزية، والفرنسية في لبنان، شائعة في الأعمال. الفصحى للمحتوى المكتوب، واللهجة الشامية للتسويق غير الرسمي والفيديو.",
      },
      {
        title: "مصر",
        text: "أكبر الدول العربية سكانًا وسوق استهلاكية كبيرة. اللهجة المصرية مفهومة في المنطقة كلها بفضل السينما والدراما، بينما تبقى الفصحى المعيار في المحتوى المكتوب والرسمي.",
      },
      {
        title: "المغرب العربي",
        text: "المغرب والجزائر وتونس وليبيا. الدارجة لغة الحياة اليومية، والفرنسية شائعة في الأعمال في المغرب والجزائر وتونس، والفصحى تسود الكتابة الرسمية والإعلام.",
      },
      {
        title: "العراق",
        text: "سوق كبيرة وطلب متزايد على الخدمات. الفصحى للمحتوى المكتوب واللهجة العراقية للتواصل غير الرسمي، والكردية لغة رسمية أيضًا، ولا سيما في إقليم كردستان.",
      },
    ],
    tables: [
      {
        title: "أي عربية لأي سوق؟",
        head: ["المحتوى", "العربية المقترحة"],
        rows: [
          ["موقع أو تطبيق أو مستندات لعدة دول", "الفصحى المعاصرة"],
          ["العقود والسياسات والمستندات الرسمية", "فصحى رسمية"],
          ["التسويق للمستهلكين في الخليج", "فصحى بلمسة خليجية"],
          ["وسائل التواصل في المغرب أو الجزائر أو تونس", "الدارجة، أو فصحى بلمسة محلية"],
          ["فيديو غير رسمي لجمهور واسع", "الفصحى، أو اللهجة المصرية"],
        ],
      },
    ],
    listTitle: "كيف أساعدك على دخول هذه الأسواق",
    list: [
      "الترجمة إلى العربية من الإنجليزية والفرنسية والإسبانية",
      "المشورة في اختيار العربية والنبرة المناسبة لكل سوق",
      "توطين المواقع والتطبيقات ومنتجات البرمجيات كخدمة (SaaS)، بما في ذلك الاتجاه من اليمين إلى اليسار (RTL)",
      "الترجمة الإبداعية (Transcreation) للشعارات والحملات",
      "تحسين محركات البحث (SEO) بالعربية والظهور في الذكاء الاصطناعي (AI)",
      "التحرير والتدقيق وتقييم جودة اللغة (LQA)",
    ],
    faqTitle: "أسئلة عن الأسواق العربية",
    faqs: [
      {
        q: "هل أحتاج إلى نسخة عربية مختلفة لكل دولة؟",
        a: "غالبًا لا. فنسخة واحدة بالعربية الفصحى المعاصرة (MSA) مفهومة في كل الدول الناطقة بالعربية، من المغرب إلى الخليج، وتصلح للمواقع والتطبيقات والمستندات ومعظم المحتوى التسويقي. أما النسخ الخاصة بكل دولة فتفيد أساسًا في الحملات ووسائل التواصل والفيديو الموجّهة إلى سوق واحدة، أو حين تختلف المصطلحات المحلية، كأسماء المنتجات ووحدات القياس والمراجع القانونية. ابدأ بالفصحى، ثم وطّن المحتوى الأقرب إلى العميل.",
      },
      {
        q: "هل تكفي الإنجليزية للعمل في الخليج؟",
        a: "الإنجليزية شائعة في كثير من التعاملات التجارية، لكن المستهلكين والمؤسسات العامة وكثيرًا من صنّاع القرار يتوقعون العربية. والمحتوى العربي الجيد يوسّع انتشارك ويبني الثقة.",
      },
      {
        q: "هل تساعد الشركات القادمة من الدول الناطقة بالفرنسية أو الإسبانية؟",
        a: "نعم. أترجم مباشرة من الفرنسية والإسبانية إلى العربية دون المرور بالإنجليزية، وأقدّم المشورة حول الأسواق الأهم لقطاعك.",
      },
    ],
    ctaTitle: "هل تخطط لدخول سوق عربية؟",
    ctaDescription: "أخبرني بالأسواق التي تستهدفها، وسأقترح عليك العربية والنهج المناسبين.",
  },
  fr: {
    title: "Les marchés arabophones",
    crumb: "Marchés arabophones",
    seoTitle: "Marchés arabophones : Golfe, Levant, Égypte, Maghreb et Irak",
    description:
      "L’arabe est parlé par plus de 400 millions de personnes dans plus de 20 pays. Panorama des principaux marchés, de l’arabe que lit chacun d’eux et de la façon de les atteindre.",
    intro: [
      "Le monde arabe n’est pas un marché unique. Les clients de Riyad, du Caire, de Beyrouth et de Casablanca partagent une langue écrite, mais diffèrent par leurs dialectes, leurs langues des affaires, leurs habitudes d’achat et leurs références culturelles. Choisir la bonne langue pour chaque marché est la première étape pour y gagner la confiance.",
      "J’accompagne les entreprises de toutes tailles, des start-up aux groupes internationaux, sur les marchés arabophones grâce à la traduction, la localisation et le marketing digital adaptés à chaque public, en traduisant directement depuis l’anglais, le français et l’espagnol.",
    ],
    blocksTitle: "Les principaux marchés",
    blocksFirst: true,
    blocks: [
      {
        title: "Le Golfe",
        text: "Arabie saoudite, Émirats arabes unis, Qatar, Koweït, Bahreïn et Oman. Fort pouvoir d’achat et adoption rapide du numérique. L’anglais est courant dans les affaires, mais consommateurs et institutions attendent un arabe standard soigné, avec une touche du Golfe dans le marketing local.",
      },
      {
        title: "Le Levant",
        text: "Palestine, Jordanie, Liban et Syrie. Des publics très instruits et multilingues ; l’anglais, et le français au Liban, sont courants dans les affaires. Arabe standard pour l’écrit, arabe levantin pour le marketing informel et la vidéo.",
      },
      {
        title: "L’Égypte",
        text: "Le pays arabe le plus peuplé et un vaste marché de consommation. L’arabe égyptien est compris dans toute la région grâce au cinéma et aux séries, tandis que l’arabe standard reste la norme à l’écrit et dans les contenus officiels.",
      },
      {
        title: "Le Maghreb",
        text: "Maroc, Algérie, Tunisie et Libye. La darija est la langue du quotidien, le français est très utilisé dans les affaires au Maroc, en Algérie et en Tunisie, et l’arabe standard domine l’écrit officiel et les médias.",
      },
      {
        title: "L’Irak",
        text: "Un grand marché à la demande croissante. Arabe standard pour l’écrit et arabe irakien pour la communication informelle ; le kurde est aussi langue officielle, surtout dans la région du Kurdistan.",
      },
    ],
    tables: [
      {
        title: "Quel arabe pour quel marché ?",
        head: ["Votre contenu", "Arabe recommandé"],
        rows: [
          ["Site, application ou documents pour plusieurs pays", "Arabe standard moderne"],
          ["Contrats, politiques et documents officiels", "Arabe standard formel"],
          ["Marketing grand public dans le Golfe", "Arabe standard avec une touche du Golfe"],
          ["Réseaux sociaux au Maroc, en Algérie ou en Tunisie", "Darija, ou arabe standard avec une touche locale"],
          ["Vidéo informelle pour un large public", "Arabe standard, ou arabe égyptien"],
        ],
      },
    ],
    listTitle: "Comment je vous aide à aborder ces marchés",
    list: [
      "Traduction vers l’arabe depuis l’anglais, le français et l’espagnol",
      "Conseil sur l’arabe et le ton adaptés à chaque marché",
      "Localisation de sites, d’applications et de SaaS, y compris l’écriture de droite à gauche",
      "Transcréation de slogans et de campagnes",
      "SEO en arabe et visibilité dans la recherche IA",
      "Révision, relecture et évaluation de la qualité (LQA)",
    ],
    faqTitle: "Questions sur les marchés arabophones",
    faqs: [
      {
        q: "Faut-il une version arabe différente pour chaque pays ?",
        a: "Généralement non. Une seule version en arabe standard moderne est comprise dans tous les pays arabophones, du Maroc au Golfe, et convient aux sites, applications, documents et à la plupart des contenus marketing. Des versions par pays se justifient surtout pour les campagnes, les réseaux sociaux et la vidéo visant un seul marché, ou quand les termes locaux diffèrent, par exemple pour les produits, les unités ou les références juridiques. Commencez par l’arabe standard, puis localisez les contenus les plus proches du client.",
      },
      {
        q: "L’anglais suffit-il pour faire des affaires dans le Golfe ?",
        a: "L’anglais est courant dans de nombreux échanges professionnels, mais les consommateurs, les institutions publiques et beaucoup de décideurs attendent l’arabe. Un contenu en bon arabe élargit votre audience et renforce la confiance.",
      },
      {
        q: "Accompagnez-vous les entreprises francophones et hispanophones ?",
        a: "Oui. Je traduis directement du français et de l’espagnol vers l’arabe, sans passer par l’anglais, et je vous conseille sur les marchés les plus importants pour votre secteur.",
      },
    ],
    ctaTitle: "Vous préparez votre arrivée sur un marché arabophone ?",
    ctaDescription: "Indiquez-moi les marchés visés et je vous recommanderai l’arabe et l’approche adaptés.",
  },
  es: {
    title: "Mercados de habla árabe",
    crumb: "Mercados árabes",
    seoTitle: "Mercados de habla árabe: Golfo, Levante, Egipto, Magreb e Irak",
    description:
      "Más de 400 millones de personas hablan árabe en más de 20 países. Los principales mercados, el árabe que lee cada uno y cómo llegar a ellos.",
    intro: [
      "El mundo árabe no es un único mercado. Los clientes de Riad, El Cairo, Beirut y Casablanca comparten una lengua escrita, pero se diferencian en sus dialectos, sus idiomas de negocios, sus hábitos de compra y sus referencias culturales. Acertar con el idioma en cada mercado es el primer paso para ganarse su confianza.",
      "Ayudo a empresas de todos los tamaños, desde startups hasta multinacionales, a entrar en los mercados de habla árabe con traducción, localización y marketing digital adaptados a cada público, traduciendo directamente del inglés, el francés y el español.",
    ],
    blocksTitle: "Los principales mercados",
    blocksFirst: true,
    blocks: [
      {
        title: "El Golfo",
        text: "Arabia Saudí, Emiratos Árabes Unidos, Catar, Kuwait, Baréin y Omán. Alto poder adquisitivo y rápida adopción digital. El inglés es habitual en los negocios, pero consumidores e instituciones esperan un árabe estándar cuidado, con un toque del Golfo en el marketing local.",
      },
      {
        title: "El Levante",
        text: "Palestina, Jordania, Líbano y Siria. Públicos muy formados y multilingües; el inglés, y el francés en Líbano, son habituales en los negocios. Árabe estándar para lo escrito y árabe levantino para el marketing informal y el vídeo.",
      },
      {
        title: "Egipto",
        text: "El país árabe más poblado y un gran mercado de consumo. El árabe egipcio se entiende en toda la región gracias al cine y las series, mientras que el árabe estándar sigue siendo la norma en lo escrito y lo oficial.",
      },
      {
        title: "El Magreb",
        text: "Marruecos, Argelia, Túnez y Libia. La dariya es la lengua del día a día, el francés se usa mucho en los negocios en Marruecos, Argelia y Túnez, y el árabe estándar domina la escritura oficial y los medios.",
      },
      {
        title: "Irak",
        text: "Un mercado grande con demanda creciente de servicios. Árabe estándar para lo escrito y árabe iraquí para la comunicación informal; el kurdo también es lengua oficial, sobre todo en la región del Kurdistán.",
      },
    ],
    tables: [
      {
        title: "¿Qué árabe para qué mercado?",
        head: ["Tu contenido", "Árabe recomendado"],
        rows: [
          ["Web, app o documentos para varios países", "Árabe estándar moderno"],
          ["Contratos, políticas y documentos oficiales", "Árabe estándar formal"],
          ["Marketing de consumo en el Golfo", "Árabe estándar con un toque del Golfo"],
          ["Redes sociales en Marruecos, Argelia o Túnez", "Dariya, o árabe estándar con un toque local"],
          ["Vídeo informal para un público amplio", "Árabe estándar, o árabe egipcio"],
        ],
      },
    ],
    listTitle: "Cómo te ayudo a entrar en estos mercados",
    list: [
      "Traducción al árabe desde el inglés, el francés y el español",
      "Asesoramiento sobre el árabe y el tono adecuados para cada mercado",
      "Localización de webs, apps y SaaS, incluido el diseño de derecha a izquierda",
      "Transcreación de eslóganes y campañas",
      "SEO en árabe y visibilidad en la búsqueda con IA",
      "Edición, revisión y evaluación de la calidad (LQA)",
    ],
    faqTitle: "Preguntas sobre los mercados árabes",
    faqs: [
      {
        q: "¿Necesito una versión en árabe distinta para cada país?",
        a: "Normalmente no. Una sola versión en árabe estándar moderno se entiende en todos los países de habla árabe, de Marruecos al Golfo, y sirve para webs, apps, documentos y la mayor parte del marketing. Las versiones por país tienen sentido sobre todo en campañas, redes sociales y vídeo dirigidos a un solo mercado, o cuando cambian los términos locales, por ejemplo de productos, unidades o referencias legales. Empieza por el árabe estándar y localiza después el contenido más cercano al cliente.",
      },
      {
        q: "¿Basta con el inglés para hacer negocios en el Golfo?",
        a: "El inglés es habitual en muchos contactos profesionales, pero los consumidores, las instituciones públicas y muchos responsables de decisión esperan el árabe. Un contenido en buen árabe amplía tu alcance y genera confianza.",
      },
      {
        q: "¿Ayudas a empresas de países de habla hispana o francesa?",
        a: "Sí. Traduzco directamente del español y del francés al árabe, sin pasar por el inglés, y te asesoro sobre los mercados más importantes para tu sector.",
      },
    ],
    ctaTitle: "¿Preparas tu entrada en un mercado de habla árabe?",
    ctaDescription: "Cuéntame a qué mercados te diriges y te recomendaré el árabe y el enfoque adecuados.",
  },
};

/* ------------------------------------------------------------------ */
/* French → Arabic                                                     */
/* ------------------------------------------------------------------ */

const frenchToArabic: Record<Locale, InfoPage> = {
  en: {
    title: "French to Arabic Translation",
    crumb: "French to Arabic",
    seoTitle: "French to Arabic Translation by a Native Arabic Translator",
    description:
      "Direct translation from French into Arabic, without going through English, for companies of every size and translation agencies across the French-speaking world.",
    intro: [
      "Many Arabic translations of French documents are made from an English version, even when the original is French. Every extra step loses nuance. I translate directly from French into Arabic, my native language, so legal precision, technical terminology and marketing tone carry over intact.",
      "French and Arabic are closely linked through the Maghreb, Lebanon, international organizations and trade, and many documents travel between them. I work with companies and agencies in France, Belgium, Switzerland, Canada, Africa and worldwide.",
    ],
    listTitle: "What I translate from French",
    list: [
      "Contracts, terms and conditions, and policies",
      "Technical documentation, manuals and specifications",
      "Websites, apps and SaaS products",
      "Marketing materials, brochures and campaigns",
      "Financial and corporate documents",
      "Healthcare information and patient materials",
    ],
    blocks: [
      {
        title: "Direct, with no relay language",
        text: "Translating straight from French avoids the errors and flattening that come from an intermediate English version, and keeps your terminology consistent with the original.",
      },
      {
        title: "Right for each market",
        text: "Modern Standard Arabic for content read across the Arab world, and advice on a local touch, including Maghrebi darija, when you target one market.",
      },
      {
        title: "For companies and agencies",
        text: "Direct clients of every size and translation agencies, with CAT tools, translation memories, editing and proofreading included in the workflow.",
      },
    ],
    faqTitle: "French to Arabic: common questions",
    faqs: [
      {
        q: "Do you translate directly from French?",
        a: "Yes. I translate directly from French into Arabic, without an English intermediate version, which keeps meaning, terminology and tone faithful to your original.",
      },
      {
        q: "Can you adapt French content for audiences in the Maghreb?",
        a: "Yes. For Morocco, Algeria and Tunisia, I can advise on when Modern Standard Arabic is best and when a touch of darija, or keeping some content in French, works better.",
      },
      {
        q: "Do you provide sworn or certified translation?",
        a: "No. I don’t provide sworn or certified translations with an official stamp. I focus on business, technical, legal, financial, healthcare, marketing and software content.",
      },
    ],
    ctaTitle: "Need French content in Arabic?",
    ctaDescription: "Send me your files or describe your project, and I’ll reply with a clear quote.",
  },
  ar: {
    title: "الترجمة من الفرنسية إلى العربية",
    crumb: "من الفرنسية إلى العربية",
    seoTitle: "الترجمة من الفرنسية إلى العربية على يد مترجم لغته الأم العربية",
    description:
      "ترجمة مباشرة من الفرنسية إلى العربية، دون المرور بالإنجليزية، للشركات بمختلف أحجامها ولوكالات الترجمة (LSPs) في العالم الناطق بالفرنسية.",
    intro: [
      "تُترجَم كثير من المستندات الفرنسية إلى العربية انطلاقًا من نسخة إنجليزية، حتى حين يكون الأصل فرنسيًا، وكل خطوة إضافية تُفقد النص شيئًا من دقته. أترجم مباشرة من الفرنسية إلى العربية، لغتي الأم، لتنتقل الدقة القانونية والمصطلحات التقنية والنبرة التسويقية كما هي.",
      "ترتبط الفرنسية بالعربية ارتباطًا وثيقًا عبر المغرب العربي ولبنان والمنظمات الدولية والتجارة، وتنتقل بينهما مستندات كثيرة. أعمل مع شركات ووكالات في فرنسا وبلجيكا وسويسرا وكندا وأفريقيا وحول العالم.",
    ],
    listTitle: "ما أترجمه من الفرنسية",
    list: [
      "العقود والشروط والأحكام والسياسات",
      "الوثائق التقنية والأدلة والمواصفات",
      "المواقع والتطبيقات ومنتجات البرمجيات كخدمة (SaaS)",
      "المواد التسويقية والكتيّبات والحملات",
      "المستندات المالية ومستندات الشركات",
      "المعلومات الصحية ومواد المرضى",
    ],
    blocks: [
      {
        title: "ترجمة مباشرة دون لغة وسيطة",
        text: "الترجمة من الفرنسية مباشرة تتجنّب الأخطاء والتسطيح الناتجين عن نسخة إنجليزية وسيطة، وتحافظ على اتساق مصطلحاتك مع الأصل.",
      },
      {
        title: "مناسبة لكل سوق",
        text: "فصحى معاصرة للمحتوى الموجّه إلى العالم العربي كله، ومشورة حول اللمسة المحلية، بما فيها الدارجة المغاربية، حين تستهدف سوقًا بعينها.",
      },
      {
        title: "للشركات والوكالات",
        text: "عملاء مباشرون بمختلف أحجامهم ووكالات ترجمة، مع أدوات الترجمة بمساعدة الحاسوب (CAT) وذاكرات الترجمة (TM) والتحرير والتدقيق ضمن سير العمل.",
      },
    ],
    faqTitle: "الترجمة من الفرنسية: أسئلة شائعة",
    faqs: [
      {
        q: "هل تترجم مباشرة من الفرنسية؟",
        a: "نعم. أترجم من الفرنسية إلى العربية مباشرة دون نسخة إنجليزية وسيطة، ما يحافظ على المعنى والمصطلحات والنبرة كما في الأصل.",
      },
      {
        q: "هل يمكنك تكييف المحتوى الفرنسي لجمهور المغرب العربي؟",
        a: "نعم. بالنسبة إلى المغرب والجزائر وتونس، أقدّم المشورة حول متى تكون الفصحى الأنسب، ومتى تنجح لمسة من الدارجة أو إبقاء بعض المحتوى بالفرنسية.",
      },
      {
        q: "هل تقدّم ترجمة محلّفة أو معتمدة؟",
        a: "لا. لا أقدّم ترجمات محلّفة أو معتمدة بختم رسمي. أركّز على المحتوى التجاري والتقني والقانوني والمالي والطبي والتسويقي والبرمجي.",
      },
    ],
    ctaTitle: "هل تحتاج إلى محتواك الفرنسي بالعربية؟",
    ctaDescription: "أرسل إليّ ملفاتك أو صِف مشروعك، وسأرد عليك بعرض سعر واضح.",
  },
  fr: {
    title: "Traduction du français vers l’arabe",
    crumb: "Français vers l’arabe",
    seoTitle: "Traduction français-arabe par un traducteur de langue maternelle arabe",
    description:
      "Traduction directe du français vers l’arabe, sans passer par l’anglais, pour les entreprises de toutes tailles et les agences de traduction de tout l’espace francophone.",
    intro: [
      "Beaucoup de documents français sont traduits en arabe à partir d’une version anglaise, même quand l’original est en français. Chaque étape supplémentaire fait perdre des nuances. Je traduis directement du français vers l’arabe, ma langue maternelle, pour que la précision juridique, la terminologie technique et le ton marketing soient préservés.",
      "Le français et l’arabe sont étroitement liés par le Maghreb, le Liban, les organisations internationales et les échanges commerciaux. J’accompagne entreprises et agences en France, en Belgique, en Suisse, au Canada, en Afrique et partout dans le monde.",
    ],
    listTitle: "Ce que je traduis du français",
    list: [
      "Contrats, conditions générales et politiques",
      "Documentation technique, manuels et cahiers des charges",
      "Sites web, applications et produits SaaS",
      "Supports marketing, brochures et campagnes",
      "Documents financiers et institutionnels",
      "Informations de santé et documents patients",
    ],
    blocks: [
      {
        title: "En direct, sans langue relais",
        text: "Traduire directement depuis le français évite les erreurs et l’appauvrissement liés à une version anglaise intermédiaire, et garde votre terminologie fidèle à l’original.",
      },
      {
        title: "Adaptée à chaque marché",
        text: "De l’arabe standard moderne pour les contenus lus dans tout le monde arabe, et des conseils sur une touche locale, y compris la darija maghrébine, quand vous visez un marché précis.",
      },
      {
        title: "Pour les entreprises et les agences",
        text: "Clients directs de toutes tailles et agences de traduction, avec outils de TAO, mémoires de traduction, révision et relecture intégrées au processus.",
      },
    ],
    faqTitle: "Français vers arabe : questions fréquentes",
    faqs: [
      {
        q: "Traduisez-vous directement depuis le français ?",
        a: "Oui. Je traduis directement du français vers l’arabe, sans version anglaise intermédiaire, ce qui préserve le sens, la terminologie et le ton de votre texte.",
      },
      {
        q: "Pouvez-vous adapter un contenu français pour le Maghreb ?",
        a: "Oui. Pour le Maroc, l’Algérie et la Tunisie, je vous conseille sur les cas où l’arabe standard est préférable, et ceux où une touche de darija, ou le maintien de certains contenus en français, fonctionne mieux.",
      },
      {
        q: "Proposez-vous des traductions assermentées ?",
        a: "Non. Je ne fournis pas de traductions assermentées ou certifiées avec cachet officiel. Je me concentre sur les contenus commerciaux, techniques, juridiques, financiers, médicaux, marketing et logiciels.",
      },
    ],
    ctaTitle: "Besoin de vos contenus français en arabe ?",
    ctaDescription: "Envoyez-moi vos fichiers ou décrivez votre projet, et je vous répondrai avec un devis clair.",
  },
  es: {
    title: "Traducción del francés al árabe",
    crumb: "Francés al árabe",
    seoTitle: "Traducción del francés al árabe por un traductor nativo de árabe",
    description:
      "Traducción directa del francés al árabe, sin pasar por el inglés, para empresas de todos los tamaños y agencias de traducción de todo el mundo francófono.",
    intro: [
      "Muchos documentos franceses se traducen al árabe a partir de una versión en inglés, aunque el original esté en francés. Cada paso adicional hace perder matices. Traduzco directamente del francés al árabe, mi lengua materna, para que la precisión jurídica, la terminología técnica y el tono comercial se mantengan intactos.",
      "El francés y el árabe están muy unidos a través del Magreb, el Líbano, los organismos internacionales y el comercio. Trabajo con empresas y agencias de Francia, Bélgica, Suiza, Canadá, África y todo el mundo.",
    ],
    listTitle: "Qué traduzco del francés",
    list: [
      "Contratos, condiciones generales y políticas",
      "Documentación técnica, manuales y especificaciones",
      "Webs, apps y productos SaaS",
      "Materiales de marketing, folletos y campañas",
      "Documentos financieros y corporativos",
      "Información sanitaria y materiales para pacientes",
    ],
    blocks: [
      {
        title: "Directa, sin idioma puente",
        text: "Traducir directamente del francés evita los errores y la pérdida de matices de una versión intermedia en inglés, y mantiene tu terminología fiel al original.",
      },
      {
        title: "Adaptada a cada mercado",
        text: "Árabe estándar moderno para contenidos que se leen en todo el mundo árabe, y asesoramiento sobre un toque local, incluida la dariya magrebí, cuando te diriges a un mercado concreto.",
      },
      {
        title: "Para empresas y agencias",
        text: "Clientes directos de cualquier tamaño y agencias de traducción, con herramientas TAO, memorias de traducción, edición y revisión integradas en el proceso.",
      },
    ],
    faqTitle: "Francés al árabe: preguntas frecuentes",
    faqs: [
      {
        q: "¿Traduces directamente del francés?",
        a: "Sí. Traduzco directamente del francés al árabe, sin una versión intermedia en inglés, lo que mantiene fieles el sentido, la terminología y el tono del original.",
      },
      {
        q: "¿Puedes adaptar contenido francés para el Magreb?",
        a: "Sí. Para Marruecos, Argelia y Túnez, te asesoro sobre cuándo conviene el árabe estándar y cuándo funciona mejor un toque de dariya o mantener parte del contenido en francés.",
      },
      {
        q: "¿Ofreces traducción jurada?",
        a: "No. No ofrezco traducciones juradas ni certificadas con sello oficial. Me centro en contenido comercial, técnico, jurídico, financiero, sanitario, de marketing y de software.",
      },
    ],
    ctaTitle: "¿Necesitas tu contenido en francés en árabe?",
    ctaDescription: "Envíame tus archivos o cuéntame tu proyecto, y te responderé con un presupuesto claro.",
  },
};

/* ------------------------------------------------------------------ */
/* Spanish → Arabic                                                    */
/* ------------------------------------------------------------------ */

const spanishToArabic: Record<Locale, InfoPage> = {
  en: {
    title: "Spanish to Arabic Translation",
    crumb: "Spanish to Arabic",
    seoTitle: "Spanish to Arabic Translation by a Native Arabic Translator",
    description:
      "Direct translation from Spanish into Arabic, without going through English, for companies of every size and translation agencies across Spain, Latin America and the Spanish-speaking world.",
    intro: [
      "Spanish to Arabic is a less common language pair, so Spanish content is often translated into English first and then into Arabic. That relay costs time, money and accuracy. I translate directly from Spanish into Arabic, my native language, keeping your meaning, terminology and tone intact.",
      "Trade, tourism and investment between the Spanish-speaking world and Arab countries keep growing, from Spain and Morocco to Latin American exporters selling in the Gulf. I work with companies and agencies in Spain, Latin America, the United States and worldwide.",
    ],
    listTitle: "What I translate from Spanish",
    list: [
      "Contracts, terms and conditions, and policies",
      "Technical documentation and product information",
      "Websites, online stores, apps and SaaS products",
      "Tourism, hospitality and marketing content",
      "Financial and corporate documents",
      "Healthcare information and patient materials",
    ],
    blocks: [
      {
        title: "Direct, with no relay language",
        text: "No intermediate English version: your Spanish text goes straight into Arabic, which saves a step, avoids added errors and keeps terminology consistent.",
      },
      {
        title: "Right for each market",
        text: "Modern Standard Arabic for content read across the Arab world, with advice on the Gulf, Egypt or the Maghreb when you target a specific market.",
      },
      {
        title: "For companies and agencies",
        text: "Direct clients of every size, from exporters to multinationals, and translation agencies, with CAT tools, translation memories, editing and proofreading built in.",
      },
    ],
    faqTitle: "Spanish to Arabic: common questions",
    faqs: [
      {
        q: "Do you translate directly from Spanish?",
        a: "Yes. I translate directly from Spanish into Arabic, without an English intermediate version, so your content stays faithful to the original.",
      },
      {
        q: "Which Arabic-speaking markets do Spanish-speaking companies usually target?",
        a: "Often the Gulf countries, for trade, tourism and investment, and Morocco, for its proximity to Spain and its strong business ties. I can advise on the right Arabic for each.",
      },
      {
        q: "Do you provide sworn or certified translation?",
        a: "No. I don’t provide sworn or certified translations with an official stamp. I focus on business, technical, legal, financial, healthcare, marketing and software content.",
      },
    ],
    ctaTitle: "Need Spanish content in Arabic?",
    ctaDescription: "Send me your files or describe your project, and I’ll reply with a clear quote.",
  },
  ar: {
    title: "الترجمة من الإسبانية إلى العربية",
    crumb: "من الإسبانية إلى العربية",
    seoTitle: "الترجمة من الإسبانية إلى العربية على يد مترجم لغته الأم العربية",
    description:
      "ترجمة مباشرة من الإسبانية إلى العربية، دون المرور بالإنجليزية، للشركات بمختلف أحجامها ولوكالات الترجمة (LSPs) في إسبانيا وأمريكا اللاتينية والعالم الناطق بالإسبانية.",
    intro: [
      "الإسبانية والعربية زوج لغوي أقل شيوعًا، لذا يُترجم المحتوى الإسباني كثيرًا إلى الإنجليزية أولًا ثم إلى العربية، وهذه الخطوة الوسيطة تكلّف وقتًا ومالًا ودقة. أترجم مباشرة من الإسبانية إلى العربية، لغتي الأم، مع الحفاظ على المعنى والمصطلحات والنبرة.",
      "تنمو التجارة والسياحة والاستثمار بين العالم الناطق بالإسبانية والدول العربية باستمرار، من إسبانيا والمغرب إلى المصدّرين في أمريكا اللاتينية الذين يبيعون في الخليج. أعمل مع شركات ووكالات في إسبانيا وأمريكا اللاتينية والولايات المتحدة وحول العالم.",
    ],
    listTitle: "ما أترجمه من الإسبانية",
    list: [
      "العقود والشروط والأحكام والسياسات",
      "الوثائق التقنية ومعلومات المنتجات",
      "المواقع والمتاجر الإلكترونية والتطبيقات ومنتجات البرمجيات كخدمة (SaaS)",
      "محتوى السياحة والضيافة والتسويق",
      "المستندات المالية ومستندات الشركات",
      "المعلومات الصحية ومواد المرضى",
    ],
    blocks: [
      {
        title: "ترجمة مباشرة دون لغة وسيطة",
        text: "لا نسخة إنجليزية وسيطة: ينتقل نصك الإسباني إلى العربية مباشرة، فتوفّر خطوة وتتجنّب أخطاء إضافية وتبقى المصطلحات متّسقة.",
      },
      {
        title: "مناسبة لكل سوق",
        text: "فصحى معاصرة للمحتوى الموجّه إلى العالم العربي كله، مع مشورة حول الخليج أو مصر أو المغرب العربي حين تستهدف سوقًا بعينها.",
      },
      {
        title: "للشركات والوكالات",
        text: "عملاء مباشرون بمختلف أحجامهم، من المصدّرين إلى الشركات متعددة الجنسيات، ووكالات ترجمة، مع أدوات الترجمة بمساعدة الحاسوب (CAT) وذاكرات الترجمة (TM) والتحرير والتدقيق.",
      },
    ],
    faqTitle: "الترجمة من الإسبانية: أسئلة شائعة",
    faqs: [
      {
        q: "هل تترجم مباشرة من الإسبانية؟",
        a: "نعم. أترجم من الإسبانية إلى العربية مباشرة دون نسخة إنجليزية وسيطة، ليبقى محتواك وفيًا للأصل.",
      },
      {
        q: "ما الأسواق العربية التي تستهدفها الشركات الناطقة بالإسبانية عادة؟",
        a: "غالبًا دول الخليج للتجارة والسياحة والاستثمار، والمغرب لقربه من إسبانيا وعلاقاتهما التجارية القوية. وأقدّم المشورة حول العربية المناسبة لكل منها.",
      },
      {
        q: "هل تقدّم ترجمة محلّفة أو معتمدة؟",
        a: "لا. لا أقدّم ترجمات محلّفة أو معتمدة بختم رسمي. أركّز على المحتوى التجاري والتقني والقانوني والمالي والطبي والتسويقي والبرمجي.",
      },
    ],
    ctaTitle: "هل تحتاج إلى محتواك الإسباني بالعربية؟",
    ctaDescription: "أرسل إليّ ملفاتك أو صِف مشروعك، وسأرد عليك بعرض سعر واضح.",
  },
  fr: {
    title: "Traduction de l’espagnol vers l’arabe",
    crumb: "Espagnol vers l’arabe",
    seoTitle: "Traduction espagnol-arabe par un traducteur de langue maternelle arabe",
    description:
      "Traduction directe de l’espagnol vers l’arabe, sans passer par l’anglais, pour les entreprises de toutes tailles et les agences de traduction d’Espagne, d’Amérique latine et du monde hispanophone.",
    intro: [
      "L’espagnol vers l’arabe est une combinaison moins courante : les contenus espagnols sont donc souvent traduits d’abord en anglais, puis en arabe. Ce relais coûte du temps, de l’argent et de la précision. Je traduis directement de l’espagnol vers l’arabe, ma langue maternelle, en préservant le sens, la terminologie et le ton.",
      "Le commerce, le tourisme et les investissements entre le monde hispanophone et les pays arabes ne cessent de croître, de l’Espagne au Maroc jusqu’aux exportateurs latino-américains qui vendent dans le Golfe. J’accompagne entreprises et agences en Espagne, en Amérique latine, aux États-Unis et dans le monde entier.",
    ],
    listTitle: "Ce que je traduis de l’espagnol",
    list: [
      "Contrats, conditions générales et politiques",
      "Documentation technique et fiches produits",
      "Sites web, boutiques en ligne, applications et SaaS",
      "Contenus touristiques, hôteliers et marketing",
      "Documents financiers et institutionnels",
      "Informations de santé et documents patients",
    ],
    blocks: [
      {
        title: "En direct, sans langue relais",
        text: "Pas de version anglaise intermédiaire : votre texte espagnol passe directement en arabe, ce qui supprime une étape, évite des erreurs et garde une terminologie cohérente.",
      },
      {
        title: "Adaptée à chaque marché",
        text: "De l’arabe standard moderne pour les contenus lus dans tout le monde arabe, avec des conseils pour le Golfe, l’Égypte ou le Maghreb quand vous visez un marché précis.",
      },
      {
        title: "Pour les entreprises et les agences",
        text: "Clients directs de toutes tailles, des exportateurs aux groupes internationaux, et agences de traduction, avec outils de TAO, mémoires, révision et relecture intégrées.",
      },
    ],
    faqTitle: "Espagnol vers arabe : questions fréquentes",
    faqs: [
      {
        q: "Traduisez-vous directement depuis l’espagnol ?",
        a: "Oui. Je traduis directement de l’espagnol vers l’arabe, sans version anglaise intermédiaire, pour rester fidèle à l’original.",
      },
      {
        q: "Quels marchés arabes visent généralement les entreprises hispanophones ?",
        a: "Souvent les pays du Golfe, pour le commerce, le tourisme et l’investissement, et le Maroc, pour sa proximité avec l’Espagne et ses liens économiques forts. Je vous conseille sur l’arabe adapté à chacun.",
      },
      {
        q: "Proposez-vous des traductions assermentées ?",
        a: "Non. Je ne fournis pas de traductions assermentées ou certifiées avec cachet officiel. Je me concentre sur les contenus commerciaux, techniques, juridiques, financiers, médicaux, marketing et logiciels.",
      },
    ],
    ctaTitle: "Besoin de vos contenus espagnols en arabe ?",
    ctaDescription: "Envoyez-moi vos fichiers ou décrivez votre projet, et je vous répondrai avec un devis clair.",
  },
  es: {
    title: "Traducción del español al árabe",
    crumb: "Español al árabe",
    seoTitle: "Traducción español-árabe por un traductor nativo de árabe",
    description:
      "Traducción directa del español al árabe, sin pasar por el inglés, para empresas de todos los tamaños y agencias de traducción de España, Latinoamérica y todo el mundo hispanohablante.",
    intro: [
      "El español al árabe es una combinación menos habitual, por eso muchos contenidos en español se traducen primero al inglés y después al árabe. Ese paso intermedio cuesta tiempo, dinero y precisión. Traduzco directamente del español al árabe, mi lengua materna, manteniendo intactos el sentido, la terminología y el tono.",
      "El comercio, el turismo y la inversión entre el mundo hispanohablante y los países árabes no dejan de crecer, desde España y Marruecos hasta los exportadores latinoamericanos que venden en el Golfo. Trabajo con empresas y agencias de España, Latinoamérica, Estados Unidos y todo el mundo.",
    ],
    listTitle: "Qué traduzco del español",
    list: [
      "Contratos, condiciones generales y políticas",
      "Documentación técnica e información de producto",
      "Webs, tiendas online, apps y productos SaaS",
      "Contenido turístico, hotelero y de marketing",
      "Documentos financieros y corporativos",
      "Información sanitaria y materiales para pacientes",
    ],
    blocks: [
      {
        title: "Directa, sin idioma puente",
        text: "Sin versión intermedia en inglés: tu texto en español pasa directamente al árabe, lo que ahorra un paso, evita errores añadidos y mantiene la terminología coherente.",
      },
      {
        title: "Adaptada a cada mercado",
        text: "Árabe estándar moderno para contenidos que se leen en todo el mundo árabe, con asesoramiento sobre el Golfo, Egipto o el Magreb cuando te diriges a un mercado concreto.",
      },
      {
        title: "Para empresas y agencias",
        text: "Clientes directos de cualquier tamaño, de exportadores a multinacionales, y agencias de traducción, con herramientas TAO, memorias de traducción, edición y revisión incluidas.",
      },
    ],
    faqTitle: "Español al árabe: preguntas frecuentes",
    faqs: [
      {
        q: "¿Traduces directamente del español?",
        a: "Sí. Traduzco directamente del español al árabe, sin una versión intermedia en inglés, para que tu contenido sea fiel al original.",
      },
      {
        q: "¿A qué mercados árabes suelen dirigirse las empresas hispanohablantes?",
        a: "A menudo a los países del Golfo, por comercio, turismo e inversión, y a Marruecos, por su cercanía a España y sus fuertes lazos comerciales. Te asesoro sobre el árabe adecuado para cada uno.",
      },
      {
        q: "¿Ofreces traducción jurada?",
        a: "No. No ofrezco traducciones juradas ni certificadas con sello oficial. Me centro en contenido comercial, técnico, jurídico, financiero, sanitario, de marketing y de software.",
      },
    ],
    ctaTitle: "¿Necesitas tu contenido en español en árabe?",
    ctaDescription: "Envíame tus archivos o cuéntame tu proyecto, y te responderé con un presupuesto claro.",
  },
};

export function getMarketsPage(locale: string): InfoPage {
  return markets[locale as Locale] ?? markets.en;
}
export function getFrenchToArabicPage(locale: string): InfoPage {
  return frenchToArabic[locale as Locale] ?? frenchToArabic.en;
}
export function getSpanishToArabicPage(locale: string): InfoPage {
  return spanishToArabic[locale as Locale] ?? spanishToArabic.en;
}

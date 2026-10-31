import type { Locale } from "@/i18n";
import type { ServiceSlug } from "./servicePages";

/**
 * Extra sections on each service page: who it's for, how it works and what the
 * client receives. Written to give search engines and AI assistants enough
 * concrete, quotable detail. Kept in code (not the CMS) in all four languages.
 */
export type ServiceDetail = { title: string; text: string };

type Details = Record<ServiceSlug, [ServiceDetail, ServiceDetail, ServiceDetail]>;

const T = {
  en: ["Who it’s for", "How it works", "What you receive"],
  ar: ["لمن هذه الخدمة", "كيف يسير العمل", "ما الذي تحصل عليه"],
  fr: ["Pour qui", "Comment ça se passe", "Ce que vous recevez"],
  es: ["Para quién es", "Cómo funciona", "Qué recibes"],
} as const;

const d = (l: Locale, a: string, b: string, c: string): [ServiceDetail, ServiceDetail, ServiceDetail] => [
  { title: T[l][0], text: a },
  { title: T[l][1], text: b },
  { title: T[l][2], text: c },
];

const en: Details = {
  translation: d(
    "en",
    "Companies, agencies and organizations that need English, French or Spanish content in Arabic: product and user documentation, websites, contracts, reports, training material and marketing. Translation agencies work with me as a dedicated Arabic linguist on ongoing accounts, and direct clients come to me when they want one accountable translator from brief to delivery.",
    "You send the files and tell me the audience, deadline and any reference material. I confirm the scope and quote, set up a termbase and translation memory in SDL Trados Studio or memoQ, translate, then edit and proofread the Arabic (TEP). Automated QA checks catch number, tag and terminology errors before delivery.",
    "Translated files in their original format and layout (Word, Excel, PowerPoint, bilingual XLIFF and other CAT formats), plus the updated translation memory and glossary on request, so future updates stay consistent and cost less. Turnaround depends on volume and is agreed in the quote.",
  ),
  editing: d(
    "en",
    "Direct clients who want an Arabic translation checked before it is published or printed, and translation agencies (LSPs) that need an independent reviser, a final proofreader or LQA scoring for their Arabic projects and vendors.",
    "You send the source and the translation, with any glossary, style guide or reference material, and tell me the level of review you need. I edit in your CAT tool or with tracked changes, check terminology, numbers, tags and consistency with QA tools such as Xbench, then proofread the final Arabic. For LQA, each error is logged with its category and severity.",
    "Corrected files in their original format, with tracked changes or as a clean version, a log of key changes and queries, and for agencies an LQA scorecard and report. I work with Word, Excel, PowerPoint and PDF, bilingual CAT formats such as XLIFF, SDLXLIFF and MQXLIFF, Trados and memoQ project packages, and HTML, XML, JSON and SRT subtitle files.",
  ),
  mtpe: d(
    "en",
    "Teams that already run content through machine translation engines or large language models and need the Arabic checked and corrected by a professional before it is used, published or fed back into training.",
    "I review a sample to judge the raw output, agree on light or full post-editing against your guidelines, then correct meaning, terminology, grammar and flow segment by segment in your CAT tool or platform. Recurring engine errors are logged so they can be fixed at the source.",
    "Post-edited files in the format you need, consistent terminology across batches, and an optional report on engine quality. Light post-editing suits internal content; full post-editing is for anything your customers will read.",
  ),
  transcreation: d(
    "en",
    "Brands, marketing teams and product teams launching campaigns, apps or websites in Arabic-speaking markets, where a literal translation would sound foreign, lose a play on words or break the layout.",
    "Starting from your brief, brand voice and target market, I write several Arabic options for headlines and key messages, each with a back-translation and a note on why it works. For apps and websites, interface text is checked against character limits and right-to-left layout, ideally in screenshots or a test site.",
    "Ready-to-use Arabic copy, alternative options to choose from, back-translations for colleagues who don’t read Arabic, and Arabic voice and tone guidelines for future content.",
  ),
  consulting: d(
    "en",
    "Companies preparing to enter Arabic-speaking markets for the first time, and teams whose Arabic content is inconsistent, slow to produce or not landing with its audience.",
    "We start with a call about your products, markets and current workflow. I review your existing Arabic content or source files and identify the risks: dialect choice, terminology, right-to-left issues, culturally sensitive images or names, and missing quality steps. You get practical recommendations, not a theoretical report.",
    "Depending on scope: a glossary and style guide, guidance on Modern Standard Arabic versus regional dialects, a localization-readiness review of your website or app, and a quality process your team or vendors can follow.",
  ),
  "digital-marketing": d(
    "en",
    "Businesses that want Arabic-speaking customers to find and trust them online, from SaaS and e-commerce to service providers entering Gulf, Levant or North African markets.",
    "I research the Arabic keywords your audience actually searches for, then write or localize website pages, blog posts, social media posts, ads and emails around them, adapting tone and examples to the target market instead of translating line by line. Campaign results are reviewed to improve the next round.",
    "An Arabic keyword list, search-optimized page and blog content, social media and ad copy, localized emails and newsletters, and a short performance review with recommendations.",
  ),
};

const ar: Details = {
  translation: d(
    "ar",
    "الشركات والوكالات والمؤسسات التي تحتاج إلى نقل محتواها من الإنجليزية أو الفرنسية أو الإسبانية إلى العربية: وثائق المنتجات وأدلة المستخدم، والمواقع الإلكترونية، والعقود، والتقارير، والمواد التدريبية والتسويقية. تتعاون معي وكالات الترجمة بصفتي لغويًا مختصًا بالعربية في مشاريعها المستمرة، ويلجأ إليّ العملاء المباشرون حين يريدون مترجمًا واحدًا مسؤولًا عن العمل من البداية حتى التسليم.",
    "ترسل الملفات وتخبرني بالجمهور المستهدف والموعد النهائي وأي مواد مرجعية. أؤكد نطاق العمل وعرض السعر، ثم أُعدّ قاعدة المصطلحات وذاكرة الترجمة في SDL Trados Studio أو memoQ، وأترجم، ثم أحرّر النص العربي وأدقّقه (TEP). وتكشف فحوص الجودة الآلية أخطاء الأرقام والوسوم والمصطلحات قبل التسليم.",
    "ملفات مترجمة بصيغتها وتنسيقها الأصليين (Word وExcel وPowerPoint وملفات XLIFF ثنائية اللغة وغيرها من صيغ أدوات الترجمة)، إضافةً إلى ذاكرة الترجمة والمسرد المحدَّثين عند الطلب، لتبقى التحديثات المستقبلية متّسقة وأقل تكلفة. وتعتمد مدة التسليم على حجم العمل ويُتفق عليها في عرض السعر.",
  ),
  editing: d(
    "ar",
    "العملاء المباشرون الذين يريدون مراجعة ترجمة عربية قبل نشرها أو طباعتها، ووكالات الترجمة التي تحتاج إلى مراجع مستقل أو مدقّق نهائي أو تقييم جودة (LQA) لمشاريعها العربية ومترجميها.",
    "ترسل النص المصدر والترجمة، مع أي مسرد أو دليل أسلوب أو مواد مرجعية، وتحدّد مستوى المراجعة الذي تحتاجه. أحرّر النص في أداة الترجمة التي تستخدمها أو بتتبّع التغييرات، وأتحقق من المصطلحات والأرقام والوسوم والاتساق بأدوات ضمان الجودة مثل Xbench، ثم أدقّق النص العربي النهائي. وفي تقييم الجودة (LQA)، يُسجَّل كل خطأ مع فئته ودرجة خطورته.",
    "ملفات مصحَّحة بصيغتها الأصلية، بتعديلات متتبَّعة أو بنسخة نظيفة، وسجل بأهم التعديلات والاستفسارات، وللوكالات بطاقة تقييم جودة وتقرير. أعمل على ملفات Word وExcel وPowerPoint وPDF، وصيغ أدوات الترجمة ثنائية اللغة مثل XLIFF وSDLXLIFF وMQXLIFF، وحزم مشاريع Trados وmemoQ، وملفات HTML وXML وJSON وملفات الترجمة المرئية SRT.",
  ),
  mtpe: d(
    "ar",
    "الفرق التي تستخدم محركات الترجمة الآلية أو النماذج اللغوية الكبيرة، وتحتاج إلى مختص يراجع النص العربي ويصحّحه قبل استخدامه أو نشره أو إعادته إلى بيانات التدريب.",
    "أراجع عيّنة لتقييم المخرجات الأولية، ونتفق على تحرير لاحق خفيف أو كامل وفق إرشاداتك، ثم أصحّح المعنى والمصطلحات والقواعد والسلاسة مقطعًا مقطعًا في أداة الترجمة أو المنصة التي تستخدمها. وتُسجَّل الأخطاء المتكررة للمحرك ليمكن معالجتها من مصدرها.",
    "ملفات محرَّرة بالصيغة التي تحتاجها، ومصطلحات متّسقة عبر الدفعات، وتقرير اختياري عن جودة المحرك. يناسب التحرير الخفيف المحتوى الداخلي، أما التحرير الكامل فلكل ما سيقرؤه عملاؤك.",
  ),
  transcreation: d(
    "ar",
    "العلامات التجارية وفرق التسويق وفرق المنتجات التي تطلق حملات أو تطبيقات أو مواقع في الأسواق الناطقة بالعربية، حيث تبدو الترجمة الحرفية غريبة أو تُفقد التلاعب اللفظي أو تُفسد التصميم.",
    "انطلاقًا من موجز المشروع وأسلوب علامتك والسوق المستهدفة، أكتب عدة صيغ عربية للعناوين والرسائل الأساسية، مع ترجمة عكسية لكل صيغة وملاحظة توضّح سبب نجاحها. وفي التطبيقات والمواقع، تُراجَع نصوص الواجهات وفق حدود عدد الأحرف واتجاه الكتابة من اليمين إلى اليسار، ويُفضَّل ذلك عبر لقطات الشاشة أو موقع تجريبي.",
    "نصوص عربية جاهزة للاستخدام، وصيغ بديلة للاختيار بينها، وترجمات عكسية لزملائك الذين لا يقرؤون العربية، وإرشادات لأسلوب علامتك ونبرتها بالعربية للمحتوى المستقبلي.",
  ),
  consulting: d(
    "ar",
    "الشركات التي تستعد لدخول الأسواق الناطقة بالعربية لأول مرة، والفرق التي يعاني محتواها العربي من عدم الاتساق أو بطء الإنتاج أو ضعف الصدى لدى جمهوره.",
    "نبدأ بمكالمة حول منتجاتك وأسواقك وسير عملك الحالي. أراجع محتواك العربي الحالي أو ملفاتك المصدرية وأحدّد المخاطر: اختيار اللهجة، والمصطلحات، ومشكلات الكتابة من اليمين إلى اليسار، والصور أو الأسماء الحساسة ثقافيًا، وخطوات الجودة الناقصة. وتحصل على توصيات عملية لا تقريرًا نظريًا.",
    "بحسب نطاق العمل: مسرد مصطلحات ودليل أسلوب، وإرشادات حول العربية الفصحى المعاصرة مقابل اللهجات المحلية، ومراجعة لجاهزية موقعك أو تطبيقك للتوطين، وآلية جودة يمكن لفريقك أو مورّديك اتباعها.",
  ),
  "digital-marketing": d(
    "ar",
    "الشركات التي تريد أن يجدها العملاء الناطقون بالعربية على الإنترنت وأن يثقوا بها، من البرمجيات كخدمة والتجارة الإلكترونية إلى مزوّدي الخدمات الداخلين إلى أسواق الخليج والشام وشمال أفريقيا.",
    "أبحث عن الكلمات المفتاحية العربية التي يستخدمها جمهورك فعلًا في البحث، ثم أكتب أو أوطّن صفحات الموقع والمقالات ومنشورات وسائل التواصل الاجتماعي والإعلانات والرسائل البريدية بناءً عليها، مع تكييف النبرة والأمثلة للسوق المستهدفة بدلًا من الترجمة سطرًا بسطر. وتُراجَع نتائج الحملات لتحسين الجولة التالية.",
    "قائمة بالكلمات المفتاحية العربية، ومحتوى صفحات ومقالات مُحسَّنًا لمحركات البحث، ونصوصًا لوسائل التواصل الاجتماعي والإعلانات، ورسائل بريدية ونشرات موطَّنة، ومراجعة موجزة للأداء مع توصيات.",
  ),
};

const fr: Details = {
  translation: d(
    "fr",
    "Entreprises, agences et organisations qui ont besoin de leurs contenus anglais, français ou espagnols en arabe : documentation produit et guides d’utilisation, sites web, contrats, rapports, supports de formation et marketing. Les agences de traduction me confient leurs comptes réguliers en tant que linguiste arabe dédié, et les clients directs font appel à moi lorsqu’ils veulent un seul traducteur responsable, du brief à la livraison.",
    "Vous m’envoyez les fichiers en précisant le public, le délai et les éventuels documents de référence. Je confirme le périmètre et le devis, je prépare une base terminologique et une mémoire de traduction dans SDL Trados Studio ou memoQ, je traduis, puis je révise et relis l’arabe (TEP). Des contrôles qualité automatiques repèrent les erreurs de chiffres, de balises et de terminologie avant la livraison.",
    "Les fichiers traduits dans leur format et leur mise en page d’origine (Word, Excel, PowerPoint, XLIFF bilingues et autres formats TAO), ainsi que la mémoire de traduction et le glossaire mis à jour sur demande, pour des mises à jour futures cohérentes et moins coûteuses. Le délai dépend du volume et il est fixé dans le devis.",
  ),
  editing: d(
    "fr",
    "Les clients directs qui veulent faire vérifier une traduction arabe avant publication ou impression, et les agences de traduction qui ont besoin d’un réviseur indépendant, d’un relecteur final ou d’une notation LQA pour leurs projets et prestataires arabes.",
    "Vous m’envoyez la source et la traduction, avec glossaire, guide de style ou documents de référence, et vous précisez le niveau de révision souhaité. Je révise dans votre outil TAO ou en mode suivi des modifications, je vérifie la terminologie, les chiffres, les balises et la cohérence avec des outils de contrôle qualité comme Xbench, puis je relis l’arabe final. Pour la LQA, chaque erreur est consignée avec sa catégorie et sa gravité.",
    "Des fichiers corrigés dans leur format d’origine, avec suivi des modifications ou en version propre, un journal des principales modifications et questions et, pour les agences, une grille et un rapport LQA. Je travaille sur Word, Excel, PowerPoint et PDF, les formats bilingues TAO comme XLIFF, SDLXLIFF et MQXLIFF, les packages de projet Trados et memoQ, ainsi que les fichiers HTML, XML, JSON et les sous-titres SRT.",
  ),
  mtpe: d(
    "fr",
    "Les équipes qui font déjà passer leurs contenus par des moteurs de traduction automatique ou de grands modèles de langage, et qui ont besoin qu’un professionnel vérifie et corrige l’arabe avant de l’utiliser, de le publier ou de le réinjecter dans l’entraînement.",
    "J’examine un échantillon pour évaluer la sortie brute, nous convenons d’une post-édition légère ou complète selon vos consignes, puis je corrige le sens, la terminologie, la grammaire et la fluidité segment par segment dans votre outil TAO ou votre plateforme. Les erreurs récurrentes du moteur sont consignées pour être corrigées à la source.",
    "Des fichiers post-édités au format souhaité, une terminologie cohérente d’un lot à l’autre et, en option, un rapport sur la qualité du moteur. La post-édition légère convient aux contenus internes ; la post-édition complète, à tout ce que lisent vos clients.",
  ),
  transcreation: d(
    "fr",
    "Les marques, équipes marketing et équipes produit qui lancent des campagnes, des applications ou des sites dans les marchés arabophones, là où une traduction littérale paraîtrait étrangère, perdrait un jeu de mots ou casserait la mise en page.",
    "À partir de votre brief, de votre ton de marque et du marché visé, je rédige plusieurs propositions arabes pour les accroches et les messages clés, chacune avec une rétrotraduction et une note expliquant pourquoi elle fonctionne. Pour les applications et les sites, les textes d’interface sont vérifiés selon les limites de caractères et la lecture de droite à gauche, idéalement sur captures d’écran ou sur un site de test.",
    "Des textes arabes prêts à l’emploi, plusieurs options au choix, des rétrotraductions pour vos collègues qui ne lisent pas l’arabe, et un guide du ton et de la voix de marque en arabe pour vos futurs contenus.",
  ),
  consulting: d(
    "fr",
    "Les entreprises qui se préparent à entrer pour la première fois sur les marchés arabophones, et les équipes dont les contenus arabes sont incohérents, lents à produire ou mal reçus par leur public.",
    "Nous commençons par un appel sur vos produits, vos marchés et votre flux de travail actuel. J’examine vos contenus arabes existants ou vos fichiers sources et j’identifie les risques : choix de la variante, terminologie, problèmes d’écriture de droite à gauche, images ou noms sensibles sur le plan culturel, étapes de qualité manquantes. Vous recevez des recommandations concrètes, pas un rapport théorique.",
    "Selon le périmètre : un glossaire et un guide de style, des conseils sur l’arabe standard moderne et les dialectes régionaux, un audit de la préparation de votre site ou de votre application à la localisation, et un processus qualité que votre équipe ou vos prestataires peuvent suivre.",
  ),
  "digital-marketing": d(
    "fr",
    "Les entreprises qui veulent que les clients arabophones les trouvent et leur fassent confiance en ligne, du SaaS et de l’e-commerce aux prestataires de services qui abordent les marchés du Golfe, du Levant ou d’Afrique du Nord.",
    "Je recherche les mots-clés arabes que votre public utilise réellement, puis je rédige ou localise autour d’eux les pages de votre site, vos articles de blog, vos publications sur les réseaux sociaux, vos annonces et vos e-mails, en adaptant le ton et les exemples au marché visé au lieu de traduire ligne par ligne. Les résultats des campagnes sont analysés pour améliorer la suivante.",
    "Une liste de mots-clés arabes, des pages et des articles optimisés pour le référencement, des textes pour les réseaux sociaux et les annonces, des e-mails et newsletters localisés, et un bref bilan de performance avec recommandations.",
  ),
};

const es: Details = {
  translation: d(
    "es",
    "Empresas, agencias y organizaciones que necesitan su contenido en inglés, francés o español en árabe: documentación de producto y manuales de usuario, sitios web, contratos, informes, material de formación y marketing. Las agencias de traducción trabajan conmigo como lingüista de árabe dedicado en sus cuentas recurrentes, y los clientes directos acuden a mí cuando quieren un único traductor responsable desde el encargo hasta la entrega.",
    "Me envías los archivos y me indicas el público, el plazo y cualquier material de referencia. Confirmo el alcance y el presupuesto, preparo una base terminológica y una memoria de traducción en SDL Trados Studio o memoQ, traduzco y después edito y reviso el árabe (TEP). Los controles de calidad automáticos detectan errores de números, etiquetas y terminología antes de la entrega.",
    "Los archivos traducidos en su formato y diseño originales (Word, Excel, PowerPoint, XLIFF bilingües y otros formatos TAO), además de la memoria de traducción y el glosario actualizados si los pides, para que las futuras actualizaciones sean coherentes y cuesten menos. El plazo depende del volumen y se acuerda en el presupuesto.",
  ),
  editing: d(
    "es",
    "Clientes directos que quieren revisar una traducción al árabe antes de publicarla o imprimirla, y agencias de traducción que necesitan un revisor independiente, un corrector final o una puntuación LQA para sus proyectos y proveedores de árabe.",
    "Me envías el original y la traducción, con cualquier glosario, guía de estilo o material de referencia, y me indicas el nivel de revisión que necesitas. Edito en tu herramienta TAO o con control de cambios, compruebo terminología, números, etiquetas y coherencia con herramientas de control de calidad como Xbench, y después reviso el árabe final. En la LQA, cada error se registra con su categoría y su gravedad.",
    "Archivos corregidos en su formato original, con control de cambios o en versión limpia, un registro de los cambios principales y las dudas y, para agencias, una ficha e informe LQA. Trabajo con Word, Excel, PowerPoint y PDF, formatos bilingües TAO como XLIFF, SDLXLIFF y MQXLIFF, paquetes de proyecto de Trados y memoQ, y archivos HTML, XML, JSON y subtítulos SRT.",
  ),
  mtpe: d(
    "es",
    "Equipos que ya procesan su contenido con motores de traducción automática o grandes modelos de lenguaje y necesitan que un profesional revise y corrija el árabe antes de usarlo, publicarlo o devolverlo al entrenamiento.",
    "Reviso una muestra para valorar el resultado en bruto, acordamos una posedición ligera o completa según tus pautas y después corrijo sentido, terminología, gramática y fluidez segmento a segmento en tu herramienta TAO o plataforma. Los errores recurrentes del motor se registran para poder corregirlos en origen.",
    "Archivos poseditados en el formato que necesites, terminología coherente entre lotes y, si quieres, un informe sobre la calidad del motor. La posedición ligera sirve para contenido interno; la completa, para todo lo que vayan a leer tus clientes.",
  ),
  transcreation: d(
    "es",
    "Marcas, equipos de marketing y equipos de producto que lanzan campañas, aplicaciones o sitios web en mercados de habla árabe, donde una traducción literal sonaría extranjera, perdería un juego de palabras o rompería el diseño.",
    "A partir de tu brief, tu voz de marca y el mercado objetivo, redacto varias propuestas en árabe para titulares y mensajes clave, cada una con una retrotraducción y una nota sobre por qué funciona. En aplicaciones y sitios web, los textos de interfaz se revisan según los límites de caracteres y la lectura de derecha a izquierda, idealmente sobre capturas de pantalla o un sitio de pruebas.",
    "Textos en árabe listos para usar, opciones alternativas para elegir, retrotraducciones para los compañeros que no leen árabe y pautas de voz y tono de marca en árabe para futuros contenidos.",
  ),
  consulting: d(
    "es",
    "Empresas que se preparan para entrar por primera vez en mercados de habla árabe y equipos cuyo contenido en árabe es incoherente, lento de producir o no conecta con su público.",
    "Empezamos con una llamada sobre tus productos, mercados y flujo de trabajo actual. Reviso tu contenido en árabe o tus archivos de origen e identifico los riesgos: elección de variante, terminología, problemas de escritura de derecha a izquierda, imágenes o nombres culturalmente sensibles y pasos de calidad que faltan. Recibes recomendaciones prácticas, no un informe teórico.",
    "Según el alcance: un glosario y una guía de estilo, orientación sobre el árabe estándar moderno frente a los dialectos regionales, una revisión de la preparación de tu sitio web o aplicación para la localización y un proceso de calidad que tu equipo o tus proveedores puedan seguir.",
  ),
  "digital-marketing": d(
    "es",
    "Empresas que quieren que los clientes de habla árabe las encuentren y confíen en ellas en internet, desde SaaS y comercio electrónico hasta proveedores de servicios que entran en los mercados del Golfo, el Levante o el norte de África.",
    "Investigo las palabras clave en árabe que tu público busca de verdad y, a partir de ellas, redacto o localizo páginas web, artículos de blog, publicaciones en redes sociales, anuncios y correos, adaptando el tono y los ejemplos al mercado objetivo en lugar de traducir línea por línea. Los resultados de las campañas se revisan para mejorar la siguiente.",
    "Una lista de palabras clave en árabe, contenido de páginas y blog optimizado para buscadores, textos para redes sociales y anuncios, correos y boletines localizados, y una breve revisión de resultados con recomendaciones.",
  ),
};

const all: Record<Locale, Details> = { en, ar, fr, es };

export function getServiceDetails(locale: string): Details {
  return all[locale as Locale] ?? en;
}

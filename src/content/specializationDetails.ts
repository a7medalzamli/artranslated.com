import type { Locale } from "@/i18n";

/**
 * Extra sections on the five specialization pages, focused on translation,
 * SaaS and digital products, and marketing and consulting in each field.
 */
export type SpecSlug = "technical" | "legal" | "financial" | "healthcare" | "audiovisual";
type Block = { title: string; text: string };
type Blocks = [Block, Block, Block];

const TITLES: Record<Locale, [string, string, string]> = {
  en: ["Translation", "SaaS and digital content", "Marketing and consulting"],
  ar: ["الترجمة", "البرمجيات كخدمة والمحتوى الرقمي", "التسويق والاستشارات"],
  fr: ["Traduction", "SaaS et contenus numériques", "Marketing et conseil"],
  es: ["Traducción", "SaaS y contenido digital", "Marketing y consultoría"],
};

const b = (l: Locale, a: string, s: string, m: string): Blocks => [
  { title: TITLES[l][0], text: a },
  { title: TITLES[l][1], text: s },
  { title: TITLES[l][2], text: m },
];

const content: Record<Locale, Record<SpecSlug, Blocks>> = {
  en: {
    technical: b(
      "en",
      "Manuals, specifications, datasheets, and safety and compliance documents, translated by a translator with a degree in environmental engineering. Terminology is managed in SDL Trados termbases, and every file goes through translation, editing and proofreading before delivery.",
      "Technical products are increasingly sold as software. I localize SaaS platforms, dashboards, help centers, knowledge bases and release notes into Arabic, keeping interface terms consistent with your documentation and checking the right-to-left layout.",
      "Product pages, brochures, case studies and trade-show material need to be accurate and persuasive. I adapt them for Arabic-speaking buyers and advise on technical glossaries, style guides and the right variety of Arabic for your market.",
    ),
    legal: b(
      "en",
      "Contracts, agreements, policies, and corporate and regulatory documents, translated with precise legal terminology and consistent defined terms. Files are handled confidentially, and an NDA can be signed before anything is shared.",
      "Software companies entering Arabic-speaking markets need their legal pages in Arabic too: terms of service, privacy policies, cookie notices, license agreements and in-app consent text. I translate them so they read clearly to users and match your product’s interface terminology.",
      "Law firms and legal-tech providers also need persuasive Arabic for practice-area pages, newsletters and marketing material. I adapt this content for Arab audiences and help set up legal glossaries and style guides so future translations stay consistent.",
    ),
    financial: b(
      "en",
      "Financial statements, annual and investor reports, and audit and compliance documents, translated with exact figures and consistent terminology across reporting periods, using SDL Trados termbases and translation memories. Past work includes French to Arabic accounting projects for translation agencies.",
      "Fintech and banking products need clear Arabic in their apps: onboarding flows, account screens, notifications, help-center articles and in-app legal text. I localize them with consistent financial terms and correct right-to-left number and currency formats.",
      "Investor presentations, product pages and campaigns for financial services are adapted to build trust with Arabic-speaking customers, with advice on terminology, tone and regional conventions for each market.",
    ),
    healthcare: b(
      "en",
      "Medical and clinical documentation, patient information, instructions for use and regulatory material, translated accurately and in the right register for clinicians or patients, and checked through translation, editing and proofreading.",
      "Health-tech apps, telehealth platforms and patient portals need Arabic that is clear and reassuring. I localize interfaces, appointment and reminder messages, help content and in-app consent text, keeping medical terms consistent across the product.",
      "Clinics and pharmaceutical and medical-device companies use Arabic marketing to reach patients and professionals. I adapt brochures, websites and campaigns for Arab audiences and advise on terminology and cultural sensitivities in healthcare communication.",
    ),
    audiovisual: b(
      "en",
      "Subtitles, timecoded scripts and dubbing adaptations, translated so the Arabic fits the picture, the timing and the performance, with idioms adapted to feel native to Arab audiences.",
      "Software companies rely on video too: product demos, onboarding tutorials, webinars and help-center videos. I subtitle or adapt their scripts into Arabic using the same terminology as your localized interface, so the video matches what users see on screen.",
      "Ads, brand films and social media videos are transcreated, not just translated, so the message, humor and call to action work for Arabic-speaking viewers. I also advise on dialect versus Modern Standard Arabic for each campaign.",
    ),
  },
  ar: {
    technical: b(
      "ar",
      "ترجمة الأدلة والمواصفات وصحائف البيانات ووثائق السلامة والامتثال على يد مترجم يحمل شهادة في الهندسة البيئية. تُدار المصطلحات عبر قواعد مصطلحات SDL Trados، ويمرّ كل ملف بالترجمة والتحرير والتدقيق قبل التسليم.",
      "تُباع المنتجات التقنية اليوم في صورة برمجيات بشكل متزايد. أوطّن منصات البرمجيات كخدمة ولوحات التحكم ومراكز المساعدة وقواعد المعرفة وملاحظات الإصدار إلى العربية، مع توحيد مصطلحات الواجهة مع وثائقك ومراجعة التصميم من اليمين إلى اليسار.",
      "تحتاج صفحات المنتجات والكتيّبات ودراسات الحالة ومواد المعارض إلى الدقة والإقناع معًا. أكيّفها للمشترين الناطقين بالعربية، وأقدّم الاستشارة حول المسارد التقنية وأدلة الأسلوب ونوع العربية المناسب لسوقك.",
    ),
    legal: b(
      "ar",
      "ترجمة العقود والاتفاقيات والسياسات والوثائق المؤسسية والتنظيمية بمصطلحات قانونية دقيقة وتعريفات موحّدة. تُعامَل الملفات بسرية، ويمكن توقيع اتفاقية عدم إفصاح قبل مشاركة أي شيء.",
      "تحتاج شركات البرمجيات التي تدخل الأسواق الناطقة بالعربية إلى صفحاتها القانونية بالعربية أيضًا: شروط الخدمة، وسياسات الخصوصية، وإشعارات ملفات تعريف الارتباط، واتفاقيات الترخيص، ونصوص الموافقة داخل التطبيق. أترجمها لتكون واضحة للمستخدمين ومتوافقة مع مصطلحات واجهة منتجك.",
      "تحتاج مكاتب المحاماة ومزوّدو التقنيات القانونية أيضًا إلى عربية مقنعة لصفحات مجالات الممارسة والنشرات والمواد التسويقية. أكيّف هذا المحتوى للجمهور العربي، وأساعد في إعداد المسارد القانونية وأدلة الأسلوب لتبقى الترجمات المستقبلية متّسقة.",
    ),
    financial: b(
      "ar",
      "ترجمة القوائم المالية والتقارير السنوية وتقارير المستثمرين ووثائق التدقيق والامتثال بأرقام دقيقة ومصطلحات متّسقة عبر الفترات المالية، باستخدام قواعد مصطلحات SDL Trados وذاكرات الترجمة. ومن أعمالي السابقة مشاريع ترجمة محاسبية من الفرنسية إلى العربية لوكالات ترجمة.",
      "تحتاج منتجات التقنية المالية والخدمات المصرفية إلى عربية واضحة في تطبيقاتها: خطوات التسجيل، وشاشات الحسابات، والإشعارات، ومقالات مركز المساعدة، والنصوص القانونية داخل التطبيق. أوطّنها بمصطلحات مالية موحّدة وتنسيقات صحيحة للأرقام والعملات من اليمين إلى اليسار.",
      "تُكيَّف عروض المستثمرين وصفحات المنتجات وحملات الخدمات المالية لبناء الثقة لدى العملاء الناطقين بالعربية، مع استشارات حول المصطلحات والنبرة والأعراف الإقليمية لكل سوق.",
    ),
    healthcare: b(
      "ar",
      "ترجمة الوثائق الطبية والسريرية ومعلومات المرضى وتعليمات الاستخدام والمواد التنظيمية بدقة وبالأسلوب المناسب للأطباء أو المرضى، مع المراجعة عبر الترجمة والتحرير والتدقيق.",
      "تحتاج تطبيقات التقنية الصحية ومنصات الرعاية عن بُعد وبوابات المرضى إلى عربية واضحة ومطمئنة. أوطّن الواجهات ورسائل المواعيد والتذكير ومحتوى المساعدة ونصوص الموافقة داخل التطبيق، مع توحيد المصطلحات الطبية في المنتج كله.",
      "تستخدم العيادات وشركات الأدوية والأجهزة الطبية التسويق بالعربية للوصول إلى المرضى والمختصين. أكيّف الكتيّبات والمواقع والحملات للجمهور العربي، وأقدّم الاستشارة حول المصطلحات والحساسيات الثقافية في التواصل الصحي.",
    ),
    audiovisual: b(
      "ar",
      "ترجمة الترجمات المرئية والنصوص الموقوتة وتكييف الدبلجة لتتناسب العربية مع الصورة والتوقيت والأداء، مع تكييف التعابير لتبدو أصيلة للجمهور العربي.",
      "تعتمد شركات البرمجيات على الفيديو أيضًا: عروض المنتجات، ودروس البدء، والندوات عبر الإنترنت، ومقاطع مركز المساعدة. أترجمها أو أكيّف نصوصها إلى العربية بالمصطلحات نفسها المستخدمة في واجهتك المُوطَّنة، ليتطابق الفيديو مع ما يراه المستخدم على الشاشة.",
      "تُعاد صياغة الإعلانات والأفلام الترويجية ومقاطع وسائل التواصل الاجتماعي إبداعيًا لا ترجمتها فقط، لتنجح الرسالة والدعابة والدعوة إلى الإجراء لدى المشاهد العربي. كما أقدّم الاستشارة حول اختيار اللهجة أو العربية الفصحى المعاصرة لكل حملة.",
    ),
  },
  fr: {
    technical: b(
      "fr",
      "Manuels, spécifications, fiches techniques, documents de sécurité et de conformité, traduits par un traducteur diplômé en génie de l’environnement. La terminologie est gérée dans des bases terminologiques SDL Trados, et chaque fichier passe par la traduction, la révision et la relecture avant livraison.",
      "Les produits techniques se vendent de plus en plus sous forme de logiciels. Je localise en arabe des plateformes SaaS, tableaux de bord, centres d’aide, bases de connaissances et notes de version, en alignant les termes de l’interface sur votre documentation et en vérifiant la mise en page de droite à gauche.",
      "Pages produits, brochures, études de cas et supports de salon doivent être à la fois exacts et convaincants. Je les adapte pour les acheteurs arabophones et vous conseille sur les glossaires techniques, les guides de style et la variété d’arabe adaptée à votre marché.",
    ),
    legal: b(
      "fr",
      "Contrats, accords, politiques, documents d’entreprise et réglementaires, traduits avec une terminologie juridique précise et des définitions cohérentes. Les fichiers sont traités en toute confidentialité, et un accord de confidentialité peut être signé avant tout partage.",
      "Les éditeurs de logiciels qui abordent les marchés arabophones ont aussi besoin de leurs pages juridiques en arabe : conditions d’utilisation, politiques de confidentialité, bandeaux cookies, contrats de licence et textes de consentement dans l’application. Je les traduis pour qu’ils soient clairs pour les utilisateurs et cohérents avec la terminologie de votre interface.",
      "Les cabinets d’avocats et les acteurs de la legaltech ont aussi besoin d’un arabe convaincant pour leurs pages d’expertise, newsletters et supports marketing. J’adapte ces contenus pour le public arabe et j’aide à mettre en place glossaires juridiques et guides de style pour des traductions futures cohérentes.",
    ),
    financial: b(
      "fr",
      "États financiers, rapports annuels et rapports aux investisseurs, documents d’audit et de conformité, traduits avec des chiffres exacts et une terminologie cohérente d’une période à l’autre, grâce aux bases terminologiques et mémoires de traduction SDL Trados. Mes travaux passés comprennent des projets de traduction comptable du français vers l’arabe pour des agences de traduction.",
      "Les produits fintech et bancaires ont besoin d’un arabe clair dans leurs applications : parcours d’inscription, écrans de compte, notifications, articles du centre d’aide et mentions juridiques. Je les localise avec une terminologie financière cohérente et des formats de nombres et de devises corrects en écriture de droite à gauche.",
      "Présentations aux investisseurs, pages produits et campagnes de services financiers sont adaptées pour gagner la confiance des clients arabophones, avec des conseils sur la terminologie, le ton et les usages régionaux de chaque marché.",
    ),
    healthcare: b(
      "fr",
      "Documentation médicale et clinique, informations destinées aux patients, notices d’utilisation et documents réglementaires, traduits avec exactitude et dans le registre adapté aux cliniciens ou aux patients, puis vérifiés par traduction, révision et relecture.",
      "Les applications de santé, plateformes de téléconsultation et portails patients ont besoin d’un arabe clair et rassurant. Je localise interfaces, messages de rendez-vous et de rappel, contenus d’aide et textes de consentement, avec une terminologie médicale cohérente dans tout le produit.",
      "Cliniques, laboratoires pharmaceutiques et fabricants de dispositifs médicaux utilisent le marketing en arabe pour toucher patients et professionnels. J’adapte brochures, sites et campagnes pour le public arabe et vous conseille sur la terminologie et les sensibilités culturelles de la communication en santé.",
    ),
    audiovisual: b(
      "fr",
      "Sous-titres, scripts minutés et adaptations de doublage, traduits pour que l’arabe s’accorde à l’image, au rythme et au jeu, avec des expressions adaptées pour sonner naturelles au public arabe.",
      "Les éditeurs de logiciels misent aussi sur la vidéo : démonstrations produit, tutoriels de prise en main, webinaires et vidéos du centre d’aide. Je les sous-titre ou j’adapte leurs scripts en arabe avec la même terminologie que votre interface localisée, pour que la vidéo corresponde à ce que l’utilisateur voit à l’écran.",
      "Publicités, films de marque et vidéos pour les réseaux sociaux sont transcréés, et non simplement traduits, pour que le message, l’humour et l’appel à l’action fonctionnent auprès du public arabophone. Je vous conseille aussi sur le choix entre dialecte et arabe standard moderne pour chaque campagne.",
    ),
  },
  es: {
    technical: b(
      "es",
      "Manuales, especificaciones, fichas técnicas y documentos de seguridad y cumplimiento, traducidos por un traductor titulado en ingeniería ambiental. La terminología se gestiona con bases terminológicas de SDL Trados, y cada archivo pasa por traducción, edición y revisión antes de la entrega.",
      "Cada vez más productos técnicos se venden como software. Localizo al árabe plataformas SaaS, paneles, centros de ayuda, bases de conocimiento y notas de versión, manteniendo los términos de la interfaz coherentes con tu documentación y revisando el diseño de derecha a izquierda.",
      "Las páginas de producto, folletos, casos de éxito y materiales para ferias deben ser precisos y convincentes. Los adapto para compradores de habla árabe y te asesoro sobre glosarios técnicos, guías de estilo y la variedad de árabe adecuada para tu mercado.",
    ),
    legal: b(
      "es",
      "Contratos, acuerdos, políticas y documentos corporativos y regulatorios, traducidos con terminología jurídica precisa y definiciones coherentes. Los archivos se tratan con confidencialidad y se puede firmar un acuerdo de confidencialidad antes de compartir nada.",
      "Las empresas de software que entran en mercados de habla árabe también necesitan sus páginas legales en árabe: términos del servicio, políticas de privacidad, avisos de cookies, acuerdos de licencia y textos de consentimiento dentro de la aplicación. Los traduzco para que sean claros para los usuarios y coherentes con la terminología de tu interfaz.",
      "Los despachos de abogados y las empresas legaltech también necesitan un árabe convincente para sus páginas de áreas de práctica, boletines y materiales de marketing. Adapto este contenido para el público árabe y ayudo a crear glosarios jurídicos y guías de estilo para que las futuras traducciones sean coherentes.",
    ),
    financial: b(
      "es",
      "Estados financieros, informes anuales y para inversores, y documentos de auditoría y cumplimiento, traducidos con cifras exactas y terminología coherente entre periodos, con bases terminológicas y memorias de traducción de SDL Trados. Entre mis trabajos anteriores hay proyectos de traducción contable del francés al árabe para agencias de traducción.",
      "Los productos fintech y bancarios necesitan un árabe claro en sus aplicaciones: procesos de alta, pantallas de cuenta, notificaciones, artículos del centro de ayuda y textos legales. Los localizo con terminología financiera coherente y formatos correctos de números y monedas de derecha a izquierda.",
      "Las presentaciones para inversores, páginas de producto y campañas de servicios financieros se adaptan para generar confianza entre los clientes de habla árabe, con asesoramiento sobre terminología, tono y convenciones regionales de cada mercado.",
    ),
    healthcare: b(
      "es",
      "Documentación médica y clínica, información para pacientes, instrucciones de uso y material regulatorio, traducidos con exactitud y en el registro adecuado para profesionales o pacientes, y revisados mediante traducción, edición y revisión.",
      "Las aplicaciones de salud digital, plataformas de telemedicina y portales de pacientes necesitan un árabe claro y tranquilizador. Localizo interfaces, mensajes de citas y recordatorios, contenido de ayuda y textos de consentimiento, con terminología médica coherente en todo el producto.",
      "Clínicas, farmacéuticas y empresas de dispositivos médicos usan el marketing en árabe para llegar a pacientes y profesionales. Adapto folletos, sitios web y campañas para el público árabe y asesoro sobre terminología y sensibilidades culturales en la comunicación sanitaria.",
    ),
    audiovisual: b(
      "es",
      "Subtítulos, guiones con códigos de tiempo y adaptaciones de doblaje, traducidos para que el árabe encaje con la imagen, el ritmo y la interpretación, con expresiones adaptadas para que suenen naturales al público árabe.",
      "Las empresas de software también dependen del vídeo: demostraciones de producto, tutoriales de inicio, seminarios web y vídeos del centro de ayuda. Los subtitulo o adapto sus guiones al árabe con la misma terminología que tu interfaz localizada, para que el vídeo coincida con lo que el usuario ve en pantalla.",
      "Anuncios, vídeos de marca y vídeos para redes sociales se transcrean, no solo se traducen, para que el mensaje, el humor y la llamada a la acción funcionen con el público de habla árabe. También asesoro sobre dialecto o árabe estándar moderno para cada campaña.",
    ),
  },
};

export function getSpecializationDetails(locale: string, slug: SpecSlug): Blocks {
  return (content[locale as Locale] ?? content.en)[slug];
}

import type { HomeContent } from "@/lib/content/home";

/**
 * Translated versions of the editable home content (hero, services cards, why,
 * about, contact) for non-English locales. English is served from the database
 * (admin-editable); these mirror the current English and are translated.
 *
 * ⚠️ If the English home content is edited in the admin panel, update these
 * translations to match.
 */
const ABOUT_IMAGE =
  "https://fyyjtsxqlgkhuznsuqvt.supabase.co/storage/v1/object/public/post-images/site/ee70667c-cf85-4a47-b130-60b6b1ed3e59.jpeg";

const PARTNERS = [
  { src: "/badges/badge-6.jpg", label: "SDL Trados" },
  { src: "/badges/badge-5.jpg", label: "memoQ" },
  { src: "/badges/badge-7.jpg", label: "Protemos" },
  { src: "/badges/badge-8.jpg", label: "Smartcat" },
  { src: "/badges/badge-9.jpg", label: "Wordfast" },
  { src: "/badges/badge-10.jpg", label: "Phase" },
];

export const localizedHome: Record<"ar" | "fr" | "es", HomeContent> = {
  ar: {
    hero: {
      label: "",
      title: "اجعل أعمالك تزدهر في العالم العربي",
      lead: "",
    },
    about: {
      title: "نبذة عني",
      text: "بخبرة تتجاوز 14 عامًا في الترجمة والتسويق الرقمي، أساعد العلامات التجارية على التوسّع في البلدان الناطقة بالعربية عبر التوطين الاحترافي وتحسين محركات البحث التقني. ومتخصص في الترجمة من الإنجليزية والإسبانية والفرنسية إلى العربية، أمزج الدقة اللغوية باستراتيجيات تسويقية فريدة وتحسين محركات البحث لتقديم محتوى يجذب الجمهور ويحقق نموًا عالميًا.",
      image: ABOUT_IMAGE,
    },
    services: {
      eyebrow: "",
      title: "التخصصات",
      items: [
        {
          icon: "chip",
          title: "الترجمة التقنية",
          summary: "مصطلحات دقيقة للهندسة وتقنية المعلومات والتصنيع وأدلة المستخدم — واضحة ومتسقة.",
        },
        {
          icon: "scale",
          title: "القانون",
          summary: "معالجة دقيقة للعقود والاتفاقيات ووثائق الامتثال، مع ضبط صارم للمصطلحات.",
        },
        {
          icon: "finance",
          title: "المال والمصارف",
          summary: "ترجمة التقارير والبيانات والمراسلات المصرفية بمصطلحات دقيقة ومتسقة.",
        },
        {
          icon: "heart",
          title: "الرعاية الصحية والطب",
          summary: "ترجمة دقيقة للأجهزة الطبية والمستحضرات الدوائية والوثائق السريرية وسجلات المرضى.",
        },
        {
          icon: "robot",
          title: "التحرير اللاحق للترجمة الآلية (MTPE)",
          summary: "تحرير الترجمة الآلية إلى العربية لترقى إلى الجودة البشرية — مع تصحيح الدقة والنبرة والمصطلحات.",
        },
        {
          icon: "globe",
          title: "توطين المواقع والتسويق",
          summary: "تكييف المحتوى الرقمي وواجهات المستخدم والتجارة الإلكترونية ليُقرأ بشكل طبيعي للسوق الناطق بالعربية.",
        },
      ],
    },
    why: {
      eyebrow: "",
      title: "لماذا تتعاون معي؟",
      intro: "الوصول إلى السوق العربية يتطلب ذكاءً ثقافيًا ودقة تقنية وموثوقية، لا مجرد لغة.",
      items: [
        { title: "ضمان جودة دقيق", text: "مراجعة كاملة قوامها الترجمة والتحرير والتدقيق (TEP) تحافظ على اتساق الجودة والنبرة." },
        { title: "أدوات بمعايير الصناعة", text: "ذاكرات الترجمة وقواعد المصطلحات في SDL Trados تضمن الاتساق والكفاءة." },
        { title: "دقة ثقافية ومصطلحية", text: "يُكيَّف المحتوى ليُقرأ بشكل طبيعي وصحيح للجمهور المستهدف." },
        { title: "التسليم في الموعد", text: "تُدار المشاريع بكفاءة وتُسلَّم في الموعد المتفق عليه." },
        { title: "تواصل واضح", text: "ردود سريعة وإجابات واضحة ليمضي مشروعك قدمًا دون تأخير." },
        { title: "السرية افتراضيًا", text: "تُعامَل الملفات بأمان، مع إمكانية توقيع اتفاقية عدم إفصاح قبل مشاركة أي شيء." },
      ],
    },
    contact: {
      eyebrow: "",
      title: "احصل على عرض سعر مجاني",
      intro: "أخبرني عن مشروعك وسأرد عليك بعرض سعر واضح.",
    },
    partners: PARTNERS,
  },
  fr: {
    hero: {
      label: "",
      title: "Faites prospérer votre entreprise dans le monde arabophone",
      lead: "",
    },
    about: {
      title: "À propos de moi",
      text: "Avec plus de 14 ans d'expérience en traduction et en marketing digital, j'aide les marques à se développer dans les pays arabophones grâce à une localisation experte et au SEO technique. Spécialisé dans la traduction de l'anglais, de l'espagnol et du français vers l'arabe, j'allie précision linguistique, stratégies marketing uniques et SEO pour produire un contenu qui engage le public et stimule la croissance mondiale.",
      image: ABOUT_IMAGE,
    },
    services: {
      eyebrow: "",
      title: "Spécialisations",
      items: [
        {
          icon: "chip",
          title: "Traduction technique",
          summary: "Terminologie précise pour l'ingénierie, l'informatique, l'industrie et les manuels d'utilisation — claire et cohérente.",
        },
        {
          icon: "scale",
          title: "Droit",
          summary: "Traitement rigoureux des contrats, accords et documents de conformité, avec un contrôle terminologique strict.",
        },
        {
          icon: "finance",
          title: "Finance et banque",
          summary: "Rapports, états et communications bancaires traduits avec une terminologie précise et cohérente.",
        },
        {
          icon: "heart",
          title: "Santé et médical",
          summary: "Traduction précise des dispositifs médicaux, produits pharmaceutiques, documents cliniques et dossiers patients.",
        },
        {
          icon: "robot",
          title: "Post-édition de traduction automatique (MTPE)",
          summary: "Édition de la traduction automatique vers l'arabe à un niveau humain — en corrigeant nuance, ton et terminologie.",
        },
        {
          icon: "globe",
          title: "Localisation de sites web et marketing",
          summary: "Adapter le contenu numérique, l'UI/UX et l'e-commerce pour une lecture naturelle sur le marché arabophone.",
        },
      ],
    },
    why: {
      eyebrow: "",
      title: "Pourquoi travailler avec moi ?",
      intro: "Atteindre le marché arabe exige une intelligence culturelle, une précision technique et de la fiabilité , pas seulement la langue.",
      items: [
        { title: "Assurance qualité méticuleuse", text: "Un processus complet de traduction, révision et relecture (TEP) garantit une qualité et un ton homogènes." },
        { title: "Outils aux normes du secteur", text: "Les mémoires de traduction et bases terminologiques SDL Trados garantissent cohérence et efficacité." },
        { title: "Exactitude culturelle et terminologique", text: "Le contenu est adapté pour se lire naturellement et correctement pour le public cible." },
        { title: "Livraison dans les délais", text: "Les projets sont gérés efficacement et livrés dans les délais convenus." },
        { title: "Communication claire", text: "Des réponses rapides et claires pour que vos projets avancent sans retard." },
        { title: "Confidentialité par défaut", text: "Les fichiers sont traités en toute sécurité, avec un accord de confidentialité possible avant tout partage." },
      ],
    },
    contact: {
      eyebrow: "",
      title: "Obtenez un devis gratuit",
      intro: "Parlez-moi de votre projet et je vous répondrai avec un devis clair.",
    },
    partners: PARTNERS,
  },
  es: {
    hero: {
      label: "",
      title: "Haz crecer tu negocio en el mundo de habla árabe",
      lead: "",
    },
    about: {
      title: "Acerca de mí",
      text: "Con más de 14 años de experiencia en traducción y marketing digital, ayudo a las marcas a expandirse en los países de habla árabe mediante una localización experta y SEO técnico. Especializado en la traducción del inglés, el español y el francés al árabe, combino la precisión lingüística con estrategias de marketing únicas y SEO para ofrecer contenido que capta al público e impulsa el crecimiento global.",
      image: ABOUT_IMAGE,
    },
    services: {
      eyebrow: "",
      title: "Especializaciones",
      items: [
        {
          icon: "chip",
          title: "Traducción técnica",
          summary: "Terminología precisa para ingeniería, TI, fabricación y manuales de usuario — clara y coherente.",
        },
        {
          icon: "scale",
          title: "Derecho",
          summary: "Tratamiento cuidadoso de contratos, acuerdos y documentación de cumplimiento, con un control terminológico estricto.",
        },
        {
          icon: "finance",
          title: "Finanzas y banca",
          summary: "Informes, estados y comunicaciones bancarias traducidos con terminología precisa y coherente.",
        },
        {
          icon: "heart",
          title: "Salud y medicina",
          summary: "Traducción precisa de dispositivos médicos, productos farmacéuticos, documentación clínica y registros de pacientes.",
        },
        {
          icon: "robot",
          title: "Posedición de traducción automática (MTPE)",
          summary: "Edición de la traducción automática al árabe a calidad humana — corrigiendo matiz, tono y terminología.",
        },
        {
          icon: "globe",
          title: "Localización de sitios web y marketing",
          summary: "Adaptar el contenido digital, la UI/UX y el comercio electrónico para que se lea con naturalidad en el mercado de habla árabe.",
        },
      ],
    },
    why: {
      eyebrow: "",
      title: "¿Por qué trabajar conmigo?",
      intro: "Llegar al mercado árabe requiere inteligencia cultural, precisión técnica y fiabilidad, no solo idioma.",
      items: [
        { title: "Control de calidad meticuloso", text: "Un proceso completo de traducción, edición y revisión (TEP) mantiene la calidad y el tono coherentes." },
        { title: "Herramientas estándar del sector", text: "Las memorias de traducción y bases terminológicas de SDL Trados garantizan coherencia y eficiencia." },
        { title: "Precisión cultural y terminológica", text: "El contenido se adapta para que se lea con naturalidad y corrección para el público objetivo." },
        { title: "Entrega puntual", text: "Los proyectos se gestionan con eficacia y se entregan en el plazo acordado." },
        { title: "Comunicación clara", text: "Respuestas rápidas y claras para que tus proyectos avancen sin retrasos." },
        { title: "Confidencialidad por defecto", text: "Los archivos se tratan de forma segura, con un acuerdo de confidencialidad disponible antes de compartir nada." },
      ],
    },
    contact: {
      eyebrow: "",
      title: "Obtén un presupuesto gratuito",
      intro: "Cuéntame sobre tu proyecto y te responderé con un presupuesto claro.",
    },
    partners: PARTNERS,
  },
};

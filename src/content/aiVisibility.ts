import type { Locale } from "@/i18n";

/** "AI search visibility" section on the Digital Marketing page, in four languages. */
export type AiVisibility = {
  title: string;
  intro: string;
  roles: string[];
  cards: { abbr: string; name: string; text: string }[];
};

const content: Record<Locale, AiVisibility> = {
  en: {
    title: "AI search visibility",
    intro: "Helping businesses become visible, citable and competitive in the age of AI.",
    roles: ["Researcher", "Digital marketing strategist", "Web developer"],
    cards: [
      {
        abbr: "SEO",
        name: "Search engine optimization",
        text: "Rank in Google and Bing with the keywords your audience actually uses, on fast, technically sound pages.",
      },
      {
        abbr: "AEO",
        name: "Answer engine optimization",
        text: "Content structured as clear questions and answers, so search features and voice assistants can use it as the answer.",
      },
      {
        abbr: "GEO",
        name: "Generative engine optimization",
        text: "Make your expertise easy for AI search tools to find, understand and cite when they generate answers.",
      },
      {
        abbr: "LLMO",
        name: "Large language model optimization",
        text: "Give AI models consistent facts about your brand, services and credentials through structured data and trusted profiles.",
      },
      {
        abbr: "AI",
        name: "AI search strategy",
        text: "An audit of how your business appears in AI answers today, and a plan that puts the highest-impact fixes first.",
      },
    ],
  },
  ar: {
    title: "الظهور في البحث بالذكاء الاصطناعي",
    intro: "أساعد الشركات على أن تكون ظاهرة وموثوقة كمصدر وقادرة على المنافسة في عصر الذكاء الاصطناعي.",
    roles: ["باحث", "خبير استراتيجيات التسويق الرقمي", "مطوّر مواقع"],
    cards: [
      {
        abbr: "SEO",
        name: "تحسين محركات البحث",
        text: "تصدّر نتائج Google وBing بالكلمات التي يبحث بها جمهورك فعلًا، على صفحات سريعة وسليمة تقنيًا.",
      },
      {
        abbr: "AEO",
        name: "تحسين محركات الإجابة",
        text: "محتوى منظّم في صورة أسئلة وأجوبة واضحة، لتستخدمه ميزات البحث والمساعدات الصوتية إجابةً مباشرة.",
      },
      {
        abbr: "GEO",
        name: "تحسين محركات البحث التوليدية",
        text: "اجعل خبرتك سهلة الاكتشاف والفهم والاستشهاد بها لدى أدوات البحث بالذكاء الاصطناعي عند توليد الإجابات.",
      },
      {
        abbr: "LLMO",
        name: "تحسين الظهور في النماذج اللغوية الكبيرة",
        text: "زوّد نماذج الذكاء الاصطناعي بمعلومات متّسقة عن علامتك وخدماتك ومؤهلاتك عبر البيانات المنظّمة والملفات الموثوقة.",
      },
      {
        abbr: "AI",
        name: "استراتيجية البحث بالذكاء الاصطناعي",
        text: "تقييم لظهور شركتك في إجابات الذكاء الاصطناعي اليوم، وخطة تبدأ بالتحسينات الأعلى أثرًا.",
      },
    ],
  },
  fr: {
    title: "Visibilité dans la recherche IA",
    intro: "J’aide les entreprises à devenir visibles, citables et compétitives à l’ère de l’IA.",
    roles: ["Chercheur", "Stratège en marketing digital", "Développeur web"],
    cards: [
      {
        abbr: "SEO",
        name: "Optimisation pour les moteurs de recherche",
        text: "Positionnez-vous sur Google et Bing avec les mots-clés que votre public utilise vraiment, sur des pages rapides et techniquement solides.",
      },
      {
        abbr: "AEO",
        name: "Optimisation pour les moteurs de réponse",
        text: "Des contenus structurés en questions et réponses claires, que les fonctionnalités de recherche et les assistants vocaux peuvent reprendre comme réponse.",
      },
      {
        abbr: "GEO",
        name: "Optimisation pour les moteurs génératifs",
        text: "Rendez votre expertise facile à trouver, à comprendre et à citer par les outils de recherche IA lorsqu’ils génèrent des réponses.",
      },
      {
        abbr: "LLMO",
        name: "Optimisation pour les grands modèles de langage",
        text: "Donnez aux modèles d’IA des informations cohérentes sur votre marque, vos services et vos références grâce aux données structurées et aux profils de confiance.",
      },
      {
        abbr: "IA",
        name: "Stratégie de recherche IA",
        text: "Un audit de la présence de votre entreprise dans les réponses de l’IA aujourd’hui, et un plan qui traite d’abord les actions les plus efficaces.",
      },
    ],
  },
  es: {
    title: "Visibilidad en la búsqueda con IA",
    intro: "Ayudo a las empresas a ser visibles, citables y competitivas en la era de la IA.",
    roles: ["Investigador", "Estratega de marketing digital", "Desarrollador web"],
    cards: [
      {
        abbr: "SEO",
        name: "Optimización para motores de búsqueda",
        text: "Posiciónate en Google y Bing con las palabras clave que tu público usa de verdad, en páginas rápidas y técnicamente sólidas.",
      },
      {
        abbr: "AEO",
        name: "Optimización para motores de respuesta",
        text: "Contenido estructurado en preguntas y respuestas claras, para que las funciones de búsqueda y los asistentes de voz lo usen como respuesta.",
      },
      {
        abbr: "GEO",
        name: "Optimización para motores generativos",
        text: "Haz que tu experiencia sea fácil de encontrar, entender y citar para las herramientas de búsqueda con IA cuando generan respuestas.",
      },
      {
        abbr: "LLMO",
        name: "Optimización para grandes modelos de lenguaje",
        text: "Da a los modelos de IA datos coherentes sobre tu marca, tus servicios y tus credenciales mediante datos estructurados y perfiles de confianza.",
      },
      {
        abbr: "IA",
        name: "Estrategia de búsqueda con IA",
        text: "Una auditoría de cómo aparece tu empresa hoy en las respuestas de la IA y un plan que empieza por las mejoras de mayor impacto.",
      },
    ],
  },
};

export function getAiVisibility(locale: string): AiVisibility {
  return content[locale as Locale] ?? content.en;
}

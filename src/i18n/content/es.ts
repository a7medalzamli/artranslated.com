import type { SiteContent } from "./index";

/** Page body content — Spanish. */
const es: SiteContent = {
  common: {
    letsTalk: "Hablemos",
    exploreServices: "Explorar servicios",
    homeCrumb: "Inicio",
    seeProcess: "Ver el proceso",
    viewServices: "Ver servicios",
    confidentiality: "Confidencialidad",
  },
  home: {
    languagesTitle: "Idiomas con los que trabajo",
    langNames: { en: "Inglés", ar: "Árabe", fr: "Francés", es: "Español" },
    pastExperienceEyebrow: "Experiencia",
    pastExperienceTitle: "Una trayectoria en la que confían las agencias",
    stats: {
      years: "Años de experiencia",
      words: "Palabras traducidas",
      projects: "Proyectos entregados",
      languages: "Idiomas de trabajo",
    },
    availabilityEyebrow: "Disponibilidad",
    availabilityTitle: "Actualmente acepto nuevos proyectos",
    availability: {
      days: "A diario — de lunes a domingo",
      palestine: "Palestina",
      yourTime: "Tu hora",
      picker: "Consulta estos horarios en tu país / zona horaria:",
      nextDay: "(día siguiente)",
    },
  },
  about: {
    eyebrow: "Acerca de",
    title: "Acerca de Ahmed Alzamli",
    description:
      "Traductor y localizador especializado que ayuda a agencias y empresas a llegar al público de habla árabe e inglesa con precisión, matiz cultural y entregas fiables.",
    crumb: "Acerca de",
    paragraphs: [
      "Traduzco y localizo sitios web y productos digitales al inglés y al árabe, y traduzco documentación especializada del inglés, el francés y el español al árabe. Mi objetivo es sencillo: contenido que se lea como si se hubiera escrito para su público, nunca una mera conversión palabra por palabra.",
      "Mi formación combina la ingeniería ambiental y un diploma en marketing, por eso la precisión técnica y una redacción persuasiva y natural conviven con facilidad en mi trabajo. Esa combinación es especialmente valiosa en la localización de sitios web, la redacción de interfaces y la transcreación, donde la precisión por sí sola no basta: el mensaje tiene que calar.",
      "Cada proyecto sigue un flujo de trabajo riguroso de Traducción–Edición–Revisión (TEP) con memorias de traducción de SDL Trados y bases terminológicas aprobadas por el cliente, de modo que la terminología se mantenga coherente y la calidad se integre desde el principio. Los archivos se tratan con confidencialidad, con un acuerdo de confidencialidad disponible antes de compartir nada.",
    ],
    ctaTitle: "Hablemos de tu proyecto",
    ctaDescription: "Cuéntame en qué trabajas y te responderé con un presupuesto claro y honesto.",
    howItWorks: "¿Cómo funciona?",
  },
  specializations: {
    eyebrow: "Especializaciones",
    title: "Mis campos de especialización",
    description:
      "Experiencia profunda y especializada en los ámbitos donde la precisión y la terminología importan más.",
    crumb: "Especializaciones",
    ctaTitle: "¿Tienes un proyecto en alguno de estos campos?",
    ctaDescription: "Cuéntame en qué trabajas y te responderé con un presupuesto claro y honesto.",
  },
  services: {
    title: "Servicios de traducción",
    description:
      "Del inglés, el francés y el español al árabe, a través de cinco especializaciones, con un proceso definido y las herramientas adecuadas.",
    crumb: "Servicios",
    specializationsTitle: "Especializaciones",
    specializationsIntro:
      "Cada especialización tiene su propia página que explica qué incluye y cómo se realiza el trabajo.",
    additionalTitle: "Servicios adicionales",
    additionalIntro:
      "Más allá de la traducción, estos servicios acompañan los proyectos de localización e IA de principio a fin.",
    ctaTitle: "¿No sabes qué servicio encaja?",
    ctaDescription: "Describe tu proyecto y te recomendaré el enfoque adecuado con un presupuesto claro.",
  },
  process: {
    eyebrow: "Proceso y control de calidad",
    title: "¿Cómo funciona?",
    description:
      "La calidad se integra mediante un flujo de trabajo definido, no se añade al final. Así es exactamente cómo se gestiona tu proyecto, paso a paso.",
    crumb: "¿Cómo funciona?",
    tepTitle: "El flujo TEP",
    tepIntro:
      "Cada proyecto pasa por Traducción, Edición y Revisión, con la terminología y el control de calidad alrededor.",
    steps: [
      {
        title: "Preparación y terminología",
        description:
          "Analizar el texto de origen, confirmar o crear un glosario y una base terminológica, y configurar el proyecto en SDL Trados con la memoria de traducción pertinente.",
      },
      {
        title: "Traducción",
        description:
          "Traducir con control terminológico y el apoyo de la memoria de traducción, conservando el significado, el tono y la coherencia.",
      },
      {
        title: "Edición",
        description:
          "Comparar la traducción con el origen en cuanto a exactitud, integridad y coherencia, afinando la terminología y el estilo.",
      },
      {
        title: "Revisión",
        description:
          "Leer el árabe por sí solo en cuanto a lengua, fluidez, formato y tipografía, detectando lo que una revisión bilingüe puede pasar por alto.",
      },
      {
        title: "Controles de calidad y entrega",
        description:
          "Ejecutar controles de calidad automatizados (terminología, números, etiquetas y coherencia), resolver cualquier aviso y entregar en el formato requerido.",
      },
    ],
    qaTitle: "Política de aseguramiento de la calidad",
    qaParagraphs: [
      "El aseguramiento de la calidad combina comprobaciones automatizadas con el criterio humano. Las comprobaciones automatizadas en SDL Trados señalan incoherencias terminológicas y errores de números y etiquetas; una fase humana de edición y revisión garantiza que el árabe se lea con naturalidad y exactitud.",
      "Las decisiones terminológicas se registran en glosarios y bases terminológicas para reutilizarlas, y las memorias de traducción mantienen la coherencia del contenido actualizado o repetido.",
    ],
    toolsTitle: "Herramientas",
    tools: [
      {
        name: "SDL Trados Studio",
        text: "el entorno TAO central para la traducción y el control de calidad",
      },
      { name: "Memorias de traducción", text: "coherencia en documentos extensos y actualizados" },
      {
        name: "Glosarios y bases terminológicas",
        text: "terminología controlada y aprobada por el cliente",
      },
    ],
    ctaTitle: "¿Quieres este nivel de cuidado en tu proyecto?",
    ctaDescription: "Cuéntame en qué trabajas y te explicaré exactamente cómo se gestionaría.",
  },
  contact: {
    title: "Contacto y solicitud de presupuesto",
    description: "Cuéntame sobre tu proyecto y te responderé con un presupuesto claro.",
    crumb: "Contacto",
    directIntro: "¿Prefieres un contacto directo? Escribe a",
    directOr: "o llama al",
    calloutStrong: "Por favor, no envíes archivos confidenciales todavía.",
    calloutText:
      "Este formulario es solo para los detalles del proyecto. Espera a que hayamos acordado las condiciones —y un acuerdo de confidencialidad, si lo deseas— antes de compartir documentos sensibles. Consulta la",
    calloutLink: "página de confidencialidad",
  },
  confidentiality: {
    title: "Confidencialidad y seguridad de los datos",
    description:
      "Para los materiales jurídicos, financieros y comerciales, la discreción no es opcional. Así se protegen tus archivos.",
    crumb: "Confidencialidad",
    ndaTitle: "Acuerdos de confidencialidad antes de abrir ningún archivo",
    ndaText:
      "Trabajo bajo estricta confidencialidad y estoy dispuesto a firmar un acuerdo de confidencialidad antes de ver los archivos de un proyecto. Si tienes tu propio acuerdo, con gusto lo reviso y lo firmo; si no, se puede preparar rápidamente para que compartas los materiales con confianza.",
    transfersTitle: "Transferencias seguras",
    transfersText:
      "Los archivos se reciben y se devuelven por canales seguros, no por archivos adjuntos de correo abiertos y sin protección.",
    storageTitle: "Almacenamiento y tratamiento",
    storageText:
      "Los archivos de trabajo se almacenan con cuidado y el acceso se limita a lo que el proyecto requiere.",
    retentionTitle: "Conservación de los datos",
    retentionText:
      "Los archivos se conservan solo el tiempo necesario para el proyecto y cualquier seguimiento acordado, y luego se eliminan.",
    ctaTitle: "¿Listo para compartir tu proyecto de forma segura?",
    ctaDescription: "Se puede firmar un acuerdo de confidencialidad antes de que envíes un solo archivo.",
  },
  cards: {
    specializations: [
      {
        title: "Técnica",
        summary:
          "Documentación de ingeniería, manuales y especificaciones — con una formación en ingeniería ambiental y un control terminológico riguroso.",
      },
      {
        title: "Jurídica",
        summary:
          "Contratos, cumplimiento y documentación jurídica, tratados con estricta confidencialidad y acuerdo de confidencialidad.",
      },
      {
        title: "Financiera",
        summary:
          "Informes, estados y comunicaciones financieras traducidos con terminología precisa y coherente.",
      },
      {
        title: "Salud",
        summary:
          "Documentación médica y sanitaria traducida con exactitud, claridad y un registro adecuado.",
      },
      {
        title: "Audiovisual",
        summary:
          "Subtitulado, transcreación y adaptación de doblaje con una sincronización labial cuidada para el público árabe.",
      },
    ],
    additional: [
      {
        title: "Posedición de traducción automática (MTPE)",
        summary:
          "Edición de la traducción automática a calidad humana — corrigiendo exactitud, terminología y estilo manteniendo plazos eficientes.",
      },
      {
        title: "Transcreación y textos de interfaz",
        summary:
          "Adaptar los textos de marketing y de interfaz de producto para que se lean con naturalidad en árabe, preservando intención, tono y conversión — con criterio de marketing.",
      },
      {
        title: "Pruebas de producto digital",
        summary:
          "Revisar aplicaciones e interfaces localizadas en contexto para detectar problemas de maquetación, truncamiento y usabilidad antes del lanzamiento.",
      },
      {
        title: "Anotación y evaluación de datos de IA (RLHF)",
        summary:
          "Evaluar y clasificar las salidas en árabe generadas por IA, corregir errores y dar retroalimentación estructurada para mejorar la calidad y la seguridad del modelo.",
      },
      {
        title: "Adaptación de doblaje con sincronización labial",
        summary:
          "Adaptar los guiones con código de tiempo y ajustar el número de sílabas en árabe para que coincidan con los movimientos labiales en pantalla, conservando el significado y la emoción originales.",
      },
    ],
  },
};

export default es;

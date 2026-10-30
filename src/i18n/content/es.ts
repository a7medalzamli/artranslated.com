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
    pastExperienceEyebrow: "Experiencia previa",
    pastExperienceTitle: "Una trayectoria en la que confían las agencias",
    stats: {
      years: "Años de experiencia",
      words: "Palabras traducidas",
      projects: "Proyectos entregados",
      languages: "Idiomas de trabajo",
    },
    statValues: {
      years: { value: 14, suffix: "+" },
      words: { value: 4500000, suffix: "+" },
      projects: { value: 270, suffix: "+" },
      languages: { value: 4, suffix: "" },
    },
    availabilityEyebrow: "Disponibilidad",
    availabilityTitle: "Actualmente acepto nuevos proyectos",
    availability: {
      days: "A diario — de lunes a domingo",
      displayZone: "Estados Unidos (hora del Este)",
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
      "Traduzco y localizo sitios web y productos digitales al inglés y al árabe, y traduzco documentación especializada del inglés, el francés y el español al árabe. Mi objetivo es sencillo: contenido que se lea como si se hubiera escrito para tu público, nunca una mera conversión palabra por palabra.",
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
      "Del inglés, el francés y el español al árabe, a través de nueve especializaciones, con un proceso definido y las herramientas adecuadas.",
    intro:
      "Del inglés, el francés y el español al árabe, a través de nueve especializaciones, con un proceso definido y las herramientas adecuadas.",
    crumb: "Servicios",
    specializationsTitle: "Especializaciones",
    specializationsIntro:
      "Cada especialización tiene su propia página que explica qué incluye y cómo se realiza el trabajo.",
    translationTitle: "Traducción",
    translationSummary:
      "Traducción humana profesional del inglés, el francés y el español al árabe — precisa, natural y coherente con tu terminología, para documentos, sitios web y software.",
    consultingTitle: "Consultoría",
    consultingSummary:
      "Consultoría: asesoramiento para entrar en los mercados de habla árabe, creación de glosarios y guías de estilo, y elección del flujo de trabajo, las herramientas y el proceso de calidad adecuados.",
    marketingTitle: "Marketing digital",
    marketingSummary:
      "SEO en árabe, redes sociales y contenidos de campaña para llegar al público árabe — combinando localización y experiencia en marketing para generar tráfico y conversiones.",
    additionalTitle: "Servicios adicionales",
    additionalIntro:
      "Más allá de la traducción, estos servicios acompañan los proyectos de localización e IA de principio a fin.",
    ctaTitle: "¿No sabes qué servicio encaja?",
    ctaDescription: "Describe tu proyecto y te recomendaré el enfoque adecuado con un presupuesto claro.",
  },
  process: {
    eyebrow: "Proceso y control de calidad",
    title: "¿Cómo funciona?",
    description: "",
    crumb: "¿Cómo funciona?",
    tepTitle: "El flujo TEP",
    tepIntro:
      "Cada proyecto pasa por Traducción, Edición y Revisión, con la terminología y el control de calidad alrededor.",
    workflowSteps: [
      {
        title: "Preparación y terminología",
        description:
          "Analizar el original y preparar glosarios y memoria de traducción.",
      },
      {
        title: "Traducción",
        description:
          "Traducir con terminología coherente, conservando sentido y tono.",
      },
      {
        title: "Edición",
        description:
          "Revisar la traducción frente al original.",
      },
      {
        title: "Revisión",
        description:
          "Pulir el árabe: fluidez, estilo y formato.",
      },
      {
        title: "Controles de calidad y entrega",
        description:
          "Controles de calidad finales y entrega en tu formato.",
      },
    ],
    qaTitle: "Política de aseguramiento de la calidad",
    qaParagraphs: [
      "El aseguramiento de la calidad combina comprobaciones automatizadas con el criterio humano. Las comprobaciones automatizadas en SDL Trados señalan incoherencias terminológicas y errores de números y etiquetas; una fase humana de edición y revisión garantiza que el árabe se lea con naturalidad y exactitud.",
      "Las decisiones terminológicas se registran en glosarios y bases terminológicas para reutilizarlas, y las memorias de traducción mantienen la coherencia del contenido actualizado o repetido.",
    ],
    toolsTitle: "Herramientas",
    toolList: [
      {
        name: "Herramientas de traducción asistida (TAO)",
        text: "SDL Trados Studio, memoQ, Wordfast y Xbench para una terminología coherente, memorias de traducción y controles de calidad",
      },
      {
        name: "Microsoft Office",
        text: "archivos de Word, Excel y PowerPoint traducidos y entregados con su diseño y formato originales",
      },
      {
        name: "Software de marketing",
        text: "herramientas de SEO, analítica y redes sociales para la investigación de palabras clave, la planificación de contenidos y el seguimiento de campañas",
      },
    ],
    ctaTitle: "¿Quieres este nivel de cuidado en tu proyecto?",
    ctaDescription: "Cuéntame en qué trabajas y te explicaré exactamente cómo se gestionaría.",
  },
  contact: {
    title: "Contacto y solicitud de presupuesto",
    description: "Cuéntame sobre tu proyecto y te responderé con un presupuesto claro.",
    lead: "Compárteme algunos detalles de tu proyecto, idiomas, tema y plazo, y te responderé con un presupuesto claro y a tu medida.",
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
  serviceDetail: {
    eyebrow: "Especialización",
    technical: {
      title: "Traducción técnica al árabe",
      description:
        "Documentación de ingeniería e industrial traducida por alguien que entiende el tema, no solo las palabras.",
      crumb: "Técnica",
      s1Title: "Entender el tema, no solo el idioma",
      s1p1: "Una formación en ingeniería ambiental permite leer los textos técnicos de origen como el autor pretendía: los conceptos, las unidades y las normas detrás de la terminología resultan familiares, de modo que el árabe se lee correctamente para los especialistas del campo.",
      s1p2: "La coherencia se garantiza con SDL Trados Studio: los glosarios y bases terminológicas del proyecto mantienen uniformes los términos clave, y las memorias de traducción mantienen alineados los documentos extensos o actualizados con frecuencia de una versión a otra.",
      s2Title: "Qué traduzco",
      s2List: [
        "Manuales de ingeniería, guías de usuario y procedimientos operativos",
        "Especificaciones técnicas y fichas de datos",
        "Informes ambientales y de ingeniería",
        "Documentación de seguridad, normas y cumplimiento",
        "Documentación de productos y equipos",
      ],
      s3Title: "Servicios técnicos relacionados",
      s3Intro: "Los proyectos técnicos suelen combinar la traducción con:",
      s3List: [
        "Posedición de traducción automática (MTPE): llevar la salida automática a calidad humana manteniendo plazos eficientes.",
        "Pruebas de producto digital: revisar las interfaces localizadas en contexto para detectar problemas de maquetación, truncamiento y usabilidad.",
        "Anotación y evaluación de datos de IA (RLHF): evaluar y mejorar la salida en árabe generada por IA.",
      ],
      ctaTitle: "¿Tienes documentación técnica para traducir?",
      ctaDescription:
        "Comparte la combinación de idiomas, el área temática y el plazo para un presupuesto claro.",
    },
    legal: {
      title: "Traducción jurídica al árabe",
      description:
        "Contratos y documentación jurídica traducidos con precisión y tratados con la confidencialidad que el material exige.",
      crumb: "Jurídica",
      s1Title: "Precisión y confidencialidad",
      s1p1: "Los textos jurídicos no dejan lugar a la ambigüedad: la terminología, la estructura y el significado deben trasladarse con exactitud. Cada proyecto utiliza las bases terminológicas de SDL Trados para que los términos definidos se mantengan coherentes dentro de un documento y entre documentos relacionados.",
      s1p2: "El material jurídico es sensible por naturaleza. Los archivos se tratan con estricta confidencialidad, se transfieren de forma segura, y estoy dispuesto a firmar un acuerdo de confidencialidad antes de abrir ningún archivo.",
      s2Title: "Qué traduzco",
      s2List: [
        "Contratos y acuerdos",
        "Términos y condiciones, políticas y documentos de cumplimiento",
        "Documentación corporativa y regulatoria",
        "Correspondencia y materiales jurídicos de apoyo",
      ],
      ctaTitle: "¿Necesitas traducir documentos jurídicos con confidencialidad?",
      ctaDescription:
        "Dime el alcance y el plazo: se puede firmar un acuerdo de confidencialidad antes de compartir nada.",
    },
    financial: {
      title: "Traducción financiera al árabe",
      description:
        "Documentos financieros traducidos con la exactitud, la discreción y la coherencia terminológica que exigen las cifras.",
      crumb: "Financiera",
      s1Title: "Exactitud donde importan tanto las cifras como las palabras",
      s1p1: "Los documentos financieros combinan cifras exactas con un lenguaje cuidadosamente elegido. La terminología se mantiene coherente con las bases terminológicas y memorias de traducción de SDL Trados, de modo que los términos recurrentes y las expresiones estándar se mantienen uniformes entre periodos de reporte y conjuntos de documentos.",
      s1p2: "El material financiero se trata como confidencial: transferencias seguras, manejo cuidadoso y disposición a firmar un acuerdo de confidencialidad antes de abrir ningún archivo.",
      s2Title: "Qué traduzco",
      s2List: [
        "Informes y estados financieros",
        "Comunicaciones a inversores y comunicaciones corporativas",
        "Documentación de auditoría y cumplimiento",
        "Presentaciones y materiales de marketing financiero",
      ],
      ctaTitle: "¿Tienes documentos financieros para traducir?",
      ctaDescription:
        "Comparte el alcance, la combinación de idiomas y el plazo para un presupuesto claro.",
    },
    healthcare: {
      title: "Traducción sanitaria al árabe",
      description:
        "Documentación médica y sanitaria traducida con exactitud, claridad y el registro adecuado para sus lectores.",
      crumb: "Salud",
      s1Title: "Claridad y corrección para contenido sensible",
      s1p1: "El contenido sanitario tiene consecuencias reales, por eso la exactitud y la claridad van primero. Los términos se mantienen coherentes con las bases terminológicas de SDL Trados, y el registro se adapta al público, ya sean los lectores clínicos o pacientes.",
      s1p2: "Cada proyecto sigue un flujo completo de Traducción–Edición–Revisión, y los archivos se tratan con estricta confidencialidad.",
      s2Title: "Qué traduzco",
      s2List: [
        "Documentación médica y clínica",
        "Información e instrucciones dirigidas a pacientes",
        "Documentación de productos y dispositivos sanitarios",
        "Materiales regulatorios y de cumplimiento",
      ],
      ctaTitle: "¿Necesitas traducir contenido sanitario al árabe?",
      ctaDescription:
        "Dime el tipo de documento, la combinación de idiomas y el plazo para un presupuesto claro.",
    },
    audiovisual: {
      title: "Traducción audiovisual y doblaje al árabe",
      description:
        "Subtitulado, transcreación y adaptación de doblaje, con la precisión de sincronización labial que exigen el streaming y la difusión.",
      crumb: "Audiovisual",
      s1Title: "Diálogos que suenan nativos y encajan en los labios",
      s1p1: "El trabajo audiovisual es más que palabras en una página: el árabe tiene que ajustarse a la imagen, al ritmo y a la interpretación. Eso implica transcrear las expresiones para que resulten nativas al público árabe conservando la tensión dramática y la intención del original.",
      stepsTitle: "El proceso de adaptación de doblaje y sincronización labial",
      workflowSteps: [
        {
          title: "Revisión del guion y los códigos de tiempo",
          description:
            "Estudiar el guion, los tiempos y el tono.",
        },
        {
          title: "Traducción y transcreación",
          description:
            "Traducir el sentido y adaptar las expresiones.",
        },
        {
          title: "Ajuste de sílabas y sincronización labial",
          description:
            "Ajustar las sílabas árabes al movimiento de los labios.",
        },
        {
          title: "Revisión frente a la imagen",
          description:
            "Revisar el diálogo frente a la imagen.",
        },
        {
          title: "Entrega lista para estudio",
          description:
            "Entregar un guion listo para grabar.",
        },
      ],
      offerTitle: "Qué ofrezco",
      offerList: [
        "Subtitulado y traducción de guiones con códigos de tiempo",
        "Adaptación de doblaje con sincronización labial",
        "Transcreación de diálogos culturalmente específicos",
      ],
      ctaTitle: "¿Localizas una serie o película al árabe?",
      ctaDescription: "Dime el idioma de origen, el formato y el plazo para un presupuesto claro.",
    },
  },
  form: {
    successTitle: "Gracias — hemos recibido tu solicitud.",
    successText:
      "Te responderé en breve. Por favor, no envíes archivos confidenciales hasta que hayamos acordado las condiciones.",
    company: "Empresa",
    name: "Nombre",
    email: "Correo electrónico",
    languagePair: "Combinación de idiomas",
    choose: "Elegir…",
    specialization: "Especialización",
    notSure: "No estoy seguro / otro",
    volume: "Número de palabras o duración",
    volumePlaceholder: "p. ej. 5000 palabras o 20 minutos",
    deadline: "Plazo",
    deadlinePlaceholder: "p. ej. 15 de octubre, o flexible",
    service: "Servicio necesario",
    selectService: "Selecciona un servicio…",
    details: "Detalles del proyecto",
    detailsPlaceholder: "Cuéntame sobre tu proyecto…",
    nda: "Quiero firmar un acuerdo de confidencialidad antes de compartir archivos.",
    sending: "Enviando…",
    send: "Enviar solicitud",
    pairs: ["Inglés → Árabe", "Francés → Árabe", "Español → Árabe"],
  },
  cookie: {
    text: "Este sitio utiliza cookies de analítica (Google Analytics) para entender cómo se usa. Solo se instalan si las aceptas. Consulta la",
    privacy: "política de privacidad",
    decline: "Rechazar",
    accept: "Aceptar",
  },
  notFound: {
    title: "Página no encontrada",
    text: "La página que buscas no existe o puede que se haya movido.",
    goHome: "Ir al inicio",
    browse: "Ver servicios",
  },
  blog: {
    title: "Blog",
    description: "Notas sobre el flujo de traducción, la localización y la terminología.",
    crumb: "Blog",
    all: "Todo",
    filterAria: "Filtrar por categoría",
    emptyCategory: "Aún no hay artículos en esta categoría.",
    emptyNone: "Aún no se han publicado artículos — vuelve pronto.",
    minRead: "min de lectura",
  },
  seo: {
    home: { title: "", description: "", ogImage: "" },
    about: { title: "", description: "", ogImage: "" },
    specializations: { title: "", description: "", ogImage: "" },
    services: { title: "", description: "", ogImage: "" },
    process: { title: "", description: "", ogImage: "" },
    contact: { title: "", description: "", ogImage: "" },
    confidentiality: { title: "", description: "", ogImage: "" },
    blog: { title: "", description: "", ogImage: "" },
    technical: { title: "", description: "", ogImage: "" },
    legal: { title: "", description: "", ogImage: "" },
    financial: { title: "", description: "", ogImage: "" },
    healthcare: { title: "", description: "", ogImage: "" },
    audiovisual: { title: "", description: "", ogImage: "" },
  },
};

export default es;

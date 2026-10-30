import type { SiteContent } from "./index";

/** Page body content — French. */
const fr: SiteContent = {
  common: {
    letsTalk: "Discutons",
    exploreServices: "Découvrir les services",
    homeCrumb: "Accueil",
    seeProcess: "Voir le processus",
    viewServices: "Voir les services",
    confidentiality: "Confidentialité",
  },
  home: {
    languagesTitle: "Les langues dans lesquelles je travaille",
    langNames: { en: "Anglais", ar: "Arabe", fr: "Français", es: "Espagnol" },
    pastExperienceEyebrow: "Expérience passée",
    pastExperienceTitle: "Un parcours qui inspire confiance aux agences",
    stats: {
      years: "Années d'expérience",
      words: "Mots traduits",
      projects: "Projets livrés",
      languages: "Langues de travail",
    },
    statValues: {
      years: { value: 14, suffix: "+" },
      words: { value: 1000000, suffix: "+" },
      projects: { value: 100, suffix: "+" },
      languages: { value: 4, suffix: "" },
    },
    availabilityEyebrow: "Disponibilité",
    availabilityTitle: "J'accepte de nouveaux projets actuellement",
    availability: {
      days: "Tous les jours — du lundi au dimanche",
      displayZone: "États-Unis (heure de l’Est)",
      yourTime: "Votre heure",
      picker: "Voir ces horaires dans votre pays / fuseau horaire :",
      nextDay: "(le lendemain)",
    },
  },
  about: {
    eyebrow: "À propos",
    title: "À propos d'Ahmed Alzamli",
    description:
      "Traducteur et localisateur spécialisé, j'aide les agences et les entreprises à toucher les publics arabophones et anglophones avec précision, nuance culturelle et fiabilité.",
    crumb: "À propos",
    paragraphs: [
      "Je traduis et localise des sites web et des produits numériques vers l'anglais et l'arabe, et je traduis de la documentation spécialisée de l'anglais, du français et de l'espagnol vers l'arabe. Mon objectif est simple : un contenu qui se lit comme s'il avait été écrit pour son public — jamais une simple conversion mot à mot.",
      "Mon parcours associe l'ingénierie environnementale et un diplôme en marketing : c'est pourquoi la précision technique et une écriture persuasive et naturelle cohabitent aisément dans mon travail. Ce mélange est particulièrement précieux pour la localisation de sites web, la rédaction d'interfaces et la transcréation, où la précision seule ne suffit pas — le message doit faire mouche.",
      "Chaque projet suit un flux de travail rigoureux de Traduction–Révision–Relecture (TEP) avec les mémoires de traduction SDL Trados et des bases terminologiques validées par le client, afin que la terminologie reste cohérente et que la qualité soit intégrée dès le départ. Les fichiers sont traités de façon confidentielle, avec un accord de confidentialité possible avant tout partage.",
    ],
    ctaTitle: "Parlons de votre projet",
    ctaDescription:
      "Dites-moi sur quoi vous travaillez et je vous répondrai avec un devis clair et honnête.",
    howItWorks: "Comment ça marche ?",
  },
  specializations: {
    eyebrow: "Spécialisations",
    title: "Mes domaines de spécialisation",
    description:
      "Une expérience approfondie et spécialisée dans les domaines où la précision et la terminologie comptent le plus.",
    crumb: "Spécialisations",
    ctaTitle: "Vous avez un projet dans l'un de ces domaines ?",
    ctaDescription:
      "Dites-moi sur quoi vous travaillez et je vous répondrai avec un devis clair et honnête.",
  },
  services: {
    title: "Services de traduction",
    description:
      "De l'anglais, du français et de l'espagnol vers l'arabe — à travers neuf spécialisations, avec un processus défini et les bons outils.",
    intro:
      "De l'anglais, du français et de l'espagnol vers l'arabe — à travers neuf spécialisations, avec un processus défini et les bons outils.",
    crumb: "Services",
    specializationsTitle: "Spécialisations",
    specializationsIntro:
      "Chaque spécialisation a sa propre page expliquant ce qui est couvert et comment le travail est réalisé.",
    translationTitle: "Traduction",
    translationSummary:
      "Traduction humaine professionnelle de l’anglais, du français et de l’espagnol vers l’arabe — précise, naturelle et cohérente avec votre terminologie, pour vos documents, sites web et logiciels.",
    consultingTitle: "Conseil",
    consultingSummary:
      "Conseil : accompagnement pour aborder les marchés arabophones, mise en place de glossaires et de guides de style, et choix du bon processus, des outils et du contrôle qualité.",
    marketingTitle: "Marketing digital",
    marketingSummary:
      "SEO en arabe, réseaux sociaux et contenus de campagne pour toucher les publics arabophones — en alliant localisation et expertise marketing pour générer du trafic et des conversions.",
    additionalTitle: "Services complémentaires",
    additionalIntro:
      "Au-delà de la traduction, ces services accompagnent les projets de localisation et d'IA de bout en bout.",
    ctaTitle: "Vous ne savez pas quel service choisir ?",
    ctaDescription:
      "Décrivez votre projet et je vous recommanderai la bonne approche avec un devis clair.",
  },
  process: {
    eyebrow: "Processus et QA",
    title: "Comment ça marche ?",
    description: "",
    crumb: "Comment ça marche ?",
    tepTitle: "Le flux TEP",
    tepIntro:
      "Chaque projet passe par la Traduction, la Révision et la Relecture, avec la terminologie et la QA tout autour.",
    workflowSteps: [
      {
        title: "Préparation et terminologie",
        description:
          "Analyser la source et préparer glossaires et mémoire de traduction.",
      },
      {
        title: "Traduction",
        description:
          "Traduire avec une terminologie cohérente, en gardant sens et ton.",
      },
      {
        title: "Révision",
        description:
          "Vérifier la traduction par rapport à la source.",
      },
      {
        title: "Relecture",
        description:
          "Peaufiner l’arabe : fluidité, style et mise en forme.",
      },
      {
        title: "Contrôles QA et livraison",
        description:
          "Contrôles qualité finaux et livraison au bon format.",
      },
    ],
    qaTitle: "Politique d'assurance qualité",
    qaParagraphs: [
      "L'assurance qualité combine des contrôles automatisés et le jugement humain. Les contrôles automatisés dans SDL Trados signalent les incohérences terminologiques et les erreurs de chiffres et de balises ; une phase humaine de révision et de relecture garantit que l'arabe se lit de façon naturelle et exacte.",
      "Les décisions terminologiques sont consignées dans des glossaires et des bases terminologiques pour être réutilisées, et les mémoires de traduction maintiennent la cohérence du contenu mis à jour ou répété.",
    ],
    toolsTitle: "Outils",
    toolList: [
      {
        name: "Outils de traduction assistée par ordinateur (TAO)",
        text: "SDL Trados Studio, memoQ, Wordfast et Xbench pour une terminologie cohérente, des mémoires de traduction et des contrôles qualité",
      },
      {
        name: "Microsoft Office",
        text: "fichiers Word, Excel et PowerPoint traduits et livrés avec leur mise en page et leur mise en forme d’origine",
      },
      {
        name: "Logiciels marketing",
        text: "outils SEO, d’analyse et de réseaux sociaux pour la recherche de mots-clés, la planification de contenus et le suivi des campagnes",
      },
    ],
    ctaTitle: "Vous voulez ce niveau de soin pour votre projet ?",
    ctaDescription:
      "Dites-moi sur quoi vous travaillez et je vous expliquerai exactement comment ce serait géré.",
  },
  contact: {
    title: "Contact et demande de devis",
    description: "Parlez-moi de votre projet et je vous répondrai avec un devis clair.",
    lead: "Donnez-moi quelques détails sur votre projet, langues, domaine et délai, et je vous répondrai avec un devis clair et adapté.",
    crumb: "Contact",
    directIntro: "Vous préférez un contact direct ? Écrivez à",
    directOr: "ou appelez le",
    calloutStrong: "Merci de ne pas encore envoyer de fichiers confidentiels.",
    calloutText:
      "Ce formulaire ne sert qu'aux détails du projet. Attendez que nous ayons convenu des conditions — et d'un accord de confidentialité, si vous le souhaitez — avant de partager des documents sensibles. Consultez la",
    calloutLink: "page de confidentialité",
  },
  confidentiality: {
    title: "Confidentialité et sécurité des données",
    description:
      "Pour les documents juridiques, financiers et commerciaux, la discrétion n'est pas optionnelle. Voici comment vos fichiers sont protégés.",
    crumb: "Confidentialité",
    ndaTitle: "Un accord de confidentialité avant l'ouverture de tout fichier",
    ndaText:
      "Je travaille dans une stricte confidentialité et je suis prêt à signer un accord de confidentialité avant de consulter les fichiers d'un projet. Si vous avez votre propre accord, je serai heureux de le relire et de le signer ; sinon, il peut être mis en place rapidement pour que vous partagiez vos documents en toute confiance.",
    transfersTitle: "Transferts sécurisés",
    transfersText:
      "Les fichiers sont reçus et renvoyés par des canaux sécurisés plutôt que par de simples pièces jointes non protégées.",
    storageTitle: "Stockage et traitement",
    storageText:
      "Les fichiers de travail sont stockés avec soin et l'accès est limité à ce que le projet exige.",
    retentionTitle: "Conservation des données",
    retentionText:
      "Les fichiers ne sont conservés que le temps nécessaire au projet et à tout suivi convenu, puis supprimés.",
    ctaTitle: "Prêt à partager votre projet en toute sécurité ?",
    ctaDescription:
      "Un accord de confidentialité peut être en place avant que vous n'envoyiez le moindre fichier.",
  },
  cards: {
    specializations: [
      {
        title: "Technique",
        summary:
          "Documentation d'ingénierie, manuels et spécifications — avec une formation en ingénierie environnementale et un contrôle terminologique rigoureux.",
      },
      {
        title: "Juridique",
        summary:
          "Contrats, conformité et documents juridiques, traités dans une stricte confidentialité et sous accord de confidentialité.",
      },
      {
        title: "Financier",
        summary:
          "Rapports, états et communications financières traduits avec une terminologie précise et cohérente.",
      },
      {
        title: "Santé",
        summary:
          "Documentation médicale et de santé traduite avec exactitude, clarté et un registre approprié.",
      },
      {
        title: "Audiovisuel",
        summary:
          "Sous-titrage, transcréation et adaptation de doublage avec une synchronisation labiale soignée pour le public arabe.",
      },
    ],
    additional: [
      {
        title: "Post-édition de traduction automatique (MTPE)",
        summary:
          "Édition de la traduction automatique à un niveau humain — en corrigeant l'exactitude, la terminologie et le style tout en gardant des délais efficaces.",
      },
      {
        title: "Transcréation et textes d'interface",
        summary:
          "Adapter les textes marketing et d'interface produit pour une lecture naturelle en arabe, en préservant l'intention, le ton et la conversion — avec une sensibilité marketing.",
      },
      {
        title: "Test de produits numériques",
        summary:
          "Examiner les applications et interfaces localisées en contexte pour repérer les problèmes de mise en page, de troncature et d'ergonomie avant la publication.",
      },
      {
        title: "Annotation et évaluation de données IA (RLHF)",
        summary:
          "Évaluer et classer les sorties arabes générées par l'IA, corriger les erreurs et fournir un retour structuré pour améliorer la qualité et la sûreté du modèle.",
      },
      {
        title: "Adaptation de doublage avec synchronisation labiale",
        summary:
          "Adapter les scripts minutés et ajuster le nombre de syllabes en arabe pour correspondre aux mouvements des lèvres à l'écran, tout en conservant le sens et l'émotion d'origine.",
      },
    ],
  },
  serviceDetail: {
    eyebrow: "Spécialisation",
    technical: {
      title: "Traduction technique vers l'arabe",
      description:
        "Documentation d'ingénierie et industrielle traduite par quelqu'un qui comprend le sujet, pas seulement les mots.",
      crumb: "Technique",
      s1Title: "Comprendre le sujet, pas seulement la langue",
      s1p1: "Une formation en ingénierie environnementale permet de lire les textes techniques sources comme l'auteur l'a voulu — les concepts, unités et normes derrière la terminologie sont familiers, de sorte que l'arabe se lit correctement pour les spécialistes du domaine.",
      s1p2: "La cohérence est assurée avec SDL Trados Studio : les glossaires et bases terminologiques du projet maintiennent l'uniformité des termes clés, et les mémoires de traduction gardent les documents longs ou fréquemment mis à jour alignés d'une version à l'autre.",
      s2Title: "Ce que je traduis",
      s2List: [
        "Manuels d'ingénierie, guides d'utilisation et procédures d'exploitation",
        "Spécifications techniques et fiches techniques",
        "Rapports environnementaux et d'ingénierie",
        "Documents de sécurité, de normes et de conformité",
        "Documentation de produits et d'équipements",
      ],
      s3Title: "Services techniques connexes",
      s3Intro: "Les projets techniques associent souvent la traduction à :",
      s3List: [
        "Post-édition de traduction automatique (MTPE) — amener la sortie machine au niveau humain tout en gardant des délais efficaces.",
        "Test de produits numériques — vérifier les interfaces localisées en contexte pour la mise en page, la troncature et l'ergonomie.",
        "Annotation et évaluation de données IA (RLHF) — évaluer et améliorer la sortie arabe générée par l'IA.",
      ],
      ctaTitle: "Vous avez une documentation technique à traduire ?",
      ctaDescription: "Indiquez la combinaison de langues, le domaine et le délai pour un devis clair.",
    },
    legal: {
      title: "Traduction juridique vers l'arabe",
      description:
        "Contrats et documents juridiques traduits avec précision et traités avec la confidentialité que le matériel exige.",
      crumb: "Juridique",
      s1Title: "Précision et confidentialité",
      s1p1: "Les textes juridiques ne laissent aucune place à l'ambiguïté : la terminologie, la structure et le sens doivent être rendus avec exactitude. Chaque projet utilise les bases terminologiques SDL Trados pour que les termes définis restent cohérents dans un document et entre documents liés.",
      s1p2: "Le matériel juridique est sensible par nature. Les fichiers sont traités dans une stricte confidentialité, transférés en toute sécurité, et je suis prêt à signer un accord de confidentialité avant l'ouverture de tout fichier.",
      s2Title: "Ce que je traduis",
      s2List: [
        "Contrats et accords",
        "Conditions générales, politiques et documents de conformité",
        "Documentation d'entreprise et réglementaire",
        "Correspondance et pièces juridiques annexes",
      ],
      ctaTitle: "Besoin de traduire des documents juridiques en toute confidentialité ?",
      ctaDescription:
        "Indiquez-moi la portée et le délai — un accord de confidentialité peut être en place avant tout partage.",
    },
    financial: {
      title: "Traduction financière vers l'arabe",
      description:
        "Documents financiers traduits avec l'exactitude, la discrétion et la cohérence terminologique que les chiffres exigent.",
      crumb: "Financier",
      s1Title: "L'exactitude là où les chiffres et les mots comptent tous deux",
      s1p1: "Les documents financiers associent des chiffres exacts à un langage soigneusement choisi. La terminologie reste cohérente grâce aux bases terminologiques et mémoires de traduction SDL Trados, de sorte que les termes récurrents et les formulations standard restent uniformes d'une période à l'autre et d'un ensemble de documents à l'autre.",
      s1p2: "Le matériel financier est traité comme confidentiel : transferts sécurisés, manipulation soignée et disposition à signer un accord de confidentialité avant l'ouverture de tout fichier.",
      s2Title: "Ce que je traduis",
      s2List: [
        "Rapports et états financiers",
        "Communications aux investisseurs et communications d'entreprise",
        "Documentation d'audit et de conformité",
        "Présentations et supports marketing financiers",
      ],
      ctaTitle: "Vous avez des documents financiers à traduire ?",
      ctaDescription: "Indiquez la portée, la combinaison de langues et le délai pour un devis clair.",
    },
    healthcare: {
      title: "Traduction médicale vers l'arabe",
      description:
        "Documentation médicale et de santé traduite avec exactitude, clarté et le registre adapté à ses lecteurs.",
      crumb: "Santé",
      s1Title: "Clarté et exactitude pour un contenu sensible",
      s1p1: "Le contenu médical a de réelles conséquences, l'exactitude et la clarté passent donc en premier. Les termes restent cohérents grâce aux bases terminologiques SDL Trados, et le registre est adapté au public — que les lecteurs soient des cliniciens ou des patients.",
      s1p2: "Chaque projet suit un flux complet Traduction–Révision–Relecture, et les fichiers sont traités dans une stricte confidentialité.",
      s2Title: "Ce que je traduis",
      s2List: [
        "Documentation médicale et clinique",
        "Informations et instructions destinées aux patients",
        "Documentation de produits et dispositifs médicaux",
        "Documents réglementaires et de conformité",
      ],
      ctaTitle: "Besoin de traduire du contenu médical vers l'arabe ?",
      ctaDescription:
        "Indiquez-moi le type de document, la combinaison de langues et le délai pour un devis clair.",
    },
    audiovisual: {
      title: "Traduction audiovisuelle et doublage vers l'arabe",
      description:
        "Sous-titrage, transcréation et adaptation de doublage — avec la précision de synchronisation labiale qu'exigent le streaming et la diffusion.",
      crumb: "Audiovisuel",
      s1Title: "Des dialogues qui sonnent natifs — et tombent juste sur les lèvres",
      s1p1: "Le travail audiovisuel va au-delà des mots sur une page : l'arabe doit s'accorder à l'image, au rythme et au jeu. Cela implique de transcréer les expressions pour qu'elles paraissent natives au public arabe tout en préservant la tension dramatique et l'intention de l'original.",
      stepsTitle: "Le processus d'adaptation de doublage et de synchronisation labiale",
      workflowSteps: [
        {
          title: "Revue du script et des timecodes",
          description:
            "Étudier le script, le timing et le ton.",
        },
        {
          title: "Traduction et transcréation",
          description:
            "Traduire le sens et adapter les expressions.",
        },
        {
          title: "Adéquation syllabes et synchronisation labiale",
          description:
            "Caler les syllabes arabes sur le mouvement des lèvres.",
        },
        {
          title: "Vérification face à l'image",
          description:
            "Vérifier les dialogues face à l’image.",
        },
        {
          title: "Livraison prête pour le studio",
          description:
            "Livrer un script prêt pour l’enregistrement.",
        },
      ],
      offerTitle: "Ce que je propose",
      offerList: [
        "Sous-titrage et traduction de scripts minutés",
        "Adaptation de doublage avec synchronisation labiale",
        "Transcréation de dialogues culturellement spécifiques",
      ],
      ctaTitle: "Vous localisez une série ou un film vers l'arabe ?",
      ctaDescription: "Indiquez-moi la langue source, le format et le délai pour un devis clair.",
    },
  },
  form: {
    successTitle: "Merci — votre demande a bien été reçue.",
    successText:
      "Je vous recontacte sous peu. Merci de ne pas envoyer de fichiers confidentiels avant que nous ayons convenu des conditions.",
    company: "Entreprise",
    name: "Nom",
    email: "E-mail",
    languagePair: "Combinaison de langues",
    choose: "Choisir…",
    specialization: "Spécialisation",
    notSure: "Je ne sais pas / autre",
    volume: "Nombre de mots ou durée",
    volumePlaceholder: "ex. 5 000 mots ou 20 minutes",
    deadline: "Délai",
    deadlinePlaceholder: "ex. 15 octobre, ou flexible",
    service: "Service souhaité",
    selectService: "Sélectionner un service…",
    details: "Détails du projet",
    detailsPlaceholder: "Parlez-moi de votre projet…",
    nda: "Je souhaite un accord de confidentialité signé avant de partager des fichiers.",
    sending: "Envoi…",
    send: "Envoyer la demande",
    pairs: ["Anglais → Arabe", "Français → Arabe", "Espagnol → Arabe"],
  },
  cookie: {
    text: "Ce site utilise des cookies de mesure d’audience (Google Analytics) pour comprendre son utilisation. Ils ne sont déposés qu’avec votre accord. Consultez la",
    privacy: "politique de confidentialité",
    decline: "Refuser",
    accept: "Accepter",
  },
  notFound: {
    title: "Page introuvable",
    text: "La page que vous recherchez n'existe pas ou a peut-être été déplacée.",
    goHome: "Aller à l'accueil",
    browse: "Parcourir les services",
  },
  blog: {
    title: "Blog",
    description: "Notes sur le flux de traduction, la localisation et la terminologie.",
    crumb: "Blog",
    all: "Tout",
    filterAria: "Filtrer par catégorie",
    emptyCategory: "Aucun article dans cette catégorie pour le moment.",
    emptyNone: "Aucun article publié pour le moment — revenez bientôt.",
    minRead: "min de lecture",
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

export default fr;

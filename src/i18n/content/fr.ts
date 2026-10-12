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
    pastExperienceEyebrow: "Expérience",
    pastExperienceTitle: "Un parcours qui inspire confiance aux agences",
    stats: {
      years: "Années d'expérience",
      words: "Mots traduits",
      projects: "Projets livrés",
      languages: "Langues de travail",
    },
    availabilityEyebrow: "Disponibilité",
    availabilityTitle: "J'accepte de nouveaux projets actuellement",
    availability: {
      days: "Tous les jours — du lundi au dimanche",
      palestine: "Palestine",
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
      "De l'anglais, du français et de l'espagnol vers l'arabe — à travers cinq spécialisations, avec un processus défini et les bons outils.",
    crumb: "Services",
    specializationsTitle: "Spécialisations",
    specializationsIntro:
      "Chaque spécialisation a sa propre page expliquant ce qui est couvert et comment le travail est réalisé.",
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
    description:
      "La qualité est intégrée grâce à un flux de travail défini — pas ajoutée à la fin. Voici exactement comment votre projet est traité, étape par étape.",
    crumb: "Comment ça marche ?",
    tepTitle: "Le flux TEP",
    tepIntro:
      "Chaque projet passe par la Traduction, la Révision et la Relecture, avec la terminologie et la QA tout autour.",
    steps: [
      {
        title: "Préparation et terminologie",
        description:
          "Analyser la source, confirmer ou créer un glossaire et une base terminologique, et configurer le projet dans SDL Trados avec la mémoire de traduction appropriée.",
      },
      {
        title: "Traduction",
        description:
          "Traduire avec un contrôle terminologique et l'appui de la mémoire de traduction, en préservant le sens, le ton et la cohérence.",
      },
      {
        title: "Révision",
        description:
          "Comparer la traduction à la source pour l'exactitude, l'exhaustivité et la cohérence, en affinant la terminologie et le style.",
      },
      {
        title: "Relecture",
        description:
          "Lire l'arabe seul pour la langue, la fluidité, la mise en forme et la typographie — en repérant ce qu'une relecture bilingue peut manquer.",
      },
      {
        title: "Contrôles QA et livraison",
        description:
          "Effectuer des contrôles QA automatisés (terminologie, chiffres, balises et cohérence), résoudre les éventuels signalements, puis livrer au format requis.",
      },
    ],
    qaTitle: "Politique d'assurance qualité",
    qaParagraphs: [
      "L'assurance qualité combine des contrôles automatisés et le jugement humain. Les contrôles automatisés dans SDL Trados signalent les incohérences terminologiques et les erreurs de chiffres et de balises ; une phase humaine de révision et de relecture garantit que l'arabe se lit de façon naturelle et exacte.",
      "Les décisions terminologiques sont consignées dans des glossaires et des bases terminologiques pour être réutilisées, et les mémoires de traduction maintiennent la cohérence du contenu mis à jour ou répété.",
    ],
    toolsTitle: "Outils",
    tools: [
      { name: "SDL Trados Studio", text: "l'environnement TAO central pour la traduction et la QA" },
      { name: "Mémoires de traduction", text: "cohérence sur les documents volumineux et mis à jour" },
      {
        name: "Glossaires et bases terminologiques",
        text: "terminologie maîtrisée et validée par le client",
      },
    ],
    ctaTitle: "Vous voulez ce niveau de soin pour votre projet ?",
    ctaDescription:
      "Dites-moi sur quoi vous travaillez et je vous expliquerai exactement comment ce serait géré.",
  },
  contact: {
    title: "Contact et demande de devis",
    description: "Parlez-moi de votre projet et je vous répondrai avec un devis clair.",
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
};

export default fr;

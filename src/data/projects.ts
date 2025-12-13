import { ProjectContent } from "./content-model";

export const projects: ProjectContent[] = [
  {
    title: "Site vitrine Next.js",
    slug: "site-vitrine-nextjs",
    description:
      "Conception et déploiement du site personnel responsive (Next.js 14, Tailwind, Vercel) avec formulaires, sections thématiques et dark mode.",
    date: "2025",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Framer Motion",
    ],
    content:
      "Ce site vitrine me sert de démonstrateur : en une navigation, un recruteur peut explorer mes projets, expériences et prises de décision techniques.",
    sections: [
      {
        title: "Présentation générale",
        paragraphs: [
          "Le site sert à la fois de carte de visite et de laboratoire d’UX. J’y teste des animations légères, des transitions accessibles et des contenus pensés pour être lus rapidement.",
          "Chaque composant est réutilisable : cards, headings, layouts et CTA sont construits comme une mini design system Tailwind.",
        ],
      },
      {
        title: "Rôle pédagogique",
        paragraphs: [
          "Je présente chaque projet comme un cas d’usage concret, avec un storytelling orienté résultat. L’objectif est de pouvoir dérouler la même trame en entretien.",
          "Les pages détaillées mettent en avant l’architecture, les points d’attention et les apprentissages que je capitalise pour la mission suivante.",
        ],
      },
    ],
    motivations: [
      "Disposer d’un support unique pour raconter mes projets.",
      "Standardiser mes contenus (cartes, pages détaillées, CTA) avant de les réutiliser sur d’autres sites.",
      "Construire une base Next.js 14 modulaire que je peux enrichir (blog, insights data, etc.).",
    ],
    architecture: {
      title: "Architecture technique",
      paragraphs: [
        "App Router Next.js 14, données typées et centralisées, composants server-first. Tailwind fournit les primitives UI et tous les layouts sont responsives par conception.",
      ],
      bullets: [
        "Structure pages → /projects, /experiences, /education + routes dynamiques.",
        "Composants partagés (cards, sections, layouts) pour limiter la duplication.",
        "Déploiement continu sur Vercel avec vérification ESLint + TypeScript.",
      ],
    },
    competencies: [
      "Structuration d’un design system léger",
      "Accessibilité et responsive design",
      "Organisation du code (données, composants, routes dynamiques)",
      "Storytelling orienté produit",
    ],
    challenges: [
      {
        challenge:
          "Rendre chaque projet cliquable sans créer une dette de contenu.",
        solution:
          "Modèle de données structuré (sections, highlights, challenges) pour écrire une narration réutilisable, quel que soit le projet.",
      },
      {
        challenge:
          "Assurer des temps de chargement stables malgré les animations.",
        solution:
          "Animations limitées aux interactions clés et usage de classes Tailwind plutôt que de librairies lourdes.",
      },
    ],
    highlights: [
      { label: "Pages statiques", value: "13 sections modulaires" },
      { label: "Temps de chargement", value: "< 1s depuis Paris" },
      { label: "Accessibilité", value: "Couleurs AA et focus states" },
    ],
    results: [
      "Une navigation claire : projets, expériences, formations, contact.",
      "Des pages détaillées prêtes à être partagées lors d’un entretien.",
      "Une base Next.js robuste pour accueillir de futurs contenus (articles, études de cas vidéo, etc.).",
    ],
    links: [
      {
        label: "Code source",
        href: "https://github.com/RoiBrioche/site-web-vitrine",
      },
    ],
  },
  {
    title: "Conception d’un dashboard anti-phishing",
    slug: "conception-dashboard-anti-phishing",
    description:
      "Projet universitaire de cadrage et de conception d’un système d’observabilité sécurité pour le suivi des campagnes de phishing.",
    date: "2024",
    technologies: ["Grafana", "Prometheus", "Loki", "MongoDB Atlas"],
    content:
      "Travail de conception visant à définir les indicateurs, l’architecture cible et les outils nécessaires à la mise en place d’un dashboard de suivi des campagnes de phishing pour des entreprises à moyens limités.",
    sections: [
      {
        title: "Présentation générale",
        paragraphs: [
          "Ce projet s’inscrit dans un contexte universitaire, avec pour objectif de réfléchir à une solution réaliste de suivi de la posture de sécurité d’une entreprise face au phishing.",
          "L’accent a été mis sur la définition des indicateurs pertinents, la lisibilité des dashboards et le choix de technologies adaptées à des structures disposant de peu de ressources.",
        ],
      },
      {
        title: "Démarche et rôle pédagogique",
        paragraphs: [
          "Le projet m’a permis de travailler sur la phase amont : analyse du besoin métier, étude des outils d’observabilité et conception d’une architecture cible.",
          "En entretien, je peux expliquer les arbitrages réalisés, les limites rencontrées et les conditions nécessaires pour passer d’une conception théorique à une solution réellement opérationnelle.",
        ],
      },
    ],
    motivations: [
      "Comprendre comment transformer des signaux de sécurité en indicateurs exploitables.",
      "Explorer des solutions accessibles financièrement pour des PME.",
      "Structurer une démarche de conception avant implémentation technique.",
    ],
    architecture: {
      title: "Architecture cible envisagée",
      paragraphs: [
        "L’architecture imaginée repose sur une collecte centralisée des indicateurs de sécurité, stockés temporairement dans une base cloud, puis exposés à des outils d’observabilité.",
      ],
      bullets: [
        "Stockage des indicateurs et de leur état dans MongoDB Atlas (solution cloud gratuite ou low-cost).",
        "Exposition des métriques vers Prometheus pour l’agrégation.",
        "Analyse et visualisation via Grafana et Loki pour les événements textuels.",
      ],
    },
    competencies: [
      "Analyse des besoins sécurité",
      "Conception d’architecture d’observabilité",
      "Définition d’indicateurs métier",
      "Veille technologique et choix d’outils",
    ],
    challenges: [
      {
        challenge:
          "Concevoir une solution adaptée à des entreprises avec peu de moyens.",
        solution:
          "Étude de solutions cloud gratuites ou peu coûteuses et limitation volontaire de la complexité de l’architecture.",
      },
      {
        challenge:
          "Définir des indicateurs réellement utiles sans données réelles.",
        solution:
          "Travail de maquettage et de réflexion métier à partir de scénarios réalistes d’attaques de phishing.",
      },
    ],
    highlights: [
      { label: "Positionnement", value: "Conception & cadrage" },
      { label: "Cible", value: "PME / structures à moyens limités" },
      { label: "Livrables", value: "Architecture cible + maquettes" },
    ],
    results: [
      "Vision claire des composants nécessaires à un dashboard anti-phishing.",
      "Meilleure compréhension des limites d’un projet sécurité sans données réelles.",
      "Base conceptuelle réutilisable pour un futur projet opérationnel.",
    ],
  },
  {
    title: "Analyse NLP de tickets IT",
    slug: "analyse-nlp-tickets-it",
    description:
      "Projet universitaire de valorisation de commentaires de tickets IT par des approches NLP supervisées et non supervisées.",
    date: "2024",
    technologies: ["Python", "PyTorch", "spaCy", "scikit-learn", "Jupyter"],
    content:
      "Mini-projet mené lors du forum AI4Industry visant à exploiter les commentaires textuels d’un système de tickets IT afin d’identifier les causes récurrentes de pannes et les axes d’amélioration.",
    sections: [
      {
        title: "Contexte et problématique",
        paragraphs: [
          "Une entreprise de grande taille disposait d’un système de tickets IT contenant de nombreux commentaires textuels (humains, automatiques, mixtes), peu ou pas exploités.",
          "L’objectif du projet était d’extraire de la valeur de ces données textuelles pour identifier les causes fréquentes de pannes et orienter les actions correctives en amont.",
        ],
      },
      {
        title: "Démarche expérimentale",
        paragraphs: [
          "Nous avons travaillé sur des notebooks Jupyter pour explorer différentes approches NLP, de la préparation des données à l’évaluation des résultats.",
          "Des méthodes d’apprentissage supervisé et non supervisé ont été testées afin de comparer leur pertinence selon la qualité et la structuration des données disponibles.",
        ],
      },
    ],
    motivations: [
      "Valoriser des données textuelles jusque-là sous-exploitées.",
      "Comparer des approches ML adaptées à des données bruitées et hétérogènes.",
      "Mieux comprendre les limites des modèles NLP en contexte industriel.",
    ],
    architecture: {
      title: "Approche technique",
      paragraphs: [
        "Le travail s’est concentré sur une chaîne d’expérimentation en environnement notebook, favorisant l’itération rapide et l’analyse qualitative des résultats.",
      ],
      bullets: [
        "Nettoyage et normalisation des commentaires (langage naturel bruité).",
        "Vectorisation des textes (TF-IDF, embeddings).",
        "Tests de clustering pour faire émerger des thématiques récurrentes.",
        "Tests de classification supervisée lorsque des labels étaient exploitables.",
      ],
    },
    competencies: [
      "Préparation et nettoyage de données textuelles",
      "Apprentissage supervisé et non supervisé",
      "Analyse et interprétation de clusters",
      "Communication des résultats à des interlocuteurs non techniques",
    ],
    challenges: [
      {
        challenge:
          "Données textuelles hétérogènes et peu structurées.",
        solution:
          "Nettoyage avancé, filtrage des commentaires non informatifs et normalisation linguistique.",
      },
      {
        challenge:
          "Difficulté à interpréter certains clusters.",
        solution:
          "Analyse qualitative des termes dominants et validation manuelle avec des scénarios métier.",
      },
    ],
    highlights: [
      { label: "Approches testées", value: "Supervisé & non supervisé" },
      { label: "Environnement", value: "Exploration via notebooks" },
      { label: "Contexte", value: "Cas réel d’entreprise" },
    ],
    results: [
      "Identification de thématiques récurrentes liées aux causes de tickets IT.",
      "Comparaison des limites et avantages des approches supervisées et non supervisées.",
      "Meilleure compréhension des prérequis nécessaires à une industrialisation future.",
    ],
  },
  {
    title: "Veille technique & projets LLM",
    slug: "veille-technique-llm",
    description:
      "Expérimentations avec des LLM et de l’IA générative pour automatiser du code et produire des scripts analytiques.",
    date: "2023 — 2025",
    technologies: ["OpenAI", "LangChain", "Python", "TypeScript", "Supabase"],
    content:
      "Travaux personnels autour des LLM : automatisation de scripts, agents pour générer du code boilerplate, benchmarks internes.",
    sections: [
      {
        title: "Présentation générale",
        paragraphs: [
          "Je construis des micro-outils pour accélérer la génération de scripts analytiques ou de documentation technique.",
          "Les expérimentations couvrent LangChain, les APIs OpenAI, la vectorisation (Supabase / Postgres) et l’évaluation qualitative.",
        ],
      },
      {
        title: "Rôle pédagogique",
        paragraphs: [
          "Chaque mini-projet est documenté : objectifs, limites, critères d’acceptation. Cela me permet d’illustrer ma compréhension des LLM en entretien.",
        ],
      },
    ],
    motivations: [
      "Comprendre les forces et limites des LLM sur des cas très concrets.",
      "Mettre en place une base de connaissances vectorielle pour mes documents technos.",
      "Automatiser la génération de code répétitif (scripts d’ingestion, pipelines).",
    ],
    architecture: {
      title: "Architecture technique",
      paragraphs: [
        "Approche par briques : collecte (Supabase + embeddings), orchestrateurs (LangChain), appels OpenAI et scoring maison.",
      ],
      bullets: [
        "Stockage vectoriel Supabase pour les prompts contextualisés.",
        "Agents « guardrails » (regex + heuristiques) pour encadrer les réponses.",
        "Scripts TypeScript pour tester l’intégration côté front.",
      ],
    },
    competencies: [
      "Prompt engineering orienté produit",
      "Évaluation de modèles",
      "Intégration API OpenAI",
      "Documentation et veille technologique",
    ],
    challenges: [
      {
        challenge: "Éviter les hallucinations dans les scripts générés.",
        solution:
          "Mise en place d’un validateur syntaxique + exécution en sandbox avant validation manuelle.",
      },
      {
        challenge: "Capitaliser sur les apprentissages au fil des tests.",
        solution:
          "Documentation Notion + export vers le site pour présenter rapidement les retours d’expérience.",
      },
    ],
    highlights: [
      { label: "Expériences menées", value: "12 prototypes" },
      { label: "Modèles testés", value: "GPT-4, GPT-4o, Claude" },
      { label: "Scripts générés", value: "30+ automatisations" },
    ],
    results: [
      "Vision claire des cas où un LLM apporte un véritable gain.",
      "Capacité à prototyper rapidement un agent ou un outil d’aide.",
      "Veille structurée, prête à être partagée en workshop interne.",
    ],
  },
];

export type { ProjectContent } from "./content-model";


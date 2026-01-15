import { ProjectContent } from "./content-model";

export const projects: ProjectContent[] = [
  {
    title: "Unista Smart-Dosage Unit",
    slug: "unista-smart-dosage-simulation",
    description:
      "Développement d'un simulateur de supervision industrielle (SCADA/IHM) en Python. Architecture MVC, simulation physique en temps réel et interface opérateur moderne.",
    date: "2026",
    technologies: [
      "Python 3",
      "CustomTkinter",
      "Architecture MVC",
      "Threading",
      "POO",
    ],
    content:
      "Ce projet est un démonstrateur technique réalisé dans le cadre d'une candidature pour Unista. Il simule le pilotage complet d'une unité de dosage pharmaceutique, prouvant ma capacité à concevoir des logiciels structurés, robustes et orientés vers l'expérience utilisateur industrielle.",
    sections: [
      {
        title: "Fonctionnalités simulées",
        paragraphs: [
          "Le logiciel reproduit fidèlement le comportement d'une machine : inertie thermique du chauffage, gestion hydraulique (pression/niveau cuve) et aléas de production (pièces défectueuses).",
          "L'opérateur dispose d'un synoptique animé, de commandes manuelles/auto, d'une gestion d'arrêts d'urgence et d'un journal d'événements (logs) pour la traçabilité.",
        ],
      },
      {
        title: "Approche UX/UI Industrielle",
        paragraphs: [
          "L'interface a été pensée pour l'efficacité : lecture rapide des KPIs (TRS, Rebuts), codes couleurs normalisés (Vert/Orange/Rouge) pour les états machines, et mode sombre pour le confort visuel.",
          "L'utilisation de la librairie CustomTkinter permet de moderniser le rendu tout en conservant la structure classique des écrans de supervision.",
        ],
      },
    ],
    motivations: [
      "Démontrer ma maîtrise de la Programmation Orientée Objet (POO) et des architectures découplées.",
      "Prouver qu'il est possible de réaliser des interfaces industrielles modernes et réactives en Python pur.",
      "Simuler des contraintes physiques réelles (bruit capteur, inertie) pour complexifier la logique de code.",
    ],
    architecture: {
      title: "Architecture MVC (Modèle-Vue-Contrôleur)",
      paragraphs: [
        "Pour garantir la maintenabilité, le code suit strictement le patron MVC. Le 'Modèle' gère la physique et les états sans savoir qu'une interface existe. La 'Vue' se contente d'afficher les données et de transmettre les commandes.",
      ],
      bullets: [
        "Backend (machine.py) : Calculs physiques, boucle de simulation et gestion des états d'urgence.",
        "Frontend (main_view.py) : Interface réactive mise à jour par polling (10 FPS) sans bloquer le thread principal.",
        "Composants : Widgets réutilisables (Jauges, Badges d'état) pour éviter la duplication de code.",
      ],
    },
    competencies: [
      "Conception d'architecture logicielle (Separation of Concerns)",
      "Développement d'interfaces graphiques (GUI) événementielles",
      "Logique d'automatisme (Grafcet, Gestion d'états)",
      "Simulation physique mathématique simple",
    ],
    challenges: [
      {
        challenge:
          "Garder l'interface fluide malgré les calculs en arrière-plan.",
        solution:
          "Mise en place d'une boucle de mise à jour non-bloquante (`update_ui_loop`) utilisant `after()` de Tkinter pour synchroniser l'affichage avec le modèle physique sans figer la fenêtre.",
      },
      {
        challenge:
          "Rendre la simulation réaliste (ne pas avoir des valeurs statiques).",
        solution:
          "Intégration de 'bruit' aléatoire sur les capteurs et programmation d'une inertie thermique (la température monte/descend progressivement) pour imiter le comportement réel des fluides.",
      },
    ],
    highlights: [
      { label: "Architecture", value: "Modèle-Vue" },
      { label: "Bibliothèque UI", value: "CustomTkinter" },
      { label: "Simulation", value: "Physique tps réel" },
    ],
    results: [
      "Un logiciel autonome exécutable sans configuration complexe.",
      "Une base de code propre permettant de remplacer le simulateur par une connexion Modbus/OPC UA réelle.",
      "Une démonstration concrète de rigueur technique pour un contexte industriel.",
    ],
    links: [
      {
        label: "Code source (GitHub)",
        href: "https://github.com/roibrioche/unista-smart-dosage-simulation",
      },
    ],
  },
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
    title: "Veille et explorations autour de l’IA",
    slug: "veille-explorations-ia",
    description:
      "Veille technologique continue et expérimentations ciblées autour de l’IA, des LLM et de leurs usages concrets en développement.",
    date: "Depuis 2023",
    technologies: [
      "LLM (OpenAI, Claude)",
      "Outils IA pour développeurs (Cursor, Windsurf)",
      "Python",
      "TypeScript",
      "Bases vectorielles (concepts)",
    ],
    content:
      "Démarche personnelle de veille et d’exploration visant à comprendre les usages réels de l’IA et des LLM dans le développement logiciel, au-delà de l’effet de mode.",
    sections: [
      {
        title: "Démarche de veille",
        paragraphs: [
          "Je mène une veille continue via des articles techniques, des documentations, des vidéos et des retours d’expérience de la communauté.",
          "L’objectif n’est pas d’explorer exhaustivement chaque outil, mais d’identifier les tendances crédibles et les usages réellement applicables.",
        ],
      },
      {
        title: "Expérimentations ciblées",
        paragraphs: [
          "Lorsque cela est pertinent, je teste certaines solutions à petite échelle pour en comprendre les limites, les apports et les contraintes.",
          "Ces expérimentations servent principalement à éclairer mes choix techniques dans mes projets personnels et universitaires.",
        ],
      },
    ],
    motivations: [
      "Rester à jour sur les évolutions rapides de l’IA et des LLM.",
      "Développer un esprit critique face aux promesses des outils IA.",
      "Identifier les usages concrets réellement utiles en développement.",
    ],
    architecture: {
      title: "Approche générale",
      paragraphs: [
        "La démarche privilégie l’analyse et l’appropriation conceptuelle plutôt que la multiplication de prototypes lourds.",
      ],
      bullets: [
        "Lecture et synthèse de contenus techniques.",
        "Tests ponctuels d’outils intégrés aux IDE ou aux workflows existants.",
        "Réutilisation pragmatique dans des projets réels (site, scripts, automatisations légères).",
      ],
    },
    competencies: [
      "Veille technologique structurée",
      "Analyse critique des outils IA",
      "Intégration raisonnée de solutions IA",
      "Capacité à relier technologie et usage réel",
    ],
    challenges: [
      {
        challenge:
          "Évolutions rapides et bruit médiatique autour de l’IA.",
        solution:
          "Focalisation sur les usages concrets et retour aux besoins réels des projets.",
      },
      {
        challenge:
          "Temps limité pour tester en profondeur chaque outil.",
        solution:
          "Priorisation des outils directement exploitables ou utiles à court terme.",
      },
    ],
    highlights: [
      { label: "Positionnement", value: "Veille & exploration" },
      { label: "Objectif", value: "Compréhension des usages réels" },
      { label: "Approche", value: "Pragmatique et critique" },
    ],
    results: [
      "Meilleure compréhension des apports et limites des outils IA.",
      "Capacité à intégrer l’IA de manière pertinente dans des projets existants.",
      "Discours clair et nuancé sur l’IA en contexte professionnel.",
    ],
  },
];

export type { ProjectContent } from "./content-model";


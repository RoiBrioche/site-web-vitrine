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
    title: "Dashboard interactif anti-phishing",
    slug: "dashboard-anti-phishing",
    description:
      "Collecte, agrégation et visualisation des alertes sécurité grâce à un pipeline complet pour surveiller les campagnes de phishing.",
    date: "2024",
    technologies: ["Grafana", "Loki", "Prometheus", "Docker", "Python"],
    content:
      "Projet d’observabilité sécurité : agréger les logs de tentatives de phishing pour identifier les vagues en cours et partager un tableau de bord clair avec les équipes IT.",
    sections: [
      {
        title: "Présentation générale",
        paragraphs: [
          "Mise en place d’un pipeline d’ingestion (Prometheus → Loki) puis d’une couche de visualisation Grafana avec alerting.",
          "Les tableaux de bord sont pensés pour être lus en moins de 2 minutes par une équipe support : pas de surcharge, uniquement les signaux exploitables.",
        ],
      },
      {
        title: "Rôle pédagogique",
        paragraphs: [
          "En entretien, je peux détailler la logique de collecte, le mapping des métriques et les arbitrages faits pour rester proche des besoins métier (sécurité + support).",
        ],
      },
    ],
    motivations: [
      "Centraliser des logs auparavant éparpillés sur plusieurs outils.",
      "Déclencher des alertes proactives pour les équipes support.",
      "Créer un dashboard pédagogique réutilisable pour d’autres sujets sécurité.",
    ],
    architecture: {
      title: "Architecture technique",
      paragraphs: [
        "Pipeline containerisé : agents Prometheus scrapent les indicateurs, Loki stocke les logs, Grafana orchestre les dashboards et alertes.",
      ],
      bullets: [
        "Exporters dédiés pour les passerelles mail et endpoints sensibles.",
        "Dashboards multi-onglets (tendance, incidents critiques, latence).",
        "Alerting configuré via Grafana OnCall + notifications Slack.",
      ],
    },
    competencies: [
      "Observabilité temps réel",
      "Conception de dashboards orientés décision",
      "Automatisation de l’alerting",
      "Communication avec équipes sécurité",
    ],
    challenges: [
      {
        challenge: "Garantir une volumétrie supportable pour Loki.",
        solution:
          "Mise en place de règles de rétention différenciées (7 jours pour le brut, 30 jours pour les agrégats) + compression activée.",
      },
      {
        challenge: "Éviter les faux positifs dans les alertes.",
        solution:
          "Seuils dynamiques basés sur la moyenne glissante + période de silence configurable.",
      },
    ],
    highlights: [
      { label: "Volume suivi", value: "15k logs / jour" },
      { label: "Alertes critiques", value: "< 5 min de détection" },
      { label: "Dashboards", value: "3 vues métier" },
    ],
    results: [
      "Vue consolidée des incidents et des tendances de phishing.",
      "Réduction du temps moyen de réaction grâce aux alertes contextualisées.",
      "Documentation claire pour onboarder rapidement un nouvel analyste.",
    ],
  },
  {
    title: "Projet NLP / Machine Learning",
    slug: "nlp-machine-learning",
    description:
      "Exploitation automatisée de données textuelles massives pour entraîner des modèles d’apprentissage supervisé en Python.",
    date: "2024",
    technologies: ["Python", "spaCy", "scikit-learn", "Pandas", "FastAPI"],
    content:
      "Pipeline NLP complet : collecte, nettoyage, vectorisation et entraînement de modèles supervisés pour classifier des tickets et commentaires utilisateurs.",
    sections: [
      {
        title: "Présentation générale",
        paragraphs: [
          "Le use-case : scorer automatiquement des retours utilisateurs afin de prioriser les améliorations produit.",
          "J’ai conçu un pipeline modulaire pour tester différentes stratégies de features (TF-IDF, embeddings) et comparer plusieurs modèles.",
        ],
      },
      {
        title: "Rôle pédagogique",
        paragraphs: [
          "La page détail me permet d’expliquer les arbitrages data (nettoyage, balancing), la mise en production de l’API FastAPI et les métriques suivies.",
        ],
      },
    ],
    motivations: [
      "Industrialiser des analyses textuelles répétitives.",
      "Tester des approches hybrides (features engineering + embeddings).",
      "Créer un socle réutilisable pour d’autres problématiques NLP.",
    ],
    architecture: {
      title: "Architecture technique",
      paragraphs: [
        "Pipeline orchestré via des notebooks versionnés, puis packagé dans une API FastAPI pour exposition REST.",
      ],
      bullets: [
        "Étapes : ingestion → nettoyage → vectorisation → entraînement → évaluation.",
        "Suivi des expériences (MLflow-like) via des métadonnées JSON.",
        "Déploiement containerisé pour faciliter les itérations.",
      ],
    },
    competencies: [
      "Data cleaning avancé",
      "Vectorisation et entraînement supervisé",
      "Industrialisation via API",
      "Communication des résultats (métriques, confusion matrix)",
    ],
    challenges: [
      {
        challenge: "Dataset déséquilibré (peu de tickets critiques).",
        solution:
          "Utilisation de techniques de rééchantillonnage + métriques pondérées (F1 pondéré) pour conserver une évaluation pertinente.",
      },
      {
        challenge: "Explicabilité des prédictions.",
        solution:
          "Génération d’explications locales (poids TF-IDF + tokens clés) renvoyées avec chaque classification.",
      },
    ],
    highlights: [
      { label: "Précision globale", value: "0,89" },
      { label: "Temps d’inférence", value: "< 120 ms" },
      { label: "Tickets traités", value: "50k +" },
    ],
    results: [
      "Priorisation automatique des sujets critiques.",
      "Documentation claire pour rejouer une expérience ou réentraîner un modèle.",
      "API prête à être branchée sur un back-office ou un bot support.",
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


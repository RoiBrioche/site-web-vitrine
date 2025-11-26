export type Project = {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  moreLink?: string;
};

export const projects: Project[] = [
  {
    title: "Dashboard interactif anti-phishing",
    description:
      "Collecte, agrégation et visualisation des alertes sécurité grâce à un pipeline complet pour surveiller les campagnes de phishing.",
    tags: ["Grafana", "Loki", "Prometheus"],
  },
  {
    title: "Projet NLP / Machine Learning",
    description:
      "Exploitation automatisée de données textuelles massives pour entraîner des modèles d’apprentissage supervisé en Python.",
    tags: ["Python", "NLP", "Machine Learning"],
  },
  {
    title: "Veille technique & projets LLM",
    description:
      "Expérimentations avec des LLM et de l’IA générative pour automatiser du code et produire des scripts analytiques.",
    tags: ["LLM", "IA générative", "Automatisation"],
  },
];


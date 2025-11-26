export type TimelineItem = {
  title: string;
  organisation: string;
  period: string;
  summary: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const education: TimelineItem[] = [
  {
    title: "Master MBDS (Big Data & Systèmes Intelligents)",
    organisation: "Université Côte d'Azur",
    period: "2024 — 2025",
    summary:
      "Parcours orienté data, intelligence artificielle et systèmes intelligents.",
  },
  {
    title: "Mobilité internationale",
    organisation: "MCAST · Malte",
    period: "2024",
    summary: "Semestre de mobilité académique à la MCAST (Malte).",
  },
  {
    title: "Cycle d’ingénieur",
    organisation: "ESTIA · Bidart",
    period: "2022 — 2025",
    summary: "Double diplôme ESTIA x MBDS focalisé data et systèmes embarqués.",
  },
  {
    title: "BAC STI2D & CPGE TSI",
    organisation: "Lycée Gabriel-Touchard · Le Mans",
    period: "2018 — 2022",
    summary:
      "Formation scientifique et technologique avant l’intégration du cycle d’ingénieur.",
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Stage – Ingénieur Développement & Data",
    organisation: "Orisha Healthcare",
    period: "Avril — Octobre 2025",
    summary:
      "API unifiée, pipeline ETL, optimisation d’imports 1M+ lignes, API Django REST et documentation Sphinx/Swagger/ReDoc.",
  },
  {
    title: "Stage – Système électronique escape game",
    organisation: "Escape game",
    period: "2024",
    summary:
      "Architecture électronique de bout en bout, sourcing matériel et optimisation des coûts pour garantir fiabilité et immersion.",
  },
  {
    title: "Stage – ESTIA Recherche",
    organisation: "Laboratoire ESTIA",
    period: "2023",
    summary:
      "Programmation Arduino (C++), communication série, conception et fabrication de boîtiers ainsi que gestion de nomenclature.",
  },
];

export const skillGroups: SkillGroup[] = [
  { title: "Langages", items: ["Python", "Java", "C++"] },
  { title: "Bases de données", items: ["SQL", "MySQL", "PostgreSQL"] },
  { title: "Outils", items: ["Git", "GitHub"] },
  { title: "IDE maîtrisés", items: ["VS Code", "Cursor"] },
  { title: "Cloud", items: ["AWS"] },
  { title: "Big Data", items: ["Kafka", "Hadoop"] },
  { title: "DevOps", items: ["Docker"] },
  { title: "Méthodes", items: ["Agile", "Scrum"] },
  { title: "Soft skills", items: ["Curiosité", "Autonomie", "Communication"] },
  { title: "Langues", items: ["Anglais courant"] },
];

export const interests = [
  "Arts du cirque (représentations)",
  "Histoire",
  "Cuisine",
  "Cyclisme & course à pied",
];


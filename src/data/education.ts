import { EducationContent } from "./content-model";

export const educationRecords: EducationContent[] = [
  {
    title: "Master MBDS (Big Data & Systèmes Intelligents)",
    slug: "master-mbds",
    school: "Université Côte d'Azur",
    program: "Master MBDS",
    description:
      "Parcours orienté data, intelligence artificielle, cloud et systèmes intelligents avec une forte composante projet.",
    date: "2024 — 2025",
    technologies: ["Python", "Spark", "Kafka", "Cloud", "MLOps"],
    content:
      "Formation professionnalisante centrée sur les pipelines data, l’IA appliquée et la gouvernance des systèmes distribués.",
    sections: [
      {
        title: "Axes principaux",
        paragraphs: [
          "Architecture Big Data, pipelines temps réel et industrialisation de modèles.",
          "Projets de groupe sur l’IA appliquée (vision, NLP, recommandations).",
        ],
      },
      {
        title: "Approche pédagogique",
        paragraphs: [
          "Cas concrets fournis par des entreprises partenaires, soutenances régulières et suivi par des intervenants experts.",
        ],
      },
    ],
    focusAreas: ["Big Data", "IA", "Cloud", "Cybersécurité", "DevOps"],
    competencies: [
      "Conception d’architectures distribuées",
      "Mise en production de modèles",
      "Gestion de projet data",
      "Communication technique",
    ],
    projects: [
      "Dashboard anti-phishing",
      "Pipeline NLP / classification",
      "Outils d’industrialisation MLOps",
    ],
  },
  {
    title: "Mobilité internationale",
    slug: "mobilite-mcast",
    school: "MCAST · Malte",
    program: "Semestre académique",
    description:
      "Semestre de mobilité axé sur l’ouverture internationale, la collaboration multiculturelle et les projets en anglais.",
    date: "2024",
    technologies: ["Collaboration internationale", "Gestion de projet", "Data viz"],
    content:
      "Immersion anglophone, participation à des hackathons et travaux de groupe orientés innovation.",
    sections: [
      {
        title: "Axes principaux",
        paragraphs: [
          "Cours orientés innovation, prototypage rapide et design thinking.",
          "Focus sur la présentation orale / pitch en anglais.",
        ],
      },
    ],
    focusAreas: ["Innovation", "Ouverture internationale", "Leadership"],
    competencies: [
      "Communication interculturelle",
      "Gestion d’équipe internationale",
      "Pitch en anglais",
    ],
    projects: ["Challenge innovation MCAST", "Prototypes UX rapides"],
  },
  {
    title: "Cycle ingénieur ESTIA",
    slug: "cycle-ingenieur-estia",
    school: "ESTIA · Bidart",
    program: "Diplôme d'ingénieur",
    description:
      "Double diplôme ESTIA x MBDS focalisé data, IoT et systèmes embarqués.",
    date: "2022 — 2025",
    technologies: ["C/C++", "Python", "IoT", "Electronique", "Management"],
    content:
      "Tronc commun ingénierie + spécialisation data/logiciel avec de nombreux projets (automatisation, systèmes embarqués, innovation).",
    sections: [
      {
        title: "Axes principaux",
        paragraphs: [
          "Architecture logicielle, objets connectés, projets R&D avec entreprises partenaires.",
        ],
      },
    ],
    focusAreas: ["Data", "IoT", "Innovation produit"],
    competencies: [
      "Gestion de projet",
      "Travail en trinôme international",
      "Conception hardware + software",
    ],
    projects: [
      "Système électronique escape game",
      "Projets hardware Arduino",
      "Applications de monitoring",
    ],
  },
  {
    title: "BAC STI2D & CPGE TSI",
    slug: "bac-sti2d-cpge-tsi",
    school: "Lycée Gabriel-Touchard · Le Mans",
    program: "STI2D + CPGE TSI",
    description:
      "Bases scientifiques solides avant l’intégration en école d’ingénieurs.",
    date: "2018 — 2022",
    technologies: ["Maths", "Physique", "Systèmes embarqués"],
    content:
      "Formation exigeante combinant sciences de l’ingénieur et préparation concours.",
    sections: [
      {
        title: "Axes principaux",
        paragraphs: [
          "Sciences fondamentales, électronique, automatisme.",
          "Préparation intensive aux concours TSI.",
        ],
      },
    ],
    focusAreas: ["Sciences de l’ingénieur", "Méthodologie", "Résilience"],
    competencies: [
      "Rigueur scientifique",
      "Travail intensif",
      "Gestion du stress",
    ],
    projects: ["Mini-projets systèmes embarqués", "Concours blancs"],
  },
];

export function getEducationBySlug(slug: string) {
  return educationRecords.find((record) => record.slug === slug);
}

export type { EducationContent } from "./content-model";



import { ExperienceContent } from "./content-model";

export const experiences: ExperienceContent[] = [
  {
    title: "Stage – Ingénieur Développement & Data",
    slug: "orisha-healthcare-stage",
    company: "Orisha Healthcare",
    description:
      "API unifiée, pipeline ETL, optimisation d’imports 1M+ lignes, API Django REST et documentation Sphinx/Swagger/ReDoc.",
    date: "Avril — Octobre 2025",
    technologies: [
      "Python",
      "Django REST",
      "PostgreSQL",
      "Celery",
      "Docker",
    ],
    content:
      "Mission cœur produit : moderniser la collecte de données, exposer de nouvelles APIs et documenter chaque composant pour accélérer l’onboarding des équipes.",
    sections: [
      {
        title: "Missions générales",
        paragraphs: [
          "Refonte d’une API monolithique vers des endpoints modulaires sécurisés et versionnés.",
          "Mise en place d’un pipeline ETL résilient pour traiter des imports massifs (jusqu’à 1 million de lignes par charge).",
        ],
      },
      {
        title: "Approche narrative",
        paragraphs: [
          "J’ai structuré la mission comme un produit : cadrage, prototypes, documentation, diffusion des bonnes pratiques (performances, SLOs).",
        ],
      },
    ],
    missions: [
      "Concevoir et développer les endpoints REST critiques (authentification, synchronisation catalogue, reporting).",
      "Optimiser les imports via COPY PostgreSQL, batchs et files Celery.",
      "Structurer la documentation Sphinx/Swagger/ReDoc pour faciliter la reprise par l’équipe QA et le support.",
    ],
    outcomes: [
      "Temps d’import divisé par 3 grâce aux buffers et à l’optimisation SQL.",
      "Monitoring fiable (logs + métriques) pour comprendre rapidement un incident.",
      "Documentation prête pour une homologation interne.",
    ],
    learnings: [
      "Dialogue constant avec les équipes métier pour cadrer les périmètres sensibles.",
      "Importance de la traçabilité (logs corrélés + IDs fonctionnels).",
      "Organisation agile : démonstrations hebdo et feedbacks immédiats intégrés au backlog.",
    ],
  },
  {
    title: "Stage – Système électronique escape game",
    slug: "escape-game-systeme",
    company: "Escape game",
    description:
      "Architecture électronique de bout en bout, sourcing matériel et optimisation des coûts pour garantir fiabilité et immersion.",
    date: "2024",
    technologies: ["Arduino", "C++", "I2C", "Impression 3D", "CAD"],
    content:
      "Mission hardware / software : concevoir des coffres interactifs et un système de scénarisation fiable pour une salle d’escape game.",
    sections: [
      {
        title: "Missions générales",
        paragraphs: [
          "Conception des schémas électroniques, définition des protocoles de communication et intégration des capteurs.",
          "Pilotage de la chaîne complète : choix des composants, prototypage, tests utilisateurs, documentation.",
        ],
      },
      {
        title: "Approche narrative",
        paragraphs: [
          "J’ai présenté chaque fonctionnalité comme une expérience joueur : storytelling, déclencheurs, signaux visuels et auditifs.",
        ],
      },
    ],
    missions: [
      "Développer le firmware Arduino en C++ (gestion des entrées, priorisation des événements, sécurité).",
      "Intégrer les capteurs (magnétiques, RFID, pression) avec un bus I2C robuste.",
      "Documenter la maintenance (plans, nomenclature, procédures de test).",
    ],
    outcomes: [
      "Réduction des coûts matériels (~20 %) en optimisant la nomenclature.",
      "Système stable pour des sessions de 60 minutes sans recalibrage.",
      "Transfert de connaissances réussi vers l’équipe d’animation.",
    ],
    learnings: [
      "Relation client : vulgariser l’électronique pour co-concevoir les puzzles.",
      "Gestion des risques matériels (disponibilité composants, délais).",
      "Monitoring en conditions réelles et boucle rapide d’amélioration.",
    ],
  },
  {
    title: "Stage – ESTIA Recherche",
    slug: "estia-recherche",
    company: "Laboratoire ESTIA",
    description:
      "Programmation Arduino (C++), communication série, conception et fabrication de boîtiers ainsi que gestion de nomenclature.",
    date: "2023",
    technologies: ["Arduino", "C++", "SolidWorks", "Git", "Lab tooling"],
    content:
      "Stage laboratoire mêlant prototypage rapide, documentation scientifique et rédaction de protocoles de test.",
    sections: [
      {
        title: "Missions générales",
        paragraphs: [
          "Développer les prototypes électroniques pour des bancs de tests de capteurs.",
          "Documenter chaque itération pour permettre aux chercheurs de reproduire les expériences.",
        ],
      },
      {
        title: "Approche narrative",
        paragraphs: [
          "Focus sur la rigueur scientifique : traçabilité, reproductibilité, communication claire auprès d’équipes pluridisciplinaires.",
        ],
      },
    ],
    missions: [
      "Programmer les microcontrôleurs (Arduino/C++) et mettre en place une communication série fiable.",
      "Concevoir les boîtiers via CAO et organiser la fabrication rapide.",
      "Structurer la nomenclature et les fiches de tests pour les futures cohortes d’étudiants.",
    ],
    outcomes: [
      "Bancs de test opérationnels pour les équipes recherche.",
      "Réduction du temps d’assemblage grâce à une documentation claire.",
      "Capitalisation des retours pour les promotions suivantes.",
    ],
    learnings: [
      "Méthodologie scientifique appliquée au développement.",
      "Importance d’une documentation neutre et reproductible.",
      "Collaboration avec des profils très divers (chercheurs, étudiants, techniciens).",
    ],
  },
];

export function getExperienceBySlug(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}

export type { ExperienceContent } from "./content-model";



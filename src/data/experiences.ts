import { ExperienceContent } from "./content-model";

export const experiences: ExperienceContent[] = [
  {
    "title": "Stage – Développeur Backend & Data",
    "slug": "orisha-healthcare-stage",
    "company": "Orisha Healthcare",
    "type": "stage",
    "description": "Développement d’un middleware dédié aux nomenclatures médicales (LPP, CCAM, NGAP, NABM), conception du modèle de données complet et réalisation d’APIs Django REST permettant l’ingestion, la consultation et la gestion des droits d’accès.",
    "date": "Avril — Octobre 2025",
    "technologies": [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
      "GitHub Actions (concepts)",
      "AJAX",
      "SSE / WebSocket"
    ],
    "content": "Mission orientée intégration et structuration des données : modélisation complète des nomenclatures médicales, création d’un middleware d’accès, développement d’APIs sécurisées et mise en place d’un système d’insertion optimisé pour traiter des volumes importants, avec suivi temps réel du traitement côté front.",
    "sections": [
      {
        "title": "Missions générales",
        "paragraphs": [
          "Étude des nomenclatures de facturation de l’Assurance Maladie (LPP, CCAM, NGAP, NABM) afin de comprendre leur structure et leurs règles fonctionnelles.",
          "Modélisation complète en base de données : initialement seul le modèle de l’annexe 2 existait. J’ai conçu et normalisé l’ensemble des tables nécessaires pour supporter toutes les nomenclatures.",
          "Développement des endpoints Django REST pour exposer les données, permettre leur mise à jour et assurer la cohérence inter-nomenclatures.",
          "Intégration puis extension du service d’authentification avec une gestion des autorisations par nomenclature pour chaque utilisateur.",
          "Mise en place des processus de souscription au logiciel, incluant la gestion des droits et la configuration initiale des accès."
        ]
      },
      {
        "title": "Optimisation des performances",
        "paragraphs": [
          "Certaines nomenclatures comportant des fichiers particulièrement volumineux, j’ai conçu différentes stratégies d’insertion afin de maintenir une expérience utilisateur fluide : buffers d’insertion, opérations batch, puis import massif via `COPY` PostgreSQL.",
          "Conception d’un suiveur d’état en temps réel sur la page de demande d’ajout de version : mise à jour dynamique de la progression grâce à du JavaScript, de l’AJAX et un canal SSE/WebSocket."
        ]
      },
      {
        "title": "Approche narrative",
        "paragraphs": [
          "J’ai abordé ce projet comme la construction d’un middleware métier complet : analyse des règles de facturation, choix de modélisation, structuration des APIs et documentation continue.",
          "Chaque composant (modèle de données, API, pipeline d’import, gestion des droits) a été conçu pour être repris facilement par les équipes QA et support.",
          "Je me suis également familiarisé avec les concepts de GitHub Actions afin d’optimiser certaines étapes du workflow sans pour autant mettre en place une chaîne CI/CD complète."
        ]
      }
    ],
    "missions": [
      "Modéliser les nomenclatures LPP, CCAM, NGAP et NABM en base de données à partir de leurs structures officielles.",
      "Développer les endpoints Django REST exposant les nomenclatures, leurs versions et leurs règles d’usage.",
      "Étendre le service d’authentification pour gérer des droits par nomenclature et sécuriser les accès aux endpoints.",
      "Mettre en place les workflows de souscription utilisateur et de configuration initiale des droits.",
      "Concevoir un pipeline d’insertion optimisé (buffers, batchs, PostgreSQL COPY).",
      "Créer un module de suivi temps réel de l’import via AJAX + SSE/WebSocket."
    ],
    "outcomes": [
      "Un middleware complet, capable d’ingérer, structurer et exposer l’ensemble des nomenclatures de facturation médicale.",
      "Ingestion fiable et performante, adaptée aux très gros volumes de données.",
      "Interface utilisateur enrichie avec un suivi d’import en temps réel.",
      "Sécurisation renforcée des APIs grâce à un modèle d’autorisation par nomenclature.",
      "Documentation technique facilitant la reprise par les équipes internes."
    ],
    "learnings": [
      "Compréhension approfondie des nomenclatures de facturation de l’Assurance Maladie et de leurs règles métier.",
      "Maîtrise avancée de Django REST, du design d’APIs et de la structuration d’un middleware.",
      "Optimisation de traitements massifs sous PostgreSQL et bonnes pratiques de performance.",
      "Mise en œuvre de communications temps réel (AJAX, SSE / WebSocket).",
      "Familiarisation avec GitHub Actions et les workflows d’intégration."
    ]
  },
  {
    title: "Stage – Système électronique escape game",
    slug: "escape-game-systeme",
    company: "Escape game",
    type: "stage",
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
    type: "stage",
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
  {
  title: "Employé de mise en rayon",
  slug: "carrefour-ametzondo-rayon",
  company: "Carrefour Ametzondo — Bayonne",
  type: "student_job",
  description:
    "Mise en rayon, gestion du facing, réassort et contact client dans un hypermarché à forte affluence.",
  date: "Novembre 2024 — Mars 2025",
  technologies: [],
  content:
    "Travail étudiant effectué en parallèle de mes études. Une expérience orientée organisation, réactivité et service client.",
  sections: [
    {
      title: "Rôle et responsabilités",
      paragraphs: [
        "Mise en rayon quotidienne et gestion du réassort.",
        "Maintien de la qualité du facing et de la propreté du rayon.",
        "Aide directe auprès des clients pour les orienter et répondre aux demandes.",
      ],
    },
  ],
  missions: [
    "Gérer les flux de marchandises et la priorisation des tâches en période d’affluence.",
    "Assurer la mise en place des promotions et des réassorts urgents.",
    "Contribuer à un rayon organisé et attractif.",
  ],
  outcomes: [
    "Rythme de travail soutenu maîtrisé.",
    "Amélioration significative du contact client et de la communication.",
    "Gestion du stress et des horaires variables.",
  ],
  learnings: [
    "Rigueur et cadence de travail dans un environnement exigeant.",
    "Esprit d’équipe et entraide entre services.",
    "Relationnel client et gestion de situations imprévues.",
  ],
},
{
  title: "Serveur & Barman",
  slug: "restaurant-st-pierre-lemans",
  company: "Restaurant Le St Pierre — Le Mans",
  type: "student_job",
  description:
    "Service en salle et au bar dans un restaurant traditionnel situé au cœur du Mans.",
  date: "2023",
  technologies: [],
  content:
    "Emploi étudiant axé sur le service, la rapidité d’exécution et le travail en équipe.",
  sections: [
    {
      title: "Rôle et responsabilités",
      paragraphs: [
        "Service à table, prise de commande et encaissement.",
        "Préparation de boissons au bar et gestion des flux en période de rush.",
        "Contribution à l’ambiance générale de la salle.",
      ],
    },
  ],
  missions: [
    "Assurer un service fluide et agréable malgré les pics d’affluence.",
    "Maintenir une bonne coordination avec la cuisine.",
    "Garantir une qualité constante dans l’accueil des clients.",
  ],
  outcomes: [
    "Amélioration du contact client et du sens du service.",
    "Excellente gestion du stress en environnement rapide.",
    "Renforcement du travail d’équipe.",
  ],
  learnings: [
    "Communication claire et efficace.",
    "Priorisation des tâches dans des situations dynamiques.",
    "Autonomie dans un cadre à forte charge opérationnelle.",
  ],
},
{
  title: "Serveur saisonnier",
  slug: "vercland-ccgpf",
  company: "Village vacances CCGPF — Vercland (Haute-Savoie)",
  type: "student_job",
  description:
    "Service en restauration dans un centre de vacances d’altitude, en contact direct avec les familles et groupes.",
  date: "2023",
  technologies: [],
  content:
    "Expérience saisonnière demandant polyvalence, adaptation et gestion des services en grande capacité.",
  sections: [
    {
      title: "Rôle et responsabilités",
      paragraphs: [
        "Service en continu matin/midi/soir selon les périodes.",
        "Préparation et mise en place des buffets et salles.",
        "Collaboration régulière avec l’équipe d’animation et d’hébergement.",
      ],
    },
  ],
  missions: [
    "Gérer des services avec un volume important de convives.",
    "Garantir la fluidité entre salle, cuisine et logistique.",
    "Contribuer à l’accueil global des vacanciers.",
  ],
  outcomes: [
    "Sens du service renforcé.",
    "Maîtrise de la communication en équipe.",
    "Adaptation rapide à de nouveaux environnements de travail.",
  ],
  learnings: [
    "Résilience et gestion de la fatigue saisonnière.",
    "Organisation quotidienne dans un rythme soutenu.",
    "Polyvalence entre différentes responsabilités.",
  ],
},
{
  title: "Professeur particulier en mathématiques",
  slug: "cours-particuliers-maths",
  company: "Indépendant",
  type: "student_job",
  description:
    "Cours particulier niveau collège et lycée pour accompagner plusieurs élèves en mathématiques.",
  date: "2022",
  technologies: [],
  content:
    "Accompagnement pédagogique individuel : diagnostic, explication des notions clés et suivi de progression.",
  sections: [
    {
      title: "Rôle et responsabilités",
      paragraphs: [
        "Identifier les difficultés de chaque élève et ajuster les méthodes.",
        "Créer des exercices ciblés pour consolider les acquis.",
        "Suivre les progrès sur le long terme.",
      ],
    },
  ],
  missions: [
    "Construire des séances structurées et adaptées.",
    "Expliquer des concepts complexes de manière accessible.",
    "Encourager la confiance des élèves et leur autonomie.",
  ],
  outcomes: [
    "Amélioration visible des résultats scolaires.",
    "Relation de confiance avec les familles.",
    "Méthodologie pédagogique solide.",
  ],
  learnings: [
    "Pédagogie, patience et écoute active.",
    "Capacité à vulgariser et structurer une progression.",
    "Compréhension fine de la motivation d’un apprenant.",
  ],
},
];

export function getExperienceBySlug(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}

export type { ExperienceContent } from "./content-model";



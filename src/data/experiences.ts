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
    "title": "Stage – Systèmes électroniques pour escape game",
    "slug": "escape-game-systeme",
    "company": "Prestataire pour un projet Opération Escape destiné à la Cité des Mémoires (Hendaye)",
    "type": "stage",
    "description": "Conception complète de systèmes électroniques interactifs embarqués pour enrichir les énigmes d’une salle d’escape game.",
    "date": "2024",
    "technologies": ["Arduino", "C++", "RFID", "I2C", "Capteurs mécaniques"],
    "content": "Développement d’interfaces physiques immersives : capteurs, contrôleurs, communication I2C, scénarisation, contrôle distant depuis la salle du game master et automatisation du reset des énigmes.",
    "sections": [
      {
        "title": "Contexte du projet",
        "paragraphs": [
          "La salle d’escape game disposait d’un ensemble d’énigmes nécessitant une modernisation via des systèmes électroniques dissimulés dans le décor afin de renforcer l’immersion et générer des effets ‘Waouh’.",
          "Les enjeux incluaient : fiabilité sur des sessions successives de 60 minutes, intégration invisible dans le décor, maintenance simple pour les game masters et coûts matériels optimisés."
        ]
      },
      {
        "title": "Contexte institutionnel",
        "paragraphs": [
          "Le projet s’inscrivait dans une chaîne de prestation : j’effectuais mon stage au sein d’une TPE missionnée par Opération Escape, elle-même prestataire pour la Cité des Mémoires d’Hendaye dans le cadre de la modernisation de leur parcours scénographique et de leur escape game.",
          "La Cité des Mémoires est un espace muséal dédié à la transmission du patrimoine local. Les systèmes électroniques que j’ai développés ou dont j’ai conçu les prototypes ont été intégrés à plusieurs de leurs énigmes immersives.",
          "Les photos présentées ci-dessous illustrent uniquement le lieu d’accueil final du projet, afin de contextualiser l’environnement dans lequel les énigmes ont été déployées."
        ]
      },
      {
        "title": "Galerie photo",
        "paragraphs": [
          "Quelques visuels du lieu final d'intégration du projet (photos génériques du site, utilisées à titre de contextualisation)."
        ],
        "images": [
        {
          "src": "/images/andaye-la-cite-des-memoires-exterieur-hendaye-tourisme.webp",
          "alt": "Entrée de la Cité des Mémoires à Hendaye",
          "width": 800,
          "height": 600
        },
        {
          "src": "/images/escape-cite-des-memoires-hendaye-tourisme-1.webp",
          "alt": "Salle immersive de la Cité des Mémoires",
          "width": 800,
          "height": 600
        },
        {
          "src": "/images/img_7790.webp",
          "alt": "Espace de jeu où les systèmes électroniques ont été intégrés",
          "width": 800,
          "height": 600
        }
      ]
      },
      {
        "title": "Défis techniques et contraintes matérielles",
        "paragraphs": [
          "Les premières versions des énigmes électroniques ont été réalisées en prototypage pur : câblage manuel, soudures réalisées à la main et intégration dans des espaces décoratifs très contraints. Cette approche a permis de valider le fonctionnement logiciel et la logique de jeu, mais a mis en évidence des limites de fiabilité liées au câblage et aux connectiques lors d’un usage prolongé et répété.",
          "Cette étape a été essentielle pour distinguer la phase de conception/validation logique de la nécessité d'une production plus robuste lorsqu’un système doit fonctionner en continu dans un environnement public."
        ]
      },
      {
        "title": "Missions générales",
        "paragraphs": [
          "Conception des architectures électroniques (schémas, choix des capteurs, microcontrôleurs, protocoles).",
          "Développement du firmware Arduino en C++ pour gérer événements, priorités, sécurités et retour d’état.",
          "Implémentation de capteurs variés : systèmes RFID, interrupteurs mécaniques dissimulés (piano), électroaimants, capteurs de position.",
          "Mise en place d’un contrôle à distance depuis la salle du game master (monitoring, déclencheurs, bypass si besoin).",
          "Définition d’un processus complet de réinitialisation des énigmes pour préparer efficacement chaque nouvelle session.",
          "Documentation technique, nomenclature matérielle, et procédures de maintenance."
        ]
      },
      {
        "title": "Collaboration et industrialisation",
        "paragraphs": [
          "Après validation des prototypes fonctionnels, certaines énigmes – notamment celles basées sur des lecteurs RFID multiples – ont nécessité une production plus robuste que celle réalisable avec le matériel disponible sur site. La fiabilité recherchée impliquait des supports mécaniques précis, un câblage propre et des connectiques protégées.",
          "Un spécialiste externe équipé d’outils adaptés (impression 3D, câblage professionnel) a repris mes prototypes pour les industrialiser tout en conservant la logique fonctionnelle et les scénarios que j’avais développés. Ce travail collaboratif a permis d’atteindre une fiabilité optimale pour une utilisation en continu dans une salle d’escape game.",
          "Cette expérience a renforcé ma compréhension du cycle complet d’un système embarqué : du prototype à l’intégration professionnelle."
        ]
      },
      {
        "title": "Approche narrative",
        "paragraphs": [
          "Chaque système a été conçu comme un élément de jeu : interaction fluide, rétroactions visuelles/sonores, cohérence de la narration et intégration parfaite dans le décor.",
          "Le design électronique a été guidé par les contraintes d’immersion : invisibilité du matériel, résistance physique, fiabilité en boucle continue."
        ]
      }
    ],
    "missions": [
      "Développer les contrôleurs Arduino avec gestion des séquences d’événements (ex. clavier piano dissimulé, séquences à reproduire).",
      "Intégrer des lecteurs et tags RFID pour activer des éléments cachés selon la position exacte d’objets de décor.",
      "Mettre en place une communication I2C robuste pour interconnecter modules et capteurs.",
      "Créer un outil de contrôle à distance depuis le poste game master permettant d’activer, superviser ou réinitialiser les énigmes.",
      "Définir la procédure complète de reset automatique/manuel entre les sessions."
    ],
    "outcomes": [
      "Systèmes opérationnels, stables et utilisés depuis plus d’un an après leur mise en service.",
      "Expérience joueur nettement enrichie grâce à des interactions physiques variées (RFID, interrupteurs cachés, électro-aimants).",
      "Maintenance facilitée grâce à la documentation et au poste de contrôle game master."
    ],
    "learnings": [
      "Conception de systèmes embarqués fiables pour un usage répété en conditions réelles.",
      "Différenciation concrète entre prototype fonctionnel et produit final industrialisé.",
      "Collaboration avec des professionnels du spectacle immersif (game designers, scénographes).",
      "Intégration électronique invisible dans des environnements décoratifs contraints.",
      "Gestion des risques matériels et optimisation des coûts."
    ]
  },
  {
    "title": "Stage – ESTIA Recherche",
    "slug": "estia-recherche",
    "company": "Laboratoire ESTIA",
    "type": "stage",
    "description": "Prototypage Arduino et communication série avec Raspberry Pi pour piloter des afficheurs mécaniques et électroniques, étude de l’impact sur le comportement de consommation électrique.",
    "date": "2023",
    "technologies": ["Arduino", "C++", "Raspberry Pi", "SolidWorks / Onshape", "Git", "Lab tooling"],
    "content": "Stage orienté prototypage et recherche scientifique : pilotage de cartes Arduino, communication série avec un Raspberry Pi, conception de boîtiers et étude d’impact comportemental sur la consommation énergétique.",
    "sections": [
      {
        "title": "Missions générales",
        "paragraphs": [
          "Développement de prototypes électroniques pour piloter des afficheurs mécaniques et écrans via Arduino et communication série avec un Raspberry Pi.",
          "Étude et mise en place de la communication série permettant à un Raspberry Pi de contrôler plusieurs cartes Arduino simultanément.",
          "Conception et réalisation du carter du boîtier d’afficheur via CAO (Onshape) et étude économique des matériaux et fournisseurs.",
          "Documentation scientifique et protocoles de tests pour assurer la reproductibilité et la traçabilité des expériences."
        ]
      },
      {
        "title": "Approche narrative",
        "paragraphs": [
          "Projet orienté recherche appliquée : l’objectif était de tester l’impact d’afficheurs mécaniques ou électroniques sur la consommation électrique des individus face à la production d’énergie solaire locale.",
          "Chaque prototype a été conçu pour être modulable et reproductible afin de capitaliser les retours pour les futures expérimentations.",
          "Focus sur la rigueur scientifique : traçabilité, reproductibilité, communication claire avec des équipes pluridisciplinaires."
        ]
      }
    ],
    "missions": [
      "Programmer les microcontrôleurs Arduino pour piloter moteurs et afficheurs selon les données de production solaire.",
      "Implémenter une communication série fiable entre un Raspberry Pi et plusieurs cartes Arduino pour centraliser le contrôle des afficheurs.",
      "Concevoir et réaliser le carter du boîtier de l’afficheur via CAO (Onshape), avec étude de coûts et choix des matériaux.",
      "Documenter le protocole scientifique, les tests et les résultats pour assurer la reproductibilité des expériences."
    ],
    "outcomes": [
      "Prototypes fonctionnels pour piloter plusieurs afficheurs via un Raspberry Pi.",
      "Carter d’afficheur conçu et optimisé pour fabrication économique.",
      "Documentation scientifique complète et protocoles de tests reproductibles.",
      "Capacité à tester et observer l’impact de différentes interfaces sur le comportement de consommation électrique."
    ],
    "learnings": [
      "Maîtrise du prototypage électronique et programmation Arduino/C++ pour la commande de moteurs et afficheurs.",
      "Conception CAO et analyse de coût pour la fabrication de boîtiers physiques.",
      "Mise en place de communication série entre Raspberry Pi et Arduino.",
      "Méthodologie scientifique appliquée : rigueur, traçabilité et documentation pour expérimentations reproductibles.",
      "Collaboration avec des profils divers : chercheurs, étudiants, techniciens."
    ]
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



import { ReactNode } from "react";

export type ContentHighlight = {
  label: string;
  value: string;
};

export type ContentLink = {
  label: string;
  href: string;
};

export type NarrativeSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ChallengeSolution = {
  challenge: string;
  solution: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
};

export type BaseContentItem = {
  title: string;
  slug: string;
  description: string;
  date: string;
  technologies: string[];
  content: string | ReactNode;
  sections: NarrativeSection[];
};

export type ProjectContent = BaseContentItem & {
  motivations: string[];
  architecture: NarrativeSection;
  competencies: string[];
  challenges: ChallengeSolution[];
  highlights: ContentHighlight[];
  results: string[];
  links?: ContentLink[];
  gallery?: GalleryItem[];
};

export type ExperienceContent = BaseContentItem & {
  company: string;
  missions: string[];
  learnings: string[];
  outcomes: string[];
};

export type EducationContent = BaseContentItem & {
  school: string;
  program: string;
  focusAreas: string[];
  competencies: string[];
  projects: string[];
};



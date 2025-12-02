import { notFound } from "next/navigation";
import { DetailPageLayout } from "@/components/content/detail-page";
import { experiences } from "@/data/experiences";

type ExperiencePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export default function ExperienceDetailPage({ params }: ExperiencePageProps) {
  const experience = experiences.find((item) => item.slug === params.slug);

  if (!experience) {
    notFound();
  }

  const sections = [
    ...experience.sections,
    {
      title: "Missions détaillées",
      paragraphs: ["Responsabilités principales :"],
      bullets: experience.missions,
    },
    {
      title: "Résultats livrés",
      paragraphs: experience.outcomes,
    },
    {
      title: "Compétences acquises",
      paragraphs: experience.learnings,
    },
  ];

  return (
    <DetailPageLayout
      eyebrow="Expérience professionnelle"
      title={experience.title}
      description={experience.description}
      date={experience.date}
      tags={experience.technologies}
      summary={experience.content}
      sections={sections}
      backHref="/experiences"
      backLabel="Retour aux expériences"
    />
  );
}



import { notFound } from "next/navigation";
import { DetailPageLayout } from "@/components/content/detail-page";
import { experiences } from "@/data/experiences";

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export default async function ExperienceDetailPage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);

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

  const allImages = [
  ...(experience.images ?? []),
  ...experience.sections.flatMap(section => section.images ?? [])
  ];

  const gallery = allImages.map(img => ({
    src: img.src,
    alt: img.alt,
    width: img.width || 800,
    height: img.height || 600
  }));

  //  const gallery = experience.images?.map(img => ({
  //   src: img.src,
  //   alt: img.alt,
  //   width: img.width || 800,  // Utilisez les dimensions fournies ou des valeurs par défaut
  //   height: img.height || 600
  // })) || [];

  return (
    <DetailPageLayout
      eyebrow="Expérience professionnelle"
      title={experience.title}
      description={experience.description}
      date={experience.date}
      tags={experience.technologies}
      summary={experience.content}
      sections={sections}
      gallery={gallery}
      backHref="/experiences"
      backLabel="Retour aux expériences"
    />
  );
}



import { notFound } from "next/navigation";
import { DetailPageLayout } from "@/components/content/detail-page";
import { educationRecords } from "@/data/education";

type EducationPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return educationRecords.map((record) => ({ slug: record.slug }));
}

export default function EducationDetailPage({ params }: EducationPageProps) {
  const record = educationRecords.find((item) => item.slug === params.slug);

  if (!record) {
    notFound();
  }

  const sections = [
    ...record.sections,
    {
      title: "Axes principaux",
      paragraphs: ["Thématiques majeures travaillées pendant la formation :"],
      bullets: record.focusAreas,
    },
    {
      title: "Compétences développées",
      paragraphs: ["Compétences clés consolidées :"],
      bullets: record.competencies,
    },
    {
      title: "Projets significatifs",
      paragraphs: record.projects,
    },
  ];

  return (
    <DetailPageLayout
      eyebrow="Formation"
      title={record.title}
      description={record.description}
      date={record.date}
      tags={record.technologies}
      summary={record.content}
      sections={sections}
      backHref="/education"
      backLabel="Retour aux formations"
    />
  );
}



import { notFound } from "next/navigation";
import { DetailPageLayout } from "@/components/content/detail-page";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const sections = [
    {
      title: "Motivations",
      paragraphs: [
        "Pourquoi ce projet mérite une page dédiée ? Parce qu’il traduit un besoin réel auquel j’ai dû répondre rapidement.",
      ],
      bullets: project.motivations,
    },
    ...project.sections,
    {
      title: project.architecture.title,
      paragraphs: project.architecture.paragraphs,
      bullets: project.architecture.bullets,
    },
    {
      title: "Compétences développées",
      paragraphs: ["Compétences consolidées pendant le projet :"],
      bullets: project.competencies,
    },
    {
      title: "Résultats & impact",
      paragraphs: project.results,
    },
  ];

  return (
    <DetailPageLayout
      eyebrow="Projet personnel"
      title={project.title}
      description={project.description}
      date={project.date}
      tags={project.technologies}
      summary={project.content}
      highlights={project.highlights}
      sections={sections}
      challenges={project.challenges}
      links={project.links}
      gallery={project.gallery}
      backHref="/projects"
      backLabel="Retour aux projets"
    />
  );
}



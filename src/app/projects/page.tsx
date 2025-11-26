import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/cards/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Container className="space-y-10">
      <SectionHeading
        eyebrow="Projets"
        title="Mises en pratique data & IA"
        description="Dashboard anti-phishing, pipeline NLP et veille LLM : aperçu des réalisations issues du double cursus ESTIA · MBDS."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Chaque projet illustre un savoir-faire complémentaire : observabilité,
        traitement automatique du langage et automatisation par IA générative.
      </p>
    </Container>
  );
}


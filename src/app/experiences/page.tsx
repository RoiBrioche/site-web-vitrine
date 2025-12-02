import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContentCard } from "@/components/cards/content-card";
import { experiences } from "@/data/experiences";

export default function ExperiencesPage() {
  return (
    <Container className="space-y-12">
      <SectionHeading
        eyebrow="Expériences professionnelles"
        title="Missions orientées impact"
        description="Chaque expérience est documentée comme un cas d’usage : contexte, missions principales, technologies utilisées et compétences développées."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((experience) => (
          <ContentCard
            key={experience.slug}
            href={`/experiences/${experience.slug}`}
            eyebrow="Expérience"
            title={experience.title}
            description={experience.description}
            date={experience.date}
            meta={experience.company}
            tags={experience.technologies}
            footerLabel="Lire la mission"
          />
        ))}
      </div>
    </Container>
  );
}



import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContentCard } from "@/components/cards/content-card";
import { educationRecords } from "@/data/education";

export default function EducationPage() {
  return (
    <Container className="space-y-12">
      <SectionHeading
        eyebrow="Formations"
        title="Parcours académique détaillé"
        description="Chaque formation dispose d’une fiche explicative : axes pédagogiques, projets marquants et compétences réellement consolidées."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {educationRecords.map((record) => (
          <ContentCard
            key={record.slug}
            href={`/education/${record.slug}`}
            eyebrow="Formation"
            title={record.title}
            description={record.description}
            date={record.date}
            meta={record.school}
            tags={record.focusAreas}
            footerLabel="Lire la fiche"
          />
        ))}
      </div>
    </Container>
  );
}



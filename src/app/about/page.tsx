import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { interests, skillGroups } from "@/data/profile";
import { educationRecords } from "@/data/education";
import { experiences } from "@/data/experiences";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <Container className="space-y-16">
      <section className="space-y-6">
        <SectionHeading
          eyebrow="À propos"
          title="Ingénieur Développement & Data Science"
          description="Double diplômé ESTIA · Master MBDS (Big Data & Systèmes Intelligents), avec un fort intérêt pour la data, l’IA, le développement logiciel et les systèmes embarqués."
        />
        <p className="text-base text-zinc-600 dark:text-zinc-300">
          Ingénieur double diplômé, j’aime concevoir des solutions complètes : du développement
          d’applications et d’APIs à la gestion de données, en passant par l’automatisation et
          l’intégration de services. J’accorde une attention particulière à la fiabilité, à la
          documentation et à la qualité de l’expérience développeur.

        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6 rounded-3xl border border-zinc-200/60 bg-white/80 p-8 dark:border-zinc-800/70 dark:bg-zinc-950/60">
          <SectionHeading
            eyebrow="Formations"
            title="Parcours académique"
            description="Master MBDS, cycle ingénieur ESTIA, mobilité internationale et bases scientifiques solides."
          />
          <ul className="space-y-5">
            {educationRecords.slice(0, 3).map((record) => (
              <li key={record.slug} className="space-y-1">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {record.title}
                  </p>
                  <span className="text-xs uppercase tracking-wide text-zinc-400">
                    {record.date}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {record.school}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{record.description}</p>
                <Link
                  href={`/education/${record.slug}`}
                  className="inline-flex text-xs font-semibold text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-300"
                >
                  Voir la fiche détaillée →
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6 rounded-3xl border border-zinc-200/60 bg-white/80 p-8 dark:border-zinc-800/70 dark:bg-zinc-950/60">
          <SectionHeading
            eyebrow="Expériences"
            title="Stages orientés data & systèmes"
            description="De la conception d’API et pipelines ETL aux systèmes embarqués pour escape game."
          />
          <ul className="space-y-5">
            {experiences.slice(0, 2).map((item) => (
              <li key={item.slug} className="space-y-1">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {item.title}
                  </p>
                  <span className="text-xs uppercase tracking-wide text-zinc-400">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {item.company}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{item.description}</p>
                <Link
                  href={`/experiences/${item.slug}`}
                  className="inline-flex text-xs font-semibold text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-300"
                >
                  Voir la fiche mission →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
        <SectionHeading
          eyebrow="Compétences"
          title="Un profil polyvalent orienté développement et données"
          description="Maîtrise des outils modernes du développement logiciel, de l’ingénierie data et de l’automatisation."
        />
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillColumn key={group.title} title={group.title} items={group.items} />
        ))}
      </section>

      <section className="rounded-3xl border border-zinc-200/60 bg-white/80 p-8 dark:border-zinc-800/70 dark:bg-zinc-950/60">
        <SectionHeading
          eyebrow="Centres d’intérêt"
          title="Équilibre personnel"
          description="Activités artistiques et sportives qui nourrissent ma créativité et mon équilibre : arts du cirque, histoire, cuisine, cyclisme et course à pied."
        />
        <ul className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-300">
          {interests.map((interest) => (
            <li
              key={interest}
              className="rounded-full border border-zinc-200/70 px-4 py-2 dark:border-zinc-700"
            >
              {interest}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-zinc-200/60 bg-gradient-to-br from-cyan-600 via-cyan-700 to-slate-900 p-10 text-white">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Disponible
          </p>
          <h2 className="text-3xl font-semibold">
            Besoin d’un profil hybride data, IA et développement logiciel ?
          </h2>
          <p className="text-sm text-white/80">
            Discutons de vos API, pipelines, automatisations ou expérimentations
            IA. Je réponds rapidement via email ou téléphone.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.links.email}
              className="
                rounded-full
                px-6 py-3 text-sm font-semibold
                border border-transparent
                transition
                bg-white !text-zinc-900
                hover:bg-zinc-100 hover:border-zinc-900
                dark:bg-white dark:!text-zinc-900 dark:hover:bg-zinc-200
              "
            >
              Écrire un email
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}



type SkillColumnProps = {
  title: string;
  items: string[];
};

function SkillColumn({ title, items }: SkillColumnProps) {
  return (
    <div className="rounded-3xl border border-zinc-200/60 bg-white/80 p-6 dark:border-zinc-800/70 dark:bg-zinc-950/60">
      <p className="text-sm font-semibold text-zinc-900 dark:text-white">
        {title}
      </p>
      <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}


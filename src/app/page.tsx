import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/cards/project-card";
import { interests } from "@/data/profile";

export default function Home() {
  return (
    <Container className="space-y-20">
      <section className="grid gap-10 rounded-3xl border border-zinc-200/60 bg-white/80 p-10 shadow-lg dark:border-zinc-800/70 dark:bg-zinc-950/70 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-400">
            Portfolio 2025
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-950 dark:text-white">
            {siteConfig.name} — {siteConfig.role}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            {siteConfig.tagline}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {siteConfig.shortBio}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Je conçois des outils et systèmes qui exploitent pleinement les données et l’intelligence artificielle pour améliorer les processus et automatiser les tâches critiques. Rigueur, autonomie et créativité guident mon travail au quotidien.
          </p>
          <div className="flex flex-wrap gap-3">
          <Link
              href="/projects"
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
              Voir mes projets
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-100"
            >
              Découvrir mon parcours →
            </Link>
          </div>
        </div>
        <div className="grid gap-6 rounded-3xl border border-dashed border-zinc-200/60 p-6 text-sm dark:border-zinc-800/70">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              Double diplôme
            </p>
            <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
              Ingénieur ESTIA + Master MBDS
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              Centres d’intérêt
            </p>
            <ul className="mt-2 space-y-1 text-zinc-600 dark:text-zinc-300">
              {interests.slice(0, 3).map((interest) => (
                <li key={interest}>• {interest}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              Contact direct
            </p>
            <div className="flex flex-col text-sm font-medium text-cyan-600 dark:text-cyan-300">
              <a className="hover:text-cyan-500" href={`tel:${siteConfig.phone}`}>
                {siteConfig.phone}
              </a>
              <a
                className="hover:text-cyan-500"
                href={siteConfig.links.email}
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="space-y-10">
        <SectionHeading
          eyebrow="Projets universitaires & techniques"
          title="Des cas concrets autour de la data et de l’IA"
          description="Pipeline de données, NLP et automatisation par LLM : aperçu des travaux réalisés dans le cadre du double cursus ESTIA · MBDS."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="grid gap-10 rounded-3xl border border-zinc-200/70 bg-white/80 p-10 dark:border-zinc-800/70 dark:bg-zinc-950/70 md:grid-cols-2">
        <div className="space-y-3">
          <SectionHeading
            eyebrow="Approche"
            title="Autonomie, qualité de code et documentation"
            description="Du cadrage à la documentation, chaque lot inclut pipelines, APIs et tests alignés sur les usages data."
          />
        </div>
        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
          <p>
            • API centralisée et pipeline ETL (Orisha Healthcare) · •
            Optimisation d’imports massifs via buffers et COPY PostgreSQL · •
            Architecture électronique fiable pour escape game · • Programmation
            Arduino et CAO en laboratoire ESTIA.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-sm font-semibold text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-300"
          >
            Lire mon parcours complet →
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200/70 bg-gradient-to-r from-slate-900 to-zinc-900 p-10 text-white dark:from-zinc-900 dark:to-black">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Parlons data & IA
          </p>
          <h2 className="text-3xl font-semibold">
            Vous préparez un stage, un projet data ou une mission IA ?
          </h2>
          <p className="text-sm text-white/80">
            Disponible pour concevoir des APIs, pipelines de données,
            automatisations ou outils analytiques documentés.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
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
              Planifier un échange
            </Link>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}

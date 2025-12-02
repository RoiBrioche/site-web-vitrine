import Link from "next/link";
import type { ProjectContent } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectContent;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col justify-between rounded-3xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg hover:ring-cyan-500/30 dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
    >
      <div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
          <span>Projet</span>
          <span className="text-zinc-300">•</span>
          <span>{project.date}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-zinc-950 transition group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-300">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200/60 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center text-sm font-semibold text-cyan-600 transition group-hover:gap-3 dark:text-cyan-300">
        Lire le cas d’étude
        <span aria-hidden="true" className="ml-2 transition group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}


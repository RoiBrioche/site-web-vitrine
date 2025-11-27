import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg hover:ring-zinc-900/5 dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
          <span>Projet</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-zinc-950 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-200/60 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {(project.repoUrl || project.moreLink) && (
        <div className="mt-6 flex gap-3 text-sm font-medium">
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
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
              Voir le code
            </Link>
          )}
          {project.moreLink && (
            <Link
              href={project.moreLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-200 px-4 py-2 text-zinc-800 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200"
            >
              En savoir plus →
            </Link>
          )}
        </div>
      )}
    </article>
  );
}


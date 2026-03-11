'use client';

import Link from "next/link";
import type { ProjectContent } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectContent;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-3xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg hover:ring-cyan-500/30 dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
          <span>Projet</span>
          <span className="text-zinc-300">•</span>
          <span>{project.date}</span>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="block"
        >
          <h3 className="mt-4 text-xl font-semibold text-zinc-950 transition group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-300">
            {project.title}
          </h3>
        </Link>
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
      
      <div className="mt-6 space-y-3">
        {/* Lien vers la page détaillée */}
        <Link
          href={`/projects/${project.slug}`}
          className="study-link flex items-center text-sm font-semibold text-zinc-950 transition-colors duration-200 dark:text-white"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'rgb(6 182 212)'; /* cyan-600 */
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '';
          }}
        >
          Lire le cas d'étude
          <span aria-hidden="true" className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
        
        {/* Boutons d'accès direct */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-zinc-200/60 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-cyan-600 dark:hover:bg-cyan-950 dark:hover:text-cyan-300"
              >
                {link.label.includes('GitHub') ? (
                  <>
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </>
                ) : link.label.includes('Démo') || link.label.includes('Render') ? (
                  <>
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Démo
                  </>
                ) : (
                  link.label
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import {
  ChallengeSolution,
  ContentHighlight,
  ContentLink,
  GalleryItem,
  NarrativeSection,
} from "@/data/content-model";

type DetailPageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  summary: string | ReactNode;
  sections: NarrativeSection[];
  highlights?: ContentHighlight[];
  challenges?: ChallengeSolution[];
  links?: ContentLink[];
  gallery?: GalleryItem[];
  backHref: string;
  backLabel: string;
};

export function DetailPageLayout({
  eyebrow,
  title,
  description,
  date,
  tags,
  summary,
  sections,
  highlights,
  challenges,
  links,
  gallery,
  backHref,
  backLabel,
}: DetailPageLayoutProps) {
  return (
    <Container className="space-y-12">
      <nav>
        <Link
          href={backHref}
          className="inline-flex items-center text-sm font-semibold text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-300"
        >
          ← {backLabel}
        </Link>
      </nav>

      <header className="space-y-6 rounded-3xl border border-zinc-200/70 bg-white/80 p-10 dark:border-zinc-800/70 dark:bg-zinc-950/70">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-400">
          {eyebrow} · {date}
        </p>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-zinc-950 dark:text-white">
            {title}
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-300">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-200/70 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Boutons d'accès direct dans l'en-tête */}
        {links && links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-200/60 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-cyan-600 dark:hover:bg-cyan-950 dark:hover:text-cyan-300"
              >
                {link.label.includes('GitHub') ? (
                  <>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {link.label}
                  </>
                ) : link.label.includes('Démo') || link.label.includes('Render') ? (
                  <>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {link.label}
                  </>
                ) : (
                  link.label
                )}
              </Link>
            ))}
          </div>
        )}

        {/* Avertissement bien visible pour les démos Render */}
        {links && links.some(link => link.href.includes('render.com')) && (
          <div className="mt-4 rounded-lg border border-yellow-300 bg-yellow-50 p-4 dark:border-yellow-600 dark:bg-yellow-950">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
                  Temps de chargement important
                </h4>
                <p className="mt-1 text-sm text-yellow-700 dark:text-yellow-300">
                  Cette démo est hébergée sur un plan gratuit Render. Le site se désactive après 15 minutes d'inactivité et nécessite environ 1 minute pour redémarrer. Merci de votre patience lors du premier accès.
                </p>
              </div>
            </div>
          </div>
        )}
      </header>

      <section className="rounded-3xl border border-zinc-200/70 bg-white/80 p-8 text-sm text-zinc-700 dark:border-zinc-800/70 dark:bg-zinc-950/70 dark:text-zinc-300">
        <div className="[&_p:not(:first-child)]:mt-4">
          {typeof summary === "string" ? (
            <p dangerouslySetInnerHTML={{ __html: summary }} />
          ) : (
            summary
          )}
        </div>
      </section>

      {highlights && highlights.length > 0 && (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-3xl border border-zinc-200/70 bg-white/80 p-6 dark:border-zinc-800/70 dark:bg-zinc-950/70"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                {highlight.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-white">
                {highlight.value}
              </p>
            </div>
          ))}
        </section>
      )}

      <section className="space-y-6">
        {sections.map((section, index) => (
          <article
            key={`${section.title}-${index}`}
            className="space-y-3 rounded-3xl border border-zinc-200/70 bg-white/80 p-8 dark:border-zinc-800/70 dark:bg-zinc-950/70"
          >
            <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm text-zinc-600 dark:text-zinc-300">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.images && section.images.length > 0 && (
              <div className="mt-4 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {section.images.map((image) => (
                    <figure
                      key={image.src}
                      className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 dark:border-zinc-800/70 dark:bg-zinc-950/70"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width || 800}
                        height={image.height || 600}
                        className="h-48 w-full object-cover"
                      />
                      {image.alt && (
                        <figcaption className="p-3 text-xs text-zinc-500 dark:text-zinc-400">
                          {image.alt}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </section>

      {challenges && challenges.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Points difficiles & solutions
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {challenges.map((challenge) => (
              <div
                key={challenge.challenge}
                className="space-y-3 rounded-3xl border border-zinc-200/70 bg-white/80 p-6 dark:border-zinc-800/70 dark:bg-zinc-950/70"
              >
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {challenge.challenge}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {gallery && gallery.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Illustrations
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/80 dark:border-zinc-800/70 dark:bg-zinc-950/70"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={960}
                  height={540}
                  className="h-64 w-full object-cover"
                />
                <figcaption className="p-4 text-sm text-zinc-600 dark:text-zinc-300">
                  {item.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {links && links.length > 0 && (
        <section className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </section>
      )}
    </Container>
  );
}



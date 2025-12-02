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
      </header>

      <section className="rounded-3xl border border-zinc-200/70 bg-white/80 p-8 text-sm text-zinc-700 dark:border-zinc-800/70 dark:bg-zinc-950/70 dark:text-zinc-300">
        <div className="[&_p:not(:first-child)]:mt-4">
          {typeof summary === "string" ? <p>{summary}</p> : summary}
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
        {sections.map((section) => (
          <article
            key={section.title}
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



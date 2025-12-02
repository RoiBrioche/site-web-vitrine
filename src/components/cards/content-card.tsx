import Link from "next/link";

type ContentCardProps = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  date?: string;
  meta?: string;
  tags?: string[];
  footerLabel?: string;
};

export function ContentCard({
  href,
  eyebrow,
  title,
  description,
  date,
  meta,
  tags = [],
  footerLabel = "Découvrir le détail",
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-3xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg hover:ring-cyan-500/30 dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
    >
      <div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400">
          <span>{eyebrow}</span>
          {date && (
            <>
              <span className="text-zinc-300">•</span>
              <span>{date}</span>
            </>
          )}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-zinc-950 transition group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-300">
          {title}
        </h3>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
        {meta && (
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
            {meta}
          </p>
        )}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200/60 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="mt-6 flex items-center text-sm font-semibold text-cyan-600 transition group-hover:gap-3 dark:text-cyan-300">
        {footerLabel}
        <span aria-hidden="true" className="ml-2 transition group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}



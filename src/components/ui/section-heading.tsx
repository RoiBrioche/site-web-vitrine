type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
          {eyebrow}
        </p>
      )}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}


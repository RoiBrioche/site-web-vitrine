import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/50 bg-white dark:border-zinc-800/60 dark:bg-zinc-950">
      <Container className="flex flex-col items-start gap-4 py-8 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Construit avec Next.js
          15, Tailwind CSS et déployable sur Vercel.
        </p>
        <div className="flex gap-4">
          <Link
            className="hover:text-zinc-900 dark:hover:text-white"
            href="/contact"
          >
            Parlons-en
          </Link>
          <a
            className="hover:text-zinc-900 dark:hover:text-white"
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
}


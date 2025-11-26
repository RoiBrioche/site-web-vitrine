import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./container";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/projects", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/70">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav>
          <ul className="flex items-center gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="rounded-full px-3 py-1 transition hover:text-zinc-950 dark:hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}


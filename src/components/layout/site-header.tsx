import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "./container";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/experiences", label: "Expériences" },
  { href: "/education", label: "Formations" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/70">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
            <Image
              src="/images/Photo_de_profils.jpg"
              alt="Photo de profil"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <span>{siteConfig.name}</span>
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


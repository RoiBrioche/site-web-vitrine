import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/config/site";

const links = [
  {
    label: "Téléphone",
    href: `tel:${siteConfig.phone}`,
    description: `${siteConfig.phone} — réponse rapide.`,
  },
  {
    label: "Email",
    href: siteConfig.links.email,
    description: "brieuc.mandin.pro@gmail.com — envoyez votre briefing.",
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    description: "Profil LinkedIn Brieuc Mandin — connectons-nous ou fixons un appel.",
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    description: "Compte GitHub RoiBrioche — aperçu des projets publics.",
  },
];

export default function ContactPage() {
  return (
    <Container className="grid gap-10 md:grid-cols-[1fr_0.8fr]">
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Contact"
          title="Joignez moi !"
          description="Téléphone direct, email et liens actifs vers LinkedIn et GitHub pour choisir le canal le plus pratique."
        />
        <div className="space-y-4">
          {links.map((link) => (
            <ContactLinkCard key={link.label} link={link} />
          ))}
        </div>
        <div className="rounded-3xl border border-dashed border-zinc-300/70 p-6 text-sm text-zinc-600 dark:border-zinc-800/70 dark:text-zinc-300">
          <p className="font-semibold text-zinc-900 dark:text-white">
            Disponibilité actuelle
          </p>
          <p className="mt-2">
            Je suis actuellement <strong>à l'écoute d'opportunités</strong> (CDI ou missions) dans le secteur de l'informatique.
          </p>
          <p className="mt-2">
            📍 Mobile <strong>France entière</strong> et ouvert au télétravail partiel ou au full remote.
          </p>
        </div>
      </section>
      <ContactForm />
    </Container>
  );
}

type ContactLink = {
  label: string;
  href: string;
  description: string;
};

function ContactLinkCard({ link }: { link: ContactLink }) {
  const isPlaceholder = link.href === "#";
  const content = (
    <>
      <div>
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          {link.label}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          {link.description}
        </p>
      </div>
      <span className="text-lg text-zinc-400">
        {isPlaceholder ? "…" : "↗"}
      </span>
    </>
  );

  if (isPlaceholder) {
    return (
      <div className="flex items-center justify-between rounded-2xl border border-dashed border-zinc-200/70 bg-white/60 p-5 dark:border-zinc-800/70 dark:bg-zinc-950/40">
        {content}
      </div>
    );
  }

  const isEmail = link.href.startsWith("mailto:");
  const isPhone = link.href.startsWith("tel:");

  return (
    <a
      href={link.href}
      target={isEmail || isPhone ? undefined : "_blank"}
      rel={isEmail || isPhone ? undefined : "noreferrer"}
      className="flex items-center justify-between rounded-2xl border border-zinc-200/70 bg-white/80 p-5 transition hover:border-zinc-400 dark:border-zinc-800/70 dark:bg-zinc-950/60"
    >
      {content}
    </a>
  );
}


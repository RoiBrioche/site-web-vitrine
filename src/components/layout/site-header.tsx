"use client";

import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "./container";
import { X } from "lucide-react";

// Animation de morphing avec Spring ou une simple transition CSS
const springTransition = {
  type: "spring",
  damping: 30,
  stiffness: 300,
} as const;

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/experiences", label: "Expériences" },
  { href: "/education", label: "Formations" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

function ProfileCard({ isOpen, onClose, avatarRef }: { 
  isOpen: boolean; 
  onClose: () => void; 
  avatarRef: React.RefObject<HTMLButtonElement>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, x: 0, y: 0 });

  useEffect(() => {
    if (!isOpen || !avatarRef.current) return;

    // Récupérer les dimensions et la position de l'avatar
    const avatarRect = avatarRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculer les dimensions de la carte (80% de la plus petite dimension de l'écran)
    const maxWidth = Math.min(viewportWidth * 0.9, 600);
    const maxHeight = viewportHeight * 0.8;
    
    // Calculer la position pour centrer la carte
    const x = (viewportWidth - maxWidth) / 2;
    const y = Math.max(40, (viewportHeight - maxHeight) / 2); // Au moins 2.5rem du haut

    setDimensions({
      width: maxWidth,
      height: maxHeight,
      x: avatarRect.left + avatarRect.width / 2,
      y: avatarRect.top + avatarRect.height / 2
    });

    // Empêcher le défilement du body quand la carte est ouverte
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, avatarRef]);

  if (!isOpen) return null;

  return (
    <div 
      ref={cardRef}
      className="fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-20"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="relative overflow-hidden rounded-2xl bg-[rgb(3,6,23)] text-white shadow-xl ring-1 ring-white/10"
        style={{
          width: dimensions.width,
          height: dimensions.height,
          transformOrigin: 'center',
          animation: 'scaleIn 0.3s ease-out forwards',
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-1.5 text-zinc-800 backdrop-blur-sm transition-colors hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:bg-zinc-700/80"
          aria-label="Fermer"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="relative h-full w-full">
          <Image
            src="/images/Photo_de_profils.jpg"
            alt="Photo de profil"
            fill
            className="object-contain p-4"
            sizes="(max-width: 640px) 90vw, 600px"
            priority
          />
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function ProfileImage({ onClick, buttonRef }: { 
  onClick: () => void; 
  buttonRef: React.RefObject<HTMLButtonElement>;
}) {
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className="group relative h-10 w-10 overflow-hidden rounded-full border border-zinc-200 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:border-zinc-700 dark:focus:ring-zinc-500 dark:focus:ring-offset-zinc-900"
      aria-label="Agrandir la photo de profil"
    >
      <Image
        src="/images/Photo_de_profils.jpg"
        alt="Photo de profil"
        fill
        className="object-cover"
        sizes="40px"
        priority
      />
    </button>
  );
}

export function SiteHeader() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const avatarRef = useRef<HTMLButtonElement>(null!);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/70">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <ProfileImage 
            onClick={() => setIsCardOpen(true)} 
            buttonRef={avatarRef}
          />
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
      <ProfileCard 
        isOpen={isCardOpen} 
        onClose={() => setIsCardOpen(false)}
        avatarRef={avatarRef}
      />
    </header>
  );
}


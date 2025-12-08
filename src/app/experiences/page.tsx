"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContentCard } from "@/components/cards/content-card";
import { experiences } from "@/data/experiences";

type ExperienceType = "stage" | "student_job" | "professional";

const categoryLabels: Record<ExperienceType, string> = {
  stage: "Stages",
  student_job: "Travail étudiant",
  professional: "Expérience professionnelle",
};

export default function ExperiencesPage() {
  const [activeCategory, setActiveCategory] =
    useState<ExperienceType>("stage");

  const filteredExperiences = useMemo(() => {
    return experiences.filter((exp) => exp.type === activeCategory);
  }, [activeCategory]);

  const categories: ExperienceType[] = ["stage", "student_job", "professional"];

  return (
    <Container className="space-y-12">
      <SectionHeading
        eyebrow="Expériences professionnelles"
        title="Missions orientées impact"
        description="Chaque expérience est documentée comme un cas d'usage : contexte, missions principales, technologies utilisées et compétences développées."
      />

      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
              activeCategory === category
                ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30 dark:bg-cyan-500"
                : "border border-zinc-200/70 bg-white/80 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800/70 dark:bg-zinc-950/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/80"
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      {/* Liste des expériences filtrées avec animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {filteredExperiences.length > 0 ? (
            filteredExperiences.map((experience) => (
              <motion.div
                key={experience.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <ContentCard
                  href={`/experiences/${experience.slug}`}
                  eyebrow="Expérience"
                  title={experience.title}
                  description={experience.description}
                  date={experience.date}
                  meta={experience.company}
                  tags={experience.technologies}
                  footerLabel="Lire la mission"
                />
              </motion.div>
            ))
          ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full rounded-3xl border border-zinc-200/70 bg-white/80 p-12 text-center dark:border-zinc-800/70 dark:bg-zinc-950/70"
          >
            <p className="text-zinc-600 dark:text-zinc-400">
              {activeCategory === "professional"
                ? "Pas encore d’expérience professionnelle… Soyez les premiers à m’en confier une 🚀"
                : "Aucune expérience dans cette catégorie pour le moment."}
            </p>
          </motion.div>
        )}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/src/context/language-context";
import { ParallaxSection, SectionHeader } from "./parallax-section";

const techCategories = [
  {
    titleKey: "tech.frontend",
    techs: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "TailwindCSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    titleKey: "tech.backend",
    techs: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 80 },
      { name: "GraphQL", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "Prisma", level: 85 },
    ],
  },
  {
    titleKey: "tech.database",
    techs: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Supabase", level: 85 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    titleKey: "tech.devops",
    techs: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Vercel", level: 95 },
      { name: "GitHub Actions", level: 85 },
      { name: "Kubernetes", level: 70 },
    ],
  },
];

export function TechStack() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <ParallaxSection id="tech">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("tech.title")} subtitle={t("tech.subtitle")} />

        <div ref={ref} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-primary mb-6">
                {t(category.titleKey)}
              </h3>

              <div className="space-y-4">
                {category.techs.map((tech, techIndex) => (
                  <div key={tech.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground">
                        {tech.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tech.level}%` } : {}}
                        transition={{
                          delay: catIndex * 0.1 + techIndex * 0.05 + 0.3,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/src/context/language-context";
import { ParallaxSection, SectionHeader } from "./parallax-section";
import { Briefcase, CheckCircle } from "lucide-react";

const experiences = [
  {
    id: 1,
    roleKey: "exp.1.role",
    companyKey: "exp.1.company",
    periodKey: "exp.1.period",
    achievements: [
      "exp.1.achievement1",
      "exp.1.achievement2",
      "exp.1.achievement3",
    ],
    isCurrent: true,
  },
  {
    id: 2,
    roleKey: "exp.2.role",
    companyKey: "exp.2.company",
    periodKey: "exp.2.period",
    achievements: [
      "exp.2.achievement1",
      "exp.2.achievement2",
      "exp.2.achievement3",
    ],
    isCurrent: false,
  },
  {
    id: 3,
    roleKey: "exp.3.role",
    companyKey: "exp.3.company",
    periodKey: "exp.3.period",
    achievements: [
      "exp.3.achievement1",
      "exp.3.achievement2",
      "exp.3.achievement3",
    ],
    isCurrent: false,
  },
];

export function Experience() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <ParallaxSection id="experience">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("experience.title")} />

        <div ref={ref} className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 hidden md:flex items-center justify-center">
                <div
                  className={`w-4 h-4 rounded-full ${exp.isCurrent ? "bg-primary glow-purple-sm" : "bg-secondary border border-primary/30"}`}
                />
              </div>

              <div className="glass rounded-2xl p-6 md:ml-16 group hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <Briefcase className="h-5 w-5 text-primary md:hidden" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {t(exp.roleKey)}
                      </h3>
                      <p className="text-sm text-lavender">
                        {t(exp.companyKey)}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-sm px-3 py-1 rounded-full w-fit ${
                      exp.isCurrent
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "bg-secondary/50 text-muted-foreground"
                    }`}
                  >
                    {t(exp.periodKey)}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + i * 0.05 + 0.2 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{t(achievement)}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../../context/language-context";
import { ParallaxSection, SectionHeader } from "./parallax-section";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, label: "5+ Anos", sublabel: "de Experiência" },
  { icon: Rocket, label: "50+", sublabel: "Projetos Entregues" },
  { icon: Lightbulb, label: "10+", sublabel: "Tecnologias" },
];

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <ParallaxSection id="about">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("about.title")} />

        <div className="max-w-4xl mx-auto">
          <div ref={ref} className="glass rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-2xl font-bold text-primary">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.sublabel}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg text-foreground/90 leading-relaxed mb-6"
            >
              {t("about.bio")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {t("about.bio2")}
            </motion.p>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}

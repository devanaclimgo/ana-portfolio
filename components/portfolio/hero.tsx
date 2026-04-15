"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

export function Hero() {
  const { language, t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const resumeFile =
    language === "pt" ? "/Ana_Gomes-CV-PT.pdf" : "/Ana_Gomes-CV-EN.pdf";

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-lavender/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/15 rounded-full blur-[90px]" />
      </motion.div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-4"
        >
          {t("hero.greeting")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-glow"
        >
          <span className="text-primary">{t("hero.name")}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light text-lavender mb-6"
        >
          {t("hero.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="glow-purple bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            <a href="#projects">{t("hero.cta.projects")}</a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary"
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              {t("hero.cta.contact")}
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="lg"
            className="text-muted-foreground hover:text-primary hover:bg-primary/10"
          >
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              download={
                language === "pt"
                  ? "Ana-Gomes-CV-PT.pdf"
                  : "Ana-Gomes-CV-EN.pdf"
              }
            >
              <Download className="mr-2 h-4 w-4" />
              {t("hero.cta.resume")}
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6 text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

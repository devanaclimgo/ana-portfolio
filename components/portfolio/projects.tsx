"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/context/language-context"
import { ParallaxSection, SectionHeader } from "./parallax-section"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    titleKey: "project.1.title",
    descKey: "project.1.description",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Chart.js", "Supabase"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    id: 2,
    titleKey: "project.2.title",
    descKey: "project.2.description",
    tech: ["React", "Node.js", "Socket.io", "WebRTC", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-accent/20 to-lavender/20",
  },
  {
    id: 3,
    titleKey: "project.3.title",
    descKey: "project.3.description",
    tech: ["Next.js", "Stripe", "Prisma", "TailwindCSS", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-lavender/20 to-primary/20",
  },
  {
    id: 4,
    titleKey: "project.4.title",
    descKey: "project.4.description",
    tech: ["React Native", "Firebase", "Node.js", "MQTT", "D3.js"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-primary/20 to-cyan-accent/20",
  },
]

export function Projects() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <ParallaxSection id="projects">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={t("projects.title")} 
          subtitle={t("projects.subtitle")} 
        />
        
        <div ref={ref} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full flex flex-col border border-transparent hover:border-primary/30 transition-all duration-300">
                {/* Gradient Header */}
                <div className={`h-32 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                    0{project.id}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {t(project.titleKey)}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {t(project.descKey)}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary/50 text-muted-foreground border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {t("projects.viewCode")}
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t("projects.viewLive")}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}

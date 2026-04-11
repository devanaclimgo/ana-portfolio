"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/context/language-context"
import { ParallaxSection, SectionHeader } from "./parallax-section"
import { 
  Terminal, 
  GitBranch, 
  Box, 
  Code, 
  Monitor, 
  Globe, 
  Palette, 
  MessageSquare,
  Zap,
  Cloud
} from "lucide-react"

const tools = [
  { name: "VS Code", icon: Code, category: "Editor" },
  { name: "Git", icon: GitBranch, category: "Version Control" },
  { name: "GitHub", icon: Globe, category: "Platform" },
  { name: "Docker", icon: Box, category: "Containers" },
  { name: "Terminal", icon: Terminal, category: "CLI" },
  { name: "Figma", icon: Palette, category: "Design" },
  { name: "Vercel", icon: Zap, category: "Deployment" },
  { name: "Notion", icon: Monitor, category: "Docs" },
  { name: "Slack", icon: MessageSquare, category: "Communication" },
  { name: "AWS", icon: Cloud, category: "Cloud" },
]

export function DailyTools() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <ParallaxSection id="tools">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={t("tools.title")} 
          subtitle={t("tools.subtitle")} 
        />
        
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="glass rounded-xl p-4 text-center group cursor-pointer hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-3 flex items-center justify-center">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {tool.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}

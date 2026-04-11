"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/context/language-context"
import { ParallaxSection, SectionHeader } from "./parallax-section"
import { Layout, Repeat, Shield, Users } from "lucide-react"

const mindsetItems = [
  {
    titleKey: "mindset.architecture.title",
    descKey: "mindset.architecture.desc",
    icon: Layout,
  },
  {
    titleKey: "mindset.iteration.title",
    descKey: "mindset.iteration.desc",
    icon: Repeat,
  },
  {
    titleKey: "mindset.quality.title",
    descKey: "mindset.quality.desc",
    icon: Shield,
  },
  {
    titleKey: "mindset.user.title",
    descKey: "mindset.user.desc",
    icon: Users,
  },
]

export function Mindset() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <ParallaxSection id="mindset">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={t("mindset.title")} 
          subtitle={t("mindset.subtitle")} 
        />
        
        <div ref={ref} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {mindsetItems.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}

"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  id?: string
  className?: string
  parallaxIntensity?: number
}

export function ParallaxSection({
  children,
  id,
  className = "",
  parallaxIntensity = 50,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [parallaxIntensity, -parallaxIntensity])

  return (
    <section
      ref={containerRef}
      id={id}
      className={`relative py-20 md:py-32 overflow-hidden ${className}`}
    >
      {/* Floating background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-[60px]" />
        <div className="absolute bottom-1/4 -right-20 w-56 h-56 bg-accent/10 rounded-full blur-[80px]" />
      </motion.div>

      {/* Content with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-glow mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

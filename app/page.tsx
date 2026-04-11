"use client"

import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Projects } from "@/components/portfolio/projects"
import { Experience } from "@/components/portfolio/experience"
import { TechStack } from "@/components/portfolio/tech-stack"
import { DailyTools } from "@/components/portfolio/daily-tools"
import { Mindset } from "@/components/portfolio/mindset"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <TechStack />
      <DailyTools />
      <Mindset />
      <Contact />
      <Footer />
    </main>
  )
}

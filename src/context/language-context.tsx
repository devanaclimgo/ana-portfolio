"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Header
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.tech": "Tecnologias",
    "nav.tools": "Ferramentas",
    "nav.mindset": "Mentalidade",
    "nav.contact": "Contato",
    
    // Hero
    "hero.greeting": "Olá, eu sou",
    "hero.name": "Ana Gomes",
    "hero.title": "Engenheira Full-Stack",
    "hero.tagline": "Transformando ideias complexas em experiências digitais elegantes e performáticas.",
    "hero.cta.projects": "Ver Projetos",
    "hero.cta.contact": "Contato",
    "hero.cta.resume": "Baixar Currículo",
    
    // About
    "about.title": "Sobre Mim",
    "about.bio": "Sou uma desenvolvedora apaixonada por criar soluções inovadoras que fazem a diferença. Com mais de 5 anos de experiência em desenvolvimento web, combino expertise técnica com um olhar atento para design e experiência do usuário.",
    "about.bio2": "Minha jornada começou com curiosidade sobre como as coisas funcionam, e evoluiu para uma carreira dedicada a construir produtos que as pessoas adoram usar. Acredito que o melhor código é aquele que resolve problemas reais de forma elegante.",
    
    // Projects
    "projects.title": "Projetos",
    "projects.subtitle": "Uma seleção dos meus trabalhos mais recentes",
    "projects.viewCode": "Código",
    "projects.viewLive": "Demo",
    
    // Project items
    "project.1.title": "FinTrack Dashboard",
    "project.1.description": "Dashboard financeiro com visualizações em tempo real, análise de gastos e previsões baseadas em IA.",
    "project.2.title": "CodeCollab",
    "project.2.description": "Plataforma colaborativa de código com edição em tempo real, video chat integrado e versionamento inteligente.",
    "project.3.title": "EcoMarket",
    "project.3.description": "E-commerce sustentável com sistema de pontos verdes, rastreamento de impacto ambiental e marketplace local.",
    "project.4.title": "HealthPulse",
    "project.4.description": "App de monitoramento de saúde com integração IoT, dashboards personalizados e alertas inteligentes.",
    
    // Experience
    "experience.title": "Experiência",
    "experience.present": "Presente",
    
    // Experience items
    "exp.1.role": "Engenheira Full-Stack Sênior",
    "exp.1.company": "TechCorp Brasil",
    "exp.1.period": "2022 - Presente",
    "exp.1.achievement1": "Liderou a migração de arquitetura monolítica para microserviços, reduzindo tempo de deploy em 70%",
    "exp.1.achievement2": "Implementou sistema de cache distribuído que melhorou performance em 45%",
    "exp.1.achievement3": "Mentorou equipe de 5 desenvolvedores júnior",
    
    "exp.2.role": "Desenvolvedora Full-Stack",
    "exp.2.company": "StartupXYZ",
    "exp.2.period": "2020 - 2022",
    "exp.2.achievement1": "Desenvolveu MVP que atraiu R$2M em investimento seed",
    "exp.2.achievement2": "Criou pipeline CI/CD que reduziu bugs em produção em 60%",
    "exp.2.achievement3": "Integrou sistema de pagamentos processando +10k transações/mês",
    
    "exp.3.role": "Desenvolvedora Frontend",
    "exp.3.company": "AgênciaDigital",
    "exp.3.period": "2018 - 2020",
    "exp.3.achievement1": "Entregou +20 projetos para clientes Fortune 500",
    "exp.3.achievement2": "Implementou design system que acelerou desenvolvimento em 40%",
    "exp.3.achievement3": "Otimizou performance web atingindo 95+ no Lighthouse",
    
    // Tech Stack
    "tech.title": "Stack de Tecnologias",
    "tech.subtitle": "Ferramentas e tecnologias que domino",
    "tech.frontend": "Frontend",
    "tech.backend": "Backend",
    "tech.database": "Banco de Dados",
    "tech.devops": "DevOps & Cloud",
    
    // Daily Tools
    "tools.title": "Ferramentas do Dia a Dia",
    "tools.subtitle": "O que uso no meu fluxo de trabalho diário",
    
    // How I Think
    "mindset.title": "Como Eu Penso",
    "mindset.subtitle": "Minha abordagem para resolver problemas",
    "mindset.architecture.title": "Arquitetura Primeiro",
    "mindset.architecture.desc": "Antes de escrever código, planejo a estrutura. Uma boa arquitetura previne 80% dos problemas futuros.",
    "mindset.iteration.title": "Iteração Rápida",
    "mindset.iteration.desc": "Acredito em MVPs rápidos e feedback constante. Falhar cedo significa aprender cedo.",
    "mindset.quality.title": "Qualidade é Inegociável",
    "mindset.quality.desc": "Código limpo, testes automatizados e documentação clara não são extras - são requisitos.",
    "mindset.user.title": "Foco no Usuário",
    "mindset.user.desc": "Tecnologia é um meio, não um fim. O objetivo é resolver problemas reais de pessoas reais.",
    
    // Contact
    "contact.title": "Vamos Conversar",
    "contact.subtitle": "Tem um projeto interessante? Adoraria ouvir sobre ele.",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.sending": "Enviando...",
    "contact.success": "Mensagem enviada com sucesso!",
    "contact.error": "Erro ao enviar. Tente novamente.",
    
    // Footer
    "footer.rights": "Todos os direitos reservados.",
    "footer.built": "Construído com",
  },
  en: {
    // Header
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.tech": "Tech",
    "nav.tools": "Tools",
    "nav.mindset": "Mindset",
    "nav.contact": "Contact",
    
    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.name": "Ana Gomes",
    "hero.title": "Full-Stack Engineer",
    "hero.tagline": "Transforming complex ideas into elegant and performant digital experiences.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact",
    "hero.cta.resume": "Download Resume",
    
    // About
    "about.title": "About Me",
    "about.bio": "I'm a developer passionate about creating innovative solutions that make a difference. With over 5 years of web development experience, I combine technical expertise with a keen eye for design and user experience.",
    "about.bio2": "My journey started with curiosity about how things work, and evolved into a career dedicated to building products people love to use. I believe the best code is one that solves real problems elegantly.",
    
    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "A selection of my most recent work",
    "projects.viewCode": "Code",
    "projects.viewLive": "Demo",
    
    // Project items
    "project.1.title": "FinTrack Dashboard",
    "project.1.description": "Financial dashboard with real-time visualizations, spending analysis, and AI-based predictions.",
    "project.2.title": "CodeCollab",
    "project.2.description": "Collaborative coding platform with real-time editing, integrated video chat, and smart versioning.",
    "project.3.title": "EcoMarket",
    "project.3.description": "Sustainable e-commerce with green points system, environmental impact tracking, and local marketplace.",
    "project.4.title": "HealthPulse",
    "project.4.description": "Health monitoring app with IoT integration, personalized dashboards, and smart alerts.",
    
    // Experience
    "experience.title": "Experience",
    "experience.present": "Present",
    
    // Experience items
    "exp.1.role": "Senior Full-Stack Engineer",
    "exp.1.company": "TechCorp Brasil",
    "exp.1.period": "2022 - Present",
    "exp.1.achievement1": "Led migration from monolithic to microservices architecture, reducing deploy time by 70%",
    "exp.1.achievement2": "Implemented distributed cache system improving performance by 45%",
    "exp.1.achievement3": "Mentored a team of 5 junior developers",
    
    "exp.2.role": "Full-Stack Developer",
    "exp.2.company": "StartupXYZ",
    "exp.2.period": "2020 - 2022",
    "exp.2.achievement1": "Developed MVP that attracted $400k in seed investment",
    "exp.2.achievement2": "Created CI/CD pipeline reducing production bugs by 60%",
    "exp.2.achievement3": "Integrated payment system processing +10k transactions/month",
    
    "exp.3.role": "Frontend Developer",
    "exp.3.company": "AgênciaDigital",
    "exp.3.period": "2018 - 2020",
    "exp.3.achievement1": "Delivered +20 projects for Fortune 500 clients",
    "exp.3.achievement2": "Implemented design system accelerating development by 40%",
    "exp.3.achievement3": "Optimized web performance achieving 95+ Lighthouse score",
    
    // Tech Stack
    "tech.title": "Tech Stack",
    "tech.subtitle": "Tools and technologies I master",
    "tech.frontend": "Frontend",
    "tech.backend": "Backend",
    "tech.database": "Database",
    "tech.devops": "DevOps & Cloud",
    
    // Daily Tools
    "tools.title": "Daily Tools",
    "tools.subtitle": "What I use in my daily workflow",
    
    // How I Think
    "mindset.title": "How I Think",
    "mindset.subtitle": "My approach to problem-solving",
    "mindset.architecture.title": "Architecture First",
    "mindset.architecture.desc": "Before writing code, I plan the structure. Good architecture prevents 80% of future problems.",
    "mindset.iteration.title": "Fast Iteration",
    "mindset.iteration.desc": "I believe in quick MVPs and constant feedback. Failing early means learning early.",
    "mindset.quality.title": "Quality is Non-Negotiable",
    "mindset.quality.desc": "Clean code, automated tests, and clear documentation aren't extras - they're requirements.",
    "mindset.user.title": "User Focus",
    "mindset.user.desc": "Technology is a means, not an end. The goal is solving real problems for real people.",
    
    // Contact
    "contact.title": "Let's Talk",
    "contact.subtitle": "Have an interesting project? I'd love to hear about it.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully!",
    "contact.error": "Error sending. Please try again.",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  const t = useCallback(
    (key: string): string => {
      return translations[language][key as keyof typeof translations.pt] || key
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

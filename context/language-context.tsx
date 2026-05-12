"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
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
    "hero.title": "Engenheira de Software",
    "hero.tagline":
      "Construindo experiências digitais rápidas, escaláveis e impulsionadas por IA.",
    "hero.cta.projects": "Ver Projetos",
    "hero.cta.contact": "Contato",
    "hero.cta.resume": "Baixar Currículo",

    // Highlights
    "highlights.1.label": "Frontend + Full-Stack",
    "highlights.1.sublabel": "com foco em produto, performance e UX",

    "highlights.2.label": "1+ Ano",
    "highlights.2.sublabel": "em produção (SaaS real)",

    "highlights.3.label": "10+",
    "highlights.3.sublabel": "projetos e sistemas construídos",

    // About
    "about.title": "Sobre Mim",
    "about.bio":
      "Engenheira de Software com foco em frontend, especializada na construção de aplicações SaaS modernas, interfaces com IA e produtos web escaláveis utilizando React, Next.js, TypeScript e Ruby on Rails. Tenho forte foco em performance, experiência do usuário e arquitetura frontend.",
    "about.bio2":
      "Atuo em toda a stack, mas meu principal interesse está em criar experiências intuitivas, rápidas e escaláveis, equilibrando engenharia sólida com decisões centradas no produto. Tenho experiência colaborando diretamente em arquitetura, APIs, workflows com IA e otimização de sistemas para ambientes reais de produção.",

    // Projects
    "projects.title": "Projetos",
    "projects.subtitle": "Uma seleção dos meus trabalhos mais recentes",
    "projects.viewCode": "Código",
    "projects.viewLive": "Demo",

    // Project items
    "project.1.title": "Rabisco",
    "project.1.description":
      "Ferramenta criativa para geração de prompts de desenho, focada em reduzir fricção e incentivar prática diária sem necessidade de autenticação.",
    "project.2.title": "Âncora",
    "project.2.description":
      "Aplicação full-stack de tracking comportamental baseada em DBT, com sistema semanal estruturado, autenticação JWT e exportação de relatórios em PDF.",
    "project.3.title": "Time Capsule",
    "project.3.description":
      "Aplicação full-stack para envio de mensagens ao futuro, com sistema de liberação temporal no backend e regras de acesso baseadas em data.",
    "project.4.title": "Forge AI",
    "project.4.description":
      "Plataforma de planejamento de projetos com IA que utiliza sistemas multi-agentes para transformar ideias em tasks, sprints e workflows dinâmicos, simulando um time de especialistas guiando decisões ao longo do desenvolvimento.",

    // Experience
    "experience.title": "Experiência",
    "experience.present": "Presente",

    // Experience items
    "exp.1.role": "Engenheira Front-End",
    "exp.1.company": "Content Path (Remoto, UK)",
    "exp.1.period": "Set 2025 - Presente",
    "exp.1.achievement1":
      "Desenvolvimento de interfaces React em produção com foco em performance, escalabilidade e experiência do usuário",
    "exp.1.achievement2":
      "Redução de 70–85% nos custos operacionais com IA através de estratégias de cache, batching e otimização de fluxos",
    "exp.1.achievement3":
      "Implementação de estratégias local-first e otimização de APIs reduzindo chamadas externas em até 90–95%",
    "exp.2.role": "Engenheira Front-End",
    "exp.2.company": "Insucheck (Projeto MVP - Pipoca Ágil)",
    "exp.2.period": "2025",
    "exp.2.achievement1":
      "Desenvolvimento de interfaces responsivas utilizando React, React Native e TypeScript com foco em usabilidade e qualidade visual",
    "exp.2.achievement2":
      "Integração com APIs REST e colaboração próxima com backend para melhorar fluxo de dados e entrega de funcionalidades",
    "exp.2.achievement3":
      "Introdução de workflows com Docker no time, eliminando inconsistências de ambiente de desenvolvimento",

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
    "mindset.title": "Mentalidade de Produto",
    "mindset.subtitle": "Como penso ao construir experiências digitais",

    "mindset.architecture.title": "Experiência do Usuário Vem Primeiro",
    "mindset.architecture.desc":
      "Boas interfaces reduzem fricção e tornam sistemas complexos simples de usar. Priorizo clareza, responsividade e fluidez na experiência.",

    "mindset.iteration.title": "Iterar com Intenção",
    "mindset.iteration.desc":
      "Construo rápido, mas não de forma aleatória. Cada iteração resolve um problema claro e melhora o sistema como um todo.",

    "mindset.quality.title": "Performance é Parte da UX",
    "mindset.quality.desc":
      "Performance impacta diretamente a experiência do usuário. Me preocupo com tempo de resposta, renderização e eficiência de aplicações reais.",

    "mindset.user.title": "Tecnologia Precisa Gerar Valor",
    "mindset.user.desc":
      "Meu foco é construir produtos úteis, intuitivos e escaláveis, equilibrando engenharia sólida com necessidades reais dos usuários.",

    // Contact
    "contact.title": "Vamos Conversar",
    "contact.subtitle":
      "Tem um projeto interessante? Adoraria ouvir sobre ele.",
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
    "hero.title": "Software Engineer",
    "hero.tagline":
      "Building fast, scalable, and AI-powered digital experiences.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact",
    "hero.cta.resume": "Download Resume",

    // Highlights
    "highlights.1.label": "Frontend + Full-Stack",
    "highlights.1.sublabel": "focused on product, performance and UX",

    "highlights.2.label": "1+ Year",
    "highlights.2.sublabel": "in production (real SaaS)",

    "highlights.3.label": "10+",
    "highlights.3.sublabel": "projects and systems built",

    // About
    "about.title": "About Me",
    "about.bio":
      "Frontend-focused Software Engineer experienced in building modern SaaS applications, AI-powered interfaces, and scalable web products using React, Next.js, TypeScript, and Ruby on Rails. Strong focus on performance, user experience, and frontend architecture.",
    "about.bio2":
      "I work across the full stack, but my main focus is creating intuitive, responsive, and scalable user experiences while collaborating on APIs, AI workflows, and product architecture. My approach combines strong engineering practices with product thinking and attention to usability.",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "A selection of my most recent work",
    "projects.viewCode": "Code",
    "projects.viewLive": "Demo",

    // Project items
    "project.1.title": "Rabisco",
    "project.1.description":
      "Creative tool for generating drawing prompts, focused on reducing friction and enabling daily practice with no authentication required.",
    "project.2.title": "Âncora",
    "project.2.description":
      "Full-stack behavioral tracking app based on DBT, featuring structured weekly logs, JWT authentication, and PDF report export.",
    "project.3.title": "Time Capsule",
    "project.3.description":
      "Full-stack application for sending messages to your future self, featuring backend-enforced time-based content release and access control.",
    "project.4.title": "Forge AI",
    "project.4.description":
      "AI-powered project planning platform that uses multi-agent systems to transform ideas into structured tasks, sprints, and evolving workflows, simulating a team of specialists guiding development decisions over time.",

    // Experience
    "experience.title": "Experience",
    "experience.present": "Present",

    // Experience items
    "exp.1.role": "Front-End Engineer",
    "exp.1.company": "Content Path (Remote, UK)",
    "exp.1.period": "Sep 2025 - Present",
    "exp.1.achievement1":
      "Built and maintained production React interfaces focused on performance, scalability, and user experience",
    "exp.1.achievement2":
      "Reduced AI operational costs by 70–85% through caching strategies, batching, and optimized request flows",
    "exp.1.achievement3":
      "Implemented local-first persistence and API optimization strategies reducing external API calls by up to 90–95%",

    "exp.2.role": "Front-End Engineer",
    "exp.2.company": "Insucheck (MVP Project - Pipoca Ágil)",
    "exp.2.period": "2025",
    "exp.2.achievement1":
      "Developed responsive interfaces using React, React Native, and TypeScript with strong focus on usability and UI quality",
    "exp.2.achievement2":
      "Integrated REST APIs and collaborated closely with backend teams to improve data flow and feature delivery",
    "exp.2.achievement3":
      "Introduced Docker-based workflows improving development environment consistency across the team",

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
    "mindset.title": "Product Mindset",
    "mindset.subtitle": "How I approach building digital experiences",

    "mindset.architecture.title": "User Experience Comes First",
    "mindset.architecture.desc":
      "Good interfaces reduce friction and make complex systems feel intuitive. I prioritize clarity, responsiveness, and smooth user experiences.",
    "mindset.iteration.title": "Build with Intention",
    "mindset.iteration.desc":
      "Every feature should solve a real problem. I like iterating quickly without sacrificing technical consistency or product quality.",

    "mindset.quality.title": "Performance is Part of UX",
    "mindset.quality.desc":
      "Performance directly impacts user experience. I care about responsiveness, rendering efficiency, and real-world application performance.",

    "mindset.user.title": "Technology Should Create Value",
    "mindset.user.desc":
      "My goal is building useful, scalable, and intuitive products that balance solid engineering with real user needs.",

    // Contact
    "contact.title": "Let's Talk",
    "contact.subtitle":
      "Have an interesting project? I'd love to hear about it.",
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
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = useCallback(
    (key: string): string => {
      return translations[language][key as keyof typeof translations.pt] || key;
    },
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

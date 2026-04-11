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
    "hero.title": "Engenheira Full-Stack",
    "hero.tagline":
      "Transformando sistemas complexos em produtos rápidos, eficientes e escaláveis.",
    "hero.cta.projects": "Ver Projetos",
    "hero.cta.contact": "Contato",
    "hero.cta.resume": "Baixar Currículo",

    // Highlights
    "highlights.1.label": "Full-Stack",
    "highlights.1.sublabel": "com foco em performance e arquitetura",

    "highlights.2.label": "1+ Ano",
    "highlights.2.sublabel": "em produção (SaaS real)",

    "highlights.3.label": "10+",
    "highlights.3.sublabel": "projetos e sistemas construídos",

    // About
    "about.title": "Sobre Mim",
    "about.bio":
      "Sou Full-Stack Engineer especializada em Ruby on Rails e React, com experiência construindo e escalando aplicações SaaS em produção. Tenho forte foco em performance, arquitetura e otimização de custos, incluindo redução de até 85% em operações com IA através de estratégias como caching, batching e redesign de fluxos de dados.",
    "about.bio2":
      "Trabalho de ponta a ponta, desde decisões de arquitetura até deploy e monitoramento, sempre buscando soluções elegantes para problemas reais. Minha abordagem combina engenharia sólida com atenção à experiência do usuário, criando produtos rápidos, eficientes e agradáveis de usar.",

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
      "Sistema de agentes com integração a APIs de IA, focado em orquestração de tarefas, otimização de requisições e redução de custos em workflows baseados em LLM.",

    // Experience
    "experience.title": "Experiência",
    "experience.present": "Presente",

    // Experience items
    "exp.1.role": "Engenheira Full-Stack",
    "exp.1.company": "Content Path (Remoto, UK)",
    "exp.1.period": "Set 2025 - Presente",
    "exp.1.achievement1":
      "Desenvolvimento e manutenção de interfaces React em produção com foco em performance e usabilidade",
    "exp.1.achievement2":
      "Redução de 70–85% nos custos operacionais com IA através de estratégias de cache, batching e otimização de requisições",
    "exp.1.achievement3":
      "Desenho e integração de APIs REST, melhorando o fluxo de dados e reduzindo o uso de APIs externas em até 90%",

    "exp.2.role": "Engenheira de Software",
    "exp.2.company": "Insucheck (Projeto MVP)",
    "exp.2.period": "2025",
    "exp.2.achievement1":
      "Desenvolvimento de interfaces com React e TypeScript focando em usabilidade e qualidade de UI",
    "exp.2.achievement2":
      "Integração com APIs REST e contribuição na estruturação do backend e fluxo de dados",
    "exp.2.achievement3":
      "Introdução do uso de Docker no projeto, melhorando a consistência do ambiente de desenvolvimento",

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
    "mindset.subtitle": "Minha abordagem para construir sistemas reais",

    "mindset.architecture.title": "Arquitetura Define o Resultado",
    "mindset.architecture.desc":
      "Boas decisões de arquitetura simplificam tudo que vem depois. Penso em fluxo de dados, escalabilidade e manutenção antes de escrever código.",

    "mindset.iteration.title": "Iterar com Intenção",
    "mindset.iteration.desc":
      "Construo rápido, mas não de forma aleatória. Cada iteração resolve um problema claro e melhora o sistema como um todo.",

    "mindset.quality.title": "Performance e Eficiência Importam",
    "mindset.quality.desc":
      "Não basta funcionar. Me preocupo com tempo de resposta, uso de recursos e custo, especialmente em sistemas que escalam ou usam IA.",

    "mindset.user.title": "Resolver Problemas Reais",
    "mindset.user.desc":
      "Tecnologia só tem valor quando resolve algo de verdade. Priorizo clareza, usabilidade e redução de fricção na experiência do usuário.",

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
    "hero.title": "Full-Stack Engineer",
    "hero.tagline":
      "Turning complex systems into fast, efficient, and scalable products.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact",
    "hero.cta.resume": "Download Resume",

    // Highlights
    "highlights.1.label": "Full-Stack",
    "highlights.1.sublabel": "focused on performance and system design",

    "highlights.2.label": "1+ Year",
    "highlights.2.sublabel": "in production (real SaaS)",

    "highlights.3.label": "10+",
    "highlights.3.sublabel": "projects and systems built",

    // About
    "about.title": "About Me",
    "about.bio":
      "Full-Stack Engineer specialized in Ruby on Rails and React, with experience building and scaling production SaaS applications. Strong focus on performance, system design, and cost optimization — including reducing AI-related costs by up to 85% through caching strategies, batching, and request flow redesign.",
    "about.bio2":
      "I work end-to-end, from architecture decisions to deployment and monitoring, always aiming to solve real problems with efficient and scalable solutions. My approach combines solid engineering with attention to user experience, building products that are fast, reliable, and intuitive.",

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
      "Agent-based system integrating AI APIs, focused on task orchestration, request optimization, and cost reduction in LLM-driven workflows.",

    // Experience
    "experience.title": "Experience",
    "experience.present": "Present",

    // Experience items
    "exp.1.role": "Full-Stack Engineer",
    "exp.1.company": "Content Path (Remote, UK)",
    "exp.1.period": "Sep 2025 - Present",
    "exp.1.achievement1":
      "Built and maintained production React interfaces with focus on performance and usability",
    "exp.1.achievement2":
      "Reduced AI operational costs by 70–85% through caching strategies, batching, and request flow optimization",
    "exp.1.achievement3":
      "Designed and integrated REST APIs, improving data flow and reducing external API usage by up to 90%",

    "exp.2.role": "Software Engineer",
    "exp.2.company": "Insucheck (MVP Project)",
    "exp.2.period": "2025",
    "exp.2.achievement1":
      "Developed frontend interfaces using React and TypeScript with focus on clean UI and usability",
    "exp.2.achievement2":
      "Integrated frontend with backend APIs and contributed to API structure and data flow",
    "exp.2.achievement3":
      "Introduced Docker to the project, improving development consistency across the team",

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
    "mindset.subtitle": "My approach to building real-world systems",

    "mindset.architecture.title": "Architecture Drives Outcomes",
    "mindset.architecture.desc":
      "Good architectural decisions simplify everything that follows. I think about data flow, scalability, and maintainability before writing code.",

    "mindset.iteration.title": "Intentional Iteration",
    "mindset.iteration.desc":
      "I build fast, but not randomly. Each iteration solves a clear problem and improves the system as a whole.",

    "mindset.quality.title": "Performance and Efficiency Matter",
    "mindset.quality.desc":
      "It's not enough for systems to work. I focus on response time, resource usage, and cost, especially in scalable and AI-driven systems.",

    "mindset.user.title": "Solving Real Problems",
    "mindset.user.desc":
      "Technology only matters when it solves something real. I prioritize clarity, usability, and reducing friction in user experience.",

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

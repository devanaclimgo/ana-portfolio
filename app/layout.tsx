import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/language-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Ana Gomes | Full-Stack Engineer (Ruby on Rails, React, TypeScript)",
  description:
    "Full-Stack Engineer focada em construir sistemas performáticos, escaláveis e eficientes, com experiência em otimização de custos e aplicações SaaS em produção.",
  keywords: [
    "full-stack engineer",
    "ruby on rails developer",
    "react developer",
    "typescript",
    "saas",
    "api development",
    "performance optimization",
    "ai integration",
  ],
  authors: [{ name: "Ana Gomes" }],
  openGraph: {
    title: "Ana Gomes | Full-Stack Engineer",
    description:
      "Full-Stack Engineer especializada em Ruby on Rails e React, com foco em performance, sistemas escaláveis e otimização de custos com IA.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#8b5cf6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

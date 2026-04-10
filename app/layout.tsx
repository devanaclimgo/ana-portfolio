import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Geist } from "next/font/google"
import { LanguageProvider } from "@/context/language-context"
import "./globals.css"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
})

export const metadata: Metadata = {
  title: "Ana Gomes | Full-Stack Engineer",
  description: "Portfólio de Ana Gomes - Engenheira Full-Stack especializada em criar experiências digitais elegantes e performáticas.",
  keywords: ["desenvolvedor", "full-stack", "react", "next.js", "typescript", "portfólio"],
  authors: [{ name: "Ana Gomes" }],
  openGraph: {
    title: "Ana Gomes | Full-Stack Engineer",
    description: "Transformando ideias complexas em experiências digitais elegantes",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#8b5cf6",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

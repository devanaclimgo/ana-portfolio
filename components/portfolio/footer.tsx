"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { Heart } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-8 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>
            &copy; {currentYear} Ana Gomes. {t("footer.rights")}
          </p>
          
          <p className="flex items-center gap-1">
            {t("footer.built")}{" "}
            <Heart className="h-4 w-4 text-primary fill-primary inline-block mx-1" />
            Next.js & TailwindCSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/src/context/language-context";
import { Menu, X } from "lucide-react";
import { Button } from "../../components/ui/button";

const navItems = [
  { key: "nav.about", href: "#about" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.tech", href: "#tech" },
  { key: "nav.tools", href: "#tools" },
  { key: "nav.mindset", href: "#mindset" },
  { key: "nav.contact", href: "#contact" },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-bold text-primary text-glow"
          whileHover={{ scale: 1.05 }}
        >
          AG
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.a
              key={item.key}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              {t(item.key)}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm font-medium hover:border-primary/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className={
                language === "pt" ? "text-primary" : "text-muted-foreground"
              }
            >
              PT
            </span>
            <span className="text-muted-foreground">/</span>
            <span
              className={
                language === "en" ? "text-primary" : "text-muted-foreground"
              }
            >
              EN
            </span>
          </motion.button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-2 mx-4 rounded-lg overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

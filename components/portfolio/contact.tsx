"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/context/language-context";
import { ParallaxSection, SectionHeader } from "./parallax-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/devanaclimgo", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/ana-clara-gomes-48b83b224",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:ana@example.com", label: "Email" },
];

export function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ParallaxSection id="contact">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div ref={ref} className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("contact.name")}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="bg-secondary/30 border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("contact.email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="bg-secondary/30 border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="bg-secondary/30 border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full glow-purple bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  t("contact.sending")
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t("contact.send")}
                  </>
                )}
              </Button>
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-primary/20">
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full glass hover:border-primary/50 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ParallaxSection>
  );
}

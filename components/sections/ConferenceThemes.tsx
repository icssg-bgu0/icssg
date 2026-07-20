"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Database, Cpu, Shield, Heart, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
};

const themes = [
  {
    id: "ai-bigdata",
    title: "AI & Big Data",
    description: "Harnessing the power of artificial intelligence and large-scale data analytics to solve complex problems across domains — from healthcare and education to climate and governance.",
    icon: "Brain",
    color: "#4F8EF7",
    highlights: [
      "Foundation Models & Generative AI",
      "Predictive Analytics for Policy",
      "AI-Driven Decision Support Systems",
      "Ethical AI & Algorithmic Fairness",
    ],
  },
  {
    id: "smart-systems",
    title: "Smart Systems",
    description: "Designing intelligent, interconnected systems that leverage IoT, edge computing, and cyber-physical architectures to create responsive, adaptive environments for modern cities and industries.",
    icon: "Cpu",
    color: "#7C4DFF",
    highlights: [
      "Digital Twins for Urban Planning",
      "Smart Grid & Energy Optimization",
      "Autonomous Infrastructure",
      "Real-Time Monitoring Systems",
    ],
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description: "Advancing environmental, social, and economic sustainability through technology-driven innovation — aligning with global frameworks like the UN Sustainable Development Goals.",
    icon: "Database",
    color: "#00C853",
    highlights: [
      "Climate Change AI Models",
      "Circular Economy Systems",
      "Sustainable Supply Chains",
      "Green Computing & Energy Efficiency",
    ],
  },
  {
    id: "governance",
    title: "Governance",
    description: "Reimagining governance through AI-powered public administration, e-governance platforms, and policy analytics — ensuring transparency, efficiency, and citizen-centric service delivery.",
    icon: "Shield",
    color: "#00E5FF",
    highlights: [
      "E-Governance Platforms",
      "Regulatory Technology (RegTech)",
      "Open Government & Data Transparency",
      "AI-Powered Policy Simulation",
    ],
  },
  {
    id: "human-centric-ai",
    title: "Human-Centric AI",
    description: "Centering human values, accessibility, and social impact in the design and deployment of AI systems — ensuring that technology serves all of humanity equitably.",
    icon: "Heart",
    color: "#FF9800",
    highlights: [
      "Accessible & Inclusive AI Design",
      "AI for Social Good",
      "Human-AI Collaboration",
      "Trust, Safety & Wellbeing",
    ],
  },
];

export function ConferenceThemes() {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  return (
    <section
      id="themes"
      className="relative py-section overflow-hidden"
      aria-labelledby="themes-title"
    >
      <MeshGradient variant="section" />
      <div className="absolute inset-0 line-grid opacity-20 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Research Domains"
          badgeVariant="cyan"
          subtitle="Conference Themes"
          title="Five Pillars of"
          titleHighlight="Innovation"
          description="ICSSG-AI 2027 explores five interconnected themes that represent the convergence of AI, smart systems, sustainability, governance, and human values."
        />

        {/* Theme Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              variants={staggerItem}
              className="group"
            >
              <motion.button
                onClick={() => setActiveTheme(activeTheme === theme.id ? null : theme.id)}
                className="w-full text-left glass-card p-6 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                style={{
                  borderColor: activeTheme === theme.id ? `${theme.color}40` : undefined,
                  boxShadow: activeTheme === theme.id ? `0 0 30px ${theme.color}15` : undefined,
                }}
                whileHover={{ y: -4 }}
                aria-expanded={activeTheme === theme.id}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    backgroundColor: `${theme.color}10`,
                    color: theme.color,
                  }}
                >
                  {iconMap[theme.icon]}
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {theme.title}
                </h3>

                {/* Short description */}
                <p className="text-xs text-white/40 leading-relaxed line-clamp-3">
                  {theme.description}
                </p>

                {/* Expand indicator */}
                <div className="mt-4 flex items-center gap-1 text-xs font-heading" style={{ color: theme.color }}>
                  <span>{activeTheme === theme.id ? "Collapse" : "Explore"}</span>
                  <ChevronRight
                    className={`w-3 h-3 transition-transform duration-300 ${
                      activeTheme === theme.id ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Expanded Theme Detail */}
        <AnimatePresence>
          {activeTheme && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              {themes
                .filter((t) => t.id === activeTheme)
                .map((theme) => (
                  <div
                    key={theme.id}
                    className="glass-card p-8 relative"
                    style={{ borderColor: `${theme.color}20` }}
                  >
                    <button
                      onClick={() => setActiveTheme(null)}
                      className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h3
                          className="font-heading font-bold text-heading-3 mb-4"
                          style={{ color: theme.color }}
                        >
                          {theme.title}
                        </h3>
                        <p className="text-white/60 leading-relaxed text-pretty">
                          {theme.description}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-white mb-4">
                          Key Highlights
                        </h4>
                        <div className="space-y-3">
                          {theme.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <div
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ backgroundColor: theme.color }}
                              />
                              <span className="text-sm text-white/70">
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Award, Search as SearchIcon, Globe, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";

const publishers = [
  { name: "Springer LNCS", description: "Extended versions of best papers will be published in Springer Lecture Notes in Computer Science (LNCS).", logo: "Springer", color: "#00C853" },
];

const indexing = [
  { name: "Scopus", icon: <SearchIcon className="w-5 h-5" />, color: "#FF9800" },
  { name: "Web of Science", icon: <Globe className="w-5 h-5" />, color: "#4F8EF7" },
  { name: "CrossRef", icon: <ExternalLink className="w-5 h-5" />, color: "#00E5FF" },
  { name: "DOI", icon: <BookOpen className="w-5 h-5" />, color: "#7C4DFF" },
  { name: "Google Scholar", icon: <SearchIcon className="w-5 h-5" />, color: "#00C853" },
  { name: "DBLP", icon: <BookOpen className="w-5 h-5" />, color: "#FF5252" },
];

const reviewSteps = [
  { step: "01", title: "Submission", description: "Submit via EasyChair portal" },
  { step: "02", title: "Screening", description: "Plagiarism check & scope review" },
  { step: "03", title: "Peer Review", description: "Double-blind review by 2+ experts" },
  { step: "04", title: "Decision", description: "Accept / Revise / Reject notification" },
  { step: "05", title: "Camera Ready", description: "Final formatted paper submission" },
  { step: "06", title: "Publication", description: "Published in conference proceedings" },
];

export function Publication() {
  return (
    <section
      id="publication"
      className="relative py-section overflow-hidden"
      aria-labelledby="publication-title"
    >
      <MeshGradient variant="default" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Publishing Partners"
          subtitle="Publication & Indexing"
          title="Premium"
          titleHighlight="Publication"
          description="All accepted and presented papers will be published in reputed conference proceedings with broad indexing coverage."
        />

        {/* Publisher Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          {publishers.map((pub, index) => (
            <motion.div key={pub.name} variants={staggerItem}>
              <GlassCard padding="lg" glow={index === 0 ? "blue" : "emerald"} animated={false}>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-bold text-xl"
                    style={{ backgroundColor: `${pub.color}15`, color: pub.color }}
                  >
                    {pub.logo}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-white">
                      {pub.name}
                    </h3>
                    <Badge variant="default" className="mt-1">
                      Confirmed
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">
                  {pub.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Indexing */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-heading font-semibold text-heading-4 text-white mb-6 text-center">
            Indexed In
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {indexing.map((idx) => (
              <div
                key={idx.name}
                className="glass-card px-6 py-4 flex items-center gap-3 transition-all hover:scale-105"
              >
                <div style={{ color: idx.color }}>{idx.icon}</div>
                <span className="font-heading font-medium text-sm text-white/70">
                  {idx.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Review Process Timeline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="font-heading font-semibold text-heading-4 text-white mb-8 text-center">
            Review Process
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {reviewSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mx-auto mb-3">
                  <span className="font-heading font-bold text-sm text-accent-blue">
                    {step.step}
                  </span>
                </div>
                <h4 className="font-heading font-semibold text-sm text-white mb-1">
                  {step.title}
                </h4>
                <p className="text-[11px] text-white/40">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

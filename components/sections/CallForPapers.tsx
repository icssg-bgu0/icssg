"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle2, AlertTriangle, BookOpen, Lightbulb, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";

const submissionTopics = [
  "Original research papers presenting novel methodologies and results",
  "Survey and review papers providing comprehensive overviews of research areas",
  "Industry case studies demonstrating real-world AI and smart system deployments",
  "Short papers and work-in-progress reports on emerging research directions",
  "Poster presentations for early-stage research and student contributions",
];

const policies = [
  { title: "Originality", description: "All submissions must be original, unpublished work not under review elsewhere.", icon: <Lightbulb className="w-5 h-5 text-accent-blue" /> },
  { title: "Plagiarism", description: "Papers will be screened using iThenticate/Turnitin. Similarity index must be below 15%.", icon: <AlertTriangle className="w-5 h-5 text-yellow-400" /> },
  { title: "AI Usage Policy", description: "Use of AI tools for writing assistance must be disclosed. AI-generated content without substantial human contribution will be rejected.", icon: <Target className="w-5 h-5 text-accent-purple" /> },
  { title: "Double-Blind Review", description: "All submissions undergo rigorous double-blind peer review by at least two domain experts.", icon: <CheckCircle2 className="w-5 h-5 text-accent-emerald" /> },
];

export function CallForPapers() {
  return (
    <section
      id="call-for-papers"
      className="relative py-section overflow-hidden"
      aria-labelledby="cfp-title"
    >
      <MeshGradient variant="section" />
      <div className="absolute inset-0 line-grid opacity-15 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Submit Your Research"
          badgeVariant="cyan"
          subtitle="Call for Papers"
          title="Share Your"
          titleHighlight="Research"
          description="ICSSG-AI 2027 invites researchers, academicians, and industry professionals to submit original research papers across all conference tracks."
        />

        {/* Paper Categories */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <GlassCard padding="lg" hover={false} animated={false}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-accent-blue" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Submission Categories
              </h3>
            </div>
            <div className="space-y-3">
              {submissionTopics.map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-1" />
                  <p className="text-sm text-white/60 leading-relaxed">{topic}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Policies Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {policies.map((policy, index) => (
            <motion.div key={policy.title} variants={staggerItem}>
              <GlassCard padding="lg" hover={false} animated={false}>
                <div className="flex items-center gap-3 mb-3">
                  {policy.icon}
                  <h3 className="font-heading font-semibold text-base text-white">
                    {policy.title}
                  </h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">
                  {policy.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

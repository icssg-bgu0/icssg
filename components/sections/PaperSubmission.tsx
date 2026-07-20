"use client";

import React from "react";
import { motion } from "framer-motion";
import { Upload, Download, FileText, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";

const guidelines = [
  "Papers must be formatted in Springer format",
  "Full papers: 6–8 pages including references",
  "Short papers: 4–5 pages including references",
  "All papers must be submitted as PDF through CMT",
  "Remove all author-identifying information for double-blind review",
  "Use the provided LaTeX or Word template",
];

const workflow = [
  { step: 1, title: "Download Template", description: "Get the Springer format template", action: "Download", icon: <Download className="w-5 h-5" /> },
  { step: 2, title: "Prepare Manuscript", description: "Write and format your paper", action: null, icon: <FileText className="w-5 h-5" /> },
  { step: 3, title: "Submit via CMT", description: "(To be updated SOON)", action: "Submit", icon: <Upload className="w-5 h-5" /> },
  { step: 4, title: "Peer Review", description: "Double-blind review process", action: null, icon: <CheckCircle2 className="w-5 h-5" /> },
  { step: 5, title: "Camera-Ready", description: "Prepare final version upon acceptance", action: null, icon: <FileText className="w-5 h-5" /> },
  { step: 6, title: "Presentation", description: "Present your research at the conference", action: null, icon: <CheckCircle2 className="w-5 h-5" /> },
  { step: 7, title: "Publication", description: "Published in Springer proceedings", action: null, icon: <FileText className="w-5 h-5" /> },
];

export function PaperSubmission() {
  return (
    <section
      id="paper-submission"
      className="relative py-section overflow-hidden"
      aria-labelledby="paper-submission-title"
    >
      <MeshGradient variant="subtle" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Author Guidelines"
          badgeVariant="purple"
          subtitle="Paper Submission"
          title="Submission"
          titleHighlight="Guidelines"
          description="Follow these guidelines to prepare and submit your manuscript for ICSSG-AI 2027."
        />

        {/* Submission Workflow */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {workflow.map((item, index) => (
            <motion.div key={item.step} variants={staggerItem}>
              <div className="glass-card p-5 h-full relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-heading font-bold text-2xl text-white/10">
                    {String(item.step).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-sm text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-white/40 mb-3">{item.description}</p>
                {item.action && (
                  <Button variant="outline" size="sm" className="text-xs">
                    {item.action}
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                )}
                {/* Connector */}
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 text-white/10">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Formatting Guidelines */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GlassCard padding="lg" hover={false} animated={false}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-accent-purple" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Formatting Requirements
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {guidelines.map((guideline, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                  <p className="text-sm text-white/60">{guideline}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img01 from "@/01.jpg";
import { Award, Globe, BookOpen, Building2, TrendingUp, Cpu, Lightbulb } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import conferenceData from "@/data/conference.json";

const universityHighlights = [
  { title: "NAAC A+", subtitle: "Accreditation", icon: <Award className="w-5 h-5" /> },
  { title: "UGC", subtitle: "Recognized", icon: <Building2 className="w-5 h-5" /> },
  { title: "Smart", subtitle: "Classrooms", icon: <BookOpen className="w-5 h-5" /> },
  { title: "AI Center", subtitle: "Of Excellence", icon: <Cpu className="w-5 h-5" /> },
  { title: "Global", subtitle: "Collaborations", icon: <Globe className="w-5 h-5" /> },
  { title: "Innovation", subtitle: "Labs", icon: <Lightbulb className="w-5 h-5" /> },
];

export function AboutUniversity() {
  return (
    <section
      id="about-university"
      className="relative py-section overflow-hidden"
      aria-labelledby="about-university-title"
    >
      <MeshGradient variant="default" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Host Institution"
          subtitle="Organized By"
          title="Birla Global"
          titleHighlight="University"
          description={conferenceData.university.description}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-glass-lg group"
        >
          <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
          <Image
            src={img01}
            alt="Birla Global University Campus"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            placeholder="blur"
          />
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {universityHighlights.map((highlight, index) => (
            <motion.div key={highlight.title} variants={staggerItem}>
              <div className="glass-card p-5 text-center h-full flex flex-col items-center justify-center">
                <div className="flex justify-center mb-3 text-accent-blue">
                  {highlight.icon}
                </div>
                <div className="font-heading font-bold text-lg text-white mb-1">
                  {highlight.title}
                </div>
                <div className="text-xs text-white/50 font-heading uppercase tracking-wider">
                  {highlight.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Accreditations & Rankings */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GlassCard padding="lg" hover={false} animated={false}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent-blue" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white">
                  Accreditations
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {conferenceData.university.accreditations.map((acc) => (
                  <Badge key={acc} variant="default" className="text-sm px-4 py-2">
                    {acc}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GlassCard padding="lg" hover={false} animated={false}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-emerald/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent-emerald" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white">
                  Rankings
                </h3>
              </div>
              <div className="space-y-3">
                {conferenceData.university.rankings.map((rank, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm text-white/60"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent-emerald/10 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-accent-emerald">
                        {i + 1}
                      </span>
                    </div>
                    {rank}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

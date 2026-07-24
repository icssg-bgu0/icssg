"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img05 from "@/05.jpg";
import { Target, Eye, Lightbulb, TrendingUp, Users, Globe, CheckCircle2, Sparkles, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import conferenceData from "@/data/conference.json";

const pillars = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description: "Pushing the boundaries of AI research and its application in governance and smart systems.",
    color: "text-accent-blue",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Sustainability",
    description: "Advancing sustainable development goals through technology-driven governance models.",
    color: "text-accent-emerald",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Human-Centric AI",
    description: "Ensuring AI systems are designed to be fair, inclusive, and beneficial for all of humanity.",
    color: "text-accent-purple",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Governance",
    description: "Reimagining public governance through intelligent systems and data-driven policy frameworks.",
    color: "text-accent-cyan",
  },
];

export function AboutConference() {
  return (
    <section
      id="about-conference"
      className="relative py-section overflow-hidden"
      aria-labelledby="about-conference-title"
    >
      <MeshGradient variant="section" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="About the Conference"
          subtitle="ICSSG-AI 2027"
          title="Shaping the Future of"
          titleHighlight="Intelligent Governance"
          description={conferenceData.about.description}
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
            src={img05}
            alt="Intelligent Governance Conference"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            placeholder="blur"
          />
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {pillars.map((pillar, index) => (
            <motion.div key={pillar.title} variants={staggerItem}>
              <GlassCard
                padding="lg"
                glow={index === 0 ? "blue" : index === 1 ? "emerald" : index === 2 ? "purple" : "cyan"}
                delay={index * 0.1}
                animated={false}
              >
                <div className={`mb-4 ${pillar.color}`}>{pillar.icon}</div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {pillar.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GlassCard padding="lg" hover={false} animated={false}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-accent-blue" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white">
                  Our Vision
                </h3>
              </div>
              <p className="text-white/50 leading-relaxed text-pretty">
                {conferenceData.about.vision}
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GlassCard padding="lg" hover={false} animated={false}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent-purple" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white">
                  Our Mission
                </h3>
              </div>
              <p className="text-white/50 leading-relaxed text-pretty">
                {conferenceData.about.mission}
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Objectives & Outcomes */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-semibold text-heading-3 text-white mb-6 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-accent-blue" />
              Key Objectives
            </h3>
            <div className="space-y-3">
              {conferenceData.about.objectives.map((obj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">
                    {obj}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-semibold text-heading-3 text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-accent-emerald" />
              Expected Outcomes
            </h3>
            <div className="space-y-3">
              {conferenceData.about.expectedOutcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-emerald shrink-0 mt-0.5" />
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">
                    {outcome}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Publication Notice */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassCard padding="lg" glow="blue" animated={false} hover={false}>
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 shrink-0 rounded-full bg-accent-blue/10 flex items-center justify-center mt-1">
                <BookOpen className="w-8 h-8 text-accent-blue" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-white mb-3">
                  Publication Opportunities
                </h3>
                <p className="text-white/70 leading-relaxed text-pretty text-sm md:text-base">
                  Selected, peer-reviewed papers presented at the 1st International Conference on Smart Systems and Sustainable Governance Powered by AI (ICSSG-AI 2027) will be considered for publication in the conference proceedings to be published in the <strong className="text-accent-blue font-semibold">Artificial Intelligence-enhanced Software and Systems Engineering (AI-SSE)</strong> book series by <strong className="text-white font-semibold">Springer Publication House</strong> <span className="text-accent-emerald font-semibold italic">(Approval Pending)</span>.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

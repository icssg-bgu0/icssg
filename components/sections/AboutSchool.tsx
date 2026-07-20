"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img03 from "@/03.jpg";
import { Code2, Beaker, Handshake, BookOpen, Award, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import conferenceData from "@/data/conference.json";

export function AboutSchool() {
  return (
    <section
      id="about-school"
      className="relative py-section overflow-hidden"
      aria-labelledby="about-school-title"
    >
      <MeshGradient variant="subtle" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Department"
          badgeVariant="purple"
          subtitle="Hosting School"
          title="School of Computer Applications &"
          titleHighlight="Information Technology"
          description={conferenceData.school.description}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-glass-lg group"
        >
          <div className="absolute inset-0 bg-accent-purple/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
          <Image
            src={img03}
            alt="School of Computer Applications"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            placeholder="blur"
          />
        </motion.div>

        {/* Programs, Research, Collaborations */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Programs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GlassCard padding="lg" glow="blue" hover={false} animated={false} className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent-blue" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white">
                  Programs
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {conferenceData.school.programs.map((prog) => (
                  <Badge key={prog} variant="default">
                    {prog}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Research Areas */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GlassCard padding="lg" glow="purple" hover={false} animated={false} className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center">
                  <Beaker className="w-5 h-5 text-accent-purple" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white">
                  Research Areas
                </h3>
              </div>
              <div className="space-y-2">
                {conferenceData.school.researchAreas.map((area, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-white/60"
                  >
                    <Code2 className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Industry Collaborations */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GlassCard padding="lg" glow="cyan" hover={false} animated={false} className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-accent-cyan" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white">
                  Industry Partners
                </h3>
              </div>
              <div className="space-y-2">
                {conferenceData.school.collaborations.map((collab, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-white/60"
                  >
                    <Award className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                    {collab}
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

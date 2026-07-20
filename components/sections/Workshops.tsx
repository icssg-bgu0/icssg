"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Shield, Building2, Clock, Users, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem } from "@/lib/animations";
import workshopsData from "@/data/workshops.json";
import type { Workshop } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
};

const typeColors: Record<string, string> = {
  "hands-on": "#4F8EF7",
  tutorial: "#7C4DFF",
  industry: "#FF9800",
  demo: "#00E5FF",
};

export function Workshops() {
  const workshops = workshopsData as Workshop[];

  return (
    <section
      id="workshops"
      className="relative py-section overflow-hidden"
      aria-labelledby="workshops-title"
    >
      <MeshGradient variant="section" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Hands-On Learning"
          badgeVariant="cyan"
          subtitle="Workshops & Tutorials"
          title="Interactive"
          titleHighlight="Workshops"
          description="Deepen your skills with hands-on workshops, expert-led tutorials, and industry sessions."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {workshops.map((ws, index) => (
            <motion.div key={ws.id} variants={staggerItem}>
              <div className="glass-card p-6 h-full transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${typeColors[ws.type]}15`,
                      color: typeColors[ws.type],
                    }}
                  >
                    {iconMap[ws.icon]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        variant="glass"
                        className="text-[10px]"
                        style={{ color: typeColors[ws.type] }}
                      >
                        {ws.type === "hands-on"
                          ? "Hands-On"
                          : ws.type.charAt(0).toUpperCase() + ws.type.slice(1)}
                      </Badge>
                      <Badge variant="outline" className="text-[10px]">
                        <Clock className="w-3 h-3 mr-1" />
                        {ws.duration}
                      </Badge>
                      {ws.capacity && (
                        <Badge variant="outline" className="text-[10px]">
                          <Users className="w-3 h-3 mr-1" />
                          {ws.capacity} seats
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-heading font-semibold text-base text-white">
                      {ws.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  {ws.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {ws.topics.map((topic) => (
                    <Badge key={topic} variant="outline" className="text-[10px]">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="text-xs text-white/40 pt-3 border-t border-glass-border">
                  <span className="text-white/60 font-medium">
                    {ws.instructor}
                  </span>{" "}
                  — {ws.instructorAffiliation}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

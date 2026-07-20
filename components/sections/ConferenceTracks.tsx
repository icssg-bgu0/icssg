"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Database, Cpu, Shield, Lock, Heart, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem } from "@/lib/animations";
import tracksData from "@/data/tracks.json";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Lock: <Lock className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
};

export function ConferenceTracks() {
  return (
    <section
      id="tracks"
      className="relative py-section overflow-hidden"
      aria-labelledby="tracks-title"
    >
      <MeshGradient variant="default" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Research Tracks"
          subtitle="Call for Papers"
          title="Conference"
          titleHighlight="Tracks"
          description="Explore our six specialized tracks covering the full spectrum of AI-driven research — from machine learning and smart systems to governance and security."
        />

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {tracksData.map((track, index) => (
            <motion.div
              key={track.id}
              variants={staggerItem}
              className={`group ${
                index === 0
                  ? "md:col-span-2 lg:col-span-2"
                  : index === 3
                  ? "md:col-span-2 lg:col-span-2"
                  : ""
              }`}
            >
              <div
                className="glass-card p-6 h-full transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1 cursor-pointer relative overflow-hidden"
                style={{
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                {/* Color accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-60"
                  style={{
                    background: `linear-gradient(90deg, ${track.color}, transparent)`,
                  }}
                />

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${track.color}15`,
                      color: track.color,
                    }}
                  >
                    {iconMap[track.icon]}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h3 className="font-heading font-semibold text-lg text-white mb-1">
                      {track.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/40 leading-relaxed mb-4 line-clamp-2">
                      {track.description}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {track.topics.slice(0, 5).map((topic) => (
                        <Badge
                          key={topic}
                          variant="outline"
                          className="text-[10px] px-2 py-0.5"
                        >
                          {topic}
                        </Badge>
                      ))}
                      {track.topics.length > 5 && (
                        <Badge
                          variant="glass"
                          className="text-[10px] px-2 py-0.5"
                        >
                          +{track.topics.length - 5} more
                        </Badge>
                      )}
                    </div>

                    {/* Chair */}
                    <div className="text-xs text-white/30">
                      Track Chair: {track.chairs.join(", ")}
                    </div>
                  </div>
                </div>

                {/* Hover arrow */}
                <div
                  className="absolute bottom-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                  style={{ backgroundColor: `${track.color}15`, color: track.color }}
                >
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

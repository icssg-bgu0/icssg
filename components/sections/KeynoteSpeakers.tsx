"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { getInitials, getFlagEmoji } from "@/lib/utils";
import speakersData from "@/data/speakers.json";
import type { Speaker } from "@/types";

const keynoteSpeakers = (speakersData as Speaker[]).filter(
  (s) => s.type === "keynote"
);

export function KeynoteSpeakers() {
  return (
    <section
      id="keynote-speakers"
      className="relative py-section overflow-hidden"
      aria-labelledby="keynote-speakers-title"
    >
      <MeshGradient variant="section" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Distinguished Speakers"
          badgeVariant="purple"
          subtitle="Keynote Addresses"
          title="World-Class"
          titleHighlight="Keynote Speakers"
          description="Hear from pioneering researchers and industry leaders shaping the future of AI, governance, and sustainability."
        />

        {/* Speaker Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {keynoteSpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              variants={staggerItem}
              className="group"
            >
              <div className="glass-card overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-glow">
                {/* Avatar */}
                <div className="relative h-52 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center overflow-hidden">
                  {/* Initials Avatar */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                    <span className="font-heading font-bold text-3xl text-white">
                      {getInitials(speaker.name)}
                    </span>
                  </div>

                  {/* Country flag */}
                  <div className="absolute top-3 right-3 text-lg">
                    {getFlagEmoji(speaker.countryCode)}
                  </div>

                  {/* Keynote badge */}
                  <Badge
                    variant="default"
                    className="absolute top-3 left-3 text-[10px]"
                  >
                    Keynote
                  </Badge>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-base text-white mb-1 group-hover:text-accent-blue transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-xs text-white/50 mb-1">{speaker.title}</p>
                  <div className="flex items-center gap-1.5 text-xs text-white/40 mb-3">
                    <GraduationCap className="w-3 h-3" />
                    <span className="truncate">{speaker.affiliation}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/30 mb-4">
                    <MapPin className="w-3 h-3" />
                    <span>{speaker.country}</span>
                  </div>

                  {/* Research Interests */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {speaker.researchInterests.slice(0, 3).map((interest) => (
                      <Badge
                        key={interest}
                        variant="outline"
                        className="text-[9px] px-1.5 py-0.5"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>

                  {/* Talk Title */}
                  {speaker.talkTitle && (
                    <div className="pt-3 border-t border-glass-border">
                      <p className="text-[10px] text-accent-blue/60 uppercase tracking-wider mb-1 font-heading">
                        Talk
                      </p>
                      <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                        {speaker.talkTitle}
                      </p>
                    </div>
                  )}

                  {/* Social Links */}
                  <div className="flex items-center gap-2 mt-4">
                    {speaker.social.googleScholar && (
                      <a
                        href={speaker.social.googleScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center text-white/30 hover:text-accent-blue hover:bg-accent-blue/10 transition-all"
                        aria-label={`${speaker.name}'s Google Scholar`}
                      >
                        <GraduationCap className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {speaker.social.linkedin && (
                      <a
                        href={speaker.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center text-white/30 hover:text-accent-blue hover:bg-accent-blue/10 transition-all"
                        aria-label={`${speaker.name}'s LinkedIn`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {speaker.social.website && (
                      <a
                        href={speaker.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center text-white/30 hover:text-accent-blue hover:bg-accent-blue/10 transition-all"
                        aria-label={`${speaker.name}'s website`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

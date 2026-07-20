"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, MapPin, Filter } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { getInitials, getFlagEmoji } from "@/lib/utils";
import speakersData from "@/data/speakers.json";
import type { Speaker } from "@/types";

const invitedSpeakers = (speakersData as Speaker[]).filter(
  (s) => s.type === "invited"
);

export function InvitedSpeakers() {
  const [activeCountry, setActiveCountry] = useState<string>("All");

  const countries = useMemo(() => {
    const unique = [...new Set(invitedSpeakers.map((s) => s.country))];
    return ["All", ...unique.sort()];
  }, []);

  const filteredSpeakers = useMemo(() => {
    if (activeCountry === "All") return invitedSpeakers;
    return invitedSpeakers.filter((s) => s.country === activeCountry);
  }, [activeCountry]);

  return (
    <section
      id="invited-speakers"
      className="relative py-section overflow-hidden"
      aria-labelledby="invited-speakers-title"
    >
      <MeshGradient variant="subtle" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Distinguished Guests"
          subtitle="Invited Talks"
          title="Invited"
          titleHighlight="Speakers"
          description="Expert speakers from leading universities and research institutions across the globe."
        />

        {/* Country Filter */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2 justify-center flex-wrap">
          <Filter className="w-4 h-4 text-white/30 shrink-0" />
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setActiveCountry(country)}
              className={`px-4 py-2 rounded-lg text-sm font-heading transition-all duration-200 shrink-0 ${
                activeCountry === country
                  ? "bg-accent-blue/10 text-accent-blue border border-accent-blue/30"
                  : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              {country !== "All" && (
                <span className="mr-1.5">
                  {getFlagEmoji(
                    invitedSpeakers.find((s) => s.country === country)
                      ?.countryCode || ""
                  )}
                </span>
              )}
              {country}
            </button>
          ))}
        </div>

        {/* Speaker Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSpeakers.map((speaker) => (
              <motion.div
                key={speaker.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="glass-card p-5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                  {/* Avatar + Flag */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/30 to-accent-purple/30 flex items-center justify-center shrink-0">
                      <span className="font-heading font-bold text-base text-white">
                        {getInitials(speaker.name)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading font-semibold text-sm text-white truncate group-hover:text-accent-blue transition-colors">
                        {speaker.name}
                      </h3>
                      <p className="text-[11px] text-white/40 truncate">
                        {speaker.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-white/40 mb-2">
                    <GraduationCap className="w-3 h-3 shrink-0" />
                    <span className="truncate">{speaker.affiliation}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/30">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>
                      {getFlagEmoji(speaker.countryCode)} {speaker.country}
                    </span>
                  </div>

                  {speaker.talkTitle && (
                    <div className="mt-3 pt-3 border-t border-glass-border">
                      <p className="text-[10px] text-accent-cyan/60 uppercase tracking-wider mb-1 font-heading">
                        Talk
                      </p>
                      <p className="text-xs text-white/50 line-clamp-2">
                        {speaker.talkTitle}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

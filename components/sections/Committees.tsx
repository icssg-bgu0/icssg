"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { getInitials, getFlagEmoji } from "@/lib/utils";
import committeesData from "@/data/committees.json";
import type { CommitteeMember, CommitteeCategory } from "@/types";

const categoryLabels: Record<CommitteeCategory, string> = {
  patron: "Patron",
  chairs: "General & Program Chairs",
  conveners: "Conveners",
  technical: "Technical Committee",
  finance: "Finance Committee",
  hospitality: "Hospitality Committee",
  accommodation: "Accommodation Committee",
  logistics: "Logistics Committee",
  publicity: "Publicity Committee",
  organizing: "Organizing Committee",
  advisory: "Advisory Board",
  international: "International Committee",
};

const categoryOrder: CommitteeCategory[] = [
  "patron",
  "chairs",
  "conveners",
  "organizing",
  "advisory",
  "international",
  "technical",
  "finance",
  "hospitality",
  "accommodation",
  "logistics",
  "publicity",
];

export function Committees() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const unique = [...new Set((committeesData as CommitteeMember[]).map((m) => m.category))];
    return unique.sort(
      (a, b) =>
        categoryOrder.indexOf(a as CommitteeCategory) -
        categoryOrder.indexOf(b as CommitteeCategory)
    );
  }, []);

  const filteredMembers = useMemo(() => {
    let members = committeesData as CommitteeMember[];

    if (activeCategory !== "all") {
      members = members.filter((m) => m.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      members = members.filter(
        (m) =>
          m.name.toLowerCase().includes(query) ||
          m.affiliation.toLowerCase().includes(query) ||
          m.country.toLowerCase().includes(query)
      );
    }

    return members;
  }, [activeCategory, searchQuery]);

  // Group by category
  const groupedMembers = useMemo(() => {
    const groups: Record<string, CommitteeMember[]> = {};
    filteredMembers.forEach((member) => {
      if (!groups[member.category]) groups[member.category] = [];
      groups[member.category].push(member);
    });
    return groups;
  }, [filteredMembers]);

  return (
    <section
      id="committee"
      className="relative py-section overflow-hidden"
      aria-labelledby="committee-title"
    >
      <MeshGradient variant="subtle" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Organizing Team"
          badgeVariant="emerald"
          subtitle="Committee"
          title="Organizing"
          titleHighlight="Committee"
          description="Meet the distinguished academics and professionals guiding ICSSG-AI 2027."
        />

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <div className="flex-1 max-w-md">
            <Input
              placeholder="Search by name, affiliation, or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<Search className="w-4 h-4" />}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2.5 rounded-xl text-xs font-heading font-medium transition-all shrink-0 ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-accent-blue/20 to-accent-emerald/20 text-accent-blue border border-accent-blue/30 shadow-glow"
                  : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-transparent"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-heading font-medium transition-all shrink-0 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-accent-blue/20 to-accent-emerald/20 text-accent-blue border border-accent-blue/30 shadow-glow"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-transparent"
                }`}
              >
                {categoryLabels[cat as CommitteeCategory]}
              </button>
            ))}
          </div>
        </div>

        {/* Committee Groups */}
        <div className="space-y-20">
          {categoryOrder
            .filter((cat) => groupedMembers[cat])
            .map((category) => {
              const isTopLevel = category === "patron" || category === "chairs";
              const members = groupedMembers[category];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-2 h-8 rounded-full bg-gradient-to-b from-accent-blue to-accent-emerald" />
                    <h3 className="font-heading font-bold text-heading-3 text-white">
                      {categoryLabels[category as CommitteeCategory]}
                    </h3>
                    <Badge variant="glass" className="ml-2 font-mono">
                      {members.length}
                    </Badge>
                  </div>

                  <motion.div
                    className={`grid gap-6 ${
                      isTopLevel
                        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Larger cards for top-level
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" // Standard cards
                    }`}
                  >
                    <AnimatePresence mode="popLayout">
                      {members.map((member) => (
                        <motion.div
                          key={member.id}
                          layout
                          initial={{ opacity: 0, scale: 0.9, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: -20 }}
                          transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
                          className="group h-full"
                        >
                          <div
                            className={`glass-card relative h-full overflow-hidden transition-all duration-500 hover:shadow-glow hover:-translate-y-1 ${
                              isTopLevel ? "p-6 sm:p-8" : "p-5"
                            }`}
                          >
                            {/* Animated Background Gradient on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/0 to-accent-emerald/0 group-hover:from-accent-blue/10 group-hover:to-accent-emerald/10 transition-colors duration-500" />
                            
                            <div className={`relative z-10 flex ${isTopLevel ? "flex-col items-center text-center gap-5" : "items-center gap-4"}`}>
                              {/* Avatar */}
                              <div
                                className={`rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-emerald/20 flex items-center justify-center shrink-0 border border-glass-border shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                                  isTopLevel ? "w-20 h-20 sm:w-24 sm:h-24" : "w-12 h-12"
                                }`}
                              >
                                <span className={`font-heading font-bold text-white ${isTopLevel ? "text-2xl sm:text-3xl" : "text-sm"}`}>
                                  {getInitials(member.name)}
                                </span>
                              </div>

                              <div className={`min-w-0 flex-1 ${isTopLevel ? "w-full" : ""}`}>
                                <h4 className={`font-heading font-semibold text-white truncate transition-colors duration-300 group-hover:text-accent-blue ${isTopLevel ? "text-xl mb-1" : "text-base"}`}>
                                  {member.name}
                                </h4>
                                <p className={`text-white/60 truncate ${isTopLevel ? "text-sm mb-3" : "text-xs mb-1"}`}>
                                  {member.title}
                                </p>
                                
                                <div className={`flex items-center gap-1.5 text-white/40 ${isTopLevel ? "justify-center text-sm" : "text-[11px]"}`}>
                                  <GraduationCap className={isTopLevel ? "w-4 h-4" : "w-3 h-3 shrink-0"} />
                                  <span className="truncate">{member.affiliation}</span>
                                </div>
                                
                                <div className={`flex items-center gap-1.5 text-white/40 mt-1.5 ${isTopLevel ? "justify-center text-sm" : "text-[11px]"}`}>
                                  <MapPin className={isTopLevel ? "w-4 h-4" : "w-3 h-3 shrink-0"} />
                                  <span className="truncate">
                                    {getFlagEmoji(member.countryCode)} {member.country}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 glass-card rounded-2xl"
          >
            <p className="text-white/40 text-lg">
              No committee members found matching your search.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

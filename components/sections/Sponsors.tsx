"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { fadeUp } from "@/lib/animations";
import sponsorsData from "@/data/sponsors.json";
import type { Sponsor, SponsorTier } from "@/types";

const tierLabels: Record<SponsorTier, string> = {
  platinum: "Platinum Partners",
  gold: "Gold Partners",
  silver: "Silver Partners",
  academic: "Academic Partners",
  industry: "Industry Partners",
};

const tierColors: Record<SponsorTier, string> = {
  platinum: "#E5E7EB",
  gold: "#FFD700",
  silver: "#C0C0C0",
  academic: "#4F8EF7",
  industry: "#00E5FF",
};

const tierOrder: SponsorTier[] = ["platinum", "gold", "silver", "academic", "industry"];

export function Sponsors() {
  const sponsors = sponsorsData as Sponsor[];
  const groupedSponsors = tierOrder.reduce((acc, tier) => {
    const filtered = sponsors.filter((s) => s.tier === tier);
    if (filtered.length > 0) acc[tier] = filtered;
    return acc;
  }, {} as Record<SponsorTier, Sponsor[]>);

  return (
    <section
      id="sponsors"
      className="relative py-section overflow-hidden"
      aria-labelledby="sponsors-title"
    >
      <MeshGradient variant="subtle" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Our Partners"
          subtitle="Sponsors & Partners"
          title="Proudly Supported By"
          titleHighlight="Industry Leaders"
          description="ICSSG-AI 2027 is supported by leading organizations from academia and industry."
        />

        {/* Infinite Scrolling Logos */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 overflow-hidden mask-edges"
        >
          <div className="flex animate-marquee gap-12 items-center">
            {[...sponsors, ...sponsors].map((sponsor, i) => (
              <a
                key={`${sponsor.id}-${i}`}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-8 py-4 glass-card flex items-center justify-center min-w-[140px] h-16 hover:scale-105 transition-transform"
                aria-label={sponsor.name}
              >
                <span className="font-heading font-bold text-lg text-white/40 hover:text-white/70 transition-colors">
                  {sponsor.logo}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Tiered Sponsors */}
        <div className="space-y-12">
          {tierOrder
            .filter((tier) => groupedSponsors[tier])
            .map((tier) => (
              <motion.div
                key={tier}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3
                  className="font-heading font-semibold text-heading-4 mb-6 text-center"
                  style={{ color: tierColors[tier] }}
                >
                  {tierLabels[tier]}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {groupedSponsors[tier].map((sponsor) => (
                    <a
                      key={sponsor.id}
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card px-8 py-5 flex items-center gap-3 hover:scale-105 hover:shadow-glow transition-all duration-300 group"
                    >
                      <span
                        className="font-heading font-bold text-xl"
                        style={{ color: tierColors[tier] }}
                      >
                        {sponsor.logo}
                      </span>
                      <span className="text-sm text-white/40 group-hover:text-white/70 transition-colors">
                        {sponsor.name}
                      </span>
                      <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white/40 transition-colors" />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem } from "@/lib/animations";
import attractionsData from "@/data/attractions.json";

export function LocalAttractions() {
  return (
    <section
      id="attractions"
      className="relative py-section overflow-hidden"
      aria-labelledby="attractions-title"
    >
      <MeshGradient variant="default" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Explore Odisha"
          badgeVariant="emerald"
          subtitle="Local Attractions"
          title="Discover the Beauty of"
          titleHighlight="Odisha"
          description="Take a break from the conference to explore the rich cultural heritage, stunning temples, and natural beauty of Odisha."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {attractionsData.map((attraction, index) => (
            <motion.div
              key={attraction.id}
              variants={staggerItem}
              className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <div className="glass-card overflow-hidden h-full transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 group">
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10" />
                  <span className="font-heading font-bold text-4xl text-white/10">
                    {attraction.name.split(" ")[0]}
                  </span>
                  <Badge
                    variant="glass"
                    className="absolute top-3 left-3 z-20 text-[10px]"
                  >
                    {attraction.category}
                  </Badge>
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 text-xs text-white/60">
                    <MapPin className="w-3 h-3" />
                    {attraction.distance} from venue
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg text-white mb-2 group-hover:text-accent-blue transition-colors">
                    {attraction.name}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-3">
                    {attraction.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {attraction.highlights.map((hl) => (
                      <Badge key={hl} variant="outline" className="text-[10px]">
                        <Star className="w-2.5 h-2.5 mr-1" />
                        {hl}
                      </Badge>
                    ))}
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

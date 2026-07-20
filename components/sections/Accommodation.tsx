"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hotel, Star, MapPin, Wifi, Car, UtensilsCrossed, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem } from "@/lib/animations";
import accommodationData from "@/data/accommodation.json";
import type { Hotel as HotelType } from "@/types";

const categoryColors: Record<string, string> = {
  campus: "#00C853",
  luxury: "#FFD700",
  premium: "#4F8EF7",
  standard: "#7C4DFF",
  budget: "#00E5FF",
};

export function Accommodation() {
  const hotels = accommodationData as HotelType[];

  return (
    <section
      id="accommodation"
      className="relative py-section overflow-hidden"
      aria-labelledby="accommodation-title"
    >
      <MeshGradient variant="subtle" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Stay"
          subtitle="Accommodation"
          title="Where to"
          titleHighlight="Stay"
          description="Choose from a range of accommodation options near the conference venue."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {hotels.map((hotel, index) => (
            <motion.div key={hotel.id} variants={staggerItem}>
              <div className="glass-card p-5 h-full flex flex-col transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${categoryColors[hotel.category]}15`,
                        color: categoryColors[hotel.category],
                      }}
                    >
                      <Hotel className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-sm text-white">
                        {hotel.name}
                      </h3>
                      <Badge
                        variant="outline"
                        className="text-[10px] mt-1"
                        style={{ color: categoryColors[hotel.category] }}
                      >
                        {hotel.category.charAt(0).toUpperCase() + hotel.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
                  <MapPin className="w-3 h-3" />
                  {hotel.distance}
                </div>

                <div className="text-sm font-heading font-medium text-accent-blue mb-3">
                  {hotel.priceRange}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                  {hotel.amenities.map((amenity) => (
                    <Badge key={amenity} variant="outline" className="text-[10px]">
                      {amenity}
                    </Badge>
                  ))}
                </div>

                {hotel.website && (
                  <Button variant="ghost" size="sm" className="w-full text-xs" asChild>
                    <a href={hotel.website} target="_blank" rel="noopener noreferrer">
                      View Details <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

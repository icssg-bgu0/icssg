"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img09 from "@/9.jpg";
import img16 from "@/16.jpg";
import { Image as ImageIcon, Video } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem } from "@/lib/animations";

const galleryItems: { id: string; title: string; category: string; type: string; src?: any }[] = [
  { id: "g-1", title: "Conference Hall", category: "Campus", type: "image", src: img09 },
  { id: "g-2", title: "Keynote Session", category: "Past Event", type: "image", src: img16 },
  { id: "g-3", title: "Research Poster Session", category: "Past Event", type: "image" },
  { id: "g-4", title: "Networking Dinner", category: "Past Event", type: "image" },
  { id: "g-5", title: "Campus Aerial View", category: "Campus", type: "image" },
  { id: "g-6", title: "Workshop Session", category: "Past Event", type: "image" },
  { id: "g-7", title: "BGU Library", category: "Campus", type: "image" },
  { id: "g-8", title: "Panel Discussion", category: "Past Event", type: "image" },
];

const heights = ["h-48", "h-64", "h-52", "h-56", "h-72", "h-48", "h-60", "h-52"];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-section overflow-hidden"
      aria-labelledby="gallery-title"
    >
      <MeshGradient variant="subtle" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Visual Stories"
          badgeVariant="purple"
          subtitle="Gallery"
          title="Conference"
          titleHighlight="Gallery"
          description="Explore moments from past conferences and our beautiful campus."
        />

        {/* Masonry Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="break-inside-avoid"
            >
              <div
                className={`glass-card overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] ${heights[index]}`}
              >
                {/* Image placeholder */}
                <div className="relative w-full h-full bg-gradient-to-br from-accent-blue/10 to-accent-emerald/10 flex items-center justify-center">
                  {item.src ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      placeholder="blur"
                    />
                  ) : (
                    <ImageIcon className="w-8 h-8 text-white/10" />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <Badge variant="glass" className="text-[10px] mb-2">
                        {item.category}
                      </Badge>
                      <h4 className="font-heading font-semibold text-sm text-white">
                        {item.title}
                      </h4>
                    </div>
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

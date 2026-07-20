"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Plane, Train, Bus, Cloud, Thermometer } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";

const travelInfo = [
  { type: "Airport", name: "Biju Patnaik International Airport (BBI)", distance: "15 km from venue", icon: <Plane className="w-5 h-5" />, options: ["Pre-paid taxi", "Ola/Uber ride-sharing", "Conference shuttle (conference days)"] },
  { type: "Railway", name: "Bhubaneswar Railway Station", distance: "12 km from venue", icon: <Train className="w-5 h-5" />, options: ["Auto-rickshaw", "City bus", "Ola/Uber"] },
  { type: "Bus", name: "Baramunda Bus Stand", distance: "8 km from venue", icon: <Bus className="w-5 h-5" />, options: ["Auto-rickshaw", "City bus", "Ola/Uber"] },
];

export function Venue() {
  return (
    <section
      id="venue"
      className="relative py-section overflow-hidden"
      aria-labelledby="venue-title"
    >
      <MeshGradient variant="section" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Location"
          badgeVariant="emerald"
          subtitle="Conference Venue"
          title="Birla Global"
          titleHighlight="University"
          description="Located in the vibrant city of Bhubaneswar — the Temple City of India — our state-of-the-art campus provides the perfect setting for academic excellence."
        />

        {/* Google Map Embed */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 rounded-2xl overflow-hidden border border-glass-border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5!2d85.7986!3d20.2434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7c0e3f1b5e9%3A0x1234567890abcdef!2sBirla%20Global%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Birla Global University Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Travel Information */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {travelInfo.map((info, index) => (
            <motion.div key={info.type} variants={staggerItem}>
              <GlassCard padding="lg" hover={false} animated={false} className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-white">
                      {info.type}
                    </h3>
                    <p className="text-xs text-white/40">{info.distance}</p>
                  </div>
                </div>
                <p className="text-sm text-white/60 mb-3">{info.name}</p>
                <div className="space-y-1.5">
                  {info.options.map((opt) => (
                    <div key={opt} className="flex items-center gap-2 text-xs text-white/40">
                      <div className="w-1 h-1 rounded-full bg-accent-blue" />
                      {opt}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Weather Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GlassCard padding="lg" hover={false} animated={false}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white">
                Weather in January
              </h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <Thermometer className="w-5 h-5 text-accent-blue mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-white">15°–28°C</div>
                <p className="text-xs text-white/40 mt-1">Temperature Range</p>
              </div>
              <div className="text-center">
                <Cloud className="w-5 h-5 text-accent-cyan mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-white">Pleasant</div>
                <p className="text-xs text-white/40 mt-1">Winter Season</p>
              </div>
              <div className="text-center">
                <MapPin className="w-5 h-5 text-accent-emerald mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-white">Ideal</div>
                <p className="text-xs text-white/40 mt-1">For Outdoor Activities</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

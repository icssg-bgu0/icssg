"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Cpu, Landmark, BookOpen, Lightbulb } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    title: "Smart Systems",
    subtitle: "AI Integration",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Governance",
    subtitle: "Sustainable Policies",
    icon: <Landmark className="w-5 h-5" />,
  },
  {
    title: "Global Network",
    subtitle: "International Scope",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "Publications",
    subtitle: "Springer Proceedings",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    title: "Innovations",
    subtitle: "Tech Showcases",
    icon: <Lightbulb className="w-5 h-5" />,
  },
];

export function HeroStats() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4"
    >
      {features.map((feature, index) => (
        <motion.div key={feature.title} variants={staggerItem}>
          <div className="glass-card p-5 text-center h-full flex flex-col items-center justify-center">
            <div className="flex justify-center mb-3 text-accent-blue">
              {feature.icon}
            </div>
            <div className="font-heading font-bold text-lg text-white mb-1">
              {feature.title}
            </div>
            <div className="text-xs text-white/50 font-heading uppercase tracking-wider">
              {feature.subtitle}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

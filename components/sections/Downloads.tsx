"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Image as ImageIcon, FileCode, Shield, Calendar, Download as DownloadIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem } from "@/lib/animations";
import downloadsData from "@/data/downloads.json";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-5 h-5" />,
  Image: <ImageIcon className="w-5 h-5" />,
  FileCode: <FileCode className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
};

const categoryColors: Record<string, string> = {
  brochure: "#4F8EF7",
  poster: "#7C4DFF",
  template: "#00E5FF",
  form: "#FF9800",
  schedule: "#00C853",
  certificate: "#FF5252",
};

export function Downloads() {
  return (
    <section
      id="downloads"
      className="relative py-section overflow-hidden"
      aria-labelledby="downloads-title"
    >
      <MeshGradient variant="section" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Resources"
          subtitle="Downloads"
          title="Conference"
          titleHighlight="Downloads"
          description="Download conference materials, paper templates, forms, and schedules."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {downloadsData.map((item, index) => (
            <motion.div key={item.id} variants={staggerItem}>
              <div className="glass-card p-5 h-full flex flex-col transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 group">
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${categoryColors[item.category]}15`,
                      color: categoryColors[item.category],
                    }}
                  >
                    {iconMap[item.icon] || <FileText className="w-5 h-5" />}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-semibold text-sm text-white group-hover:text-accent-blue transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-[10px]">
                        {item.fileType}
                      </Badge>
                      <span className="text-[10px] text-white/25">
                        {item.fileSize}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-white/40 leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>

                <Button variant="outline" size="sm" className="w-full text-xs">
                  <DownloadIcon className="w-3.5 h-3.5" />
                  Download
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Wrench, CheckCircle, Upload, UserPlus, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { useCountdown } from "@/hooks/useCountdown";
import { formatDate } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/animations";
import datesData from "@/data/dates.json";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  CheckCircle: <CheckCircle className="w-5 h-5" />,
  Upload: <Upload className="w-5 h-5" />,
  UserPlus: <UserPlus className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
};

function DateCountdown({ date }: { date: string }) {
  const { days, isExpired } = useCountdown(date);
  if (isExpired) return <Badge variant="destructive">Closed</Badge>;
  if (days <= 30)
    return (
      <Badge variant="warning">
        {days} day{days !== 1 ? "s" : ""} left
      </Badge>
    );
  return (
    <Badge variant="success">
      {days} day{days !== 1 ? "s" : ""} left
    </Badge>
  );
}

export function ImportantDates() {
  return (
    <section
      id="important-dates"
      className="relative py-section overflow-hidden"
      aria-labelledby="important-dates-title"
    >
      <MeshGradient variant="section" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Mark Your Calendar"
          badgeVariant="emerald"
          subtitle="Important Dates"
          title="Key"
          titleHighlight="Deadlines"
          description="Stay on track with all important submission and registration deadlines."
        />

        {/* Vertical Timeline */}
        <div className="max-w-2xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-accent-emerald" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8"
          >
            {datesData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="relative pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[14px] top-2 w-6 h-6 rounded-full bg-surface border-2 border-accent-blue flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-accent-blue" />
                </div>

                {/* Card */}
                <div className="glass-card p-5 transition-all hover:scale-[1.01] hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-accent-blue">
                          {iconMap[item.icon]}
                        </div>
                        <h3 className="font-heading font-semibold text-base text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-white/50 mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-heading font-medium text-accent-blue">
                          {formatDate(item.date)}
                        </span>
                        <DateCountdown date={item.date} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Megaphone, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { formatDate } from "@/lib/utils";
import newsData from "@/data/news.json";

const categoryColors: Record<string, string> = {
  announcement: "#4F8EF7",
  update: "#00E5FF",
  deadline: "#FF5252",
  general: "#7C4DFF",
};

export function News() {
  const featured = newsData.filter((n) => n.featured);
  const regular = newsData.filter((n) => !n.featured);

  return (
    <section
      id="news"
      className="relative py-section overflow-hidden"
      aria-labelledby="news-title"
    >
      <MeshGradient variant="section" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Latest Updates"
          badgeVariant="cyan"
          subtitle="News"
          title="News &"
          titleHighlight="Announcements"
          description="Stay up to date with the latest conference news, deadline reminders, and important announcements."
        />

        {/* Featured News */}
        {featured.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            {featured.map((news) => (
              <motion.div key={news.id} variants={staggerItem}>
                <div className="glass-card p-6 h-full animated-border transition-all hover:scale-[1.01]">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant="glass"
                      className="text-[10px]"
                      style={{ color: categoryColors[news.category] }}
                    >
                      <Megaphone className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                    <Badge variant="outline" className="text-[10px]">
                      {news.category}
                    </Badge>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white mb-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    {news.content}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <Calendar className="w-3 h-3" />
                    {formatDate(news.date)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Regular News Timeline */}
        <div className="max-w-2xl mx-auto space-y-4">
          {regular.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-5 flex items-start gap-4 hover:bg-glass-bg-hover transition-colors"
            >
              <div
                className="w-2 h-2 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: categoryColors[news.category] }}
              />
              <div className="flex-1">
                <h4 className="font-heading font-medium text-sm text-white mb-1">
                  {news.title}
                </h4>
                <p className="text-xs text-white/40 line-clamp-2">{news.content}</p>
                <div className="text-[10px] text-white/25 mt-2">
                  {formatDate(news.date)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

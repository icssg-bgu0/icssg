"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "default" | "cyan" | "purple" | "emerald";
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  size?: "default" | "large";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "default",
  title,
  titleHighlight,
  subtitle,
  description,
  align = "center",
  size = "default",
  className,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const maxWidth = align === "center" ? "max-w-3xl" : "max-w-2xl";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("mb-16", alignClass, maxWidth, className)}
    >
      {/* Badge */}
      {badge && (
        <motion.div variants={staggerItem} className="mb-4">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </motion.div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={staggerItem}
          className="text-accent-blue font-heading font-semibold text-sm uppercase tracking-[0.2em] mb-3"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Title */}
      <motion.h2
        variants={staggerItem}
        className={cn(
          "font-heading font-bold tracking-tight text-white",
          size === "large" ? "text-heading-1 lg:text-display" : "text-heading-2 lg:text-heading-1"
        )}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          variants={staggerItem}
          className="mt-5 text-body-lg text-white/50 leading-relaxed text-pretty"
        >
          {description}
        </motion.p>
      )}

      {/* Decorative Line */}
      <motion.div
        variants={fadeUp}
        className={cn(
          "mt-8 h-px w-20 bg-gradient-to-r from-accent-blue to-accent-purple",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}

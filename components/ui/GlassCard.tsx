"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "cyan" | "purple" | "emerald";
  padding?: "none" | "sm" | "md" | "lg";
  animated?: boolean;
  delay?: number;
}

const glowColors = {
  blue: "hover:shadow-glow",
  cyan: "hover:shadow-glow-cyan",
  purple: "hover:shadow-glow-purple",
  emerald: "hover:shadow-[0_0_20px_rgba(0,200,83,0.15)]",
};

const paddingSizes = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function GlassCard({
  children,
  className,
  hover = true,
  glow = "blue",
  padding = "md",
  animated = true,
  delay = 0,
}: GlassCardProps) {
  const Component = animated ? motion.div : "div";
  const animationProps = animated
    ? {
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-60px" },
        custom: delay,
      }
    : {};

  return (
    <Component
      className={cn(
        "glass-card",
        paddingSizes[padding],
        hover && [
          "cursor-pointer",
          "hover:scale-[1.01] hover:-translate-y-1",
          glowColors[glow],
        ],
        className
      )}
      {...animationProps}
    >
      {children}
    </Component>
  );
}

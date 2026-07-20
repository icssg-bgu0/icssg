"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
  icon?: React.ReactNode;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  duration = 2,
  className,
  icon,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("text-center", className)}
    >
      {icon && (
        <div className="flex justify-center mb-3 text-accent-blue">
          {icon}
        </div>
      )}
      <div className="font-heading font-bold text-4xl lg:text-5xl text-white tabular-nums">
        {prefix}
        {displayValue.toLocaleString("en-IN")}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-white/50 font-heading uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

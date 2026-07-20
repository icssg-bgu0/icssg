"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MeshGradientProps {
  className?: string;
  variant?: "default" | "hero" | "section" | "subtle";
  interactive?: boolean;
}

export function MeshGradient({
  className,
  variant = "default",
  interactive = false,
}: MeshGradientProps) {
  const variants = {
    default: (
      <>
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-accent-purple/8 rounded-full blur-[100px] animate-pulse-glow [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-[60%] w-[300px] h-[300px] bg-accent-cyan/5 rounded-full blur-[80px] animate-pulse-glow [animation-delay:3s]" />
      </>
    ),
    hero: (
      <>
        <div className="absolute top-[-20%] left-[10%] w-[800px] h-[800px] bg-accent-blue/15 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] bg-accent-purple/12 rounded-full blur-[130px] animate-pulse-glow [animation-delay:2s]" />
        <div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] bg-accent-cyan/8 rounded-full blur-[120px] animate-pulse-glow [animation-delay:4s]" />
        <div className="absolute bottom-[20%] left-[30%] w-[400px] h-[400px] bg-accent-emerald/5 rounded-full blur-[100px] animate-pulse-glow [animation-delay:1s]" />
      </>
    ),
    section: (
      <>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-blue/8 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-purple/6 rounded-full blur-[80px] animate-pulse-glow [animation-delay:2s]" />
      </>
    ),
    subtle: (
      <>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px]" />
      </>
    ),
  };

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      aria-hidden="true"
    >
      {variants[variant]}
    </div>
  );
}

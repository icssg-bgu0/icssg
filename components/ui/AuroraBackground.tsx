"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  showGrid?: boolean;
}

export function AuroraBackground({
  children,
  className,
  showGrid = true,
}: AuroraBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Aurora Rays */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0">
          {/* Ray 1 */}
          <div
            className="absolute top-0 left-[10%] w-[40%] h-[120%] opacity-[0.07]"
            style={{
              background:
                "linear-gradient(180deg, #4F8EF7 0%, transparent 70%)",
              transform: "rotate(-15deg)",
              filter: "blur(60px)",
              animation: "float 8s ease-in-out infinite",
            }}
          />
          {/* Ray 2 */}
          <div
            className="absolute top-0 right-[15%] w-[30%] h-[100%] opacity-[0.05]"
            style={{
              background:
                "linear-gradient(180deg, #7C4DFF 0%, transparent 60%)",
              transform: "rotate(10deg)",
              filter: "blur(50px)",
              animation: "float 10s ease-in-out infinite reverse",
            }}
          />
          {/* Ray 3 */}
          <div
            className="absolute top-[10%] left-[40%] w-[25%] h-[80%] opacity-[0.04]"
            style={{
              background:
                "linear-gradient(180deg, #00E5FF 0%, transparent 50%)",
              transform: "rotate(5deg)",
              filter: "blur(40px)",
              animation: "float 12s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Grid Overlay */}
      {showGrid && (
        <div
          className="absolute inset-0 pointer-events-none line-grid opacity-30"
          aria-hidden="true"
        />
      )}

      {/* Content */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeUnitProps {
  value: number;
  label: string;
  index: number;
}

function TimeUnit({ value, label, index }: TimeUnitProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        {/* Glass container */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/[0.03] border border-glass-border backdrop-blur-sm flex items-center justify-center">
          <span className="font-heading font-bold text-2xl sm:text-3xl text-white tabular-nums">
            {String(value).padStart(2, "0")}
          </span>
        </div>
        {/* Glow accent */}
        <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
      <span className="mt-2 text-[10px] sm:text-xs text-white/40 font-heading uppercase tracking-[0.15em]">
        {label}
      </span>
    </motion.div>
  );
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isExpired } =
    useCountdown(targetDate);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="group">
        <p className="text-xs text-transparent font-heading uppercase tracking-[0.2em] text-center mb-4">
          Loading
        </p>
        <div className="flex items-center gap-2 sm:gap-3 opacity-0">
          <div className="h-16 sm:h-20" />
        </div>
      </div>
    );
  }

  if (isExpired) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-emerald/10 border border-accent-emerald/30">
          <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          <span className="font-heading font-semibold text-accent-emerald text-sm">
            Conference is Live!
          </span>
        </div>
      </motion.div>
    );
  }

  const units = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <div className="group">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-xs text-white/30 font-heading uppercase tracking-[0.2em] text-center mb-4"
      >
        Conference Begins In
      </motion.p>
      <div className="flex items-center gap-2 sm:gap-3">
        {units.map((unit, index) => (
          <React.Fragment key={unit.label}>
            <TimeUnit
              value={unit.value}
              label={unit.label}
              index={index}
            />
            {index < units.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xl text-white/20 font-bold -mt-6"
              >
                :
              </motion.span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { getCountdown } from "@/lib/utils";

interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

/**
 * Custom hook for real-time countdown timer.
 * Updates every second until the target date is reached.
 */
export function useCountdown(targetDate: string): CountdownResult {
  const [countdown, setCountdown] = useState<CountdownResult>(() =>
    getCountdown(targetDate)
  );

  const updateCountdown = useCallback(() => {
    setCountdown(getCountdown(targetDate));
  }, [targetDate]);

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [updateCountdown]);

  return countdown;
}

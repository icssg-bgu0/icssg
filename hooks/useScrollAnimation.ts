"use client";

import { useEffect, useRef } from "react";
import { useInView, useAnimation, type AnimationControls, type UseInViewOptions } from "framer-motion";

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
  margin?: UseInViewOptions["margin"];
}

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement | null>;
  controls: AnimationControls;
  isInView: boolean;
}

/**
 * Custom hook for scroll-triggered animations using Framer Motion.
 * Returns a ref to attach to the element, animation controls, and inView status.
 */
export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn {
  const { once = true, margin = "-80px" } = options;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  return { ref, controls, isInView };
}

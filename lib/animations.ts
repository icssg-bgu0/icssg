import type { Variants, Transition } from "framer-motion";

/* ============================================
   Shared Framer Motion Animation Variants
   ============================================ */

// ---- Default Transition ----
export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
};

export const smoothTransition: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1],
};

export const slowTransition: Transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
};

// ---- Fade Variants ----
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: smoothTransition,
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

// ---- Scale Variants ----
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springTransition,
  },
};

// ---- Stagger Container ----
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// ---- Stagger Item ----
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

// ---- Slide Variants ----
export const slideInFromLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ...smoothTransition, duration: 0.8 },
  },
};

export const slideInFromRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ...smoothTransition, duration: 0.8 },
  },
};

export const slideInFromBottom: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ...smoothTransition, duration: 0.8 },
  },
};

// ---- Reveal Variants ----
export const revealFromCenter: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { ...smoothTransition, duration: 1 },
  },
};

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ---- Card Hover ----
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

export const cardHoverGlow = {
  rest: {
    boxShadow: "0 0 0 rgba(79, 142, 247, 0)",
  },
  hover: {
    boxShadow: "0 0 30px rgba(79, 142, 247, 0.15)",
  },
};

// ---- Blur Variants ----
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// ---- Rotate Variants ----
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -5, scale: 0.95 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: springTransition,
  },
};

// ---- Path Drawing ----
export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

// ---- Parallax helper ----
export function getParallaxY(scrollY: number, rate: number = 0.5): number {
  return scrollY * rate;
}

// ---- Viewport settings ----
export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};

export const viewportRepeat = {
  once: false,
  margin: "-80px" as const,
};

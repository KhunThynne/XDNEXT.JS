"use client";
import type { TargetAndTransition } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type PresetType =
  | "fade"
  | "slide-left"
  | "slide-right"
  | "slide-up"
  | "slide-down"
  | "zoom"
  | "none";

export interface MotionTransitionWrapperProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  animationKey?: string;
  preset?: PresetType;
  show?: boolean;
}

const presets: Record<
  PresetType,
  {
    initial: object;
    animate: object;
    exit: object;
  }
> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "slide-left": {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
  "slide-right": {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  },
  "slide-down": {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  },
  zoom: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  none: {
    initial: {},
    animate: {},
    exit: {},
  },
};

export function MotionTransition({
  children,
  className = "",
  duration = 0.3,
  animationKey,
  preset = "fade",
  show = true,
}: MotionTransitionWrapperProps) {
  const pathname = usePathname();
  const key = animationKey || pathname;

  const { initial, animate, exit } = presets[preset] || presets.fade;
  if (preset === "none") return children;
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key={key}
          initial={initial as TargetAndTransition}
          animate={animate as TargetAndTransition}
          exit={exit as TargetAndTransition}
          transition={{ duration }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

{
  /* <AnimatePresence mode="wait">
  {show && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      ...
    </motion.div>
  )}
</AnimatePresence> */
}

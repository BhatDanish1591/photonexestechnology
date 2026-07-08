"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CSSProperties, ReactNode } from "react";

type AnimationType = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleUp";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  style?: CSSProperties;
  className?: string;
}

const getInitialStyles = (animation: AnimationType): CSSProperties => {
  switch (animation) {
    case "fadeUp":    return { opacity: 0, transform: "translateY(40px)" };
    case "fadeIn":    return { opacity: 0 };
    case "fadeLeft":  return { opacity: 0, transform: "translateX(-40px)" };
    case "fadeRight": return { opacity: 0, transform: "translateX(40px)" };
    case "scaleUp":   return { opacity: 0, transform: "scale(0.92)" };
    default:          return { opacity: 0, transform: "translateY(40px)" };
  }
};

const getVisibleStyles = (animation: AnimationType): CSSProperties => {
  switch (animation) {
    case "fadeUp":
    case "fadeLeft":
    case "fadeRight":
    case "scaleUp":   return { opacity: 1, transform: "none" };
    case "fadeIn":    return { opacity: 1 };
    default:          return { opacity: 1, transform: "none" };
  }
};

export default function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 600,
  threshold = 0.15,
  style = {},
  className,
}: ScrollRevealProps) {
  // Bypassing scroll animations to keep content always visible
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
}

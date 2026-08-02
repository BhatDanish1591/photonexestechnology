"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // 0 = no parallax, 1 = full scroll speed
  direction?: "up" | "down";
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.2,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = direction === "up" ? [speed * 100, -speed * 100] : [-speed * 100, speed * 100];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

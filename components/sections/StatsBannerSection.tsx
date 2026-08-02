"use client";

import { GraduationCap, Rocket, Building2, Users, BookOpen, Award } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 1000, suffix: "+", label: "Students Trained", icon: GraduationCap },
  { value: 250, suffix: "+", label: "Projects Completed", icon: Rocket },
  { value: 100, suffix: "+", label: "Business Clients", icon: Building2 },
  { value: 50, suffix: "+", label: "Expert Trainers", icon: Users },
  { value: 15, suffix: "+", label: "Courses Offered", icon: BookOpen },
  { value: 5, suffix: "+", label: "Years of Excellence", icon: Award },
];

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { count } = useCountUp(stat.value, 2000);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 800 }}
      className="flex flex-col items-center text-center gap-4 group"
    >
      {/* Icon with 3D flip on hover */}
      <motion.div
        className="w-16 h-16 rounded-full flex items-center justify-center text-white"
        style={{
          background: "rgba(255,255,255,0.1)",
          border: "2px solid rgba(255,255,255,0.2)",
        }}
        whileHover={{
          rotateY: 180,
          background: "rgba(234,88,12,0.3)",
          borderColor: "rgba(234,88,12,0.6)",
          scale: 1.1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon size={24} strokeWidth={1.5} />
      </motion.div>

      <div>
        {/* Animated count-up number */}
        <motion.div
          className="text-white font-extrabold leading-none mb-1"
          style={{ fontSize: "2.5rem", fontFamily: "Inter, sans-serif" }}
        >
          {isInView ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {count}{stat.suffix}
            </motion.span>
          ) : (
            <span>0{stat.suffix}</span>
          )}
        </motion.div>

        {/* Label */}
        <motion.div
          className="text-blue-200 font-semibold uppercase tracking-wider text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {stat.label}
        </motion.div>

        {/* Micro-interaction: underline grows on view */}
        <motion.div
          className="mx-auto mt-2 h-0.5 bg-orange-400/60 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: "60%" } : {}}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}

export default function StatsBannerSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ background: "#1e3a8a" }}
    >
      {/* Animated background mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(234,88,12,0.2) 0%, transparent 70%)" }}
          animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

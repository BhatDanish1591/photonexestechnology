"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { useRef } from "react";

interface CustomHeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  nextSectionColor?: string; // Optional color for the curve below, default #ffffff
  badgeText?: string;
}

export default function CustomHeroSection({
  title,
  description,
  imageSrc,
  nextSectionColor = "#ffffff",
  badgeText = "Our Expertise",
}: CustomHeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // 3D Tilt on Mouse Move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), { stiffness: 200, damping: 35 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-8, 8]), { stiffness: 200, damping: 35 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  const words = title.trim().split(" ");
  const lastWord = words.length > 1 ? words.pop() : "";
  const firstPart = words.join(" ");

  return (
    <section 
      ref={sectionRef}
      className="pt-32 lg:pt-28 pb-10 lg:pb-12" 
      style={{ 
        position: "relative", 
        background: "transparent", 
        overflow: "hidden"
      }}
    >
      {/* Subtle grid background to match layout */}
      <motion.div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          y: bgY,
          backgroundImage: "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Content with elegant fadeUp entry */}
        <motion.div 
          className="lg:pr-8 text-left pt-2 lg:pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-bold text-xs tracking-wider uppercase mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            {badgeText}
          </div>

          <h1 className="font-extrabold text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.05] mb-6 tracking-tight">
            <span className="text-slate-900">{firstPart}</span>{" "}
            {lastWord && (
              <span className="bg-gradient-to-r from-[#2dd4bf] to-[#3b82f6] text-transparent bg-clip-text">
                {lastWord}
              </span>
            )}
          </h1>
        
          <p className="text-slate-600 text-[1.1rem] leading-[1.7] font-medium border-l-4 border-teal-400 pl-6 py-1 bg-gradient-to-r from-slate-50 to-transparent">
            {description}
          </p>
        </motion.div>

        {/* 3D Tilt Image with Parallax & Entry Reveal */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: 1000,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              y: imageY
            }}
            className="w-full max-w-[380px] aspect-square relative cursor-pointer"
          >
            <div className="w-full h-full relative" style={{ transform: "translateZ(30px)" }}>
              <Image 
                src={imageSrc} 
                alt={title}
                fill
                priority
                className="object-contain mix-blend-multiply"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Curve Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180 leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px]" style={{ fill: nextSectionColor }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center justify-center rounded-full p-2" style={{ background: nextSectionColor }}>
        <button 
          onClick={scrollToNext}
          className="w-[50px] h-[50px] bg-emerald-500 border-none rounded-full flex items-center justify-center text-white cursor-pointer shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] transition-transform duration-300 hover:translate-y-1"
          aria-label="Scroll down"
        >
          <ArrowDown size={28} strokeWidth={2.5} />
        </button>
      </div>

    </section>
  );
}

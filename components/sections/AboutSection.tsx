"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";

const sideImages = [
  "/about/team_puzzle.png",
  "/assets/stock_1784102776367_11.jpg",
  "/assets/stock_1784102776424_12.jpg",
  "/assets/stock_1784102776935_13.jpg"
];

export default function AboutSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % sideImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="pt-32 lg:pt-24 pb-32 lg:pb-40" 
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

      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Content with clean entrance animation */}
        <motion.div 
          className="lg:pr-8 text-left lg:-mt-16"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 font-bold text-sm tracking-wide mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            About Our Company
          </div>

          <h1 className="font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-8 tracking-tight">
            <span className="text-slate-900">Who We</span>{" "}
            <span className="bg-gradient-to-r from-[#2dd4bf] to-[#3b82f6] text-transparent bg-clip-text">
              Are?
            </span>
          </h1>
          
          <p className="text-slate-600 text-[1.15rem] leading-[1.8] font-medium border-l-4 border-teal-400 pl-6 py-1 bg-gradient-to-r from-slate-50 to-transparent">
            <strong className="text-slate-900 font-bold">Photonexes Technology</strong> is a growth-driven IT solutions provider, focusing on bringing digital transformations for businesses at every scale. We are first movers who believe in adding proficiency and innovation in every solution we offer. 
            <br/><br/>
            With over 5+ years of being an IT leader, we thrive to build solutions that bring <span className="text-teal-600 font-semibold">results and impact.</span>
          </p>
        </motion.div>

        {/* Right Side: Image Slideshow with 3D Tilt & Parallax */}
        <motion.div 
          className="relative flex justify-center lg:justify-end h-[400px] lg:h-[500px]"
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
              y: imageY,
              width: "100%",
              height: "100%"
            }}
            className="relative cursor-pointer"
          >
            {sideImages.map((src, idx) => (
              <Image 
                fill={true}  
                key={src}
                src={src} 
                alt={`About us visual ${idx + 1}`} 
                style={{ transform: "translateZ(25px)" }}
                className={`object-contain transition-all duration-1000 ease-in-out ${
                  idx === currentIdx ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                } ${src.includes("team_puzzle") ? "mix-blend-multiply" : "rounded-3xl shadow-2xl object-cover"}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Curve Shape Divider */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        transform: "rotate(180deg)"
      }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{
          position: "relative",
          display: "block",
          width: "calc(100% + 1.3px)",
          height: "80px",
          fill: "#ffffff" // Matches the light background of the next section (CoreValues)
        }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Scroll Down Button */}
      <div style={{
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff", // Match curve color to create cutout illusion
        borderRadius: "50%",
        padding: "8px" // Acts as the stroke/cutout
      }}>
        <button 
          onClick={scrollToNext}
          style={{
            width: "50px",
            height: "50px",
            background: "#10b981", // Vibrant green matching the design
            border: "none",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            cursor: "pointer",
            boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)",
            transition: "transform 0.3s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(4px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          aria-label="Scroll down"
        >
          <ArrowDown size={28} strokeWidth={2.5} />
        </button>
      </div>

    </section>
  );
}

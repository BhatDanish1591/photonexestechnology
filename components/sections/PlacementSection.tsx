"use client";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { useRef } from "react";

const features = [
  "Resume Building",
  "Mock Interviews",
  "Aptitude & Technical Training",
  "HR Interview Preparation",
  "Job Updates",
  "100% Placement Support"
];

export default function PlacementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  // 3D Tilt Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), { stiffness: 220, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-8, 8]), { stiffness: 220, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="placement"
      className="py-20 px-8 bg-white relative overflow-hidden border-t border-slate-100"
    >
      {/* Background ambient light */}
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          className="flex-1 min-w-[320px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-blue-600 text-xs font-bold tracking-[0.15em] uppercase mb-4">
            PLACEMENT ASSISTANCE
          </div>
          <h2 className="font-sans text-slate-900 text-4xl font-extrabold leading-tight mb-6">
            We Don&apos;t Just Train,<br/>We Help You Get Placed
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Our dedicated placement cell works tirelessly to connect you with top IT companies. We ensure you are fully prepared for the corporate world.
          </p>

          {/* Grid of features with hover reveals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                className="group relative bg-slate-50/70 backdrop-blur-md border border-slate-100 p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 relative z-10 shadow-sm group-hover:bg-blue-600 group-hover:text-white">
                  <CheckCircle2 size={18} strokeWidth={2.5} />
                </div>
                <span className="text-slate-700 text-[0.9rem] font-bold relative z-10 transition-colors duration-300 group-hover:text-blue-700">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-sm shadow-lg shadow-orange-600/30 transition-all duration-300 hover:-translate-y-0.5">
            View Placement Process
          </Link>
        </motion.div>

        {/* Right Side: Image with 3D Mouse Tilt & Parallax Scroll */}
        <motion.div 
          className="flex-1 w-full relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            ref={imageContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: 1000,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              y: imageY
            }}
            className="w-[90%] aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer bg-slate-50"
          >
            <div className="w-full h-full relative" style={{ transform: "translateZ(20px)" }}>
              <Image 
                src="/assets/stock_1784102780692_34.jpg" 
                alt="Happy Indian professional placed" 
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

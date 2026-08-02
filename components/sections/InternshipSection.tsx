"use client";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { useRef } from "react";

const features = [
  "Live Company Projects",
  "Team Collaboration",
  "Mentor Support",
  "Weekly Assessments",
  "Project Presentation",
  "Certificate & Experience Letter"
];

export default function InternshipSection() {
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
      id="internship"
      className="py-20 px-8 bg-[#fff7ed] relative overflow-hidden"
    >
      {/* Decorative blurred background circles */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-400/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          className="flex-1 min-w-[320px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[#ea580c] text-xs font-bold tracking-[0.15em] uppercase mb-4">
            INTERNSHIP PROGRAM
          </div>
          <h2 className="font-sans text-slate-900 text-4xl font-extrabold leading-tight mb-6">
            Gain Real-World Experience
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Work on live projects, learn from industry experts, and enhance your skills with our professional internship program.
          </p>

          <div className="flex flex-col gap-4 mb-10">
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-3"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <CheckCircle2 size={20} className="text-[#ea580c] shrink-0" strokeWidth={2.5} />
                <span className="text-slate-700 text-sm font-semibold">{feature}</span>
              </motion.div>
            ))}
          </div>

          <Link href="/internship" className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-sm shadow-lg shadow-orange-600/30 transition-all duration-300 hover:-translate-y-0.5">
            Apply for Internship
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
                src="/assets/stock_1784102780626_33.jpg" 
                alt="Indian students in IT internship" 
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

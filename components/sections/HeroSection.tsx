"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import TypewriterText from "@/components/smoothui/typewriter-text/index";
import MagneticButton from "@/components/smoothui/magnetic-button/index";

const heroImages = [
  "/assets/stock_1784102780359_29.jpg",
  "/assets/stock_1784102780407_30.jpg",
  "/assets/stock_1784102780472_31.jpg",
  "/assets/stock_1784102780539_32.jpg",
];

const headlines = [
  "Next-Gen IT Solutions.",
  "Digital Transformation.",
  "Innovation at Scale.",
];

// Stagger animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);

  // Parallax refs
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // 3D tilt on image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-8, 8]), { stiffness: 200, damping: 30 });

  const imageRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  // Image rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Headline rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-transparent pt-10"
    >
      {/* Parallax Grid Background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        style={{
          y: bgY,
          backgroundImage: "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating ambient orbs — Parallax */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]),
          background: "radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]),
          background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 py-16 relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">

        {/* Left — Entrance Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full mb-8">
              <motion.span
                className="w-2 h-2 rounded-full bg-blue-600"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-slate-700 text-sm font-bold tracking-widest uppercase">
                Innovative Software Solutions
              </span>
            </div>
          </motion.div>

          {/* Headline with TypewriterText */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            Empowering Your Business with{" "}
            <br className="hidden md:block" />
            <span className="text-orange-600">
              <TypewriterText key={headlineIndex} speed={40}>
                {headlines[headlineIndex]}
              </TypewriterText>
            </span>
          </motion.h1>

          {/* Description — Reveal */}
          <motion.p
            variants={itemVariants}
            className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            We design, develop, and deliver robust enterprise software and mobile
            applications that drive digital transformation and accelerate growth.
          </motion.p>

          {/* CTA Buttons — Magnetic + Micro-interactions */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12 w-full">
            <MagneticButton
              className="group bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-3 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-300 text-base h-auto"
              strength={0.4}
              onClick={() => (window.location.href = "/contact")}
            >
              Get a Free Quote
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </MagneticButton>

            <MagneticButton
              variant="outline"
              className="bg-white text-slate-900 border border-slate-300 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 text-base h-auto"
              strength={0.3}
              onClick={() => (window.location.href = "/services")}
            >
              Our Services
            </MagneticButton>
          </motion.div>

          {/* Trust badges — Staggered micro-reveals */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-8">
            {["Agile Methodology", "Enterprise Scale"].map((badge) => (
              <motion.div
                key={badge}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05, x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle2 size={22} className="text-blue-600" />
                </motion.div>
                <span className="text-slate-700 font-semibold">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — 3D Tilt Image + Parallax */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 3D Perspective wrapper */}
          <motion.div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: 1000,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-[500px]"
          >
            {/* Main image */}
            <motion.div
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-slate-100"
              style={{ y: imageY }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {heroImages.map((src, idx) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Corporate Tech Professionals ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority={true}
                  className={`object-cover transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                />
              ))}
              {/* Shine overlay on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
                  opacity: useTransform(mouseX, [-150, 150], [0.3, 0]),
                }}
              />
            </motion.div>

            {/* Floating card — 3D depth layer */}
            <motion.div
              className="absolute bottom-[10%] left-0 lg:-left-[10%] bg-white border border-slate-200 p-5 rounded-xl flex items-center gap-4 shadow-xl"
              style={{ translateZ: 40 }}
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: 1, duration: 0.6 },
                x: { delay: 1, duration: 0.6 },
                y: { delay: 1, duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-blue-600 font-extrabold text-xl pl-1">5+</span>
              </motion.div>
              <div>
                <div className="text-slate-900 font-extrabold text-lg">Years Experience</div>
                <div className="text-slate-500 text-sm">Delivering Excellence</div>
              </div>
            </motion.div>



            {/* Decorative blurred circle */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-orange-500/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

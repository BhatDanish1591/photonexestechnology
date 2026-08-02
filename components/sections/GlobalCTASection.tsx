"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import MagneticButton from "@/components/smoothui/magnetic-button/index";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/assets/stock_1784102779272_25.jpg",
    heading: "From Local to Global\nEmpowering Businesses\nDigitally",
  },
  {
    image: "/assets/stock_1784102779534_26.jpg",
    heading: "Driving Innovation\nScaling Your Vision\nEffortlessly",
  },
  {
    image: "/assets/stock_1784102779668_27.jpg",
    heading: "Future-Ready IT\nTransforming Operations\nSeamlessly",
  },
  {
    image: "/assets/stock_1784102780085_28.jpg",
    heading: "Accelerate Growth\nWith Cutting-Edge\nTechnology",
  },
];

export default function GlobalCTASection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax on background image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-slate-900"
      style={{ minHeight: "520px" }}
    >
      {/* Parallax background images */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: bgY, scale: 1.15 }}>
        {slides.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1500 ease-in-out ${idx === currentIndex ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,62,54,0.95) 0%, rgba(11,62,54,0.75) 45%, rgba(11,62,54,0) 100%)",
        }}
      />

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-8 lg:left-24 flex gap-2 z-20">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="h-1 rounded-full bg-white/40 cursor-pointer"
            animate={{ width: i === currentIndex ? 32 : 12, opacity: i === currentIndex ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-28 md:py-36">
        <div className="max-w-2xl">

          {/* Badge — micro reveal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full mb-8"
            style={{ background: "#2dd4bf" }}
          >
            <span className="text-white text-sm font-bold tracking-wider uppercase">
              IT Company Zirakpur
            </span>
          </motion.div>

          {/* Animated heading — clip-path reveal per line */}
          <div className="min-h-[200px] md:min-h-[220px]">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute ${idx === currentIndex ? "pointer-events-auto" : "pointer-events-none"}`}
              >
                {slide.heading.split("\n").map((line, lineIdx) => (
                  <motion.div
                    key={`${idx}-${lineIdx}`}
                    className="overflow-hidden"
                    initial={false}
                  >
                    <motion.h2
                      className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] block"
                      animate={
                        idx === currentIndex
                          ? { y: 0, opacity: 1, filter: "blur(0px)" }
                          : { y: 20, opacity: 0, filter: "blur(4px)" }
                      }
                      transition={{
                        duration: 0.6,
                        delay: lineIdx * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {line}
                    </motion.h2>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* CTA button */}
          <motion.div
            className="mt-14 relative z-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <MagneticButton
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-full shadow-2xl text-base h-auto hover:bg-orange-50 transition-colors duration-300"
              strength={0.35}
              onClick={() => (window.location.href = "/contact")}
            >
              Request A Quote
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

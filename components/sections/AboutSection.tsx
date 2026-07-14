"use client";
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const sideImages = [
  "/about/team_puzzle.png",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
];

export default function AboutSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

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
    <section id="about" className="pt-32 lg:pt-24 pb-32 lg:pb-40" style={{ 
      position: "relative", 
      background: "transparent",
      overflow: "hidden"
    }}>
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:pr-8 text-left lg:-mt-16">
          <ScrollReveal animation="fadeUp">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 font-bold text-sm tracking-wide mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              About Our Company
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeRight" delay={100}>
            <h1 className="font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-8 tracking-tight">
              <span className="text-slate-900">Who We</span>{" "}
              <span className="bg-gradient-to-r from-[#2dd4bf] to-[#3b82f6] text-transparent bg-clip-text">
                Are?
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={200}>
            <p className="text-slate-600 text-[1.15rem] leading-[1.8] font-medium border-l-4 border-teal-400 pl-6 py-1 bg-gradient-to-r from-slate-50 to-transparent">
              <strong className="text-slate-900 font-bold">Photonexes Technologies</strong> is a growth-driven IT solutions provider, focusing on bringing digital transformations for businesses at every scale. We are first movers who believe in adding proficiency and innovation in every solution we offer. 
              <br/><br/>
              With more than a decade of being an IT leader, we thrive to build solutions that bring <span className="text-teal-600 font-semibold">results and impact.</span>
            </p>
          </ScrollReveal>
        </div>

        {/* Right Side: Image Slideshow */}
        <div className="relative flex justify-center lg:justify-end h-[400px] lg:h-[500px]">
          {sideImages.map((src, idx) => (
            <img 
              key={src}
              src={src} 
              alt={`About us visual ${idx + 1}`} 
              className={`absolute top-1/2 -translate-y-1/2 w-full max-w-[500px] h-full max-h-[500px] object-contain transition-all duration-1000 ease-in-out ${
                idx === currentIdx ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              } ${src.includes("team_puzzle") ? "mix-blend-multiply" : "rounded-3xl shadow-2xl object-cover"}`}
            />
          ))}
        </div>
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

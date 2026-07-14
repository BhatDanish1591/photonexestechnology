"use client";
import { ArrowDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  const words = title.trim().split(" ");
  const lastWord = words.length > 1 ? words.pop() : "";
  const firstPart = words.join(" ");

  return (
    <section className="pt-32 lg:pt-28 pb-10 lg:pb-12" style={{ 
      position: "relative", 
      background: "transparent", 
      overflow: "hidden"
    }}>
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content */}
        <div className="lg:pr-8 text-left -mt-10 lg:-mt-24">

          <ScrollReveal animation="fadeRight" delay={100}>
            <h1 className="font-extrabold text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.05] mb-6 tracking-tight">
              <span className="text-slate-900">{firstPart}</span>{" "}
              {lastWord && (
                <span className="bg-gradient-to-r from-[#2dd4bf] to-[#3b82f6] text-transparent bg-clip-text">
                  {lastWord}
                </span>
              )}
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={200}>
            <p className="text-slate-600 text-[1.1rem] leading-[1.7] font-medium border-l-4 border-teal-400 pl-6 py-1 bg-gradient-to-r from-slate-50 to-transparent">
              {description}
            </p>
          </ScrollReveal>
        </div>

        {/* Image */}
        <div className="relative flex justify-center md:justify-end">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full max-w-[380px] h-auto object-contain mix-blend-multiply"
          />
        </div>
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

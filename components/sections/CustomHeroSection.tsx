"use client";
import { ArrowDown } from "lucide-react";

interface CustomHeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  nextSectionColor?: string; // Optional color for the curve below, default #ffffff
}

export default function CustomHeroSection({
  title,
  description,
  imageSrc,
  nextSectionColor = "#ffffff",
}: CustomHeroSectionProps) {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <section style={{ 
      position: "relative", 
      background: "#f2f6f5", 
      paddingTop: "10rem",
      paddingBottom: "5rem",
      overflow: "hidden"
    }}>
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-slate-900 leading-[1.15] mb-6">
            {title}
          </h1>
          <p className="text-slate-800 text-lg md:text-xl leading-[1.8] font-normal">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="relative flex justify-center md:justify-end">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full max-w-[500px] h-auto object-contain mix-blend-multiply"
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

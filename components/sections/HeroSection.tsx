"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-transparent pt-10"
    >
      {/* Light Corporate Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "center center",
        }}
      />

      <div className="max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 py-16 relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Text Content */}
        <div className="">
          
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-slate-700 text-sm font-bold tracking-widest uppercase">
              Innovative Software Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
            Empowering Your Business with <br className="hidden md:block" />
            <span className="text-orange-600">Next-Gen IT Solutions.</span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            We design, develop, and deliver robust enterprise software and mobile applications that drive digital transformation and accelerate growth.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 w-full">
            <Link
              href="/contact"
              className="group bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-3 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Get a Free Quote 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="bg-white text-slate-900 border border-slate-300 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-3 shadow-sm hover:bg-transparent hover:shadow-md transition-all duration-300 w-full sm:w-auto"
            >
              Our Services
            </Link>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={22} className="text-blue-600" />
              <span className="text-slate-700 font-semibold">Agile Methodology</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={22} className="text-blue-600" />
              <span className="text-slate-700 font-semibold">Enterprise Scale</span>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Corporate Imagery */}
        <div className="relative flex justify-center items-center">
          
          <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
            {heroImages.map((src, idx) => (
              <Image 
                key={src}
                src={src}
                alt={`Corporate Tech Professionals ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                priority={true}
                className={`object-cover transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>

          {/* Floating UI Elements */}
          <div className="absolute bottom-[10%] left-0 lg:-left-[10%] bg-white border border-slate-200 p-5 rounded-xl flex items-center gap-4 shadow-xl animate-[float_5s_ease-in-out_infinite]">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
              <span className="text-blue-600 font-extrabold text-xl pl-1">5+</span>
            </div>
            <div>
              <div className="text-slate-900 font-extrabold text-lg">Years Experience</div>
              <div className="text-slate-500 text-sm">Delivering Excellence</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

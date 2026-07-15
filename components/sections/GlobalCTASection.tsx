"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const slides = [
  {
    image: "/assets/stock_1784102779272_25.jpg",
    heading: (
      <>
        From Local to Global <br className="hidden md:block" />
        Empowering Businesses <br className="hidden md:block" />
        Digitally
      </>
    )
  },
  {
    image: "/assets/stock_1784102779534_26.jpg",
    heading: (
      <>
        Driving Innovation <br className="hidden md:block" />
        Scaling Your Vision <br className="hidden md:block" />
        Effortlessly
      </>
    )
  },
  {
    image: "/assets/stock_1784102779668_27.jpg",
    heading: (
      <>
        Future-Ready IT <br className="hidden md:block" />
        Transforming Operations <br className="hidden md:block" />
        Seamlessly
      </>
    )
  },
  {
    image: "/assets/stock_1784102780085_28.jpg",
    heading: (
      <>
        Accelerate Growth <br className="hidden md:block" />
        With Cutting-Edge <br className="hidden md:block" />
        Technology
      </>
    )
  }
];

export default function GlobalCTASection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-900" style={{ minHeight: "500px" }}>
      {/* Background Image Slideshow */}
      {slides.map((slide, idx) => (
        <div 
          key={slide.image}
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
      ))}
      
      {/* Gradient Overlay (Dark Green/Teal to Transparent) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: "linear-gradient(90deg, rgba(11, 62, 54, 0.95) 0%, rgba(11, 62, 54, 0.8) 40%, rgba(11, 62, 54, 0) 100%)"
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-24 md:py-32">
        <ScrollReveal animation="fadeRight">
          <div className="max-w-2xl relative min-h-[220px]">
            
            {/* Teal Pill Badge */}
            <div className="inline-block px-5 py-2 rounded-full mb-6 relative z-20" style={{ background: "#2dd4bf" }}>
              <span className="text-white text-sm font-bold tracking-wider uppercase">
                IT Company Zirakpur
              </span>
            </div>

            {/* Dynamic Headings with Fade Transition */}
            <div className="grid w-full">
              {slides.map((slide, idx) => (
                <h2 
                  key={idx}
                  className={`[grid-area:1/1] w-full text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] transition-all duration-1000 ease-in-out transform ${
                    idx === currentIndex 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  {slide.heading}
                </h2>
              ))}
            </div>

            {/* Button */}
            <div className="relative z-20 mt-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Request A Quote
              </Link>
            </div>
            
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { Smile } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function BestCompanySection() {
  return (
    <section className="pt-12 pb-20 lg:pt-16 lg:pb-32 relative overflow-hidden bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="max-w-2xl">
          <ScrollReveal animation="fadeRight">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.2] mb-8">
              <span className="text-[#2dd4bf]">We're the Best</span> IT
              <br />
              Company <span className="text-[#2dd4bf]">in Zirakpur</span>
            </h2>

            <p className="text-slate-800 text-lg leading-relaxed mb-6 font-medium">
              From websites to applications, along with the latest software technologies, we create all kinds of successful digital solutions tailored to business needs.
            </p>

            <p className="text-slate-600 text-[1.05rem] leading-[1.8] mb-10">
              Photonexes stands as the <span className="text-[#2dd4bf] font-bold">best IT company in Zirakpur</span>, offering a one-stop solution for every business—whether you are a startup, a growing enterprise, or an individual stepping into the online ecosystem. We deploy AI to automate simple tasks and build expert teams for complex requirements, ensuring scalable, high-value support. With a focus on innovation, efficiency, and quality, we deliver excellence that drives sustainable business growth.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2dd4bf] text-white font-bold rounded-full hover:bg-[#14b8a6] hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-500/30"
            >
              Let's Talk
            </Link>
          </ScrollReveal>
        </div>

        {/* Right Side: Image with Floating Badge */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <ScrollReveal animation="fadeLeft" className="relative w-full max-w-[650px]">
            
            {/* The Image (Large circle/rounded right side) */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-l-[150px] rounded-r-3xl shadow-2xl border-4 border-white z-10">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                alt="IT Training and Office in Zirakpur" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 bg-[#064e3b] rounded-2xl p-4 md:p-5 pr-8 md:pr-12 flex items-center gap-4 shadow-2xl z-20 animate-[float_4s_ease-in-out_infinite]">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#2dd4bf] flex items-center justify-center">
                <Smile className="text-[#2dd4bf]" size={28} />
              </div>
              <div>
                <div className="text-[#2dd4bf] text-2xl md:text-3xl font-black leading-none mb-1">
                  1299+
                </div>
                <div className="text-white text-sm md:text-base font-bold">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* Decorative Background Curves (Yellow accents) */}
            <svg 
              className="absolute -bottom-16 -left-16 w-64 h-64 text-yellow-400 opacity-60 -z-10" 
              viewBox="0 0 200 200" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M100 200 A100 100 0 0 1 0 100" />
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M120 200 A120 120 0 0 1 -20 100" />
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M140 200 A140 140 0 0 1 -40 100" />
            </svg>

          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

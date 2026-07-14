"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutCTASection() {
  return (
    <section className="py-16 md:py-20 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left: Heading */}
          <ScrollReveal animation="fadeRight">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#2dd4bf] leading-tight">
              Let’s Talk About Your <br />
              IT Needs!
            </h2>
          </ScrollReveal>

          {/* Right: Text and Button */}
          <ScrollReveal animation="fadeLeft" delay={100} className="flex flex-col items-start md:items-start md:pl-12 lg:pl-20">
            <p className="text-slate-800 text-[1rem] leading-relaxed font-medium mb-8 max-w-sm">
              Together, we can find the best managed IT support service for your business in Zirakpur, Punjab.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold transition-all duration-300 bg-[#eef2f6] text-[#2dd4bf] shadow-[6px_6px_14px_#d0d4d8,-6px_-6px_14px_#ffffff] hover:shadow-[inset_4px_4px_8px_#d0d4d8,inset_-4px_-4px_8px_#ffffff] hover:text-[#14b8a6]"
            >
              Contact Us
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </Link>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  );
}

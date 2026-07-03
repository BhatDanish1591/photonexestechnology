"use client";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Software Development",
  "IT Training & Internship",
  "Web & Mobile App Development",
  "Certification Programs",
  "Cloud, AI & Cybersecurity Solutions",
  "Placement Assistance",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image */}
        <div className="relative group">
          <div className="absolute top-5 -left-5 w-full h-full bg-slate-100 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" 
            alt="Indian students and professionals working at Photonexes" 
            className="w-full h-auto rounded-2xl relative z-10 shadow-[0_20px_40px_rgba(0,0,0,0.06)] object-cover aspect-[4/3] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-shadow duration-500"
          />
        </div>

        {/* Right Side: Content */}
        <div>
          <div className="text-orange-600 text-xs font-bold tracking-[0.1em] uppercase mb-4">
            ABOUT US
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.2] mb-6">
            Photonexes Technologies
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            We are a leading IT Software Company & Training Institute dedicated to delivering innovative software solutions and industry-focused training to students and professionals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-orange-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3.5 rounded-lg font-semibold shadow-md shadow-orange-600/20 hover:shadow-lg hover:shadow-orange-600/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Read More About Us
          </Link>
        </div>

      </div>
    </section>
  );
}

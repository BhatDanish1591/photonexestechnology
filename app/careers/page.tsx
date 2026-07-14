"use client";
import Link from "next/link";
import CustomHeroSection from "@/components/sections/CustomHeroSection";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";

const jobs = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Zirakpur, IN",
    description: "Join our core product team to build scalable enterprise applications using Next.js, Node.js, and PostgreSQL.",
  },
  {
    title: "Product Designer (UI/UX)",
    department: "Design",
    type: "Full-time",
    location: "Zirakpur, IN",
    description: "Shape the future of our digital products. Create beautiful, intuitive user experiences for global clients.",
  },
  {
    title: "Cloud Infrastructure Architect",
    department: "DevOps",
    type: "Contract",
    location: "Zirakpur, IN",
    description: "Design and implement highly available AWS/Azure infrastructure for our high-traffic enterprise solutions.",
  },
  {
    title: "Technical Project Manager",
    department: "Management",
    type: "Full-time",
    location: "Zirakpur, IN",
    description: "Lead cross-functional engineering teams to deliver complex software projects on time and within budget.",
  }
];

export default function CareersPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <CustomHeroSection 
        title="Join Our Team" 
        description="Build your career with a team of passionate innovators. We're always looking for talented individuals to join our mission."
        imageSrc="/heroes/hero_careers_1783476396392.png"
        nextSectionColor="#f8fafc"
      />
      <section className="pt-0 pb-12 -mt-8 bg-slate-50 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          
          {/* Editorial Left-Aligned Header */}
          <div className="max-w-4xl mb-12">
            <div className="w-20 h-1.5 bg-[#ea580c] mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Current <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#0284c7]">
                Openings
              </span>
            </h2>
            
            <div className="relative pl-6 md:pl-8 border-l-4 border-[#2dd4bf] py-4 bg-gradient-to-r from-teal-50/60 to-transparent rounded-r-2xl mt-6">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                Explore our current job opportunities and take the next big step in your career. We offer competitive benefits and a culture of continuous learning.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {jobs.map((job, i) => (
              <div 
                key={i} 
                className="group bg-white border border-slate-100 rounded-[24px] p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-teal-100 relative overflow-hidden"
              >
                {/* Decorative left border hover effect */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#2dd4bf] to-[#0284c7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-[0.7rem] font-bold uppercase tracking-wider border border-teal-100">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-[0.7rem] font-bold uppercase tracking-wider border border-orange-100">
                      {job.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{job.title}</h3>
                  
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed mb-6 max-w-3xl">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-500">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#ea580c]" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-[#2dd4bf]" />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-[#3b82f6]" />
                      {job.type}
                    </div>
                  </div>
                </div>
                
                <div className="shrink-0 mt-4 md:mt-0">
                  <Link href="/contact" className="block">
                    <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[#ea580c] hover:shadow-[0_8px_20px_-5px_rgba(234,88,12,0.4)] group/btn">
                      Apply Now
                      <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </main>
  );
}

"use client";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

export default function AboutDetailsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative subtle gradient background blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-28">
        
        {/* Row 1: Empowering Businesses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <ScrollReveal animation="fadeRight">
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 leading-[1.1] tracking-tight">
              We are empowering businesses <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#0ea5e9]">
                since 2021.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeLeft" delay={100}>
            <p className="text-slate-600 text-[1.1rem] leading-[1.85] font-medium border-l-4 border-[#2dd4bf] pl-6 py-2">
              We believe in collaboration, transparency, and continuous improvement. Every client is a partner, and we work closely with them at every stage of development — from concept to deployment and beyond. By leveraging the latest technologies, including <span className="font-bold text-slate-800">AI, machine learning, IoT,</span> and <span className="font-bold text-slate-800">blockchain</span>, we create solutions that are not only functional but truly future-proof.
            </p>
          </ScrollReveal>
        </div>

        {/* Row 2: Why Choose Us & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <ScrollReveal animation="fadeRight" className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
              Why <span className="text-[#2dd4bf]">Choose Us?</span>
            </h2>
            <p className="text-slate-600 text-[1.1rem] leading-[1.8] font-medium mb-10">
              With over 5+ years of experience serving businesses in India, Photonexes has become a trusted name in the software development industry. We offer a unique blend of technical expertise and local insight, helping India-based businesses thrive in a dynamic digital ecosystem.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {['Innovation Driven', 'Client Empowerment', 'Unmatched Trust', 'Dynamic Versatility'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle2 className="text-[#2dd4bf] shrink-0" size={24} strokeWidth={2.5} />
                  <span className="text-slate-800 font-bold text-[1.05rem]">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          
          <ScrollReveal animation="scaleUp" delay={100} className="w-full h-full order-1 lg:order-2">
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px] border-[6px] border-white ring-1 ring-slate-100">
              <img 
                src="/assets/stock_1784102776130_10.jpg" 
                alt="Why choose us - IT Professional in Server Room" 
                className="w-full h-full object-cover absolute inset-0 transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </ScrollReveal>
        </div>

        {/* Row 3: Partners & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <ScrollReveal animation="fadeUp" className="bg-slate-50 rounded-3xl p-10 md:p-12 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
              Our <span className="text-[#2dd4bf]">Trusted Partners</span>
            </h2>
            <p className="text-slate-600 text-[1.05rem] leading-[1.8] font-medium">
              We believe in the power of collaboration. By partnering with top technology providers, we ensure that our clients benefit from the latest tools, platforms, and innovations. Together, we create solutions that are not just effective but beautifully transformative.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={150} className="bg-[#2dd4bf] text-white rounded-3xl p-10 md:p-12 shadow-xl shadow-teal-500/20 hover:-translate-y-2 transition-transform duration-300">
            <h2 className="text-3xl font-extrabold tracking-tight mb-6">
              Our Vision
            </h2>
            <p className="text-teal-50 text-[1.05rem] leading-[1.8] font-medium">
              To inspire and empower businesses globally through bleeding-edge technology, driving unprecedented growth, and creating a lasting, sustainable impact on the digital landscape.
            </p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

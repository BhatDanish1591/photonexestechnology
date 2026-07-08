"use client";
import { Briefcase, MonitorPlay, Award, Code } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function WhyLearnWithUsSection() {
  const reasons = [
    { icon: <MonitorPlay size={32} />, title: "Live Projects", desc: "Work on real-world industrial projects, not just theory." },
    { icon: <Briefcase size={32} />, title: "100% Placement Support", desc: "Dedicated mock interviews and resume building sessions." },
    { icon: <Code size={32} />, title: "Industry Experts", desc: "Learn directly from senior developers working in top MNCs." },
    { icon: <Award size={32} />, title: "Valid Certification", desc: "Get an ISO-certified internship letter upon completion." }
  ];

  return (
    <section style={{ padding: "3rem 2rem 1rem", background: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        
        {/* Left Side: Content */}
        <ScrollReveal animation="fadeLeft" style={{ flex: "1 1 400px" }}>
        <div className="why-content" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ color: "#ea580c", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Why Choose Us
          </div>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.2 }}>
            Transform Your Career With Industry-Grade Training
          </h2>
          <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.6 }}>
            At Photonexes, we bridge the gap between academic learning and industry expectations. Our courses are designed by industry veterans to ensure you are job-ready from day one.
          </p>
        </div>
        </ScrollReveal>

        {/* Right Side: Grid */}
        <ScrollReveal animation="fadeRight" delay={150}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {reasons.map((r, i) => (
            <div 
              key={i} 
              className="group relative bg-white/70 backdrop-blur-3xl border border-white/60 p-8 rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.1)] hover:border-orange-200/60"
            >
              {/* Decorative Orb */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div 
                className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 shadow-sm transition-all duration-500 group-hover:bg-orange-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 relative z-10"
              >
                {r.icon}
              </div>
              <h3 className="text-[1.15rem] font-extrabold text-slate-900 mb-2 font-sans transition-colors duration-300 group-hover:text-orange-700 relative z-10">
                {r.title}
              </h3>
              <p className="text-slate-600 text-[0.95rem] leading-relaxed relative z-10">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

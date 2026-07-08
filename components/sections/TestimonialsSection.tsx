"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer at TCS",
    type: "Student",
    rating: 5,
    avatar: "👨‍💻",
    text: "Photonexes transformed my career! The MERN Stack course was incredibly hands-on. I got placed at TCS within 2 months of completing the program. The mentors are industry experts who genuinely care about student success.",
  },
  {
    name: "Priya Patel",
    role: "Full Stack Developer at Infosys",
    type: "Student",
    rating: 5,
    avatar: "👩‍💻",
    text: "The live projects during internship gave me real confidence in job interviews. The placement team was always supportive and helped me crack 3 company interviews. Highly recommend Photonexes to anyone serious about IT.",
  },
  {
    name: "Amit Kumar",
    role: "CEO, Startup Ventures Pvt Ltd",
    type: "Client",
    rating: 5,
    avatar: "👔",
    text: "Photonexes built our entire ERP system in just 4 months. The quality of code and attention to detail was exceptional. Their team understood our requirements perfectly and delivered beyond expectations.",
  },
  {
    name: "Sneha Reddy",
    role: "Data Scientist at Wipro",
    type: "Student",
    rating: 5,
    avatar: "👩‍🔬",
    text: "The AI & Data Science course here is simply outstanding. Real datasets, practical projects, and guidance from professionals who work in the field. My Data Science journey started at Photonexes!",
  },
  {
    name: "Vikram Singh",
    role: "CTO, HealthTech Solutions",
    type: "Client",
    rating: 5,
    avatar: "🧑‍💼",
    text: "We hired Photonexes to build our hospital management system. The team was professional, deadline-oriented, and delivered a robust, secure platform. We've since given them 3 more projects.",
  },
  {
    name: "Anjali Gupta",
    role: "Mobile App Developer at HCL",
    type: "Student",
    rating: 5,
    avatar: "👩‍🎓",
    text: "Completed Flutter & React Native courses here. The curriculum is industry-relevant and regularly updated. The code review sessions by seniors really polished my skills. Got placed in 3 weeks!",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? "#f59e0b" : "#334155", fontSize: "0.9rem" }}>★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="testimonials"
      style={{
        padding: "2rem 2rem", // Standardized padding
        background: "#09090b", // Deep enterprise black
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, opacity: 0.3 }} className="grid-bg" />

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ 
            color: "#ea580c", 
            fontSize: "0.75rem", 
            fontWeight: 700, 
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem"
          }}>
            TESTIMONIALS
          </div>
          <h2 style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "1rem"
          }}>
            What Our{" "}
            <span style={{ color: "#ea580c" }}>
              Students & Clients Say
            </span>
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
            Real stories from real people whose careers and businesses were transformed.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative p-10 md:p-12 rounded-3xl bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] mb-12 overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
          <div className="absolute top-6 right-8 text-8xl opacity-10 font-serif leading-none text-orange-500 select-none">&quot;</div>
          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="text-6xl shrink-0 drop-shadow-xl">{testimonials[activeIdx].avatar}</div>
            <div className="flex-1">
              <StarRating count={testimonials[activeIdx].rating} />
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed my-6 font-medium italic">
                &ldquo;{testimonials[activeIdx].text}&rdquo;
              </p>
              <div>
                <div className="font-sans font-extrabold text-white text-xl tracking-tight mb-1">{testimonials[activeIdx].name}</div>
                <div className="text-slate-400 font-medium">{testimonials[activeIdx].role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              onClick={() => setActiveIdx(idx)}
              className={`group relative flex flex-col p-6 md:p-8 rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                activeIdx === idx 
                  ? "bg-orange-500/10 border-orange-500/50 shadow-[0_20px_40px_-10px_rgba(234,88,12,0.15)] -translate-y-2" 
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl"
              } backdrop-blur-xl border`}
            >
              {activeIdx === idx && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-[40px] pointer-events-none" />
              )}
              
              <div className="flex justify-between items-center mb-5 relative z-10">
                <StarRating count={t.rating} />
                <span 
                  className="px-3 py-1 rounded-full text-[0.65rem] font-bold tracking-wider uppercase shadow-sm"
                  style={{ 
                    background: t.type === "Student" ? "rgba(59,130,246,0.15)" : "rgba(168,85,247,0.15)",
                    color: t.type === "Student" ? "#60a5fa" : "#c084fc",
                    border: `1px solid ${t.type === "Student" ? "rgba(59,130,246,0.3)" : "rgba(168,85,247,0.3)"}`
                  }}
                >
                  {t.type}
                </span>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10 transition-colors duration-300 group-hover:text-slate-300 flex-1">
                &ldquo;{t.text.length > 110 ? t.text.slice(0, 110) + '...' : t.text}&rdquo;
              </p>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto pt-5 border-t border-white/10">
                <span className="text-4xl drop-shadow-md transition-transform duration-300 group-hover:scale-110">{t.avatar}</span>
                <div>
                  <div className="font-sans font-extrabold text-white text-[0.95rem] tracking-tight">{t.name}</div>
                  <div className="text-slate-500 text-xs font-medium mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

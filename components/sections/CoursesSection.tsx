"use client";
import Link from "next/link";
import { FaReact, FaPython, FaAws } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { BrainCircuit, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const popularCourses = [
  { 
    name: "Full Stack Web\nDevelopment (MERN)", 
    desc: "Master MongoDB, Express, React, and Node.js. Build scalable web applications from scratch.",
    duration: "4 - 6 Months", 
    icon: <FaReact size={36} color="#2563eb" />, 
    color: "#eff6ff",
    border: "#93c5fd",
    gradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
  },
  { 
    name: "Python\nProgramming", 
    desc: "Learn core Python concepts, data structures, and algorithms.",
    duration: "3 - 4 Months", 
    icon: <FaPython size={36} color="#ea580c" />, 
    color: "#fff7ed",
    border: "#fb923c",
    gradient: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
  },
  { 
    name: "Flutter\nDevelopment", 
    desc: "Build beautiful native apps for iOS and Android.",
    duration: "3 - 4 Months", 
    icon: <SiFlutter size={36} color="#0284c7" />, 
    color: "#f0f9ff",
    border: "#38bdf8",
    gradient: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
  },
  { 
    name: "AWS Cloud\nPractitioner", 
    desc: "Master cloud infrastructure and AWS core services.",
    duration: "2 - 3 Months", 
    icon: <FaAws size={36} color="#d97706" />, 
    color: "#fffbeb",
    border: "#fbbf24",
    gradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
  },
  { 
    name: "Machine Learning", 
    desc: "Deep dive into AI algorithms with Python.",
    duration: "4 - 6 Months", 
    icon: <BrainCircuit size={36} color="#e11d48" strokeWidth={1.5} />, 
    color: "#fff1f2",
    border: "#fb7185",
    gradient: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
  },
];

export default function CoursesSection() {
  return (
    <section
      id="courses"
      style={{
        padding: "2rem 2rem",
        background: "#ffffff",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Split Header */}
        <ScrollReveal animation="fadeUp">
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "2rem",
          marginBottom: "4rem",
          borderBottom: "1px solid #e2e8f0",
          paddingBottom: "3rem"
        }}>
          {/* Left: Heading */}
          <div style={{ flex: "1 1 400px" }}>
            <div style={{
              width: "48px",
              height: "4px",
              background: "#ea580c",
              borderRadius: "2px",
              marginBottom: "1.5rem"
            }} />
            <h2 style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              margin: 0
            }}>
              Master In-Demand <br/>
              <span style={{ color: "#ea580c" }}>Tech Skills</span>
            </h2>
          </div>

          {/* Right: Description + CTA */}
          <div style={{ flex: "1 1 380px", maxWidth: "480px" }}>
            <p style={{
              color: "#475569",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              margin: "0 0 1.5rem 0"
            }}>
              Hands-on, industry-relevant training programs designed by experts to make you job-ready from day one.
            </p>
            <Link href="/courses" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#2563eb",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              borderBottom: "2px solid #2563eb",
              paddingBottom: "2px",
              transition: "color 0.2s, border-color 0.2s"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#ea580c";
              (e.currentTarget as HTMLElement).style.borderColor = "#ea580c";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#2563eb";
              (e.currentTarget as HTMLElement).style.borderColor = "#2563eb";
            }}
            >
              Explore All Programs →
            </Link>
          </div>
        </div>
        </ScrollReveal>

        {/* Uniform Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
          gap: "1.5rem",
        }}>
          {popularCourses.map((course, idx) => (
            <ScrollReveal key={idx} animation="fadeUp" delay={idx * 100} threshold={0.1}>
            <Link 
              href="/courses"
              className="group relative flex flex-col justify-between min-h-[260px] bg-white/70 backdrop-blur-3xl border border-white/60 rounded-3xl p-8 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] no-underline cursor-pointer"
              style={{
                borderBottom: `4px solid ${course.border}`
              }}
            >
              {/* Decorative Orb */}
              <div 
                className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"
                style={{ background: course.border }}
              />

              <div className="relative z-10">
                <div className="mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 origin-left drop-shadow-sm">
                  {course.icon}
                </div>
                <h3 className="text-slate-900 font-sans text-xl font-extrabold leading-tight whitespace-pre-line mb-3 transition-colors duration-300">
                  {course.name}
                </h3>
                <p className="text-slate-600 text-[0.95rem] leading-relaxed m-0">
                  {course.desc}
                </p>
              </div>
              
              <div className="mt-8 flex items-center justify-between relative z-10 pt-6 border-t border-slate-200/50">
                <div className="flex items-center gap-3 text-slate-700 text-[0.85rem] font-bold">
                  <div className="w-5 h-0.5 rounded-full" style={{ background: course.border }}></div>
                  {course.duration}
                </div>
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  style={{ background: course.border }}
                >
                  <ArrowRight size={14} strokeWidth={3} />
                </div>
              </div>
            </Link>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}

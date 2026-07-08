"use client";
import { useState } from "react";
import Link from "next/link";

const categories = ["All", "ERP", "CRM", "E-commerce", "Healthcare", "Education", "Mobile"];

const projects = [
  { title: "School ERP System", category: "Education", tech: ["React", "Node.js", "MongoDB"], icon: "🏫", desc: "Complete school management with admissions, fees, attendance, and academics." },
  { title: "College ERP Portal", category: "Education", tech: ["MERN", "Redux"], icon: "🎓", desc: "End-to-end college management platform for 5000+ students." },
  { title: "Hospital Management System", category: "Healthcare", tech: ["React", "Express", "MySQL"], icon: "🏥", desc: "Patient records, OPD management, billing, and lab reports system." },
  { title: "E-commerce Platform", category: "E-commerce", tech: ["Next.js", "Stripe", "MongoDB"], icon: "🛒", desc: "Multi-vendor marketplace with real-time inventory and payments." },
  { title: "Enterprise CRM", category: "CRM", tech: ["React", "Node.js", "PostgreSQL"], icon: "👥", desc: "360-degree customer management with sales pipeline and analytics." },
  { title: "Inventory Management ERP", category: "ERP", tech: ["Angular", "Node.js", "SQL"], icon: "📦", desc: "Real-time inventory tracking, PO management, and supplier portal." },
  { title: "Payroll System", category: "ERP", tech: ["React", "Node.js", "MySQL"], icon: "💰", desc: "Automated salary processing with PF, ESI, TDS calculations." },
  { title: "Attendance Management", category: "ERP", tech: ["React Native", "Node.js"], icon: "📊", desc: "Biometric and mobile-based attendance with geo-fencing." },
  { title: "Food Delivery App", category: "Mobile", tech: ["Flutter", "Firebase"], icon: "🍕", desc: "Multi-restaurant delivery app with real-time tracking." },
  { title: "Online Learning Platform", category: "E-commerce", tech: ["Next.js", "Stripe", "AWS"], icon: "📚", desc: "LMS with video streaming, quizzes, and certificate generation." },
  { title: "HR Management System", category: "ERP", tech: ["React", "Node.js", "MongoDB"], icon: "👔", desc: "Complete HRMS with recruitment, onboarding, appraisal." },
  { title: "Telemedicine App", category: "Healthcare", tech: ["React Native", "WebRTC"], icon: "🩺", desc: "Video consultation, prescriptions, and pharmacy integration." },
];

const techColors: Record<string, string> = {
  "React": "badge-blue",
  "Next.js": "badge-cyan",
  "Node.js": "badge-green",
  "MongoDB": "badge-green",
  "Angular": "badge-purple",
  "Flutter": "badge-cyan",
  "MySQL": "badge-orange",
  "PostgreSQL": "badge-blue",
  "MERN": "badge-purple",
  "Redux": "badge-purple",
  "Firebase": "badge-orange",
  "AWS": "badge-orange",
  "Stripe": "badge-blue",
  "Express": "badge-green",
  "SQL": "badge-blue",
  "WebRTC": "badge-cyan",
  "React Native": "badge-blue",
};

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      style={{
        padding: "7rem 2rem",
        background: "transparent",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-tag"><span>🚀</span> Our Portfolio</div>
          <h2 className="section-title">
            Projects That{" "}
            <span style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Drive Results
            </span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A showcase of enterprise software solutions delivered to clients across industries.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white/70 backdrop-blur-3xl border border-white/60 rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(124,58,237,0.25)] hover:border-purple-300/60 cursor-pointer"
            >
              {/* Project Banner */}
              <div
                className="h-[180px] w-full relative flex items-center justify-center text-[4.5rem] transition-transform duration-700 group-hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(124,58,237,0.15))",
                }}
              >
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 drop-shadow-xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">{project.icon}</span>
                <span
                  className="badge badge-purple absolute top-4 right-4 z-10 shadow-lg shadow-purple-500/20"
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 relative bg-white/50 backdrop-blur-xl border-t border-white/60 flex flex-col h-full z-20">
                <h3 className="font-sans font-extrabold text-slate-900 mb-2 text-lg transition-colors duration-300 group-hover:text-purple-700">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className={`badge ${techColors[t] || "badge-blue"} shadow-sm bg-white/80 backdrop-blur-sm border border-white/50`} style={{ fontSize: "0.7rem", padding: "0.25rem 0.6rem" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/portfolio" className="btn-outline">
            <span>View Full Portfolio</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

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
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((project) => (
            <div
              key={project.title}
              style={{
                borderRadius: "20px",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.35)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 25px 50px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Project Banner */}
              <div
                style={{
                  height: "160px",
                  background: "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(124,58,237,0.2))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem",
                  position: "relative",
                }}
              >
                {project.icon}
                <span
                  className="badge badge-purple"
                  style={{ position: "absolute", top: "1rem", right: "1rem" }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem", fontSize: "1rem" }}>
                  {project.title}
                </h3>
                <p style={{ color: "#64748b", fontSize: "0.825rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {project.desc}
                </p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {project.tech.map((t) => (
                    <span key={t} className={`badge ${techColors[t] || "badge-blue"}`} style={{ fontSize: "0.68rem" }}>{t}</span>
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

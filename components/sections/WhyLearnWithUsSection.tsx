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
    <section style={{ padding: "6rem 2rem", background: "#ffffff" }}>
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
            <div key={i} style={{
              background: "#f8fafc", padding: "2rem", borderRadius: "12px",
              border: "1px solid rgba(0,0,0,0.03)", transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}
            >
              <div style={{ color: "#ea580c", marginBottom: "1rem" }}>{r.icon}</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>{r.title}</h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.5 }}>{r.desc}</p>
            </div>
          ))}
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

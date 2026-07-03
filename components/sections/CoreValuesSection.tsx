"use client";
import { Lightbulb, Shield, Target, Users } from "lucide-react";

const values = [
  {
    icon: <Lightbulb size={32} />,
    title: "Innovation First",
    description: "We constantly explore cutting-edge technologies to build scalable, future-proof solutions for our clients."
  },
  {
    icon: <Shield size={32} />,
    title: "Uncompromising Quality",
    description: "From code architecture to UX design, we maintain the highest standards of quality and security."
  },
  {
    icon: <Target size={32} />,
    title: "Result-Oriented",
    description: "We don't just write code; we solve complex business problems and deliver measurable ROI."
  },
  {
    icon: <Users size={32} />,
    title: "Empowering People",
    description: "Through our training programs, we empower the next generation of developers to build successful careers."
  }
];

export default function CoreValuesSection() {
  return (
    <section style={{ padding: "6rem 2rem", background: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ 
            color: "#ea580c", 
            fontSize: "0.8rem", 
            fontWeight: 700, 
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.5rem"
          }}>
            Our Philosophy
          </div>
          <h2 style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#0f172a"
          }}>
            Core Values That Drive Us
          </h2>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "2rem" 
        }}>
          {values.map((v, i) => (
            <div key={i} style={{
              background: "#f8fafc",
              padding: "2.5rem 2rem",
              borderRadius: "16px",
              border: "1px solid rgba(0,0,0,0.03)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.05)";
              (e.currentTarget as HTMLElement).style.background = "#ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.background = "#f8fafc";
            }}
            >
              <div style={{
                width: "60px",
                height: "60px",
                background: "#ffedd5",
                color: "#ea580c",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem"
              }}>
                {v.icon}
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0f172a", marginBottom: "1rem" }}>
                {v.title}
              </h3>
              <p style={{ color: "#475569", lineHeight: 1.6, fontSize: "0.95rem" }}>
                {v.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

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
        padding: "8rem 2rem", // Standardized padding
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
        <div
          style={{
            padding: "3rem",
            borderRadius: "24px",
            background: "#18181b", // zinc-900 instead of white
            border: "1px solid rgba(255,255,255,0.1)",
            marginBottom: "2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "1.5rem", right: "2rem", fontSize: "6rem", opacity: 0.08, fontFamily: "Georgia, serif", lineHeight: 1, color: "#ea580c" }}>"</div>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
            <div style={{ fontSize: "3.5rem", flexShrink: 0 }}>{testimonials[activeIdx].avatar}</div>
            <div>
              <StarRating count={testimonials[activeIdx].rating} />
              <p style={{ color: "#d4d4d8", fontSize: "1.05rem", lineHeight: 1.8, margin: "1rem 0", fontStyle: "italic" }}>
                &ldquo;{testimonials[activeIdx].text}&rdquo;
              </p>
              <div>
                <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#ffffff", fontSize: "1rem" }}>{testimonials[activeIdx].name}</div>
                <div style={{ color: "#a1a1aa", fontSize: "0.85rem" }}>{testimonials[activeIdx].role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              onClick={() => setActiveIdx(idx)}
              style={{
                cursor: "pointer",
                padding: "1.5rem",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.05)",
                borderColor: activeIdx === idx ? "rgba(234, 88, 12, 0.5)" : "rgba(255,255,255,0.05)",
                background: activeIdx === idx ? "rgba(234, 88, 12, 0.08)" : "#18181b",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                <StarRating count={t.rating} />
                <span style={{ 
                  background: t.type === "Student" ? "rgba(59, 130, 246, 0.15)" : "rgba(168, 85, 247, 0.15)",
                  color: t.type === "Student" ? "#60a5fa" : "#c084fc",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "50px",
                  fontSize: "0.7rem",
                  fontWeight: 600
                }}>
                  {t.type}
                </span>
              </div>
              <p style={{ color: "#a1a1aa", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                &ldquo;{t.text.slice(0, 100)}...&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "1.8rem" }}>{t.avatar}</span>
                <div>
                  <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#ffffff", fontSize: "0.875rem" }}>{t.name}</div>
                  <div style={{ color: "#71717a", fontSize: "0.75rem" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

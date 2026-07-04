"use client";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Live Company Projects",
  "Team Collaboration",
  "Mentor Support",
  "Weekly Assessments",
  "Project Presentation",
  "Certificate & Experience Letter"
];

export default function InternshipSection() {
  return (
    <section
      id="internship"
      style={{
        padding: "8rem 2rem", // Standardized spacing
        background: "#fff7ed", 
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
        
        {/* Left Side: Content */}
        <div style={{ flex: "1 1 500px" }}>
          <div style={{ 
            color: "#ea580c", 
            fontSize: "0.75rem", 
            fontWeight: 700, 
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem"
          }}>
            INTERNSHIP PROGRAM
          </div>
          <h2 style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#0f172a",
            lineHeight: 1.2,
            marginBottom: "1.5rem"
          }}>
            Gain Real-World Experience
          </h2>
          <p style={{
            color: "#475569",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            marginBottom: "2rem"
          }}>
            Work on live projects, learn from experts and enhance your skills with our internship program.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
            {features.map((feature, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <CheckCircle2 size={20} color="#ea580c" strokeWidth={2.5} />
                <span style={{ color: "#334155", fontSize: "0.9rem", fontWeight: 600 }}>{feature}</span>
              </div>
            ))}
          </div>

          <Link href="/internship" style={{
            background: "#ea580c",
            color: "#ffffff",
            padding: "0.9rem 2.5rem", // Standardized button padding
            borderRadius: "6px",
            fontSize: "0.95rem",
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Apply for Internship
          </Link>
        </div>

        {/* Right Side: Image */}
        <div style={{ flex: "1 1 500px", position: "relative", display: "flex", justifyContent: "flex-end" }}>
           <img loading="eager" fetchPriority="high" 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
            alt="Indian students in IT internship" 
            style={{ 
              width: "90%", 
              height: "auto", 
              borderRadius: "16px", 
              boxShadow: "0 20px 40px rgba(0,0,0,0.06)", // Softened shadow
              objectFit: "cover",
              aspectRatio: "4/3"
            }} 
          />
        </div>

      </div>
    </section>
  );
}

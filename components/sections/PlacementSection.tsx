"use client";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Resume Building",
  "Mock Interviews",
  "Aptitude & Technical Training",
  "HR Interview Preparation",
  "Job Updates",
  "100% Placement Support"
];

export default function PlacementSection() {
  return (
    <section
      id="placement"
      style={{
        padding: "8rem 2rem", // Standardized spacing
        background: "#ffffff", 
        borderTop: "1px solid #e2e8f0"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
        
        {/* Left Side: Content */}
        <div style={{ flex: "1 1 500px" }}>
          <div style={{ 
            color: "#2563eb", 
            fontSize: "0.85rem", 
            fontWeight: 700, 
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem"
          }}>
            PLACEMENT ASSISTANCE
          </div>
          <h2 style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "2.5rem",
            fontWeight: 800,
            color: "#0f172a",
            lineHeight: 1.2,
            marginBottom: "1.5rem"
          }}>
            We Don&apos;t Just Train,<br/>We Help You Get Placed
          </h2>
          <p style={{
            color: "#475569",
            fontSize: "1rem",
            lineHeight: 1.7,
            marginBottom: "2rem"
          }}>
            Our dedicated placement cell works tirelessly to connect you with top IT companies. We ensure you are fully prepared for the corporate world.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
            {features.map((feature, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <CheckCircle2 size={20} color="#2563eb" strokeWidth={2.5} />
                <span style={{ color: "#334155", fontSize: "0.95rem", fontWeight: 600 }}>{feature}</span>
              </div>
            ))}
          </div>

          <Link href="/placement" style={{
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
            transition: "background 0.2s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#c2410c")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#ea580c")}
          >
            View Placement Process
          </Link>
        </div>

        {/* Right Side: Image */}
        <div style={{ flex: "1 1 500px", position: "relative", display: "flex", justifyContent: "flex-end" }}>
           <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
            alt="Happy Indian professional placed" 
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

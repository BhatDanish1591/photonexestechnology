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
        padding: "2rem 2rem", // Standardized spacing
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="group relative bg-white/70 backdrop-blur-3xl border border-white/60 p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 relative z-10 shadow-sm group-hover:bg-blue-600 group-hover:text-white">
                  <CheckCircle2 size={18} strokeWidth={2.5} />
                </div>
                <span className="text-slate-700 text-[0.9rem] font-extrabold relative z-10 transition-colors duration-300 group-hover:text-blue-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <Link href="/contact" style={{
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
           <img loading="eager" fetchPriority="high" 
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

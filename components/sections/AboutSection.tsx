"use client";
import { ArrowDown } from "lucide-react";

export default function AboutSection() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <section id="about" style={{ 
      position: "relative", 
      background: "#f2f6f5", // Matches the solid color of the generated image background
      paddingTop: "10rem",
      paddingBottom: "6rem",
      overflow: "hidden"
    }}>
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:pr-8">
          <h1 style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(3rem, 5vw, 4.5rem)",
            fontWeight: 800,
            color: "#111827",
            lineHeight: 1.1,
            marginBottom: "2rem"
          }}>
            Who We Are?
          </h1>
          
          <p style={{ 
            color: "#111827", 
            fontSize: "1.1rem", 
            lineHeight: 1.8,
            fontWeight: 400
          }}>
            Photonexes Technologies is a growth-driven IT solutions provider, focusing on bringing digital transformations for businesses at every scale. We are first movers who believe in adding proficiency and innovation in every solution we offer. With more than a decade of being an IT leader, we thrive to build solutions that bring results and impact.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="relative flex justify-center lg:justify-end">
          <img 
            src="/about/team_puzzle.png" 
            alt="Team collaborating on puzzle pieces" 
            className="w-full max-w-[500px] h-auto object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Bottom Curve Shape Divider */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        transform: "rotate(180deg)"
      }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{
          position: "relative",
          display: "block",
          width: "calc(100% + 1.3px)",
          height: "80px",
          fill: "#ffffff" // Matches the light background of the next section (CoreValues)
        }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Scroll Down Button */}
      <div style={{
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff", // Match curve color to create cutout illusion
        borderRadius: "50%",
        padding: "8px" // Acts as the stroke/cutout
      }}>
        <button 
          onClick={scrollToNext}
          style={{
            width: "50px",
            height: "50px",
            background: "#10b981", // Vibrant green matching the design
            border: "none",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            cursor: "pointer",
            boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)",
            transition: "transform 0.3s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(4px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          aria-label="Scroll down"
        >
          <ArrowDown size={28} strokeWidth={2.5} />
        </button>
      </div>

    </section>
  );
}

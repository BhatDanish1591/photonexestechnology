"use client";
import React from "react";

const clients = [
  "Microsoft", "Google", "Amazon", "IBM", "Oracle",
  "Meta", "Apple", "Cisco", "Intel", "Adobe"
];

export default function ClientsSection() {
  return (
    <section 
      style={{
        padding: "4rem 0",
        background: "#ffffff",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
        overflow: "hidden"
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p style={{
          color: "#64748b",
          fontSize: "0.95rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase"
        }}>
          Trusted by Innovative Companies Worldwide
        </p>
      </div>

      <div style={{
        display: "flex",
        width: "200%",
        animation: "scroll 20s linear infinite",
      }}>
        <div style={{ display: "flex", width: "50%", justifyContent: "space-around", alignItems: "center" }}>
          {clients.map((client, idx) => (
            <div 
              key={idx}
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#94a3b8",
                fontFamily: "Inter, sans-serif",
                transition: "color 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#0f172a"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#94a3b8"}
            >
              {client}
            </div>
          ))}
        </div>
        
        {/* Duplicate for infinite scroll */}
        <div style={{ display: "flex", width: "50%", justifyContent: "space-around", alignItems: "center" }}>
          {clients.map((client, idx) => (
            <div 
              key={`dup-${idx}`}
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#94a3b8",
                fontFamily: "Inter, sans-serif",
                transition: "color 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#0f172a"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#94a3b8"}
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

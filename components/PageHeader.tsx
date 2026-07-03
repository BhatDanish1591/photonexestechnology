"use client";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  badge?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb, badge }: PageHeaderProps) {
  return (
    <section
      style={{
        background: "#f8fafc",
        position: "relative",
        overflow: "hidden",
        paddingTop: "7rem",
        paddingBottom: "4rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      {/* Grid background — same as home hero */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 0,
          opacity: 0.6, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "center center",
        }}
      />

      {/* Subtle orange glow — bottom right */}
      <div style={{
        position: "absolute", bottom: "-80px", right: "-80px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "rgba(234, 88, 12, 0.06)",
        filter: "blur(80px)", pointerEvents: "none", zIndex: 0
      }} />
      {/* Subtle blue glow — top left */}
      <div style={{
        position: "absolute", top: "-60px", left: "-60px",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "rgba(37, 99, 235, 0.06)",
        filter: "blur(60px)", pointerEvents: "none", zIndex: 0
      }} />

      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        position: "relative", zIndex: 1,
      }}>


        {/* Badge */}
        {badge && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "#fff7ed",
            border: "1px solid #fed7aa",
            color: "#ea580c",
            padding: "0.3rem 0.9rem",
            borderRadius: "50px",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#ea580c", display: "inline-block",
              animation: "pulse 2s infinite"
            }} />
            {badge}
          </div>
        )}

        {/* Title */}
        <h1 style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
          fontWeight: 900,
          color: "#0f172a",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          marginBottom: subtitle ? "1.25rem" : "0",
          maxWidth: "800px"
        }}>
          {/* Highlight last word in orange like home page */}
          {title.split(" ").length > 1 ? (
            <>
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span style={{ color: "#ea580c" }}>
                {title.split(" ").slice(-1)[0]}
              </span>
            </>
          ) : (
            title
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p style={{
            color: "#475569",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            maxWidth: "580px",
            margin: "0",
            fontWeight: 400,
          }}>
            {subtitle}
          </p>
        )}

        {/* Bottom accent — same orange bar as home */}
        <div style={{
          marginTop: "2.5rem",
          display: "flex", alignItems: "center", gap: "6px"
        }}>
          <div style={{
            width: "44px", height: "4px",
            background: "#ea580c",
            borderRadius: "2px"
          }} />
          <div style={{
            width: "14px", height: "4px",
            background: "#fdba74",
            borderRadius: "2px"
          }} />
          <div style={{
            width: "6px", height: "4px",
            background: "#fed7aa",
            borderRadius: "2px"
          }} />
        </div>

      </div>
    </section>
  );
}

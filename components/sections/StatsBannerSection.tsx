"use client";

import { GraduationCap, Rocket, Building2, Users, BookOpen, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "1000+", label: "Students Trained", icon: <GraduationCap size={24} strokeWidth={1.5} /> },
  { value: "250+", label: "Projects Completed", icon: <Rocket size={24} strokeWidth={1.5} /> },
  { value: "100+", label: "Business Clients", icon: <Building2 size={24} strokeWidth={1.5} /> },
  { value: "50+", label: "Expert Trainers", icon: <Users size={24} strokeWidth={1.5} /> },
  { value: "15+", label: "Courses Offered", icon: <BookOpen size={24} strokeWidth={1.5} /> },
  { value: "5+", label: "Years of Excellence", icon: <Award size={24} strokeWidth={1.5} /> },
];

export default function StatsBannerSection() {
  return (
    <section
      style={{
        padding: "5rem 2rem",
        background: "#1e3a8a", // Corporate Deep Blue
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "3rem", 
        }}>
          {stats.map((stat, i) => (
            <ScrollReveal key={i} animation="fadeUp" delay={i * 100} threshold={0.1}>
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              textAlign: "center",
              gap: "1rem" 
            }}>
              <div style={{ 
                width: "64px", 
                height: "64px", 
                borderRadius: "50%", 
                background: "rgba(255, 255, 255, 0.1)", 
                border: "2px solid rgba(255, 255, 255, 0.2)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: "#ffffff",
              }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ 
                  color: "#ffffff", 
                  fontSize: "2.5rem", 
                  fontWeight: 800, 
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.1,
                  marginBottom: "0.25rem"
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  color: "#bfdbfe", 
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  {stat.label}
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

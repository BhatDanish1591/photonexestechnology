"use client";
import Link from "next/link";
import { Stethoscope, ShoppingBag, Truck, Utensils, GraduationCap, Smartphone, Landmark, Factory, Home, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const industries = [
  { 
    name: "Healthcare", 
    icon: <Stethoscope size={36} strokeWidth={1.5} />, 
    desc: "We build HIPAA-compliant patient management systems, telemedicine platforms, and advanced Electronic Health Records (EHR) software that streamline clinical workflows and improve patient care outcomes.",
    color: "#eff6ff",
    iconColor: "#2563eb",
    features: ["Telemedicine", "EHR Systems", "Hospital ERP"]
  },
  { 
    name: "E-Commerce", 
    icon: <ShoppingBag size={36} strokeWidth={1.5} />, 
    desc: "Develop scalable online marketplaces, custom storefronts, and secure payment integrations that deliver seamless shopping experiences and drive revenue growth across all platforms.",
    color: "#fff7ed",
    iconColor: "#ea580c",
    features: ["Custom Stores", "Payments", "Inventory"]
  },
  { 
    name: "Logistics", 
    icon: <Truck size={36} strokeWidth={1.5} />, 
    desc: "Optimize your supply chain with real-time fleet tracking, intelligent warehouse management systems, and route optimization algorithms that reduce costs and improve delivery times.",
    color: "#f0fdf4",
    iconColor: "#16a34a",
    features: ["Fleet Tracking", "Warehousing", "Routing"]
  },
  { 
    name: "Food & Bev", 
    icon: <Utensils size={36} strokeWidth={1.5} />, 
    desc: "Transform your culinary business with custom Point of Sale (POS) systems, on-demand food delivery applications, and smart table reservation platforms.",
    color: "#fefce8",
    iconColor: "#ca8a04",
    features: ["Delivery Apps", "Smart POS", "Reservations"]
  },
  { 
    name: "Education", 
    icon: <GraduationCap size={36} strokeWidth={1.5} />, 
    desc: "Empower learning through robust Learning Management Systems (LMS), interactive e-learning portals, and comprehensive student administration systems.",
    color: "#faf5ff",
    iconColor: "#9333ea",
    features: ["LMS Platforms", "E-Learning", "Portals"]
  },
  { 
    name: "FinTech", 
    icon: <Landmark size={36} strokeWidth={1.5} />, 
    desc: "Secure, high-performance financial software including mobile banking apps, trading platforms, and blockchain-based smart contracts tailored for the modern financial sector.",
    color: "#f0f9ff",
    iconColor: "#0284c7",
    features: ["Banking Apps", "Trading", "Crypto"]
  },
  { 
    name: "Manufacturing", 
    icon: <Factory size={36} strokeWidth={1.5} />, 
    desc: "Digitize your production lines with IoT integration, predictive maintenance software, and comprehensive ERP systems that bring Industry 4.0 directly to your factory floor.",
    color: "#fdf4ff",
    iconColor: "#c026d3",
    features: ["IoT", "ERP Systems", "Analytics"]
  },
  { 
    name: "Real Estate", 
    icon: <Home size={36} strokeWidth={1.5} />, 
    desc: "Modernize property management with virtual tour integrations, smart CRM systems for realtors, and tenant portals that simplify leasing and facility management.",
    color: "#ecfdf5",
    iconColor: "#059669",
    features: ["Property Portals", "CRMs", "Virtual Tours"]
  }
];

export default function IndustriesSection() {
  return (
    <section style={{ padding: "3rem 2rem", background: "#ffffff" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header */}
        <ScrollReveal animation="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "5rem", maxWidth: "800px", margin: "0 auto 5rem" }}>
            <div style={{
              width: "48px",
              height: "4px",
              background: "#ea580c",
              borderRadius: "2px",
              margin: "0 auto 1.5rem"
            }} />
            <h2 style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              marginBottom: "1.5rem"
            }}>
              Delivering Excellence Across <br />
              <span style={{ color: "#9333ea" }}>Diverse Sectors</span>
            </h2>
            <p style={{ color: "#475569", fontSize: "1.1rem", lineHeight: 1.7 }}>
              We engineer highly specialized, industry-specific software solutions that address the unique challenges of your market. From healthcare to finance, we have the domain expertise to scale your business.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid Layout */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", 
          gap: "2.5rem" 
        }}>
          {industries.map((ind, idx) => (
            <ScrollReveal key={idx} animation="fadeUp" delay={idx * 50} threshold={0.1}>
              <div style={{
                background: `linear-gradient(145deg, #ffffff 0%, ${ind.color} 150%)`,
                border: "1px solid #f1f5f9",
                borderTop: "4px solid transparent",
                borderRadius: "24px",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-10px) scale(1.02)";
                el.style.boxShadow = `0 25px 50px -12px ${ind.iconColor}30`;
                el.style.borderTopColor = ind.iconColor;
                el.style.borderColor = `${ind.iconColor}40`;
                const iconBox = el.querySelector('.icon-box') as HTMLElement;
                if(iconBox) {
                  iconBox.style.transform = "scale(1.1) rotate(5deg)";
                  iconBox.style.background = ind.iconColor;
                  iconBox.style.color = "#ffffff";
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "0 10px 40px -10px rgba(0,0,0,0.05)";
                el.style.borderTopColor = "transparent";
                el.style.borderColor = "#f1f5f9";
                const iconBox = el.querySelector('.icon-box') as HTMLElement;
                if(iconBox) {
                  iconBox.style.transform = "scale(1) rotate(0deg)";
                  iconBox.style.background = ind.color;
                  iconBox.style.color = ind.iconColor;
                }
              }}
              >
                {/* Top: Icon & Title */}
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1.5rem" }}>
                  <div 
                    className="icon-box"
                    style={{ 
                      width: "72px", 
                      height: "72px", 
                      borderRadius: "20px", 
                      background: ind.color,
                      color: ind.iconColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}>
                    {ind.icon}
                  </div>
                  <h3 style={{ 
                    fontFamily: "Inter, sans-serif", 
                    fontSize: "1.5rem", 
                    fontWeight: 800, 
                    color: "#0f172a",
                    margin: 0
                  }}>
                    {ind.name}
                  </h3>
                </div>

                {/* Middle: Description */}
                <p style={{ 
                  color: "#64748b", 
                  fontSize: "1rem", 
                  lineHeight: 1.7, 
                  marginBottom: "2rem",
                  flex: 1
                }}>
                  {ind.desc}
                </p>

                {/* Bottom: Features */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                  {ind.features.map((feat, i) => (
                    <span key={i} style={{ 
                      padding: "0.4rem 0.8rem", 
                      background: "#ffffff", 
                      border: `1px solid ${ind.iconColor}20`,
                      borderRadius: "50px",
                      color: ind.iconColor,
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
                    }}>
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Footer Link */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: ind.iconColor,
                  fontWeight: 800,
                  fontSize: "1rem",
                  marginTop: "auto",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  Explore Solutions <ArrowRight size={18} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

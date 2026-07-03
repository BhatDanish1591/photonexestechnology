"use client";
import { useState } from "react";
import Link from "next/link";
import { Stethoscope, ShoppingBag, Truck, Utensils, GraduationCap, Dumbbell, Smartphone, Activity, Landmark, Factory, Plane, Home, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const industries = [
  { 
    name: "Healthcare", 
    icon: <Stethoscope size={48} strokeWidth={1.5} />, 
    desc: "We build HIPAA-compliant patient management systems, telemedicine platforms, and advanced Electronic Health Records (EHR) software that streamline clinical workflows and improve patient care outcomes.",
    color: "#eff6ff",
    iconColor: "#2563eb",
    features: ["Telemedicine Apps", "EHR/EMR Systems", "Hospital Management"]
  },
  { 
    name: "E-Commerce", 
    icon: <ShoppingBag size={48} strokeWidth={1.5} />, 
    desc: "Develop scalable online marketplaces, custom storefronts, and secure payment integrations that deliver seamless shopping experiences and drive revenue growth across all platforms.",
    color: "#fff7ed",
    iconColor: "#ea580c",
    features: ["Custom Storefronts", "Payment Gateways", "Inventory Management"]
  },
  { 
    name: "Logistics & Transport", 
    icon: <Truck size={48} strokeWidth={1.5} />, 
    desc: "Optimize your supply chain with real-time fleet tracking, intelligent warehouse management systems, and route optimization algorithms that reduce costs and improve delivery times.",
    color: "#f0fdf4",
    iconColor: "#16a34a",
    features: ["Fleet Tracking", "Warehouse Systems", "Route Optimization"]
  },
  { 
    name: "Food & Beverage", 
    icon: <Utensils size={48} strokeWidth={1.5} />, 
    desc: "Transform your culinary business with custom Point of Sale (POS) systems, on-demand food delivery applications, and smart table reservation platforms.",
    color: "#fefce8",
    iconColor: "#ca8a04",
    features: ["Delivery Apps", "Restaurant POS", "Reservation Systems"]
  },
  { 
    name: "Education & EdTech", 
    icon: <GraduationCap size={48} strokeWidth={1.5} />, 
    desc: "Empower learning through robust Learning Management Systems (LMS), interactive e-learning portals, and comprehensive student administration systems for modern educational institutions.",
    color: "#faf5ff",
    iconColor: "#9333ea",
    features: ["LMS Platforms", "Virtual Classrooms", "Student Portals"]
  },
  { 
    name: "Finance & FinTech", 
    icon: <Landmark size={48} strokeWidth={1.5} />, 
    desc: "Secure, high-performance financial software including mobile banking apps, trading platforms, and blockchain-based smart contracts tailored for the modern financial sector.",
    color: "#f0f9ff",
    iconColor: "#0284c7",
    features: ["Banking Apps", "Trading Platforms", "Secure Wallets"]
  },
  { 
    name: "Manufacturing", 
    icon: <Factory size={48} strokeWidth={1.5} />, 
    desc: "Digitize your production lines with IoT integration, predictive maintenance software, and comprehensive ERP systems that bring Industry 4.0 directly to your factory floor.",
    color: "#fdf4ff",
    iconColor: "#c026d3",
    features: ["IoT Integration", "ERP Systems", "Predictive Analytics"]
  },
  { 
    name: "Real Estate", 
    icon: <Home size={48} strokeWidth={1.5} />, 
    desc: "Modernize property management with virtual tour integrations, smart CRM systems for realtors, and tenant portals that simplify leasing and facility management.",
    color: "#ecfdf5",
    iconColor: "#059669",
    features: ["Property Portals", "Realtor CRMs", "Virtual Tours"]
  }
];

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section style={{ padding: "6rem 2rem", background: "#ffffff" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header */}
        <ScrollReveal animation="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px", margin: "0 auto 4rem" }}>
            <div style={{
              width: "48px",
              height: "4px",
              background: "#ea580c",
              borderRadius: "2px",
              margin: "0 auto 1.5rem"
            }} />
            <h2 style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              marginBottom: "1.5rem"
            }}>
              Delivering Excellence Across <span style={{ color: "#2563eb" }}>Diverse Sectors</span>
            </h2>
            <p style={{ color: "#475569", fontSize: "1.1rem", lineHeight: 1.7 }}>
              We don't believe in one-size-fits-all. Our domain experts engineer highly specialized, industry-specific software solutions that address the unique challenges of your market.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Layout */}
        <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          flexWrap: "wrap",
          gap: "2rem",
          background: "#f8fafc",
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid #e2e8f0"
        }}>
          
          {/* Left: Tabs List */}
          <div style={{ 
            flex: "1 1 350px", 
            borderRight: "1px solid #e2e8f0", 
            background: "#ffffff",
            padding: "2rem",
            maxHeight: "600px",
            overflowY: "auto"
          }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0f172a", marginBottom: "1.5rem" }}>
              Select an Industry
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {industries.map((ind, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1rem 1.25rem",
                      background: isActive ? ind.color : "transparent",
                      border: "none",
                      borderRadius: "12px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      textAlign: "left",
                      boxShadow: isActive ? "0 4px 6px -1px rgba(0, 0, 0, 0.05)" : "none"
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.background = "#f1f5f9";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div style={{ color: isActive ? ind.iconColor : "#64748b", transition: "color 0.3s ease" }}>
                        <div style={{ transform: "scale(0.65)", transformOrigin: "left center" }}>
                          {ind.icon}
                        </div>
                      </div>
                      <span style={{ 
                        fontWeight: isActive ? 700 : 500, 
                        color: isActive ? "#0f172a" : "#475569",
                        fontSize: "1.05rem"
                      }}>
                        {ind.name}
                      </span>
                    </div>
                    {isActive && <ArrowRight size={18} color={ind.iconColor} />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Active Tab Content */}
          <div style={{ 
            flex: "2 1 500px", 
            padding: "4rem", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center" 
          }}>
            <ScrollReveal animation="fadeUp" key={activeTab}>
              <div style={{ 
                width: "96px", 
                height: "96px", 
                borderRadius: "24px", 
                background: industries[activeTab].color,
                color: industries[activeTab].iconColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "2rem"
              }}>
                {industries[activeTab].icon}
              </div>
              
              <h3 style={{ 
                fontFamily: "Inter, sans-serif", 
                fontSize: "2.5rem", 
                fontWeight: 800, 
                color: "#0f172a", 
                marginBottom: "1.5rem" 
              }}>
                {industries[activeTab].name} Solutions
              </h3>
              
              <p style={{ 
                color: "#475569", 
                fontSize: "1.2rem", 
                lineHeight: 1.8, 
                marginBottom: "2.5rem",
                maxWidth: "600px"
              }}>
                {industries[activeTab].desc}
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
                {industries[activeTab].features.map((feat, i) => (
                  <div key={i} style={{ 
                    padding: "0.5rem 1rem", 
                    background: "#ffffff", 
                    border: `1px solid ${industries[activeTab].iconColor}30`,
                    borderRadius: "30px",
                    color: industries[activeTab].iconColor,
                    fontWeight: 600,
                    fontSize: "0.95rem"
                  }}>
                    {feat}
                  </div>
                ))}
              </div>

              <Link href={`/contact?industry=${industries[activeTab].name.toLowerCase()}`} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: industries[activeTab].iconColor,
                color: "#ffffff",
                padding: "1rem 2rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "opacity 0.3s",
                width: "fit-content"
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = "0.9"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = "1"}
              >
                Discuss Your Project <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

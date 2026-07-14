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
          <div style={{ textAlign: "center", marginBottom: "5rem", maxWidth: "900px", margin: "0 auto 5rem" }}>
            <div style={{
              width: "48px",
              height: "4px",
              background: "#ea580c",
              borderRadius: "2px",
              margin: "0 auto 1.5rem"
            }} />
            <h2 style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              marginBottom: "1.5rem"
            }}>
              Delivering Excellence Across <br />
              <span style={{ color: "#9333ea" }}>Diverse Sectors</span>
            </h2>
            <p style={{ color: "#475569", fontSize: "1.1rem", lineHeight: 1.7, whiteSpace: "normal" }}>
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
              <div 
                className="group bg-[#f4f7f9] rounded-[24px] p-8 flex flex-col h-full transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-transparent hover:border-slate-100"
              >
                {/* Header: Icon + Title horizontally aligned */}
                <div className="flex items-center gap-5 mb-6">
                  {/* Icon Box with white background and soft shadow */}
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_24px_rgb(0,0,0,0.05)] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_8px_24px_rgb(0,0,0,0.09)] transition-all duration-300" style={{ color: ind.iconColor }}>
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {ind.icon}
                    </div>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">{ind.name}</h4>
                </div>

                {/* Description text */}
                <p className="text-[#5f6c7b] text-[1.05rem] leading-relaxed flex-1 mb-8">
                  {ind.desc}
                </p>

                {/* Features Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {ind.features.map((feat, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white rounded-full font-bold text-xs shadow-sm transition-all duration-300"
                      style={{ 
                        border: `1px solid ${ind.iconColor}20`,
                        color: ind.iconColor,
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

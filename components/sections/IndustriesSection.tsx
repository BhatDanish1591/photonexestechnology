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
              <Link 
                href="/services"
                className="group relative flex flex-col h-full bg-white/70 backdrop-blur-3xl border border-white/60 rounded-[32px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] p-10 no-underline cursor-pointer"
                style={{
                  borderTop: "4px solid transparent"
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderTopColor = ind.iconColor;
                  el.style.borderColor = `${ind.iconColor}40`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderTopColor = "transparent";
                  el.style.borderColor = "rgba(255,255,255,0.6)";
                }}
              >
                {/* Decorative Background Glow based on industry color */}
                <div 
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                  style={{ background: ind.iconColor }}
                />

                {/* Top: Icon & Title */}
                <div className="flex items-center gap-6 mb-6 relative z-10">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-lg"
                    style={{ background: ind.color, color: ind.iconColor }}
                  >
                    {ind.icon}
                  </div>
                  <h3 className="font-sans text-2xl font-extrabold text-slate-900 transition-colors duration-300">
                    {ind.name}
                  </h3>
                </div>

                {/* Middle: Description */}
                <p className="text-slate-600 text-[1.05rem] leading-relaxed mb-8 flex-1 relative z-10">
                  {ind.desc}
                </p>

                {/* Bottom: Features */}
                <div className="flex flex-wrap gap-3 mb-10 relative z-10">
                  {ind.features.map((feat, i) => (
                    <span key={i} 
                      className="px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full font-bold text-sm shadow-sm transition-all duration-300 group-hover:bg-white"
                      style={{ 
                        border: `1px solid ${ind.iconColor}30`,
                        color: ind.iconColor,
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Footer Link */}
                <div 
                  className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100/50 relative z-10"
                >
                  <span 
                    className="font-extrabold text-[0.95rem] tracking-wider uppercase transition-all duration-300"
                    style={{ color: ind.iconColor }}
                  >
                    Explore Solutions
                  </span>
                  <span 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-2"
                    style={{ background: ind.color, color: ind.iconColor }}
                  >
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

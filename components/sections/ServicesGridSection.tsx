"use client";
import Link from "next/link";
import { 
  Code2, Globe, ShoppingCart, Factory, Smartphone, Palette, 
  Cloud, BrainCircuit, ShieldCheck, TrendingUp, Settings, Plug,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { 
    title: "Enterprise Software", 
    icon: <Code2 size={24} strokeWidth={2} />,
    image: "/services/enterprise_software.png",
    description: "Tailored software solutions designed to meet your specific business requirements and accelerate growth."
  },
  { 
    title: "Web Development", 
    icon: <Globe size={24} strokeWidth={2} />,
    image: "/services/web_development.png",
    description: "High-performance, responsive websites and web applications built with modern frameworks."
  },
  { 
    title: "Mobile App Solutions", 
    icon: <Smartphone size={24} strokeWidth={2} />,
    image: "/services/mobile_app.png",
    description: "Native and cross-platform mobile applications for iOS and Android devices."
  },
  { 
    title: "UI/UX Design", 
    icon: <Palette size={24} strokeWidth={2} />,
    image: "/services/ui_ux_design.png",
    description: "User-centric interface designs that deliver intuitive and engaging digital experiences."
  },
  { 
    title: "FIN-TECH Development", 
    icon: <TrendingUp size={24} strokeWidth={2} />,
    image: "/services/fin_tech.png",
    description: "Secure, scalable financial technology solutions including payment gateways and banking software."
  },
  { 
    title: "IOT Development", 
    icon: <Plug size={24} strokeWidth={2} />,
    image: "/services/iot_development.png",
    description: "Connected device solutions that gather insights and automate operations securely."
  },
];

export default function ServicesGridSection() {
  return (
    <section 
      id="services" 
      style={{ 
        padding: "3rem 2rem",
        background: "#ffffff",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Left-aligned Split Header */}
        <ScrollReveal animation="fadeUp">
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "2rem",
          marginBottom: "4rem",
          borderBottom: "1px solid #e2e8f0",
          paddingBottom: "3rem"
        }}>
          {/* Left: Heading */}
          <div style={{ flex: "1 1 400px" }}>
            <div style={{
              width: "48px",
              height: "4px",
              background: "#ea580c",
              borderRadius: "2px",
              marginBottom: "1.5rem"
            }} />
            <h2 style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              margin: 0
            }}>
              Transforming Ideas Into <br/>
              <span style={{ color: "#ea580c" }}>Digital Reality</span>
            </h2>
          </div>

          {/* Right: Description + CTA */}
          <div style={{ flex: "1 1 380px", maxWidth: "480px" }}>
            <p style={{
              color: "#475569",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              margin: "0 0 1.5rem 0"
            }}>
              We provide end-to-end technology solutions tailored to your business needs, ensuring scalability, security, and exceptional user experiences.
            </p>

          </div>
        </div>
        </ScrollReveal>

        {/* CSS Grid for robust layout */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", 
          gap: "2rem",
          marginBottom: "4rem"
        }}>
          {services.map((service, idx) => (
            <ScrollReveal key={idx} animation="scaleUp" delay={idx * 100} threshold={0.1}>
            <Link 
              href="/services"
              className="group relative flex flex-col bg-white/70 backdrop-blur-2xl border border-white/60 rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:border-purple-200/60 cursor-pointer no-underline"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Image Container */}
              <div className="h-[220px] w-full overflow-hidden relative">
                <img loading="eager" fetchPriority="high" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={service.image} 
                  alt={service.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-1 flex flex-col relative z-10">
                <div 
                  className="w-16 h-16 rounded-2xl bg-white text-orange-600 flex items-center justify-center -mt-16 mb-6 relative z-10 shadow-xl shadow-black/5 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-purple-600 group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-purple-500/25"
                >
                  {service.icon}
                </div>
                
                <h3 className="text-slate-900 font-extrabold text-xl mb-3 font-sans transition-colors duration-300 group-hover:text-purple-700">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-[0.95rem] leading-relaxed flex-1">
                  {service.description}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-slate-800 font-bold text-sm tracking-wide transition-colors duration-300 group-hover:text-purple-600">
                    Explore Service
                  </span>
                  <span className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center transition-all duration-300 group-hover:bg-purple-100 group-hover:text-purple-600 group-hover:translate-x-1">
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </span>
                </div>
              </div>
            </Link>
            </ScrollReveal>
          ))}
        </div>



      </div>
    </section>
  );
}

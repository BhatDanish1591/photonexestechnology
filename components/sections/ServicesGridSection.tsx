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
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    description: "Tailored software solutions designed to meet your specific business requirements and accelerate growth."
  },
  { 
    title: "Web Development", 
    icon: <Globe size={24} strokeWidth={2} />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    description: "High-performance, responsive websites and web applications built with modern frameworks."
  },
  { 
    title: "Mobile App Solutions", 
    icon: <Smartphone size={24} strokeWidth={2} />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    description: "Native and cross-platform mobile applications for iOS and Android devices."
  },
  { 
    title: "UI/UX Design", 
    icon: <Palette size={24} strokeWidth={2} />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
    description: "User-centric interface designs that deliver intuitive and engaging digital experiences."
  },
  { 
    title: "FIN-TECH Development", 
    icon: <TrendingUp size={24} strokeWidth={2} />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    description: "Secure, scalable financial technology solutions including payment gateways and banking software."
  },
  { 
    title: "IOT Development", 
    icon: <Plug size={24} strokeWidth={2} />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    description: "Connected device solutions that gather insights and automate operations securely."
  },
];

export default function ServicesGridSection() {
  return (
    <section 
      id="services" 
      style={{ 
        padding: "6rem 2rem",
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
              className="service-card"
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                cursor: "pointer",
                textDecoration: "none"
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-8px)";
                el.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                el.style.borderColor = "#cbd5e1";
                const iconBox = el.querySelector('.icon-box') as HTMLElement;
                if(iconBox) {
                  iconBox.style.background = "#ea580c";
                  iconBox.style.color = "#ffffff";
                }
                const img = el.querySelector('.service-img') as HTMLElement;
                if(img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05)";
                el.style.borderColor = "#e2e8f0";
                const iconBox = el.querySelector('.icon-box') as HTMLElement;
                if(iconBox) {
                  iconBox.style.background = "#eff6ff";
                  iconBox.style.color = "#2563eb";
                }
                const img = el.querySelector('.service-img') as HTMLElement;
                if(img) img.style.transform = "scale(1)";
              }}
            >
              {/* Image Container */}
              <div style={{ height: "200px", width: "100%", overflow: "hidden", position: "relative" }}>
                <img loading="eager" fetchPriority="high" 
                  className="service-img"
                  src={service.image} 
                  alt={service.title} 
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }}></div>
              </div>

              {/* Content Container */}
              <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <div 
                  className="icon-box"
                  style={{ 
                    width: "56px", 
                    height: "56px", 
                    borderRadius: "12px", 
                    background: "#eff6ff", 
                    color: "#2563eb",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    marginTop: "-3.5rem", // Overlap the image
                    marginBottom: "1.5rem",
                    position: "relative",
                    zIndex: 2,
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease"
                  }}
                >
                  {service.icon}
                </div>
                
                <h3 style={{ 
                  color: "#0f172a", 
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.25rem", 
                  fontWeight: 800, 
                  marginBottom: "1rem" 
                }}>
                  {service.title}
                </h3>
                
                <p style={{ 
                  color: "#475569", 
                  fontSize: "0.95rem", 
                  lineHeight: 1.6,
                  flex: 1
                }}>
                  {service.description}
                </p>

                <div style={{ 
                  marginTop: "1.5rem",
                  color: "#2563eb", 
                  fontSize: "0.9rem", 
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px"
                }}>
                  Explore Service <ArrowRight size={14} />
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

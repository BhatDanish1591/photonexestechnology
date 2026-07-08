"use client";
import CustomHeroSection from "@/components/sections/CustomHeroSection";

const projects = [
  { name: "Enterprise ERP System", client: "TechCorp Industries", category: "Software Development", image: "/services/enterprise_software.png" },
  { name: "Healthcare Management App", client: "MediCare Plus", category: "Mobile App", image: "/portfolio/portfolio_healthcare.png" },
  { name: "E-Commerce Platform", client: "RetailGiant", category: "Web Development", image: "/portfolio/portfolio_ecommerce.png" },
  { name: "AI Predictive Analytics", client: "FinTech Solutions", category: "Machine Learning", image: "/portfolio/portfolio_ai.png" },
  { name: "Cloud Migration Strategy", client: "Global Logistics", category: "Cloud Services", image: "/portfolio/portfolio_cloud.png" },
  { name: "Student Portal Portal", client: "EduTech Academy", category: "Web Development", image: "/services/web_development.png" },
];

export default function PortfolioPage() {
  return (
    <main>
      <CustomHeroSection 
        title="Our Success Stories" 
        description="Explore our portfolio of successful digital transformations. See how we've helped businesses achieve their goals."
        imageSrc="/heroes/hero_portfolios_1783476385535.png"
        nextSectionColor="#f8fafc"
      />
      <section style={{ padding: "8rem 2rem", background: "#f8fafc", minHeight: "60vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "3rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              Our Recent Work
            </h2>
            <p style={{ color: "#64748b", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Explore some of the successful digital products and enterprise solutions we've delivered for our global clients.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "2.5rem" }}>
            {projects.map((p, i) => (
              <div key={i} style={{
                background: "#ffffff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                border: "1px solid rgba(0,0,0,0.02)",
                position: "relative"
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-10px)";
                el.style.boxShadow = "0 20px 40px -10px rgba(0,0,0,0.1)";
                const img = el.querySelector('img');
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.05)";
                const img = el.querySelector('img');
                if (img) img.style.transform = "scale(1)";
              }}
              >
                {/* Image Container */}
                <div style={{ width: "100%", height: "240px", overflow: "hidden", position: "relative", background: "#ffffff", padding: "1.5rem" }}>
                  <img 
                    src={p.image} 
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                  />
                  {/* Category Badge overlaying the image */}
                  <div style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(4px)",
                    color: "#ea580c",
                    padding: "0.4rem 1rem",
                    borderRadius: "50px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)"
                  }}>
                    {p.category}
                  </div>
                </div>

                {/* Content Container */}
                <div style={{ padding: "2rem" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.75rem", lineHeight: 1.3 }}>{p.name}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Client:</span>
                    <span style={{ color: "#334155", fontSize: "0.95rem", fontWeight: 600 }}>{p.client}</span>
                  </div>
                </div>
                
                {/* Bottom colored border accent */}
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "4px", background: "linear-gradient(to right, #ea580c, #f97316)" }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

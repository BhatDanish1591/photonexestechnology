"use client";
import PageHeader from "@/components/PageHeader";

const projects = [
  { name: "Enterprise ERP System", client: "TechCorp Industries", category: "Software Development" },
  { name: "Healthcare Management App", client: "MediCare Plus", category: "Mobile App" },
  { name: "E-Commerce Platform", client: "RetailGiant", category: "Web Development" },
  { name: "AI Predictive Analytics", client: "FinTech Solutions", category: "Machine Learning" },
  { name: "Cloud Migration Strategy", client: "Global Logistics", category: "Cloud Services" },
  { name: "Student Portal Portal", client: "EduTech Academy", category: "Web Development" },
];

export default function PortfolioPage() {
  return (
    <main>
      <PageHeader 
        title="Our Success Stories" 
        subtitle="Explore our portfolio of successful digital transformations. From enterprise ERP systems to predictive AI models, we deliver software that works."
        breadcrumb="Portfolio" 
        badge="Case Studies"
      />
      <section style={{ padding: "6rem 2rem", background: "#f8fafc", minHeight: "60vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "2.5rem", fontWeight: 700, color: "#0f172a", marginBottom: "1rem" }}>
              Our Recent Work
            </h2>
            <p style={{ color: "#475569", fontSize: "1rem" }}>
              Explore some of the successful projects we've delivered for our clients.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {projects.map((p, i) => (
              <div key={i} style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.05)",
                borderRadius: "12px",
                padding: "2rem",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
              >
                <div style={{ 
                  width: "100%", 
                  height: "200px", 
                  background: "#e2e8f0", 
                  borderRadius: "8px", 
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#94a3b8",
                  fontSize: "0.9rem"
                }}>
                  Project Image
                </div>
                <div style={{ color: "#ea580c", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {p.category}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>{p.name}</h3>
                <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Client: {p.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

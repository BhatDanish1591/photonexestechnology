"use client";
import CustomHeroSection from "@/components/sections/CustomHeroSection";

const jobs = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    type: "Full-Time",
    location: "Remote / On-site",
    description: "Looking for an experienced MERN stack developer to lead enterprise projects."
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-Time",
    location: "On-site",
    description: "Creative designer needed with strong experience in Figma and user-centric design principles."
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    type: "Full-Time",
    location: "Remote",
    description: "Expert in SEO, SEM, and social media campaigns to drive our digital footprint."
  }
];

export default function CareersPage() {
  return (
    <main>
      <CustomHeroSection 
        title="Join Our Team" 
        description="Build your career with a team of passionate innovators. We're always looking for talented individuals to join our mission."
        imageSrc="/heroes/hero_careers_1783476396392.png"
        nextSectionColor="#f8fafc"
      />
      <section style={{ padding: "6rem 2rem", background: "#f8fafc", minHeight: "60vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "2.5rem", fontWeight: 700, color: "#0f172a", marginBottom: "1rem" }}>
              Current Openings
            </h2>
            <p style={{ color: "#475569", fontSize: "1rem", maxWidth: "700px", margin: "0 auto" }}>
              Explore our current job opportunities and take the next big step in your career with us.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {jobs.map((job, i) => (
              <div key={i} style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.05)",
                borderRadius: "12px",
                padding: "2rem",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "2rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
              }}>
                <div style={{ flex: "1 1 500px" }}>
                  <div style={{ display: "flex", gap: "1rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, background: "#f3e8ff", color: "#9333ea", padding: "0.25rem 0.75rem", borderRadius: "50px" }}>
                      {job.department}
                    </span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, background: "#ffedd5", color: "#ea580c", padding: "0.25rem 0.75rem", borderRadius: "50px" }}>
                      {job.type}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>
                    {job.title}
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "0.95rem", margin: 0 }}>
                    {job.description}
                  </p>
                  <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.5rem" }}>
                    📍 {job.location}
                  </p>
                </div>
                <div>
                  <button style={{
                    background: "linear-gradient(90deg, #9333ea, #ec4899)",
                    color: "white",
                    border: "none",
                    padding: "0.75rem 2rem",
                    borderRadius: "50px",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 4px 10px rgba(236, 72, 153, 0.3)"
                  }}>
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </main>
  );
}

"use client";
const certs = [
  { title: "Course Completion", icon: "🎓", color: "rgba(37,99,235,0.15)", border: "rgba(37,99,235,0.3)", desc: "Issued upon successful completion of any course with minimum 80% attendance." },
  { title: "Internship Certificate", icon: "🤝", color: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.3)", desc: "Awarded after completing the industrial training or internship program." },
  { title: "Industrial Training", icon: "🏭", color: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.3)", desc: "Verifies hands-on industrial training experience with live projects." },
  { title: "Workshop Certificate", icon: "🛠️", color: "rgba(124,58,237,0.15)", border: "rgba(124,58,237,0.3)", desc: "For participants of specialized workshops and bootcamps." },
  { title: "Excellence Award", icon: "🏆", color: "rgba(239,68,68,0.15)", border: "rgba(239,68,68,0.3)", desc: "Recognition for outstanding performance and exceptional project quality." },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      style={{
        padding: "7rem 2rem",
        background: "transparent",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-tag"><span>📜</span> Certifications</div>
          <h2 className="section-title">
            Industry-Recognized{" "}
            <span style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Certificates
            </span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Our certificates are recognized by leading IT companies and carry real weight in the job market.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {certs.map((cert) => (
            <div
              key={cert.title}
              style={{
                padding: "2rem",
                borderRadius: "20px",
                background: cert.color,
                border: `1px solid ${cert.border}`,
                textAlign: "center",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px) scale(1.02)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Certificate visual */}
              <div
                style={{
                  width: "100%",
                  height: "130px",
                  borderRadius: "12px",
                  background: "#f1f5f9",
                  border: "1px dashed rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3.5rem",
                  marginBottom: "1.5rem",
                  position: "relative",
                }}
              >
                {cert.icon}
                <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "4px" }}>
                  {[0,1,2,3,4,5].map((i) => (
                    <div key={i} style={{ width: "20px", height: "2px", borderRadius: "1px", background: "rgba(0,0,0,0.1)" }} />
                  ))}
                </div>
              </div>
              <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem", fontSize: "1rem" }}>{cert.title}</h3>
              <p style={{ color: "#334155", fontSize: "0.825rem", lineHeight: 1.6 }}>{cert.desc}</p>
            </div>
          ))}
        </div>

        {/* Verification strip */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem 2.5rem",
            borderRadius: "16px",
            background: "rgba(16,185,129,0.06)",
            border: "1px solid rgba(16,185,129,0.2)",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "1.5rem" }}>✅</span>
          <p style={{ color: "#334155", fontSize: "0.9rem" }}>
            All certificates include a <strong style={{ color: "#34d399" }}>unique verification ID</strong> that can be verified online by employers and institutions.
          </p>
        </div>
      </div>
    </section>
  );
}

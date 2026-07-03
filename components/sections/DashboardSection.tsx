"use client";
const dashboardFeatures = [
  { icon: "📚", label: "My Courses", desc: "Access all enrolled courses" },
  { icon: "📊", label: "Attendance", desc: "Track daily attendance" },
  { icon: "📝", label: "Assignments", desc: "Submit & review tasks" },
  { icon: "🎥", label: "Live Classes", desc: "Join real-time sessions" },
  { icon: "📹", label: "Recorded Videos", desc: "Watch anytime replays" },
  { icon: "🏆", label: "Certificates", desc: "Download your certs" },
  { icon: "💼", label: "Internship", desc: "Track internship progress" },
  { icon: "📤", label: "Project Submit", desc: "Upload project files" },
  { icon: "🧪", label: "Quiz", desc: "Practice assessments" },
  { icon: "⬇️", label: "Downloads", desc: "Study materials" },
  { icon: "💰", label: "Fee Management", desc: "Pay fees online" },
  { icon: "📈", label: "Progress", desc: "Track overall progress" },
];

export default function DashboardSection() {
  return (
    <section
      id="dashboard"
      style={{
        padding: "7rem 2rem",
        background: "transparent",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left: Content */}
          <div>
            <div className="section-tag"><span>🖥️</span> Student Dashboard</div>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Everything in{" "}
              <span style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                One Place
              </span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
              Our student portal gives you 24/7 access to all your courses, live classes, recorded lectures, assignments, and progress tracking from a single dashboard.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.5rem" }}>
              {dashboardFeatures.map((f) => (
                <div
                  key={f.label}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    padding: "0.75rem 1rem",
                    backdropFilter: "blur(12px)",
                    background: "rgba(255,255,255,0.9)",
                    borderBottom: "1px solid var(--border-glass)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.3)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.background = "#ffffff";
                  }}
                >
                  <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ color: "#e2e8f0", fontSize: "0.8rem", fontWeight: 600 }}>{f.label}</div>
                    <div style={{ color: "#475569", fontSize: "0.7rem" }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="/login" className="btn-primary" style={{ fontSize: "0.9rem" }}>
                <span style={{ position: "relative", zIndex: 1 }}>Student Login →</span>
              </a>
              <a href="/register" className="btn-outline" style={{ fontSize: "0.9rem" }}>
                <span>Register Free</span>
              </a>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "20px",
                border: "1px solid var(--border-glass)",
                background: "var(--bg-card)",
                padding: "1.5rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Fake dashboard header */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
                <span style={{ marginLeft: "0.5rem", color: "#475569", fontSize: "0.75rem" }}>student.photonexes.com</span>
              </div>

              {/* Stats Row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "1.5rem" }}>
                {[
                  { label: "Courses", value: "3", icon: "📚", color: "rgba(37,99,235,0.15)" },
                  { label: "Attendance", value: "94%", icon: "📊", color: "rgba(16,185,129,0.15)" },
                  { label: "Progress", value: "68%", icon: "📈", color: "rgba(124,58,237,0.15)" },
                ].map((s) => (
                  <div key={s.label} style={{ padding: "1rem", borderRadius: "12px", background: s.color, textAlign: "center" }}>
                    <div style={{ fontSize: "1.2rem" }}>{s.icon}</div>
                    <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, color: "#0f172a", fontSize: "1.1rem" }}>{s.value}</div>
                    <div style={{ color: "#334155", fontSize: "0.7rem" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Course Progress Bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { name: "MERN Stack Development", progress: 75, color: "#3b82f6" },
                  { name: "Data Structures & Algo", progress: 45, color: "#8b5cf6" },
                  { name: "System Design", progress: 20, color: "#06b6d4" },
                ].map((c) => (
                  <div key={c.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                      <span style={{ color: "#334155", fontSize: "0.75rem" }}>{c.name}</span>
                      <span style={{ color: "#64748b", fontSize: "0.75rem" }}>{c.progress}%</span>
                    </div>
                    <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "2px" }}>
                      <div style={{ height: "100%", width: `${c.progress}%`, background: c.color, borderRadius: "2px", transition: "width 1s ease" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div style={{ position: "absolute", top: "-20px", right: "-20px", background: "rgba(16,185,129,1)", borderRadius: "50px", padding: "0.5rem 1rem", fontSize: "0.75rem", fontWeight: 700, color: "#fff", border: "2px solid #ffffff", boxShadow: "0 10px 20px rgba(16,185,129,0.3)" }}>
              🎓 Certificate Earned!
            </div>
            <div style={{ position: "absolute", bottom: "20px", left: "-30px", background: "#ffffff", border: "1px solid var(--border-glass)", borderRadius: "14px", padding: "0.75rem 1rem", fontSize: "0.8rem", boxShadow: "var(--shadow-card)" }}>
              <div style={{ color: "var(--purple-primary)", fontWeight: 700, marginBottom: "2px" }}>Live Class</div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.72rem" }}>MERN Stack • Starting in 5min</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

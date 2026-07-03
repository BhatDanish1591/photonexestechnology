"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [tab, setTab] = useState<"student" | "admin">("student");
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (tab === "admin") window.location.href = "/admin";
      else window.location.href = "/student";
    }, 1200);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #040d21 0%, #0d1b3e 50%, #130a2e 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG Orbs */}
      <div className="hero-orb" style={{ width: "400px", height: "400px", background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)", top: "5%", left: "-5%" }} />
      <div className="hero-orb" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)", bottom: "5%", right: "-5%", animationDelay: "2s" }} />
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "460px",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "0.5rem" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #2563eb, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Outfit, sans-serif", fontWeight: 900, color: "#fff", fontSize: "1.4rem" }}>P</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.2rem", background: "linear-gradient(135deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Photonexes</div>
              <div style={{ fontSize: "0.62rem", color: "#64748b", letterSpacing: "0.1em" }}>TECHNOLOGIES LLP</div>
            </div>
          </Link>
          <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: "0.5rem" }}>Welcome back! Sign in to your portal</p>
        </div>

        {/* Card */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "2.5rem",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Tab Toggle */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.5rem",
              background: "#ffffff",
              borderRadius: "14px",
              padding: "0.35rem",
              marginBottom: "2rem",
            }}
          >
            {(["student", "admin"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: "0.65rem",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  background: tab === t ? "linear-gradient(135deg, #2563eb, #7c3aed)" : "transparent",
                  color: tab === t ? "#fff" : "#64748b",
                }}
              >
                {t === "student" ? "🎓 Student" : "⚙️ Admin"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div>
              <label style={{ display: "block", color: "#334155", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                {tab === "student" ? "Student Email or ID" : "Admin Email"}
              </label>
              <input
                required
                type="email"
                className="form-input"
                placeholder={tab === "student" ? "student@photonexes.com" : "admin@photonexes.com"}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: "block", color: "#334155", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.5rem" }}>Password</label>
              <input
                required
                type="password"
                className="form-input"
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "6px", color: "#64748b", fontSize: "0.8rem", cursor: "pointer" }}>
                <input type="checkbox" style={{ accentColor: "#7c3aed" }} /> Remember me
              </label>
              <a href="#" style={{ color: "#7c3aed", fontSize: "0.8rem", textDecoration: "none" }}>Forgot password?</a>
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "0.9rem", fontSize: "1rem", border: "none" }}
              disabled={loading}
            >
              <span style={{ position: "relative", zIndex: 1 }}>
                {loading ? "Signing in..." : `Sign In as ${tab === "student" ? "Student" : "Admin"}`}
              </span>
            </button>

            {tab === "student" && (
              <p style={{ color: "#64748b", fontSize: "0.8rem", textAlign: "center" }}>
                Don&apos;t have an account?{" "}
                <Link href="/register" style={{ color: "#7c3aed", fontWeight: 600, textDecoration: "none" }}>Register Free</Link>
              </p>
            )}
          </form>
        </div>

        <p style={{ textAlign: "center", color: "#334155", fontSize: "0.75rem", marginTop: "1.5rem" }}>
          © 2024 Photonexes Technologies • <Link href="/privacy" style={{ color: "#475569", textDecoration: "none" }}>Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}

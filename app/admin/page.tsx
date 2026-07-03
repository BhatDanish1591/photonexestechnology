"use client";
import { useState } from "react";
import Link from "next/link";

const sidebarModules = [
  { icon: "📊", label: "Dashboard", id: "dashboard" },
  { icon: "🎓", label: "Students", id: "students" },
  { icon: "🧑‍🏫", label: "Trainers", id: "trainers" },
  { icon: "👔", label: "Employees", id: "employees" },
  { icon: "📋", label: "Admissions", id: "admissions" },
  { icon: "📚", label: "Courses", id: "courses" },
  { icon: "🗓️", label: "Batches", id: "batches" },
  { icon: "📅", label: "Attendance", id: "attendance" },
  { icon: "📝", label: "Assignments", id: "assignments" },
  { icon: "🎥", label: "Live Classes", id: "liveclasses" },
  { icon: "📹", label: "Recordings", id: "recordings" },
  { icon: "🏆", label: "Certificates", id: "certificates" },
  { icon: "🤝", label: "Internship", id: "internship" },
  { icon: "💼", label: "Placements", id: "placements" },
  { icon: "💰", label: "Fees", id: "fees" },
  { icon: "🧾", label: "Invoices", id: "invoices" },
  { icon: "📊", label: "CRM & Leads", id: "crm" },
  { icon: "🚀", label: "Projects", id: "projects" },
  { icon: "🏢", label: "Clients", id: "clients" },
  { icon: "👥", label: "HR", id: "hr" },
  { icon: "💵", label: "Payroll", id: "payroll" },
  { icon: "🔔", label: "Notifications", id: "notifications" },
  { icon: "📧", label: "Email & SMS", id: "email" },
  { icon: "📈", label: "Reports", id: "reports" },
  { icon: "⚙️", label: "Settings", id: "settings" },
];

const statsCards = [
  { label: "Total Students", value: "1,247", icon: "🎓", trend: "+12%", color: "rgba(37,99,235,0.15)", border: "rgba(37,99,235,0.3)", trendUp: true },
  { label: "Active Courses", value: "34", icon: "📚", trend: "+3", color: "rgba(124,58,237,0.15)", border: "rgba(124,58,237,0.3)", trendUp: true },
  { label: "Monthly Revenue", value: "₹8.4L", icon: "💰", trend: "+18%", color: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.3)", trendUp: true },
  { label: "Placed Students", value: "943", icon: "💼", trend: "+7%", color: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.3)", trendUp: true },
  { label: "Pending Leads", value: "78", icon: "📊", trend: "-5", color: "rgba(239,68,68,0.15)", border: "rgba(239,68,68,0.3)", trendUp: false },
  { label: "Trainers", value: "22", icon: "🧑‍🏫", trend: "+2", color: "rgba(6,182,212,0.15)", border: "rgba(6,182,212,0.3)", trendUp: true },
];

const recentStudents = [
  { name: "Rahul Sharma", course: "MERN Stack", batch: "B-2024-12", status: "Active", joined: "Dec 10" },
  { name: "Priya Patel", course: "Data Science", batch: "B-2024-11", status: "Active", joined: "Nov 15" },
  { name: "Amit Kumar", course: "Python", batch: "B-2024-12", status: "Active", joined: "Dec 5" },
  { name: "Sneha Reddy", course: "Flutter", batch: "B-2024-10", status: "Completed", joined: "Oct 1" },
  { name: "Vikram Singh", course: "Cybersecurity", batch: "B-2024-11", status: "Active", joined: "Nov 20" },
];

const recentLeads = [
  { name: "Ananya Shah", interest: "Full Stack", phone: "+91 98765 43210", source: "Website", status: "New" },
  { name: "Rohan Verma", interest: "AI & ML", phone: "+91 87654 32109", source: "Walk-in", status: "Follow-up" },
  { name: "Divya Nair", interest: "Web Dev", phone: "+91 76543 21098", source: "Referral", status: "Enrolled" },
  { name: "Karan Mehta", interest: "Cybersecurity", phone: "+91 65432 10987", source: "LinkedIn", status: "New" },
];

function ModuleView({ moduleId }: { moduleId: string }) {
  if (moduleId === "students") return <StudentsModule />;
  if (moduleId === "crm") return <CRMModule />;
  if (moduleId === "fees") return <FeesModule />;
  if (moduleId === "courses") return <CoursesModule />;
  return <DashboardModule />;
}

function DashboardModule() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, color: "#0f172a", fontSize: "1.6rem" }}>Admin Dashboard</h1>
          <p style={{ color: "#64748b", fontSize: "0.85rem" }}>Welcome back! Here's what's happening today.</p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button className="btn-outline" style={{ padding: "0.55rem 1.2rem", fontSize: "0.82rem" }}>
            <span>📥 Export</span>
          </button>
          <button className="btn-primary" style={{ padding: "0.55rem 1.2rem", fontSize: "0.82rem", border: "none" }}>
            <span style={{ position: "relative", zIndex: 1 }}>+ New Admission</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.2rem", marginBottom: "2rem" }}>
        {statsCards.map((s) => (
          <div
            key={s.label}
            className="admin-card"
            style={{ background: s.color, borderColor: s.border, display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>{s.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, color: "#0f172a", fontSize: "1.5rem" }}>{s.value}</div>
              <div style={{ color: "#334155", fontSize: "0.78rem" }}>{s.label}</div>
            </div>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: s.trendUp ? "#34d399" : "#f87171" }}>{s.trend}</span>
          </div>
        ))}
      </div>

      {/* Two columns */}
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
        {/* Recent Students */}
        <div className="admin-card">
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.2rem" }}>
            <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>Recent Admissions</h3>
            <span style={{ color: "#7c3aed", fontSize: "0.8rem", cursor: "pointer" }}>View All →</span>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Student", "Course", "Batch", "Status", "Joined"].map((h) => (
                  <th key={h} style={{ textAlign: "left", color: "#475569", fontSize: "0.72rem", fontWeight: 700, padding: "0.5rem 0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentStudents.map((s, i) => (
                <tr key={s.name} style={{ borderTop: "1px solid #ffffff" }}>
                  <td style={{ padding: "0.75rem", color: "#e2e8f0", fontSize: "0.85rem", fontWeight: 500 }}>{s.name}</td>
                  <td style={{ padding: "0.75rem", color: "#334155", fontSize: "0.8rem" }}>{s.course}</td>
                  <td style={{ padding: "0.75rem", color: "#64748b", fontSize: "0.78rem" }}>{s.batch}</td>
                  <td style={{ padding: "0.75rem" }}>
                    <span className={`badge ${s.status === "Active" ? "badge-green" : "badge-purple"}`} style={{ fontSize: "0.68rem" }}>{s.status}</span>
                  </td>
                  <td style={{ padding: "0.75rem", color: "#64748b", fontSize: "0.78rem" }}>{s.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="admin-card">
          <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#0f172a", fontSize: "0.95rem", marginBottom: "1.2rem" }}>Quick Actions</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { icon: "➕", label: "Add New Student", color: "rgba(37,99,235,0.15)" },
              { icon: "📚", label: "Create New Batch", color: "rgba(124,58,237,0.15)" },
              { icon: "🧾", label: "Generate Invoice", color: "rgba(16,185,129,0.15)" },
              { icon: "📜", label: "Issue Certificate", color: "rgba(245,158,11,0.15)" },
              { icon: "📊", label: "Generate Report", color: "rgba(6,182,212,0.15)" },
              { icon: "📧", label: "Send Bulk Email", color: "rgba(239,68,68,0.15)" },
            ].map((a) => (
              <button
                key={a.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                  background: a.color,
                  border: "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                  color: "#e2e8f0",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  textAlign: "left",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}
              >
                <span style={{ fontSize: "1rem" }}>{a.icon}</span> {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Leads */}
      <div className="admin-card">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.2rem" }}>
          <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>Recent Leads</h3>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button className="btn-ghost" style={{ padding: "0.4rem 1rem", fontSize: "0.78rem" }}><span>Filter</span></button>
            <button className="btn-primary" style={{ padding: "0.4rem 1rem", fontSize: "0.78rem", border: "none" }}><span style={{ position: "relative", zIndex: 1 }}>+ Add Lead</span></button>
          </div>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Name", "Interest", "Phone", "Source", "Status", "Action"].map((h) => (
                <th key={h} style={{ textAlign: "left", color: "#475569", fontSize: "0.72rem", fontWeight: 700, padding: "0.5rem 0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentLeads.map((l) => (
              <tr key={l.name} style={{ borderTop: "1px solid #ffffff" }}>
                <td style={{ padding: "0.75rem", color: "#e2e8f0", fontSize: "0.85rem", fontWeight: 500 }}>{l.name}</td>
                <td style={{ padding: "0.75rem", color: "#334155", fontSize: "0.8rem" }}>{l.interest}</td>
                <td style={{ padding: "0.75rem", color: "#64748b", fontSize: "0.8rem" }}>{l.phone}</td>
                <td style={{ padding: "0.75rem", color: "#64748b", fontSize: "0.78rem" }}>{l.source}</td>
                <td style={{ padding: "0.75rem" }}>
                  <span className={`badge ${l.status === "New" ? "badge-blue" : l.status === "Follow-up" ? "badge-orange" : "badge-green"}`} style={{ fontSize: "0.68rem" }}>{l.status}</span>
                </td>
                <td style={{ padding: "0.75rem" }}>
                  <button style={{ color: "#7c3aed", fontSize: "0.78rem", background: "none", border: "none", cursor: "pointer" }}>Follow Up →</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StudentsModule() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
        <h1 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, color: "#0f172a", fontSize: "1.6rem" }}>Student Management</h1>
        <button className="btn-primary" style={{ padding: "0.6rem 1.2rem", fontSize: "0.85rem", border: "none" }}>
          <span style={{ position: "relative", zIndex: 1 }}>+ Add Student</span>
        </button>
      </div>
      <div className="admin-card" style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <input className="form-input" placeholder="🔍 Search students..." style={{ flex: "1", minWidth: "200px" }} />
          <select className="form-input" style={{ width: "160px", cursor: "pointer" }}>
            <option style={{ background: "#0d1b3e" }}>All Courses</option>
            <option style={{ background: "#0d1b3e" }}>MERN Stack</option>
            <option style={{ background: "#0d1b3e" }}>Python</option>
            <option style={{ background: "#0d1b3e" }}>Data Science</option>
          </select>
          <select className="form-input" style={{ width: "160px", cursor: "pointer" }}>
            <option style={{ background: "#0d1b3e" }}>All Batches</option>
            <option style={{ background: "#0d1b3e" }}>B-2024-12</option>
            <option style={{ background: "#0d1b3e" }}>B-2024-11</option>
          </select>
          <select className="form-input" style={{ width: "140px", cursor: "pointer" }}>
            <option style={{ background: "#0d1b3e" }}>All Status</option>
            <option style={{ background: "#0d1b3e" }}>Active</option>
            <option style={{ background: "#0d1b3e" }}>Completed</option>
          </select>
        </div>
      </div>
      <div className="admin-card">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["ID", "Student", "Course", "Batch", "Attendance", "Fee Status", "Status", "Actions"].map((h) => (
                <th key={h} style={{ textAlign: "left", color: "#475569", fontSize: "0.72rem", fontWeight: 700, padding: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { id: "PT001", name: "Rahul Sharma", course: "MERN Stack", batch: "B-2024-12", att: "94%", fee: "Paid", status: "Active" },
              { id: "PT002", name: "Priya Patel", course: "Data Science", batch: "B-2024-11", att: "88%", fee: "Pending", status: "Active" },
              { id: "PT003", name: "Amit Kumar", course: "Python", batch: "B-2024-12", att: "96%", fee: "Paid", status: "Active" },
              { id: "PT004", name: "Sneha Reddy", course: "Flutter", batch: "B-2024-10", att: "91%", fee: "Paid", status: "Completed" },
              { id: "PT005", name: "Vikram Singh", course: "Cybersecurity", batch: "B-2024-11", att: "82%", fee: "Partial", status: "Active" },
            ].map((s) => (
              <tr key={s.id} style={{ borderBottom: "1px solid #ffffff" }}>
                <td style={{ padding: "0.75rem", color: "#7c3aed", fontSize: "0.82rem", fontWeight: 600 }}>{s.id}</td>
                <td style={{ padding: "0.75rem", color: "#e2e8f0", fontSize: "0.85rem", fontWeight: 500 }}>{s.name}</td>
                <td style={{ padding: "0.75rem", color: "#334155", fontSize: "0.8rem" }}>{s.course}</td>
                <td style={{ padding: "0.75rem", color: "#64748b", fontSize: "0.78rem" }}>{s.batch}</td>
                <td style={{ padding: "0.75rem", color: "#34d399", fontSize: "0.8rem", fontWeight: 600 }}>{s.att}</td>
                <td style={{ padding: "0.75rem" }}>
                  <span className={`badge ${s.fee === "Paid" ? "badge-green" : s.fee === "Partial" ? "badge-orange" : "badge-purple"}`} style={{ fontSize: "0.68rem" }}>{s.fee}</span>
                </td>
                <td style={{ padding: "0.75rem" }}>
                  <span className={`badge ${s.status === "Active" ? "badge-blue" : "badge-cyan"}`} style={{ fontSize: "0.68rem" }}>{s.status}</span>
                </td>
                <td style={{ padding: "0.75rem" }}>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: "6px", padding: "0.3rem 0.6rem", color: "#60a5fa", fontSize: "0.72rem", cursor: "pointer" }}>View</button>
                    <button style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: "6px", padding: "0.3rem 0.6rem", color: "#a78bfa", fontSize: "0.72rem", cursor: "pointer" }}>Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CRMModule() {
  return (
    <div>
      <h1 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, color: "#0f172a", fontSize: "1.6rem", marginBottom: "0.5rem" }}>CRM & Leads</h1>
      <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "2rem" }}>Manage inquiries, track leads, and convert prospects into students.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { label: "Total Leads", value: "342", icon: "📊", color: "rgba(37,99,235,0.15)" },
          { label: "New Today", value: "12", icon: "🆕", color: "rgba(6,182,212,0.15)" },
          { label: "Enrolled", value: "187", icon: "✅", color: "rgba(16,185,129,0.15)" },
          { label: "Follow-ups", value: "34", icon: "🔔", color: "rgba(245,158,11,0.15)" },
        ].map((s) => (
          <div key={s.label} className="admin-card" style={{ background: s.color }}>
            <span style={{ fontSize: "1.5rem" }}>{s.icon}</span>
            <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#0f172a", marginTop: "0.5rem" }}>{s.value}</div>
            <div style={{ color: "#64748b", fontSize: "0.78rem" }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div className="admin-card">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.2rem" }}>
          <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#0f172a" }}>All Leads</h3>
          <button className="btn-primary" style={{ padding: "0.5rem 1.2rem", fontSize: "0.82rem", border: "none" }}><span style={{ position: "relative", zIndex: 1 }}>+ Add Lead</span></button>
        </div>
        <p style={{ color: "#64748b", fontSize: "0.875rem" }}>CRM pipeline with Kanban board, follow-up reminders, and conversion tracking.</p>
      </div>
    </div>
  );
}

function FeesModule() {
  return (
    <div>
      <h1 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, color: "#0f172a", fontSize: "1.6rem", marginBottom: "2rem" }}>Fee Management</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { label: "Total Collected", value: "₹42.8L", icon: "💰", color: "rgba(16,185,129,0.15)" },
          { label: "Pending Fees", value: "₹6.2L", icon: "⏳", color: "rgba(245,158,11,0.15)" },
          { label: "This Month", value: "₹8.4L", icon: "📅", color: "rgba(37,99,235,0.15)" },
        ].map((s) => (
          <div key={s.label} className="admin-card" style={{ background: s.color, textAlign: "center", padding: "2rem" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{s.icon}</div>
            <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#0f172a" }}>{s.value}</div>
            <div style={{ color: "#334155", fontSize: "0.82rem" }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div className="admin-card">
        <p style={{ color: "#64748b", fontSize: "0.875rem" }}>Fee collection, Razorpay integration, instalment plans, receipts, and overdue alerts.</p>
      </div>
    </div>
  );
}

function CoursesModule() {
  return (
    <div>
      <h1 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, color: "#0f172a", fontSize: "1.6rem", marginBottom: "2rem" }}>Course Management</h1>
      <div className="admin-card">
        <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "1rem" }}>Create and manage courses, modules, lessons, quizzes, and batch schedules.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
          {["MERN Stack", "Python", "Data Science", "Flutter", "AWS", "Cybersecurity"].map((c) => (
            <div key={c} style={{ padding: "1.2rem", borderRadius: "12px", background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}>
              <div style={{ color: "#0f172a", fontWeight: 600, marginBottom: "0.3rem", fontSize: "0.9rem" }}>{c}</div>
              <div style={{ color: "#64748b", fontSize: "0.75rem" }}>Active • 3 Batches</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [activeModule, setActiveModule] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#040d21" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: sidebarCollapsed ? "72px" : "240px",
          background: "rgba(7,15,43,0.98)",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexDirection: "column",
          transition: "width 0.3s ease",
          flexShrink: 0,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {/* Logo */}
        <div style={{ padding: "1.2rem 1rem", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "10px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
          <div style={{ width: "34px", height: "34px", borderRadius: "8px", background: "linear-gradient(135deg, #2563eb, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Outfit, sans-serif", fontWeight: 900, color: "#fff", flexShrink: 0 }}>P</div>
          {!sidebarCollapsed && (
            <div>
              <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "0.9rem", background: "linear-gradient(135deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Photonexes</div>
              <div style={{ color: "#475569", fontSize: "0.58rem", letterSpacing: "0.08em" }}>ADMIN PANEL</div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "0.75rem 0.5rem", display: "flex", flexDirection: "column", gap: "0.15rem" }}>
          {sidebarModules.map((mod) => (
            <button
              key={mod.id}
              className={`admin-sidebar-link ${activeModule === mod.id ? "active" : ""}`}
              onClick={() => setActiveModule(mod.id)}
              style={{
                border: "none",
                background: activeModule === mod.id ? "rgba(124,58,237,0.15)" : "transparent",
                justifyContent: sidebarCollapsed ? "center" : "flex-start",
                paddingLeft: sidebarCollapsed ? "0" : undefined,
              }}
              title={sidebarCollapsed ? mod.label : ""}
            >
              <span style={{ fontSize: "1rem", flexShrink: 0 }}>{mod.icon}</span>
              {!sidebarCollapsed && <span style={{ fontSize: "0.82rem" }}>{mod.label}</span>}
            </button>
          ))}
        </nav>

        {/* Collapse toggle */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          style={{ margin: "0.75rem 0.5rem", padding: "0.6rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)", background: "#ffffff", color: "#64748b", cursor: "pointer", fontSize: "0.85rem" }}
        >
          {sidebarCollapsed ? "→" : "← Collapse"}
        </button>

        {/* Footer */}
        <div style={{ padding: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(124,58,237,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", flexShrink: 0 }}>👤</div>
            {!sidebarCollapsed && (
              <div>
                <div style={{ color: "#e2e8f0", fontSize: "0.78rem", fontWeight: 600 }}>Super Admin</div>
                <div style={{ color: "#475569", fontSize: "0.68rem" }}>admin@photonexes.com</div>
              </div>
            )}
          </div>
          {!sidebarCollapsed && (
            <Link href="/login" style={{ display: "block", marginTop: "0.75rem", color: "#ef4444", fontSize: "0.78rem", textDecoration: "none" }}>🚪 Logout</Link>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Top Bar */}
        <header
          style={{
            height: "60px",
            background: "rgba(7,15,43,0.9)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 1.5rem",
            backdropFilter: "blur(10px)",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "#64748b", fontSize: "0.85rem" }}>Admin Panel</span>
            <span style={{ color: "#334155" }}>/</span>
            <span style={{ color: "#a78bfa", fontWeight: 600, fontSize: "0.85rem", textTransform: "capitalize" }}>{activeModule}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button style={{ position: "relative", background: "none", border: "none", cursor: "pointer", color: "#64748b", fontSize: "1.1rem" }}>
              🔔
              <span style={{ position: "absolute", top: "-2px", right: "-2px", width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", border: "2px solid #040d21" }} />
            </button>
            <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.08)" }} />
            <Link href="/" style={{ color: "#64748b", fontSize: "0.8rem", textDecoration: "none" }}>← View Site</Link>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
          <ModuleView moduleId={activeModule} />
        </main>
      </div>
    </div>
  );
}

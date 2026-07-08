"use client";
import Link from "next/link";
import { Clock } from "lucide-react";

const blogs = [
  {
    category: "AI",
    date: "Dec 15, 2024",
    readTime: "5 min",
    title: "The Future of AI in Software Development",
    desc: "How generative AI is transforming the way we write, review, and deploy code in modern software engineering.",
    color: "#8b5cf6"
  },
  {
    category: "Web Dev",
    date: "Dec 10, 2024",
    readTime: "7 min",
    title: "Top 10 Web Development Trends for 2025",
    desc: "From server components to edge computing — the web development landscape is evolving faster than ever.",
    color: "#0ea5e9"
  },
  {
    category: "Programming",
    date: "Dec 5, 2024",
    readTime: "6 min",
    title: "Python vs JavaScript: Which Should You Learn First?",
    desc: "A comprehensive guide for beginners on choosing the right first programming language for their career goals.",
    color: "#f59e0b"
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      style={{
        padding: "2rem 2rem", // Standardized spacing
        background: "#f8fafc",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ 
            color: "#ea580c", 
            fontSize: "0.75rem", 
            fontWeight: 700, 
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem"
          }}>
            TECH BLOG
          </div>
          <h2 style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: "1rem"
          }}>
            Stay Ahead with Tech Insights
          </h2>
          <p style={{ color: "#475569", fontSize: "0.95rem", maxWidth: "600px", margin: "0 auto" }}>
            Expert articles on AI, web development, programming, cybersecurity, and career guidance.
          </p>
        </div>

        {/* Blog Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
          gap: "2rem",
          marginBottom: "3rem"
        }}>
          {blogs.map((blog, i) => (
            <div key={i} style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.05)",
              borderRadius: "16px",
              padding: "2rem",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              height: "100%"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.06)"; // Softened
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
            >
              {/* Meta */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <span style={{ 
                  background: `${blog.color}15`, 
                  color: blog.color, 
                  padding: "0.3rem 0.8rem", 
                  borderRadius: "50px",
                  fontSize: "0.75rem",
                  fontWeight: 700
                }}>
                  {blog.category}
                </span>
                <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>{blog.date}</span>
                <span style={{ color: "#94a3b8", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "4px" }}>
                  <Clock size={12} /> {blog.readTime}
                </span>
              </div>
              
              <h3 style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#0f172a",
                lineHeight: 1.4,
                marginBottom: "1rem"
              }}>
                {blog.title}
              </h3>
              
              <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.6, flexGrow: 1, marginBottom: "1.5rem" }}>
                {blog.desc}
              </p>

              <div style={{ color: "#ea580c", fontSize: "0.9rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}>
                Read Article <span style={{ fontSize: "1.1rem" }}>→</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/blog" style={{
            background: "transparent",
            border: "1px solid #ea580c",
            color: "#ea580c",
            padding: "0.9rem 2.5rem", // Standard premium padding
            borderRadius: "6px",
            fontSize: "0.95rem",
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#ea580c";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#ea580c";
            e.currentTarget.style.transform = "translateY(0)";
          }}
          >
            View All Articles
          </Link>
        </div>

      </div>
    </section>
  );
}

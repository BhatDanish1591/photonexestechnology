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
        background: "transparent",
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
            <Link 
              key={i} 
              href="/blog"
              className="group relative flex flex-col bg-white/70 backdrop-blur-3xl border border-white/60 rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-8 no-underline cursor-pointer"
            >
              {/* Glowing Orb */}
              <div 
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ background: blog.color }}
              />

              {/* Meta */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <span 
                  className="px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-all duration-300 group-hover:shadow-md"
                  style={{ background: `${blog.color}15`, color: blog.color, border: `1px solid ${blog.color}30` }}
                >
                  {blog.category}
                </span>
                <span className="text-slate-500 text-xs font-medium">{blog.date}</span>
                <span className="text-slate-500 text-xs font-medium flex items-center gap-1.5">
                  <Clock size={12} /> {blog.readTime}
                </span>
              </div>
              
              <h3 className="font-sans text-xl font-extrabold text-slate-900 leading-snug mb-4 transition-colors duration-300 group-hover:text-purple-700 relative z-10">
                {blog.title}
              </h3>
              
              <p className="text-slate-600 text-[0.95rem] leading-relaxed flex-grow mb-8 relative z-10">
                {blog.desc}
              </p>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100/50 relative z-10">
                <span className="font-bold text-sm tracking-wide text-orange-600 transition-colors duration-300">
                  Read Article
                </span>
                <span className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
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

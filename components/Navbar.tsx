"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Portfolios", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll(); // Check initial scroll position on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-400 ${
          scrolled 
            ? "bg-[#eef2f6] shadow-[6px_6px_14px_#d0d4d8,-6px_-6px_14px_#ffffff] py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 no-underline z-50" 
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setMobileOpen(false);
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
              {/* Row: SVG + Photonexes */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 p-2.5 rounded-full text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <Shield size={22} className="text-white" />
                </span>
                <span style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "1.7rem",
                  fontWeight: 800,
                  lineHeight: 1,
                  background: "linear-gradient(90deg, #9333ea, #ec4899, #eab308)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Photonexes
                </span>
              </div>
              {/* Slogan centered below */}
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {["INNOVATION", "TECHNOLOGY", "CONNECTIVITY"].map((word, i) => (
                  <span key={i} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{
                      fontSize: "0.58rem",
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                      lineHeight: 1,
                      background: i === 0
                        ? "linear-gradient(90deg, #9333ea, #ec4899)"
                        : i === 1
                        ? "linear-gradient(90deg, #ec4899, #f97316)"
                        : "linear-gradient(90deg, #f97316, #eab308)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                      {word}{i < 2 ? "." : "."}
                    </span>
                    {i < 2 && <span style={{ display: "inline-block", width: "3px" }} />}
                  </span>
                ))}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (isActive) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`px-4 py-2 rounded-full font-bold text-sm tracking-wide transition-all duration-300 flex items-center group ${
                    isActive 
                      ? "neu-inset text-[#6366f1]" 
                      : "text-[#0f172a] hover:text-[#6366f1]"
                  }`}
                >
                  <span>{link.label}</span>
                  <svg 
                    className={`transition-[opacity,transform] duration-300 w-3.5 h-3.5 ml-1 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'}`}
                    style={{ willChange: 'transform, opacity' }}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <Link 
              href="/contact" 
              className="flex items-center gap-2 bg-slate-900 text-white px-7 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[#ea580c] hover:shadow-[0_8px_20px_-5px_rgba(234,88,12,0.4)] group/btn"
            >
              Enquire Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden z-50 text-slate-800 p-2 focus:outline-none" 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      <div 
        className={`fixed inset-0 z-[9997] bg-slate-900/60 backdrop-blur-md transition-opacity duration-400 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Modern Premium Sidebar */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] z-[9998] bg-[#eef2f6] shadow-[-20px_0_40px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden flex flex-col pt-[100px] pb-8 px-6 overflow-hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Decorative Glowing Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="flex flex-col h-full overflow-y-auto relative z-10 scrollbar-hide">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => {
               const isActive = pathname === link.href;
               return (
                 <Link 
                   key={link.label}
                   href={link.href} 
                   className={`group flex items-center justify-between px-4 py-4 rounded-2xl text-xl font-extrabold tracking-tight transition-all duration-300 ${
                     isActive 
                      ? "neu-inset text-[#6366f1]" 
                      : "text-[#0f172a] hover:text-[#6366f1] hover:translate-x-2"
                   }`}
                   style={{ 
                     transform: mobileOpen ? 'translateX(0)' : 'translateX(30px)',
                     opacity: mobileOpen ? 1 : 0,
                     transitionDelay: `${index * 50 + 100}ms`
                   }}
                   onClick={(e) => {
                     if (isActive) {
                       e.preventDefault();
                       window.scrollTo({ top: 0, behavior: "smooth" });
                     }
                     setMobileOpen(false);
                   }}
                 >
                   <span>{link.label}</span>
                   <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-purple-50 text-purple-600 scale-100" : "bg-transparent text-slate-400 scale-0 group-hover:scale-100 group-hover:bg-purple-50 group-hover:text-purple-600"}`}>
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                   </span>
                 </Link>
               );
            })}
          </div>
          
          <div className="mt-auto pt-8 flex flex-col gap-4">
            <div 
              style={{ 
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
                transitionDelay: `${navLinks.length * 50 + 150}ms`,
                transitionDuration: "500ms"
              }}
              className="px-4 text-center mb-2"
            >
              <p className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-widest">Get in Touch</p>
              <p className="text-slate-900 font-extrabold text-lg">+91-7006291591</p>
            </div>

            <Link 
              href="/contact" 
              className="neu-btn px-8 py-4 font-bold text-lg w-full text-center flex items-center justify-center gap-2 group"
              style={{ 
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
                transitionDelay: `${navLinks.length * 50 + 200}ms`
              }}
              onClick={() => setMobileOpen(false)}
            >
              Enquire Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

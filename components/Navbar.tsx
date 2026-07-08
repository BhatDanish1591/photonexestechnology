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
        className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-sm border-b border-gray-100 py-4 md:py-5"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline z-50" onClick={() => setMobileOpen(false)}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
              {/* Row: SVG + Photonexes */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 p-2.5 rounded-full text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <Shield size={22} className="text-white" />
                </span>
                <span style={{
                  fontFamily: "Inter, sans-serif",
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
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative font-medium text-sm tracking-wide transition-colors duration-300 group ${
                    isActive ? "text-purple-600" : "text-slate-600 hover:text-purple-600"
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} 
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <Link 
              href="/contact" 
              className="px-6 py-2.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Enquire Now
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
        className={`fixed inset-0 z-[9997] bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-[400px] z-[9998] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden flex flex-col pt-24 pb-8 px-8 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 overflow-y-auto">
          {navLinks.map((link, index) => {
             const isActive = pathname === link.href;
             return (
               <Link 
                 key={link.label}
                 href={link.href} 
                 className={`text-xl font-bold tracking-tight transition-all duration-300 border-b border-gray-100 pb-4 ${
                   isActive ? "text-purple-600 pl-2 border-purple-200" : "text-slate-800 hover:text-purple-600 hover:pl-2"
                 }`}
                 style={{ 
                   transform: mobileOpen ? 'translateX(0)' : 'translateX(20px)',
                   opacity: mobileOpen ? 1 : 0,
                   transitionDelay: `${index * 40 + 100}ms`
                 }}
                 onClick={() => setMobileOpen(false)}
               >
                 {link.label}
               </Link>
             );
          })}
          
          <Link 
            href="/contact" 
            className="mt-6 px-8 py-4 rounded-full font-bold text-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl shadow-purple-500/20 active:scale-95 transition-all duration-300 w-full text-center"
            style={{ 
              transform: mobileOpen ? 'translateX(0)' : 'translateX(20px)',
              opacity: mobileOpen ? 1 : 0,
              transitionDelay: `${navLinks.length * 40 + 100}ms`
            }}
            onClick={() => setMobileOpen(false)}
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </>
  );
}

"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Shield } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col">
            <div className="mb-6">
              {/* Logo */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 p-2.5 rounded-full text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <Shield size={20} className="text-white" />
                  </span>
                  <span style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "1.7rem",
                    fontWeight: 900,
                    lineHeight: 1,
                    background: "linear-gradient(90deg, #9333ea, #ec4899, #eab308)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Photonexes
                  </span>
                </div>
                {/* Slogan */}
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" }}>
                  {["INNOVATION", "TECHNOLOGY", "CONNECTIVITY"].map((word, i) => (
                    <span key={i} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{
                        fontSize: "0.6rem",
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
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Delivering enterprise-grade software, intuitive designs, and scalable cloud solutions for modern businesses.
            </p>

            <div className="flex gap-3">
              {[
                { Icon: FaFacebook, href: "https://facebook.com/photonexes" },
                { Icon: FaTwitter, href: "https://twitter.com/photonexes" },
                { Icon: FaLinkedin, href: "https://www.linkedin.com/company/photonexes-technologies/" },
                { Icon: FaInstagram, href: "https://www.instagram.com/photonexes?igsh=MThuNnYxanVmYzA3aw==" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#ea580c] hover:text-white hover:border-[#ea580c] transition-all duration-300 hover:-translate-y-1"
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 text-lg font-black mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-[#ea580c] after:rounded-full">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Industries", href: "/industries" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-slate-500 hover:text-[#ea580c] text-[0.95rem] font-bold flex items-center gap-2 group transition-colors duration-300"
                  >
                    <span className="text-[#ea580c] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">›</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 text-lg font-black mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-[#2dd4bf] after:rounded-full">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Web Development", href: "/services" },
                { label: "Mobile App Solutions", href: "/services" },
                { label: "Enterprise Software", href: "/services" },
                { label: "UI/UX Design", href: "/services" },
                { label: "IOT Development", href: "/services" }
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-slate-500 hover:text-[#2dd4bf] text-[0.95rem] font-bold flex items-center gap-2 group transition-colors duration-300"
                  >
                    <span className="text-[#2dd4bf] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">›</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-900 text-lg font-black mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-[#0284c7] after:rounded-full">
              Reach Us
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#0284c7] group-hover:border-[#0284c7] transition-colors duration-300">
                  <MapPin size={16} className="text-[#0284c7] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-slate-900 font-black text-sm mb-1">Location</div>
                  <div className="text-slate-500 text-[0.9rem] leading-relaxed font-medium">Near VIP Road<br/>Zirakpur, Punjab (IN)</div>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#0284c7] group-hover:border-[#0284c7] transition-colors duration-300">
                  <Phone size={16} className="text-[#0284c7] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-slate-900 font-black text-sm mb-1">Phone</div>
                  <div className="text-slate-500 text-[0.9rem] font-bold">+91-7006291591</div>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#0284c7] group-hover:border-[#0284c7] transition-colors duration-300">
                  <Mail size={16} className="text-[#0284c7] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-slate-900 font-black text-sm mb-1">Email</div>
                  <div className="text-slate-500 text-[0.9rem] font-bold">contact@photonexes.in</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 font-bold text-sm text-center md:text-left">
            &copy; 2026 Photonexes Technologies. All Rights Reserved.
          </div>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="text-slate-400 hover:text-[#ea580c] font-bold text-sm transition-colors">Privacy Policy</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

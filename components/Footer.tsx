"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Shield } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-50 pt-16 pb-6 border-t-4 border-orange-600">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              {/* Logo: same as navbar */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-start" }}>
                {/* Row: SVG + Photonexes */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 p-2 rounded-full text-white shadow-lg flex items-center justify-center">
                    <Shield size={20} className="text-white" />
                  </span>
                  <span style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    background: "linear-gradient(90deg, #c084fc, #f472b6, #fde68a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Photonexes
                  </span>
                </div>
                {/* Slogan */}
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  {["INNOVATION", "TECHNOLOGY", "CONNECTIVITY"].map((word, i) => (
                    <span key={i} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{
                        fontSize: "0.55rem",
                        fontWeight: 800,
                        letterSpacing: "0.15em",
                        lineHeight: 1,
                        background: i === 0
                          ? "linear-gradient(90deg, #c084fc, #f472b6)"
                          : i === 1
                          ? "linear-gradient(90deg, #f472b6, #fb923c)"
                          : "linear-gradient(90deg, #fb923c, #fbbf24)",
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
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Delivering next-generation IT solutions and enterprise software development to empower your digital transformation journey.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FaFacebook, href: "https://facebook.com/photonexes" },
                { Icon: FaTwitter, href: "https://twitter.com/photonexes" },
                { Icon: FaLinkedin, href: "https://linkedin.com/company/photonexes" },
                { Icon: FaInstagram, href: "https://www.instagram.com/photonexes?igsh=MThuNnYxanVmYzA3aw==" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-orange-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-orange-600">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Industries", href: "/industries" },
                { label: "Courses", href: "/courses" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-sky-400 text-sm flex items-center gap-2 group transition-colors duration-200"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" /> 
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-orange-600">
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
                    className="text-slate-400 hover:text-sky-400 text-sm flex items-center gap-2 group transition-colors duration-200"
                  >
                    <ArrowRight size={14} className="opacity-50 group-hover:translate-x-1 transition-transform duration-200" /> 
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-orange-600">
              Contact Us
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-start">
                <MapPin size={20} className="text-orange-600 mt-1 shrink-0" />
                <div>
                  <div className="text-slate-200 font-semibold text-sm mb-1">Location</div>
                  <div className="text-slate-400 text-sm leading-relaxed">chandighar zirakpur</div>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Phone size={20} className="text-orange-600 mt-1 shrink-0" />
                <div>
                  <div className="text-slate-200 font-semibold text-sm mb-1">Phone</div>
                  <div className="text-slate-400 text-sm">7006291591</div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail size={20} className="text-orange-600 mt-1 shrink-0" />
                <div>
                  <div className="text-slate-200 font-semibold text-sm mb-1">Email</div>
                  <div className="text-slate-400 text-sm">contact@photonexes.com</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm text-center md:text-left">
            &copy; 2026 Photonexes Technologies. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

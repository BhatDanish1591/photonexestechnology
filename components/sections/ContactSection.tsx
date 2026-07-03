"use client";
import { Shield } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 overflow-hidden relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        
        {/* Left Side: Logo & Text with Watermark */}
        <div className="md:w-1/2 relative text-center md:text-left" data-aos="fade-right">
          {/* Watermark Logo */}
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-purple-200 opacity-50 pointer-events-none">
            <Shield size={180} />
          </span>

          {/* Text content */}
          <div className="mb-4 flex justify-center relative z-10">
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
              {/* Row: SVG + Photonexes */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 p-2.5 rounded-full text-white shadow-lg flex items-center justify-center">
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
              {/* Slogan */}
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
          </div>
          <p className="text-gray-700 text-lg mb-4 relative z-10">
            Have questions or want to get started with Photonexes? Fill out the form and our team will get back to you promptly.
          </p>
          <p className="text-gray-700 text-lg relative z-10">
            Accelerate your digital transformation, build next-generation software solutions, and empower your business today.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg relative z-10" data-aos="fade-left">
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Your Name" />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Your Email" />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="phone">Phone *</label>
              <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Your Phone" />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" name="submit" className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

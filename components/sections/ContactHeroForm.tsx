"use client";
import { useState } from "react";
import { ArrowDown, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactHeroForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    setStatus("loading");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            access_key: "3bf0b3cf-d842-42eb-9543-05030f042a6c",
            ...formData,
            subject: "New Contact Form Submission - Photonexes"
        })
      });
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        const errorData = await response.json().catch(() => null);
        console.error("Web3Forms API Error:", response.status, errorData);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 6000);
      }
    } catch (error) {
      console.error("Web3Forms Network Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section className="relative bg-slate-50 pt-[6rem] lg:pt-[8rem] pb-[10rem] md:pb-[5rem] overflow-hidden">
      {/* Success/Error Popup */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] bg-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 font-bold"
          >
            <CheckCircle2 size={24} />
            Message Submitted Successfully!
          </motion.div>
        )}
        {status === "error" && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] bg-red-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 font-bold"
          >
            <AlertCircle size={24} />
            Something went wrong. Please try again.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:pt-8">
        
        {/* Left Side: Content */}
        <div>
          <h1 className="text-[clamp(3rem,5vw,4.5rem)] font-extrabold text-[#1f2937] leading-[1.1] mb-6 tracking-tight">
            Collaborate <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#0284c7]">With Us!</span>
          </h1>
          
          <p className="text-[#1f2937] text-xl leading-[1.6] font-medium mb-10 max-w-[500px]">
            Drop us a message, we’re always excited to connect with creators, clients, and collaborators.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full relative z-10">
          <form onSubmit={handleSubmit} className="space-y-4 relative">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*" 
                required
                className="w-full px-5 py-4 neu-inset focus:outline-none text-gray-700 font-medium placeholder-gray-400"
              />
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name*" 
                required
                className="w-full px-5 py-4 neu-inset focus:outline-none text-gray-700 font-medium placeholder-gray-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*" 
                required
                className="w-full px-5 py-4 neu-inset focus:outline-none text-gray-700 font-medium placeholder-gray-400"
              />
              
              <div className="relative flex">
                <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center px-4 bg-gray-50 border-r border-gray-100 rounded-l-xl z-10">
                  <span className="mr-2 text-lg">🇮🇳</span>
                  <span className="text-gray-600 font-semibold text-sm">+91</span>
                  <ArrowDown size={14} className="text-gray-400 ml-1" />
                </div>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*" 
                  required
                  className="w-full pl-[110px] pr-5 py-4 neu-inset focus:outline-none text-gray-700 font-medium placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How Can We Help?*" 
                rows={4}
                required
                className="w-full px-5 py-4 neu-inset focus:outline-none text-gray-700 font-medium placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center mt-4">
              <ReCAPTCHA
                sitekey="6LfIzEktAAAAAId922aJJIBEw7C0xuC-gd8er7_o"
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>

            <div className="flex justify-center mt-6">
              <button 
                type="submit" 
                disabled={status === "loading" || !captchaToken}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-slate-900 hover:bg-[#ea580c] hover:shadow-[0_8px_20px_-5px_rgba(234,88,12,0.4)] text-white font-bold rounded-full shadow-lg transition-all uppercase tracking-wide text-sm disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto min-w-[250px]"
              >
                {status === "loading" ? "Sending..." : "Submit Message"}
                {!status.includes("loading") && <ArrowRight size={18} strokeWidth={2.5} />}
              </button>
            </div>
            
          </form>
        </div>

      </div>

      {/* Bottom Curve Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180 leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px]" style={{ fill: "#ffffff" }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center justify-center rounded-full p-2" style={{ background: "#ffffff" }}>
        <button 
          onClick={scrollToNext}
          className="w-[50px] h-[50px] bg-emerald-500 border-none rounded-full flex items-center justify-center text-white cursor-pointer shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] transition-transform duration-300 hover:translate-y-1"
          aria-label="Scroll down"
        >
          <ArrowDown size={28} strokeWidth={2.5} />
        </button>
      </div>

    </section>
  );
}

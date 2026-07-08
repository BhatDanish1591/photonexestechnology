"use client";
import { ArrowDown, ArrowRight, ShieldCheck, Award } from "lucide-react";

export default function ContactHeroForm() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <section style={{ 
      position: "relative", 
      background: "#f2f6f5", 
      paddingTop: "10rem",
      paddingBottom: "5rem",
      overflow: "hidden"
    }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div>
          <h1 className="text-[clamp(3rem,5vw,4.5rem)] font-extrabold text-[#1f2937] leading-[1.1] mb-6">
            Collaborate <span style={{ color: "#10b981" }}>With</span><br/>Us!
          </h1>
          
          <p className="text-[#1f2937] text-xl leading-[1.6] font-medium mb-10 max-w-[500px]">
            Drop us a message, we’re always excited to connect with creators, clients, and collaborators.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full relative z-10">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name*" 
                required
                className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 font-medium placeholder-gray-400 shadow-sm"
              />
              <input 
                type="text" 
                placeholder="Company Name*" 
                required
                className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 font-medium placeholder-gray-400 shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="email" 
                placeholder="Email*" 
                required
                className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 font-medium placeholder-gray-400 shadow-sm"
              />
              
              <div className="relative flex">
                {/* Custom India Flag Dropdown mock */}
                <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center px-4 bg-gray-50 border-r border-gray-100 rounded-l-xl z-10">
                  <span className="mr-2 text-lg">🇮🇳</span>
                  <span className="text-gray-600 font-semibold text-sm">+91</span>
                  <ArrowDown size={14} className="text-gray-400 ml-1" />
                </div>
                <input 
                  type="tel" 
                  placeholder="Phone Number*" 
                  required
                  className="w-full pl-[110px] pr-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 font-medium placeholder-gray-400 shadow-sm"
                />
              </div>
            </div>

            <div>
              <textarea 
                placeholder="How Can We Help?*" 
                rows={5}
                required
                className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 font-medium placeholder-gray-400 shadow-sm resize-none"
              ></textarea>
            </div>

            <div>
              <button 
                type="submit" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#312e81] text-white font-bold rounded-lg shadow-lg hover:bg-[#1e1b4b] transition-colors uppercase tracking-wide text-sm"
              >
                Submit Message <ArrowRight size={18} strokeWidth={2.5} />
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

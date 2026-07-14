"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact-info" className="py-10 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* Left Side: Map */}
          <div className="w-full min-h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative">
            {/* Embedding a realistic placeholder map via iframe */}
            <iframe 
              src="https://maps.google.com/maps?q=VIP%20Road,%20Zirakpur,%20Punjab&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: "absolute", top: 0, left: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>

          {/* Right Side: Contact Cards */}
          <div className="flex flex-col gap-6 justify-between h-full">
            
            {/* Email Card */}
            <div className="group bg-[#f4f7f9] p-8 rounded-[24px] flex items-center gap-6 border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_24px_rgb(0,0,0,0.05)] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_8px_24px_rgb(0,0,0,0.09)] transition-all duration-300">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-[#ea580c]" size={28} strokeWidth={2} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-1">E-Mail</h3>
                <p className="text-[#5f6c7b] font-medium text-[0.95rem]">
                  info@photonexes.com <br /> hr@photonexes.com
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-[#f4f7f9] p-8 rounded-[24px] flex items-center gap-6 border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_24px_rgb(0,0,0,0.05)] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_8px_24px_rgb(0,0,0,0.09)] transition-all duration-300">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-[#2dd4bf]" size={28} strokeWidth={2} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-1">Call us at</h3>
                <p className="text-[#5f6c7b] font-medium text-[0.95rem]">
                  +91-7006291591
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="group bg-[#f4f7f9] p-8 rounded-[24px] flex items-center gap-6 border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_24px_rgb(0,0,0,0.05)] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_8px_24px_rgb(0,0,0,0.09)] transition-all duration-300">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-[#0284c7]" size={28} strokeWidth={2} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-1">Reach us at</h3>
                <p className="text-[#5f6c7b] font-medium text-[0.95rem] leading-relaxed">
                  Near VIP Road<br />
                  Zirakpur, Punjab
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

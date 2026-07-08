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
          <div className="flex flex-col gap-4 justify-between h-full">
            
            {/* Email Card */}
            <div className="bg-[#fff1f2] p-8 rounded-2xl flex items-center gap-6 shadow-sm border border-[#ffe4e6] hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full border-2 border-[#fda4af] flex items-center justify-center flex-shrink-0 bg-white/50">
                <Mail className="text-[#be123c]" size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">E-Mail</h3>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  info@photonexes.com <span className="text-gray-300 mx-2">|</span> hr@photonexes.com
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#ecfdf5] p-8 rounded-2xl flex items-center gap-6 shadow-sm border border-[#d1fae5] hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full border-2 border-[#6ee7b7] flex items-center justify-center flex-shrink-0 bg-white/50">
                <Phone className="text-[#059669]" size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Call us at</h3>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  +91-7006291591
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#eff6ff] p-8 rounded-2xl flex items-center gap-6 shadow-sm border border-[#dbeafe] hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full border-2 border-[#93c5fd] flex items-center justify-center flex-shrink-0 bg-white/50">
                <MapPin className="text-[#4338ca]" size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Reach us at</h3>
                <p className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">
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

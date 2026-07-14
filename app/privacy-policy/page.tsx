"use client";
import { Shield, Mail } from "lucide-react";
import { motion } from "framer-motion";
import CustomHeroSection from "@/components/sections/CustomHeroSection";



export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      
      <CustomHeroSection 
        title="Privacy Policy" 
        description="Learn how we collect, use, and protect your personal information when you use our services."
        imageSrc="/heroes/hero_blogs_1783476408570.png"
        nextSectionColor="#f8fafc"
        badgeText="Legal Center"
      />

      {/* Body: Content */}
      <section className="pt-0 pb-24 relative z-10 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

          {/* Main Document Container */}
          <article className="w-full bg-white border border-slate-100 rounded-[32px] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2dd4bf] to-[#0284c7] flex items-center justify-center text-white shadow-lg">
                <Shield size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">Privacy Policy</h2>
            </div>
            
            <div className="flex gap-4 text-[0.85rem] font-bold text-slate-400 mb-10 pb-10 border-b border-slate-100 uppercase tracking-wider pl-16">
              <span>Updated: July 3, 2026</span>
              <span>•</span>
              <span>Effective: July 3, 2026</span>
            </div>

            {/* Overview */}
            <section id="p-overview" className="mb-12 pb-12 border-b border-slate-100">
              <p className="text-slate-600 text-[1.1rem] leading-relaxed font-medium mb-6">
                Photonexes Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates{" "}
                <strong className="text-slate-900">photonexes.in</strong> and provides comprehensive software solution services, IT training, and placement assistance.
                This Privacy Policy describes how we collect, use, store, and share information about you when you use
                our services. By accessing or using our website, you agree to the collection and use of information in
                accordance with this policy.
              </p>
              <p className="text-slate-600 text-[1.1rem] leading-relaxed font-medium">
                We are committed to protecting your personal data in compliance with applicable data protection laws,
                including the Information Technology Act, 2000 (India) and its associated rules.
              </p>
            </section>

            {/* Section 1 */}
            <section id="p-information-we-collect" className="mb-12 pb-12 border-b border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-[1rem]">1</span>
                Information We Collect
              </h2>
              <h3 className="text-lg font-black text-slate-800 mb-4">1.1 Personal Information</h3>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">When you register for a course, apply for an internship, or contact us, we may collect:</p>
              <ul className="grid gap-3 mb-10">
                {["Full name and email address", "Phone number and location", "Educational background and qualifications", "Resume or CV when applying for internships", "Payment information (processed securely via third-party gateways)"].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-600 font-bold bg-[#f4f7f9] p-5 rounded-2xl">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="text-lg font-black text-slate-800 mb-4">1.2 Usage Data</h3>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-8">
                We automatically collect certain information when you visit our website, including your IP address, browser type and version, pages you visit, time and date of visits, time spent on each page, and referring URLs. This data is used solely for improving our services.
              </p>
              <h3 className="text-lg font-black text-slate-800 mb-4">1.3 Cookies & Tracking Technologies</h3>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. See Section 6 for our full Cookies Policy.
              </p>
            </section>

            {/* Section 2 */}
            <section id="p-how-we-use" className="mb-12 pb-12 border-b border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-[1rem]">2</span>
                How We Use Your Information
              </h2>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-8">We use the information we collect for the following purposes:</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Service Delivery", desc: "To process enrollments, provide course materials, send training updates, and deliver placement assistance." },
                  { title: "Communication", desc: "To send newsletters, promotional offers, and updates about new courses." },
                  { title: "Analytics & Improvement", desc: "To analyze aggregated, anonymized usage data to improve our website." },
                  { title: "Legal & Security", desc: "To comply with applicable laws, detect and prevent fraud." },
                ].map((item, i) => (
                  <div key={i} className="bg-[#f4f7f9] p-8 rounded-[24px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-100 group">
                    <div className="font-black text-xl text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">{item.title}</div>
                    <div className="text-slate-500 text-[0.95rem] leading-relaxed font-medium">{item.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="p-data-security" className="mb-12 pb-12 border-b border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-[1rem]">3</span>
                Data Security
              </h2>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-8">
                We implement industry-standard technical and organizational security measures to protect your personal data, including SSL/TLS encryption for all data in transit, secure access-controlled servers, and regular security audits.
              </p>
              <div className="bg-teal-50 border border-teal-100 p-8 rounded-[24px]">
                <strong className="text-slate-900 font-black text-lg block mb-2">Data Retention</strong> 
                <span className="text-teal-800 font-medium leading-relaxed">We retain your personal information only for as long as necessary to fulfill the purposes in this policy.</span>
              </div>
            </section>

            {/* Section 4 */}
            <section id="p-sharing" className="mb-12 pb-12 border-b border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-[1rem]">4</span>
                Sharing Your Information
              </h2>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">
                We do <strong className="text-slate-900 font-black">not</strong> sell your personal data. We may share your information only with trusted service providers, for legal requirements, or in business transfers.
              </p>
            </section>

            {/* Section 5 */}
            <section id="p-your-rights" className="mb-12 pb-12 border-b border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-[1rem]">5</span>
                Your Rights
              </h2>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">You have the right to access, rectify, erase, or port your personal data, as well as the right to object to processing or withdraw consent.</p>
            </section>

            {/* Section 6 */}
            <section id="p-cookies" className="mb-12 pb-12 border-b border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-[1rem]">6</span>
                Cookies Policy
              </h2>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">
                We use Essential Cookies, Analytics Cookies, and Preference Cookies to operate and improve our website.
              </p>
            </section>

            {/* Section 7 */}
            <section id="p-third-party" className="mb-12 pb-12 border-b border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-[1rem]">7</span>
                Third-Party Links
              </h2>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium">
                Our website may contain links to third-party websites. We are not responsible for their privacy practices.
              </p>
            </section>

            {/* Section 8 */}
            <section id="p-updates" className="mb-12 pb-12 border-b border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-[1rem]">8</span>
                Policy Updates
              </h2>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-4">
                We may update this Privacy Policy periodically. Your continued use of our services constitutes acceptance of those changes.
              </p>
            </section>

            {/* Section 9 */}
            <section id="p-contact" className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-[#ea580c]/10 text-[#ea580c] flex items-center justify-center text-[1rem]">9</span>
                Contact Us
              </h2>
              <div className="bg-[#f4f7f9] p-10 rounded-[32px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-100">
                <div className="font-black text-2xl mb-8 text-slate-900">Photonexes Technologies</div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                    <Mail size={24} className="text-[#ea580c]" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Email</div>
                    <a href="mailto:contact@photonexes.in" className="font-bold text-lg text-slate-700 hover:text-[#ea580c] transition-colors">contact@photonexes.in</a>
                  </div>
                </div>
              </div>
            </section>

          </article>
        </div>
      </section>
    </main>
  );
}

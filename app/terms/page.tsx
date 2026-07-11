"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, FileText, Mail, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Privacy Policy Data ---
const privacyToc = [
  { id: "p-overview", label: "Overview" },
  { id: "p-information-we-collect", label: "1. Information We Collect" },
  { id: "p-how-we-use", label: "2. How We Use Your Information" },
  { id: "p-data-security", label: "3. Data Security" },
  { id: "p-sharing", label: "4. Sharing Your Information" },
  { id: "p-your-rights", label: "5. Your Rights" },
  { id: "p-cookies", label: "6. Cookies Policy" },
  { id: "p-third-party", label: "7. Third-Party Links" },
  { id: "p-updates", label: "8. Policy Updates" },
  { id: "p-contact", label: "9. Contact Us" },
];

// --- Terms of Service Data ---
const termsToc = [
  { id: "t-overview", label: "Overview" },
  { id: "t-acceptance", label: "1. Acceptance of Terms" },
  { id: "t-services", label: "2. Description of Services" },
  { id: "t-payments", label: "3. Payments & Refunds" },
  { id: "t-ip", label: "4. Intellectual Property" },
  { id: "t-responsibilities", label: "5. User Responsibilities" },
  { id: "t-disclaimers", label: "6. Disclaimers & Liability" },
  { id: "t-termination", label: "7. Termination" },
  { id: "t-governing-law", label: "8. Governing Law" },
  { id: "t-contact", label: "9. Contact Us" },
];

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("terms");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-slate-50 overflow-hidden selection:bg-purple-500/30">
      {/* Fluid Background Animation */}
      <motion.div 
        className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[140px] pointer-events-none"
        animate={{
          background: activeTab === "privacy" ? "rgba(168, 85, 247, 0.15)" : "rgba(249, 115, 22, 0.15)",
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="fixed bottom-[-20%] left-[-10%] w-[900px] h-[900px] rounded-full blur-[140px] pointer-events-none"
        animate={{
          background: activeTab === "privacy" ? "rgba(236, 72, 153, 0.12)" : "rgba(59, 130, 246, 0.12)",
          x: [0, -60, 60, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Hero Section */}
      <div className="relative pt-[10rem] pb-12 px-4 md:px-8 max-w-[1200px] mx-auto z-10 flex flex-col items-center text-center">
        


        {/* Flow Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex items-center p-2 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8"
        >
          {/* Active Pill Background */}
          {mounted && (
            <div className="absolute inset-2 z-0 flex">
              <motion.div
                layoutId="activeTabPill"
                className={`w-1/2 h-full rounded-full shadow-md ${
                  activeTab === "privacy" 
                    ? "bg-gradient-to-r from-purple-600 to-pink-600" 
                    : "bg-gradient-to-r from-orange-600 to-red-600"
                }`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ marginLeft: activeTab === "terms" ? "50%" : "0%" }}
              />
            </div>
          )}

          <button
            onClick={() => setActiveTab("privacy")}
            className={`relative z-10 flex items-center justify-center gap-2 w-[180px] sm:w-[220px] py-3.5 rounded-full font-bold text-[0.95rem] transition-colors duration-300 ${
              activeTab === "privacy" ? "text-white" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Shield size={18} /> Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`relative z-10 flex items-center justify-center gap-2 w-[180px] sm:w-[220px] py-3.5 rounded-full font-bold text-[0.95rem] transition-colors duration-300 ${
              activeTab === "terms" ? "text-white" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <FileText size={18} /> Terms of Service
          </button>
        </motion.div>

      </div>

      {/* Body: Sidebar + Content */}
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-8 pb-24 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start z-10">

        {/* Sticky Sidebar TOC */}
        <motion.aside 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-[120px]"
        >
          <div className="bg-white/50 backdrop-blur-3xl border border-white/60 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="text-xs font-extrabold text-slate-400 tracking-widest uppercase mb-4">Table of Contents</div>
            <nav className="flex flex-col gap-1.5 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-1.5"
                >
                  {(activeTab === "privacy" ? privacyToc : termsToc).map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`group flex items-center px-4 py-2.5 rounded-xl text-[0.9rem] font-semibold text-slate-500 hover:bg-white/80 transition-all duration-300 ${
                        activeTab === "privacy" ? "hover:text-purple-600" : "hover:text-orange-600"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-slate-300 mr-3 transition-colors ${
                        activeTab === "privacy" ? "group-hover:bg-purple-500" : "group-hover:bg-orange-500"
                      }`} />
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              </AnimatePresence>
            </nav>
          </div>
        </motion.aside>

        {/* Main Document Container */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 min-w-0 w-full bg-white/60 backdrop-blur-3xl border border-white/60 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            
            {/* ======================= PRIVACY POLICY CONTENT ======================= */}
            {activeTab === "privacy" && (
              <motion.div
                key="privacy-content"
                initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                    <Shield size={24} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Privacy Policy</h2>
                </div>
                <div className="flex gap-4 text-sm font-bold text-slate-400 mb-10 pb-10 border-b border-slate-200/50 pl-16">
                  <span>Updated: July 3, 2026</span>
                  <span>•</span>
                  <span>Effective: July 3, 2026</span>
                </div>

                {/* Overview */}
                <section id="p-overview" className="mb-12 pb-12 border-b border-slate-200/50">
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">
                    Photonexes Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates{" "}
                    <strong className="text-slate-900">photonexes.in</strong> and provides comprehensive software solution services, IT training, and placement assistance.
                    This Privacy Policy describes how we collect, use, store, and share information about you when you use
                    our services. By accessing or using our website, you agree to the collection and use of information in
                    accordance with this policy.
                  </p>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium">
                    We are committed to protecting your personal data in compliance with applicable data protection laws,
                    including the Information Technology Act, 2000 (India) and its associated rules.
                  </p>
                </section>

                {/* Section 1 */}
                <section id="p-information-we-collect" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm">1</span>
                    Information We Collect
                  </h2>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">1.1 Personal Information</h3>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-4">When you register for a course, apply for an internship, or contact us, we may collect:</p>
                  <ul className="grid gap-3 mb-8">
                    {["Full name and email address", "Phone number and location", "Educational background and qualifications", "Resume or CV when applying for internships", "Payment information (processed securely via third-party gateways)"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 font-medium bg-white/40 border border-white/50 p-4 rounded-xl">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">1.2 Usage Data</h3>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-8">
                    We automatically collect certain information when you visit our website, including your IP address, browser type and version, pages you visit, time and date of visits, time spent on each page, and referring URLs. This data is used solely for improving our services.
                  </p>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">1.3 Cookies &amp; Tracking Technologies</h3>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium">
                    We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. See Section 6 for our full Cookies Policy.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="p-how-we-use" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm">2</span>
                    How We Use Your Information
                  </h2>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">We use the information we collect for the following purposes:</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: "Service Delivery", desc: "To process enrollments, provide course materials, send training updates, and deliver placement assistance." },
                      { title: "Communication", desc: "To send newsletters, promotional offers, and updates about new courses." },
                      { title: "Analytics & Improvement", desc: "To analyze aggregated, anonymized usage data to improve our website." },
                      { title: "Legal & Security", desc: "To comply with applicable laws, detect and prevent fraud." },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/50 backdrop-blur-sm border border-white/60 p-6 rounded-2xl hover:shadow-md transition-shadow group">
                        <div className="font-extrabold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">{item.title}</div>
                        <div className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 3 */}
                <section id="p-data-security" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm">3</span>
                    Data Security
                  </h2>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">
                    We implement industry-standard technical and organizational security measures to protect your personal data, including SSL/TLS encryption for all data in transit, secure access-controlled servers, and regular security audits.
                  </p>
                  <div className="bg-purple-50/50 border border-purple-100 p-6 rounded-2xl mb-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 blur-2xl rounded-full" />
                    <strong className="text-slate-900 font-extrabold block mb-2 relative z-10">Data Retention:</strong> 
                    <span className="text-slate-600 font-medium relative z-10">We retain your personal information only for as long as necessary to fulfill the purposes in this policy.</span>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="p-sharing" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm">4</span>
                    Sharing Your Information
                  </h2>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">
                    We do <strong className="text-slate-900">not</strong> sell your personal data. We may share your information only with trusted service providers, for legal requirements, or in business transfers.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="p-your-rights" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm">5</span>
                    Your Rights
                  </h2>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">You have the right to access, rectify, erase, or port your personal data, as well as the right to object to processing or withdraw consent.</p>
                </section>

                {/* Section 6 */}
                <section id="p-cookies" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm">6</span>
                    Cookies Policy
                  </h2>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">
                    We use Essential Cookies, Analytics Cookies, and Preference Cookies to operate and improve our website.
                  </p>
                </section>

                {/* Section 7 */}
                <section id="p-third-party" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm">7</span>
                    Third-Party Links
                  </h2>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium">
                    Our website may contain links to third-party websites. We are not responsible for their privacy practices.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="p-updates" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm">8</span>
                    Policy Updates
                  </h2>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-4">
                    We may update this Privacy Policy periodically. Your continued use of our services constitutes acceptance of those changes.
                  </p>
                </section>

                {/* Section 9 */}
                <section id="p-contact" className="mb-12">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm">9</span>
                    Contact Us
                  </h2>
                  <div className="bg-white/40 border border-white/60 p-8 rounded-3xl shadow-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-colors duration-500" />
                    
                    <div className="relative z-10">
                      <div className="font-extrabold text-xl mb-6 text-slate-900">Photonexes Technologies</div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                          <Mail size={16} className="text-purple-600" />
                        </div>
                        <div>
                          <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-0.5">Email</div>
                          <a href="mailto:contact@photonexes.in" className="font-medium text-slate-700 hover:text-purple-600 transition-colors">contact@photonexes.in</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {/* ======================= TERMS OF SERVICE CONTENT ======================= */}
            {activeTab === "terms" && (
              <motion.div
                key="terms-content"
                initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg">
                    <FileText size={24} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Terms of Service</h2>
                </div>
                <div className="flex gap-4 text-sm font-bold text-slate-400 mb-10 pb-10 border-b border-slate-200/50 pl-16">
                  <span>Updated: July 3, 2026</span>
                  <span>•</span>
                  <span>Effective: July 3, 2026</span>
                </div>

                {/* Overview */}
                <section id="t-overview" className="mb-12 pb-12 border-b border-slate-200/50">
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">
                    Welcome to <strong className="text-slate-900">Photonexes Technologies</strong>. These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and Photonexes Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), governing your access to and use of our website, training programs, software development services, internship programs, and placement assistance.
                  </p>
                  <div className="mt-8 bg-orange-50/50 border border-orange-200/60 p-6 rounded-2xl flex gap-4 items-start relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/40 blur-2xl rounded-full" />
                    <div className="w-1 h-full rounded-full bg-orange-500 self-stretch shrink-0 relative z-10" />
                    <p className="text-orange-900 font-medium text-[0.95rem] leading-relaxed m-0 relative z-10">
                      <strong className="font-extrabold">Important:</strong> These Terms were last updated on July 3, 2026. We recommend reviewing this page periodically for any changes.
                    </p>
                  </div>
                </section>

                {/* Section 1 */}
                <section id="t-acceptance" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-sm">1</span>
                    Acceptance of Terms
                  </h2>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">1.1 Agreement</h3>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-8 bg-white/40 border border-white/50 p-4 rounded-xl">
                    By accessing or using our services, you agree to be bound by these Terms.
                  </p>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">1.2 Eligibility</h3>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-8 bg-white/40 border border-white/50 p-4 rounded-xl">
                    You must be at least 16 years of age to use our services.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="t-services" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-sm">2</span>
                    Description of Services
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: "IT Training & Courses", desc: "Online and offline training in tech." },
                      { title: "Software Development", desc: "Custom software development services." },
                      { title: "Internship Programs", desc: "Hands-on experience and mentorship." },
                      { title: "Placement Assistance", desc: "Help connecting with career opportunities." },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/50 backdrop-blur-sm border border-white/60 p-6 rounded-2xl hover:shadow-md transition-shadow group">
                        <div className="font-extrabold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{item.title}</div>
                        <div className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 3 */}
                <section id="t-payments" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-sm">3</span>
                    Payments &amp; Refunds
                  </h2>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-8">
                    Refund requests must be submitted within <strong className="text-slate-900 font-extrabold">7 days of enrollment</strong>. No refunds will be issued once course materials have been accessed or downloaded.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="t-ip" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-sm">4</span>
                    Intellectual Property
                  </h2>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">
                    All course materials and website content are the exclusive intellectual property of Photonexes Technologies.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="t-responsibilities" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-sm">5</span>
                    User Responsibilities
                  </h2>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">
                    You agree to use our services responsibly and not to engage in unlawful or harmful activities.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="t-disclaimers" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-sm">6</span>
                    Disclaimers &amp; Liability
                  </h2>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">
                    Our services are provided on an &quot;as-is&quot; basis without warranties of any kind.
                  </p>
                </section>

                {/* Section 7 */}
                <section id="t-termination" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-sm">7</span>
                    Termination
                  </h2>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-8">
                    We reserve the right to suspend or terminate your access to our services if you violate these Terms.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="t-governing-law" className="mb-12 pb-12 border-b border-slate-200/50">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-sm">8</span>
                    Governing Law &amp; Disputes
                  </h2>
                  <p className="text-slate-600 text-[1.05rem] leading-relaxed font-medium mb-6">
                    These Terms shall be governed by and construed in accordance with the laws of the Republic of India.
                  </p>
                </section>

                {/* Section 9 */}
                <section id="t-contact" className="mb-12">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-sm">9</span>
                    Contact Us
                  </h2>
                  <div className="bg-white/40 border border-white/60 p-8 rounded-3xl shadow-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full group-hover:bg-orange-500/20 transition-colors duration-500" />
                    
                    <div className="relative z-10">
                      <div className="font-extrabold text-xl mb-6 text-slate-900">Photonexes Technologies</div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                          <Mail size={16} className="text-orange-600" />
                        </div>
                        <div>
                          <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-0.5">Email</div>
                          <a href="mailto:contact@photonexes.in" className="font-medium text-slate-700 hover:text-orange-600 transition-colors">contact@photonexes.in</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

          </AnimatePresence>
        </motion.article>
      </div>
    </main>
  );
}

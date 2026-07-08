"use client";
import { useState, useEffect } from "react";
import { Check, ArrowRight, CheckCircle2, AlertCircle, UploadCloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InternshipApplicationPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    formData.append("_subject", "New Internship Application");
    formData.append("_captcha", "false"); 
    formData.append("_template", "table");

    try {
      const response = await fetch("https://formsubmit.co/ajax/hcda129@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
        setFileName(null);
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 6000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  const checklist = [
    "Live Industry Projects",
    "Experienced Mentorship",
    "Certificate of Completion",
    "Flexible Work Environment",
    "Career Growth Opportunities",
    "Potential Full-Time Offer"
  ];

  return (
    <main className="relative min-h-screen bg-slate-50 overflow-hidden pt-[100px] md:pt-[130px] pb-24 selection:bg-purple-500/30">
      
      {/* Fluid Background Animation */}
      <motion.div 
        className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        animate={{
          background: "rgba(168, 85, 247, 0.2)",
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="fixed bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none"
        animate={{
          background: "rgba(236, 72, 153, 0.15)",
          x: [0, -60, 60, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Success/Error Popup */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] bg-emerald-500/90 backdrop-blur-md border border-emerald-400 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold"
          >
            <CheckCircle2 size={24} />
            Application Submitted Successfully!
          </motion.div>
        )}
        {status === "error" && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] bg-red-500/90 backdrop-blur-md border border-red-400 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold"
          >
            <AlertCircle size={24} />
            Something went wrong. Please try again.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-8 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/60 backdrop-blur-3xl border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.05)] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row"
        >
          <div className="hidden md:block w-full md:w-[45%] relative overflow-hidden">
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-purple-900/30 mix-blend-multiply z-10" />
            
            {/* Gradient overlay at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b] via-transparent to-transparent z-10" />
            
            {/* Main Image */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Interns collaborating at Photonexes" 
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 hover:scale-105"
            />
            
            {/* Floating Text over Image */}
            <div className="absolute bottom-12 left-10 right-10 z-20">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Admissions Open
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight drop-shadow-md">
                Build Your Future<br/><span className="text-pink-300">With Us.</span>
              </h3>
              <p className="text-purple-50 text-[0.95rem] font-medium leading-relaxed drop-shadow-sm max-w-[300px]">
                Join the Photonexes 2026 Internship Program and gain real-world industry experience working alongside top developers.
              </p>
            </div>
          </div>

          {/* Right Form Area (Light Glass) */}
          <div className="w-full md:w-[55%] p-8 md:p-10 lg:p-12 relative">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-[550px] mx-auto md:mx-0">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-5 tracking-tight">Apply for Internship</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 pl-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 bg-white/60 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-slate-700 text-sm font-medium placeholder-slate-400 transition-all shadow-sm"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 pl-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-2.5 bg-white/60 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-slate-700 text-sm font-medium placeholder-slate-400 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email Address */}
                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 pl-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="example@gmail.com"
                      className="w-full px-4 py-2.5 bg-white/60 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-slate-700 text-sm font-medium placeholder-slate-400 transition-all shadow-sm"
                    />
                  </div>
                  {/* College / University */}
                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 pl-1">College / University</label>
                    <input 
                      type="text" 
                      name="college" 
                      required 
                      placeholder="College Name"
                      className="w-full px-4 py-2.5 bg-white/60 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-slate-700 text-sm font-medium placeholder-slate-400 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Course */}
                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 pl-1">Course</label>
                    <input 
                      type="text" 
                      name="course" 
                      required 
                      placeholder="BCA, MCA, B.Tech"
                      className="w-full px-4 py-2.5 bg-white/60 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-slate-700 text-sm font-medium placeholder-slate-400 transition-all shadow-sm"
                    />
                  </div>

                  {/* Technology */}
                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 pl-1">Technology Domain</label>
                    <select 
                      name="technology" 
                      required
                      className="w-full px-4 py-2.5 bg-white/60 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-slate-700 text-sm font-medium transition-all shadow-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-1rem)_center] bg-[length:0.6rem_auto]"
                    >
                      <option value="">Select Domain</option>
                      <option value="Frontend Development">Frontend Development</option>
                      <option value="Backend Development">Backend Development</option>
                      <option value="Full Stack Development">Full Stack Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                  </div>
                </div>

                {/* Why join */}
                <div>
                  <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 pl-1">Why do you want to join Photonexes?</label>
                  <textarea 
                    name="why_join" 
                    required 
                    rows={2}
                    placeholder="Tell us about yourself..."
                    className="w-full px-4 py-2.5 bg-white/60 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-slate-700 text-sm font-medium placeholder-slate-400 transition-all shadow-sm resize-none"
                  ></textarea>
                </div>

                {/* Resume Upload - Modern UI */}
                <div>
                  <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 pl-1">Resume / CV</label>
                  <div className="relative group">
                    <input 
                      type="file" 
                      name="resume" 
                      id="resume-upload"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className={`w-full px-4 py-3 bg-white/60 border-2 border-dashed ${fileName ? 'border-purple-400 bg-purple-50/50' : 'border-slate-300 group-hover:border-purple-400 group-hover:bg-purple-50/30'} rounded-lg flex items-center justify-center gap-2 transition-all`}>
                      <UploadCloud className={fileName ? "text-purple-600" : "text-slate-400 group-hover:text-purple-500"} size={20} />
                      <span className={`text-sm font-medium ${fileName ? "text-purple-700" : "text-slate-500"}`}>
                        {fileName ? fileName : "Click or drag to upload Resume"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-extrabold text-[0.9rem] tracking-wide shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 flex justify-center items-center"
                  >
                    {status === "loading" ? "Submitting..." : "Apply Now"}
                  </button>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-[10px] font-bold text-slate-400">
                    © 2026 Photonexes Technology. All Rights Reserved.
                  </p>
                </div>

              </form>
            </div>
          </div>
        </motion.div>
      </div>

    </main>
  );
}

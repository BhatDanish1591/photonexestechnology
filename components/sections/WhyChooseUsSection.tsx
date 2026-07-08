"use client";
import { Briefcase, Puzzle, CheckCircle, Clock, RefreshCw, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    icon: <Briefcase size={24} />,
    title: "Proven Expertise and Experience",
    description: "We have been blessed with the best of the talent in the industry. At CS Soft Solutions, get business solutions from experts who have a thorough experience and exposure of diverse sectors in the IT industry. We understand and ensure every customer of ours is served with the best of solutions without any fall.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: <Puzzle size={24} />,
    title: "Tailored Solutions for Your Business",
    description: "We understand that no two businesses are the same. Ask our experts to offer you experienced and custom-fit solutions that match your business requirements in every aspect.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Uncompromising Quality Assurance",
    description: "Quality is our priority. Ours is a team of firm believers of ensuring error-free solutions that serves the best of the quality in the market. We have a dedicated set of QA analysts that focus on checking the highest standard of quality in our deliverables.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: <Clock size={24} />,
    title: "On-Time, Every Time",
    description: "We believe in our commitments. Through our structured project management approach, we ensure deliveries are done on time, every time without compromising with the quality of the work and the expected impact.",
    image: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Agile & Adaptive Development",
    description: "We adopt agile methodologies to deliver solutions that resonate with growth and efficiency. We keep on refining our work to ensure we become the better version of ourselves. Our iterative approach helps us to stay competitive and result-driven in the market.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
  },
  {
    icon: <Rocket size={24} />,
    title: "Innovation at the Core",
    description: "We thrive on innovation. We focus on building tech solutions that speak for our work and excellence. With future-ready solutions, we offer innovation and accomplishment in our deliverables.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="pt-12 pb-12 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16 max-w-[800px] mx-auto">
            <div className="inline-block px-6 py-2 bg-white border border-gray-200 text-gray-700 font-bold text-sm tracking-widest uppercase rounded-full mb-6 shadow-sm">
              Why Choose us
            </div>
            <h2 className="font-['Inter'] text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold text-gray-900 leading-[1.2]">
              What Sets Us <span className="text-emerald-500">Apart?</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reasons.map((reason, i) => (
            <ScrollReveal key={i} animation="fadeUp" delay={i * 100}>
              <div 
                className="group relative h-full bg-white p-10 rounded-[32px] overflow-hidden transition-all duration-500 cursor-pointer"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.03)"
                }}
              >
                {/* Background Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Animated Watermark Number */}
                <div className="absolute -right-6 -bottom-6 text-[120px] font-black text-gray-50 leading-none select-none transition-all duration-500 group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:text-emerald-500/10">
                  0{i + 1}
                </div>

                {/* Animated Top Border */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-20"></div>
                
                {/* Top Image Banner */}
                <div className="relative h-48 -mt-10 -mx-10 mb-8 overflow-hidden z-10">
                  <img src={reason.image} alt={reason.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                  
                  {/* Floating Icon moved up over the image */}
                  <div className="absolute bottom-6 left-10 w-14 h-14 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-lg border border-emerald-50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] group-hover:bg-emerald-500 group-hover:text-white group-hover:-rotate-6">
                    {reason.icon}
                  </div>
                </div>
                
                {/* Text Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug relative z-10 transition-colors duration-300 group-hover:text-emerald-600">
                  {reason.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed relative z-10 font-medium">
                  {reason.description}
                </p>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

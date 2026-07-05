"use client";
import { Code2, Globe, Smartphone, GraduationCap, Award } from "lucide-react";

const services = [
  { title: "Software\nDevelopment", desc: "Custom software solutions for your business", icon: <Code2 size={22} strokeWidth={1.5} />, color: "border-orange-600", bg: "bg-orange-600" },
  { title: "Web\nDevelopment", desc: "Modern websites that build your brand online", icon: <Globe size={22} strokeWidth={1.5} />, color: "border-sky-500", bg: "bg-sky-500" },
  { title: "Mobile App\nDevelopment", desc: "Android, iOS & Cross platform applications", icon: <Smartphone size={22} strokeWidth={1.5} />, color: "border-purple-500", bg: "bg-purple-500" },
  { title: "IT Training &\nInternship", desc: "Industry-ready training with live projects", icon: <GraduationCap size={22} strokeWidth={1.5} />, color: "border-emerald-500", bg: "bg-emerald-500" },
  { title: "Certification &\nPlacement", desc: "Get certified & get placed in top companies", icon: <Award size={22} strokeWidth={1.5} />, color: "border-amber-500", bg: "bg-amber-500" },
];

export default function ServicesSection() {
  return (
    <section
      id="services-mini"
      className="py-16 md:py-24 bg-white relative z-10"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 items-start border border-slate-100 border-b-4 ${service.color} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}
            >
              <div
                className={`w-12 h-12 rounded-lg ${service.bg} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`}
              >
                {service.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-[0.95rem] mb-2 leading-tight whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

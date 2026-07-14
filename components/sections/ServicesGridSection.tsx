"use client";
import Link from "next/link";
import { 
  Globe, Smartphone, Monitor, Layers, 
  Megaphone, Palette, ShieldCheck, Cloud 
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "Web Development",
    slug: "web-development",
    icon: <Globe size={32} strokeWidth={1.5} />,
    desc: "Building and maintaining responsive websites to ensure functionality and a good user experience.",
  },
  {
    title: "Mobile Development",
    slug: "mobile-development",
    icon: <Smartphone size={32} strokeWidth={1.5} />,
    desc: "Developing applications for mobile devices focused on performance and user experience.",
  },
  {
    title: "Software Development",
    slug: "software-development",
    icon: <Monitor size={32} strokeWidth={1.5} />,
    desc: "Creating and maintaining software through programming, testing, debugging, and bug fixing.",
  },
  {
    title: "Stack Development",
    slug: "stack-development",
    icon: <Layers size={32} strokeWidth={1.5} />,
    desc: "Building complete tech stacks from front-end to back-end to support complex application architectures.",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    icon: <Megaphone size={32} strokeWidth={1.5} />,
    desc: "Boosting brand awareness and growth through innovative online marketing strategies and audience engagement.",
  },
  {
    title: "UI UX Design",
    slug: "ui-ux-design",
    icon: <Palette size={32} strokeWidth={1.5} />,
    desc: "Crafting intuitive and visually appealing designs to enhance user experience and satisfaction.",
  },
  {
    title: "Cyber Security",
    slug: "cyber-security",
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    desc: "Protecting digital assets and systems from unauthorized access, attacks, and data breaches.",
  },
  {
    title: "Cloud Computing",
    slug: "cloud-computing",
    icon: <Cloud size={32} strokeWidth={1.5} />,
    desc: "Storing and accessing data and applications over the internet instead of local servers.",
  },
];

export default function ServicesGridSection() {
  return (
    <section id="services" className="py-12 lg:py-16 bg-transparent relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Header */}
        <ScrollReveal animation="fadeUp">
          <div className="mb-16 lg:mb-20 border-b border-slate-200 pb-12 lg:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-20 items-end">
              <div>
                <div className="w-12 h-1 bg-[#ea580c] mb-6 lg:mb-8 rounded-full"></div>
                <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 leading-[1.15] tracking-tight">
                  Transforming Ideas Into <br className="hidden md:block" />
                  <span className="text-[#ea580c]">Digital Reality</span>
                </h2>
              </div>
              <div className="lg:pb-2">
                <p className="text-slate-600 text-[1.1rem] md:text-lg leading-[1.8] font-medium">
                  We provide end-to-end technology solutions tailored to your business needs, ensuring scalability, security, and exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 8-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <ScrollReveal key={idx} animation="scaleUp" delay={idx * 50} threshold={0.1}>
              <div className="neu-card group flex flex-col items-center text-center p-8 h-full transition-transform duration-300 hover:-translate-y-2">
                
                {/* Icon */}
                <div className="text-[#2dd4bf] mb-6 transform transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-[#0f172a] font-bold text-xl mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-8 flex-1">
                  {service.desc}
                </p>

                {/* Learn More Link */}
                <div className="mt-auto">
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex flex-col items-center group-hover:text-[#2dd4bf] transition-colors font-bold text-sm text-[#0f172a]"
                  >
                    Learn More
                    <span className="w-8 h-[3px] bg-[#2dd4bf] mt-1.5 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

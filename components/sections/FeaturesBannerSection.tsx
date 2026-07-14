"use client";
import { Users, Network, ShieldCheck, HeartHandshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    icon: <Users size={28} className="text-blue-500" />,
    title: "5+ Experience",
    desc: "5+ years of experience with numerous happy clients.",
  },
  {
    icon: <Network size={28} strokeWidth={2} />,
    title: "50+ Experts Team",
    desc: "Highly skilled developers, web designers, and marketers.",
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={2} />,
    title: "Quality Work",
    desc: "Quality-first approach to every project we work on.",
  },
  {
    icon: <HeartHandshake size={28} strokeWidth={2} />,
    title: "Customer Support",
    desc: "100% support and efficient project implementation.",
  },
];

export default function FeaturesBannerSection() {
  return (
    <section className="bg-transparent py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={i} animation="fadeUp" delay={i * 100}>
              <div className="neu-card flex flex-col items-center text-center p-10 h-full group">
                
                {/* Neumorphic Inset Icon */}
                <div className="w-20 h-20 rounded-full neu-inset flex items-center justify-center text-[#2dd4bf] mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#14b8a6]">
                  {feature.icon}
                </div>

                {/* Text Content */}
                <h3 className="text-[#0f172a] text-xl font-extrabold mb-4 font-sans tracking-wide transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-[1rem] leading-relaxed">
                  {feature.desc}
                </p>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

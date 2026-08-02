"use client";
import Link from "next/link";
import {
  Globe, Smartphone, Monitor, Layers,
  Megaphone, Palette, ShieldCheck, Cloud,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import GlowHover from "@/components/smoothui/glow-hover-card/index";
import ScrambleHover from "@/components/smoothui/scramble-hover/index";

const services = [
  { title: "Web Development", slug: "web-development", icon: Globe, desc: "Building and maintaining responsive websites to ensure functionality and a great user experience.", hue: 210, saturation: 80, lightness: 60 },
  { title: "Mobile Development", slug: "mobile-development", icon: Smartphone, desc: "Developing applications for mobile devices focused on performance and user experience.", hue: 265, saturation: 75, lightness: 65 },
  { title: "Software Development", slug: "software-development", icon: Monitor, desc: "Creating and maintaining software through programming, testing, debugging, and bug fixing.", hue: 180, saturation: 70, lightness: 55 },
  { title: "Stack Development", slug: "stack-development", icon: Layers, desc: "Building complete tech stacks from front-end to back-end for complex architectures.", hue: 140, saturation: 65, lightness: 50 },
  { title: "Digital Marketing", slug: "digital-marketing", icon: Megaphone, desc: "Boosting brand awareness through innovative online marketing and audience engagement.", hue: 35, saturation: 90, lightness: 60 },
  { title: "UI UX Design", slug: "ui-ux-design", icon: Palette, desc: "Crafting intuitive and visually appealing designs to enhance user satisfaction.", hue: 320, saturation: 75, lightness: 65 },
  { title: "Cyber Security", slug: "cyber-security", icon: ShieldCheck, desc: "Protecting digital assets from unauthorized access, attacks, and data breaches.", hue: 0, saturation: 80, lightness: 60 },
  { title: "Cloud Computing", slug: "cloud-computing", icon: Cloud, desc: "Storing and accessing data and applications over the internet instead of local servers.", hue: 200, saturation: 85, lightness: 60 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  return (
    <div className="neu-card group flex flex-col items-center text-center p-8 h-full relative overflow-hidden">
      {/* Reveal gradient on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, hsla(${service.hue},${service.saturation}%,${service.lightness}%,0.08) 0%, transparent 70%)`,
        }}
      />

      {/* Icon — 3D spin on hover */}
      <motion.div
        className="mb-6 relative z-10"
        style={{ color: `hsl(${service.hue}, ${service.saturation}%, ${service.lightness}%)` }}
        whileHover={{ rotateY: 360, scale: 1.15 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Icon size={36} strokeWidth={1.5} />
      </motion.div>

      {/* Title with ScrambleHover */}
      <div className="text-[#0f172a] font-bold text-xl mb-4 tracking-tight z-10">
        <ScrambleHover duration={500} speed={25}>
          {service.title}
        </ScrambleHover>
      </div>

      {/* Description */}
      <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-8 flex-1 z-10">
        {service.desc}
      </p>

      {/* Learn More — micro-interaction underline */}
      <div className="mt-auto z-10">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex flex-col items-center transition-colors font-bold text-sm text-[#0f172a]"
          style={{ color: `hsl(${service.hue}, ${service.saturation}%, ${service.lightness}%)` }}
        >
          Learn More
          <motion.span
            className="h-[3px] rounded-full mt-1.5"
            style={{ background: `hsl(${service.hue}, ${service.saturation}%, ${service.lightness}%)` }}
            initial={{ width: "2rem" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesGridSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const glowItems = services.map((s) => ({
    id: s.slug,
    element: <ServiceCard service={s} />,
    theme: { hue: s.hue, saturation: s.saturation, lightness: s.lightness },
  }));

  return (
    <section id="services" className="py-12 lg:py-16 bg-transparent relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header — clip-path reveal */}
        <motion.div
          className="mb-16 lg:mb-20 border-b border-slate-200 pb-12 lg:pb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-20 items-end">
            <div>
              <motion.div
                className="w-12 h-1 bg-[#ea580c] mb-6 lg:mb-8 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 leading-[1.15] tracking-tight">
                Transforming Ideas Into{" "}
                <br className="hidden md:block" />
                <span className="text-[#ea580c]">Digital Reality</span>
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="text-slate-600 text-[1.1rem] md:text-lg leading-[1.8] font-medium">
                We provide end-to-end technology solutions tailored to your business
                needs, ensuring scalability, security, and exceptional user experiences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid with GlowHover + Stagger entrance */}
        <div ref={sectionRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <GlowHover
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              maskSize={350}
              glowIntensity={0.12}
              items={glowItems.map((item, idx) => ({
                ...item,
                element: (
                  <motion.div key={item.id} variants={cardVariants}>
                    {item.element}
                  </motion.div>
                ),
              }))}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

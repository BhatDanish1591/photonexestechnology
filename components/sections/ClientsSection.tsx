"use client";
import InfiniteSlider from "@/components/smoothui/infinite-slider/index";
import { motion } from "motion/react";

const clients = [
  "Microsoft", "Google", "Amazon", "IBM", "Oracle",
  "Meta", "Apple", "Cisco", "Intel", "Adobe",
];

export default function ClientsSection() {
  return (
    <section className="py-10 bg-white border-t border-b border-slate-100 overflow-hidden">
      {/* Label — fade-in */}
      <motion.p
        className="text-center text-slate-500 text-xs font-semibold tracking-[0.2em] uppercase mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Trusted by Innovative Companies Worldwide
      </motion.p>

      {/* Dual-row InfiniteSlider for depth */}
      <div className="flex flex-col gap-4">
        <InfiniteSlider speed={60} gap={48} speedOnHover={20}>
          {clients.map((client) => (
            <motion.div
              key={client}
              className="px-8 py-3 rounded-full border border-slate-100 bg-slate-50 text-slate-400 font-bold text-lg select-none whitespace-nowrap"
              whileHover={{
                color: "#0f172a",
                borderColor: "#ea580c",
                backgroundColor: "#fff7ed",
                scale: 1.05,
              }}
              transition={{ duration: 0.2 }}
            >
              {client}
            </motion.div>
          ))}
        </InfiniteSlider>

        <InfiniteSlider speed={45} gap={48} reverse speedOnHover={20}>
          {[...clients].reverse().map((client) => (
            <motion.div
              key={`rev-${client}`}
              className="px-8 py-3 rounded-full border border-slate-100 bg-slate-50 text-slate-300 font-bold text-base select-none whitespace-nowrap"
              whileHover={{
                color: "#1e3a8a",
                borderColor: "#2563eb",
                backgroundColor: "#eff6ff",
                scale: 1.05,
              }}
              transition={{ duration: 0.2 }}
            >
              {client}
            </motion.div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}

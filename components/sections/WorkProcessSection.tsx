export default function WorkProcessSection() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We analyze your business needs and define the project scope." },
    { num: "02", title: "Planning", desc: "We design the architecture and create a comprehensive roadmap." },
    { num: "03", title: "Development", desc: "Our engineers build the solution using modern tech stacks." },
    { num: "04", title: "Deployment", desc: "Rigorous testing followed by seamless cloud deployment." }
  ];

  return (
    <section style={{ padding: "3rem 2rem", background: "#f8fafc" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ 
            color: "#ea580c", fontSize: "0.8rem", fontWeight: 700, 
            letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem"
          }}>
            How We Work
          </div>
          <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "2.5rem", fontWeight: 700, color: "#0f172a" }}>
            Our Proven Methodology
          </h2>
        </div>

        <div className="flex flex-wrap gap-8 justify-between relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-orange-100 via-orange-300 to-orange-100 z-0"></div>

          {steps.map((step, i) => (
            <div key={i} className="group relative flex-1 min-w-[220px] text-center z-10">
              <div className="relative w-24 h-24 mx-auto mb-8">
                {/* Glowing Background Ring */}
                <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl scale-50 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Number Circle */}
                <div className="relative w-full h-full bg-white/80 backdrop-blur-md rounded-full border border-orange-200 shadow-xl shadow-orange-500/10 flex items-center justify-center text-2xl font-extrabold text-orange-600 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-orange-500 group-hover:shadow-2xl group-hover:shadow-orange-500/20 group-hover:bg-white">
                  {step.num}
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm border border-slate-100 p-6 rounded-3xl transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-slate-200/50 group-hover:bg-white/80 group-hover:border-orange-100 relative">
                <h3 className="font-sans text-xl font-extrabold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-orange-600">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-[0.95rem] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

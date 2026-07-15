"use client";
import { Lightbulb, ShieldCheck, Target, Users, Zap, Award, BookOpen, Heart, Leaf } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  {
    icon: <Award size={24} />,
    title: "Excellence",
    description: "We are focused to deliver the greatest standard of work and efficiency to every solution we offer.",
    color: "#ec4899",
    image: "/assets/stock_1784102777361_15.jpg"
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Innovation",
    description: "We keep on pushing our boundaries and bringing innovative IT Solutions.",
    color: "#a855f7",
    image: "/assets/stock_1784102777672_16.jpg"
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Integrity",
    description: "With an end-to-end comprehensive process, we believe in practicing ethical and transparent business operations.",
    color: "#3b82f6",
    image: "/assets/stock_1784102777902_17.jpg"
  },
  {
    icon: <Users size={24} />,
    title: "Collaboration",
    description: "For us, teamwork is the best work. We believe in working and growing together.",
    color: "#10b981",
    image: "/assets/stock_1784102778117_18.jpg"
  },
  {
    icon: <BookOpen size={24} />,
    title: "Continuous Learning",
    description: "We learn every day to ensure growth remains constant for us in every stage.",
    color: "#eab308",
    image: "/assets/stock_1784102778318_19.jpg"
  },
  {
    icon: <Heart size={24} />,
    title: "Customer Focus",
    description: "For us, clients are the decision makers. We deliver solutions that prioritize client’s requirements.",
    color: "#ef4444",
    image: "/assets/stock_1784102778363_20.jpg"
  },
  {
    icon: <Zap size={24} />,
    title: "Agility",
    description: "We are quite adaptive to change and are focused to ensure efficiency in execution.",
    color: "#f97316",
    image: "/assets/stock_1784102778614_21.jpg"
  },
  {
    icon: <Leaf size={24} />,
    title: "Social Responsibility",
    description: "We believe in giving back to society. We actively take participation in contributing back through our various corporate social activities.",
    color: "#14b8a6",
    image: "/assets/stock_1784102778862_22.jpg"
  }
];

export default function CoreValuesSection() {
  return (
    <section style={{ 
      padding: "2rem 2rem 4rem 2rem", 
      background: "#ffffff",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background Glows (slightly lower opacity for light mode) */}
      <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "40%", height: "40%", background: "#f97316", filter: "blur(150px)", opacity: 0.1, borderRadius: "50%" }}></div>
      <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "40%", height: "40%", background: "#3b82f6", filter: "blur(150px)", opacity: 0.1, borderRadius: "50%" }}></div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        <ScrollReveal animation="fadeUp">
          <div style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "900px", margin: "0 auto 4rem" }}>
            <div style={{
              display: "inline-block",
              padding: "0.5rem 1.5rem",
              background: "rgba(0,0,0,0.03)",
              border: "1px solid rgba(0,0,0,0.05)",
              color: "#334155",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: "50px",
              marginBottom: "1.5rem"
            }}>
              Focus on Vision, Mission and Core Values
            </div>
            <h2 style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2
            }}>
              Pillars of <br />
              <span style={{ background: "linear-gradient(to right, #f97316, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Growth</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <ScrollReveal animation="fadeRight" delay={100}>
            <div className="group relative min-h-[450px] h-auto rounded-[40px] overflow-hidden shadow-2xl flex items-end p-4 md:p-8">
              {/* Background Image */}
              <div className="absolute inset-0 bg-[url('/assets/stock_1784102779085_23.jpg')] bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"></div>
              {/* Animated Overlays */}
              <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-[2px] transition-colors duration-500 group-hover:bg-blue-900/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent"></div>
              
              {/* Glowing Border FX */}
              <div className="absolute inset-0 rounded-[40px] border border-white/10 group-hover:border-blue-400/30 transition-colors duration-500 z-20 pointer-events-none"></div>
              
              {/* Glassmorphic Content Box */}
              <div className="relative w-full p-6 md:p-8 rounded-[24px] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 md:mb-4 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30 shrink-0">
                    <Target className="text-blue-300 w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Our Vision
                </h3>
                <p className="text-blue-50/90 leading-relaxed text-base md:text-lg font-light">
                  We believe in establishing our presence through our work. We have been into the global market for years and have been establishing digital transformation for our clients. Our vision is to ensure every customer of ours grows and achieves success in this dynamic and volatile landscape.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeLeft" delay={200}>
            <div className="group relative min-h-[450px] h-auto rounded-[40px] overflow-hidden shadow-2xl flex items-end p-4 md:p-8">
               {/* Background Image */}
               <div className="absolute inset-0 bg-[url('/assets/stock_1784102779152_24.jpg')] bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"></div>
              {/* Animated Overlays */}
              <div className="absolute inset-0 bg-orange-950/70 backdrop-blur-[2px] transition-colors duration-500 group-hover:bg-orange-900/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-transparent to-transparent"></div>

              {/* Glowing Border FX */}
              <div className="absolute inset-0 rounded-[40px] border border-white/10 group-hover:border-orange-400/30 transition-colors duration-500 z-20 pointer-events-none"></div>

              {/* Glassmorphic Content Box */}
              <div className="relative w-full p-6 md:p-8 rounded-[24px] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 md:mb-4 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-400/30 shrink-0">
                    <Zap className="text-orange-400 w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Our Mission
                </h3>
                <p className="text-orange-50/90 leading-relaxed text-base md:text-lg font-light">
                  We believe in offering result-driven, scalable and tailored tech solutions to bring desirable impact in your business. We have been helping clients over the globe to grow and expand their business operations, add efficiency in their existing operations and achieve their business goals.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Section divider for Core Values */}
        <div className="text-center mb-16">
          <h3 className="text-[clamp(2rem,3vw,2.5rem)] font-extrabold text-gray-900 tracking-tight">Core Values</h3>
          <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">These core values define who we are and guide everything we do:</p>
        </div>

        {/* 8 Core Values Grid - Ultra Premium Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((v, i) => (
            <ScrollReveal key={i} animation="fadeUp" delay={i * 50}>
              <div 
                className="group relative h-[400px] rounded-[32px] overflow-hidden cursor-pointer shadow-lg"
                style={{
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
                }}
              >
                {/* Full Bleed Background Image */}
                <img 
                  src={v.image} 
                  alt={v.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Base Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-gray-900/20 opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>
                
                {/* Colored Accent Overlay on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: v.color }}
                ></div>

                {/* Floating Icon in Top Right */}
                <div 
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-white"
                >
                  {/* Clone the icon element to change its color dynamically on hover without inline React state */}
                  <div className="transition-colors duration-500 group-hover:hidden">
                    {v.icon}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ color: v.color }}>
                    {v.icon}
                  </div>
                </div>

                {/* Content Box (Slides up on hover) */}
                <div className="absolute inset-x-0 bottom-0 p-8 pt-12 flex flex-col justify-end translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                    {v.title}
                  </h3>
                  
                  {/* Description is hidden/faded out initially, reveals on hover */}
                  <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[150px] group-hover:opacity-100 group-hover:mt-2">
                    <p className="text-gray-200 text-sm leading-relaxed relative z-10 font-light">
                      {v.description}
                    </p>
                  </div>

                  {/* Accent Line Indicator */}
                  <div 
                    className="absolute bottom-0 left-0 w-full h-1.5 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                    style={{ background: v.color }}
                  ></div>
                </div>

                {/* Interactive Border */}
                <div className="absolute inset-0 border-2 border-transparent transition-colors duration-500 rounded-[32px] group-hover:border-white/20 pointer-events-none"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

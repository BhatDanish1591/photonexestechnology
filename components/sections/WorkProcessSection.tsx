export default function WorkProcessSection() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We analyze your business needs and define the project scope." },
    { num: "02", title: "Planning", desc: "We design the architecture and create a comprehensive roadmap." },
    { num: "03", title: "Development", desc: "Our engineers build the solution using modern tech stacks." },
    { num: "04", title: "Deployment", desc: "Rigorous testing followed by seamless cloud deployment." }
  ];

  return (
    <section style={{ padding: "6rem 2rem", background: "#f8fafc" }}>
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

        <div style={{ 
          display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", position: "relative"
        }}>
          {/* Connecting Line (Desktop only - simplified via CSS) */}
          <div style={{
            position: "absolute", top: "40px", left: "10%", right: "10%", 
            height: "2px", background: "rgba(234, 88, 12, 0.2)", zIndex: 0
          }} className="hidden md:block"></div>

          {steps.map((step, i) => (
            <div key={i} style={{ flex: "1 1 200px", textAlign: "center", position: "relative", zIndex: 1 }}>
              <div style={{
                width: "80px", height: "80px", margin: "0 auto 1.5rem",
                background: "#ffffff", border: "2px solid #ea580c", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem", fontWeight: 800, color: "#ea580c",
                boxShadow: "0 10px 20px rgba(234, 88, 12, 0.1)"
              }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>
                {step.title}
              </h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.5 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

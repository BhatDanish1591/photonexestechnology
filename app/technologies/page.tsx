"use client";
import CustomHeroSection from "@/components/sections/CustomHeroSection";
import { 
  FaReact, FaAngular, FaVuejs, FaHtml5, FaNodeJs, FaPython, 
  FaJava, FaPhp, FaApple, FaAndroid, FaAws, FaGoogle, FaMicrosoft 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiDotnet, SiGo, SiFlutter, 
  SiMongodb, SiPostgresql, SiMysql 
} from "react-icons/si";

const techCategories = [
  {
    category: "Frontend Development",
    technologies: [
      { name: "React", icon: <FaReact size={36} color="#61DAFB" />, desc: "A powerful JavaScript library for building dynamic user interfaces." },
      { name: "Next.js", icon: <SiNextdotjs size={36} color="#000000" />, desc: "The React framework for production-grade, SEO-friendly web apps." },
      { name: "Angular", icon: <FaAngular size={36} color="#DD0031" />, desc: "A comprehensive platform for building enterprise-scale web applications." },
      { name: "Vue.js", icon: <FaVuejs size={36} color="#4FC08D" />, desc: "An approachable, versatile, and performant JavaScript framework." },
      { name: "HTML5/CSS3", icon: <FaHtml5 size={36} color="#E34F26" />, desc: "The core markup and styling languages for structuring the web." },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={36} color="#06B6D4" />, desc: "A utility-first CSS framework for rapid and responsive UI development." }
    ]
  },
  {
    category: "Backend Development",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs size={36} color="#339933" />, desc: "A scalable JavaScript runtime built on Chrome's V8 engine." },
      { name: "Python", icon: <FaPython size={36} color="#3776AB" />, desc: "A versatile language renowned for web backends, AI, and data science." },
      { name: "Java", icon: <FaJava size={36} color="#007396" />, desc: "A high-level, object-oriented language for robust enterprise systems." },
      { name: "PHP", icon: <FaPhp size={36} color="#777BB4" />, desc: "A widely-used open source scripting language suited for web development." },
      { name: ".NET", icon: <SiDotnet size={36} color="#512BD4" />, desc: "A free, cross-platform, open-source developer platform by Microsoft." },
      { name: "Go", icon: <SiGo size={36} color="#00ADD8" />, desc: "A statically typed, compiled language known for exceptional performance." }
    ]
  },
  {
    category: "Mobile App Development",
    technologies: [
      { name: "Flutter", icon: <SiFlutter size={36} color="#02569B" />, desc: "Google's UI toolkit for natively compiled applications across mobile, web, and desktop." },
      { name: "React Native", icon: <FaReact size={36} color="#61DAFB" />, desc: "Create native apps for Android and iOS using the React framework." },
      { name: "iOS", icon: <FaApple size={36} color="#000000" />, desc: "Native application development optimized for Apple's mobile ecosystem." },
      { name: "Android", icon: <FaAndroid size={36} color="#3DDC84" />, desc: "Native application development for the world's most popular mobile OS." }
    ]
  },
  {
    category: "Database & Cloud",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb size={36} color="#47A248" />, desc: "A highly flexible document-based, distributed database for modern apps." },
      { name: "PostgreSQL", icon: <SiPostgresql size={36} color="#4169E1" />, desc: "A powerful, open source object-relational database system." },
      { name: "MySQL", icon: <SiMysql size={36} color="#4479A1" />, desc: "The world's most popular open source relational database management system." },
      { name: "AWS", icon: <FaAws size={36} color="#FF9900" />, desc: "Comprehensive, widely adopted cloud computing platform provided by Amazon." },
      { name: "Google Cloud", icon: <FaGoogle size={36} color="#4285F4" />, desc: "A suite of highly scalable cloud computing services offered by Google." },
      { name: "Azure", icon: <FaMicrosoft size={36} color="#00A4EF" />, desc: "Microsoft's public cloud computing platform providing global IaaS and PaaS." }
    ]
  }
];

export default function TechnologiesPage() {
  return (
    <main>
      <CustomHeroSection 
        title="Our Tech Stack" 
        description="We leverage the latest and most robust technologies to build secure, scalable, and high-performance digital solutions."
        imageSrc="/heroes/hero_technologies_1783476359581.png"
        nextSectionColor="#ffffff"
      />
      <section style={{ padding: "6rem 2rem", background: "#f8fafc", minHeight: "60vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "2.5rem", fontWeight: 700, color: "#0f172a", marginBottom: "1rem" }}>
              Empowering Innovation with Modern Tech
            </h2>
            <p style={{ color: "#475569", fontSize: "1rem", maxWidth: "700px", margin: "0 auto" }}>
              Our expert developers stay ahead of the curve, utilizing a diverse range of programming languages, frameworks, and tools to deliver enterprise-grade software.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {techCategories.map((group, i) => (
              <div key={i}>
                <h3 style={{ 
                  fontSize: "1.75rem", 
                  fontWeight: 700, 
                  color: "#1e293b", 
                  marginBottom: "2.5rem",
                  borderLeft: "4px solid #ea580c",
                  paddingLeft: "1rem"
                }}>
                  {group.category}
                </h3>
                
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
                  gap: "2rem" 
                }}>
                  {group.technologies.map((tech, j) => (
                    <div key={j} style={{
                      background: "linear-gradient(135deg, #ffffff 0%, #fff7ed 100%)",
                      border: "1px solid #fed7aa",
                      borderBottom: "3px solid transparent",
                      borderRadius: "16px",
                      padding: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "1.25rem",
                      boxShadow: "0 4px 6px -1px rgba(234, 88, 12, 0.05)",
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 30px -5px rgba(234, 88, 12, 0.15)";
                      (e.currentTarget as HTMLElement).style.borderBottom = "3px solid #ea580c";
                      (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #ffffff 0%, #ffedd5 100%)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 6px -1px rgba(234, 88, 12, 0.05)";
                      (e.currentTarget as HTMLElement).style.borderBottom = "3px solid transparent";
                      (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #ffffff 0%, #fff7ed 100%)";
                    }}
                    >
                      <div style={{ 
                        display: "flex", 
                        alignItems: "center",
                        gap: "1rem"
                      }}>
                        <div style={{
                          background: "#f8fafc",
                          padding: "0.75rem",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid #f1f5f9"
                        }}>
                          {tech.icon}
                        </div>
                        <h4 style={{ 
                          color: "#0f172a", 
                          fontWeight: 700, 
                          fontSize: "1.2rem",
                          margin: 0
                        }}>
                          {tech.name}
                        </h4>
                      </div>
                      
                      <p style={{
                        color: "#64748b",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        {tech.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </main>
  );
}

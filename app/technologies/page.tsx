import CustomHeroSection from "@/components/sections/CustomHeroSection";
import { 
  FaReact, FaAngular, FaVuejs, FaHtml5, FaNodeJs, FaPython, 
  FaJava, FaPhp, FaApple, FaAndroid, FaAws, FaGoogle, FaMicrosoft 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiDotnet, SiGo, SiFlutter, 
  SiMongodb, SiPostgresql, SiMysql 
} from "react-icons/si";

export const metadata = {
  title: "Our Technologies",
  description: "Discover the modern technology stack we use at Photonexes Technology, including React, Next.js, Node.js, Python, AWS, and more.",
  keywords: ["tech stack", "software technologies", "web frameworks", "cloud platforms"],
};

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
      <section style={{ padding: "3rem 2rem", background: "#ffffff", minHeight: "60vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* Editorial Left-Aligned Header */}
          <div className="max-w-4xl mb-8">
            <div className="w-20 h-1.5 bg-[#ea580c] mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Empowering Innovation with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#0284c7]">
                Modern Tech
              </span>
            </h2>
            
            <div className="relative pl-6 md:pl-8 border-l-4 border-[#2dd4bf] py-4 bg-gradient-to-r from-teal-50/60 to-transparent rounded-r-2xl mt-6">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                Our expert developers stay ahead of the curve, utilizing a diverse range of programming languages, frameworks, and tools to deliver enterprise-grade software.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
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
                    <div 
                      key={j} 
                      className="group bg-[#f4f7f9] rounded-[24px] p-8 flex flex-col h-full transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-transparent hover:border-slate-100"
                    >
                      {/* Header: Icon + Title horizontally aligned */}
                      <div className="flex items-center gap-5 mb-6">
                        {/* Icon Box with white background and soft shadow */}
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_24px_rgb(0,0,0,0.05)] flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_8px_24px_rgb(0,0,0,0.09)] transition-all duration-300">
                          <div className="group-hover:scale-110 transition-transform duration-300">
                            {tech.icon}
                          </div>
                        </div>
                        <h4 className="text-2xl font-black text-slate-900 tracking-tight">{tech.name}</h4>
                      </div>

                      {/* Description text */}
                      <p className="text-[#5f6c7b] text-[1.05rem] leading-relaxed flex-1">
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

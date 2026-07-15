import CustomHeroSection from "@/components/sections/CustomHeroSection";
import ContactSection from "@/components/sections/ContactSection";
import { notFound } from "next/navigation";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiMongodb, SiPostgresql,
  SiFlutter, SiSwift, SiKotlin, SiFirebase, SiSqlite,
  SiPython, SiCplusplus, SiDocker, SiKubernetes,
  SiAngular, SiGraphql, SiRedis, SiElasticsearch,
  SiGoogleanalytics, SiHubspot, SiMailchimp, SiMeta,
  SiFigma, SiSketch, SiInvision, SiFramer,
  SiKalilinux, SiWireshark,
  SiGooglecloud, SiTerraform
} from "react-icons/si";
import { FaJava, FaShieldAlt, FaBug, FaNetworkWired, FaChartLine, FaServer, FaPenNib, FaLayerGroup, FaAws, FaCode, FaMicrosoft } from "react-icons/fa";

// Define the content for each specific service page dynamically
const serviceDetails: Record<string, any> = {
  "web-development": {
    title: "Web Development",
    description: "Building and maintaining highly responsive, scalable, and secure websites to ensure exceptional functionality and user experiences.",
    image: "/assets/stock_1784102773850_2.jpg",
    techStack: [
      { name: "React", icon: <SiReact color="#61DAFB" size={32} />, desc: "Component-based library for building highly interactive and dynamic user interfaces." },
      { name: "Next.js", icon: <SiNextdotjs color="#000000" size={32} />, desc: "React framework for production-grade, server-side rendered applications." },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" size={32} />, desc: "Asynchronous event-driven JavaScript runtime for scalable network applications." },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" size={32} />, desc: "Utility-first CSS framework for rapidly building custom and modern designs." },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" size={32} />, desc: "Flexible NoSQL database designed for high-volume data storage and retrieval." },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" size={32} />, desc: "Advanced open-source relational database known for reliability and robustness." },
      { name: "AWS", icon: <FaAws color="#FF9900" size={32} />, desc: "Comprehensive cloud platform for scalable computing and web infrastructure." }
    ]
  },
  "mobile-development": {
    title: "Mobile App Development",
    description: "Developing powerful, intuitive applications for iOS and Android focused on unparalleled performance and user engagement.",
    image: "/assets/stock_1784102774086_3.jpg",
    techStack: [
      { name: "React Native", icon: <SiReact color="#61DAFB" size={32} />, desc: "Building native apps for iOS and Android using a single JavaScript codebase." },
      { name: "Flutter", icon: <SiFlutter color="#02569B" size={32} />, desc: "Google's UI toolkit for natively compiled applications from a single codebase." },
      { name: "Swift", icon: <SiSwift color="#FA7343" size={32} />, desc: "Powerful and intuitive programming language for iOS, iPadOS, and macOS." },
      { name: "Kotlin", icon: <SiKotlin color="#7F52FF" size={32} />, desc: "Modern, cross-platform programming language fully supported for Android." },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" size={32} />, desc: "Comprehensive app development platform for real-time databases and hosting." },
      { name: "SQLite", icon: <SiSqlite color="#003B57" size={32} />, desc: "C-language library that implements a small, fast, self-contained SQL database engine." }
    ]
  },
  "software-development": {
    title: "Software Development",
    description: "Creating and maintaining robust enterprise software through rigorous programming, testing, debugging, and bug fixing.",
    image: "/assets/stock_1784102774153_4.jpg",
    techStack: [
      { name: "Python", icon: <SiPython color="#3776AB" size={32} />, desc: "High-level programming language perfect for enterprise logic and data science." },
      { name: "Java", icon: <FaJava color="#5382A1" size={32} />, desc: "Object-oriented programming language designed to have minimal implementation dependencies." },
      { name: "C# / .NET", icon: <FaCode color="#239120" size={32} />, desc: "Versatile framework for building highly secure and scalable enterprise software." },
      { name: "C++", icon: <SiCplusplus color="#00599C" size={32} />, desc: "High-performance language used for resource-intensive software applications." },
      { name: "Docker", icon: <SiDocker color="#2496ED" size={32} />, desc: "Platform for developing, shipping, and running applications inside containers." },
      { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" size={32} />, desc: "Open-source system for automating deployment and management of containerized apps." }
    ]
  },
  "stack-development": {
    title: "Full-Stack Development",
    description: "Building complete, end-to-end tech stacks from modern front-ends to scalable back-ends to support complex architectures.",
    image: "/assets/stock_1784102774196_5.jpg",
    techStack: [
      { name: "MERN Stack", icon: <SiReact color="#61DAFB" size={32} />, desc: "MongoDB, Express, React, Node.js tailored for seamless JavaScript development." },
      { name: "MEAN Stack", icon: <SiAngular color="#DD0031" size={32} />, desc: "Dynamic web apps built on MongoDB, Express, Angular, and Node.js." },
      { name: "GraphQL", icon: <SiGraphql color="#E10098" size={32} />, desc: "Query language for APIs that gives clients the power to ask for exactly what they need." },
      { name: "Redis", icon: <SiRedis color="#DC382D" size={32} />, desc: "In-memory data structure store used as a highly performant database cache." },
      { name: "Elasticsearch", icon: <SiElasticsearch color="#005571" size={32} />, desc: "Distributed, RESTful search and analytics engine for all types of data." },
      { name: "AWS", icon: <FaAws color="#FF9900" size={32} />, desc: "Cloud infrastructure powering backends with extreme scalability and uptime." }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Boosting brand awareness and exponential growth through innovative online marketing strategies and deep audience engagement.",
    image: "/assets/stock_1784102774875_6.jpg",
    techStack: [
      { name: "Google Analytics", icon: <SiGoogleanalytics color="#E37400" size={32} />, desc: "Advanced web analytics service that tracks and reports website traffic." },
      { name: "SEMrush", icon: <FaChartLine color="#FF642D" size={32} />, desc: "All-in-one tool suite for improving online visibility and discovering marketing insights." },
      { name: "HubSpot", icon: <SiHubspot color="#FF7A59" size={32} />, desc: "Inbound marketing, sales, and service software that helps businesses grow." },
      { name: "Mailchimp", icon: <SiMailchimp color="#FFE01B" size={32} />, desc: "Marketing automation platform and email marketing service for managing clients." },
      { name: "Meta Ads", icon: <SiMeta color="#0668E1" size={32} />, desc: "Comprehensive advertising ecosystem across Facebook, Instagram, and Messenger." },
      { name: "Hootsuite", icon: <FaChartLine color="#000000" size={32} />, desc: "Social media management platform to execute campaigns across multiple networks." }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "Crafting intuitive, user-centric, and visually stunning designs to enhance digital experiences and drive customer satisfaction.",
    image: "/assets/stock_1784102775379_7.jpg",
    techStack: [
      { name: "Figma", icon: <SiFigma color="#F24E1E" size={32} />, desc: "Collaborative web application for interface design, prototyping, and vector graphics." },
      { name: "Adobe XD", icon: <FaLayerGroup color="#FF61F6" size={32} />, desc: "Vector-based user experience design tool for web apps and mobile apps." },
      { name: "Sketch", icon: <SiSketch color="#F7B500" size={32} />, desc: "Vector graphics editor primarily used for UI and UX design of websites." },
      { name: "InVision", icon: <SiInvision color="#FF3366" size={32} />, desc: "Digital product design platform used to make customer experiences highly interactive." },
      { name: "Framer", icon: <SiFramer color="#0055FF" size={32} />, desc: "Interactive design tool that bridges the gap between design and development." },
      { name: "Illustrator", icon: <FaPenNib color="#FF9A00" size={32} />, desc: "Industry-standard vector graphics software for creating stunning digital assets." }
    ]
  },
  "cyber-security": {
    title: "Cyber Security",
    description: "Protecting your most valuable digital assets and systems from unauthorized access, advanced attacks, and data breaches.",
    image: "/assets/stock_1784102775645_8.jpg",
    techStack: [
      { name: "Kali Linux", icon: <SiKalilinux color="#557C94" size={32} />, desc: "Advanced penetration testing Linux distribution used for ethical hacking." },
      { name: "Wireshark", icon: <SiWireshark color="#1679A7" size={32} />, desc: "Network protocol analyzer that lets you capture and interactively browse traffic." },
      { name: "Metasploit", icon: <FaShieldAlt color="#e11d48" size={32} />, desc: "Penetration testing framework that makes hacking simple for vulnerability testing." },
      { name: "Nmap", icon: <FaNetworkWired color="#334155" size={32} />, desc: "Free and open-source utility for network discovery and security auditing." },
      { name: "Burp Suite", icon: <FaBug color="#f97316" size={32} />, desc: "Leading software for web application security testing and vulnerability scanning." },
      { name: "Splunk", icon: <FaServer color="#000000" size={32} />, desc: "Software platform to search, analyze, and visualize machine-generated data." }
    ]
  },
  "cloud-computing": {
    title: "Cloud Computing",
    description: "Modernizing your infrastructure by migrating, storing, and seamlessly accessing data and applications over the cloud.",
    image: "/assets/stock_1784102775890_9.jpg",
    techStack: [
      { name: "AWS", icon: <FaAws color="#FF9900" size={32} />, desc: "The world's most comprehensive and broadly adopted cloud platform." },
      { name: "Microsoft Azure", icon: <FaMicrosoft color="#0089D6" size={32} />, desc: "Cloud computing service for building, testing, and managing applications." },
      { name: "Google Cloud", icon: <SiGooglecloud color="#4285F4" size={32} />, desc: "Suite of cloud computing services that runs on the same infrastructure Google uses." },
      { name: "Terraform", icon: <SiTerraform color="#7B42BC" size={32} />, desc: "Infrastructure as code software tool providing a consistent CLI workflow." },
      { name: "Docker", icon: <SiDocker color="#2496ED" size={32} />, desc: "Platform designed to help developers build, share, and run modern applications." },
      { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" size={32} />, desc: "Portable, extensible platform for managing containerized workloads and services." }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = serviceDetails[resolvedParams.slug];
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.title} | Photonexes`,
    description: service.description,
  };
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = serviceDetails[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white z-0 relative">
      {/* Dynamic Hero Section */}
      <CustomHeroSection 
        title={service.title}
        description={service.description}
        imageSrc={service.image}
        nextSectionColor="#f8fafc"
        badgeText="Service Details"
      />
      
      {/* Content Section */}
      <section className="py-12 lg:py-16 bg-slate-50 relative z-10">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Editorial Left-Aligned Header */}
          <div className="max-w-4xl mb-8">
            <div className="w-20 h-1.5 bg-[#ea580c] mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Comprehensive <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#0284c7]">
                {service.title}
              </span> Solutions
            </h2>
            
            <div className="relative pl-6 md:pl-8 border-l-4 border-[#2dd4bf] py-4 bg-gradient-to-r from-teal-50/60 to-transparent rounded-r-2xl mt-6">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                At Photonexes, we approach <strong className="text-slate-900 font-bold">{service.title.toLowerCase()}</strong> with a relentless focus on innovation, performance, and scalability. 
                Our expert engineers and strategists utilize the latest technologies to deliver custom solutions that align perfectly with your business goals. 
                Whether you are a startup launching your first product or an enterprise optimizing complex operations, 
                we have the expertise to bring your vision into digital reality.
              </p>
            </div>
          </div>
          

          {/* Dynamic Tech Stack Section with Cards */}
          {service.techStack && (
            <div className="relative pt-10 border-t border-slate-200 mt-8">
              <h3 className="relative z-20 text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">Technologies We Master</h3>
              <p className="relative z-20 text-lg text-slate-600 max-w-2xl mb-8">
                We leverage the industry's most powerful and modern tools to build scalable, robust, and future-proof solutions.
              </p>
              
              {/* Animated Connecting Line Background */}
              <div className="absolute top-[130px] left-1/2 -translate-x-1/2 w-[1200px] h-[850px] z-0 hidden lg:block pointer-events-none opacity-60">
                <style>{`
                  @keyframes flowLine {
                    from { stroke-dashoffset: 2000; }
                    to { stroke-dashoffset: 0; }
                  }
                  .animated-path {
                    stroke-dasharray: 20 20;
                    animation: flowLine 30s linear infinite;
                  }
                `}</style>
                <svg className="w-full h-full" viewBox="0 0 1200 850">
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                    <filter id="glowLine" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <path 
                    d={(() => {
                      const count = service.techStack.length;
                      let p = "M 200,160 L 1000,160 C 1150,160 1150,480 1000,480 L 200,480";
                      if (count > 6) {
                        p += " C 50,480 50,800 200,800";
                        if (count > 7) p += " L 600,800";
                        if (count > 8) p += " L 1000,800";
                      }
                      return p;
                    })()}
                    fill="none" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    filter="url(#glowLine)"
                    className="animated-path"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-[1200px] mx-auto relative z-10">
                {service.techStack.map((tech: { name: string, desc: string, icon: React.ReactNode }, i: number) => (
                  <div 
                    key={i} 
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
                    <p className="text-[#5f6c7b] text-[1.05rem] leading-relaxed flex-1 mb-10">
                      {tech.desc}
                    </p>

                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Contact Section at the bottom */}
      <div className="bg-white relative z-10">
        <ContactSection />
      </div>
    </main>
  );
}

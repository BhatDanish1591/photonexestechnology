"use client";
import Link from "next/link";
import { FaReact, FaPython, FaAws } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { BrainCircuit, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "motion/react";
import { useRef } from "react";

const popularCourses = [
  { 
    name: "Full Stack Web\nDevelopment (MERN)", 
    slug: "web-development",
    desc: "Master MongoDB, Express, React, and Node.js. Build scalable web applications from scratch.",
    duration: "4 - 6 Months", 
    icon: FaReact, 
    color: "#eff6ff",
    border: "#2563eb",
    gradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
  },
  { 
    name: "Python\nProgramming", 
    slug: "python",
    desc: "Learn core Python concepts, data structures, and algorithms.",
    duration: "3 - 4 Months", 
    icon: FaPython, 
    color: "#fff7ed",
    border: "#ea580c",
    gradient: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
  },
  { 
    name: "Flutter\nDevelopment", 
    slug: "flutter",
    desc: "Build beautiful native apps for iOS and Android.",
    duration: "3 - 4 Months", 
    icon: SiFlutter, 
    color: "#f0f9ff",
    border: "#0284c7",
    gradient: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
  },
  { 
    name: "AWS Cloud\nPractitioner", 
    slug: "aws",
    desc: "Master cloud infrastructure and AWS core services.",
    duration: "2 - 3 Months", 
    icon: FaAws, 
    color: "#fffbeb",
    border: "#d97706",
    gradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
  },
  { 
    name: "Machine Learning", 
    slug: "machine-learning",
    desc: "Deep dive into AI algorithms with Python.",
    duration: "4 - 6 Months", 
    icon: BrainCircuit, 
    color: "#fff1f2",
    border: "#e11d48",
    gradient: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
  },
];

function CourseCard({ course, index }: { course: typeof popularCourses[0]; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  // 3D Tilt Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-120, 120], [10, -10]), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-120, 120], [-10, 10]), { stiffness: 250, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = course.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link 
        ref={cardRef}
        href="/courses"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          borderBottom: `4px solid ${course.border}`
        }}
        className="neu-card group relative flex flex-col justify-between min-h-[260px] p-8 overflow-hidden no-underline cursor-pointer transition-shadow duration-300 hover:shadow-xl bg-white"
      >
        {/* Glowing Decorative Orb */}
        <div 
          className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
          style={{ background: course.border, transform: "translateZ(-20px)" }}
        />

        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div 
            className="mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 origin-left drop-shadow-sm w-fit"
            style={{ color: course.border }}
          >
            <Icon size={36} />
          </div>
          <h3 className="text-slate-900 font-sans text-xl font-extrabold leading-tight whitespace-pre-line mb-3">
            {course.name}
          </h3>
          <p className="text-slate-600 text-[0.95rem] leading-relaxed m-0">
            {course.desc}
          </p>
        </div>
        
        <div 
          className="mt-8 flex items-center justify-between relative z-10 pt-6 border-t border-slate-200/50"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-3 text-slate-700 text-[0.85rem] font-bold">
            <div className="w-5 h-0.5 rounded-full" style={{ background: course.border }}></div>
            {course.duration}
          </div>
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-white opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
            style={{ background: course.border }}
          >
            <ArrowRight size={14} strokeWidth={3} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CoursesSection() {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="courses"
      className="py-20 px-8 relative overflow-hidden bg-white"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Split Header */}
        <motion.div 
          ref={headerRef}
          className="flex justify-between items-end flex-wrap gap-8 mb-16 border-b border-slate-200 pb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left: Heading */}
          <div className="flex-[1_1_400px]">
            <motion.div 
              className="w-12 h-1 bg-[#ea580c] mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <h2 className="font-extrabold text-[clamp(2.2rem,4vw,3.2rem)] text-slate-900 leading-[1.1] tracking-tight m-0">
              Master In-Demand <br/>
              <span className="text-[#ea580c]">Tech Skills</span>
            </h2>
          </div>

          {/* Right: Description + CTA */}
          <div className="flex-[1_1_380px] max-w-[480px]">
            <p className="text-slate-600 text-[1.05rem] leading-relaxed mb-6 font-medium">
              Hands-on, industry-relevant training programs designed by experts to make you job-ready from day one.
            </p>
            <Link href="/courses" className="inline-flex items-center gap-2 text-blue-600 hover:text-orange-600 font-bold text-sm transition-colors duration-300 pb-1 border-b-2 border-blue-600 hover:border-orange-600">
              Explore All Programs <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Uniform Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {popularCourses.map((course, idx) => (
            <CourseCard key={course.slug} course={course} index={idx} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

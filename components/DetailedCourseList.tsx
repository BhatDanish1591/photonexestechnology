"use client";
import { useState } from "react";
import Link from "next/link";
import { FaReact, FaPython, FaAws, FaJava, FaFigma } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { BrainCircuit, ChevronDown, Clock, CheckCircle2, MonitorPlay } from "lucide-react";

const allCourses = [
  { 
    id: "mern",
    name: "Full Stack Web Development (MERN)", 
    shortDesc: "Master MongoDB, Express, React, and Node.js. Build scalable web applications.",
    duration: "4 - 6 Months", 
    level: "Beginner to Advanced",
    icon: <FaReact size={32} color="#2563eb" />, 
    color: "#eff6ff",
    border: "#bfdbfe",
    longDesc: "This comprehensive MERN stack bootcamp is designed to take you from absolute beginner to a confident Full Stack Developer. You will learn how to build dynamic, data-driven web applications from the ground up.",
    curriculum: [
      "HTML5, CSS3, JavaScript (ES6+)",
      "React.js, Redux, Context API",
      "Node.js, Express.js Backend Architecture",
      "MongoDB Database Design & Mongoose",
      "Authentication (JWT, OAuth) & Security",
      "Deployment (AWS, Vercel, Heroku)"
    ]
  },
  { 
    id: "python",
    name: "Python Programming & Data Structures", 
    shortDesc: "Learn core Python concepts, data structures, and algorithms for problem-solving.",
    duration: "3 - 4 Months", 
    level: "Beginner to Intermediate",
    icon: <FaPython size={32} color="#ea580c" />, 
    color: "#fff7ed",
    border: "#fed7aa",
    longDesc: "Python is the most versatile language in the world. This course focuses on building a rock-solid foundation in logic, data structures, algorithms, and object-oriented programming to prepare you for technical interviews and advanced fields.",
    curriculum: [
      "Python Basics: Syntax, Loops, Functions",
      "Data Structures: Lists, Dictionaries, Sets",
      "Object-Oriented Programming (OOP)",
      "Algorithms: Searching, Sorting, Recursion",
      "File Handling & Exception Management",
      "Capstone Mini-Projects"
    ]
  },
  { 
    id: "flutter",
    name: "Flutter Mobile App Development", 
    shortDesc: "Build beautiful, natively compiled cross-platform apps for iOS and Android.",
    duration: "3 - 4 Months", 
    level: "Intermediate",
    icon: <SiFlutter size={32} color="#0ea5e9" />, 
    color: "#f0f9ff",
    border: "#bae6fd",
    longDesc: "Learn Google's revolutionary UI toolkit. Using Dart, you will learn how to write code once and deploy it as a highly performant native application on both iOS and Android platforms seamlessly.",
    curriculum: [
      "Dart Programming Language",
      "Flutter Widgets & Layouts",
      "State Management (Provider, Bloc)",
      "API Integration & HTTP Requests",
      "Firebase Backend (Auth, Firestore)",
      "Publishing to App Store & Google Play"
    ]
  },
  { 
    id: "aws",
    name: "AWS Cloud Practitioner & Architect", 
    shortDesc: "Master cloud infrastructure, deployment, and AWS core services.",
    duration: "2 - 3 Months", 
    level: "All Levels",
    icon: <FaAws size={32} color="#f59e0b" />, 
    color: "#fffbeb",
    border: "#fde68a",
    longDesc: "Cloud computing is the backbone of modern IT. This course prepares you for the AWS Certified Cloud Practitioner exam, giving you hands-on experience with EC2, S3, IAM, VPCs, and serverless architectures.",
    curriculum: [
      "Cloud Computing Fundamentals",
      "IAM, EC2, S3, and RDS Configuration",
      "Networking: VPC, Route 53, CloudFront",
      "Serverless: Lambda, API Gateway",
      "Security & Compliance Standards",
      "AWS Certification Preparation"
    ]
  },
  { 
    id: "ml",
    name: "Machine Learning & AI", 
    shortDesc: "Deep dive into AI algorithms, neural networks, and data science with Python.",
    duration: "4 - 6 Months", 
    level: "Advanced",
    icon: <BrainCircuit size={32} color="#e11d48" />, 
    color: "#fff1f2",
    border: "#fecdd3",
    longDesc: "Step into the future with Artificial Intelligence. You will build intelligent predictive models using industry-standard libraries, learning both the mathematics behind the algorithms and practical implementation.",
    curriculum: [
      "Data Preprocessing (Pandas, NumPy)",
      "Supervised & Unsupervised Learning",
      "Regression, Classification, Clustering",
      "Deep Learning fundamentals (TensorFlow/Keras)",
      "Computer Vision & NLP Basics",
      "Deploying ML Models via Flask/FastAPI"
    ]
  },
  { 
    id: "java",
    name: "Enterprise Java Full Stack", 
    shortDesc: "Build robust enterprise applications using Java Spring Boot and React.",
    duration: "5 - 6 Months", 
    level: "Intermediate to Advanced",
    icon: <FaJava size={32} color="#4338ca" />, 
    color: "#eef2ff",
    border: "#c7d2fe",
    longDesc: "Java remains the king of enterprise software. This intense training covers Core Java, advanced Spring frameworks, microservices architecture, and connecting them to modern React frontends.",
    curriculum: [
      "Core Java, Multithreading, Collections",
      "Spring Core, Spring MVC, Spring Boot",
      "Hibernate, JPA, MySQL",
      "Microservices & REST API Design",
      "React Frontend Integration",
      "Docker & Enterprise CI/CD pipelines"
    ]
  }
];

export default function DetailedCourseList() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleCourse = (id: string) => {
    if (expandedId === id) setExpandedId(null);
    else setExpandedId(id);
  };

  return (
    <section style={{ padding: "3rem 2rem 4rem", background: "transparent" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map((course) => (
            <div 
              key={course.id}
              className="group relative bg-white/70 backdrop-blur-3xl border border-white/60 p-8 rounded-3xl flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:border-slate-300/50"
            >
              {/* Glowing Background Ring */}
              <div 
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" 
                style={{ background: course.border }} 
              />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ background: course.color }}
                >
                  {course.icon}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100/80 backdrop-blur-sm text-slate-600 border border-slate-200 rounded-full text-xs font-bold tracking-wide">
                  <Clock size={14} /> {course.duration}
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 mb-3 font-sans transition-colors duration-300 group-hover:text-slate-800 relative z-10">
                {course.name}
              </h3>
              
              <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-8 flex-1 relative z-10">
                {course.shortDesc}
              </p>
              
              <Link href="/contact" className="group/btn w-full relative overflow-hidden bg-slate-900 text-white border-none py-3.5 rounded-xl text-[0.95rem] font-bold cursor-pointer flex items-center justify-center shadow-lg shadow-slate-900/20 transition-transform duration-300 hover:-translate-y-1 relative z-10" style={{ textDecoration: 'none' }}>
                <span className="relative z-10">Enroll Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

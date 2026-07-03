"use client";
import { useState } from "react";
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
    <section style={{ padding: "6rem 2rem", background: "#f8fafc" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        
        {allCourses.map((course) => {
          const isExpanded = expandedId === course.id;

          return (
            <div 
              key={course.id}
              style={{
                background: "#ffffff",
                border: "1px solid",
                borderColor: isExpanded ? course.border : "#e2e8f0",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                boxShadow: isExpanded ? "0 20px 25px -5px rgba(0, 0, 0, 0.1)" : "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
              }}
            >
              {/* Header (Clickable) */}
              <div 
                onClick={() => toggleCourse(course.id)}
                style={{
                  padding: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  gap: "2rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flex: 1 }}>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    borderRadius: "12px", 
                    background: course.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    {course.icon}
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: "1.25rem", 
                      fontWeight: 800, 
                      color: "#0f172a", 
                      marginBottom: "0.25rem",
                      fontFamily: "Inter, sans-serif"
                    }}>
                      {course.name}
                    </h3>
                    <p style={{ color: "#475569", fontSize: "0.95rem", margin: 0 }}>
                      {course.shortDesc}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                  <div style={{ textAlign: "right", display: "none" }} className="md-flex-block">
                    {/* These labels are hidden on mobile to save space, but we'll show them on desktop */}
                    <div style={{ color: "#64748b", fontSize: "0.85rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px", justifyContent: "flex-end" }}>
                      <Clock size={14} /> {course.duration}
                    </div>
                  </div>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: isExpanded ? course.color : "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isExpanded ? "#000" : "#64748b",
                    transition: "transform 0.3s ease",
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)"
                  }}>
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div style={{ 
                height: isExpanded ? "auto" : 0, 
                opacity: isExpanded ? 1 : 0, 
                overflow: "hidden",
                transition: "all 0.3s ease"
              }}>
                <div style={{ 
                  padding: "0 2rem 2rem", 
                  borderTop: "1px solid #e2e8f0",
                  marginTop: "1rem",
                  paddingTop: "2rem" 
                }}>
                  
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
                    
                    {/* Left Column: Description */}
                    <div style={{ flex: "1 1 400px" }}>
                      <h4 style={{ color: "#0f172a", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>
                        Course Overview
                      </h4>
                      <p style={{ color: "#475569", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.5rem" }}>
                        {course.longDesc}
                      </p>
                      
                      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
                        <div>
                          <div style={{ color: "#64748b", fontSize: "0.85rem", fontWeight: 600, marginBottom: "4px" }}>Duration</div>
                          <div style={{ color: "#0f172a", fontWeight: 700 }}>{course.duration}</div>
                        </div>
                        <div>
                          <div style={{ color: "#64748b", fontSize: "0.85rem", fontWeight: 600, marginBottom: "4px" }}>Difficulty Level</div>
                          <div style={{ color: "#0f172a", fontWeight: 700 }}>{course.level}</div>
                        </div>
                      </div>

                      <button style={{
                        background: "#ea580c",
                        color: "#ffffff",
                        border: "none",
                        padding: "0.8rem 2rem",
                        borderRadius: "6px",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "background 0.2s"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#c2410c")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#ea580c")}
                      >
                        Enroll Now
                      </button>
                    </div>

                    {/* Right Column: Curriculum */}
                    <div style={{ flex: "1 1 300px", background: "#f8fafc", padding: "1.5rem", borderRadius: "12px" }}>
                      <h4 style={{ color: "#0f172a", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
                        <MonitorPlay size={18} color="#2563eb" />
                        Curriculum Highlights
                      </h4>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {course.curriculum.map((item, i) => (
                          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                            <CheckCircle2 size={16} color="#2563eb" style={{ marginTop: "4px", flexShrink: 0 }} />
                            <span style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.5 }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

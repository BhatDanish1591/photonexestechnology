import CustomHeroSection from "@/components/sections/CustomHeroSection";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Tech Blog & Insights",
  description: "Read the latest insights on software development, AI trends, cloud computing, and IT career advice on the Photonexes Technologies blog.",
  keywords: ["tech blog", "software development trends", "AI news", "IT career advice"],
};

const blogs = [
  {
    category: "AI",
    date: "Dec 15, 2026",
    readTime: "5 min",
    title: "The Future of AI in Software Development",
    desc: "How generative AI is transforming the way we write, review, and deploy code in modern software engineering.",
    color: "#8b5cf6"
  },
  {
    category: "Web Dev",
    date: "Dec 10, 2026",
    readTime: "7 min",
    title: "Top 10 Web Development Trends for 2027",
    desc: "From server components to edge computing — the web development landscape is evolving faster than ever.",
    color: "#0ea5e9"
  },
  {
    category: "Programming",
    date: "Dec 5, 2026",
    readTime: "6 min",
    title: "Python vs JavaScript: Which Should You Learn First?",
    desc: "A comprehensive guide for beginners on choosing the right first programming language for their career goals.",
    color: "#f59e0b"
  },
  {
    category: "Cloud",
    date: "Nov 28, 2026",
    readTime: "8 min",
    title: "AWS vs Azure vs Google Cloud in 2027",
    desc: "An in-depth comparison of the top three cloud providers and how to choose the right one for your enterprise.",
    color: "#10b981"
  },
  {
    category: "Careers",
    date: "Nov 20, 2026",
    readTime: "4 min",
    title: "How to Ace Your Next Technical Interview",
    desc: "Actionable advice from our senior engineering team on how to prepare for and pass modern system design interviews.",
    color: "#ec4899"
  },
  {
    category: "Security",
    date: "Nov 12, 2026",
    readTime: "9 min",
    title: "Zero Trust Architecture Explained",
    desc: "Why perimeter security is dead and how modern enterprises are securing their networks using Zero Trust principles.",
    color: "#ef4444"
  }
];

export default function BlogPage() {
  return (
    <main>
      <CustomHeroSection 
        title="Insights & News" 
        description="Read the latest updates, tutorials, and insights from our team of tech experts."
        imageSrc="/heroes/hero_blogs_1783476408570.png"
        nextSectionColor="#f8fafc"
      />
      <section className="pt-0 pb-16 -mt-8 bg-slate-50 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          
          {/* Editorial Left-Aligned Header */}
          <div className="max-w-4xl mb-12">
            <div className="w-20 h-1.5 bg-[#ea580c] mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Latest <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#0284c7]">
                Articles & News
              </span>
            </h2>
            
            <div className="relative pl-6 md:pl-8 border-l-4 border-[#2dd4bf] py-4 bg-gradient-to-r from-teal-50/60 to-transparent rounded-r-2xl mt-6">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                Dive into our expert-written articles covering everything from cutting-edge AI developments to practical career advice and software engineering tutorials.
              </p>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <Link 
                href={`/blog#${i}`}
                key={i} 
                className="group bg-[#f4f7f9] p-8 rounded-[32px] flex flex-col h-full border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Meta */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <span 
                    className="px-4 py-1.5 rounded-full text-[0.75rem] font-black shadow-sm bg-white uppercase tracking-wider"
                    style={{ color: blog.color, border: `1px solid ${blog.color}40` }}
                  >
                    {blog.category}
                  </span>
                  <span className="text-slate-500 text-[0.75rem] font-bold uppercase tracking-wider">{blog.date}</span>
                </div>
                
                <h3 className="text-[1.55rem] font-black text-slate-900 leading-tight mb-4 relative z-10">
                  {blog.title}
                </h3>
                
                <p className="text-slate-600 text-[1.05rem] leading-relaxed flex-grow mb-6 relative z-10">
                  {blog.desc}
                </p>

              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

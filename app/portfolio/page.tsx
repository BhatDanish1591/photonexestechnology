import Image from "next/image";
import Link from "next/link";
import CustomHeroSection from "@/components/sections/CustomHeroSection";

export const metadata = {
  title: "Our Portfolio",
  description: "Explore our recent success stories, case studies, and enterprise solutions delivered by Photonexes Technologies.",
  keywords: ["software portfolio", "case studies", "enterprise solutions", "IT success stories"],
};

const projects = [
  { slug: "enterprise-erp-system", name: "Enterprise ERP System", client: "TechCorp Industries", category: "Software Development", image: "/portfolio/erp_dashboard_1784054055654.png" },
  { slug: "healthcare-management-app", name: "Healthcare Management App", client: "MediCare Plus", category: "Mobile App", image: "/portfolio/healthcare_app_1784054064616.png" },
  { slug: "e-commerce-platform", name: "E-Commerce Platform", client: "RetailGiant", category: "Web Development", image: "/portfolio/ecommerce_platform_1784054075390.png" },
  { slug: "ai-predictive-analytics", name: "AI Predictive Analytics", client: "FinTech Solutions", category: "Machine Learning", image: "/portfolio/ai_analytics_1784054086182.png" },
  { slug: "cloud-migration-strategy", name: "Cloud Migration Strategy", client: "Global Logistics", category: "Cloud Services", image: "/portfolio/cloud_migration_1784054096177.png" },
  { slug: "student-portal", name: "Student Portal", client: "EduTech Academy", category: "Web Development", image: "/portfolio/student_portal_1784054106685.png" },
];

export default function PortfolioPage() {
  return (
    <main>
      <CustomHeroSection 
        title="Our Success Stories" 
        description="Explore our portfolio of successful digital transformations. See how we've helped businesses achieve their goals."
        imageSrc="/heroes/hero_portfolios_1783476385535.png"
        nextSectionColor="#f8fafc"
      />
      <section className="pt-0 pb-12 -mt-8 bg-slate-50 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          
          {/* Editorial Left-Aligned Header */}
          <div className="max-w-4xl mb-8">
            <div className="w-20 h-1.5 bg-[#ea580c] mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Our Recent <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#0284c7]">
                Work & Case Studies
              </span>
            </h2>
            
            <div className="relative pl-6 md:pl-8 border-l-4 border-[#2dd4bf] py-4 bg-gradient-to-r from-teal-50/60 to-transparent rounded-r-2xl mt-6">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                Explore some of the successful digital products and enterprise solutions we&apos;ve delivered for our global clients, driving innovation and measurable growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <Link 
                href={`/portfolio/${p.slug}`}
                key={i} 
                className="group bg-white rounded-[32px] overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100"
              >
                {/* Image Container */}
                <div className="w-full h-[280px] overflow-hidden relative bg-[#f4f7f9] p-8 flex items-center justify-center">
                  <Image 
                    src={p.image} 
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i < 3}
                    className="object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110 p-8"
                  />
                  {/* Category Badge overlaying the image */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md text-[#ea580c] px-4 py-1.5 rounded-full text-[0.75rem] font-black uppercase tracking-wider shadow-sm border border-orange-100/50 z-10">
                    {p.category}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-1 relative">
                  {/* Decorative orange line */}
                  <div className="absolute top-0 left-8 w-16 h-1.5 bg-gradient-to-r from-[#ea580c] to-[#f97316] rounded-b-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  
                  <h3 className="text-[1.65rem] font-black text-slate-900 mb-4 leading-tight tracking-tight mt-2">{p.name}</h3>
                  
                  <div className="mt-auto flex items-center gap-2 pt-6 border-t border-slate-100/60">
                    <span className="text-slate-400 text-[0.95rem] font-medium uppercase tracking-wide">Client:</span>
                    <span className="text-slate-700 text-[1.05rem] font-extrabold">{p.client}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

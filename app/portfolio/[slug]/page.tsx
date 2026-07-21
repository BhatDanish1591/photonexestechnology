import CustomHeroSection from "@/components/sections/CustomHeroSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${title} | Photonexes Portfolio`,
    description: `Read the case study for ${title} delivered by Photonexes Technology.`,
  };
}

export default async function PortfolioCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  return (
    <main>
      <CustomHeroSection 
        title={title}
        description="Detailed case study and project overview."
        imageSrc="/heroes/hero_portfolios_1783476385535.png"
        nextSectionColor="#ffffff"
      />
      <section className="py-20 bg-white min-h-[50vh]">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-[#ea580c] font-bold hover:underline mb-12">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Case Study Placeholder: {title}</h2>
            <p className="mb-4 text-lg">This is a dynamically generated placeholder page for the portfolio case study.</p>
            <p className="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mt-8 rounded-r-lg">
              <p className="font-bold text-teal-800 m-0">Note for Editor:</p>
              <p className="text-teal-700 text-sm mt-1">Replace this placeholder text with the actual case study content, client details, and results.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

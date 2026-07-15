import CustomHeroSection from "@/components/sections/CustomHeroSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${title} | Photonexes Blog`,
    description: `Read our latest insights on ${title} at Photonexes Technologies.`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  return (
    <main>
      <CustomHeroSection 
        title={title}
        description="Insights and updates from our expert engineering team."
        imageSrc="/heroes/hero_blogs_1783476408570.png"
        nextSectionColor="#ffffff"
      />
      <section className="py-20 bg-white min-h-[50vh]">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#ea580c] font-bold hover:underline mb-12">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Placeholder Content for: {title}</h2>
            <p className="mb-4 text-lg">This is a dynamically generated placeholder page for the blog post.</p>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-8 rounded-r-lg">
              <p className="font-bold text-orange-800 m-0">Note for Editor:</p>
              <p className="text-orange-700 text-sm mt-1">Replace this placeholder text with the actual article content in the CMS or markdown files.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import CustomHeroSection from "@/components/sections/CustomHeroSection";
import BlogSection from "@/components/sections/BlogSection";

export const metadata = {
  title: "Tech Blog & Insights",
  description: "Read the latest insights on software development, AI trends, cloud computing, and IT career advice on the Photonexes Technologies blog.",
  keywords: ["tech blog", "software development trends", "AI news", "IT career advice"],
};

export default function BlogPage() {
  return (
    <main>
      <CustomHeroSection 
        title="Insights & News" 
        description="Read the latest updates, tutorials, and insights from our team of tech experts."
        imageSrc="/heroes/hero_blogs_1783476408570.png"
        nextSectionColor="#ffffff"
      />
      <div style={{ background: "#ffffff" }}>
        <BlogSection />
      </div>
    </main>
  );
}

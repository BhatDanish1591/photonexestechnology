import PageHeader from "@/components/PageHeader";
import BlogSection from "@/components/sections/BlogSection";

export const metadata = {
  title: "Tech Blog & Insights",
  description: "Read the latest insights on software development, AI trends, cloud computing, and IT career advice on the Photonexes Technologies blog.",
  keywords: ["tech blog", "software development trends", "AI news", "IT career advice"],
};

export default function BlogPage() {
  return (
    <main>
      <PageHeader 
        title="Insights & Tech Blog" 
        subtitle="Stay ahead of the curve with our latest articles, tutorials, and insights on modern software development, AI, and industry trends."
        breadcrumb="Blog" 
        badge="Latest Updates"
      />
      <div style={{ background: "#ffffff" }}>
        <BlogSection />
      </div>
    </main>
  );
}

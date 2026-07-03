import PageHeader from "@/components/PageHeader";
import BlogSection from "@/components/sections/BlogSection";

export const metadata = {
  title: "Tech Blog | Photonexes",
  description: "Stay ahead with the latest tech insights and career guidance.",
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

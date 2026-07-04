import PageHeader from "@/components/PageHeader";
import ServicesGridSection from "@/components/sections/ServicesGridSection";
import WorkProcessSection from "@/components/sections/WorkProcessSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "IT Services & Software Development",
  description: "Explore our comprehensive IT services including web development, mobile apps, AI solutions, cloud computing, and enterprise software by Photonexes.",
  keywords: ["web development services", "mobile app development", "cloud computing solutions", "AI software"],
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader 
        title="Enterprise IT Solutions" 
        subtitle="From custom software development to cloud migrations and artificial intelligence, we deliver high-performance digital solutions tailored to your business."
        breadcrumb="Services" 
        badge="What We Do"
      />
      <div style={{ background: "#ffffff" }}>
        <ServicesGridSection />
      </div>
      <WorkProcessSection />
      <ContactSection />
    </main>
  );
}

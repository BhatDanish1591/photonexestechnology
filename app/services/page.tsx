import CustomHeroSection from "@/components/sections/CustomHeroSection";
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
      <CustomHeroSection 
        title="Enterprise IT Solutions" 
        description="From custom software development to cloud migrations and artificial intelligence, we deliver high-performance digital solutions tailored to your business."
        imageSrc="/heroes/hero_services_1783476332000.png"
        nextSectionColor="#ffffff"
      />
      <div style={{ background: "#ffffff" }}>
        <ServicesGridSection />
      </div>
      <WorkProcessSection />
      <ContactSection />
    </main>
  );
}

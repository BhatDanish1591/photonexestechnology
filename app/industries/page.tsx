import CustomHeroSection from "@/components/sections/CustomHeroSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Industries We Serve",
  description: "Photonexes Technology provides specialized IT solutions for healthcare, finance, education, logistics, and retail industries worldwide.",
  keywords: ["enterprise software solutions", "healthcare IT", "finance software", "logistics tech solutions"],
};

export default function IndustriesPage() {
  return (
    <main style={{ minHeight: "100vh", background: "transparent" }}>
      <CustomHeroSection 
        title="Industries We Serve" 
        description="We provide tailored, enterprise-grade software solutions across a wide range of global industries. We have the domain expertise to scale your business."
        imageSrc="/heroes/hero_industries_1783476347035.png"
        nextSectionColor="#ffffff"
      />
      <IndustriesSection />
      <ContactSection />
    </main>
  );
}

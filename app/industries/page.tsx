import PageHeader from "@/components/PageHeader";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Industries We Serve",
  description: "Photonexes Technologies provides specialized IT solutions for healthcare, finance, education, logistics, and retail industries worldwide.",
  keywords: ["enterprise software solutions", "healthcare IT", "finance software", "logistics tech solutions"],
};

export default function IndustriesPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <PageHeader 
        title="Industries We Serve" 
        subtitle="We provide tailored, enterprise-grade software solutions across a wide range of global industries."
        breadcrumb="Industries" 
        badge="Domain Expertise"
      />
      <IndustriesSection />
      <ContactSection />
    </main>
  );
}

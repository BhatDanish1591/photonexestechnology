import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/sections/AboutSection";
import CoreValuesSection from "@/components/sections/CoreValuesSection";
import StatsBannerSection from "@/components/sections/StatsBannerSection";
import ClientsSection from "@/components/sections/ClientsSection";

export const metadata = {
  title: "About Us | Photonexes",
  description: "Learn more about Photonexes Technologies and our mission.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader 
        title="About Photonexes" 
        subtitle="We are a leading IT software and training company dedicated to delivering cutting-edge digital solutions and empowering the next generation of tech leaders."
        breadcrumb="About Us" 
        badge="Company Overview"
      />
      <CoreValuesSection />
      <div style={{ background: "#f8fafc" }}>
        <AboutSection />
      </div>
      <StatsBannerSection />
      <ClientsSection />
    </main>
  );
}

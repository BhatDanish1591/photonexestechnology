import AboutSection from "@/components/sections/AboutSection";
import CoreValuesSection from "@/components/sections/CoreValuesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import StatsBannerSection from "@/components/sections/StatsBannerSection";
import ClientsSection from "@/components/sections/ClientsSection";

export const metadata = {
  title: "About Us",
  description: "Discover Photonexes Technologies, a leading IT software development company and training institute in India, specializing in digital transformation, AI, and cloud solutions.",
  keywords: ["about Photonexes", "IT company India", "software training institute", "tech company profile"],
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <StatsBannerSection />
      <ClientsSection />
    </main>
  );
}

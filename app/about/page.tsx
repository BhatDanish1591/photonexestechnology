import AboutSection from "@/components/sections/AboutSection";
import AboutDetailsSection from "@/components/sections/AboutDetailsSection";
import AboutCTASection from "@/components/sections/AboutCTASection";

export const metadata = {
  title: "About Us",
  description: "Discover Photonexes Technology, a leading IT software development company and training institute in India, specializing in digital transformation, AI, and cloud solutions.",
  keywords: ["about Photonexes", "IT company India", "software training institute", "tech company profile"],
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <AboutDetailsSection />
      <AboutCTASection />
    </main>
  );
}

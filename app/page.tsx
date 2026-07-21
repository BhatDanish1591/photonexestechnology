import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSection from "@/components/sections/HeroSection";
import CoursesSection from "@/components/sections/CoursesSection";
import ServicesGridSection from "@/components/sections/ServicesGridSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import InternshipSection from "@/components/sections/InternshipSection";
import PlacementSection from "@/components/sections/PlacementSection";
import StatsBannerSection from "@/components/sections/StatsBannerSection";

import ClientsSection from "@/components/sections/ClientsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import GlobalCTASection from "@/components/sections/GlobalCTASection";

import BestCompanySection from "@/components/sections/BestCompanySection";

import FeaturesBannerSection from "@/components/sections/FeaturesBannerSection";

export const metadata: Metadata = {
  title: "Photonexes Technology",
  description:
    "India's premier IT Software Company and Training Institute. Expert software development, web development, mobile apps, cloud solutions, AI, cybersecurity, and professional IT training with internships, certifications, and guaranteed placement assistance.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BestCompanySection />
      <ScrollReveal>
        <ServicesGridSection />
      </ScrollReveal>
      <GlobalCTASection />
      <FeaturesBannerSection />
    </main>
  );
}

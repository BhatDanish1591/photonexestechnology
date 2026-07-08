import ContactHeroForm from "@/components/sections/ContactHeroForm";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Us",
  description: "Contact Photonexes Technologies for IT services, software development, cloud solutions, and full-stack training. Let's build the future together.",
  keywords: ["contact Photonexes", "hire software developers", "IT consulting India", "tech support"],
};

export default function ContactPage() {
  return (
    <main>
      <ContactHeroForm />
      <div style={{ background: "#ffffff" }}>
        <ContactSection />
      </div>
    </main>
  );
}

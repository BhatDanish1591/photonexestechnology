import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Us",
  description: "Contact Photonexes Technologies for IT services, software development, cloud solutions, and full-stack training. Let's build the future together.",
  keywords: ["contact Photonexes", "hire software developers", "IT consulting India", "tech support"],
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader 
        title="Let's Build Together" 
        subtitle="Have a project in mind or want to join our training program? Reach out to our team of experts and let's discuss how we can help you achieve your goals."
        breadcrumb="Contact" 
        badge="Get In Touch"
      />
      <div style={{ background: "#ffffff" }}>
        <ContactSection />
      </div>
    </main>
  );
}

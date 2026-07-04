import PageHeader from "@/components/PageHeader";
import InternshipSection from "@/components/sections/InternshipSection";
import ClientsSection from "@/components/sections/ClientsSection";

export const metadata = {
  title: "IT Internship Programs",
  description: "Join our hands-on IT internship programs in software development, data science, and cloud computing. Gain real-world experience at Photonexes.",
  keywords: ["IT internships", "software engineering intern", "summer internship India", "tech internships"],
};

export default function InternshipPage() {
  return (
    <main>
      <PageHeader 
        title="Internship Program" 
        subtitle="Kickstart your tech career with our intensive, project-based internship program. Gain hands-on experience working on real-world industry applications."
        breadcrumb="Internship" 
        badge="Career Accelerator"
      />
      <div style={{ background: "#fff7ed" }}>
        <InternshipSection />
      </div>
      <ClientsSection />
    </main>
  );
}

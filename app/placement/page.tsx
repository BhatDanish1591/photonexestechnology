import PageHeader from "@/components/PageHeader";
import PlacementSection from "@/components/sections/PlacementSection";
import ClientsSection from "@/components/sections/ClientsSection";

export const metadata = {
  title: "Placement Assistance & Career Support",
  description: "100% Placement Assistance with Photonexes Technologies. We connect our certified students with top tech companies across India.",
  keywords: ["IT placement", "guaranteed placement courses", "tech jobs India", "software developer jobs"],
};

export default function PlacementPage() {
  return (
    <main>
      <PageHeader 
        title="Placement Assistance" 
        subtitle="We don't just train you; we launch your career. Our dedicated placement cell connects our top graduates with leading tech companies."
        breadcrumb="Placement" 
        badge="100% Guaranteed"
      />
      <div style={{ background: "#f0fdf4" }}>
        <PlacementSection />
      </div>
      <ClientsSection />
    </main>
  );
}

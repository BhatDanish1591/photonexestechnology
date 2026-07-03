import PageHeader from "@/components/PageHeader";
import DetailedCourseList from "@/components/DetailedCourseList";
import WhyLearnWithUsSection from "@/components/sections/WhyLearnWithUsSection";
import PlacementSection from "@/components/sections/PlacementSection";

export const metadata = {
  title: "Our Courses | Photonexes",
  description: "Explore our industry-relevant training courses.",
};

export default function CoursesPage() {
  return (
    <main>
      <PageHeader 
        title="Industrial Training Programs" 
        subtitle="Master the most in-demand technologies with our project-based training programs. Gain real-world experience and 100% placement assistance."
        breadcrumb="Courses" 
        badge="Learn With Experts"
      />
      <WhyLearnWithUsSection />
      <DetailedCourseList />
      <PlacementSection />
    </main>
  );
}

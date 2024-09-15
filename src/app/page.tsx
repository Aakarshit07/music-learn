import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusciSchoolTestimonials from "@/components/TestimonialsCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusciSchoolTestimonials />     
    </main>
  );
}

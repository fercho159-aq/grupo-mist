import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ServicesGrid from "@/components/home/ServicesGrid";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ClientLogos from "@/components/home/ClientLogos";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <FeaturedProjects />
      <ClientLogos />
      <CTASection />
    </>
  );
}

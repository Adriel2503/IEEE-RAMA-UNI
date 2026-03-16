import HeroCarousel from "@/components/home/HeroCarousel";
import StatsBar from "@/components/home/StatsBar";
import AboutSection from "@/components/home/AboutSection";
import ChaptersGrid from "@/components/home/ChaptersGrid";
import EventsSection from "@/components/home/EventsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import MembershipSection from "@/components/home/MembershipSection";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <StatsBar />
      <AboutSection />
      <ChaptersGrid />
      <EventsSection />
      <ProjectsSection />
      <MembershipSection />
      <CTABanner />
    </>
  );
}

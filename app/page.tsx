import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      {/* 1. Hero - Hook them with value proposition */}
      <HeroSection />

      {/* 2. Stats - Instant credibility */}
      <StatsBar />

      {/* 3. Featured Projects - Proof of results */}
      <FeaturedProjects />

      {/* 4. Testimonials - Social proof */}
      <Testimonials />

      {/* 5. How It Works - Remove uncertainty */}
      <HowItWorks />

      {/* 6. Who This Is For - Pre-qualify leads */}
      <WhoThisIsFor />

      {/* 7. FAQ - Address objections */}
      <FAQ />

      {/* 8. CTA - Clear next step */}
      <CTASection />
    </main>
  );
}

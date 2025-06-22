import { LandingHeader } from "@/components/LandingHeader";
import { LandingFooter } from "@/components/LandingFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { UrgencyBanner } from "@/components/UrgencyBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <LandingHeader />
        <UrgencyBanner />
      </div>
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ProofSection />
        <PricingSection />
        <FaqSection />
      </main>
      <LandingFooter />
    </div>
  );
}

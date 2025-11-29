import PremiumNav from "@/components/nav/PremiumNav";
import { Footer } from "@/components/nav/Footer";
import { HomeHero } from "@/components/home/HomeHero";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SignatureCapabilities } from "@/components/home/SignatureCapabilities";
import { ResultsProof } from "@/components/home/ResultsProof";
import { AboutSection } from "@/components/home/AboutSection";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { FinalCTA } from "@/components/home/FinalCTA";

import LuxuryCursor from "@/src/components/LuxuryCursor";
import { InitInteractions } from "@/src/animations/InitInteractionsClient";

export default async function HomePage() {
  return (
    <div className="relative min-h-screen bg-onyx text-paper">
      <PremiumNav />
      <LuxuryCursor />
      <InitInteractions />
      <HomeHero />
      <SocialProofBar />
      <FeaturedWork />
      <WhyChooseUs />
      <SignatureCapabilities />
      <ResultsProof />
      <AboutSection />
      <ProcessTimeline />
      <FinalCTA />
      <Footer />
    </div>
  );
}

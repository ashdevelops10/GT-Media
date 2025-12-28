import PremiumNav from "@/components/nav/PremiumNav";
import { Footer } from "@/components/nav/Footer";
import { HomeHero } from "@/components/home/HomeHero";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { BrandPartners } from "@/components/home/BrandPartners";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SignatureCapabilities } from "@/components/home/SignatureCapabilities";
import { ResultsProof } from "@/components/home/ResultsProof";
import { AboutSection } from "@/components/home/AboutSection";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CulturalInfluence } from "@/components/home/CulturalInfluence";

import LuxuryCursor from "@/src/components/LuxuryCursor";
import { InitInteractions } from "@/src/animations/InitInteractionsClient";

export default async function HomePage() {
  return (
    <div className="relative min-h-screen bg-onyx text-white">
      <PremiumNav />
      <LuxuryCursor />
      <InitInteractions />
      <HomeHero />
      <SocialProofBar />
      <BrandPartners />
      <FeaturedWork />
      <WhyChooseUs />
      <SignatureCapabilities />
      <CulturalInfluence />
      <ResultsProof />
      <AboutSection />
      <ProcessTimeline />
      <FinalCTA />
      <Footer />
    </div>
  );
}

import PremiumNav from "@/components/nav/PremiumNav";
import { Footer } from "@/components/nav/Footer";
import { HomeHero } from "@/components/home/HomeHero";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { BrandPartners } from "@/components/home/BrandPartners";
import { SignatureCapabilities } from "@/components/home/SignatureCapabilities";
import { ResultsProof } from "@/components/home/ResultsProof";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CulturalInfluence } from "@/components/home/CulturalInfluence";
import { InternationalCollabs } from "@/components/home/InternationalCollabs";
import { ArtistCollabs } from "@/components/home/ArtistCollabs";
import { PRWins } from "@/components/home/PRWins";

import LuxuryCursor from "@/src/components/LuxuryCursor";
import { InitInteractions } from "@/src/animations/InitInteractionsClient";

export default async function HomePage() {
  return (
    <div className="relative min-h-screen bg-onyx text-white">
      <PremiumNav />
      <LuxuryCursor />
      <InitInteractions />
      <HomeHero />
      <BrandPartners />
      <SignatureCapabilities />
      <FeaturedWork />
      <ArtistCollabs />
      <InternationalCollabs />
      <PRWins />
      <CulturalInfluence />
      <ResultsProof />
      <FinalCTA />
      <Footer />
    </div>
  );
}

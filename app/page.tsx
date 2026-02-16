import PremiumNav from "@/components/nav/PremiumNav";
import { Footer } from "@/components/nav/Footer";
import { HomeHero } from "@/components/home/HomeHero";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ClientInteractionsWrapper } from "./ClientInteractionsWrapper";

// Lazy load non-critical sections
const FeaturedWork = dynamic(() => import("@/components/home/FeaturedWork").then(mod => ({ default: mod.FeaturedWork })), {
  loading: () => <div className="h-96 bg-black animate-pulse" />,
  ssr: true
});

const BrandPartners = dynamic(() => import("@/components/home/BrandPartners").then(mod => ({ default: mod.BrandPartners })), {
  loading: () => <div className="h-80 bg-black animate-pulse" />,
  ssr: true
});

const SignatureCapabilities = dynamic(() => import("@/components/home/SignatureCapabilities").then(mod => ({ default: mod.SignatureCapabilities })), {
  loading: () => <div className="h-96 bg-black animate-pulse" />,
  ssr: true
});

const ResultsProof = dynamic(() => import("@/components/home/ResultsProof").then(mod => ({ default: mod.ResultsProof })), {
  loading: () => <div className="h-96 bg-black animate-pulse" />,
  ssr: true
});

const FinalCTA = dynamic(() => import("@/components/home/FinalCTA").then(mod => ({ default: mod.FinalCTA })), {
  loading: () => <div className="h-80 bg-black animate-pulse" />,
  ssr: true
});

const CulturalInfluence = dynamic(() => import("@/components/home/CulturalInfluence").then(mod => ({ default: mod.CulturalInfluence })), {
  loading: () => <div className="h-96 bg-black animate-pulse" />,
  ssr: true
});

const InternationalCollabs = dynamic(() => import("@/components/home/InternationalCollabs").then(mod => ({ default: mod.InternationalCollabs })), {
  loading: () => <div className="h-96 bg-black animate-pulse" />,
  ssr: true
});

const ArtistCollabs = dynamic(() => import("@/components/home/ArtistCollabs").then(mod => ({ default: mod.ArtistCollabs })), {
  loading: () => <div className="h-96 bg-black animate-pulse" />,
  ssr: true
});

const BrandShowcase = dynamic(() => import("@/components/home/BrandShowcase").then(mod => ({ default: mod.BrandShowcase })), {
  loading: () => <div className="h-96 bg-black animate-pulse" />,
  ssr: true
});

const PRWins = dynamic(() => import("@/components/home/PRWins").then(mod => ({ default: mod.PRWins })), {
  loading: () => <div className="h-96 bg-black animate-pulse" />,
  ssr: true
});

export default async function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <PremiumNav />
      <ClientInteractionsWrapper />
      <HomeHero />
      <Suspense fallback={<div className="h-80 bg-black animate-pulse" />}>
        <BrandPartners />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <SignatureCapabilities />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <FeaturedWork />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <BrandShowcase />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <ArtistCollabs />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <InternationalCollabs />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <PRWins />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <CulturalInfluence />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <ResultsProof />
      </Suspense>
      <Suspense fallback={<div className="h-80 bg-black animate-pulse" />}>
        <FinalCTA />
      </Suspense>
      <Footer />
    </div>
  );
}

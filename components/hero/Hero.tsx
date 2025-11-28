"use client";

import dynamic from "next/dynamic";

// Client-only animated hero
const HeroClient = dynamic(() => import("./Hero.client"), {
  ssr: false
});

// Optional heavy Three.js hero (React Three Fiber), lazy-loaded
const HeroThree = dynamic(() => import("./HeroThree.client"), {
  ssr: false,
  loading: () => (
    <div className="h-72 w-full animate-pulse rounded-card bg-graphite-700/20" />
  )
});

type HeroProps = {
  withThree?: boolean;
};

export default function Hero({ withThree = false }: HeroProps) {
  return (
    <section className="luxury-hero-container relative flex min-h-screen flex-col justify-center pt-24">
      <HeroClient />
      {withThree && (
        <div className="mt-16">
          <HeroThree />
        </div>
      )}
    </section>
  );
}

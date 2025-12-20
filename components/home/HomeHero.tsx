"use client";

import { Container, Grid12 } from "@/components/layout";
import { HomeHeroVideo } from "@/components/home/HomeHeroVideo";
import Link from "next/link";

export function HomeHero() {
  return (
    <section
      className="relative h-[100dvh] w-full flex items-center justify-center bg-onyx text-paper overflow-hidden"
      data-hero-root
    >
      <Container className="h-full flex items-center py-4 sm:py-20 md:py-24">
        <Grid12 className="items-start lg:items-center w-full h-full lg:h-auto" gap="tight">
          <div className="col-span-12 lg:col-span-7 z-10 flex flex-col justify-center order-2 lg:order-1">
            <h1
              className="font-display text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-4 sm:mb-5 md:mb-6 lg:mb-7"
              data-hero-title
            >
              <span className="block">Cinematic campaigns that move</span>
              <span className="block">markets and minds.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-soft-gray max-w-[52ch] mb-5 sm:mb-6 md:mb-8 lg:mb-10">
              GT Media Studio is a performance-first creative partner uniting brand strategy,
              high-impact content, and precision media across music, celebrity, brand, and
              political ecosystems—built for clients who expect results, not experiments.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 sm:h-12 md:h-14 px-6 sm:px-7 md:px-8 bg-accent-gold text-onyx font-medium text-sm sm:text-base hover:bg-opacity-90 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold whitespace-nowrap"
              >
                Book a Consultation
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center h-12 sm:h-12 md:h-14 px-6 sm:px-7 md:px-8 border border-soft-gray text-paper text-sm sm:text-base hover:border-paper transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-gray"
              >
                View Work
              </Link>
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-5 relative h-[45vh] sm:h-[50vh] lg:h-[80vh] mb-4 lg:mb-0 lg:mt-0 order-1 lg:order-2"
            data-hero-bg
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-transparent rounded-lg" />
            <div className="relative w-full h-full overflow-hidden rounded-lg border border-soft-gray/20 bg-black/60">
              <HomeHeroVideo />
            </div>
          </div>
        </Grid12>
      </Container>

      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('/noise.png')] bg-repeat" />
    </section>
  );
}


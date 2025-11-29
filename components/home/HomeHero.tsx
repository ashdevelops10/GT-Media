"use client";

import { Container, Grid12 } from "@/components/layout";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-onyx text-paper overflow-hidden" data-hero-root>
      <Container>
        <Grid12 className="items-center">
          <div className="col-span-12 lg:col-span-7 z-10">
            <p className="text-xs uppercase tracking-widest text-soft-gray mb-6" data-hero-sub>
              Performance-First Creative Partner
            </p>

            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-8"
              data-hero-title
            >
              <span className="block">Cinematic campaigns that move</span>
              <span className="block">markets and minds.</span>
            </h1>

            <p className="text-lg md:text-xl text-soft-gray max-w-[50ch] mb-12">
              GT Media Studio is a performance-first creative partner uniting brand strategy,
              high-impact content, and precision media across music, celebrity, brand, and
              political ecosystems—built for clients who expect results, not experiments.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent-gold text-onyx font-medium hover:bg-opacity-90 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold"
              >
                Book a Consultation
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 border border-soft-gray text-paper hover:border-paper transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-gray"
              >
                View Work
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative h-[400px] lg:h-[600px] mt-12 lg:mt-0" data-hero-bg>
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-transparent rounded-lg" />
          </div>
        </Grid12>
      </Container>

      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('/noise.png')] bg-repeat" />
    </section>
  );
}


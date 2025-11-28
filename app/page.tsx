import Nav from "@/components/nav/Nav";
import Hero from "@/components/hero/Hero";
import { getPerfMetrics } from "@/lib/analytics/perf";

export default async function HomePage() {
  // Example server-side call; no JS needed for basic sections.
  await getPerfMetrics(); // stubbed; can be wired later.

  return (
    <main className="relative min-h-screen bg-onyx text-paper">
      <Nav />
      <Hero withThree={false} />
      
      {/* Capabilities Section - Editorial grid */}
      <section className="luxury-container pb-section-xl pt-section-l">
        <div className="grid gap-16 md:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-micro font-semibold uppercase tracking-wider text-graphite-400">
              Capabilities
            </h2>
            <p className="text-body-sm leading-relaxed text-graphite-400">
              Creative direction, motion design, realtime experiential,
              high-impact product launches, flagship editorial experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-micro font-semibold uppercase tracking-wider text-graphite-400">
              Philosophy
            </h2>
            <p className="text-body-sm leading-relaxed text-graphite-400">
              Cinematic precision engineered for the web. Every motion curve,
              pixel, and byte serves the narrative. Performance-first by discipline.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-micro font-semibold uppercase tracking-wider text-graphite-400">
              Contact
            </h2>
            <p className="text-body-sm leading-relaxed text-graphite-400">
              For project inquiries and new business:{" "}
              <a 
                href="mailto:hello@gt-media.com"
                className="font-medium text-paper transition-colors duration-xs hover:text-vermilion"
              >
                hello@gt-media.com
              </a>
            </p>
          </div>
        </div>
      </section>
      
      {/* Visual accent divider */}
      <div className="luxury-container">
        <div className="h-px bg-gradient-to-r from-transparent via-vermilion/20 to-transparent" />
      </div>
      
      {/* Positioning Statement */}
      <section className="luxury-container py-section-l">
        <div className="max-w-3xl space-y-8">
          <h2 className="text-h2 font-display text-balance">
            Direction for <span className="text-vermilion">high-stakes</span> moments.
          </h2>
          <p className="text-body-lg leading-relaxed text-graphite-400">
            We partner with Series B+ tech, luxury DTC, culture media, and experiential 
            retail brands on flagship launches that demand board-room clarity and 
            production-level motion systems.
          </p>
          <div className="flex gap-4 pt-4">
            <span className="rounded border border-graphite-700 px-4 py-2 text-micro text-graphite-400">
              Launch-Grade Engineering
            </span>
            <span className="rounded border border-graphite-700 px-4 py-2 text-micro text-graphite-400">
              90+ Lighthouse Mobile
            </span>
            <span className="rounded border border-graphite-700 px-4 py-2 text-micro text-graphite-400">
              Motion as Narrative
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

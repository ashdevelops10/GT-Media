import PremiumNav from "@/components/nav/PremiumNav";
import { Footer } from "@/components/nav/Footer";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesSections } from "@/components/services/ServicesSections";
import { Container, Section } from "@/components/layout";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-onyx text-paper">
      <PremiumNav />
      <ServicesHero />
      <ServicesSections />
      
      {/* CTA */}
      <Section background="dark">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-lg text-soft-gray mb-8 max-w-[50ch] mx-auto">
              Let's discuss which services align with your strategic objectives
            </p>
            <a
              href="/contact"
              className="inline-block px-12 py-5 bg-accent-gold text-onyx text-lg font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Start a Project
            </a>
          </div>
        </Container>
      </Section>
      <Footer />
    </main>
  );
}

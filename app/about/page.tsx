import PremiumNav from "@/components/nav/PremiumNav";
import { Footer } from "@/components/nav/Footer";
import { Container, Section } from "@/components/layout";
import { AboutHero } from "@/components/about/AboutHero";
import { OriginNarrative } from "@/components/about/OriginNarrative";
import { CreativeValues } from "@/components/about/CreativeValues";
import { Leadership } from "@/components/about/Leadership";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-onyx text-paper">
      <PremiumNav />
      <AboutHero />
      <OriginNarrative />
      <CreativeValues />
      <Leadership />
      
      {/* CTA */}
      <Section>
        <Container size="narrow">
          <div className="text-center border border-soft-gray/20 p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-display mb-4">Ready to collaborate?</h2>
            <p className="text-soft-gray mb-8">
              Let's discuss how strategic design can transform your brand.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-accent-gold text-onyx font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Start a Conversation
            </a>
          </div>
        </Container>
      </Section>
      <Footer />
    </main>
  );
}

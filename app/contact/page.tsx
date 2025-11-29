import PremiumNav from "@/components/nav/PremiumNav";
import { Footer } from "@/components/nav/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-onyx text-paper">
      <PremiumNav />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}

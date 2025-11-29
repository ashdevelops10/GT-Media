import PremiumNav from "@/components/nav/PremiumNav";
import { Footer } from "@/components/nav/Footer";
import { WorkHero } from "@/components/work/WorkHero";
import { WorkGrid } from "@/components/work/WorkGrid";

export default function WorkPage() {
  return (
    <main className="relative min-h-screen bg-onyx text-paper">
      <PremiumNav />
      <WorkHero />
      <WorkGrid />
      <Footer />
    </main>
  );
}

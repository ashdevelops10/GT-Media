import PremiumNav from "@/components/nav/PremiumNav";
import { Footer } from "@/components/nav/Footer";
import { BrandPortfolio } from "@/components/work/BrandPortfolio";

export default function WorkPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <PremiumNav />
      <BrandPortfolio />
      <Footer />
    </main>
  );
}

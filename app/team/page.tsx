import PremiumNav from "@/components/nav/PremiumNav";
import { Footer } from "@/components/nav/Footer";
import { TeamHero } from "@/components/team/TeamHero";
import { TeamGrid } from "@/components/team/TeamGrid";

export default function TeamPage() {
    return (
        <main className="relative min-h-screen bg-black text-white">
            <PremiumNav />
            <TeamHero />
            <TeamGrid />
            <Footer />
        </main>
    );
}

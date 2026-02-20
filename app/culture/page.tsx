import PremiumNav from"@/components/nav/PremiumNav";
import { Footer } from"@/components/nav/Footer";
import { Container, Section } from"@/components/layout";
import { promises as fs } from"fs";
import path from"path";
import Link from"next/link";
import Image from"next/image";

async function getCelebrityPhotos(): Promise<string[]> {
 const celebrityDir = path.join(process.cwd(),"public","celebrity-photos");
 try {
 const files = await fs.readdir(celebrityDir, { withFileTypes: true });
 return files
 .filter((file) => file.isFile())
 .map((file) => file.name)
 .filter((name) => name.match(/\.(png|jpe?g)$/i))
 .map((name) => `/celebrity-photos/${encodeURIComponent(name)}`);
 } catch (error) {
 console.error("Failed to read celebrity photos directory", error);
 return [];
 }
}

export default async function CulturePage() {
 const photos = await getCelebrityPhotos();

 return (
 <div className="relative min-h-screen bg-black text-white">
 <PremiumNav />

 <Section background="dark"spacing="spacious"className="pt-24">
 <Container>
 <div className="text-center mb-12">
 <Link
 href="/" className="inline-flex items-center gap-2 text-burgundy text-xs uppercase tracking-[0.3em] font-bold mb-8 hover:tracking-[0.4em] transition-all" >
 ← Return Home
 </Link>
 <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase mb-8 tracking-tighter">
 CULTURAL <span className="text-burgundy">NETWORK</span>
 </h1>
 <p className="text-white/50 text-sm md:text-xl max-w-[60ch] mx-auto leading-relaxed">
 A high-credibility ecosystem built on years of trust, influence, and strategic relationships across global music, sports, and entertainment.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
 {photos.map((photo) => (
 <div
 key={photo}
 className="group relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/5" >
 <Image
 src={photo}
 alt="Celebrity collaboration" fill
 className="object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
 <p className="text-burgundy text-[10px] uppercase tracking-[0.3em] font-bold mb-1">Impact Event</p>
 <p className="text-white font-display text-xl uppercase leading-none">Global Partnership</p>
 </div>
 </div>
 ))}
 </div>
 </Container>
 </Section>

 <Footer />
 </div>
 );
}

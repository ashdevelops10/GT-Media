import { promises as fs } from"fs";
import path from"path";
import { Container, Section } from"@/components/layout";
import { CulturalInfluenceClient } from"@/components/home/CulturalInfluenceClient";

const celebrityDir = path.join(process.cwd(),"public","celebrity-photos");

async function getCelebrityPhotos(): Promise<string[]> {
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

export async function CulturalInfluence() {
 const photos = await getCelebrityPhotos();
 if (!photos.length) return null;

 return (
 <Section background="dark"spacing="compact">
 <Container size="wide">
 <div className="border-t border-white/10/10">
 {/* Section Header */}
 <div className="max-w-5xl mx-auto text-center pt-12 md:pt-16 mb-12 md:mb-16 lg:mb-20">
 {/* Accent line */}
 <div className="flex items-center justify-center gap-12 mb-8">
 <span className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-burgundy/60"/>
 <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-burgundy">
 Our Network
 </span>
 <span className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-burgundy/60"/>
 </div>

 <h2 className="font-display text-4xl md:text-5xl lg:text-7xl uppercase mb-6 tracking-tight">
 Influence & <span className="text-burgundy">Cultural Presence</span>
 </h2>

 <p className="text-white/50 text-sm md:text-lg max-w-[50ch] mx-auto mb-10 leading-relaxed font-medium">
 A high-credibility network across celebrity, music, and public ecosystems. We don't just bridge gaps; we engineer authority.
 </p>

 <div className="flex justify-center">
 <a
 href="/culture" className="group relative px-8 py-4 bg-burgundy text-white font-bold uppercase tracking-widest text-xs overflow-hidden transition-all duration-300 hover:pr-12" >
 <span className="relative z-10 font-display">View Full Network</span>
 <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
 </a>
 </div>
 </div>

 {/* Photo Marquee */}
 <div className="mt-4">
 <CulturalInfluenceClient photos={photos} />
 </div>

 {/* Footer Caption */}
 <div className="mt-8 flex items-center justify-center gap-4 opacity-40">
 <span className="h-px w-8 md:w-12 bg-white/20/20"/>
 <p className="text-[10px] tracking-[0.3em] uppercase text-white/50">
 A glimpse into our deep cultural ties
 </p>
 <span className="h-px w-8 md:w-12 bg-white/20/20"/>
 </div>
 </div>
 </Container>
 </Section>
 );
}

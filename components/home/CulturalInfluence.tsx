import { promises as fs } from "fs";
import path from "path";
import { Container, Section } from "@/components/layout";
import { CulturalInfluenceClient } from "@/components/home/CulturalInfluenceClient";

const celebrityDir = path.join(process.cwd(), "public", "celebrity-photos");

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
    <Section background="carbon" spacing="compact">
      <Container size="wide">
        <div className="border-t border-dust/10 pt-16 md:pt-20 lg:pt-24">
          {/* Section Header */}
          <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
            {/* Accent line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-strawberry/60" />
              <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-strawberry">
                Our Network
              </span>
              <span className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-strawberry/60" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0.06em] uppercase mb-8 md:mb-10">
              Influence, Relationships &amp;
              <br className="hidden md:block" />
              <span className="text-strawberry"> Cultural Presence</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 text-sm md:text-base text-silver leading-relaxed max-w-6xl mx-auto">
              <div className="space-y-3 p-4 md:p-6 rounded-lg bg-onyx/50 border border-dust/10 hover:border-mahogany/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-mahogany/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-strawberry text-lg">★</span>
                </div>
                <p>
                  GT Media has built a strong presence in celebrity collaborations and influencer-led marketing. Through our network,
                  brands get direct access to high-credibility faces, wider reach, and faster trust-building.
                </p>
              </div>
              <div className="space-y-3 p-4 md:p-6 rounded-lg bg-onyx/50 border border-dust/10 hover:border-mahogany/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-mahogany/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-strawberry text-lg">◆</span>
                </div>
                <p>
                  We've collaborated with multiple celebrities, creators, and public figures — including conducting interviews with icons
                  like Milkha Singh — helping brands amplify visibility and create authentic audience engagement.
                </p>
              </div>
              <div className="space-y-3 p-4 md:p-6 rounded-lg bg-onyx/50 border border-dust/10 hover:border-mahogany/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-mahogany/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-strawberry text-lg">●</span>
                </div>
                <p>
                  Our connections allow us to secure the right faces for the right campaigns, ensuring every collaboration delivers
                  impact, authority, and measurable brand lift.
                </p>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mt-8 md:mt-12">
            <CulturalInfluenceClient photos={photos} />
          </div>

          {/* Footer Caption */}
          <div className="mt-12 md:mt-16 flex items-center justify-center gap-4">
            <span className="h-px w-8 md:w-12 bg-dust/20" />
            <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-silver/60">
              A minimal glimpse into our broader cultural network
            </p>
            <span className="h-px w-8 md:w-12 bg-dust/20" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

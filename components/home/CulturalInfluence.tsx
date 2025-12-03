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
    <Section background="dark" spacing="spacious">
      <Container>
        <div className="border-t border-white/5 pt-12 md:pt-16">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-[0.08em] uppercase mb-6">
              Influence, Relationships &amp; Cultural Presence
            </h2>
            <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed md:leading-loose max-w-2xl mx-auto">
              <p>
                GT Media has built a strong presence in celebrity collaborations and influencer-led marketing. Through our network,
                brands get direct access to high-credibility faces, wider reach, and faster trust-building.
              </p>
              <p>
                We’ve collaborated with multiple celebrities, creators, and public figures — including conducting interviews with icons
                like Milkha Singh — helping brands amplify visibility and create authentic audience engagement.
              </p>
              <p>
                Our connections allow us to secure the right faces for the right campaigns, ensuring every collaboration delivers
                impact, authority, and measurable brand lift.
              </p>
            </div>
          </div>

          <CulturalInfluenceClient photos={photos} />

          <p className="mt-10 text-[11px] md:text-xs tracking-[0.22em] uppercase text-soft-gray/80 text-center">
            A minimal glimpse into our broader cultural network.
          </p>
        </div>
      </Container>
    </Section>
  );
}

import { promises as fs } from "fs";
import path from "path";
import { Container, Section } from "@/components/layout";

const logosDir = path.join(process.cwd(), "public", "logos");

type LogoRecord = {
  name: string;
  src: string;
  format: "svg" | "png";
  key: string;
};

async function getLogos(): Promise<LogoRecord[]> {
  try {
    const files = await fs.readdir(logosDir, { withFileTypes: true });
    const map = new Map<string, { svg?: string; png?: string }>();

    for (const file of files) {
      if (!file.isFile()) continue;
      const match = file.name.match(/^(.*)\.(svg|png)$/i);
      if (!match) continue;
      const [, base, ext] = match;
      if (!base || !ext) continue;
      const key = base.toLowerCase();
      const current = map.get(key) ?? {};
      if (ext.toLowerCase() === "svg") {
        current.svg = `/logos/${file.name}`;
      } else {
        current.png = `/logos/${file.name}`;
      }
      map.set(key, current);
    }

    return Array.from(map.entries())
      .map(([base, assets]) => {
        const normalized = base.toLowerCase();
        let chosenSrc = assets.svg ?? assets.png;
        if (normalized === "little_bay" && assets.png) {
          chosenSrc = assets.png;
        }
        const label = normalized
          .split(/[-_]/)
          .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
          .join(" ");
        const src = chosenSrc;
        if (!src) return null;
        const format = src.toLowerCase().endsWith(".svg") ? "svg" : "png";
        return { name: label, src, format, key: normalized } as LogoRecord;
      })
      .filter(Boolean) as LogoRecord[];
  } catch (error) {
    console.error("Failed to read logos directory", error);
    return [];
  }
}

export async function BrandPartners() {
  const logos = await getLogos();
  if (!logos.length) return null;

  return (
    <Section spacing="compact">
      <Container>
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          <p className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-silver mb-3 sm:mb-4">
            Brands That Trust GT Media
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 max-w-3xl mx-auto">
            A glimpse of the brands we&apos;ve helped grow through strategy, content, and performance.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-4 sm:px-0">
          {logos.map((logo) => {
            const baseKey = logo.key.toLowerCase();
            const isZenergy = baseKey === "zenergy";
            const isLittleBay = baseKey === "little_bay";
            const isBastian = baseKey === "bastian";
            const isUrbanTheka = baseKey === "urban_theka";
            const sizeClass = (() => {
              if (isZenergy) return "h-10 md:h-12 max-w-[200px]";
              if (isUrbanTheka) return "h-20 md:h-28 max-w-[340px]";
              if (isLittleBay || isBastian) return "h-16 md:h-24 max-w-[300px]";
              return "h-14 md:h-20 max-w-[260px]";
            })();
            const forceMono = isBastian || isUrbanTheka || isLittleBay || isZenergy;

            return (
            <div
                key={logo.src}
                className="flex items-center justify-center rounded border border-silver/15 bg-onyx/40 p-4 sm:p-6 md:p-8 group hover:border-mahogany/30 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className={`${sizeClass} w-auto opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-300 ${
                    forceMono ? "brightness-0 invert" : ""
                  }`}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

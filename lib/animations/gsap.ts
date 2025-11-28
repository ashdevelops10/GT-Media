// Thin wrapper to ensure gsap and plugins are only used client-side.

let cachedGsap: typeof import("gsap").gsap | null = null;

export async function getGsap(): Promise<typeof import("gsap").gsap | null> {
  if (typeof window === "undefined") {
    return null; // guard server-side to avoid bundling errors
  }

  if (cachedGsap) return cachedGsap;

  const mod = await import("gsap");
  cachedGsap = mod.gsap;
  return cachedGsap;
}

export async function registerScrollTrigger() {
  if (typeof window === "undefined") return;

  const gsapCore = await getGsap();
  if (!gsapCore) return;

  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsapCore.registerPlugin(ScrollTrigger);
  return { gsap: gsapCore, ScrollTrigger };
}

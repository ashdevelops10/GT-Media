// Tiny web-vitals hook point; keeps analytics opt-in and tree-shakeable.

export type WebVitalsMetric = {
  name: string;
  value: number;
  id: string;
};

export async function sendWebVitals(metric: WebVitalsMetric) {
  if (typeof window === "undefined") return;

  // Replace with your analytics endpoint (e.g., Vercel Analytics, custom collector).
  // Keep payload minimal to avoid network overhead.
  navigator.sendBeacon?.(
    "/api/perf",
    JSON.stringify({
      id: metric.id,
      name: metric.name,
      value: metric.value
    })
  );
}

export async function getPerfMetrics() {
  // Placeholder server-side hook; can connect to Sanity or logs later.
  return null;
}

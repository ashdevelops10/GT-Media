import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const apiVersion = "2024-10-01"; // pin for stability

if (!projectId) {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.warn("[sanity] Missing SANITY_PROJECT_ID – CMS disabled.");
  }
}

export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

// Preview client fetches drafts. Never expose write token client-side.
export const previewClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: process.env.SANITY_READ_TOKEN // read-only token for preview
    })
  : null;

export function getClient({ preview = false }: { preview?: boolean }) {
  return preview ? previewClient : client;
}

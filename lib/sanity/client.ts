import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const apiVersion = "2024-10-01"; // pin for stability

// Check if Sanity is properly configured
const isConfigured = projectId && projectId !== "placeholder" && projectId !== "your_project_id_here";

if (!isConfigured) {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.warn("[sanity] Missing or invalid SANITY_PROJECT_ID – CMS disabled.");
  }
}

export const client = isConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

// Preview client fetches drafts. Never expose write token client-side.
export const previewClient = isConfigured
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

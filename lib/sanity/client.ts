import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID; // add to .env.local
const dataset = process.env.SANITY_DATASET ?? "production";
const apiVersion = "2023-01-01";

if (!projectId && process.env.NODE_ENV === "development") {
  // eslint-disable-next-line no-console
  console.warn(
    "[sanity] SANITY_PROJECT_ID is not set. CMS queries will be skipped."
  );
}

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true
    })
  : null;

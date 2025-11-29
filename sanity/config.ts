import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schema from "./schema";

export default defineConfig({
  name: "gt-media-studio",
  title: "GT Media Studio",
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET || "production",
  plugins: [deskTool()],
  schema
});

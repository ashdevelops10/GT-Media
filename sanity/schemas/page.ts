/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Generic Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "content", type: "array", title: "Content Sections", of: [{ type: "pageSection" }] }),
    defineField({
      name: "seo",
      type: "object",
      title: "SEO Metadata",
      fields: [
        { name: "metaTitle", type: "string", title: "Meta Title" },
        { name: "metaDescription", type: "text", title: "Meta Description" },
        { name: "ogImage", type: "image", title: "OG Image", options: { hotspot: true } }
      ]
    })
  ]
});

/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
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
    defineField({
      name: "summary",
      type: "text",
      title: "Executive Summary"
    }),
    defineField({
      name: "client",
      type: "reference",
      to: [{ type: "client" }],
      title: "Client"
    }),
    defineField({ name: "date", type: "date", title: "Date" }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }]
    }),
    defineField({ name: "coverImage", type: "image", title: "Cover Image", options: { hotspot: true } }),
    defineField({
      name: "gallery",
      title: "Media Gallery",
      type: "array",
      of: [
        { type: "image", options: { hotspot: true } },
        {
          type: "object",
          title: "Video Embed",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "url", type: "url", title: "URL" }
          ]
        }
      ]
    }),
    defineField({
      name: "challenge",
      type: "array",
      title: "Challenge",
      of: [{ type: "block" }]
    }),
    defineField({
      name: "strategy",
      type: "array",
      title: "Strategy",
      of: [{ type: "block" }]
    }),
    defineField({
      name: "execution",
      type: "array",
      title: "Execution Sections",
      of: [{ type: "pageSection" }]
    }),
    defineField({
      name: "results",
      type: "object",
      title: "Results & Metrics",
      fields: [
        {
          name: "metrics",
          type: "array",
          title: "Metrics",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", type: "string", title: "Label" },
                { name: "value", type: "string", title: "Value" },
                { name: "unit", type: "string", title: "Unit" }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      name: "downloadableAssets",
      type: "array",
      title: "Downloadable Assets",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "file", type: "file", title: "File" }
          ]
        }
      ]
    }),
    defineField({ name: "tags", type: "array", title: "Tags", of: [{ type: "string" }] }),
    defineField({ name: "featured", type: "boolean", title: "Featured" }),
    defineField({ name: "publishedAt", type: "datetime", title: "Published At" }),
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from "sanity";

export default defineType({
  name: "artist",
  title: "Artist",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", title: "Name", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "headshot", type: "image", title: "Headshot", options: { hotspot: true } }),
    defineField({
      name: "bio",
      type: "array",
      title: "Bio (Rich Text)",
      of: [{ type: "block" }]
    }),
    defineField({
      name: "socials",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "url", type: "url", title: "URL" }
          ]
        }
      ]
    }),
    defineField({
      name: "roles",
      type: "array",
      title: "Roles",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "discography",
      type: "array",
      title: "Discography",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "year", type: "number", title: "Year" }
          ]
        }
      ]
    }),
    defineField({ name: "featured", type: "boolean", title: "Featured" }),
    defineField({
      name: "meta",
      type: "object",
      title: "SEO Meta",
      fields: [
        { name: "metaTitle", type: "string", title: "Meta Title" },
        { name: "metaDescription", type: "text", title: "Meta Description" },
        { name: "ogImage", type: "image", title: "OG Image", options: { hotspot: true } }
      ]
    })
  ]
});

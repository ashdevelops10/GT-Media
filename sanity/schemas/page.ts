/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: "sections",
      type: "array",
      title: "Sections",
      of: [{ type: "pageSection" }]
    }),
    defineField({
      name: "seoDescription",
      type: "string",
      title: "SEO Description"
    })
  ]
});

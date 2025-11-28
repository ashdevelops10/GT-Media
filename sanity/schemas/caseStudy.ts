/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
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
      name: "client",
      type: "string",
      title: "Client"
    }),
    defineField({
      name: "heroImage",
      type: "image",
      title: "Hero Image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "summary",
      type: "text",
      title: "Summary"
    }),
    defineField({
      name: "sections",
      type: "array",
      title: "Sections",
      of: [{ type: "pageSection" }]
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published at"
    })
  ]
});

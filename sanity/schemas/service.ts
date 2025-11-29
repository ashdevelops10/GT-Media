import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
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
    defineField({ name: "description", type: "text", title: "Description" }),
    defineField({
      name: "deliverables",
      type: "array",
      title: "Deliverables",
      of: [{ type: "string" }]
    }),
    defineField({ name: "thumbnail", type: "image", title: "Thumbnail", options: { hotspot: true } }),
    defineField({
      name: "faqs",
      type: "array",
      title: "FAQs",
      of: [
        {
          type: "object",
            fields: [
              { name: "question", type: "string", title: "Question" },
              { name: "answer", type: "array", title: "Answer", of: [{ type: "block" }] }
            ]
        }
      ]
    })
  ]
});

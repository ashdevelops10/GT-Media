import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "author", type: "string", title: "Author", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", type: "string", title: "Role" }),
    defineField({ name: "quote", type: "text", title: "Quote", validation: (Rule) => Rule.required() }),
    defineField({ name: "headshot", type: "image", title: "Headshot", options: { hotspot: true } }),
    defineField({
      name: "client",
      type: "reference",
      to: [{ type: "client" }],
      title: "Client"
    })
  ]
});

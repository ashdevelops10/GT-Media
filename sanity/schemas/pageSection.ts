import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageSection",
  title: "Page Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      title: "Heading"
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Body",
      of: [{ type: "block" }]
    }),
    defineField({
      name: "media",
      type: "image",
      title: "Media",
      options: { hotspot: true }
    }),
    defineField({
      name: "theme",
      type: "string",
      title: "Theme",
      options: {
        list: [
          { title: "Dark", value: "dark" },
          { title: "Light", value: "light" }
        ]
      }
    })
  ]
});

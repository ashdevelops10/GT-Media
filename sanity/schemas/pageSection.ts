import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageSection",
  title: "Page Section",
  type: "object",
  fields: [
    defineField({ name: "variant", type: "string", title: "Variant", options: { list: [
      { title: "Hero", value: "hero" },
      { title: "Gallery", value: "gallery" },
      { title: "Text + Image", value: "textImage" },
      { title: "Quote", value: "quote" },
      { title: "Stats", value: "stats" }
    ] } }),
    defineField({ name: "heading", type: "string", title: "Heading" }),
    defineField({ name: "subheading", type: "string", title: "Subheading" }),
    defineField({ name: "body", type: "array", title: "Body", of: [{ type: "block" }] }),
    defineField({ name: "media", type: "image", title: "Media", options: { hotspot: true } }),
    defineField({
      name: "galleryItems",
      title: "Gallery Items",
      type: "array",
      of: [
        { type: "image", options: { hotspot: true } },
        {
          type: "object",
          title: "External Video",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "url", type: "url", title: "Video URL" }
          ]
        }
      ]
    }),
    defineField({
      name: "quote",
      type: "object",
      title: "Quote Block",
      fields: [
        { name: "text", type: "text", title: "Quote Text" },
        { name: "author", type: "string", title: "Author" },
        { name: "role", type: "string", title: "Role" }
      ]
    }),
    defineField({
      name: "stats",
      type: "array",
      title: "Stats",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "value", type: "string", title: "Value" }
          ]
        }
      ]
    }),
    defineField({ name: "theme", type: "string", title: "Theme", options: { list: [
      { title: "Dark", value: "dark" },
      { title: "Light", value: "light" }
    ] } })
  ]
});

import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", type: "string", title: "Site Title" }),
    defineField({ name: "description", type: "text", title: "Description" }),
    defineField({ name: "logo", type: "image", title: "Logo", options: { hotspot: true } }),
    defineField({
      name: "social",
      type: "array",
      title: "Social Links",
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
    defineField({ name: "contactEmail", type: "string", title: "Contact Email" }),
    defineField({ name: "contactPhone", type: "string", title: "Contact Phone" })
  ]
});

/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from "sanity";

export default defineType({
  name: "artist",
  title: "Artist",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Role"
    }),
    defineField({
      name: "portrait",
      type: "image",
      title: "Portrait",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "Bio"
    })
  ]
});

import { defineType, defineField } from "sanity";

export const serviceAreaSchema = defineType({
  name: "serviceArea",
  title: "Service Areas",
  type: "document",
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  fields: [
    defineField({ name: "name", title: "Area Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      options: {
        list: [
          "Knoxville Metro",
          "West Knox",
          "North Knox",
          "South Knox",
          "Anderson County",
          "Blount County",
          "Sevier County",
          "Jefferson County",
          "Loudon County",
        ],
      },
    }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 99 }),
    defineField({ name: "description", title: "Description", type: "text", rows: 5 }),
    defineField({
      name: "nearbyAreas",
      title: "Nearby Areas",
      type: "array",
      of: [{ type: "reference", to: [{ type: "serviceArea" }] }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "region" },
  },
});

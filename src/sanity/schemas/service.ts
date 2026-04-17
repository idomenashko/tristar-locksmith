import { defineType, defineField } from "sanity";

export const serviceSchema = defineType({
  name: "service",
  title: "Services",
  type: "document",
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "icon", title: "Icon (emoji)", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 99 }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text", rows: 3 }),
    defineField({ name: "longDescription", title: "Long Description", type: "text", rows: 8 }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", type: "string", title: "Question" }),
            defineField({ name: "answer", type: "text", title: "Answer", rows: 4 }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "shortDescription", media: "icon" },
  },
});

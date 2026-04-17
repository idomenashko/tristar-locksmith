import { defineType, defineField } from "sanity";

export const businessSchema = defineType({
  name: "business",
  title: "Business Profile",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Business Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "phone", title: "Phone (display)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "phoneHref", title: "Phone href (tel:xxxxx)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "hours", title: "Hours", type: "string", initialValue: "24/7" }),
    defineField({ name: "city", title: "City", type: "string", initialValue: "Knoxville" }),
    defineField({ name: "state", title: "State", type: "string", initialValue: "TN" }),
    defineField({ name: "address", title: "Address", type: "string" }),
  ],
  // Singleton behavior is enforced via the custom structure (structure.ts),
  // which pins this document to a fixed documentId "business".
});

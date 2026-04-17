import type { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      // Singleton: Business Profile
      S.listItem()
        .title("Business Profile")
        .id("business")
        .child(
          S.document()
            .schemaType("business")
            .documentId("business")
            .title("Business Profile")
        ),
      S.divider(),
      // Regular document lists
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("serviceArea").title("Service Areas"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.documentTypeListItem("faqItem").title("FAQ Items"),
      S.documentTypeListItem("advantage").title("Why Choose Us"),
    ]);

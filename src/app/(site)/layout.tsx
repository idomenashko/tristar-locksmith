import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallButton } from "@/components/layout/StickyCallButton";
import { buildLocalBusinessSchema, buildWebSiteSchema } from "@/lib/schema";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = await buildLocalBusinessSchema();
  const websiteSchema = buildWebSiteSchema();

  return (
    <>
      <link rel="llms-txt" href="/llms.txt" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Header />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <Footer />
      <StickyCallButton />
    </>
  );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallButton } from "@/components/layout/StickyCallButton";
import { buildLocalBusinessSchema } from "@/lib/schema";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = await buildLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <Footer />
      <StickyCallButton />
    </>
  );
}

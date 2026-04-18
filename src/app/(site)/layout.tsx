import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallButton } from "@/components/layout/StickyCallButton";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { getBusiness } from "@/lib/queries";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [schema, business] = await Promise.all([
    buildLocalBusinessSchema(),
    getBusiness(),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header logo={business.logo} />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <Footer />
      <StickyCallButton />
    </>
  );
}

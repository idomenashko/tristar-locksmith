import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

export const metadata = buildMetadata({
  title: "Locksmith Blog",
  description:
    "Locksmith tips, guides, and local security advice from Tristar Locksmith serving Knoxville, TN. Call (865) 381-3931.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section className="bg-warm-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-navy mb-2 font-display">
            Locksmith Blog
          </h1>
          <p className="text-muted mb-10 text-lg">
            Tips, guides, and local security advice from Tristar Locksmith.
          </p>

          {posts.length === 0 ? (
            <p className="text-muted">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-white rounded-lg border border-gray-200 p-6 hover:border-gold transition-colors group"
                >
                  <p className="text-xs text-muted mb-2">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="text-lg font-bold text-navy mb-2 font-display group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted line-clamp-3">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-gold">
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12 bg-navy rounded-lg p-6 text-white text-center">
            <p className="font-bold text-lg mb-1 font-display">
              Need a locksmith now?
            </p>
            <p className="text-white/80 mb-4 text-sm">
              Available 7 AM – 11:30 PM · 24/7 emergency line
            </p>
            <a
              href="tel:8653813931"
              className="inline-block bg-gold text-navy font-bold px-6 py-3 rounded-md text-sm uppercase tracking-wide hover:bg-gold-light transition-colors"
            >
              📞 (865) 381-3931
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

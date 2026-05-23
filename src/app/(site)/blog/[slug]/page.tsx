import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { buildBlogPostingSchema } from "@/lib/schema";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { BlogPostRenderer } from "@/components/blog/BlogPostRenderer";
import { LeadFormSection } from "@/components/forms/LeadFormSection";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const blogPostingSchema = buildBlogPostingSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      {post.faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: post.faqJsonLd }}
        />
      )}

      <Section className="bg-warm-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Link
                href="/blog"
                className="text-sm text-muted hover:text-gold transition-colors"
              >
                ← Back to Blog
              </Link>
            </div>

            <p className="text-xs text-muted mb-2">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1 className="text-3xl font-bold text-navy mb-6 font-display">
              {post.title}
            </h1>

            <article>
              <BlogPostRenderer content={post.content} />
            </article>

            <div className="mt-12">
              <LeadFormSection
                variant="blog"
                source={`blog:${slug}`}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

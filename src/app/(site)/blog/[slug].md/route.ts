import { NextResponse } from "next/server";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { SITE } from "@/lib/seo";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<Record<string, string>> }
) {
  const { slug = "" } = (await params) ?? {};

  if (!slug) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const content = `# ${post.title} — Tristar Locksmith, Knoxville TN

> [View HTML version](${SITE.url}/blog/${post.slug})
> Published: ${post.date}

${post.content}

---

📞 **Need a locksmith in Knoxville?** Call [${SITE.phone}](${SITE.phoneHref})
🌐 **Learn more:** [tristarlocksmith.com/blog/${post.slug}](${SITE.url}/blog/${post.slug})
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

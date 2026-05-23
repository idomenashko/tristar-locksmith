import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "./types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && f !== ".gitkeep");

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      return getPostBySlug(slug);
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    primaryKeyword: data.primaryKeyword ?? "",
    date: data.date ?? "",
    faqJsonLd: data.faqJsonLd ?? null,
    content,
  };
}

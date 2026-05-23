"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostRendererProps {
  content: string;
}

export function BlogPostRenderer({ content }: BlogPostRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ ...props }) => (
          <h1
            className="text-3xl font-bold text-navy mb-4 mt-8 font-display"
            {...props}
          />
        ),
        h2: ({ ...props }) => (
          <h2
            className="text-2xl font-bold text-navy mb-3 mt-8 font-display"
            {...props}
          />
        ),
        h3: ({ ...props }) => (
          <h3
            className="text-xl font-semibold text-navy mb-2 mt-6"
            {...props}
          />
        ),
        p: ({ ...props }) => (
          <p className="text-ink leading-relaxed mb-4" {...props} />
        ),
        ul: ({ ...props }) => (
          <ul
            className="list-disc list-outside pl-5 space-y-2 mb-4 text-ink"
            {...props}
          />
        ),
        ol: ({ ...props }) => (
          <ol
            className="list-decimal list-outside pl-5 space-y-2 mb-4 text-ink"
            {...props}
          />
        ),
        li: ({ ...props }) => <li className="text-ink leading-relaxed" {...props} />,
        a: ({ ...props }) => (
          <a
            className="text-gold underline hover:text-gold-dark transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        strong: ({ ...props }) => (
          <strong className="font-bold text-navy" {...props} />
        ),
        em: ({ ...props }) => <em className="italic text-muted" {...props} />,
        blockquote: ({ ...props }) => (
          <blockquote
            className="border-l-4 border-gold pl-4 italic text-muted my-4"
            {...props}
          />
        ),
        hr: () => <hr className="border-gray-200 my-8" />,
        table: ({ ...props }) => (
          <div className="overflow-x-auto mb-4">
            <table
              className="min-w-full border border-gray-200 text-sm"
              {...props}
            />
          </div>
        ),
        th: ({ ...props }) => (
          <th
            className="bg-navy text-white px-4 py-2 text-left font-semibold"
            {...props}
          />
        ),
        td: ({ ...props }) => (
          <td className="border-t border-gray-200 px-4 py-2 text-ink" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

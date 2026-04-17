import type { NextConfig } from "next";
import path from "path";

// Resolve the project's own React and ReactDOM roots via package.json so the
// path is correct on Vercel (where process.cwd() can differ from the module
// resolution root).
const reactPath = path.dirname(require.resolve("react/package.json"));
const reactDomPath = path.dirname(require.resolve("react-dom/package.json"));

// Alias map that ensures every React-related import resolves to the single
// project copy of React 19.2.x (which exports useEffectEvent, needed by
// Sanity 5.21+). Next.js 15.5 bundles its own compiled/react for client
// layers (appPagesBrowser, etc.) and sets per-layer aliases for all of these
// keys — if we only override react$ we still get dual React instances which
// breaks all hooks (useState, useContext, …).
const REACT_ALIASES: Record<string, string> = {
  "react$": reactPath,
  "react/compiler-runtime$": path.join(reactPath, "compiler-runtime"),
  "react/jsx-runtime$": path.join(reactPath, "jsx-runtime"),
  "react/jsx-dev-runtime$": path.join(reactPath, "jsx-dev-runtime"),
  "react-dom$": reactDomPath,
  "react-dom/client$": path.join(reactDomPath, "client"),
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // ── Step 1: top-level alias baseline ──────────────────────────────────
      // Ensures that any import not covered by per-layer rules also resolves
      // to our project React. Object.assign merges without clobbering other
      // aliases (e.g. Next's own internal ones).
      if (!config.resolve) config.resolve = {};
      if (!config.resolve.alias) config.resolve.alias = {};
      Object.assign(config.resolve.alias, REACT_ALIASES);

      // ── Step 2: per-layer rule patching ───────────────────────────────────
      // Next.js 15.5 injects per-layer webpack rules (one per RSC/client
      // layer) that each carry their own resolve.alias block overriding the
      // top-level aliases. We walk every rule recursively and, whenever we
      // find a rule that already contains ANY of our alias keys (indicating it
      // is one of those per-layer rules), we overwrite all keys with our
      // project paths so the entire alias set is consistent.
      const ALIAS_KEYS = new Set(Object.keys(REACT_ALIASES));

      function patchAliasInRule(rule: Record<string, unknown>) {
        if (!rule || typeof rule !== "object") return;

        const resolve = rule.resolve as Record<string, unknown> | undefined;
        if (resolve?.alias && typeof resolve.alias === "object") {
          const alias = resolve.alias as Record<string, string>;
          // Only patch rules that already define at least one React alias key —
          // these are the per-layer rules we need to override.
          const hasReactAlias = Object.keys(alias).some((k) =>
            ALIAS_KEYS.has(k)
          );
          if (hasReactAlias) {
            Object.assign(alias, REACT_ALIASES);
          }
        }

        // Recurse into nested rule structures.
        const oneOf = rule.oneOf as unknown[] | undefined;
        if (Array.isArray(oneOf)) {
          oneOf.forEach((r) =>
            patchAliasInRule(r as Record<string, unknown>)
          );
        }
        const rules = rule.rules as unknown[] | undefined;
        if (Array.isArray(rules)) {
          rules.forEach((r) =>
            patchAliasInRule(r as Record<string, unknown>)
          );
        }
      }

      if (Array.isArray(config.module?.rules)) {
        config.module.rules.forEach((rule: unknown) =>
          patchAliasInRule(rule as Record<string, unknown>)
        );
      }
    }
    return config;
  },
};

export default nextConfig;

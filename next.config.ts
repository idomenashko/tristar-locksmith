import type { NextConfig } from "next";
import path from "path";

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
      // Next.js's compiled/react lacks useEffectEvent (needed by Sanity 5.21+).
      // Walk all webpack rules to find per-layer resolve.alias configurations
      // for the appPagesBrowser layer and override react$ to point to the
      // project's React 19.2.x which exports useEffectEvent.
      const reactPath = path.join(process.cwd(), "node_modules", "react");

      function patchAliasInRule(rule: Record<string, unknown>) {
        if (!rule || typeof rule !== "object") return;
        // Check for nested resolve.alias
        const resolve = rule.resolve as Record<string, unknown> | undefined;
        if (resolve?.alias && typeof resolve.alias === "object") {
          const alias = resolve.alias as Record<string, string>;
          if ("react$" in alias) {
            alias["react$"] = reactPath;
          }
        }
        // Recurse into oneOf / use arrays
        const oneOf = rule.oneOf as unknown[] | undefined;
        if (Array.isArray(oneOf)) {
          oneOf.forEach((r) => patchAliasInRule(r as Record<string, unknown>));
        }
        const rules = rule.rules as unknown[] | undefined;
        if (Array.isArray(rules)) {
          rules.forEach((r) => patchAliasInRule(r as Record<string, unknown>));
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

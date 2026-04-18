"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../sanity.config";

// Sanity Studio stores auth tokens in localStorage as:
//   __studio_auth_token_${projectId} → JSON { token: "sk...", time: "ISO" }
// We inject the write token at module-load time (before Studio initialises)
// so the Studio authenticates without needing the manual Sanity login popup.
// The token is baked into the client bundle via NEXT_PUBLIC_SANITY_TOKEN.
const STUDIO_TOKEN = process.env.NEXT_PUBLIC_SANITY_TOKEN;
const PROJECT_ID =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "cmjs8s45";

if (typeof window !== "undefined" && STUDIO_TOKEN) {
  const storageKey = `__studio_auth_token_${PROJECT_ID}`;
  try {
    if (!localStorage.getItem(storageKey)) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ token: STUDIO_TOKEN, time: new Date().toISOString() })
      );
    }
  } catch {
    // localStorage unavailable (private browsing strict mode, etc.)
  }
}

export default function StudioPage() {
  return <NextStudio config={config} />;
}

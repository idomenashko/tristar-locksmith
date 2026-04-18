import { preloadModule } from "react-dom";

// Preload Sanity's bridge.js from the server-rendered HTML so it downloads
// before React hydration. This ensures it executes before the Studio's auth
// system initialises, avoiding a race condition on custom-domain deployments.
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  preloadModule("https://core.sanity-cdn.com/bridge.js", { as: "script" });
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 50, background: "#101112" }}>
      {children}
    </div>
  );
}

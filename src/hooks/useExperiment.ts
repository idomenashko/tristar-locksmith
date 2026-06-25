"use client";

import { useState, useEffect } from "react";
import { getVariant, trackExperimentImpression, Variant } from "@/lib/experiment";

/**
 * React hook for experiment variant assignment.
 *
 * - Server-renders "A" (default/control) to avoid hydration mismatch.
 * - After mount, reads/assigns the cookie and fires the GA4 impression event once.
 * - The component re-renders with the real variant on hydration.
 *
 * Usage:
 *   const variant = useExperiment("lp_hero");
 *   const h1 = page.heroVariants[variant].h1;
 */
export function useExperiment(expId: string): Variant {
  // Default to "A" for SSR / before hydration
  const [variant, setVariant] = useState<Variant>("A");

  useEffect(() => {
    const assigned = getVariant(expId);
    setVariant(assigned);
    trackExperimentImpression(expId, assigned);
    // Only fire on mount — dependency array intentionally omits expId
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return variant;
}

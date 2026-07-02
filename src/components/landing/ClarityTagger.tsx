"use client";

import { useEffect } from "react";
import { tagClaritySession } from "@/lib/clarity";

/**
 * Invisible client component — tags the Microsoft Clarity session with
 * campaign/ad-group/keyword/city so recordings and heatmaps can be filtered
 * by traffic source in the Clarity dashboard. Render after
 * AttributionCapture so the attribution cookie exists before this reads it.
 */
export function ClarityTagger() {
  useEffect(() => {
    tagClaritySession();
  }, []);
  return null;
}

"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/**
 * Invisible client component — captures GCLID + UTM from the landing URL into a
 * first-touch cookie so leads can be attributed to the campaign/keyword that
 * produced them. Render once near the top of the landing layout.
 */
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}

"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // ms
  className?: string;
}

/**
 * Displays `target`, with an optional count-up animation as progressive
 * enhancement. The value is initialized to `target` so SSR, no-JS, and the
 * first paint all show the real number — no "0.0 Stars / 0 Reviews" flash on
 * a paid landing page. The animation only runs once, on viewport entry, and
 * only when motion is allowed.
 */
export function CountUp({
  target,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 1200,
  className = "",
}: CountUpProps) {
  const [value, setValue] = useState(target);
  const triggered = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || triggered.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return; // already showing target — nothing to do

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggered.current) return;
        triggered.current = true;
        observer.disconnect();

        const startTime = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          setValue(eased * target);
          if (progress < 1) requestAnimationFrame(tick);
          else setValue(target);
        };
        setValue(0);
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

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
 * Animates a number from 0 to `target` when it enters the viewport.
 * Respects prefers-reduced-motion by showing the final value instantly.
 */
export function CountUp({
  target,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 1400,
  className = "",
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, triggered]);

  useEffect(() => {
    if (!triggered) return;

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [triggered, target, duration]);

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

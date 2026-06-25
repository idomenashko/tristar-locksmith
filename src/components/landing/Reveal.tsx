"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  className?: string;
  delay?: number; // stagger offset in ms
  children: ReactNode;
}

/**
 * Scroll-reveal wrapper — fades + slides children in when they enter the viewport.
 * Reveals once; never re-hides.
 * CSS (.reveal / .reveal.is-visible in globals.css) guards prefers-reduced-motion.
 */
export function Reveal({ className = "", delay = 0, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

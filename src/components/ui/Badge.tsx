import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "navy" | "gold" | "forest" | "emergency";
  className?: string;
}

const variantClasses = {
  navy: "bg-navy text-white",
  gold: "bg-gold text-navy",
  forest: "bg-forest text-white",
  emergency: "bg-emergency text-white",
};

export function Badge({ children, variant = "navy", className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}

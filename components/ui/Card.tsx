import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  glow?: boolean;
  className?: string;
}

export function Card({
  children,
  hover = false,
  glow = false,
  className = "",
}: CardProps) {
  const base =
    "rounded-lg border border-border bg-surface p-6 transition-all duration-200";
  const hoverClass = hover
    ? "hover:border-cyan hover:-translate-y-1"
    : "";
  const glowClass = glow ? "hover:shadow-cyan" : "";

  return (
    <div className={`${base} ${hoverClass} ${glowClass} ${className}`}>
      {children}
    </div>
  );
}

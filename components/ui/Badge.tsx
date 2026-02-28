type BadgeVariant = "success" | "warning" | "info" | "danger" | "neutral";

const variantClasses: Record<BadgeVariant, string> = {
  success: "bg-green/20 text-green border-green/30",
  warning: "bg-gold/20 text-gold border-gold/30",
  info: "bg-cyan/20 text-cyan border-cyan/30",
  danger: "bg-red/20 text-red border-red/30",
  neutral: "bg-surface text-text-secondary border-border",
};

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ label, variant = "neutral", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {label}
    </span>
  );
}

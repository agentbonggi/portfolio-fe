interface BadgeProps { children: React.ReactNode; variant?: "default" | "primary" | "secondary"; className?: string; }
export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = { default: "bg-muted/50 text-muted", primary: "bg-primary/10 text-primary", secondary: "bg-secondary/10 text-secondary" };
  return <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>{children}</span>;
}

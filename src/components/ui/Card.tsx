interface CardProps { children: React.ReactNode; className?: string; hover?: boolean; }
export function Card({ children, className = "", hover = false }: CardProps) {
  return <div className={`bg-background border border-border rounded-xl p-6 ${hover ? "hover:border-primary hover:shadow-lg transition-all cursor-pointer" : ""} ${className}`}>{children}</div>;
}
export function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
}
export function CardDescription({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-muted mt-1 ${className}`}>{children}</p>;
}

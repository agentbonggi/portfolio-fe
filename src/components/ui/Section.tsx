interface SectionProps { children: React.ReactNode; className?: string; background?: "default" | "muted"; }
export function Section({ children, className = "", background = "default" }: SectionProps) {
  const bgs = { default: "bg-background", muted: "bg-muted/30" };
  return <section className={`py-16 ${bgs[background]} ${className}`}>{children}</section>;
}
interface SectionHeaderProps { title: string; subtitle?: string; }
export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return <div className="mb-12 text-center"><h2 className="text-3xl md:text-4xl font-bold">{title}</h2>{subtitle && <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>}</div>;
}

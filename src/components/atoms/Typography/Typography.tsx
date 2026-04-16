interface TypographyProps {
  variant: "title" | "subtitle" | "body" | "label";
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function Typography({
  variant,
  children,
  className = "",
  as,
}: TypographyProps) {
  const styles = {
    title: "text-3xl font-bold text-brand-text tracking-tight",
    subtitle: "text-lg font-medium text-brand-muted",
    body: "text-sm text-brand-text leading-relaxed",
    label: "text-[10px] font-bold uppercase tracking-widest text-brand-muted",
  };

  // Mapeamento de tags padrão (Semântica)
  const Tag =
    as ||
    (variant === "title"
      ? "h1"
      : variant === "subtitle"
        ? "h2"
        : variant === "body"
          ? "p"
          : "span");

  return <Tag className={`${styles[variant]} ${className}`}>{children}</Tag>;
}

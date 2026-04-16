interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "danger";
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}: ButtonProps) {
  // Estilos base botões
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all active:scale-95 flex items-center justify-center gap-2";

  // Estilos específicos de cada variante
  const variants = {
    primary: "bg-brand-primary text-white hover:opacity-90 shadow-sm",
    ghost: "text-brand-muted hover:bg-zinc-100",
    danger: "text-zinc-400 hover:text-red-500 hover:bg-red-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {children}
    </button>
  );
}

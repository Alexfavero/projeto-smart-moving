import { Typography } from "./Typography";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <Typography variant="label" as="span">
          {label}
        </Typography>
      )}
      <input
        className={`
          bg-transparent border-b border-zinc-200 
          focus:border-brand-primary outline-none 
          py-1 text-sm transition-colors w-full
          ${className}
        `}
        {...props}
      />
    </div>
  );
}

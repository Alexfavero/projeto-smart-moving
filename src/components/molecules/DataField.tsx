    import { Typography } from "../atoms/Typography";

    interface DataFieldProps {
    label: string;
    value: string | number;
    isCurrency?: boolean;
    highlight?: boolean;
    }

    export function DataField({
    label,
    value,
    isCurrency,
    highlight,
    }: DataFieldProps) {
    return (
        <div className="flex flex-col gap-0.5">
        <Typography variant="label" className="text-zinc-400">
            {label}
        </Typography>
        <Typography
            variant="body"
            className={`font-mono font-bold text-base ${highlight ? "text-brand-success" : "text-brand-text"}`}
        >
            {isCurrency ? `R$ ${value}` : value}
        </Typography>
        </div>
    );
    }

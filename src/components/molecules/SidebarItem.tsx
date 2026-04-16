import type { LucideIcon } from "lucide-react";
import { Icon } from "../atoms/Icon";
import { Typography } from "../atoms/Typography";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function SidebarItem({
  icon,
  label,
  active = false,
  onClick,
}: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group
        ${
          active
            ? "bg-white shadow-sm text-brand-primary"
            : "text-brand-muted hover:bg-zinc-100 hover:text-brand-text"
        }
      `}
    >
      <Icon
        icon={icon}
        size={20}
        className={
          active
            ? "text-brand-primary"
            : "text-zinc-400 group-hover:text-brand-primary"
        }
      />
      <Typography variant="body" className="font-medium">
        {label}
      </Typography>
    </button>
  );
}

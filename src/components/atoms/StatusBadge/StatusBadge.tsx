export function StatusBadge({ status }: { status: "comprado" | "pendente" }) {
  const styles = {
    comprado: "bg-brand-success/10 text-brand-success",
    pendente: "bg-zinc-100 text-zinc-500",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles[status]}`}
    >
      {status}
    </span>
  );
}

import type { ItemOrcamento } from "../../types";
import { Typography } from "../atoms/Typography";
import { StatusBadge } from "../atoms/StatusBadge";
import { Button } from "../atoms/Button";
import { DataField } from "../molecules/DataField";
import { Pencil, Trash2, ExternalLink } from "lucide-react";

interface CardItemProps {
  item: ItemOrcamento;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function CardItem({ item, onEdit, onDelete }: CardItemProps) {
  return (
    <div className="bg-brand-card rounded-2xl p-6 border border-brand-border shadow-sm hover:shadow-md transition-all group relative">
      {/* Cabeçalho */}
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Typography
              variant="subtitle"
              className="font-bold text-brand-text"
            >
              {item.nome}
            </Typography>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                className="text-brand-muted hover:text-brand-primary"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          <Typography variant="body" className="text-zinc-400 text-xs">
            {item.descricao || "Sem descrição adicional"}
          </Typography>
        </div>

        <div className="flex flex-col items-end gap-3">
          <StatusBadge status={item.status} />

          {/* Ações que aparecem no Hover */}
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" className="p-2 h-8 w-8" onClick={onEdit}>
              <Pencil size={14} className="text-brand-muted" />
            </Button>
            <Button
              variant="ghost"
              className="p-2 h-8 w-8 hover:bg-red-50"
              onClick={onDelete}
            >
              <Trash2 size={14} className="text-red-400" />
            </Button>
          </div>
        </div>
      </div>

      {/* Grid Financeiro (Fiel à imagem de referência) */}
      <div className="grid grid-cols-4 gap-4 border-t border-brand-border pt-6">
        <DataField
          label="QTD"
          value={item.quantidade.toString().padStart(2, "0")}
        />

        <DataField
          label="À VISTA"
          value={item.valorVista.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
          isCurrency
        />

        <div className="flex flex-col gap-0.5">
          <Typography variant="label" className="text-zinc-400">
            PARCELAS
          </Typography>
          <Typography variant="body" className="font-bold text-base">
            {item.parcelas}x R${" "}
            {(item.valorTotalParcelado / item.parcelas).toLocaleString(
              "pt-BR",
              { minimumFractionDigits: 2 },
            )}
          </Typography>
        </div>

        <DataField
          label="TOTAL"
          value={item.valorTotalParcelado.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
          isCurrency
          highlight
        />
      </div>
    </div>
  );
}

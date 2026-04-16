import { Typography } from "../../atoms/Typography";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { X } from "lucide-react";

interface ItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Props de dados simplificadas para a parte visual
  title?: string;
}

export function ItemModal({
  isOpen,
  onClose,
  title = "Novo Item",
}: ItemModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden">
        {/* Header Visual */}
        <div className="p-6 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
          <Typography variant="subtitle" className="font-bold">
            {title}
          </Typography>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* Corpo do Formulário */}
        <div className="p-8 space-y-5">
          <Input label="Nome do Móvel" placeholder="Ex: Sofá Retrátil" />

          <Input
            label="Descrição / Dimensões"
            placeholder="Ex: 2.40m - Tecido Linho"
          />

          <div className="grid grid-cols-2 gap-4">
            <Input label="Quantidade" type="number" defaultValue={1} />
            <Input
              label="Valor à Vista (R$)"
              type="number"
              placeholder="0,00"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input label="Nº de Parcelas" type="number" defaultValue={1} />
            <Input
              label="Total Parcelado (R$)"
              type="number"
              placeholder="0,00"
            />
          </div>

          <Input label="Link da Loja" placeholder="https://..." />

          <div className="flex flex-col gap-2">
            <Typography variant="label">Status da Compra</Typography>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-lg border-2 border-brand-primary bg-brand-primary/5 text-brand-primary font-bold text-xs uppercase">
                Pendente
              </button>
              <button className="flex-1 py-2 rounded-lg border-2 border-transparent bg-zinc-100 text-zinc-500 font-bold text-xs uppercase">
                Comprado
              </button>
            </div>
          </div>
        </div>

        {/* Rodapé Visual */}
        <div className="p-6 bg-zinc-50 border-t border-zinc-100 flex gap-3 justify-end">
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button>Salvar Item</Button>
        </div>
      </div>
    </div>
  );
}

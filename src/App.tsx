import { useState } from "react";
import { Plus } from "lucide-react";

// Átomos e Moléculas
import { Button } from "./components/atoms/Button";
import { Typography } from "./components/atoms/Typography";

// Organismos
import { CardItem } from "./components/organisms/CardItem";
import { ItemModal } from "./components/organisms/ItemModal";

// Tipos
import type { ItemOrcamento } from "./types";

export default function App() {
  // Estado para controlar a visibilidade do Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Um item de exemplo estático para visualizarmos o CardItem
  const itemExemplo: ItemOrcamento = {
    id: "1",
    nome: "Cama King Size",
    descricao: "Dimensões: 193cm x 203cm",
    quantidade: 1,
    valorVista: 4250.0,
    parcelas: 10,
    valorTotalParcelado: 4250.0,
    status: "comprado",
    link: "https://google.com",
  };

  return (
    <div className="min-h-screen bg-brand-bg p-6 md:p-12">
      {/* Cabeçalho da Página */}
      <header className="max-w-5xl mx-auto flex justify-between items-center mb-10">
        <div>
          <Typography variant="title">Meu Orçamento</Typography>
          <Typography variant="subtitle">
            Gerencie os itens do seu novo espaço
          </Typography>
        </div>

        <Button icon={<Plus size={20} />} onClick={() => setIsModalOpen(true)}>
          Adicionar Item
        </Button>
      </header>

      {/* Grid de Conteúdo */}
      <main className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <Typography variant="label" className="mb-2">
            Itens Cadastrados
          </Typography>

          {/* Renderização do CardItem */}
          <div className="max-w-2xl">
            <CardItem
              item={itemExemplo}
              onEdit={() => setIsModalOpen(true)}
              onDelete={() => alert("Excluir clicado")}
            />
          </div>
        </div>
      </main>

      {/* Organismo Modal - Controlado pelo estado */}
      <ItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Cadastrar Novo Móvel"
      />
    </div>
  );
}

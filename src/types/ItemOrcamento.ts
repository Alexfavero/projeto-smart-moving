export interface ItemOrcamento {
  id: string; 
  nome: string;
  status: "comprado" | "pendente";
  quantidade: number;
  valorVista: number;
  parcelas: number;
  valorTotalParcelado: number;
  link?: string;
  descricao?: string;
}
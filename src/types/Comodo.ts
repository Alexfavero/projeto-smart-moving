import type { ItemOrcamento } from "./ItemOrcamento";

export interface Comodo {
  id: number;
  nome: string;
  itensMoveis: ItemOrcamento[];
}
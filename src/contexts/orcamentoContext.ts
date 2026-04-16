import { createContext } from "react";
import type { Comodo, ItemOrcamento } from "../types";

export interface OrcamentoContextData {
  comodos: Comodo[];
  adicionarItem: (comodoId: number, item: ItemOrcamento) => void;
  excluirItem: (comodoId: number, itemId: string) => void;
}

export const OrcamentoContext = createContext<OrcamentoContextData>(
  {} as OrcamentoContextData,
);

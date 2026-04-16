import React, { useState, useEffect } from "react";
import { OrcamentoContext } from "./orcamentoContext";
import type { Comodo, ItemOrcamento } from "../types";

export function OrcamentoProvider({ children }: { children: React.ReactNode }) {
  const [comodos, setComodos] = useState<Comodo[]>(() => {
    const saved = localStorage.getItem("@SmartMoving:comodos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("@SmartMoving:comodos", JSON.stringify(comodos));
  }, [comodos]);

  const adicionarItem = (comodoId: number, novoItem: ItemOrcamento) => {
    setComodos((prev) =>
      prev.map((comodo) => {
        if (comodo.id === comodoId) {
          return { ...comodo, itensMoveis: [...comodo.itensMoveis, novoItem] };
        }
        return comodo;
      }),
    );
  };

  const excluirItem = (comodoId: number, itemId: string) => {
    setComodos((prev) =>
      prev.map((comodo) => {
        if (comodo.id === comodoId) {
          return {
            ...comodo,
            itensMoveis: comodo.itensMoveis.filter((i) => i.id !== itemId),
          };
        }
        return comodo;
      }),
    );
  };

  return (
    <OrcamentoContext.Provider value={{ comodos, adicionarItem, excluirItem }}>
      {children}
    </OrcamentoContext.Provider>
  );
}

import { useContext } from "react";
import { OrcamentoContext } from "../contexts/orcamentoContext";

export function useOrcamento() {
  return useContext(OrcamentoContext);
}

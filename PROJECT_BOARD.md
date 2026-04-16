# Projeto SmartMoving - Planejamento de Etapas

## Visão Geral

Este documento serve como base para montar um GitHub Project com as etapas do projeto.
O foco atual é a camada visual; ainda faltam as integrações de dados e comportamento.

## Status Atual

### Já implementado

- Layout principal de tela (`App.tsx`) com header, botão e seção de itens.
- Componente visual de `CardItem` com dados estáticos.
- Modal visual (`ItemModal`) para cadastro de itens.
- Design system inicial com átomos (`Button`, `Typography`, `Input`, `StatusBadge`).
- Moléculas e organismos visuais (`DataField`, `SidebarItem`, `CardItem`).
- Contexto de orçamento (`OrcamentoContext`) e hook `useOrcamento` criados.
- Tipagem de item de orçamento (`ItemOrcamento`) e persistência local no provider.
- Estilização global e tema base em `src/index.css`.

### Ainda em desenvolvimento

- Uso real do contexto em `App` ou outros componentes.
- Lista dinâmica de cômodos e seleção de ambiente.
- Adicionar/editar/excluir itens no estado do app.
- Cálculo de totais e resumo financeiro.
- Integração de dados entre modal e cards.
- Responsividade completa para mobile.
- Imagens ou cards de mockup em itens.
- Sidebar de navegação funcional.
- Filtros e buscas de itens.

## Sugestão de Colunas para GitHub Project

- Backlog
- Planejado
- Em andamento
- Em revisão
- Concluído

## Itens de Projeto Recomendados

### Backlog / Planejado

- [ ] Definir modelo de dados final para `Comodo` e `ItemOrcamento`.
- [ ] Criar mock de dados iniciais por cômodo.
- [ ] Estruturar a navegação lateral (sidebar) com cômodos e financeiro.
- [ ] Implementar lista de itens por cômodo.
- [ ] Criar resumo financeiro por cômodo e total geral.
- [ ] Implementar formulário real do modal de cadastro.
- [ ] Conectar modal e contexto para criar itens.
- [ ] Conectar ação de exclusão e edição de itens.
- [ ] Adicionar persistência local com `localStorage` (já iniciado).
- [ ] Criar estado de seleção de cômodo.
- [ ] Implementar responsividade (mobile/tablet/desktop).
- [ ] Adicionar animações leves e microinterações.
- [ ] Polir UI com imagens dos itens e cards empilhados.

### Em andamento / Próximo passo imediato

- [ ] Usar `OrcamentoProvider` envolvendo `App` em `main.tsx`.
- [ ] Tornar item de exemplo um estado dinâmico com `useState` ou contexto.
- [ ] Preencher dados de `Comodo` e renderizar `CardItem` em loop.
- [ ] Fazer o modal salvar um item ao invés de apenas abrir/fechar.

### Prioridades de valor

- [ ] Listagem real por cômodo com sidebar navegável.
- [ ] Resumo financeiro com totais e progresso.
- [ ] Cadastro e edição de itens.
- [ ] Filtro por status (`pendente` / `comprado`).

## Como usar no GitHub Project

1. Crie um novo board no GitHub.
2. Adicione as colunas sugeridas.
3. Crie cards a partir dos itens da seção "Itens de Projeto Recomendados".
4. Marque os itens já feitos como concluídos ou mova para a coluna "Concluído".
5. Atualize o board conforme você avança nas integrações.

## Dicas para organizar o projeto

- Separe por área: `UI`, `Dados`, `Persistência`, `Funcionalidade`.
- Coloque tasks pequenas e entregáveis (ex: "Criar card de item" em vez de "Melhorar app").
- Use labels como `visual`, `backend`, `dados`, `alta prioridade`.
- Inclua um item específico para "integração de contexto com UI".

## Exemplo de Issues / Cards

- [ ] `Feature: Navegação por Cômodos` - sidebar funcional com seleção de ambiente.
- [ ] `Feature: Lista de Itens` - renderizar itens por cômodo usando dados do contexto.
- [ ] `Feature: Modal de Cadastro` - salvar novos móveis e atualizar resumo.
- [ ] `Chore: Modelar dados de orçamento` - finalizar `Comodo` e `ItemOrcamento`.
- [ ] `UX: Responsividade` - ajustar layout para mobile.
- [ ] `Bug: Excluir item` - implementar exclusão real do item.

---

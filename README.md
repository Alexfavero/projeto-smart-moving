SmartMoving 📦
O SmartMoving é um organizador e calculador de orçamentos para mudanças residenciais. O projeto foi desenvolvido como um estudo aprofundado de React e TypeScript, focando na criação de interfaces dinâmicas, gerenciamento de estado e experiência do usuário (UX).

A ideia central é permitir que o usuário liste seus pertences por cômodo e defina faixas de preço (mínimo e máximo) baseadas em sua própria pesquisa, centralizando o planejamento financeiro em um único local.

🚀 Tecnologias e Conceitos
Este projeto utiliza o ecossistema moderno do React para garantir performance e tipagem segura:

React 19: Uso de Hooks para gerenciamento de estado e ciclo de vida.

TypeScript: Implementação de interfaces rigorosas para garantir a integridade dos dados entre componentes.

Tailwind CSS v4: Estilização baseada em utilitários, aplicando conceitos de design system (espaçamento, cores e tipografia).

Vite: Ferramenta de build otimizada para desenvolvimento rápido.

🏗️ Arquitetura de Dados
O projeto aplica padrões de organização que facilitam a manutenção e o entendimento do fluxo de informações:

Modelagem de Dados: Estrutura baseada em Interfaces para as entidades ItemOrcamento e Comodo.

Presets Inteligentes: Uso de Record<string, string[]> (Dicionários) para criar um sistema de sugestões dinâmicas por ambiente.

Componentização: Divisão da interface em componentes menores e reutilizáveis, seguindo o princípio de responsabilidade única.

📋 Funcionalidades em Desenvolvimento
[ ] Seleção de Cômodos: Lista dinâmica de ambientes com opção de personalização.

[ ] Autocomplete de Itens: Input inteligente que sugere móveis e utensílios conforme a digitação do usuário.

[ ] Cálculo Dinâmico: Soma automática dos valores mínimos e máximos conforme novos itens são adicionados ou editados.

[ ] Design Responsivo: Interface adaptada para uso em dispositivos móveis e desktop com foco em produtividade.

🧠 Aprendizados Relevantes
Este projeto marca o aprofundamento em tópicos cruciais para o desenvolvimento Front-end:

Manipulação de Arrays: Uso intensivo de .map(), .filter() e .reduce() para processar dados de orçamento.

Estado Complexo: Gerenciamento de objetos aninhados (Objetos dentro de Arrays) no estado do React.

Tipagem Avançada: Aplicação de Generics e Records do TypeScript para criar um catálogo de sugestões escalável.

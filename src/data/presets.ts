// 1. O Catálogo Geral (Todos os itens possíveis)
export const CATALOGO_ITENS = [
  "Geladeira", "Fogão", "Micro-ondas", "Fritadeira Elétrica", "Lava-louças", "Mesa de Jantar", "Cadeiras", "Jogo de Panelas", "Aparelho de Jantar", "Filtro de Água",
  "Sofá", "Poltrona", "Painel de TV", "Televisão", "Home Theater", "Mesa de Centro", "Tapete", "Aparelho de Som",
  "Cama de Casal", "Cama de Solteiro", "Guarda-roupa", "Cômoda", "Criado-mudo", "Penteadeira", "Sapateira",
  "Escrivaninha", "Cadeira de Escritório", "Estante de Livros", "Computador/Desktop", "Monitor", "Impressora",
  "Máquina de Lavar", "Secadora de Roupas", "Tanque", "Tábua de Passar", "Aspirador de Pó", "Varal",
  "Armário de Banheiro", "Espelho", "Chuveiro", "Prateleiras",
  "Bicicleta", "Ferramentas", "Malas de Viagem", "Ar Condicionado", "Ventilador", "Aquecedor"
];

// 2. Relacionamento Inteligente (Itens sugeridos por ambiente)
export const RELACAO_COMODO_ITENS: Record<string, string[]> = {
  "Cozinha": [
    "Geladeira", "Fogão", "Micro-ondas", "Fritadeira Elétrica", "Lava-louças", 
    "Mesa de Jantar", "Cadeiras", "Jogo de Panelas", "Aparelho de Jantar", "Filtro de Água"
  ],
  "Sala de Estar": [
    "Sofá", "Poltrona", "Painel de TV", "Televisão", "Home Theater", 
    "Mesa de Centro", "Tapete", "Ar Condicionado", "Ventilador"
  ],
  "Quarto Principal": [
    "Cama de Casal", "Guarda-roupa", "Cômoda", "Criado-mudo", 
    "Televisão", "Ar Condicionado", "Espelho"
  ],
  "Quarto de Solteiro": [
    "Cama de Solteiro", "Guarda-roupa", "Escrivaninha", "Cadeira de Escritório", 
    "Prateleiras", "Ventilador"
  ],
  "Banheiro": [
    "Armário de Banheiro", "Espelho", "Chuveiro", "Prateleiras"
  ],
  "Escritório / Home Office": [
    "Escrivaninha", "Cadeira de Escritório", "Estante de Livros", 
    "Computador/Desktop", "Monitor", "Impressora", "Ar Condicionado"
  ],
  "Área de Serviço": [
    "Máquina de Lavar", "Secadora de Roupas", "Tábua de Passar", 
    "Aspirador de Pó", "Varal"
  ],
  "Sala de Jantar": [
    "Mesa de Jantar", "Cadeiras", "Aparelho de Som", "Tapete"
  ],
  "Garagem / Depósito": [
    "Bicicleta", "Ferramentas", "Malas de Viagem", "Prateleiras"
  ],
  "Varanda / Sacada": [
    "Mesa Pequena", "Cadeiras de Praia", "Rede", "Ventilador"
  ],
  "Outros": [] 
};

// Gera a lista de nomes de cômodos dinamicamente
export const LISTA_COMODOS = Object.keys(RELACAO_COMODO_ITENS);
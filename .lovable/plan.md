# Plan - Ajuste dos Filtros de Ranking e Estilização de Top Vendedores

Ajustar os botões de TOP 3, TOP 5 e TOP 10 na aba Ranking para que controlem a exibição dos cards destacados (pódio) e da lista estendida, além de aplicar a estilização cinza para os vendedores do 4º ao 10º lugar.

## User Review Required

> [!IMPORTANT]
> A Classificação Geral (tabela) não será mais filtrada pelos botões de TOP, mantendo todos os vendedores conforme solicitado.

- **Ajuste de Comportamento**: Os botões de TOP agora controlam quantos cards aparecem no pódio/área de destaque.
- **Estilização**: TOP 3 mantém as cores temáticas (Ouro, Prata, Bronze). TOP 4 ao TOP 10 serão exibidos em tons de cinza.

## Proposed Changes

### Frontend Improvements

#### `public/sistema.html`
- Renomear/Ajustar o memo `top3Vendedores` para `topSellersHighlighted` (ou similar) para refletir a seleção do filtro (3, 5 ou 10).
- Remover a lógica de `slice` do memo `displayedSellers` para que a tabela de Classificação Geral continue mostrando todos os registros independentemente do botão de TOP selecionado.
- Atualizar a área de pódio no `renderVendedoresTab` para renderizar dinamicamente de 3 a 10 cards.
- Implementar lógica condicional de cores:
    - 1º lugar: Ouro (mantém)
    - 2º lugar: Prata/Cinza escuro (mantém)
    - 3º lugar: Bronze/Cobre (mantém)
    - 4º ao 10º lugar: Tons de cinza.
- Adicionar animações de entrada/transição suaves ao alternar entre os filtros de TOP.

#### `src/routes/index.tsx`
- Atualizar o texto do "Prompt Anti-Alucinação" conforme a solicitação visual do usuário.

## Technical Details
- Usar `useMemo` para derivar a lista de vendedores destacados com base em `rankingTopFilter`.
- Utilizar classes Tailwind (`bg-slate-200`, `text-slate-600`, etc.) para a estilização dos cards TOP 4-10.
- Manter a tabela de Classificação Geral intocada pelos botões de TOP.

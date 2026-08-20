# Plano de Implementação - Ajustes e Novas Funcionalidades

O objetivo é realizar três melhorias principais no sistema: adicionar o cálculo de D/U (Dias Úteis) na aba "Semana por Semana", implementar botões de filtro de ranking (Top 3, 5, 10) com animações, e adicionar a funcionalidade de ocultar colunas na classificação geral do Ranking.

## Alterações Propostas

### Aba Semana por Semana
- Localizar a área de totais na aba "Semana por Semana".
- Implementar o cálculo de D/U: (Vendas Instaladas / Dias Úteis Decorridos).
- Exibir o resultado formatado no card de total correspondente.

### Aba Ranking - Filtros de Topo
- Adicionar três botões (Top 3, Top 5, Top 10) acima da lista de ranking.
- Implementar lógica para filtrar a lista de vendedores baseada na seleção.
- Adicionar transições CSS (animações de entrada/saída) quando a lista for filtrada.

### Aba Ranking - Ocultar Colunas
- Adicionar um ícone de "olho" (Lucide eye/eye-off) acima de cada cabeçalho da tabela de Classificação Geral (Equipe, Vendas, Instaladas, D/U, Mix, Quartil, Projeção, Mês Anterior, Comparativo).
- Implementar estado local para controlar a visibilidade de cada coluna.
- Ajustar a renderização das células da tabela para respeitar o estado de visibilidade.

## Detalhes Técnicos

- **Tecnologias**: React, Tailwind CSS, Lucide Icons, Framer Motion (se disponível) ou transições nativas do CSS para as animações.
- **Arquivo**: `public/sistema.html` concentra toda a lógica e UI.
- **Persistência**: As preferências de colunas ocultas serão mantidas apenas no estado local da sessão (ou localStorage se desejado).
- **Cálculos**: O cálculo de D/U utilizará os valores de `uteisDecorridos` já disponíveis nas configurações do sistema.

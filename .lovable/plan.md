# Plano de Implementação: Aba Setor FPD

Implementação da nova aba **Setor FPD** com funcionalidades de Dashboard e Processos, seguindo o layout da aba Eficácia e os requisitos visuais solicitados (filtros de tempo linear, cards específicos e lista de processos detalhada).

## Alterações Técnicas

### Estado e Dados
- Criar estados para os dados de FPD: `fpdSalesData` (para armazenar os registros extraídos do CSV de FPD).
- Criar estados de controle: `fpdSubTab` ('dashboard' ou 'processos'), `fpdSelectedMonth` (1 a 12), `fpdFilterEquipe`, `fpdFilterStatus`, etc.
- Adicionar `fpd_atual` à lista de arquivos sincronizados com a Nuvem (Supabase Storage).

### Interface (UI)
- Adicionar "Setor FPD" à navegação lateral (MENU_ITEMS).
- Implementar a função `renderFpdTab`:
  - **Header**: Botão de alternância (Dashboard/Processos) e seletor de Mês (Linear: 1, 2, 3... 12).
  - **Dashboard**:
    - Gráfico de linha do tempo (Line Chart) para o histórico mensal.
    - Grid de 11 cards (Total, Pago, Não Pago | 10 a 15, 15 a 30, 30 a 45, 45 a 55, 55 a 60, +61).
    - Tabelas resumidas por equipe e vendedor.
  - **Processos**:
    - Filtros de Equipe, Vendedor, Vencimento, Status Pgto, Motivo Não Pgto.
    - Réplica dos 11 cards de resumo no topo.
    - Tabela de Processos com colunas: O.S, Cliente, CPF, Data Inst, Data Vencimento, Faixa, Status Pgto, Vendedor, Equipe, Ações (Detalhes).
    - Modal de Detalhes expandido: Obs de Pagamento, Telefone, Plano, Endereço.

### Lógica de Negócio
- Atualizar `handleCsvUpload` para processar o tipo `fpd_atual`, mapeando as novas colunas necessárias (Data Vencimento, Status Pagamento, Obs Pagamento, etc.).
- Implementar lógica de filtragem específica para a aba FPD baseada no mês selecionado (1-12).
- Classificar automaticamente os registros nas faixas de atraso (10 a 15 dias, etc.) para os cards.

### Sincronização
- Centralizar o botão de upload de FPD na aba Metas/Config (removendo o botão genérico atual se necessário e adicionando o específico para o novo formato).

## Revisão de Segurança e Performance
- Uso de `useMemo` para cálculos de métricas de FPD para evitar re-renderizações lentas.
- Garantia de que os dados de FPD são isolados e não afetam os indicadores de vendas gerais.

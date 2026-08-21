# Plano de Melhorias na Aba Eficácia

Este plano implementa as solicitações de sincronização visual, novos filtros e mapeamento de dados para o setor de eficácia.

## Alterações Propostas

### Frontend (Eficácia)

1.  **Sincronização de Resumos:**
    *   Adicionar os 6 cards de resumo (SummaryCards) na sub-aba "Processos", garantindo consistência com a visualização do "Dashboard".
    *   Os cards permitirão filtrar a lista de processos por status ao serem clicados.

2.  **Novo Filtro de Mês:**
    *   Adicionar um seletor de mês ao lado do filtro de equipe no cabeçalho da aba Eficácia.
    *   Este filtro aplicará restrições de data aos dados carregados via CSV (Atual e Anterior).

3.  **Mapeamento de Observações da Instalação:**
    *   Atualizar o processador de CSV para capturar a coluna "AL" (Complemento Agendamento Instalação).
    *   Renomear o campo de "Obs da Venda" para "OBS DA INSTALAÇÃO" no modal de detalhes do processo.
    *   Exibir o conteúdo da nova coluna mapeada neste campo.

### Detalhes Técnicos

*   **Arquivo:** `public/sistema.html`
*   **Estado:**
    *   Novo estado `eficaciaSelectedMonth` para o filtro de mês.
    *   Novo índice `idxComplementoInstalacao` na lógica de leitura do CSV.
*   **Componentes:**
    *   Inserção do componente `<SummaryCards>` dentro do bloco condicional de `eficaciaSubTab === 'processos'`.
    *   Atualização do modal `selectedSaleDetails` para refletir a nova nomenclatura e campo de dados.

## Verificação

1.  Carregar um CSV e verificar se a coluna AL é lida corretamente.
2.  Abrir a aba Eficácia -> Processos e confirmar a presença dos 6 cards no topo.
3.  Testar o filtro de mês no cabeçalho.
4.  Abrir os detalhes de uma venda na tabela e verificar o título "OBS DA INSTALAÇÃO".

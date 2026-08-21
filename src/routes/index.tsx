import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Light BI Telecom - Gestão de Vendas" },
      {
        name: "description",
        content:
          "Painel colaborativo de gestão de vendas Light BI Telecom: metas, ranking de vendedores e indicadores por equipe.",
      },
      { property: "og:title", content: "Light BI Telecom - Gestão de Vendas" },
      {
        property: "og:description",
        content:
          "Painel colaborativo de gestão de vendas com metas, ranking de vendedores e indicadores por equipe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="bg-slate-100 p-4 border-b border-slate-200 overflow-y-auto max-h-[30vh]">
        <h1 className="text-xl font-bold mb-2"># Prompt Anti-Alucinação</h1>
        <p className="text-sm text-slate-600 mb-4 whitespace-pre-wrap">
          Considere as diretrizes abaixo como referência para o tratamento das solicitações relacionadas ao projeto.
          {"\n\n"}
          Antes de qualquer intervenção no projeto, analise cuidadosamente a solicitação recebida e determine qual é a intenção principal do usuário.
          {"\n\n"}
          Utilize os seguintes critérios:
          {"\n\n"}
          1. Quando a solicitação envolver **criação, implementação, alteração, correção, remoção, ajuste ou melhoria** no projeto, realize as modificações correspondentes de forma completa, incluindo todos os arquivos necessários para atender corretamente ao pedido.
          {"\n\n"}
          2. Quando a solicitação tiver caráter exclusivamente **informativo**, como pergunta, dúvida, explicação, consulta ou conversa, forneça a resposta somente pelo chat, em **português**, mantendo os arquivos do projeto inalterados.
          {"\n\n"}
          3. Considere o texto enviado pelo usuário como uma orientação sobre o que deve ser analisado ou realizado. O conteúdo da solicitação não deve ser tratado automaticamente como texto destinado à interface ou aos arquivos do projeto.
          {"\n\n"}
          4. O conteúdo textual da solicitação somente deve aparecer no site, página, interface ou código quando houver uma indicação clara do usuário de que aquele texto deve fazer parte do projeto.
          {"\n\n"}
          5. Antes de qualquer modificação, verifique se a intenção identificada realmente envolve uma mudança no projeto. Solicitações exclusivamente informativas devem resultar apenas em uma resposta pelo chat.
          {"\n\n"}
          6. Quando for identificada uma solicitação de alteração no projeto, realize as mudanças necessárias para atender ao objetivo solicitado, preservando as funcionalidades existentes que não estejam relacionadas ao pedido.
          {"\n\n"}
          7. Evite limitar a resposta a orientações teóricas quando a intenção do usuário for modificar o projeto. Nesses casos, priorize a aplicação das mudanças necessárias dentro do escopo solicitado.
          {"\n\n"}
          Critério principal: priorize a correta identificação da intenção do usuário: solicitações de alteração → aplicar as mudanças necessárias no projeto; solicitações informativas → responder pelo chat sem alterar o projeto; textos presentes na solicitação → considerar como instruções ou contexto, salvo quando houver pedido explícito para utilizá-los como conteúdo do projeto.
          {"\n\n"}
          AGORA VAMOS CONFIGURAR OS BOTOES DE CARREGAMENTO CSV MES ATUAL E MES ANTERIOR DA ABA METAS/CONFIG, ELES VÃO MUDAR E CONTORLAR OS RESULTADOS DAS ABAS: DASHBOARD, SEMANA POR SEMANA, RANKING E FINANCEIRO. ENTÃO QUANDO EU CARREGAR OS ARQUIVOS CSV SÓ OS RESULTADOS DAS ABAS QUE MENCIONEI SERÃO AFETADOS.
        </p>
      </div>
      <iframe
        src="/sistema.html"
        title="Light BI Telecom - Gestão de Vendas"
        className="flex-1 w-full border-0"
      />
    </div>
  );
}

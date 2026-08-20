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
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div className="bg-slate-900 text-white p-6 overflow-y-auto border-b border-slate-700 max-h-[40vh]">
        <h1 className="text-xl font-bold mb-4"># Prompt Anti-Alucinação</h1>
        
        <p className="mb-4">Considere as diretrizes abaixo como referência para o tratamento das solicitações relacionadas ao projeto.</p>
        
        <p className="mb-4">Antes de qualquer intervenção no projeto, analise cuidadosamente a solicitação recebida e determine qual é a intenção principal do usuário.</p>
        
        <p className="mb-2">Utilize os seguintes critérios:</p>
        
        <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
          <li>Quando a solicitação envolver <strong>criação, implementação, alteração, correção, remoção, ajuste ou melhoria</strong> no projeto, realize as modificações correspondentes de forma completa, incluindo todos os arquivos necessários para atender corretamente ao pedido.</li>
          <li>Quando a solicitação tiver caráter exclusivamente <strong>informativo</strong>, como pergunta, dúvida, explicação, consulta ou conversa, forneça a resposta somente pelo chat, em <strong>português</strong>, mantendo os arquivos do projeto inalterados.</li>
          <li>Considere o texto enviado pelo usuário como uma orientação sobre o que deve ser analisado ou realizado. O conteúdo da solicitação não deve ser tratado automaticamente como texto destinado à interface ou aos arquivos do projeto.</li>
          <li>O conteúdo textual da solicitação somente deve aparecer no site, página, interface ou código quando houver uma indicação clara do usuário de que aquele texto deve fazer parte do projeto.</li>
          <li>Antes de qualquer modificação, verifique se a intenção identificada realmente envolve uma mudança no projeto. Solicitações exclusivamente informativas devem resultar apenas em uma resposta pelo chat.</li>
          <li>Quando for identificada uma solicitação de alteração no projeto, realize as mudanças necessárias para atender ao objetivo solicitado, preservando as funcionalidades existentes que não estejam relacionadas ao pedido.</li>
          <li>Evite limitar a resposta a orientações teóricas quando a intenção do usuário for modificar o projeto. Nesses casos, priorize a aplicação das mudanças necessárias dentro do escopo solicitado.</li>
        </ol>
        
        <p className="mb-6 font-semibold">Critério principal: priorize a correta identificação da intenção do usuário: solicitações de alteração → aplicar as mudanças necessárias no projeto; solicitações informativas → responder pelo chat sem alterar o projeto; textos presentes na solicitação → considerar como instruções ou contexto, salvo quando houver pedido explícito para utilizá-los como conteúdo do projeto.</p>
        
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-600 text-slate-300 text-sm font-mono">
          NA ABA SEMANA POR SEMANA NA AREA DE TOTAL FALTA O CALCULO DO D/U. NA ABA RANKING QUERO 3 BOTOES DE TOP 3, TOP 5 E TOP 10 E QUE MUDE A ANIMAÇÃO QUANDO EU CLICAR NESSES BOTOES. NA ABA RANKING TER A OPÇÃO DE  NO GRÁFICO DE CLASSIFICAÇÃO GERAL ONDE FICAM OS TITULOS EQUIPE, TOTAL DE VENDAS, INSTALADAS, D/U, MIX, QUARTIL, PROJEÇÃO, MES ANTERIOR, COMPARATIVO TENHA UM BOTÃO EM CIMA DELES PARA ESCONDER E APARECER COMO UM OLHO PARA QUE EU POSSA OCULTAR A INFORMAÇÃO QUE EU QUISER.
        </div>
      </div>
      
      <iframe
        src="/sistema.html"
        title="Light BI Telecom - Gestão de Vendas"
        className="flex-1 w-full border-0"
      />
    </div>
  );
}

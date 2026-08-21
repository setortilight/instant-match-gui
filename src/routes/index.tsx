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
      <div className="bg-slate-900 text-white p-2 text-[10px] font-mono whitespace-pre-wrap break-all leading-tight border-b border-slate-700">
        NO BOTÃO DETALHES O CAMPO OBS DA VENDA TEM QUE MOSTRAR O TEXTO QUE ESTÁ NO CSV NA COLUNA AL O Complemento Agendamento Instalação, ESSA INFORMAÇÃO QUE EU QUERO QUE MOSTRE NESSE CAMPO
      </div>
      <iframe
        src="/sistema.html"
        title="Light BI Telecom - Gestão de Vendas"
        className="flex-1 border-0"
      />
    </div>
  );
}

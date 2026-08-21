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
      <div className="bg-yellow-100 p-2 text-xs font-mono text-center border-b border-yellow-200">
        ELE TEM QUE SOBRESCREVER UM EXEMPLO O MES PASSADO QUE FOR CARREGADO POIS QUANDO O FUNCIONÁRIO RESOLVER O STATUS DE INSTALAÇÃO O CSV TAMBÉM MUDA E AI PRECISA SER ATUALIZADO E O FUNCIONÁRIO VAI ATUALIZANDO OS STATUS NO DECORRER DO MES ATÉ CHEGAR AO MES ATUAL PARA ELE TRATAR AS INSTALAÇÕES
      </div>
      <iframe
        src="/sistema.html"
        title="Light BI Telecom - Gestão de Vendas"
        className="flex-1 border-0"
      />
    </div>
  );
}

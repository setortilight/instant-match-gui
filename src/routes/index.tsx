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
      <div className="bg-yellow-100 border-b border-yellow-200 py-2 px-4 text-center text-xs font-bold text-yellow-800">
        Ajustar o layout do pódio na aba Ranking para que o 1º lugar permaneça sempre centralizado e as posições do 2º e 3º se mantenham à esquerda e à direita também nos cards do Top 5. NO TOP 10 FICA A LINHA DE TOP 5 ACIMA E OS OUTROS 5 ABAIXO
      </div>
      <iframe
        src="/sistema.html"
        title="Light BI Telecom - Gestão de Vendas"
        className="flex-1 border-0"
      />
    </div>
  );
}

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
    <div className="flex flex-col h-screen w-screen overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full bg-yellow-400 text-slate-900 text-[10px] font-black uppercase py-1 px-4 z-[9999] text-center shadow-md">
        EU QUERO OS CARDS COM O MESMO PADRAO DE DESIGN DA ABA EFICÁCIA
      </div>
      <iframe
        src="/sistema.html"
        title="Light BI Telecom - Gestão de Vendas"
        className="flex-1 border-0 pt-6"
      />
    </div>
  );
}

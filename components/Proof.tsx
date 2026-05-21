const metrics = [
  { label: "Reducao no tempo de analise", value: "-42%" },
  { label: "Aumento medio de eficiencia", value: "+31%" },
  { label: "Decisoes com dados confiaveis", value: "100%" }
];

export function Proof() {
  return (
    <section className="section-shell mt-20">
      <div className="panel p-7 sm:p-9">
        <h2 className="section-title">Resultados que importam no caixa e na operacao</h2>
        <p className="section-subtitle">
          Projetos de BI precisam gerar impacto pratico. Nosso foco e reduzir ineficiencia e acelerar previsibilidade.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl2 border border-white/10 bg-bg/40 p-5">
              <p className="text-2xl font-black text-secondary">{metric.value}</p>
              <p className="mt-2 text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

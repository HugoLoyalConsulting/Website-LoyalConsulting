const services = [
  {
    title: "Power BI estrategico",
    desc: "Dashboards executivos que conectam performance comercial, operacao e financeiro."
  },
  {
    title: "Modelagem de dados",
    desc: "Arquitetura limpa para reduzir retrabalho e escalar sem perder governanca."
  },
  {
    title: "SQL performance",
    desc: "Consultas e pipelines mais rapidos para analises confiaveis em menos tempo."
  },
  {
    title: "ETL com Python",
    desc: "Automacao de carga e transformacao para unificar fontes de dados criticas."
  },
  {
    title: "Dashboards executivos",
    desc: "Visao de negocio orientada para decisao rapida e acompanhamento de metas."
  },
  {
    title: "Integracao de dados",
    desc: "Conectamos CRM, marketing e operacao para eliminar ilhas de informacao."
  }
];

export function Services() {
  return (
    <section id="servicos" className="section-shell mt-20">
      <h2 className="section-title">Servicos desenhados para destravar crescimento</h2>
      <p className="section-subtitle">
        Cada entrega tem um unico objetivo: transformar informacao dispersa em decisao confiavel e acao rapida.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="panel p-6 transition-transform duration-smooth hover:scale-[1.02] hover:border-secondary/50"
          >
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="mt-3 text-sm text-muted">{service.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

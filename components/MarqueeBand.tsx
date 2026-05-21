const tools = [
  "Power BI",
  "Power Automate",
  "Microsoft Fabric",
  "SharePoint",
  "Python",
  "SQL",
  "Tableau",
  "Looker",
  "ETL Pipeline",
  "Dashboards Executivos",
  "Automação de Dados",
  "Integração de Sistemas",
  "KPIs em Tempo Real",
  "Gestão Visual",
];

export function MarqueeBand() {
  // Triple to guarantee infinite loop looks seamless
  const items = [...tools, ...tools, ...tools];

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {items.map((tool, i) => (
          <span key={i} className="marquee-item">
            {tool}
            <span className="marquee-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

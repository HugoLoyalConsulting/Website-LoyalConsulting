const faq = [
  {
    q: "Em quanto tempo comecamos a ver resultado?",
    a: "Em geral, as primeiras entregas de visibilidade saem nas primeiras semanas, com ganhos progressivos de maturidade."
  },
  {
    q: "Vocês atendem time pequeno?",
    a: "Sim. A proposta e modular para empresa em fase inicial ou em expansao."
  },
  {
    q: "Funciona para dados espalhados em varios sistemas?",
    a: "Sim. Fazemos integracao e modelagem para unificar fontes e evitar decisoes com dados conflitantes."
  }
];

export function FAQ() {
  return (
    <section className="section-shell mt-20">
      <h2 className="section-title">Perguntas frequentes</h2>
      <div className="mt-7 space-y-3">
        {faq.map((item) => (
          <details key={item.q} className="panel p-5">
            <summary className="cursor-pointer text-base font-semibold">{item.q}</summary>
            <p className="mt-3 text-sm text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

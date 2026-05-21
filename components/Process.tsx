const steps = [
  "Diagnostico",
  "Estruturacao",
  "Desenvolvimento",
  "Entrega",
  "Evolucao"
];

export function Process() {
  return (
    <section className="section-shell mt-20">
      <h2 className="section-title">Metodo em 5 passos para acelerar resultado</h2>
      <div className="mt-8 grid gap-3 sm:grid-cols-5">
        {steps.map((step, index) => (
          <div key={step} className="panel p-4 text-center">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Passo {index + 1}</p>
            <p className="mt-2 text-base font-bold">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

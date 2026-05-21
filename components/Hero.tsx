export function Hero() {
  return (
    <section className="section-shell pt-10 sm:pt-16">
      <div className="panel relative overflow-hidden p-7 sm:p-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 left-8 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />

        <p className="text-xs uppercase tracking-[0.18em] text-secondary">Consultoria de BI para crescimento previsivel</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
          Pare de decidir no escuro e transforme seus dados em receita.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted sm:text-lg">
          Da modelagem de dados ao dashboard executivo, criamos a estrutura que encurta tempo de decisao,
          aumenta margem e acelera escala.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#formulario"
            className="rounded-xl2 bg-gradient-to-r from-primary to-secondary px-6 py-3 text-center text-sm font-bold text-bg transition-transform duration-smooth hover:scale-[1.02]"
          >
            Quero um diagnostico gratuito
          </a>
          <a
            href="#servicos"
            className="rounded-xl2 border border-secondary/50 px-6 py-3 text-center text-sm font-semibold text-secondary transition-transform duration-smooth hover:scale-[1.02]"
          >
            Ver como funciona
          </a>
        </div>
      </div>
    </section>
  );
}

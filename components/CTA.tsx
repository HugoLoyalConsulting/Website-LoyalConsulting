export function CTA() {
  return (
    <section className="section-shell mt-20">
      <div className="panel p-8 text-center sm:p-10">
        <h2 className="text-3xl font-black sm:text-4xl">Sua operacao nao precisa esperar para decidir melhor.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted sm:text-base">
          Envie o formulario e receba contato rapido da equipe Loyal para mapear prioridades e oportunidades.
        </p>
        <a
          href="#formulario"
          className="mt-7 inline-flex rounded-xl2 bg-gradient-to-r from-secondary to-primary px-7 py-3 text-sm font-bold text-bg transition-transform duration-smooth hover:scale-[1.02]"
        >
          Ir para formulario
        </a>
      </div>
    </section>
  );
}

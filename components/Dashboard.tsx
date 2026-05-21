type DashboardProps = {
  iframeSrc?: string;
};

export function Dashboard({ iframeSrc }: DashboardProps) {
  return (
    <section className="section-shell mt-20">
      <h2 className="section-title">Preview de dashboard executivo</h2>
      <p className="section-subtitle">Embed lazy-loaded com fallback estatico para manter performance.</p>

      <div className="panel mt-7 overflow-hidden p-4">
        {iframeSrc ? (
          <iframe
            src={iframeSrc}
            title="Dashboard Loyal Consulting"
            loading="lazy"
            className="h-[420px] w-full rounded-xl2 border-0"
          />
        ) : (
          <div className="flex h-[420px] items-center justify-center rounded-xl2 border border-dashed border-white/20 bg-bg/60 p-6 text-center">
            <div>
              <p className="text-base font-semibold">Dashboard em publicacao</p>
              <p className="mt-2 text-sm text-muted">
                Assim que o embed oficial estiver pronto, este bloco sera substituido pelo iframe real.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

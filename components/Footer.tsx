export function Footer() {
  return (
    <footer className="section-shell mt-20 pb-10 pt-8">
      <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row sm:items-center">
        <p>Loyal Consulting - BI e inteligencia para decisoes melhores.</p>
        <p>© {new Date().getFullYear()} Loyal Consulting</p>
      </div>
    </footer>
  );
}

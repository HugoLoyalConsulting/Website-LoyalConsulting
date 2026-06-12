import type { Metadata } from "next";
import Link from "next/link";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_COMECAR } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Exemplos de Projetos",
  description:
    "Vendas, Financeiro, Marketing, RH, Logística e Operações: áreas que já ganharam mais clareza com dashboards e indicadores.",
  path: "/exemplos",
});

const exampleProjects = [
  {
    area: "Vendas",
    items: [
      "Receita e faturamento",
      "Taxas de conversão do funil",
      "Performance da equipe comercial",
      "Ticket médio e atingimento de metas",
    ],
  },
  {
    area: "Financeiro",
    items: [
      "Fluxo de caixa",
      "Receitas e despesas",
      "Margens e rentabilidade",
      "Inadimplência e previsões financeiras",
    ],
  },
  {
    area: "Marketing",
    items: [
      "Geração de leads",
      "CAC e ROI de campanhas",
      "Performance por canal de aquisição",
      "Conversão ao longo da jornada do cliente",
    ],
  },
  {
    area: "RH",
    items: [
      "Turnover e retenção",
      "Tempo médio de contratação",
      "Indicadores de absenteísmo",
      "Acompanhamento de treinamentos e desenvolvimento",
    ],
  },
  {
    area: "Logística",
    items: [
      "Nível de serviço e entregas no prazo",
      "Tempo médio entre etapas",
      "Identificação de gargalos operacionais",
      "Custos e produtividade logística",
    ],
  },
  {
    area: "Operações",
    items: [
      "Produtividade das equipes",
      "Tempos médios de execução",
      "Acompanhamento de metas",
      "Identificação de desvios e oportunidades de melhoria",
    ],
  },
];

export default function ExemplosPage() {
  return (
    <main
      className="ts-page-shell relative w-full max-w-full overflow-x-hidden"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.8rem)",
      }}
    >
      <StickyTopNav />

      {/* ── HEADER ──────────────────────────────────────────── */}
      <section className="lc-page-header mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero">
          <div>
            <p className="section-eyebrow reveal-up">Exemplos de projetos</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}>
              Áreas que já ganharam<br />
              mais clareza com dashboards<br />
              e indicadores.
            </h1>
            <p className="ts-hero-sub reveal-up">
              Alguns exemplos do que costumamos organizar em cada área — sempre adaptado à
              realidade e às perguntas do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* ── GRID DE ÁREAS ───────────────────────────────────── */}
      <section id="areas" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-benefits-grid mt-14">
            {exampleProjects.map((proj) => (
              <div key={proj.area} className="lc-benefit-item" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
                <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "rgba(240,237,232,0.95)", letterSpacing: "0.04em", margin: 0 }}>
                  {proj.area}
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  {proj.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", fontSize: "0.86rem", color: "rgba(240,237,232,0.65)", lineHeight: 1.5 }}>
                      <span className="lc-benefit-check" style={{ fontSize: "0.75rem" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX ────────────────────────────────────────── */}
      <div
        className="parallax-break"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/dashboard-powerbi-timeline.jpg')` }}
      >
        <div className="parallax-break__inner">
          <p className="parallax-quote">
            &ldquo;Deixe o retrabalho para trás: quando os relatórios se atualizam
            sozinhos, sobra mais tempo para o que realmente importa — analisar e
            decidir.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Business Intelligence</span>
        </div>
      </div>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Não encontrou a sua área? Certamente também dá.</h2>
          <p className="lc-cta-sub">
            Qualquer processo que hoje dependa de planilhas e relatórios manuais pode ser
            automatizado.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_COMECAR} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Falar sobre a minha área
            </a>
            <Link href="/planos" className="btn-outline">
              Ver planos
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}

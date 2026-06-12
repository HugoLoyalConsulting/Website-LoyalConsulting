import type { Metadata } from "next";
import Link from "next/link";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_PROPOSTA } from "@/lib/links";

export const metadata: Metadata = {
  title: "Planos | Loyal Consulting",
  description:
    "BASIC, PRO e PREMIUM: o investimento acompanha a complexidade do projeto. A partir de R$ 3.000.",
};

const plans = [
  {
    tier: "BASIC",
    price: "R$ 3.000",
    desc: "Para áreas que precisam sair das planilhas e ganhar visibilidade rapidamente.",
    features: [
      "Até 2 fontes de dados",
      "Até 1 conjunto principal de informações",
      "Até 2 páginas",
      "Indicadores essenciais",
      "Treinamento inicial",
    ],
    highlight: false,
  },
  {
    tier: "PRO",
    price: "R$ 6.000",
    desc: "Para áreas que precisam integrar diferentes informações e aprofundar análises.",
    features: [
      "Múltiplas fontes",
      "Cruzamento entre informações",
      "Mais indicadores",
      "Até 5 páginas",
      "Regras de negócio mais elaboradas",
    ],
    highlight: true,
  },
  {
    tier: "PREMIUM",
    price: "R$ 15.000",
    desc: "Para operações mais complexas que exigem automações e atualizações mais robustas.",
    features: [
      "Integrações avançadas",
      "Diversas fontes",
      "Atualizações automatizadas",
      "Estruturas mais sofisticadas",
      "Treinamentos ampliados",
    ],
    highlight: false,
  },
];

const faqItems = [
  {
    q: "Precisamos ter Power BI hoje?",
    a: "Não. Avaliamos o cenário atual e recomendamos a abordagem mais adequada.",
  },
  {
    q: "Trabalham apenas com Power BI?",
    a: "Nosso foco principal é Power BI, automações e consolidação de dados para tomada de decisão.",
  },
  {
    q: "É possível aproveitar as planilhas atuais?",
    a: "Sim. Em muitos casos, elas servem como ponto de partida para automatizar processos existentes.",
  },
  {
    q: "Quanto custa um projeto?",
    a: "Os projetos variam conforme a complexidade dos dados e dos indicadores necessários. Durante o diagnóstico inicial, identificamos a faixa mais adequada para sua realidade.",
  },
];

export default function PlanosPage() {
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
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero" style={{ paddingBottom: "2rem" }}>
          <div>
            <p className="section-eyebrow reveal-up">Planos</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}>
              O investimento acompanha<br />
              a complexidade do projeto.
            </h1>
            <p className="ts-hero-sub reveal-up">
              Os valores abaixo são pontos de partida. O escopo exato é definido junto com
              você, a partir das fontes de dados e dos indicadores necessários.
            </p>
          </div>
        </div>
      </section>

      {/* ── PLANOS ──────────────────────────────────────────── */}
      <section id="planos" className="lc-plans-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-plans-grid mt-14">
            {plans.map((plan) => (
              <div
                key={plan.tier}
                className={`lc-plan-card${plan.highlight ? " lc-plan-card--highlight" : ""}`}
              >
                <span className="lc-plan-tier">{plan.tier}</span>
                <div>
                  <p className="lc-plan-price-label">A partir de</p>
                  <p className="lc-plan-price">{plan.price}</p>
                </div>
                <p className="lc-plan-desc">{plan.desc}</p>
                <div>
                  <p className="lc-plan-section-label">Complexidade típica</p>
                  <ul className="lc-plan-features">
                    {plan.features.map((f) => (
                      <li key={f} className="lc-plan-feature-item">
                        <span className="lc-plan-feature-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={WA_PROPOSTA} target="_blank" rel="noopener noreferrer" className="lc-plan-cta">
                  Solicitar proposta →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section id="faq" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Perguntas frequentes</p>
            <h2 className="section-title mt-3">Dúvidas comuns antes de começar.</h2>
          </div>
          <div className="mt-10" style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "720px" }}>
            {faqItems.map((item) => (
              <div
                key={item.q}
                style={{
                  padding: "1.4rem 1.6rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <p style={{ fontWeight: 600, fontSize: "0.98rem", color: "rgba(240,237,232,0.95)", marginBottom: "0.5rem" }}>
                  {item.q}
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.6, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Em dúvida sobre qual plano faz sentido?</h2>
          <p className="lc-cta-sub">
            A Discovery gratuita de 30 minutos ajuda a estimar a complexidade do seu cenário.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <Link href="/discovery" className="btn-accent">
              Solicitar Discovery →
            </Link>
            <Link href="/contato" className="btn-outline">
              Ir para o contato
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}

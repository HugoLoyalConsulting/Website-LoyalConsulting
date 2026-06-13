import type { Metadata } from "next";
import Link from "next/link";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_PROPOSTA } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Planos",
  description:
    "BASIC, PRO e PREMIUM: o investimento acompanha a complexidade do projeto. Dashboards automatizados a partir de R$ 2.000.",
  path: "/planos",
});

const plans = [
  {
    tier: "BASIC",
    price: "R$ 2.000+",
    desc: "Para quem precisa automatizar uma extração, organizar uma base ou dar os primeiros passos em dados.",
    features: [
      "Pipeline ou automação de extração",
      "Até 2 fontes de dados",
      "Indicadores essenciais",
      "Entrega prática e objetiva",
      "Treinamento inicial",
    ],
    highlight: false,
  },
  {
    tier: "PRO",
    price: "R$ 5.000+",
    desc: "Para áreas que precisam integrar diferentes fontes e ter um painel completo para acompanhar resultados.",
    features: [
      "Múltiplas fontes integradas",
      "Modelagem e relacionamentos de dados",
      "Dashboard em Power BI, Tableau ou Looker",
      "Indicadores e regras de negócio",
      "Treinamento da equipe",
    ],
    highlight: true,
  },
  {
    tier: "PREMIUM",
    price: "R$ 10.000+",
    desc: "Para operações mais complexas, com automações robustas, múltiplos painéis e atualizações recorrentes.",
    features: [
      "Pipelines e integrações avançadas",
      "Diversas fontes e sistemas",
      "Múltiplos dashboards",
      "Atualizações automatizadas",
      "Mentoria e treinamentos ampliados",
    ],
    highlight: false,
  },
];

const faqItems = [
  {
    q: "Nossos dados estão numa bagunça. Dá para começar assim mesmo?",
    a: "Sim — e esse é o estado mais comum. Dados espalhados por planilhas, sistemas sem integração e relatórios que não batem são a situação de entrada da maioria dos projetos. A Discovery mapeia o que existe e define um ponto de partida realista, sem exigir que tudo já esteja organizado.",
  },
  {
    q: "Como sei qual plano faz sentido para o meu caso?",
    a: "A Discovery gratuita de 30 minutos existe para isso. Ao fim da conversa, você terá clareza sobre a complexidade do seu cenário e qual faixa de investimento faz mais sentido — antes de qualquer compromisso.",
  },
  {
    q: "Meu time vai conseguir usar o dashboard no dia a dia?",
    a: "Depende de como for construído. Dashboards que ninguém usa quase sempre foram feitos sem envolver quem vai usar. No nosso processo, a validação com o time e o treinamento fazem parte da entrega — não são opcionais.",
  },
  {
    q: "Posso começar com um escopo menor e expandir depois?",
    a: "Sim — e geralmente é a abordagem mais inteligente. Começar com um painel focado, validar com o time e expandir a partir do que funciona gera mais resultado do que tentar resolver tudo de uma vez em um projeto longo.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <StickyTopNav />

      {/* ── HEADER ──────────────────────────────────────────── */}
      <section className="lc-page-header mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero">
          <div>
            <p className="section-eyebrow reveal-up">Planos</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}>
              O investimento acompanha<br />
              a complexidade do projeto
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
                  Solicitar proposta
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
            <h2 className="section-title mt-3">Dúvidas comuns antes de começar</h2>
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
              Solicitar Discovery
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

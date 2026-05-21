import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { MarqueeBand } from "@/components/MarqueeBand";
import { HeroCarouselAuto } from "@/components/HeroCarouselAuto";
import { StickyTopNav, WhatsAppIcon, WHATSAPP_URL } from "@/components/StickyTopNav";

const dores = [
  "planilhas descentralizadas",
  "relatórios manuais",
  "KPIs conflitantes",
  "decisões lentas",
  "múltiplas versões da verdade",
  "dados difíceis de consolidar",
  "reuniões improdutivas discutindo números",
  "retrabalho operacional",
  "baixa previsibilidade",
  "falta de visibilidade ponta-a-ponta",
];

const consequencias = [
  "equipes desperdiçam horas consolidando dados",
  "gestores tomam decisões com baixa confiança",
  "gargalos permanecem invisíveis",
  "oportunidades deixam de ser identificadas",
];

const howSteps = [
  {
    num: "01",
    title: "Centralizamos fontes de dados",
    body: "Integramos Excel, Google Sheets, ERPs, APIs, bancos SQL, SharePoint, CRMs, sistemas internos e plataformas operacionais — tudo em um fluxo analítico unificado.",
    tags: ["Excel", "Google Sheets", "ERP", "APIs", "SQL", "SharePoint", "CRM"],
  },
  {
    num: "02",
    title: "Estruturamos uma camada confiável de dados",
    body: "Modelamos indicadores, métricas e regras de negócio para garantir consistência, governança, rastreabilidade e confiança operacional.",
    tags: ["Consistência", "Governança", "Rastreabilidade", "Confiança"],
  },
  {
    num: "03",
    title: "Transformamos dados em decisões",
    body: "Criamos dashboards modernos, automações e visões executivas que permitem agir mais rápido, identificar gargalos, reduzir desperdícios e aumentar previsibilidade operacional.",
    tags: ["Dashboards", "Automações", "KPIs críticos", "Previsibilidade"],
  },
];

const benefits = [
  "visão executiva centralizada e confiável",
  "dados atualizados automaticamente",
  "elimina retrabalho de consolidação",
  "indicadores padronizados em toda a empresa",
  "dashboards interativos e navegáveis",
  "análises disponíveis em tempo real",
  "alertas automáticos por área",
  "alinhamento entre times com a mesma fonte de verdade",
  "mais velocidade e confiança nas decisões",
];

const benefitResults = [
  "horas de consolidação manual eliminadas por semana",
  "decisões tomadas com dados confiáveis e auditáveis",
  "gargalos identificados antes de virar problema",
  "operação orientada por métricas, não por intuição",
];

const plans = [
  {
    tier: "BASIC",
    desc: "Para quem precisa sair do zero e ter visibilidade inicial estruturada, sem grande complexidade.",
    features: [
      "Até 2 fontes de dados conectadas",
      "Até 5 gráficos / visualizações",
      "1 dashboard principal",
      "Atualização agendada",
      "Entrega em até 2 semanas",
    ],
    highlight: false,
  },
  {
    tier: "PRO",
    desc: "Para empresas com múltiplas fontes e necessidade de automação ponta-a-ponta de relatórios e fluxos.",
    features: [
      "Até 5 fontes de dados integradas",
      "Múltiplas abas e visões por área",
      "Automação ponta-a-ponta de relatórios",
      "Alertas e notificações automáticas",
      "Entrega em até 3 semanas",
    ],
    highlight: true,
  },
  {
    tier: "PREMIUM",
    desc: "Para operações complexas que exigem profundidade analítica, múltiplas áreas e arquitetura de dados robusta.",
    features: [
      "Fontes de dados ilimitadas",
      "Múltiplas abas, áreas e domínios",
      "Analytics avançado e modelagem",
      "Automações e fluxos complexos",
      "Governança e rastreabilidade",
      "Suporte contínuo e evoluções",
    ],
    highlight: false,
  },
];

export default function HomePage() {
  return (
    <main
      id="topo"
      className="ts-page-shell relative w-full max-w-full overflow-x-hidden"
      style={{
        background: "#07070e",
        color: "#f0ede8",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.8rem)",
      }}
    >
      {/* ── NAV ─────────────────────────────────────────────── */}
      <StickyTopNav />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero">
          <div>
            <p className="section-eyebrow reveal-up">Consultoria em Business Intelligence</p>
            <h1 className="ts-hero-h1 reveal-up mt-3">
              Centralize dados e transforme<br />
              trabalhos manuais em<br />
              visões automatizadas e<br />
              decisões confiáveis.
            </h1>
            <p className="ts-hero-sub reveal-up">
              Centralizamos planilhas, ERPs, CRMs, APIs, SharePoint, bancos SQL e sistemas operacionais
              em uma camada única de inteligência visual e automação — reduzindo retrabalho, acelerando
              análises e aumentando a previsibilidade da operação.
            </p>
            <p className="ts-hero-dash reveal-up">
              Criamos dashboards executivos, automações e fluxos analíticos modernos para empresas que
              precisam parar de operar no escuro.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href="#contato" className="btn-accent">
                Solicitar diagnóstico de maturidade →
              </a>
            </div>
          </div>
          <div className="ts-hero-visual" style={{ paddingBottom: "2rem" }}>
            <HeroCarouselAuto />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <MarqueeBand />

      {/* ── DORES ───────────────────────────────────────────── */}
      <section id="problema" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow section-eyebrow--red">O problema</p>
            <h2 className="section-title mt-3">Sua operação está perdendo tempo com</h2>
          </div>
          <div className="lc-dores-grid mt-12">
            <ul className="lc-dores-list">
              {dores.map((d) => (
                <li key={d}>
                  <span className="lc-dores-bullet">×</span>
                  {d}
                </li>
              ))}
            </ul>
            <div className="lc-dores-consequences">
              <p className="lc-dores-while-title">Enquanto isso acontece:</p>
              <ul className="lc-consequences-list">
                {consequencias.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARALLAX BREAK ──────────────────────────────────── */}
      <div
        className="parallax-break"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/executivo-painel-wall.jpg')` }}
      >
        <div className="parallax-break__inner">
          <p className="parallax-quote">
            &ldquo;Vimos de perto como áreas inteiras em empresas bilionárias operam
            às cegas&nbsp;— mesmo tendo abundância de dados.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · 10 anos de operações em dados</span>
        </div>
      </div>

      {/* ── COMO FUNCIONA ───────────────────────────────────── */}
      <section id="solucao" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Como funciona</p>
            <h2 className="section-title mt-3">Do dado ao painel executivo — em 3 etapas.</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {howSteps.map((step) => (
              <div key={step.num} className="lc-how-step">
                <span className="lc-how-num">{step.num}</span>
                <h3 className="lc-how-title">{step.title}</h3>
                <p className="lc-how-body">{step.body}</p>
                <div className="lc-how-tags">
                  {step.tags.map((tag) => (
                    <span key={tag} className="lc-how-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O QUE VOCÊ PASSA A TER ──────────────────────────── */}
      <section className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">O que você passa a ter</p>
            <h2 className="section-title mt-3">Tudo que uma operação orientada a dados precisa.</h2>
          </div>
          <div className="lc-dores-grid mt-12">
            <ul className="lc-dores-list">
              {benefits.map((b) => (
                <li key={b}>
                  <span className="lc-benefit-check">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="lc-dores-consequences">
              <p className="lc-dores-while-title">O resultado:</p>
              <ul className="lc-consequences-list">
                {benefitResults.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANOS ──────────────────────────────────────────── */}
      <section id="planos" className="lc-plans-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Planos</p>
            <h2 className="section-title mt-3">Escolha a cobertura ideal para sua operação.</h2>
          </div>
          <div className="lc-plans-grid mt-12">
            {plans.map((plan) => (
              <div
                key={plan.tier}
                className={`lc-plan-card${plan.highlight ? " lc-plan-card--highlight" : ""}`}
              >
                <span className="lc-plan-tier">{plan.tier}</span>
                <p className="lc-plan-desc">{plan.desc}</p>
                <ul className="lc-plan-features">
                  {plan.features.map((f) => (
                    <li key={f} className="lc-plan-feature-item">
                      <span className="lc-plan-feature-check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contato" className="lc-plan-cta">Solicitar proposta →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Pronto para parar de operar no escuro?</h2>
          <p className="lc-cta-sub">Diagnóstico de maturidade em dados · gratuito · 30 minutos · Sem compromisso.</p>
          <a href="#contato" className="btn-accent mt-8 inline-block">
            Solicitar diagnóstico de maturidade →
          </a>
        </div>
      </div>

      {/* ── LEAD FORM ────────────────────────────────────────── */}
      <LeadCaptureForm />

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="mx-auto mt-16 w-full max-w-7xl px-5 pb-12 sm:px-8">
        <div className="section-divider" />
        <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(240,237,232,0.28)",
            }}
          >
            © {new Date().getFullYear()} Loyal Consulting
          </p>
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(240,237,232,0.28)",
            }}
          >
            Dados · Operação · Crescimento
          </p>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="ts-float-wa"
        aria-label="Falar no WhatsApp"
        title="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </main>
  );
}
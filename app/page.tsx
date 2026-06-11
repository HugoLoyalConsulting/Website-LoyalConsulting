import Image from "next/image";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { MarqueeBand } from "@/components/MarqueeBand";
import { HeroCarouselScene } from "@/components/HeroCarouselScene";
import { StickyTopNav, WhatsAppIcon, WHATSAPP_URL } from "@/components/StickyTopNav";

const DIAGNOSTICO_URL = "https://hugoloyalconsulting.github.io/diagnostico-maturidade-dados/";

// ── Seção "Dois caminhos" ──────────────────────────────────────────────────
const path1Features = [
  "Demora para fechar os números do mês",
  "Cada área apresenta informações diferentes",
  "Não sabe quais indicadores deveria acompanhar",
  "Sente que existe retrabalho, mas não consegue medir",
  "Quer entender o nível atual de maturidade da empresa em relação aos dados",
];

const path1Results = [
  "Uma análise da situação atual",
  "Identificação de gargalos comuns",
  "Orientações práticas sobre oportunidades de melhoria",
  "Clareza sobre os próximos passos",
];

const path2Features = [
  "Já sabe quais áreas precisam de visibilidade",
  "Quer estimar prazo e complexidade do projeto",
  "Precisa entender quais dados serão necessários",
  "Deseja conversar sobre possíveis soluções",
  "Está avaliando a implantação de dashboards",
];

const path2Results = [
  "Um mapeamento inicial do cenário",
  "Uma visão preliminar da complexidade do projeto",
  "Identificação das fontes de dados envolvidas",
  "Orientações para estruturar a iniciativa",
];

// ── Como funciona ──────────────────────────────────────────────────────────
const howSteps = [
  {
    num: "01",
    title: "Diagnóstico",
    body: "Entendemos o cenário atual: como os dados estão organizados, onde estão os maiores gargalos e o que precisa mudar para a operação ganhar clareza.",
    tags: ["Excel", "Google Sheets", "ERP", "APIs", "SQL", "SharePoint", "CRM"],
    img: "laptop-analytics-aberto.jpg",
    gallery: [
      "dashboard-powerbi-vendas.png",
      "dashboard-comunicacao-interna.png",
    ],
  },
  {
    num: "02",
    title: "Priorização",
    body: "Identificamos quais informações realmente importam para a tomada de decisão — e deixamos de lado o que não traz resultado imediato.",
    tags: ["Consistência", "Governança", "Rastreabilidade", "Confiança"],
    img: "analistas-revisando-dashboard.jpg",
    gallery: [
      "documentos-gestao-projetos.jpg",
      "relatorio-financeiro-impresso.jpg",
    ],
  },
  {
    num: "03",
    title: "Desenvolvimento e Entrega",
    body: "Criamos dashboards adequados à realidade do seu negócio, apresentamos a solução e acompanhamos a utilização para garantir que os dados virem decisão de verdade.",
    tags: ["Dashboards", "Automações", "KPIs críticos", "Previsibilidade"],
    img: "apresentacao-dashboard-apontando.jpg",
    gallery: [
      "dashboard-ui-kpis.webp",
      "dashboard-monitor-colorido.jpg",
    ],
  },
];

// ── Exemplos de projetos ───────────────────────────────────────────────────
const exampleProjects = [
  {
    area: "Comercial",
    items: ["Receita", "Conversão", "Performance da equipe", "Ticket médio"],
  },
  {
    area: "Financeiro",
    items: ["Fluxo de caixa", "Receitas e despesas", "Margens", "Inadimplência"],
  },
  {
    area: "Operacional",
    items: ["Produtividade", "Tempos médios", "Gargalos", "Acompanhamento de metas"],
  },
  {
    area: "Executivo",
    items: ["Indicadores estratégicos", "Consolidação entre áreas", "Tendências e comparativos"],
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "Preciso ter tudo organizado antes?",
    a: "Não. Muitas empresas iniciam justamente porque sentem que os dados estão espalhados.",
  },
  {
    q: "Preciso entender de Power BI?",
    a: "Não. Nosso foco é ajudar você a responder perguntas importantes para o negócio.",
  },
  {
    q: "Quanto tempo demora?",
    a: "Depende da complexidade do projeto. Casos mais simples podem levar poucas semanas.",
  },
  {
    q: "Sou obrigado a contratar algo após os diagnósticos?",
    a: "Não. O objetivo é gerar clareza para que você tome a melhor decisão para sua realidade.",
  },
];

// ── Planos (mantidos sem alteração) ───────────────────────────────────────
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
        background: "var(--color-bg)",
        color: "var(--color-text)",
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
              Menos planilhas e abas.<br />
              Mais clareza para<br />
              tomar decisões.
            </h1>
            <p className="ts-hero-sub reveal-up">
              Transformamos dados espalhados em diversas fontes em dashboards simples e úteis
              para que você acompanhe os números mais importantes da sua empresa sem depender
              de relatórios manuais.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href="#caminhos" className="btn-accent">
                Fazer diagnóstico gratuito →
              </a>
              <a href="#solucao" className="btn-outline">
                Ver como funciona
              </a>
            </div>
          </div>
          <div className="ts-hero-visual" style={{ paddingBottom: "2rem" }}>
            <HeroCarouselScene />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <MarqueeBand />

      {/* ── DOIS CAMINHOS ───────────────────────────────────── */}
      <section id="caminhos" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Antes de continuar</p>
            <h2 className="section-title mt-3">Mas, antes, existe uma pergunta importante:</h2>
            <p className="section-copy mt-4">
              <strong>Você já sabe exatamente o que precisa ou ainda está tentando entender onde estão os principais problemas?</strong>
            </p>
          </div>

          <div className="lc-dores-grid mt-12">
            {/* Opção 1 */}
            <div>
              <p className="lc-dores-while-title">OPÇÃO 1</p>
              <h3 className="section-title mt-2" style={{ fontSize: "1.35rem" }}>
                Ainda não sei por onde começar.
              </h3>
              <p className="section-copy mt-3">
                Tenho muitos relatórios, várias planilhas e a sensação de que os dados poderiam
                ajudar mais, mas ainda não sei exatamente qual é o problema.
              </p>
              <p className="lc-dores-while-title mt-6">Recomendado para você se:</p>
              <ul className="lc-dores-list mt-3">
                {path1Features.map((f) => (
                  <li key={f}>
                    <span className="lc-dores-bullet">×</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="lc-dores-next-block mt-6">
                <p className="lc-dores-while-title">O que você recebe:</p>
                <ul className="lc-consequences-list mt-3">
                  {path1Results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <a href={DIAGNOSTICO_URL} className="btn-accent" target="_blank" rel="noopener noreferrer">
                  Fazer Diagnóstico de Maturidade →
                </a>
                <p className="mt-3" style={{ fontSize: "0.82rem", color: "rgba(240,237,232,0.5)" }}>
                  Leva aproximadamente 5 minutos.
                </p>
              </div>
            </div>

            {/* Opção 2 */}
            <div className="lc-dores-consequences lc-dores-consequences--impact">
              <p className="lc-dores-while-title lc-dores-while-title--impact">OPÇÃO 2</p>
              <h3 className="section-title mt-2" style={{ fontSize: "1.35rem" }}>
                Já quero entender como seria um dashboard para minha empresa.
              </h3>
              <p className="section-copy mt-3">
                Se você já percebeu que precisa organizar informações e consolidar indicadores,
                este é o melhor caminho.
              </p>
              <p className="lc-dores-while-title mt-6">Recomendado para você se:</p>
              <ul className="lc-consequences-list mt-3">
                {path2Features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="lc-dores-next-block mt-6">
                <p className="lc-dores-while-title lc-dores-while-title--warning">O que você recebe:</p>
                <ul className="lc-consequences-list lc-consequences-list--warning mt-3">
                  {path2Results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <a href="#contato" className="btn-accent">
                  Iniciar Discovery →
                </a>
                <p className="mt-3" style={{ fontSize: "0.82rem", color: "rgba(240,237,232,0.5)" }}>
                  Leva aproximadamente 7 a 10 minutos.
                </p>
              </div>
            </div>
          </div>

          {/* Não tem certeza? */}
          <div className="mt-14 mb-4" style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "2.5rem",
          }}>
            <p className="section-eyebrow section-eyebrow--red">Não tem certeza de qual escolher?</p>
            <p className="section-copy mt-3">Tudo bem.</p>
            <div className="lc-dores-grid mt-8">
              <div>
                <p className="lc-dores-while-title">Escolha o Diagnóstico de Maturidade se você pensa algo como:</p>
                <ul className="lc-dores-list mt-4">
                  <li>
                    <span className="lc-dores-bullet">→</span>
                    &ldquo;Sei que existe muito retrabalho, mas não sei exatamente o que precisa mudar.&rdquo;
                  </li>
                  <li>
                    <span className="lc-dores-bullet">→</span>
                    &ldquo;Não faço ideia se minha empresa está pronta para isso.&rdquo;
                  </li>
                  <li>
                    <span className="lc-dores-bullet">→</span>
                    &ldquo;Quero entender onde estão os maiores problemas.&rdquo;
                  </li>
                </ul>
              </div>
              <div className="lc-dores-consequences">
                <p className="lc-dores-while-title">Escolha o Discovery se você pensa algo como:</p>
                <ul className="lc-consequences-list mt-4">
                  <li>&ldquo;Preciso enxergar melhor os resultados.&rdquo;</li>
                  <li>&ldquo;Quero consolidar informações em um dashboard.&rdquo;</li>
                  <li>&ldquo;Já estou avaliando implementar uma solução.&rdquo;</li>
                </ul>
              </div>
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

      {/* ── COMO FUNCIONA O PROCESSO ────────────────────────── */}
      <section id="solucao" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Como funciona o processo</p>
            <h2 className="section-title mt-3">Da conversa inicial ao dashboard no ar.</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {howSteps.map((step) => (
              <div key={step.num} className="lc-how-step">
                <figure className="lc-how-step-img">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/${step.img}`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover", filter: "brightness(0.8) saturate(0.7)" }}
                  />
                </figure>
                <span className="lc-how-num">{step.num}</span>
                <h3 className="lc-how-title">{step.title}</h3>
                <p className="lc-how-body">{step.body}</p>
                <div className="lc-how-tags">
                  {step.tags.map((tag) => (
                    <span key={tag} className="lc-how-tag">{tag}</span>
                  ))}
                </div>
                <div className="lc-how-gallery" aria-label={`Imagens de apoio da etapa ${step.num}`}>
                  {step.gallery.map((imageName) => (
                    <figure key={imageName} className="lc-how-gallery-item">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/${imageName}`}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 48vw, 16vw"
                        style={{ objectFit: "cover", filter: "brightness(0.85) saturate(0.9)" }}
                      />
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXEMPLOS DE PROJETOS ────────────────────────────── */}
      <section className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Exemplos de projetos</p>
            <h2 className="section-title mt-3">Áreas que já ganharam mais clareza com a gente.</h2>
          </div>
          <div className="lc-benefits-grid mt-12">
            {exampleProjects.map((proj) => (
              <div key={proj.area} className="lc-benefit-item" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
                <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "rgba(240,237,232,0.95)", letterSpacing: "0.04em" }}>
                  {proj.area}
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  {proj.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.86rem", color: "rgba(240,237,232,0.65)" }}>
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

      {/* ── PARALLAX BREAK 2 ────────────────────────────────── */}
      <div
        className="parallax-break"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/analista-bi-monitores-duplos.jpg')` }}
      >
        <div className="parallax-break__inner">
          <p className="parallax-quote">
            &ldquo;Dados organizados não são luxo&nbsp;— são o único caminho
            para decisões rápidas e confiáveis em escala.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Business Intelligence</span>
        </div>
      </div>

      {/* ── PLANOS ──────────────────────────────────────────── */}
      <section id="planos" className="lc-plans-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Planos</p>
            <h2 className="section-title mt-3">...não é sobre pacote. É sobre maturidade de dados.</h2>
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

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="lc-benefits-section">
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

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">O que fazer agora?</h2>
          <p className="lc-cta-sub">Escolha o caminho que faz mais sentido para o momento da sua empresa.</p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={DIAGNOSTICO_URL} className="btn-accent" target="_blank" rel="noopener noreferrer">
              Fazer Diagnóstico de Maturidade →
            </a>
            <a href="#contato" className="btn-outline">
              Iniciar Discovery
            </a>
          </div>
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

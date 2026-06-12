import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroCarouselScene } from "@/components/HeroCarouselScene";
import { WhatsAppIcon, WHATSAPP_URL } from "@/components/StickyTopNav";

// Agendamento direto pelo WhatsApp (sem Calendly por enquanto)
const WA_DISCOVERY =
  "https://wa.me/5511954824181?text=" +
  encodeURIComponent("Olá! Quero agendar minha Discovery gratuita de 30 minutos.");

export const metadata: Metadata = {
  title: "Discovery gratuita de 30 minutos | Loyal Consulting",
  description:
    "Agende uma Discovery gratuita de 30 minutos e entenda quais indicadores priorizar, quais dados utilizar e qual seria o caminho mais eficiente para automatizar sua visão do negócio.",
};

// ── Você se identifica? ────────────────────────────────────────────────────
const painPoints = [
  "Você abre várias planilhas todos os dias para entender o que está acontecendo na empresa.",
  "Cada área apresenta números diferentes para responder à mesma pergunta.",
  "Os relatórios demoram tanto para ficar prontos que as decisões já perderam o timing.",
  "Sua equipe gasta horas consolidando informações manualmente.",
  "Você sabe que precisa de dashboards, mas não sabe por onde começar.",
  "Já tentou implementar BI antes, mas o projeto ficou complexo demais ou não foi utilizado.",
];

// ── O que acontece durante a Discovery ─────────────────────────────────────
const discoveryBlocks = [
  {
    num: "01",
    title: "Quais respostas você precisa obter sobre o negócio",
    intro: "Exemplos:",
    items: [
      "Estamos batendo as metas?",
      "Onde estão os gargalos?",
      "Quais clientes, produtos ou unidades precisam de atenção?",
    ],
    img: "laptop-analytics-aberto.jpg",
  },
  {
    num: "02",
    title: "Como essas respostas são obtidas hoje",
    intro: "Vamos mapear:",
    items: [
      "Planilhas",
      "Sistemas utilizados",
      "Relatórios existentes",
      "Processos manuais",
    ],
    img: "documentos-gestao-projetos.jpg",
  },
  {
    num: "03",
    title: "Qual seria a primeira entrega com maior impacto",
    intro: "Ao final, você terá clareza sobre:",
    items: [
      "Prioridades",
      "Possíveis ganhos",
      "Próximos passos mais adequados ao seu cenário",
    ],
    img: "dashboard-powerbi-vendas.png",
  },
];

// ── Resultado esperado ─────────────────────────────────────────────────────
const expectedOutcomes = [
  "Quais indicadores realmente importam",
  "Quais processos estão consumindo tempo desnecessariamente",
  "Quais dados já existem dentro da empresa",
  "Qual seria o melhor ponto de partida",
  "Se faz sentido avançar com um projeto de BI ou automação",
];

// ── Para quem é ────────────────────────────────────────────────────────────
const goodFit = [
  "Gerencia equipes ou operações",
  "Toma decisões baseadas em relatórios",
  "Utiliza Excel com frequência para acompanhar resultados",
  "Possui informações distribuídas entre diferentes sistemas",
  "Busca mais agilidade e confiança na análise de dados",
];

const badFit = [
  "Você ainda não acompanha nenhum indicador do negócio",
  "Não existe abertura para mudanças nos processos atuais",
  "O objetivo é apenas criar gráficos sem uma necessidade clara de negócio",
];

// ── Como funciona ──────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Agendamento",
    body: "Escolha o melhor horário para conversarmos.",
    img: "ipad-google-analytics.jpg",
  },
  {
    num: "02",
    title: "Discovery",
    body: "Uma reunião de aproximadamente 30 minutos para entender o cenário atual e os objetivos do negócio.",
    img: "analistas-revisando-dashboard.jpg",
  },
  {
    num: "03",
    title: "Próximos passos",
    body: "Caso exista aderência, apresentaremos uma proposta adequada à realidade da sua empresa.",
    img: "apresentacao-dashboard-apontando.jpg",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "A Discovery tem custo?",
    a: "Não. O objetivo é entender o contexto atual e verificar se conseguimos gerar valor para o seu negócio.",
  },
  {
    q: "Preciso ter Power BI?",
    a: "Não. A reunião é focada no problema e nas necessidades da empresa, independentemente das ferramentas utilizadas hoje.",
  },
  {
    q: "Preciso saber exatamente o que quero?",
    a: "Também não. Muitas empresas chegam apenas com a percepção de que “o processo atual não é sustentável”. A Discovery existe justamente para trazer clareza.",
  },
  {
    q: "Vocês trabalham apenas com dashboards?",
    a: "Não necessariamente. Dependendo do cenário, também podem ser avaliadas automações de relatórios, consolidação de bases, integrações simples e outras iniciativas relacionadas à utilização prática dos dados.",
  },
];

export default function DiscoveryPage() {
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
      {/* ── NAV (versão enxuta da LP) ───────────────────────── */}
      <header className="ts-header-shell">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <nav className="ts-nav">
            <Link className="ts-nav-logo" href="/" aria-label="Voltar ao site da Loyal Consulting">
              <span className="ts-nav-logo-icon">LC</span>
              Loyal Consulting
            </Link>
            <div className="ts-nav-right">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ts-nav-wa"
                aria-label="Falar no WhatsApp"
                title="Falar no WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={WA_DISCOVERY}
                target="_blank"
                rel="noopener noreferrer"
                className="ts-nav-action"
              >
                Agendar Discovery →
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero">
          <div>
            <p className="section-eyebrow reveal-up">Discovery gratuita · 30 minutos</p>
            <h1 className="ts-hero-h1 reveal-up mt-3">
              Pare de abrir dezenas<br />
              de planilhas para descobrir<br />
              se sua empresa está indo bem.
            </h1>
            <p className="ts-hero-sub reveal-up">
              Descubra quais informações realmente importam para o seu negócio — e como
              transformá-las em dashboards automatizados. Se você depende de Excel, relatórios
              exportados ou informações espalhadas para tomar decisões importantes, esta
              conversa foi feita para você.
            </p>
            <p className="ts-hero-copy reveal-up">
              <strong style={{ color: "rgba(240,237,232,0.9)" }}>
                Agende uma Discovery gratuita de 30 minutos
              </strong>{" "}
              e entenda quais indicadores priorizar, quais dados utilizar e qual seria o
              caminho mais eficiente para automatizar sua visão do negócio.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_DISCOVERY} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Quero agendar minha Discovery →
              </a>
              <a href="#discovery" className="btn-outline">
                O que acontece na Discovery
              </a>
            </div>
          </div>
          <div className="ts-hero-visual" style={{ paddingBottom: "2rem" }}>
            <HeroCarouselScene />
          </div>
        </div>
      </section>

      {/* ── VOCÊ SE IDENTIFICA? ─────────────────────────────── */}
      <section id="identifica" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Você se identifica?</p>
            <h2 className="section-title mt-3">Você se identifica com alguma destas situações?</h2>
          </div>

          <div className="lc-dores-grid mt-12">
            <div>
              <ul className="lc-dores-list">
                {painPoints.map((pain) => (
                  <li key={pain}>
                    <span className="lc-dores-bullet">×</span>
                    {pain}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <p className="lc-dores-while-title lc-dores-while-title--cool">
                Se alguma dessas situações parece familiar...
              </p>
              <h3 className="section-title" style={{ fontSize: "1.2rem" }}>
                ...provavelmente existe uma oportunidade de simplificar sua operação.
              </h3>
              <p className="section-copy mt-4">
                E de aumentar a confiança nas decisões — sem depender de consolidações
                manuais e relatórios atrasados.
              </p>
              <div className="mt-8">
                <a href={WA_DISCOVERY} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Quero agendar minha Discovery →
                </a>
                <p className="mt-3" style={{ fontSize: "0.82rem", color: "rgba(240,237,232,0.5)" }}>
                  Sem custo · 30 minutos · Sem compromisso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARALLAX BREAK ──────────────────────────────────── */}
      <div
        className="parallax-break"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/relatorios-impressos-mesa.jpg')` }}
      >
        <div className="parallax-break__inner">
          <p className="parallax-quote">
            &ldquo;Esta não é uma demonstração comercial tradicional. É uma conversa
            estruturada para entender o seu cenário.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Discovery</span>
        </div>
      </div>

      {/* ── O QUE ACONTECE DURANTE A DISCOVERY ──────────────── */}
      <section id="discovery" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">O que acontece durante a Discovery</p>
            <h2 className="section-title mt-3">Uma conversa estruturada para entender:</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {discoveryBlocks.map((block) => (
              <div key={block.num} className="lc-how-step">
                <figure className="lc-how-step-img">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/${block.img}`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover", filter: "brightness(0.8) saturate(0.7)" }}
                  />
                </figure>
                <span className="lc-how-num">{block.num}</span>
                <h3 className="lc-how-title">{block.title}.</h3>
                <p className="lc-how-body" style={{ flex: "none" }}>{block.intro}</p>
                <div className="lc-how-tags" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
                  {block.items.map((item) => (
                    <span key={item} style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", fontSize: "0.88rem", color: "rgba(240,237,232,0.7)", lineHeight: 1.5 }}>
                      <span style={{ color: "#4adedb", flexShrink: 0 }}>→</span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTADO ESPERADO ──────────────────────────────── */}
      <section id="resultado" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">O resultado esperado</p>
            <h2 className="section-title mt-3">Ao final da reunião, você terá mais clareza sobre:</h2>
          </div>
          <div className="lc-benefits-grid mt-12">
            {expectedOutcomes.map((item) => (
              <div key={item} className="lc-benefit-item">
                <span className="lc-benefit-check">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É ─────────────────────────────────────── */}
      <section id="para-quem" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Para quem é</p>
            <h2 className="section-title mt-3">Para quem esta Discovery é indicada?</h2>
          </div>

          <div className="lc-dores-grid mt-12">
            <div>
              <p className="lc-dores-while-title lc-dores-while-title--cool">Sim, se você:</p>
              <ul className="lc-consequences-list mt-3">
                {goodFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="lc-dores-consequences">
              <p className="lc-dores-while-title">Talvez não seja o momento se:</p>
              <ul className="lc-dores-list mt-3">
                {badFit.map((item) => (
                  <li key={item}>
                    <span className="lc-dores-bullet">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ───────────────────────────────────── */}
      <section id="como-funciona" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Como funciona</p>
            <h2 className="section-title mt-3">Três etapas. Sem fricção.</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {steps.map((step) => (
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
                  <span className="lc-how-tag">Sem custo</span>
                  <span className="lc-how-tag">30 minutos</span>
                </div>
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
            <h2 className="section-title mt-3">Dúvidas comuns antes de agendar.</h2>
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
          <h2 className="lc-cta-title">Talvez você não precise de mais uma planilha.</h2>
          <p className="lc-cta-sub">
            Talvez precise apenas das informações certas, organizadas da forma certa, para
            tomar decisões com mais confiança. Agende sua Discovery gratuita e descubra qual
            é o próximo passo mais inteligente para o seu cenário.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_DISCOVERY} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Agendar minha Discovery →
            </a>
            <Link href="/" className="btn-outline">
              Conhecer a Loyal Consulting
            </Link>
          </div>
        </div>
      </div>

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
              fontSize: "0.78rem",
              color: "rgba(240,237,232,0.38)",
            }}
          >
            Dashboards automatizados para gestores que precisam enxergar além das planilhas.
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

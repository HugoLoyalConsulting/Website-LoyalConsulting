import Image from "next/image";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { MarqueeBand } from "@/components/MarqueeBand";
import { HeroBackgroundSlideshow } from "@/components/HeroBackgroundSlideshow";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_DIAGNOSTICO } from "@/lib/links";
import { WA_CALCULADORA } from "@/lib/links";

// ── Hoje × Depois ─────────────────────────────────────────────────────────
const hoje = [
  "Planilhas espalhadas por e-mail e WhatsApp",
  "Relatórios feitos manualmente toda semana",
  "Cada área com seu próprio número",
  "Copiar e colar para montar apresentações",
  "Reuniões discutindo qual versão está certa",
];

const depois = [
  "Dados centralizados em uma fonte única",
  "Atualizações automáticas, sem retrabalho",
  "Indicadores padronizados entre todas as áreas",
  "Dashboards em tempo real",
  "Reuniões focadas em decisões",
];

// ── Como funciona ──────────────────────────────────────────────────────────
const processSteps = [
  {
    num: "01",
    title: "Diagnóstico",
    body: "Mapeamos suas fontes de dados, indicadores atuais e gargalos para entender o ponto de partida real.",
  },
  {
    num: "02",
    title: "Integração dos dados",
    body: "Conectamos planilhas, ERPs, CRMs e APIs em uma base única e confiável, acessível por todas as áreas.",
  },
  {
    num: "03",
    title: "Automação",
    body: "Eliminamos o retrabalho manual substituindo processos repetitivos por fluxos automáticos de atualização.",
  },
  {
    num: "04",
    title: "Dashboards",
    body: "Criamos painéis com os indicadores que realmente importam: claros, diretos e fáceis de usar.",
  },
  {
    num: "05",
    title: "Acompanhamento",
    body: "Suporte contínuo para ajustes, treinamento do time e expansão dos indicadores conforme o negócio cresce.",
  },
];

// ── Problemas que resolvemos ───────────────────────────────────────────────
const problemas = [
  "Os números não batem entre as áreas",
  "Cada departamento tem sua própria planilha",
  "Os relatórios sempre chegam tarde",
  "Você não confia totalmente nos indicadores",
  "Sua equipe perde horas consolidando dados",
  "Você não sabe com certeza qual número está certo",
];

// ── Prova e credibilidade ──────────────────────────────────────────────────
const stats = [
  {
    source: "McKinsey Global Institute",
    title: "The Age of Analytics: Competing in a Data-Driven World",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-age-of-analytics-competing-in-a-data-driven-world",
    text: "47% dos executivos globais afirmam que dados e analytics mudaram de forma significativa ou fundamental a dinâmica competitiva de seus setores, enquanto os retardatários enfrentam desvantagem crescente.",
  },
  {
    source: "Deloitte Insights",
    title: "Insight-Driven Organisations",
    url: "https://www.deloitte.com/uk/en/services/consulting/services/insight-driven-organisations.html",
    text: "Empresas orientadas por dados tomam decisões mais rápidas, cometem menos erros operacionais e constroem vantagem competitiva sustentável frente a concorrentes que ainda dependem de preparação manual.",
  },
  {
    source: "PwC",
    title: "ERP Data Modernization",
    url: "https://www.pwc.com/us/en/services/consulting/business-transformation/data-analytics/erp-data-modernization.html",
    text: "A modernização dos dados libera valor preso em sistemas fragmentados, transformando informações dispersas em ativos estratégicos para previsões, relatórios e decisões com mais confiança.",
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
      <StickyTopNav />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "min(88vh, 820px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <HeroBackgroundSlideshow />
        <div
          className="mx-auto w-full max-w-7xl px-5 sm:px-8"
          style={{ position: "relative", zIndex: 1, paddingTop: "8rem", paddingBottom: "6rem" }}
        >
          <div style={{ maxWidth: "880px" }}>
            <p className="section-eyebrow reveal-up">Loyal Consulting · Business Intelligence</p>
            <h1 className="ts-hero-h1 reveal-up mt-3">
              Você está cansado de cobrar decisões baseadas em dados, mas seu time ainda vive de planilha?
            </h1>
            <p className="ts-hero-sub reveal-up">
              Sua equipe deveria analisar dados, não preparar dados. Conectamos suas fontes,
              automatizamos relatórios e entregamos dashboards com os números certos, no
              lugar certo, na hora certa.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Agendar Discovery
              </a>
              <Link href="/calculadora-bi" className="btn-outline">
                Calcular meu custo de dados →
              </Link>
            </div>
            <p className="reveal-up" style={{ marginTop: "1rem", fontSize: "0.8rem", color: "rgba(240,237,232,0.45)" }}>
              Sem apresentação de produto · Sem compromisso · 30 minutos
            </p>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <MarqueeBand />

      {/* ── TRANSFORMAÇÃO: HOJE × DEPOIS ────────────────────── */}
      <section id="transformacao" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">A transformação</p>
            <h2 className="section-title mt-3">
              Transformamos dados espalhados em uma única fonte confiável para tomada de decisão
            </h2>
          </div>
          <div className="lc-dores-grid mt-12">
            <div className="lc-dores-consequences">
              <p className="lc-dores-while-title" style={{ marginBottom: "1rem" }}>Hoje na sua empresa</p>
              <ul className="lc-dores-list mt-3">
                {hoje.map((item) => (
                  <li key={item}>
                    <span className="lc-dores-bullet">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <p className="lc-dores-while-title lc-dores-while-title--cool" style={{ marginBottom: "1rem" }}>
                Depois da Loyal
              </p>
              <ul className="lc-consequences-list mt-3">
                {depois.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p
            style={{
              marginTop: "2.5rem",
              textAlign: "center",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(240,237,232,0.32)",
            }}
          >
            Por meio de: Integração de Dados · Automação · Business Intelligence
          </p>
        </div>
      </section>

      {/* ── DOIS CAMINHOS ───────────────────────────────────── */}
      <section id="diagnostico" className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <p className="section-eyebrow" style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              Por onde começar?
            </p>
            <h2 className="lc-cta-title" style={{ maxWidth: "640px", margin: "0 auto" }}>
              Escolha o ponto de entrada certo para o seu momento
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {/* Card 1 — Discovery */}
            <div className="lc-path-card lc-path-card--discovery">
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2ee6a6", margin: 0 }}>
                Conversa estratégica
              </p>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text, #f0ede8)", lineHeight: 1.3, margin: 0 }}>
                Discovery Gratuita
              </h3>
              <p style={{ fontSize: "0.9rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                30 minutos para mapear seus gargalos de dados, entender o que está travando as decisões e
                receber um plano inicial concreto. Sem apresentação de produto. Sem compromisso.
              </p>
              <p style={{ fontSize: "0.8rem", color: "rgba(240,237,232,0.38)", margin: 0 }}>
                Ideal para · quem não sabe por onde começar
              </p>
              <a
                href={WA_DIAGNOSTICO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
                style={{ marginTop: "0.5rem", textAlign: "center" }}
              >
                Agendar Discovery
              </a>
            </div>

            {/* Card 2 — Calculadora */}
            <div className="lc-path-card lc-path-card--teal">
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2ee6a6", margin: 0 }}>
                Autodiagnóstico
              </p>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text, #f0ede8)", lineHeight: 1.3, margin: 0 }}>
                Calculadora de Economias em BI
              </h3>
              <p style={{ fontSize: "0.9rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                Descubra quanto sua equipe gasta por ano com trabalho manual de dados. Preencha em
                menos de 3 minutos e saia com um PDF executivo pronto para apresentar à diretoria.
              </p>
              <p style={{ fontSize: "0.8rem", color: "rgba(240,237,232,0.38)", margin: 0 }}>
                Ideal para · quem precisa justificar um investimento em dados
              </p>
              <Link
                href="/calculadora-bi"
                className="btn-teal"
                style={{ marginTop: "0.5rem", textAlign: "center" }}
              >
                Calcular agora (grátis) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANTES × DEPOIS (VISUAL) ──────────────────────────── */}
      <section id="antes-depois" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Antes e depois</p>
            <h2 className="section-title mt-3">Da maratona de planilhas a uma única tela</h2>
          </div>
          <div className="lc-beforeafter-grid mt-12">
            <figure className="lc-ba-card lc-ba-card--antes">
              <span className="lc-ba-label lc-ba-label--antes">× Antes</span>
              <div className="lc-ba-img">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/antes-caos-planilhas-excel.png`}
                  alt="Várias planilhas de Excel abertas ao mesmo tempo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "top left" }}
                />
              </div>
              <figcaption className="lc-ba-caption">
                Vários arquivos abertos, abas duplicadas, horas de cópia e cola para
                responder uma única pergunta.
              </figcaption>
            </figure>
            <figure className="lc-ba-card lc-ba-card--depois">
              <span className="lc-ba-label lc-ba-label--depois">✓ Depois</span>
              <div className="lc-ba-img">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/dashboard-ui-kpis.webp`}
                  alt="Dashboard Power BI com indicadores consolidados"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <figcaption className="lc-ba-caption">
                Um painel que se atualiza sozinho: visão geral e detalhe no mesmo lugar,
                sem depender de ninguém para preparar.
              </figcaption>
            </figure>
          </div>
          <div className="lc-como-wrapper">
            <p className="lc-ba-label lc-ba-label--como" style={{ marginBottom: "0.75rem" }}>COMO FUNCIONA NA PRÁTICA</p>
            <ZoomableImage
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/pipeline-dados-centralizado.png`}
              alt="Diagrama mostrando dados de diferentes fontes sendo centralizados e alimentando dashboards"
              caption="De fontes desconectadas a decisões: como centralizamos seus dados em um único fluxo confiável."
              wrapperStyle={{
                border: "5px solid rgba(240,237,232,0.7)",
                boxShadow: "0 22px 48px rgba(240,237,232,0.15), 0 0 28px rgba(240,237,232,0.12)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ───────────────────────────────────── */}
      <section id="como-funciona" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Como funciona</p>
            <h2 className="section-title mt-3">Do diagnóstico ao dashboard em 5 etapas</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {processSteps.map((step) => (
              <div key={step.num} className="lc-how-step">
                <span className="lc-how-num">{step.num}</span>
                <h3 className="lc-how-title">{step.title}</h3>
                <p className="lc-how-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMAS QUE RESOLVEMOS ─────────────────────────── */}
      <section id="problemas" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-8">
            <div>
              <p className="section-eyebrow">Problemas que resolvemos</p>
              <h2 className="section-title mt-3">
                Essas situações estão impedindo sua empresa de crescer com clareza
              </h2>
              <p className="section-copy mt-4" style={{ fontSize: "0.9rem" }}>
                Se você respondeu sim para qualquer um desses pontos, o problema
                provavelmente não está nos relatórios. Está na forma como os dados
                estão organizados.
              </p>
            </div>
            <div>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                }}
              >
                {problemas.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.96rem",
                      color: "rgba(240,237,232,0.75)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: "17px",
                        height: "17px",
                        border: "1.5px solid rgba(240,237,232,0.3)",
                        borderRadius: "3px",
                        marginTop: "0.18rem",
                        display: "block",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <div className="ts-cta-row">
                  <Link href="/calculadora-bi" className="btn-accent">
                    Calcular meu custo de dados
                  </Link>
                  <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    Conversar pelo WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROVA E CREDIBILIDADE ────────────────────────────── */}
      <section id="credibilidade" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Dados que confirmam a dor</p>
            <h2 className="section-title mt-3">Não é só na sua empresa</h2>
          </div>
          <div className="lc-benefits-grid mt-12">
            {stats.map((stat) => (
              <div
                key={stat.source}
                className="lc-benefit-item"
                style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.6rem" }}
              >
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#2ee6a6",
                    margin: 0,
                  }}
                >
                  {stat.source}
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(240,237,232,0.65)", lineHeight: 1.65, margin: 0 }}>
                  &ldquo;{stat.text}&rdquo;
                </p>
                <a
                  href={stat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.68rem", color: "rgba(240,237,232,0.28)", textDecoration: "underline", wordBreak: "break-all", lineHeight: 1.4 }}
                >
                  {stat.title} · {stat.source}
                </a>
              </div>
            ))}
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
            &ldquo;Se cada área tem um número diferente para o mesmo indicador,
            você não tem dados. Você tem opiniões.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Business Intelligence</span>
        </div>
      </div>

      {/* ── SOBRE A LOYAL ───────────────────────────────────── */}
      <section id="sobre" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-8">
            <div>
              <p className="section-eyebrow">Sobre a Loyal</p>
              <h2 className="section-title mt-3">Especialistas em transformar dados em decisões</h2>
            </div>
            <div>
              <p className="section-copy">
                A Loyal Consulting ajuda empresas a eliminar controles manuais, integrar
                informações e construir indicadores confiáveis para a gestão.
              </p>
              <p className="section-copy" style={{ marginTop: "2rem" }}>
                Nosso foco não é apenas criar dashboards. É construir a estrutura necessária
                para que os números façam sentido e cheguem a tempo de influenciar as
                decisões certas. Trabalhamos lado a lado com diretores, gerentes, coordenadores
                e supervisores, com projetos enxutos e entregas práticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Descubra onde sua empresa está perdendo tempo com dados.</h2>
          <p className="lc-cta-sub">
            Calcule o custo real em 3 minutos — ou agende um diagnóstico gratuito com nossa equipe.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <Link href="/calculadora-bi" className="btn-accent">
              Calcular meu custo de dados
            </Link>
            <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Agendar Discovery Gratuita →
            </a>
          </div>
          <p style={{ marginTop: "0.75rem", fontSize: "0.78rem", color: "rgba(240,237,232,0.45)" }}>
            Calculadora gratuita · PDF executivo incluso · Ou 30 min de diagnóstico sem compromisso
          </p>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}

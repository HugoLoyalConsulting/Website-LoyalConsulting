import type { Metadata } from "next";
import Link from "next/link";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon, WHATSAPP_URL } from "@/components/StickyTopNav";
import { MarqueeBand } from "@/components/MarqueeBand";
import { WA_CALCULADORA } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Calculadora de Economias em BI",
  description:
    "Responda 6 perguntas e descubra o custo real do trabalho manual com dados na sua equipe — e quanto é possível economizar com BI e automação.",
  path: "/calculadora-bi",
});

const beneficios = [
  {
    n: "01",
    titulo: "Menos de 3 minutos",
    corpo: "Sem cadastro, sem compromisso. Você preenche os dados da equipe e recebe a estimativa na hora.",
  },
  {
    n: "02",
    titulo: "Por cargo e atividade",
    corpo: "O custo real de cada etapa da cadeia de dados: extração, modelagem, cruzamento, consolidação, análise.",
  },
  {
    n: "03",
    titulo: "Cenários de automação",
    corpo: "Projeção de economia com 10%, 50% e 100% de automação — para você mostrar o impacto antes de qualquer investimento.",
  },
  {
    n: "04",
    titulo: "Relatório em PDF",
    corpo: "Pronto para apresentar à diretoria ou usar como base para justificar um projeto de BI.",
  },
];

const passos = [
  {
    n: "01",
    titulo: "Informe sua equipe",
    corpo: "Cargo, salário e horas por atividade: extração, modelagem, cruzamento, consolidação e análise.",
  },
  {
    n: "02",
    titulo: "Descreva sua operação",
    corpo: "Fontes de dados consultadas, frequência de atualização e ocorrência de divergências entre sistemas.",
  },
  {
    n: "03",
    titulo: "Receba sua estimativa",
    corpo: "Custo anual, horas perdidas e cenários de economia por nível de automação — com PDF executivo.",
  },
];

export default function CalculadoraBIPage() {
  return (
    <main
      id="topo"
      className="lp-teal ts-page-shell relative w-full max-w-full overflow-x-hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.8rem)" }}
    >
      {/* ── NAV ─────────────────────────────────────────────── */}
      <header className="ts-header-shell">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <nav className="ts-nav">
            <Link className="ts-nav-logo" href="/" aria-label="Voltar ao site da Loyal Consulting">
              <span className="ts-nav-logo-icon" aria-hidden="true">LC</span>
              <span className="ts-nav-logo-text">Loyal Consulting</span>
            </Link>
            <div className="ts-nav-pill">
              <a href="#topo">Início</a>
              <a href="#beneficios">Benefícios</a>
              <a href="#como-funciona">Como Funciona</a>
              <Link href="/calculadora/">Abrir Calculadora →</Link>
            </div>
            <div className="ts-nav-right">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ts-nav-wa" aria-label="Falar no WhatsApp">
                <WhatsAppIcon />
              </a>
              <span className="ts-nav-social" role="img" aria-label="Instagram em breve"><InstagramIcon /></span>
              <span className="ts-nav-social" role="img" aria-label="LinkedIn em breve"><LinkedInIcon /></span>
              <a href="/calculadora/" className="btn-accent" style={{ fontSize: "0.78rem", padding: "0.5rem 1.1rem" }}>
                Calcular agora
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "min(72vh, 680px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="mx-auto w-full max-w-7xl px-5 sm:px-8"
          style={{ position: "relative", zIndex: 1, paddingTop: "8rem", paddingBottom: "5rem" }}
        >
          <div style={{ maxWidth: "680px" }}>
            <p className="section-eyebrow reveal-up">Calculadora de Economias em BI · Gratuito</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ textWrap: "auto" }}>
              Quanto custa, por ano,<br />
              o trabalho manual com dados<br />
              na sua equipe?
            </h1>
            <p className="ts-hero-sub reveal-up">
              Responda 6 perguntas e descubra o custo real das extrações, ajustes e
              consolidações manuais — e quanto é possível economizar com BI e automação.
            </p>
            <p className="ts-hero-copy reveal-up">
              <strong>Sem cadastro. Sem compromisso.</strong>{" "}
              Em menos de 3 minutos você recebe um relatório executivo com os números
              organizados e prontos para apresentar à diretoria.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href="/calculadora/" className="btn-accent">
                Calcular agora (grátis)
              </a>
              <a href={WA_CALCULADORA} target="_blank" rel="noopener noreferrer" className="btn-calendly">
                Prefiro conversar primeiro →
              </a>
            </div>
            <p className="reveal-up" style={{ marginTop: "1rem", fontSize: "0.8rem", color: "rgba(240,237,232,0.45)" }}>
              Menos de 3 minutos · Gratuito · PDF executivo incluso
            </p>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <MarqueeBand />

      {/* ── PROBLEMA ────────────────────────────────────────── */}
      <section id="problema" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-8">
            <div>
              <p className="section-eyebrow">O custo invisível dos dados manuais</p>
              <h2 className="section-title mt-3">
                Sua equipe gasta horas toda semana em trabalho que um sistema faria automaticamente
              </h2>
              <p className="section-copy mt-4" style={{ fontSize: "0.9rem" }}>
                Extrair arquivos, ajustar fórmulas, juntar tabelas, consolidar relatórios.
                Esse tempo tem um valor monetário exato — e quase ninguém o calculou.
                Sem esse número, qualquer conversa sobre investir em BI começa no escuro.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Analistas gastam horas por semana só preparando dados para análise",
                "Relatórios chegam tarde porque dependem de consolidação manual",
                "Divergências entre sistemas consomem tempo de reunião",
                "O custo real desse trabalho nunca foi medido com precisão",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    fontSize: "0.93rem",
                    color: "rgba(240,237,232,0.72)",
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{ flexShrink: 0, color: "#f97316", fontWeight: 700, marginTop: "0.05rem" }}>×</span>
                  {item}
                </div>
              ))}
              <div style={{ marginTop: "0.5rem" }}>
                <a href="/calculadora/" className="btn-accent">
                  Calcular meu custo agora
                </a>
                <p className="lc-cta-caption">Gratuito · PDF incluso · Sem cadastro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS ──────────────────────────────────────── */}
      <section id="beneficios" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">O que você recebe</p>
            <h2 className="section-title mt-3">Quatro entregas em menos de 3 minutos</h2>
          </div>
          <ol className="mt-12" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 0 }}>
            {beneficios.map((b) => (
              <li
                key={b.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3rem 1fr",
                  gap: "0 1.5rem",
                  padding: "1.75rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", color: "#2ee6a6", paddingTop: "0.2rem" }}>
                  {b.n}
                </span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--color-text, #f0ede8)", lineHeight: 1.35 }}>{b.titulo}</p>
                  <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.6 }}>{b.corpo}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── COMO FUNCIONA ───────────────────────────────────── */}
      <section id="como-funciona" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Como funciona</p>
            <h2 className="section-title mt-3">Três etapas para o número que você precisa</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {passos.map((p) => (
              <div key={p.n} className="lc-how-step" style={{ background: "none", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "2rem 1.5rem" }}>
                <span className="lc-how-num">{p.n}</span>
                <h3 className="lc-how-title">{p.titulo}</h3>
                <p className="lc-how-body">{p.corpo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDIBILIDADE ───────────────────────────────────── */}
      <section id="credibilidade" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">O custo tem nome e sobrenome</p>
            <h2 className="section-title mt-3">O problema não é novo. Só nunca foi medido na sua empresa.</h2>
          </div>
          <div className="lc-benefits-grid mt-12">
            {[
              {
                fonte: "McKinsey Global Institute",
                titulo: "The Age of Analytics",
                url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-age-of-analytics-competing-in-a-data-driven-world",
                texto:
                  "Analistas e cientistas de dados gastam entre 60% e 80% do tempo preparando e validando dados — antes de qualquer análise acontecer. Esse tempo tem custo direto e pode ser quantificado por cargo e atividade.",
              },
              {
                fonte: "Deloitte Insights",
                titulo: "Insight-Driven Organisations",
                url: "https://www.deloitte.com/uk/en/services/consulting/services/insight-driven-organisations.html",
                texto:
                  "Empresas que medem e reduzem o tempo gasto em trabalho manual com dados tomam decisões mais rápidas, cometem menos erros operacionais e constroem vantagem competitiva sustentável.",
              },
              {
                fonte: "PwC",
                titulo: "ERP Data Modernization",
                url: "https://www.pwc.com/us/en/services/consulting/business-transformation/data-analytics/erp-data-modernization.html",
                texto:
                  "A modernização dos dados libera valor preso em processos manuais, transformando horas gastas em consolidação em capacidade analítica real — com retorno mensurável para a gestão.",
              },
            ].map((s) => (
              <div
                key={s.fonte}
                className="lc-benefit-item"
                style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.6rem" }}
              >
                <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2ee6a6", margin: 0 }}>
                  {s.fonte}
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(240,237,232,0.65)", lineHeight: 1.65, margin: 0 }}>
                  &ldquo;{s.texto}&rdquo;
                </p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.68rem", color: "rgba(240,237,232,0.28)", textDecoration: "underline", wordBreak: "break-all", lineHeight: 1.4 }}>
                  {s.titulo} · {s.fonte}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA CALCULADORA ─────────────────────────────────── */}
      <div className="lc-cta-band" style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(46,230,166,0.08), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center" style={{ position: "relative" }}>
          <p className="section-eyebrow" style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
            Calculadora de Economias em BI · Gratuito
          </p>
          <h2 className="lc-cta-title" style={{ maxWidth: "620px", margin: "0 auto" }}>
            Descubra o custo real antes de qualquer decisão sobre dados
          </h2>
          <p className="lc-cta-sub" style={{ maxWidth: "520px", margin: "1rem auto 0" }}>
            A estimativa leva menos de 3 minutos. Você sai com um relatório executivo pronto para apresentar — sem cadastro, sem compromisso.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <Link href="/calculadora/" className="btn-accent" style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}>
              Abrir Calculadora Gratuita →
            </Link>
            <a href={WA_CALCULADORA} target="_blank" rel="noopener noreferrer" className="btn-calendly">
              Prefiro conversar primeiro
            </a>
          </div>
          <p style={{ marginTop: "1rem", fontSize: "0.78rem", color: "rgba(240,237,232,0.38)" }}>
            Sem cadastro · PDF executivo incluso · Resultado imediato
          </p>
        </div>
      </div>

      {/* ── PRÓXIMOS PASSOS ─────────────────────────────────── */}
      <section className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8 text-center" style={{ marginBottom: "2.5rem" }}>
            <p className="section-eyebrow" style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              Depois do número, o que fazer?
            </p>
            <h2 className="section-title" style={{ maxWidth: "620px", margin: "0 auto" }}>
              O resultado da calculadora é o começo da conversa — não o fim
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div style={{ border: "1px solid rgba(46,230,166,0.25)", borderRadius: "16px", padding: "1.75rem", background: "rgba(46,230,166,0.05)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2ee6a6", margin: 0 }}>
                O número assustou?
              </p>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text, #f0ede8)", lineHeight: 1.35, margin: 0 }}>
                Agende uma conversa de 30 minutos
              </h3>
              <p style={{ fontSize: "0.88rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                Leve o PDF para a conversa. Nossa equipe interpreta os resultados, identifica onde o ganho
                é mais rápido e apresenta um caminho concreto para reduzir esse custo.
              </p>
              <a href={WA_CALCULADORA} target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ marginTop: "0.5rem", textAlign: "center" }}>
                Conversar sobre o resultado →
              </a>
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "1.75rem", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(240,237,232,0.45)", margin: 0 }}>
                Ainda explorando?
              </p>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text, #f0ede8)", lineHeight: 1.35, margin: 0 }}>
                Veja como a transformação acontece na prática
              </h3>
              <p style={{ fontSize: "0.88rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                Entenda o processo completo — do diagnóstico à integração dos dados e dashboards —
                e descubra qual etapa faz mais sentido para o momento atual da sua empresa.
              </p>
              <Link href="/discovery" className="btn-outline" style={{ marginTop: "0.5rem", textAlign: "center" }}>
                Ver como funciona a Discovery →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <div className="lp-dark-band">
        <footer className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <div>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.28)" }}>
                © {new Date().getFullYear()} Loyal Consulting
              </p>
              <p style={{ fontSize: "0.65rem", color: "rgba(240,237,232,0.18)", marginTop: "0.2rem" }}>
                Fundado por Hugo Leal
              </p>
            </div>
            <p style={{ fontSize: "0.78rem", color: "rgba(240,237,232,0.38)" }}>
              Dashboards automatizados para gestores que precisam enxergar além das planilhas.
            </p>
            <Link
              href="/en/bi-calculator"
              aria-label="Switch to English"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "rgba(240,237,232,0.38)",
                textDecoration: "none",
                padding: "0.35rem 0.7rem",
                border: "1px solid rgba(240,237,232,0.14)",
                borderRadius: "4px",
              }}
            >
              EN-US
            </Link>
          </div>
        </footer>
      </div>

      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ts-float-wa" aria-label="Falar no WhatsApp">
        <WhatsAppIcon />
      </a>
    </main>
  );
}

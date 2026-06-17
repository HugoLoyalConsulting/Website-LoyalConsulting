import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroBackgroundSlideshow } from "@/components/HeroBackgroundSlideshow";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { ZoomableImage } from "@/components/ZoomableImage";
import { MarqueeBand } from "@/components/MarqueeBand";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon, WHATSAPP_URL } from "@/components/StickyTopNav";
import { WA_DIAGNOSTICO, CALENDLY_URL } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Diagnóstico Gratuito de Dados",
  description:
    "Descubra em 3 minutos quanto tempo sua empresa perde com dados descentralizados. Diagnóstico gratuito de maturidade de dados com recomendações práticas.",
  path: "/discovery",
});

// ── Hoje × Depois ─────────────────────────────────────────────────────────
const hoje = [
  "Planilhas espalhadas por e-mail e WhatsApp",
  "Relatórios feitos manualmente toda semana",
  "Copiar e colar para montar apresentações",
  "Reuniões discutindo qual número está certo",
  "Dados inconsistentes entre as áreas",
];

const depois = [
  "Dados centralizados e integrados",
  "Atualizações automáticas, sem retrabalho",
  "Dashboards prontos em tempo real",
  "Indicadores confiáveis e padronizados",
  "Reuniões focadas em decisões",
];

// ── O que o diagnóstico vai revelar ───────────────────────────────────────
const outcomes = [
  {
    q: "Onde sua empresa está perdendo tempo com dados",
    a: "Identificamos os processos manuais que mais consomem horas da sua equipe e que podem ser automatizados.",
  },
  {
    q: "Por que os números não batem entre as áreas",
    a: "Mapeamos as fontes de inconsistência e mostramos como centralizar os dados em uma única versão confiável.",
  },
  {
    q: "Quais indicadores realmente importam para a sua operação",
    a: "Priorizamos os 3 a 5 KPIs com maior impacto nas suas decisões — e paramos de medir o que não move o ponteiro.",
  },
  {
    q: "Se seus dados estão prontos para um dashboard ou precisam ser estruturados antes",
    a: "Mapeamos o que existe, onde está e o que precisa ser ajustado antes de construir qualquer coisa.",
  },
  {
    q: "Qual seria o próximo passo concreto — e quanto tempo levaria",
    a: "Se fizer sentido avançar, você recebe três opções de entrega com prazos e valores definidos. Você escolhe o caminho.",
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

// ── Como funciona ──────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Diagnóstico gratuito",
    body: "Em 30 minutos, mapeamos suas fontes de dados, identificamos gargalos e entendemos o que está travando a tomada de decisão.",
    img: "ipad-google-analytics.jpg",
    tag: "Gratuito",
  },
  {
    num: "02",
    title: "Integração dos dados",
    body: "Conectamos planilhas, ERPs, CRMs e APIs em uma base única e confiável, eliminando inconsistências entre áreas.",
    img: "analistas-revisando-dashboard.jpg",
    tag: "Fonte única de verdade",
  },
  {
    num: "03",
    title: "Automação",
    body: "Substituímos processos manuais repetitivos por fluxos automáticos. Seu time para de copiar e colar.",
    img: "dashboard-monitor-dados-futurista.jpg",
    tag: "Sem retrabalho",
  },
  {
    num: "04",
    title: "Dashboards",
    body: "Criamos painéis com os indicadores que realmente importam para a sua gestão, atualizados em tempo real.",
    img: "dashboard-powerbi-vendas.png",
    tag: "Decisão em segundos",
  },
  {
    num: "05",
    title: "Acompanhamento",
    body: "Suporte contínuo para ajustes, treinamento do time e expansão dos indicadores conforme a operação cresce.",
    img: "apresentacao-dashboard-apontando.jpg",
    tag: "Sem abandono",
  },
];

// ── Prova e credibilidade ──────────────────────────────────────────────────
const stats = [
  {
    source: "McKinsey",
    text: "Organizações orientadas por dados apresentam desempenho significativamente superior em aquisição de clientes, retenção e lucratividade.",
  },
  {
    source: "Deloitte",
    text: "A ausência de dados integrados reduz a velocidade de decisão e aumenta o retrabalho operacional em médias e grandes empresas.",
  },
  {
    source: "PwC",
    text: "Empresas que modernizam sua gestão de dados reduzem o tempo gasto em consolidação manual e aumentam a confiança nos indicadores.",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "Já tentamos BI antes e o time nunca usou. Por que seria diferente?",
    a: `Esse é o histórico mais comum. Projetos de BI fracassam quase sempre pelo mesmo motivo: começaram pela ferramenta, não pelo problema. O diagnóstico começa por identificar qual dado realmente importa para cada decisão — e só depois define a ferramenta certa. Dashboard vira consequência, não objetivo.`,
  },
  {
    q: "Nossa operação tem dados em vários sistemas. Parece complexo demais.",
    a: "A maioria das empresas que atendemos está exatamente nesse cenário: três sistemas, duas planilhas e um relatório que não concorda com nenhum dos outros. Isso não é exceção; é o ponto de partida mais comum. O diagnóstico existe para mapear o que existe e encontrar o caminho mais direto, sem prometer o impossível.",
  },
  {
    q: "Tenho medo de que o dashboard fique pronto mas ninguém use no dia a dia.",
    a: "Esse medo é dos mais justificados, e quase sempre se confirma quando o painel foi construído sem envolver quem vai usar. No nosso processo, o mapeamento já inclui quem precisa ver o quê, em qual frequência e de qual dispositivo. Adoção não começa no treinamento; começa no design.",
  },
  {
    q: "Não sei exatamente o que quero. Ainda assim vale conversar?",
    a: `É exatamente para isso que o diagnóstico existe. Saber que "os números chegam tarde demais" ou que "ninguém concorda sobre qual planilha está certa" já é suficiente para começar. Clareza de escopo é o produto do diagnóstico, não o pré-requisito dele.`,
  },
  {
    q: "O diagnóstico tem custo?",
    a: "Não. É uma conversa de 30 minutos. Sem apresentação de produto, sem compromisso. Se ao final não fizer sentido avançar, você sai com mais clareza sobre o problema do que entrou — o que já tem valor por si só.",
  },
  {
    q: "Em quanto tempo vou ter algo funcionando?",
    a: `A maioria das empresas quer um dashboard "em uma semana". Às vezes isso é possível (quando os dados já estão organizados). O que determina o prazo é a qualidade do que existe, não a velocidade de desenvolvimento. O diagnóstico mapeia isso e devolve uma estimativa realista, sem criar expectativa que não vai se cumprir.`,
  },
  {
    q: "Já uso uma ferramenta de BI que não está funcionando bem. E agora?",
    a: "A ferramenta raramente é o problema. O que mais aparece é: dado mal estruturado alimentando um dashboard bem construído, ou um painel tecnicamente correto que ninguém sabe usar. O diagnóstico olha para o cenário como um todo e só recomenda mudança de ferramenta quando há razão concreta para isso.",
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

export default function DiscoveryPage() {
  return (
    <main
      id="topo"
      className="lp-mid-dark ts-page-shell relative w-full max-w-full overflow-x-hidden"
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.8rem)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header className="ts-header-shell">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <nav className="ts-nav">
            <Link className="ts-nav-logo" href="/" aria-label="Voltar ao site da Loyal Consulting">
              <span className="ts-nav-logo-icon">LC</span>
              <span className="ts-nav-logo-text">Loyal Consulting</span>
            </Link>
            <div className="ts-nav-pill">
              <a href="#topo">Início</a>
              <a href="#transformacao">Transformação</a>
              <a href="#diagnostico">Diagnóstico</a>
              <a href="#como-funciona">Como Funciona</a>
              <a href="#faq">FAQ</a>
              <a href="#sobre">Sobre a Loyal</a>
            </div>
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
              <span className="ts-nav-social" role="img" aria-label="Instagram em breve" title="Instagram em breve">
                <InstagramIcon />
              </span>
              <span className="ts-nav-social" role="img" aria-label="LinkedIn em breve" title="LinkedIn em breve">
                <LinkedInIcon />
              </span>
              <a
                href={WA_DIAGNOSTICO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
                style={{ fontSize: "0.78rem", padding: "0.5rem 1.1rem" }}
              >
                Diagnóstico Gratuito
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
          <div style={{ maxWidth: "660px" }}>
            <p className="section-eyebrow reveal-up">Diagnóstico gratuito · 30 minutos</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ textWrap: "auto" }}>
              Você está cansado de cobrar<br />
              decisões baseadas em dados,<br />
              mas seu time ainda vive de planilha?
            </h1>
            <p className="ts-hero-sub reveal-up">
              Sua equipe deveria analisar dados, não preparar dados. Automatizamos
              relatórios, integramos dados e criamos dashboards para que sua equipe
              pare de perder tempo procurando números.
            </p>
            <p className="ts-hero-copy reveal-up">
              <strong>Sem compromisso. Diagnóstico inicial em até 30 minutos.</strong>{" "}
              Você sai com clareza sobre gargalos, indicadores prioritários e um plano
              inicial para reduzir a dependência de planilhas e acelerar decisões.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Fazer o Diagnóstico Gratuito
              </a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-calendly">
                Prefiro agendar pelo Calendly
              </a>
            </div>
            <p className="reveal-up" style={{ marginTop: "1rem", fontSize: "0.8rem", color: "rgba(240,237,232,0.45)" }}>
              Leva 3 minutos · Gratuito · Resultado imediato
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
              Pare de gastar tempo montando relatórios. Veja o que muda.
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
                Depois da implementação
              </p>
              <ul className="lc-consequences-list mt-3">
                {depois.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAGNÓSTICO (oferta principal) ──────────────────── */}
      <section id="diagnostico" className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <p
            className="section-eyebrow"
            style={{ display: "flex", justifyContent: "center", marginBottom: "1.2rem" }}
          >
            Oferta principal
          </p>
          <h2 className="lc-cta-title" style={{ maxWidth: "680px", margin: "0 auto" }}>
            Descubra em 3 minutos quanto tempo sua empresa perde por causa de dados descentralizados
          </h2>
          <p className="lc-cta-sub" style={{ maxWidth: "540px", margin: "1rem auto 0" }}>
            Receba uma análise gratuita com recomendações práticas para reduzir retrabalho,
            aumentar a confiança nos números e acelerar a tomada de decisão.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Iniciar Diagnóstico
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-calendly">
              Agendar pelo Calendly
            </a>
          </div>
          <p style={{ marginTop: "0.75rem", fontSize: "0.78rem", color: "rgba(240,237,232,0.45)" }}>
            Gratuito · Sem compromisso · Resultado imediato
          </p>
        </div>
      </section>

      {/* ── O QUE O DIAGNÓSTICO VAI REVELAR ─────────────────── */}
      <section id="resultado" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Sua equipe deveria analisar dados — não preparar dados</p>
            <h2 className="section-title mt-3">30 minutos depois, você vai sair sabendo:</h2>
          </div>
          <ol className="mt-12" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0" }}>
            {outcomes.map((item, i) => (
              <li
                key={item.q}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3rem 1fr",
                  gap: "0 1.5rem",
                  padding: "1.75rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", color: "#2ee6a6", paddingTop: "0.2rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--color-text, #f0ede8)", lineHeight: 1.35 }}>{item.q}</p>
                  <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.6 }}>{item.a}</p>
                </div>
              </li>
            ))}
          </ol>
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
                  alt="Várias planilhas de Excel abertas ao mesmo tempo na mesma tela"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "top left" }}
                />
              </div>
              <figcaption className="lc-ba-caption">
                Vários arquivos abertos, abas duplicadas e horas de cópia e cola para
                responder uma única pergunta.
              </figcaption>
            </figure>
            <figure className="lc-ba-card lc-ba-card--depois">
              <span className="lc-ba-label lc-ba-label--depois">✓ Depois</span>
              <div className="lc-ba-img">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/dashboard-powerbi-vendas.png`}
                  alt="Dashboard Power BI com indicadores consolidados"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <figcaption className="lc-ba-caption">
                Um painel que se atualiza sozinho: a visão geral e o detalhe, no mesmo lugar,
                sem depender de ninguém para preparar.
              </figcaption>
            </figure>
          </div>
          <div className="lc-como-wrapper">
            <p className="lc-ba-label lc-ba-label--como" style={{ marginBottom: "0.75rem" }}>COMO FUNCIONA NA PRÁTICA</p>
            <ZoomableImage
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/pipeline-dados-centralizado.png`}
              alt="Diagrama mostrando sistemas desconectados sendo centralizados e alimentando dashboards"
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
                  <span className="lc-how-tag">{step.tag}</span>
                </div>
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
              <p className="section-eyebrow">O problema pode ser mais simples do que parece</p>
              <h2 className="section-title mt-3">
                Talvez não seja falta de dashboards — é falta de uma fonte única de verdade
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
                <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Iniciar Diagnóstico Gratuito
                </a>
                <p className="lc-cta-caption">30 minutos · Gratuito · Sem compromisso</p>
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
                style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.75rem" }}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX ────────────────────────────────────────── */}
      <div
        className="parallax-break"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/relatorios-impressos-mesa.jpg')` }}
      >
        <div className="parallax-break__inner">
          <p className="parallax-quote">
            &ldquo;O problema quase nunca é falta de dados. É o custo de oportunidade de não
            enxergar, no momento certo, onde a rentabilidade está escorregando porque a
            informação ainda depende de um intermediário para chegar a quem decide.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Business Intelligence</span>
        </div>
      </div>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section id="faq" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Perguntas frequentes</p>
            <h2 className="section-title mt-3">Dúvidas antes de começar</h2>
          </div>
          <div className="mt-10 lc-faq-stagger">
            {faqItems.map((item, i) => (
              <div
                key={item.q}
                className="lc-faq-card"
                style={{ marginLeft: i % 2 !== 0 ? "clamp(1rem, 5vw, 3.5rem)" : "0" }}
              >
                <p className="lc-faq-q">{item.q}</p>
                <p className="lc-faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE A LOYAL ──────────────────────────────────── */}
      <section id="sobre" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-8" style={{ alignItems: "center" }}>
            <figure
              style={{
                position: "relative",
                width: "100%",
                minHeight: "380px",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/analista-bi-monitores-duplos.jpg`}
                alt="Equipe da Loyal Consulting analisando indicadores de negócio"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </figure>
            <div>
              <p className="section-eyebrow">Sobre a Loyal</p>
              <h2 className="section-title mt-3">Especialistas em transformar dados em decisões</h2>
              <p className="section-copy" style={{ marginTop: "0.75rem", fontWeight: 600 }}>
                Consultoria boutique de Business Intelligence
              </p>
              <p className="section-copy" style={{ marginTop: "1.6rem" }}>
                A Loyal Consulting ajuda empresas a eliminar controles manuais, integrar
                informações e construir indicadores confiáveis para a gestão.
              </p>
              <p className="section-copy" style={{ marginTop: "1.2rem" }}>
                Nosso foco não é apenas criar dashboards. É construir a estrutura necessária
                para que os números façam sentido — e cheguem a tempo de influenciar as
                decisões certas.
              </p>
              <div className="mt-8">
                <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Fazer o Diagnóstico Gratuito
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Descubra quanto tempo sua equipe pode economizar.</h2>
          <p className="lc-cta-sub">
            Receba uma avaliação gratuita dos seus processos de dados e identifique
            oportunidades de automação e integração — sem custo, sem compromisso.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Fazer Diagnóstico Gratuito
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-calendly">
              Agendar pelo Calendly
            </a>
          </div>
        </div>
      </div>

      {/* ── FORMULÁRIO + FOOTER ──────────────────────────────── */}
      <div className="lp-dark-band">
        <LeadCaptureForm />
        <footer className="mx-auto mt-16 w-full max-w-7xl px-5 pb-12 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <div>
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
              <p style={{ fontSize: "0.65rem", color: "rgba(240,237,232,0.18)", marginTop: "0.2rem" }}>
                Fundado por Hugo Leal
              </p>
            </div>
            <p style={{ fontSize: "0.78rem", color: "rgba(240,237,232,0.38)" }}>
              Dashboards automatizados para gestores que precisam enxergar além das planilhas.
            </p>
          </div>
        </footer>
      </div>

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

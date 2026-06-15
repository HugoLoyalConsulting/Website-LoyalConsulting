import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroCarouselScene } from "@/components/HeroCarouselScene";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { ZoomableImage } from "@/components/ZoomableImage";
import { MarqueeBand } from "@/components/MarqueeBand";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon, WHATSAPP_URL } from "@/components/StickyTopNav";
import { CALENDLY_URL } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

const WA_DISCOVERY =
  "https://wa.me/5511981316880?text=" +
  encodeURIComponent("Olá! Quero agendar minha Discovery gratuita de 30 minutos.");

export const metadata: Metadata = buildMetadata({
  title: "Discovery gratuita de 30 minutos",
  description:
    "Gasta muito tempo em planilhas? Em 30 minutos descubra como dashboards automatizados mudam a rotina de gestores que precisam de dados confiáveis, rápido.",
  path: "/discovery",
});

// ── Qualificador ───────────────────────────────────────────────────────────
const goodFit = [
  "Você gerencia metas, equipes ou resultados",
  "Seu dia começa abrindo relatórios ou planilhas de áreas diferentes",
  "Depende de alguém para preparar ou consolidar os dados antes de decidir",
  "Já quis um dashboard centralizado mas não sabe por onde começar",
  "Tentou implementar BI antes e o projeto não saiu do papel",
];

const badFit = [
  "Você não acompanha nenhum indicador de negócio ainda",
  "O objetivo é criar gráficos sem uma necessidade clara de decisão",
  "Não há abertura para simplificar processos manuais atuais",
];

// ── O que você vai sair sabendo ────────────────────────────────────────────
const outcomes = [
  {
    q: "Quais KPIs realmente importam para o meu negócio agora?",
    a: "Sair sabendo quais 3 indicadores têm mais impacto na operação, para de acompanhar métricas que não movem o ponteiro.",
  },
  {
    q: "Meus dados estão prontos para virar um dashboard (ou precisam ser estruturados antes)?",
    a: "Mapeamos o que existe, onde está e o que precisa ser ajustado antes de construir qualquer coisa.",
  },
  {
    q: "Power BI, Tableau, Looker Studio, Plotly (Python): qual ferramenta faz sentido para o meu caso?",
    a: "A resposta depende do seu volume de dados, da equipe e do orçamento. Saindo daqui, você vai saber qual escolher e por quê.",
  },
  {
    q: "Em quanto tempo tenho algo funcionando?",
    a: "3 dias, 1 semana ou até 1 mês, a partir do acesso aos dados ou à estrutura das tabelas. Você ainda fica com o modelo para replicar por conta própria, caso queira.",
  },
  {
    q: "Como e quando avançar (e qual seria o passo concreto)?",
    a: "Se houver encaixe, você recebe três opções de entrega com prazos e valores definidos. Você escolhe o caminho, a gente começa.",
  },
];

// ── Como funciona ──────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Agenda no WhatsApp",
    body: "Você manda uma mensagem, a gente escolhe um horário que funciona para os dois lados. Sem formulário complicado.",
    img: "ipad-google-analytics.jpg",
    tag: "2 minutos",
  },
  {
    num: "02",
    title: "Discovery de 30 minutos",
    body: "Conversa estruturada: mapeamos seus dados, priorizamos seus indicadores e identificamos o que já existe na empresa.",
    img: "analistas-revisando-dashboard.jpg",
    tag: "Sem compromisso",
  },
  {
    num: "03",
    title: "Proposta clara",
    body: "Se fizer sentido avançar, você recebe três opções de entrega com prazos e valores. Você escolhe (ou não).",
    img: "apresentacao-dashboard-apontando.jpg",
    tag: "Sem pressão",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "Já tentamos BI antes e o time nunca usou. Por que seria diferente?",
    a: `Esse é o histórico mais comum. Projetos de BI fracassam quase sempre pelo mesmo motivo: começaram pela ferramenta, não pelo problema. Quando a pergunta central é "qual dado preciso para tomar esta decisão?", o dashboard vira consequência, não objetivo. A Discovery começa por aí e não avança sem ter essa resposta.`,
  },
  {
    q: "Nossa operação tem dados em vários sistemas. Parece complexo demais.",
    a: "A maioria das empresas que atendemos está exatamente nesse cenário: três sistemas, duas planilhas e um relatório que não concorda com nenhum dos outros. Isso não é exceção; é o ponto de partida mais comum. A Discovery existe para mapear o que existe e encontrar o caminho mais direto, sem prometer o impossível.",
  },
  {
    q: "Tenho medo de que o dashboard fique pronto mas ninguém use no dia a dia.",
    a: "Esse medo é dos mais justificados, e quase sempre se confirma quando o painel foi construído sem envolver quem vai usar. No nosso processo, o mapeamento já inclui quem precisa ver o quê, em qual frequência e de qual dispositivo. Adoção não começa no treinamento; começa no design.",
  },
  {
    q: "Não sei exatamente o que quero. Ainda assim vale conversar?",
    a: `É exatamente para isso que a Discovery existe. Saber que "os números chegam tarde demais" ou que "ninguém concorda sobre qual planilha está certa" já é suficiente para começar. Clareza de escopo é o produto da Discovery, não o pré-requisito dela.`,
  },
  {
    q: "A Discovery tem custo?",
    a: "Não. É uma conversa de 30 minutos. Sem apresentação de produto, sem compromisso. Se ao final não fizer sentido avançar, você sai com mais clareza sobre o problema do que entrou (o que já tem valor por si só).",
  },
  {
    q: "Em quanto tempo vou ter algo funcionando?",
    a: `A maioria das empresas quer um dashboard "em uma semana". Às vezes isso é possível (quando os dados já estão organizados). O que determina o prazo é a qualidade do que existe, não a velocidade de desenvolvimento. A Discovery mapeia isso e devolve uma estimativa realista, sem criar expectativa que não vai se cumprir.`,
  },
  {
    q: "Já uso uma ferramenta de BI que não está funcionando bem. E agora?",
    a: "A ferramenta raramente é o problema. O que mais aparece é: dado mal estruturado alimentando um dashboard bem construído, ou um painel tecnicamente correto que ninguém sabe usar. A Discovery olha para o cenário como um todo e só recomenda mudança de ferramenta quando há razão concreta para isso.",
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
                href={WA_DISCOVERY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
                style={{ fontSize: "0.78rem", padding: "0.5rem 1.1rem" }}
              >
                Agendar Discovery
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero">
          <div>
            <p className="section-eyebrow reveal-up">Discovery gratuita · 30 minutos · Sem compromisso</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ textWrap: "auto" }}>
              Você ainda consulta<br />
              planilha a planilha<br />
              antes de decidir?
            </h1>
            <p className="ts-hero-sub reveal-up">
              Gestores que centralizam seus dados num dashboard automatizado recuperam horas
              por semana, chegando às reuniões sabendo exatamente o que está acontecendo.
              Em 30 minutos, veja se isso funciona para o seu cenário.
            </p>
            <p className="ts-hero-copy reveal-up">
              <strong>Sem custo. Sem enrolação. Sem apresentação de produto.</strong>{" "}
              Só uma conversa estruturada onde entendemos seus dados, suas perguntas e o que
              precisa mudar para você parar de depender de relatórios manuais.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_DISCOVERY} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Quero minha Discovery gratuita
              </a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-calendly">
                Prefiro agendar pelo Calendly
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

      {/* ── QUALIFICADOR ────────────────────────────────────── */}
      <section id="para-quem" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Para quem é</p>
            <h2 className="section-title mt-3">Esta conversa foi feita para você</h2>
          </div>
          <div className="lc-dores-grid mt-12">
            <div>
              <p className="lc-dores-while-title lc-dores-while-title--cool" style={{ marginBottom: "1rem" }}>
                Sim, se você:
              </p>
              <ul className="lc-consequences-list mt-3">
                {goodFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                <a href={WA_DISCOVERY} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Quero minha Discovery gratuita
                </a>
                <p className="lc-cta-caption">30 minutos · Sem custo · Sem compromisso</p>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: "0.5rem", fontSize: "0.8rem", color: "rgba(240,237,232,0.5)", textDecoration: "underline" }}>
                  ou agendar pelo Calendly →
                </a>
              </div>
            </div>
            <div className="lc-dores-consequences">
              <p className="lc-dores-while-title" style={{ marginBottom: "1rem" }}>
                Talvez não seja o momento se:
              </p>
              <ul className="lc-dores-list mt-3">
                {badFit.map((item) => (
                  <li key={item}>
                    <span className="lc-dores-bullet">×</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="section-copy" style={{ fontSize: "0.85rem", marginTop: "2.5rem" }}>
                Se você se identificou com os itens acima, provavelmente ainda não é o
                momento; tudo bem. Quando o contexto mudar, a gente está aqui.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── O QUE VOCÊ VAI SAIR SABENDO ─────────────────────── */}
      <section id="resultado" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">O que você vai sair sabendo</p>
            <h2 className="section-title mt-3">30 minutos depois, você vai ter:</h2>
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

      {/* ── ANTES → DEPOIS ──────────────────────────────────── */}
      <section id="antes-depois" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
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
                Vários arquivos abertos, abas duplicadas e horas de copia-e-cola para
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
          <div className="mt-14">
            <ZoomableImage
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/pipeline-dados-centralizado.png`}
              alt="Diagrama mostrando sistemas desconectados sendo centralizados em um Data Lake e alimentando dashboards de indicadores"
              caption="De fontes desconectadas a decisões: como centralizamos seus dados em um único pipeline confiável."
            />
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
            &ldquo;O problema quase nunca é falta de dados. É o custo de oportunidade de não enxergar, no momento certo, onde a rentabilidade está escorregando porque a informação ainda depende de um intermediário para chegar a quem decide.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Discovery</span>
        </div>
      </div>

      {/* ── COMO FUNCIONA ───────────────────────────────────── */}
      <section id="como-funciona" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Como funciona</p>
            <h2 className="section-title mt-3">Três etapas. Sem fricção</h2>
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

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section id="faq" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Perguntas frequentes</p>
            <h2 className="section-title mt-3">Dúvidas antes de agendar</h2>
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

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Chega de abrir 5 planilhas para responder uma pergunta</h2>
          <p className="lc-cta-sub">
            30 minutos é o tempo que você precisa para entender se existe um caminho mais
            eficiente. Sem custo. Sem compromisso. E com clareza sobre o que fazer a seguir.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_DISCOVERY} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Quero minha Discovery gratuita
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

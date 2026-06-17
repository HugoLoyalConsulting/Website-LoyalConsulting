import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_DIAGNOSTICO } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Como Funciona",
  description:
    "Do dado disperso à decisão segura: Data Workflows e Pipelines, Dashboards em Power BI, Tableau, Looker ou Python, e Mentoria e Treinamento.",
  path: "/como-funciona",
});

// ── Como ajudamos (3 frentes) ──────────────────────────────────────────────
const services = [
  {
    title: "Integração e automação de dados",
    body: "Quando cada área vive da sua planilha e ninguém concorda sobre qual número está certo, o problema não é a análise; é a base. Conectamos ERPs, CRMs, planilhas e APIs em um modelo único e confiável, com atualizações automáticas e visibilidade de ponta a ponta — sem depender de processos manuais.",
    img: "dashboard-monitor-dados-futurista.jpg",
    tag: "Fonte única de verdade",
  },
  {
    title: "Dashboards",
    body: "A reunião para de ser um debate sobre qual planilha está certa quando existe uma tela de referência compartilhada, atualizada automaticamente. Construímos painéis em Power BI, Tableau, Looker ou Python, com as perguntas certas respondidas no lugar certo.",
    img: "dashboard-powerbi-vendas.png",
    tag: "Decisão em segundos",
  },
  {
    title: "Mentoria e Treinamento",
    body: "Às vezes o problema não é falta de ferramenta; é não saber o que fazer com ela. Sessões práticas direcionadas ao seu contexto real: sem teoria desnecessária, com foco no que gera resultado imediato no trabalho.",
    img: "analistas-revisando-dashboard.jpg",
    tag: "Seu time voa sozinho",
  },
];

// ── Nosso processo ─────────────────────────────────────────────────────────
const processSteps = [
  {
    num: "01",
    title: "Discovery",
    body: "Entendemos o cenário geral: quais KPIs priorizar, quais sistemas e dados existem, qual a complexidade do projeto e qual a urgência do seu time.",
    tags: ["KPIs", "Sistemas", "Urgência"],
  },
  {
    num: "02",
    title: "Proposta e orçamento",
    body: "Você recebe três níveis de entrega, com prazos e valores claros, e escolhe o que faz mais sentido para o momento.",
    tags: ["3 níveis", "Prazos", "Valores"],
  },
  {
    num: "03",
    title: "Criação iterativa",
    body: "Construímos em ciclos curtos, com seu feedback a cada rodada. Você vê o painel tomando forma e ajusta o rumo antes da entrega final.",
    tags: ["Feedback", "Ciclos curtos"],
  },
  {
    num: "04",
    title: "Entrega e deployment",
    body: "Publicamos a solução no seu ambiente, com as atualizações automáticas funcionando e tudo validado de ponta a ponta.",
    tags: ["Publicação", "Automação"],
  },
  {
    num: "05",
    title: "Treinamento do time",
    body: "Sua equipe aprende a usar o dashboard no dia a dia: navegar, filtrar e tirar as respostas sem depender de ninguém.",
    tags: ["Capacitação"],
  },
  {
    num: "06",
    title: "Bônus: manutenção mensal",
    body: "Pequenos ajustes e correções ficam cobertos mês a mês. Novas funcionalidades e expansões entram como incremento, em novo escopo.",
    tags: ["Suporte", "Sem surpresas"],
  },
];

export default function ComoFuncionaPage() {
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
            <p className="section-eyebrow reveal-up">Como funciona</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}>
              Do dado disperso<br />
              à decisão segura
            </h1>
            <p className="ts-hero-sub reveal-up">
              Três frentes de trabalho e um processo simples, pensados para quem vive de
              planilha e quer os números prontos, em um lugar só.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMO AJUDAMOS ───────────────────────────────────── */}
      <section id="servicos" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Como ajudamos</p>
            <h2 className="section-title mt-3">Três frentes de trabalho</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {services.map((service) => (
              <div key={service.title} className="lc-how-step">
                <figure className="lc-how-step-img">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/${service.img}`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    style={{ objectFit: "cover", filter: "brightness(0.8) saturate(0.7)" }}
                  />
                </figure>
                <h3 className="lc-how-title" style={{ paddingTop: "1.5rem" }}>{service.title}</h3>
                <p className="lc-how-body">{service.body}</p>
                <div className="lc-how-tags">
                  <span className="lc-how-tag">{service.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOSSO PROCESSO ──────────────────────────────────── */}
      <section id="processo" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Passo a passo</p>
            <h2 className="section-title mt-3">Nosso processo é simples</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {processSteps.map((step) => (
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

      {/* ── PARALLAX — O VERDADEIRO CUSTO ───────────────────── */}
      <div
        className="parallax-break"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/analista-bi-monitores-duplos.jpg')` }}
      >
        <div className="parallax-break__inner">
          <p className="parallax-quote">
            &ldquo;O verdadeiro custo não é investir em BI. É continuar tomando decisões
            com informações incompletas.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Business Intelligence</span>
        </div>
      </div>

      {/* ── O CUSTO DE NÃO AGIR ─────────────────────────────── */}
      <section id="custo" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-8">
            <div>
              <p className="section-eyebrow section-eyebrow--red">Vale a reflexão</p>
              <h2 className="section-title mt-3">Três perguntas para o seu próximo fechamento</h2>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--impact">
              <ul className="lc-consequences-list lc-consequences-list--warning">
                <li>Quanto tempo sua equipe dedica à consolidação de dados todos os meses?</li>
                <li>Quantas oportunidades deixam de ser aproveitadas porque os números chegam tarde demais?</li>
                <li>Quanto custa descobrir um problema apenas quando ele já aconteceu?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Quer ver esse processo aplicado à sua área?</h2>
          <p className="lc-cta-sub">Comece por uma conversa rápida, sem compromisso.</p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Quero um diagnóstico gratuito
            </a>
            <Link href="/exemplos" className="btn-outline">
              Ver exemplos de projetos
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}

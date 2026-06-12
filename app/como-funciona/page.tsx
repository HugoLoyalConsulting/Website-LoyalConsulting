import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_DIAGNOSTICO } from "@/lib/links";

export const metadata: Metadata = {
  title: "Como Funciona | Loyal Consulting",
  description:
    "Do dado disperso à decisão segura: dashboards Power BI, automação de relatórios, integração de dados e estruturação analítica em um processo simples de 4 etapas.",
};

// ── Como ajudamos ──────────────────────────────────────────────────────────
const services = [
  {
    title: "Dashboards Power BI",
    body: "Transformamos dados dispersos em painéis claros e intuitivos para apoiar decisões mais rápidas e seguras.",
    img: "dashboard-powerbi-vendas.png",
  },
  {
    title: "Automação de relatórios",
    body: "Eliminamos processos repetitivos de atualização e consolidação de informações.",
    img: "dashboard-comunicacao-interna.png",
  },
  {
    title: "Integração de dados",
    body: "Conectamos planilhas, ERPs, CRMs e outras fontes para criar uma visão única do negócio.",
    img: "dashboard-monitor-dados-futurista.jpg",
  },
  {
    title: "Estruturação analítica",
    body: "Organizamos indicadores e métricas para que a gestão acompanhe aquilo que realmente gera resultado.",
    img: "dashboard-ui-kpis.webp",
  },
];

// ── Nosso processo ─────────────────────────────────────────────────────────
const processSteps = [
  {
    num: "01",
    title: "Entendemos o cenário atual",
    body: "Mapeamos como as informações são acompanhadas hoje e identificamos os principais gargalos.",
    tags: ["Mapeamento"],
  },
  {
    num: "02",
    title: "Definimos prioridades",
    body: "Entendemos quais indicadores geram maior impacto para a tomada de decisão.",
    tags: ["Prioridades"],
  },
  {
    num: "03",
    title: "Construímos a solução",
    body: "Desenvolvemos dashboards e automações alinhados à realidade da sua operação.",
    tags: ["Dashboards", "Automações"],
  },
  {
    num: "04",
    title: "Entregamos visibilidade",
    body: "Você passa a acompanhar seus resultados de forma rápida, prática e confiável.",
    tags: ["Visibilidade"],
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
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero" style={{ paddingBottom: "2rem" }}>
          <div>
            <p className="section-eyebrow reveal-up">Como funciona</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}>
              Do dado disperso<br />
              à decisão segura.
            </h1>
            <p className="ts-hero-sub reveal-up">
              Quatro frentes de trabalho e um processo simples, pensados para a realidade de
              quem gerencia a operação no dia a dia.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMO AJUDAMOS ───────────────────────────────────── */}
      <section id="servicos" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Como ajudamos</p>
            <h2 className="section-title mt-3">Quatro frentes de trabalho.</h2>
          </div>
          <div className="lc-how-steps lc-how-steps--four mt-12">
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
                  <span className="lc-how-tag">Sem retrabalho</span>
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
          <div className="mt-14">
            <p className="section-eyebrow">Passo a passo</p>
            <h2 className="section-title mt-3">Nosso processo é simples.</h2>
          </div>
          <div className="lc-how-steps lc-how-steps--four mt-12">
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
          <div className="lc-dores-grid mt-14">
            <div>
              <p className="section-eyebrow section-eyebrow--red">Vale a reflexão</p>
              <h2 className="section-title mt-3">Três perguntas para o seu próximo fechamento.</h2>
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
              Quero um diagnóstico gratuito →
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

import Image from "next/image";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { MarqueeBand } from "@/components/MarqueeBand";
import { HeroCarouselScene } from "@/components/HeroCarouselScene";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_COMECAR, WA_DIAGNOSTICO } from "@/lib/links";

// ── Você se identifica? ────────────────────────────────────────────────────
const painPoints = [
  "Precisa abrir várias planilhas para entender o desempenho da empresa",
  "Perde horas consolidando relatórios manualmente",
  "Cada área apresenta números diferentes para o mesmo indicador",
  "As informações chegam tarde demais para agir",
  "Falta confiança nos dados utilizados nas reuniões",
  "Sua equipe gasta tempo produzindo relatórios em vez de analisá-los",
];

// ── Imagine começar o dia com respostas prontas ────────────────────────────
const morningAnswers = [
  "Como estão os principais indicadores do negócio",
  "Onde existem desvios em relação às metas",
  "Quais áreas exigem atenção imediata",
  "Como a operação evoluiu ao longo do tempo",
  "Onde estão as maiores oportunidades de melhoria",
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
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero">
          <div>
            <p className="section-eyebrow reveal-up">Loyal Consulting · Business Intelligence</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ textWrap: "auto" }}>
              Pare de gerenciar<br />
              seu negócio olhando<br />
              inúmeras planilhas
            </h1>
            <p className="ts-hero-sub reveal-up">
              A gente junta suas planilhas e sistemas em um painel só, que se atualiza
              sozinho e mostra o que está acontecendo, sem retrabalho e sem achismo.
            </p>
            <p className="ts-hero-copy reveal-up">
              <strong>
                Enxergue a floresta e também cada folha do seu negócio, em uma única tela.
              </strong>
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Quero um diagnóstico gratuito
              </a>
              <Link href="/como-funciona" className="btn-outline">
                Ver como funciona
              </Link>
            </div>
          </div>
          <div className="ts-hero-visual" style={{ paddingBottom: "2rem" }}>
            <HeroCarouselScene />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <MarqueeBand />

      {/* ── VOCÊ SE IDENTIFICA? ─────────────────────────────── */}
      <section id="identifica" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Você se identifica?</p>
            <h2 className="section-title mt-3">Você se identifica com alguma dessas situações?</h2>
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
                Se pelo menos duas dessas situações fazem parte da sua rotina...
              </p>
              <h3 className="section-title" style={{ fontSize: "1.2rem" }}>
                ...dá para automatizar isso e devolver horas para a sua equipe
              </h3>
              <div className="mt-8">
                <a href={WA_DIAGNOSTICO} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Quero um diagnóstico gratuito
                </a>
                <p className="mt-3" style={{ fontSize: "0.82rem", color: "rgba(240,237,232,0.5)" }}>
                  Direto no WhatsApp · Sem compromisso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGINE COMEÇAR O DIA COM RESPOSTAS PRONTAS ─────── */}
      <section id="imagine" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14">
            <div>
              <p className="section-eyebrow">O outro lado</p>
              <h2 className="section-title mt-3">Imagine começar o dia com respostas prontas</h2>
              <p className="section-copy mt-4">
                Em vez de caçar números em vários arquivos, você abre uma tela e vê na hora:
              </p>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <ul className="lc-consequences-list">
                {morningAnswers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="section-copy mt-10" style={{ color: "rgba(240,237,232,0.85)", fontWeight: 600 }}>
                Tudo em um único painel.
              </p>
            </div>
          </div>
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

      {/* ── SOBRE A LOYAL ───────────────────────────────────── */}
      <section id="sobre" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14">
            <div>
              <p className="section-eyebrow">Sobre a Loyal</p>
              <h2 className="section-title mt-3">Uma consultoria boutique de Business Intelligence</h2>
            </div>
            <div>
              <p className="section-copy">
                São 10 anos de operações em dados, vendo de perto como áreas inteiras (até em
                empresas bilionárias) operam às cegas mesmo tendo abundância de informações.
              </p>
              <p className="section-copy mt-8">
                Trabalhamos lado a lado com diretores, gerentes, coordenadores e supervisores para
                transformar planilhas e sistemas desconectados em decisões mais rápidas e
                confiáveis. Projetos enxutos, entregas práticas, sem complexidade desnecessária.
              </p>
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
            &ldquo;Pare de passar horas abrindo planilhas para entender como vai o
            negócio. Passe a ter um único painel com as respostas prontas,
            atualizado sozinho, sem retrabalho.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Business Intelligence</span>
        </div>
      </div>

      {/* ── DISCOVERY ───────────────────────────────────────── */}
      <section id="discovery" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14">
            <div>
              <p className="section-eyebrow">Próximo passo</p>
              <h2 className="section-title mt-3">Quer ver isso aplicado à sua realidade?</h2>
              <p className="section-copy mt-4">
                A Discovery é uma conversa gratuita de 30 minutos para entender sua rotina,
                escolher os números que importam e desenhar o caminho até o seu painel.
              </p>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <p className="lc-dores-while-title lc-dores-while-title--cool">Vale se você:</p>
              <ul className="lc-consequences-list mt-3">
                <li>Sente que está tomando decisões no escuro</li>
                <li>Sabe que o processo atual não escala (mas não sabe por onde começar)</li>
                <li>Quer entender o que é possível antes de qualquer compromisso</li>
              </ul>
              <div className="mt-6">
                <Link href="/discovery" className="btn-accent">
                  Solicitar Discovery
                </Link>
                <p className="mt-3" style={{ fontSize: "0.78rem", color: "rgba(240,237,232,0.5)" }}>
                  Conversa gratuita de 30 minutos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Vamos descobrir como simplificar a gestão dos seus dados?</h2>
          <p className="lc-cta-sub">
            Fale com a gente no WhatsApp e receba uma recomendação personalizada sobre os
            próximos passos.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_COMECAR} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Quero começar
            </a>
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

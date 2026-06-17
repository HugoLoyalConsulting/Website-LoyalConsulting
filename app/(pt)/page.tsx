import Image from "next/image";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { HeroBackgroundSlideshow } from "@/components/HeroBackgroundSlideshow";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_DISCOVERY } from "@/lib/links";

const serviceLines = [
  {
    title: "Analise de Dados",
    body: "Transformamos dados brutos em indicadores que apoiam decisoes mais rapidas e seguras.",
    value: "Visibilidade",
  },
  {
    title: "Engenharia de Dados",
    body: "Integramos planilhas, sistemas e bancos de dados em processos automatizados e escalaveis.",
    value: "Centralizacao e automacao",
  },
  {
    title: "Visualizacao de Dados",
    body: "Construimos dashboards executivos que mostram o que realmente importa para o negocio.",
    value: "Confiabilidade",
  },
];

const painPoints = [
  "Cada area apresenta numeros diferentes",
  "Relatorios exigem trabalho manual",
  "Informacoes chegam atrasadas",
  "Decisoes dependem de planilhas paralelas",
  "Falta uma visao unica do negocio",
];

const whoIsFor = [
  "Diretores",
  "Gerentes",
  "Coordenadores",
  "Empresas entre 20 e 500 colaboradores",
  "Times que ja possuem dados, mas ainda nao possuem inteligencia operacional sobre eles",
];

const discoveryItems = [
  "Como seus dados sao gerados",
  "Onde estao os gargalos",
  "Quais indicadores realmente importam",
  "Como reduzir a dependencia de planilhas",
];

const processSteps = [
  {
    num: "01",
    title: "Mapeamento",
    body: "Levantamos fontes, indicadores e prioridades de decisao.",
  },
  {
    num: "02",
    title: "Integracao",
    body: "Centralizamos os dados em um fluxo confiavel e automatizado.",
  },
  {
    num: "03",
    title: "Gestao",
    body: "Entregamos paineis executivos para acompanhar o negocio em tempo real.",
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

      {/* HERO */}
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
          <div style={{ maxWidth: "760px" }}>
            <p className="section-eyebrow reveal-up">Loyal Consulting · Consultoria Boutique em Dados</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ textWrap: "auto" }}>
              Transforme planilhas dispersas em uma operacao orientada por dados.
            </h1>
            <p className="ts-hero-sub reveal-up">
              Centralizamos informacoes de planilhas, ERPs, CRMs e sistemas internos para criar
              uma unica fonte confiavel para analise, automacao e tomada de decisao.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_DISCOVERY} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Agendar Discovery
              </a>
              <Link href="/exemplos" className="btn-outline">
                Ver exemplos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM VAI TE AJUDAR */}
      <section id="sobre" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14" style={{ alignItems: "center" }}>
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
                alt="Hugo Leal em ambiente profissional analisando indicadores"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </figure>
            <div>
              <p className="section-eyebrow">Quem vai te ajudar</p>
              <h2 className="section-title mt-3">Hugo Leal</h2>
              <p className="section-copy" style={{ marginTop: "0.75rem", fontWeight: 600 }}>
                Fundador da Loyal Consulting
              </p>
              <p className="section-copy" style={{ marginTop: "1.6rem" }}>
                Ha mais de 10 anos atuando com dados, automacao e inteligencia de negocios em
                empresas de grande porte.
              </p>
              <p className="section-copy" style={{ marginTop: "1.2rem" }}>
                Ao longo da carreira, percebi um padrao: a maioria das empresas nao sofre por
                falta de dados. Sofre por excesso de planilhas, sistemas desconectados e
                informacoes dificeis de confiar.
              </p>
              <p className="section-copy" style={{ marginTop: "1.2rem" }}>
                A Loyal nasceu para resolver exatamente isso.
              </p>
              <div className="mt-8">
                <a href={WA_DISCOVERY} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Quero conversar com o Hugo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE FAZEMOS */}
      <section id="servicos" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">O que fazemos</p>
            <h2 className="section-title mt-3">Nao vendemos dashboard. Entregamos operacao orientada por dados.</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {serviceLines.map((item) => (
              <div key={item.title} className="lc-how-step">
                <h3 className="lc-how-title">{item.title}</h3>
                <p className="lc-how-body">{item.body}</p>
                <div className="lc-how-tags">
                  <span className="lc-how-tag">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section id="problemas" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14">
            <div>
              <p className="section-eyebrow">Problemas que resolvemos</p>
              <h2 className="section-title mt-3">Sua operacao gera dados. Mas voce consegue confiar neles?</h2>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <ul className="lc-consequences-list">
                {painPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ANTES E DEPOIS */}
      <section id="antes-depois" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Antes e depois</p>
            <h2 className="section-title mt-3">Da maratona de planilhas a uma unica tela</h2>
          </div>
          <div className="lc-beforeafter-grid mt-12">
            <figure className="lc-ba-card lc-ba-card--antes">
              <span className="lc-ba-label lc-ba-label--antes">× Antes</span>
              <div className="lc-ba-img">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/antes-caos-planilhas-excel.png`}
                  alt="Varias planilhas de Excel abertas ao mesmo tempo na mesma tela"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "top left" }}
                />
              </div>
              <figcaption className="lc-ba-caption">
                Varios arquivos abertos, abas duplicadas e horas de copia-e-cola para
                responder uma unica pergunta.
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
                Um painel que se atualiza sozinho: a visao geral e o detalhe, no mesmo lugar,
                sem depender de ninguem para preparar.
              </figcaption>
            </figure>
          </div>
          <div className="lc-como-wrapper">
            <p className="lc-ba-label lc-ba-label--como" style={{ marginBottom: "0.75rem" }}>
              COMO FUNCIONA
            </p>
            <ZoomableImage
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/pipeline-dados-centralizado.png`}
              alt="Diagrama mostrando sistemas desconectados sendo centralizados em um Data Lake e alimentando dashboards de indicadores"
              caption="De fontes desconectadas a decisoes: como centralizamos seus dados em um unico pipeline confiavel."
              wrapperStyle={{
                border: "5px solid rgba(240,237,232,0.7)",
                boxShadow: "0 22px 48px rgba(240,237,232,0.15), 0 0 28px rgba(240,237,232,0.12)",
              }}
            />
          </div>
        </div>
      </section>

      {/* PARA QUEM E */}
      <section id="para-quem" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14">
            <div>
              <p className="section-eyebrow">Para quem e</p>
              <h2 className="section-title mt-3">Ideal para liderancas que precisam decidir com velocidade</h2>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <ul className="lc-consequences-list">
                {whoIsFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Como funciona</p>
            <h2 className="section-title mt-3">Um caminho claro da fonte de dados ate a decisao</h2>
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
          <div className="lc-como-wrapper">
            <p className="lc-ba-label lc-ba-label--como" style={{ marginBottom: "0.75rem" }}>
              ARQUITETURA DE REFERENCIA
            </p>
            <ZoomableImage
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/pipeline-dados-centralizado.png`}
              alt="Diagrama de centralizacao de dados e camada analitica executiva"
              caption="Centralizacao, governanca e visualizacao em uma arquitetura unica para apoiar decisoes de negocio."
              wrapperStyle={{
                border: "5px solid rgba(240,237,232,0.7)",
                boxShadow: "0 22px 48px rgba(240,237,232,0.15), 0 0 28px rgba(240,237,232,0.12)",
              }}
            />
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section id="discovery" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14">
            <div>
              <p className="section-eyebrow">Discovery estrategica</p>
              <h2 className="section-title mt-3">Uma reuniao para definir o seu proximo passo com dados</h2>
              <p className="section-copy mt-4">
                Ao final da conversa, voce sai com um plano inicial de evolucao analitica para
                sua empresa.
              </p>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <ul className="lc-consequences-list">
                {discoveryItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-6">
                <a href={WA_DISCOVERY} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Agendar Discovery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Pronto para transformar seus dados em uma vantagem competitiva?</h2>
          <p className="lc-cta-sub">
            A maioria das empresas ja possui os dados necessarios para crescer. O problema e que
            eles estao espalhados. Vamos identificar o caminho mais rapido para centralizar,
            automatizar e transformar esses dados em decisoes melhores.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_DISCOVERY} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Agendar Discovery
            </a>
          </div>
          <p className="mt-3" style={{ fontSize: "0.78rem", color: "rgba(240,237,232,0.5)" }}>
            Sem custo inicial. Sem compromisso.
          </p>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stackCards = [
  {
    tag: "01 — Visibilidade",
    title: "Leitura de pipeline em tempo real",
    text: "Executivos acompanham metas, gaps e projeções sem esperar fechamento manual de relatórios.",
    image: "https://www.imensosoftware.com/wp-content/uploads/2022/07/1.webp",
  },
  {
    tag: "02 — Confiança",
    title: "Camada única de dados reconciliados",
    text: "Múltiplas fontes centralizadas: CRM, ERP, planilhas e APIs falam a mesma língua.",
    image: "https://i0.wp.com/www.phdata.io/wp-content/uploads/2022/08/Web-Traffic-Power-BI-Dashboard-Example-Screenshot.png",
  },
  {
    tag: "03 — Automação",
    title: "Pipeline que atualiza sem intervenção",
    text: "ETL em Python, dbt e Azure Data Factory — dados corretos sempre disponíveis sem retrabalho.",
    image: "/svg/etl-pipeline.svg",
  },
];

export function TasteDesireMotion() {
  const rootRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(".stack-card", rootRef.current);

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 64, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Subtle parallax on images
      const imgs = gsap.utils.toArray<HTMLElement>(".stack-card-img", rootRef.current);
      imgs.forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 0.94 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              end: "bottom 10%",
              scrub: 1,
            },
          }
        );
      });
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} id="solucao" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-32">
      <div className="section-divider" />
      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        {/* Left: sticky title */}
        <div className="desire-sticky-title">
          <p className="section-eyebrow">Desejo</p>
          <h2 className="section-title mt-4">
            A operação ideal começa pelo dado.
          </h2>
          <p className="section-copy mt-6">
            Estruturamos dados, automações e dashboards para que decisões aconteçam por sinal — não por intuição.
          </p>
          <div className="mt-8 h-px w-12" style={{ background: "#6c63ff" }} />
          <p className="mt-6 text-sm" style={{ color: "rgba(240,237,232,0.4)", lineHeight: 1.7 }}>
            Clientes com pipeline estruturado reduzem o ciclo de decisão em até 60% no primeiro trimestre.
          </p>
        </div>

        {/* Right: stacking cards */}
        <div className="flex flex-col gap-6">
          {stackCards.map((card) => (
            <article key={card.title} className="stack-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.title}
                className="stack-card-img"
                loading="lazy"
              />
              <div className="stack-card-body">
                <p
                  style={{
                    margin: "0 0 0.55rem",
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#6c63ff",
                    fontWeight: 700,
                  }}
                >
                  {card.tag}
                </p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";

type Card = { src: string; label: string };

const CYCLE_MS = 5200;

const IMAGES: Card[] = [
  { src: "/images/dashboard-powerbi-vendas.png",        label: "Power BI — Sales Report multi-dispositivo" },
  { src: "/images/dashboard-monitor-colorido.jpg",      label: "Dashboard analítico em monitor"            },
  { src: "/images/apresentacao-bi-reuniao-executiva.jpg",label: "Apresentação de BI em reunião executiva"   },
  { src: "/images/executivo-painel-wall.jpg",           label: "Executivo com painel wall de indicadores"  },
  { src: "/images/dashboard-powerbi-timeline.jpg",      label: "Power BI com timeline e mapa"              },
  { src: "/images/laptop-analytics-angulo.jpg",         label: "Analytics operacional em laptop"            },
  { src: "/images/dashboard-comunicacao-interna.png",   label: "Dashboard de comunicação interna"          },
  { src: "/images/dashboard-ui-kpis.webp",              label: "Interface de KPIs — dark UI"               },
  { src: "/images/analista-bi-monitores-duplos.jpg",    label: "Analista com monitores duplos de BI"       },
  { src: "/images/laptop-analytics-aberto.jpg",         label: "Dashboard analytics em laptop"             },
  { src: "/images/apresentacao-dashboard-apontando.jpg", label: "Apresentação de dashboard para diretoria"  },
  { src: "/images/monitor-dados-futurista.jpg",         label: "Painel de indicadores em monitor"           },
];

function pick(items: Card[], index: number): Card {
  const len = items.length;
  const safeIndex = ((index % len) + len) % len;
  return items[safeIndex];
}

function qBezier(a: number, c: number, b: number, t: number): number {
  const it = 1 - t;
  return (it * it * a) + (2 * it * t * c) + (t * t * b);
}

function mod1(value: number): number {
  return ((value % 1) + 1) % 1;
}

function CurvedCarousel({ motion }: { motion: number }) {
  const cards = useMemo(() => {
    return [0, 1, 2].map((lane) => {
      const logical = motion + (lane / 3);
      const progress = mod1(logical);
      // Sequential gallery: multiply by 3 so each 1/3-cycle step = one new image.
      // This ensures all 3 visible lanes always show 3 consecutive, distinct images.
      const imgIndex = ((Math.floor(logical * 3) % IMAGES.length) + IMAGES.length) % IMAGES.length;
      const card = IMAGES[imgIndex];

      // Quarter-arc path: top-center -> center-left curve -> bottom-right.
      const x = qBezier(48, 30, 86, progress);
      const y = qBezier(7, 60, 86, progress);

      // Smooth zoom: grows until middle and softly shrinks near the end.
      const peak = Math.exp(-Math.pow((progress - 0.52) / 0.22, 2));
      const scale = 0.52 + (0.72 * peak);   // edges: 0.52×, peak: 1.24×
      const opacity = 0.22 + (0.73 * peak); // darker base (0.22) → feels like a gallery

      return {
        key: `${lane}-${imgIndex}`,
        card,
        x,
        y,
        scale,
        opacity,
        zIndex: Math.round(10 + (50 * peak)),
      };
    });
  }, [motion]);

  return (
    <div className="hca-track" aria-live="off">
      {cards.map((item) => {
        return (
          <div
            key={item.key}
            className="hca-orb"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              transform: `translate(-50%, -50%) scale(${item.scale})`,
              opacity: item.opacity,
              zIndex: item.zIndex,
            }}
          >
            <div className="hca-vcard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.card.src} alt={item.card.label} loading="eager" />
              <span className="hca-vcap">{item.card.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function HeroCarouselAuto() {
  const [motion, setMotion] = useState(0);

  useEffect(() => {
    let frame = 0;
    let rafId = 0;
    let start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      frame = (elapsed / CYCLE_MS);
      setMotion(frame);
      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
      start = 0;
    };
  }, []);

  return (
    <div className="hca-root" aria-label="Amostras de trabalho — Loyal Consulting">
      <CurvedCarousel motion={motion} />
    </div>
  );
}


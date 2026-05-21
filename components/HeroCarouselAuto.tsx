"use client";

import { useEffect, useRef } from "react";

type Card = { src: string; label: string };

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const CYCLE_MS = 5200;
const LANES = 3;

const IMAGES: Card[] = [
  { src: "/images/dashboard-powerbi-vendas.png",         label: "Power BI — Sales Report multi-dispositivo" },
  { src: "/images/dashboard-monitor-colorido.jpg",       label: "Dashboard analítico em monitor"            },
  { src: "/images/apresentacao-bi-reuniao-executiva.jpg", label: "Apresentação de BI em reunião executiva"   },
  { src: "/images/executivo-painel-wall.jpg",            label: "Executivo com painel wall de indicadores"  },
  { src: "/images/dashboard-powerbi-timeline.jpg",       label: "Power BI com timeline e mapa"              },
  { src: "/images/laptop-analytics-angulo.jpg",          label: "Analytics operacional em laptop"           },
  { src: "/images/dashboard-comunicacao-interna.png",    label: "Dashboard de comunicação interna"          },
  { src: "/images/dashboard-ui-kpis.webp",               label: "Interface de KPIs — dark UI"               },
  { src: "/images/analista-bi-monitores-duplos.jpg",     label: "Analista com monitores duplos de BI"       },
  { src: "/images/laptop-analytics-aberto.jpg",          label: "Dashboard analytics em laptop"             },
  { src: "/images/apresentacao-dashboard-apontando.jpg", label: "Apresentação de dashboard para diretoria"  },
  { src: "/images/monitor-dados-futurista.jpg",          label: "Painel de indicadores em monitor"          },
];

function qBezier(a: number, c: number, b: number, t: number): number {
  const it = 1 - t;
  return it * it * a + 2 * it * t * c + t * t * b;
}

function mod1(v: number): number {
  return ((v % 1) + 1) % 1;
}

export function HeroCarouselAuto() {
  const orbRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([null, null, null]);
  const capRefs = useRef<(HTMLSpanElement | null)[]>([null, null, null]);
  const imgIndexRef = useRef<number[]>([0, 1, 2]);

  useEffect(() => {
    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const motion = (now - start) / CYCLE_MS;

      for (let lane = 0; lane < LANES; lane++) {
        const logical = motion + lane / LANES;
        const progress = mod1(logical);

        const imgIndex = ((Math.floor(logical * LANES) % IMAGES.length) + IMAGES.length) % IMAGES.length;

        // Only swap image src when it actually changes — avoids layout thrash
        if (imgIndexRef.current[lane] !== imgIndex) {
          imgIndexRef.current[lane] = imgIndex;
          const img = imgRefs.current[lane];
          const cap = capRefs.current[lane];
          if (img) { img.src = `${BASE}${IMAGES[imgIndex].src}`; img.alt = IMAGES[imgIndex].label; }
          if (cap) cap.textContent = IMAGES[imgIndex].label;
        }

        const peak = Math.exp(-Math.pow((progress - 0.52) / 0.22, 2));
        const scale   = 0.52 + 0.72 * peak;
        const opacity = 0.22 + 0.73 * peak;
        const x = qBezier(48, 30, 86, progress);
        const y = qBezier(7,  60, 86, progress);

        const orb = orbRefs.current[lane];
        if (orb) {
          orb.style.left      = `${x}%`;
          orb.style.top       = `${y}%`;
          orb.style.transform = `translate(-50%,-50%) scale(${scale.toFixed(4)})`;
          orb.style.opacity   = opacity.toFixed(4);
          orb.style.zIndex    = String(Math.round(10 + 50 * peak));
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="hca-root" aria-label="Amostras de trabalho — Loyal Consulting">
      <div className="hca-track" aria-live="off">
        {([0, 1, 2] as const).map((lane) => (
          <div
            key={lane}
            ref={(el) => { orbRefs.current[lane] = el; }}
            className="hca-orb"
            style={{ left: "48%", top: "7%", transform: "translate(-50%,-50%) scale(0.52)", opacity: 0.22, zIndex: 10 }}
          >
            <div className="hca-vcard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={(el) => { imgRefs.current[lane] = el; }}
                src={`${BASE}${IMAGES[lane].src}`}
                alt={IMAGES[lane].label}
                loading="eager"
              />
              <span ref={(el) => { capRefs.current[lane] = el; }} className="hca-vcap">
                {IMAGES[lane].label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


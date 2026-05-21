"use client";

import { useEffect, useRef } from "react";

type Card = { src: string };

const BASE      = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const CYCLE_MS  = 4800;   // full cycle per slot
const LANES     = 3;
const FPS_CAP   = 30;
const FRAME_MS  = 1000 / FPS_CAP;
const SIGMA     = 0.09;   // very tight → only ONE card visible at a time

const IMAGES: Card[] = [
  { src: "/images/dashboard-powerbi-vendas.png"         },
  { src: "/images/dashboard-monitor-colorido.jpg"       },
  { src: "/images/apresentacao-bi-reuniao-executiva.jpg" },
  { src: "/images/executivo-painel-wall.jpg"            },
  { src: "/images/dashboard-powerbi-timeline.jpg"       },
  { src: "/images/laptop-analytics-angulo.jpg"          },
  { src: "/images/dashboard-comunicacao-interna.png"    },
  { src: "/images/dashboard-ui-kpis.webp"               },
  { src: "/images/analista-bi-monitores-duplos.jpg"     },
  { src: "/images/laptop-analytics-aberto.jpg"          },
  { src: "/images/apresentacao-dashboard-apontando.jpg" },
  { src: "/images/monitor-dados-futurista.jpg"          },
];

function mod1(v: number): number {
  return ((v % 1) + 1) % 1;
}

export function HeroCarouselAuto() {
  const orbRefs   = useRef<(HTMLDivElement   | null)[]>([null, null, null]);
  const imgRefs   = useRef<(HTMLImageElement | null)[]>([null, null, null]);
  const imgIdxRef = useRef<number[]>([0, 1, 2]);

  useEffect(() => {
    // Pre-load every image so src-swaps are instant
    IMAGES.forEach(({ src }) => { const i = new Image(); i.src = `${BASE}${src}`; });

    let rafId  = 0;
    let lastTs = -1;
    const start = performance.now();

    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick);
      if (now - lastTs < FRAME_MS) return;
      lastTs = now;

      const motion = (now - start) / CYCLE_MS;

      for (let lane = 0; lane < LANES; lane++) {
        const logical  = motion + lane / LANES;
        const progress = mod1(logical);

        // Swap to next image when the counter advances
        const imgIndex = ((Math.floor(logical * LANES) % IMAGES.length) + IMAGES.length) % IMAGES.length;
        if (imgIdxRef.current[lane] !== imgIndex) {
          imgIdxRef.current[lane] = imgIndex;
          const img = imgRefs.current[lane];
          if (img) { img.src = `${BASE}${IMAGES[imgIndex].src}`; img.alt = ""; }
        }

        // Tight Gaussian centred at 0.5: only ONE card is "large" at any moment
        const peak    = Math.exp(-Math.pow((progress - 0.5) / SIGMA, 2));
        const scale   = 0.02 + 0.98 * peak;   // 2 % (minúsculo) → 100 % (preenche tudo)
        const opacity = Math.min(1, peak * 1.4);

        const orb = orbRefs.current[lane];
        if (orb) {
          orb.style.transform = `scale(${scale.toFixed(4)})`;
          orb.style.opacity   = opacity.toFixed(4);
          orb.style.zIndex    = String(Math.round(10 + 50 * peak));
        }
      }
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
            style={{ transform: "scale(0.02)", opacity: 0, zIndex: 10 }}
          >
            <div className="hca-vcard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={(el) => { imgRefs.current[lane] = el; }}
                src={`${BASE}${IMAGES[lane].src}`}
                alt=""
                loading="eager"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


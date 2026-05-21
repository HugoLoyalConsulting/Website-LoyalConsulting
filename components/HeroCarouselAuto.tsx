"use client";

import { useEffect, useRef } from "react";

type Card = { src: string; label: string };

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const CYCLE_MS = 5200;
const LANES = 3;
const FPS_CAP = 30;
const FRAME_MS = 1000 / FPS_CAP;

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
  const rootRef  = useRef<HTMLDivElement>(null);
  const orbRefs  = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const imgRefs  = useRef<(HTMLImageElement | null)[]>([null, null, null]);
  const capRefs  = useRef<(HTMLSpanElement | null)[]>([null, null, null]);
  const imgIdxRef = useRef<number[]>([0, 1, 2]);
  const sizeRef  = useRef({ w: 560, h: 510 });

  useEffect(() => {
    // Measure container (pixel coords avoid layout-triggering left/top writes)
    const root = rootRef.current;
    if (root) {
      const measure = () => {
        const r = root.getBoundingClientRect();
        sizeRef.current = { w: r.width || 560, h: r.height || 510 };
      };
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(root);
    }

    // Pre-load all images so src swaps are instant
    IMAGES.forEach(({ src }) => { const i = new Image(); i.src = `${BASE}${src}`; });

    let rafId = 0;
    let lastTs = -1;
    const start = performance.now();

    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick);

      // Throttle to FPS_CAP
      if (now - lastTs < FRAME_MS) return;
      lastTs = now;

      const motion = (now - start) / CYCLE_MS;
      const { w, h } = sizeRef.current;

      for (let lane = 0; lane < LANES; lane++) {
        const logical  = motion + lane / LANES;
        const progress = mod1(logical);

        const imgIndex = ((Math.floor(logical * LANES) % IMAGES.length) + IMAGES.length) % IMAGES.length;

        if (imgIdxRef.current[lane] !== imgIndex) {
          imgIdxRef.current[lane] = imgIndex;
          const img = imgRefs.current[lane];
          const cap = capRefs.current[lane];
          if (img) { img.src = `${BASE}${IMAGES[imgIndex].src}`; img.alt = IMAGES[imgIndex].label; }
          if (cap) cap.textContent = IMAGES[imgIndex].label;
        }

        const peak    = Math.exp(-Math.pow((progress - 0.52) / 0.22, 2));
        const scale   = 0.52 + 0.72 * peak;
        const opacity = 0.22 + 0.73 * peak;

        // Pixel coords → only transform changes, zero layout reflow
        const xPx = (qBezier(48, 30, 86, progress) / 100) * w;
        const yPx = (qBezier(7,  60, 86, progress) / 100) * h;

        const orb = orbRefs.current[lane];
        if (orb) {
          orb.style.transform = `translate(${xPx.toFixed(1)}px,${yPx.toFixed(1)}px) translate(-50%,-50%) scale(${scale.toFixed(3)})`;
          orb.style.opacity   = opacity.toFixed(3);
          orb.style.zIndex    = String(Math.round(10 + 50 * peak));
        }
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div ref={rootRef} className="hca-root" aria-label="Amostras de trabalho — Loyal Consulting">
      <div className="hca-track" aria-live="off">
        {([0, 1, 2] as const).map((lane) => (
          <div
            key={lane}
            ref={(el) => { orbRefs.current[lane] = el; }}
            className="hca-orb"
            style={{ transform: "translate(0,0) translate(-50%,-50%) scale(0.52)", opacity: 0.22, zIndex: 10 }}
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


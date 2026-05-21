"use client";

import { useEffect, useRef } from "react";

type Card = { src: string };

const BASE         = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const SCROLL_SPEED = 70;  // px / second upward — increase to go faster
const GAP          = 14;  // px between cards — must match CSS gap

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

const N         = IMAGES.length;           // 12
const ALL_CARDS = [...IMAGES, ...IMAGES];  // duplicate for seamless loop

export function HeroCarouselAuto() {
  const rootRef  = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef   = useRef(0);
  const lastTsRef = useRef(-1);
  const sizeRef  = useRef({ h: 510, cardH: 188 });

  useEffect(() => {
    IMAGES.forEach(({ src }) => { const i = new Image(); i.src = `${BASE}${src}`; });

    const root = rootRef.current;
    if (root) {
      const measure = () => {
        const h = root.clientHeight || 510;
        const cardH = Math.round(h * 0.37);
        sizeRef.current = { h, cardH };
        root.style.setProperty("--hca-card-h", `${cardH}px`);
      };
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(root);
    }

    let rafId = 0;

    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick);

      if (lastTsRef.current < 0) { lastTsRef.current = now; return; }
      const dt = Math.min(now - lastTsRef.current, 50);
      lastTsRef.current = now;

      const track = trackRef.current;
      if (!track) return;

      posRef.current -= (SCROLL_SPEED * dt) / 1000;

      const { h: containerH, cardH } = sizeRef.current;
      const stride = cardH + GAP;
      const loopH  = N * stride;

      // Seamless loop: once first copy is fully gone, snap back
      if (posRef.current < -loopH) posRef.current += loopH;

      track.style.transform = `translateY(${posRef.current.toFixed(1)}px)`;

      // Scale + opacity each card by distance from vertical centre
      const centerY = containerH / 2;
      for (let i = 0; i < ALL_CARDS.length; i++) {
        const el         = track.children[i] as HTMLElement;
        const cardCenter = posRef.current + i * stride + cardH / 2;
        const dist       = Math.abs(cardCenter - centerY);
        const norm       = Math.min(dist / (containerH * 0.5), 1);

        el.style.transform = `scale(${(1 - 0.18 * norm).toFixed(4)})`;
        el.style.opacity   = (1 - 0.72 * norm).toFixed(4);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div ref={rootRef} className="hca-root" aria-label="Amostras de trabalho — Loyal Consulting">
      <div ref={trackRef} className="hca-track">
        {ALL_CARDS.map((img, i) => (
          <div key={i} className="hca-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE}${img.src}`} alt="" loading="eager" />
          </div>
        ))}
      </div>
    </div>
  );
}



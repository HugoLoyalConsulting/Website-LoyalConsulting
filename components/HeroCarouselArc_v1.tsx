"use client";

/**
 * HeroCarouselArc — arco suave via requestAnimationFrame
 *
 * Mesmo padrão de animação do HeroImageReel original:
 * phase avança continuamente em RAF; cada card recebe sua posição
 * calculada pela fórmula do arco. Sem setInterval, sem React state,
 * sem Framer Motion — apenas DOM style updates diretos.
 *
 * Trajetória: cima-esquerda → centro (max zoom) → direita
 * Sem sobreposição: STEP_DEG = 44° garante gap mínimo de ~50px
 */

import { useEffect, useRef } from "react";
import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const IMAGES = [
  "dashboard-comunicacao-interna.png",
  "dashboard-monitor-colorido.jpg",
  "dashboard-powerbi-timeline.jpg",
  "dashboard-ui-kpis.webp",
  "analista-bi-monitores-duplos.jpg",
  "analistas-revisando-dashboard.jpg",
  "apresentacao-bi-reuniao-executiva.jpg",
  "apresentacao-bi-reuniao-masculino.jpg",
  "apresentacao-dashboard-apontando.jpg",
  "executivo-painel-wall.jpg",
  "ipad-google-analytics.jpg",
  "laptop-analytics-aberto.jpg",
  "laptop-analytics-angulo.jpg",
  "monitor-dados-futurista.jpg",
  "documentos-gestao-projetos.jpg",
  "relatorio-financeiro-impresso.jpg",
  "relatorios-impressos-mesa.jpg",
];

const N     = IMAGES.length;
const SPEED = 0.18; // imagens por segundo → ciclo completo em ~100 s

// ── Dimensões do card (landscape 16:9) ────────────────────────────────────
const CARD_W = 280;
const CARD_H = 158;

// ── Parâmetros do arco ────────────────────────────────────────────────────
// cx(θ) = ENTRY_X + R·(1 − cos θ)
// cy(θ) = ENTRY_Y + R·sin θ
// slot 0 fica em BASE_DEG; adjacentes a ±STEP_DEG
const R        = 380;
const ENTRY_X  = 0;
const ENTRY_Y  = -120;
const BASE_DEG = 55;
const STEP_DEG = 44;

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

function getProps(rel: number) {
  // Normaliza para o intervalo mais próximo de 0
  let r = ((rel % N) + N) % N;
  if (r > N / 2) r -= N;

  const deg = BASE_DEG + r * STEP_DEG;
  const rad = (deg * Math.PI) / 180;
  const cx  = ENTRY_X + R * (1 - Math.cos(rad));
  const cy  = ENTRY_Y + R * Math.sin(rad);

  const ar      = Math.abs(r);
  // Fade suave: opaco no centro, desaparece gradualmente ao se afastar de ±2
  const opacity = ar >= 2.1
    ? 0
    : ar >= 1.7
      ? lerp(Math.max(0.55, 1 - 1.7 * 0.32), 0, (ar - 1.7) / 0.4)
      : Math.max(0.55, 1 - ar * 0.32);
  const scale   = Math.max(0.30, 1 - ar * 0.38);
  const zIndex  = Math.max(0, Math.round(10 - ar * 3));

  return {
    x: cx - CARD_W / 2,
    y: cy - CARD_H / 2,
    scale,
    opacity,
    zIndex,
  };
}

export function HeroCarouselArc() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef   = useRef<number>(0);
  const phase    = useRef(0);
  const prevTs   = useRef<number | null>(null);

  useEffect(() => {
    function frame(ts: number) {
      if (prevTs.current !== null) {
        const dt = (ts - prevTs.current) / 1000;
        // phase cresce → cada card move de cima para o centro e depois para a direita
        phase.current = (phase.current + SPEED * dt) % N;

        cardRefs.current.forEach((el, idx) => {
          if (!el) return;
          const { x, y, scale, opacity, zIndex } = getProps(phase.current - idx);
          el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
          el.style.opacity   = String(opacity);
          el.style.zIndex    = String(zIndex);
        });
      }
      prevTs.current = ts;
      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="hca2-root" aria-hidden="true">
      {IMAGES.map((img, idx) => (
        <div
          key={img}
          ref={el => { cardRefs.current[idx] = el; }}
          className="hca2-card"
          style={{ opacity: 0 }}
        >
          <div className="hca2-img-wrap">
            <Image
              src={`${BASE}/images/${img}`}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 640px) 160px, 280px"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

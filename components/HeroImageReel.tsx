"use client";

/**
 * HeroImageReel
 *
 * A slow, constant, vertical image reel. Images scroll upward
 * at a fixed speed with no jumps or state transitions.
 *
 * Technique: the IMAGES array is duplicated (38 items total).
 * CSS animates from translateY(0) → translateY(-50%).
 * At -50%, we've scrolled exactly one copy's worth of height
 * (each item = image height + margin-bottom, so the per-item
 * measurement is uniform and the loop is perfectly seamless).
 */

import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const IMAGES = [
  "dashboard-powerbi-vendas.png",
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
  "grafico-crescimento-abstrato.jpg",
  "ipad-google-analytics.jpg",
  "laptop-analytics-aberto.jpg",
  "laptop-analytics-angulo.jpg",
  "monitor-dados-futurista.jpg",
  "documentos-gestao-projetos.jpg",
  "relatorio-financeiro-impresso.jpg",
  "relatorios-impressos-mesa.jpg",
];

export function HeroImageReel() {
  // Duplicate for seamless infinite loop.
  // Each item height is fixed (16:9 @ 340px = 191px) + 12px margin-bottom.
  // Per-item slot = 203px. 19 items × 203px = 3857px per copy.
  // translateY(-50%) = -50% of track height (38 × 203 = 7714px) = -3857px.
  // At -3857px, copy-2 item-0 is exactly at the top → seamless.
  const doubled = [...IMAGES, ...IMAGES];

  return (
    <div className="hir-root" aria-hidden="true">
      <div className="hir-track">
        {doubled.map((img, i) => (
          <div key={i} className="hir-item">
            <div className="hir-img-wrap">
              <Image
                src={`${BASE}/images/${img}`}
                alt=""
                fill
                sizes="340px"
                className="hir-img"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

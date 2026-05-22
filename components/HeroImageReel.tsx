"use client";

/**
 * HeroImageReel
 *
 * Continuous diagonal image reel — images flow from top to bottom
 * along a tilted strip (rotate -12°). No state, no JS timers:
 * pure CSS animation.
 *
 * Loop technique: IMAGES duplicated to 14 items.
 * Strip inner width = root (340px) + 2×160px inset = 660px.
 * Each image: 660px wide × 371px tall (16:9) + 12px margin-bottom = 383px/slot.
 * One copy: 7 × 383 = 2681px. Track total: 5362px.
 * translateY(-50%) = −2681px = exactly one copy → seamless.
 *
 * Direction: from { translateY(-50%) } → to { translateY(0) }
 * = track moves DOWN = images enter from top, exit at bottom.
 */

import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const IMAGES = [
  "dashboard-powerbi-vendas.png",
  "dashboard-comunicacao-interna.png",
  "dashboard-monitor-colorido.jpg",
  "dashboard-powerbi-timeline.jpg",
  "dashboard-ui-kpis.webp",
  "dashboard-crescimento-abstrato.jpg",
  "dashboard-monitor-dados-futurista.jpg",
];

export function HeroImageReel() {
  const doubled = [...IMAGES, ...IMAGES];

  return (
    <div className="hir-root" aria-hidden="true">
      {/* Rotated strip — oversized via inset:-160px so corners are always covered */}
      <div className="hir-strip">
        <div className="hir-track">
          {doubled.map((img, i) => (
            <div key={i} className="hir-item">
              <div className="hir-img-wrap">
                <Image
                  src={`${BASE}/images/${img}`}
                  alt=""
                  fill
                  sizes="660px"
                  className="hir-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

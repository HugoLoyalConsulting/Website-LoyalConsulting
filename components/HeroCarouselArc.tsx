"use client";

/**
 * HeroCarouselArc — Curved-L arc carousel
 *
 * Images enter from the TOP, travel along a quarter-circle arc
 * (tangent: vertical → horizontal), zoom to full size at the curve,
 * then exit toward the RIGHT. Three images visible at once.
 *
 * Arc formula — circle whose tangent at θ=0 is straight down:
 *   x(θ) = ENTRY_X + R·(1 − cos θ)   →  0 at top, R at right
 *   y(θ) = ENTRY_Y + R·sin θ          →  ENTRY_Y at top, ENTRY_Y+R at bottom
 *
 * Slots: −2 (staging, top) … 0 (center, max zoom) … +2 (staging, right)
 * Each tick all slots increment by 1; new card inserted at slot −2.
 */

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

// ── Card dimensions ────────────────────────────────────────────────────────
const CARD_W = 190;
const CARD_H = 260;

// ── Arc parameters ─────────────────────────────────────────────────────────
// R      : arc radius (larger = gentler curve)
// ENTRY_X: x-position where the arc begins (θ = 0, tangent straight down)
// ENTRY_Y: y of the arc's origin point — negative = above the container
// BASE_DEG: angle of slot 0 (center, max zoom) on the arc
// STEP_DEG: angular spacing between adjacent slots
const R = 320;
const ENTRY_X = 120;
const ENTRY_Y = -130;
const BASE_DEG = 50;
const STEP_DEG = 26;

function slotToArc(slot: number): {
  x: number;
  y: number;
  scale: number;
  opacity: number;
} {
  const rad = ((BASE_DEG + slot * STEP_DEG) * Math.PI) / 180;
  // Centre of the card on the arc path
  const cx = ENTRY_X + R * (1 - Math.cos(rad));
  const cy = ENTRY_Y + R * Math.sin(rad);
  return {
    x: cx - CARD_W / 2, // top-left of card (framer translate from container origin)
    y: cy - CARD_H / 2,
    // Zoom peaks at slot 0, falls off symmetrically
    scale: Math.max(0.44, 1 - Math.abs(slot) * 0.28),
    // Staging slots (±2) are invisible; visible slots fade slightly at edges
    opacity:
      Math.abs(slot) >= 2 ? 0 : Math.max(0.25, 1 - Math.abs(slot) * 0.5),
  };
}

// ── Card pool ──────────────────────────────────────────────────────────────
// Module-level counters are fine for a single-instance component.
let _uid = 0;
let _nextImg = 5; // first 5 images used for initCards()

interface ArcCard {
  id: number;
  src: string;
  slot: number;
  isNew: boolean; // true → plays enter animation; false → appears immediately
}

function initCards(): ArcCard[] {
  return [-2, -1, 0, 1, 2].map((slot, i) => ({
    id: _uid++,
    src: IMAGES[i % IMAGES.length],
    slot,
    isNew: false,
  }));
}

// Pre-compute the staging (entry) position so it's stable across renders
const ENTRY_SLOT = slotToArc(-2);

// ── Component ──────────────────────────────────────────────────────────────
export function HeroCarouselArc() {
  const [cards, setCards] = useState<ArcCard[]>(initCards);

  useEffect(() => {
    const tid = setInterval(() => {
      setCards((prev) => {
        // Advance every card one slot toward the exit (slot +2)
        const moved = prev
          .map((c) => ({ ...c, slot: c.slot + 1, isNew: false }))
          .filter((c) => c.slot <= 2);

        // Inject fresh card at the top staging position
        moved.unshift({
          id: _uid++,
          src: IMAGES[_nextImg % IMAGES.length],
          slot: -2,
          isNew: true,
        });
        _nextImg++;
        return moved;
      });
    }, 3200);
    return () => clearInterval(tid);
  }, []);

  return (
    <div className="hca2-root">
      <AnimatePresence>
        {cards.map((card) => {
          const { x, y, scale, opacity } = slotToArc(card.slot);
          return (
            <motion.div
              key={card.id}
              className="hca2-card"
              // New cards start at the staging position above; existing initial
              // cards skip the entry animation to avoid a "burst" on first paint.
              initial={
                card.isNew
                  ? {
                      x: ENTRY_SLOT.x,
                      y: ENTRY_SLOT.y,
                      scale: ENTRY_SLOT.scale,
                      opacity: 0,
                    }
                  : false
              }
              animate={{ x, y, scale, opacity }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ zIndex: 10 - Math.abs(card.slot) * 3 }}
            >
              <div className="hca2-img-wrap">
                <Image
                  src={`${BASE}/images/${card.src}`}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 130px, 190px"
                  priority={card.slot === 0}
                />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}


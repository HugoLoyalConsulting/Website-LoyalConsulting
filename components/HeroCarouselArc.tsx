"use client";

/**
 * HeroCarouselArc — quarter-circle arc carousel
 *
 * Cards enter from the TOP, zoom to full size at the curve's midpoint,
 * then exit toward the RIGHT. Three cards visible at once, never overlapping.
 *
 * Arc formula:
 *   cx(θ) = ENTRY_X + R·(1 − cos θ)   → 0 at top, R at right
 *   cy(θ) = ENTRY_Y + R·sin θ          → ENTRY_Y at top, ENTRY_Y+R at bottom
 *
 * No-overlap proof (STEP_DEG = 44°):
 *   slot –1 center (7, –48) → rendered bounds (–74..88, –94..–2)
 *   slot  0 center (162, 191) → rendered bounds (22..302, 112..270)   ← gap ✓
 *   slot +1 center (439, 255) → rendered bounds (358..520, 210..301)  ← gap ✓
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
  "ipad-google-analytics.jpg",
  "laptop-analytics-aberto.jpg",
  "laptop-analytics-angulo.jpg",
  "monitor-dados-futurista.jpg",
  "documentos-gestao-projetos.jpg",
  "relatorio-financeiro-impresso.jpg",
  "relatorios-impressos-mesa.jpg",
];

// ── Card dimensions (landscape 16:9) ──────────────────────────────────────
const CARD_W = 280;
const CARD_H = 158;

// ── Arc parameters ─────────────────────────────────────────────────────────
// R=380, ENTRY_X=0, ENTRY_Y=-120: arc origin is above-left of container
// BASE_DEG=55: center slot (0) sits at 55° on the arc
// STEP_DEG=44: enough angular separation to prevent card overlap
const R        = 380;
const ENTRY_X  = 0;
const ENTRY_Y  = -120;
const BASE_DEG = 55;
const STEP_DEG = 44;

function slotToArc(slot: number): {
  x: number;
  y: number;
  scale: number;
  opacity: number;
} {
  const deg = BASE_DEG + slot * STEP_DEG;
  const rad = (deg * Math.PI) / 180;
  const cx  = ENTRY_X + R * (1 - Math.cos(rad));
  const cy  = ENTRY_Y + R * Math.sin(rad);
  return {
    x:       cx - CARD_W / 2,
    y:       cy - CARD_H / 2,
    scale:   Math.max(0.40, 1 - Math.abs(slot) * 0.38),
    opacity: Math.abs(slot) >= 2 ? 0 : Math.max(0.55, 1 - Math.abs(slot) * 0.32),
  };
}

// ── Card pool ──────────────────────────────────────────────────────────────
let _uid     = 0;
let _nextImg = 5;

interface ArcCard {
  id:    number;
  src:   string;
  slot:  number;
  isNew: boolean;
}

function initCards(): ArcCard[] {
  return [-2, -1, 0, 1, 2].map((slot, i) => ({
    id:    _uid++,
    src:   IMAGES[i % IMAGES.length],
    slot,
    isNew: false,
  }));
}

const ENTRY_SLOT = slotToArc(-2);

// ── Component ──────────────────────────────────────────────────────────────
export function HeroCarouselArc() {
  const [cards, setCards] = useState<ArcCard[]>(initCards);

  useEffect(() => {
    const tid = setInterval(() => {
      setCards((prev) => {
        const moved = prev
          .map((c) => ({ ...c, slot: c.slot + 1, isNew: false }))
          .filter((c) => c.slot <= 2);
        moved.unshift({
          id:    _uid++,
          src:   IMAGES[_nextImg % IMAGES.length],
          slot:  -2,
          isNew: true,
        });
        _nextImg++;
        return moved;
      });
    }, 3400);
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
              initial={
                card.isNew
                  ? { x: ENTRY_SLOT.x, y: ENTRY_SLOT.y, scale: ENTRY_SLOT.scale, opacity: 0 }
                  : false
              }
              animate={{ x, y, scale, opacity }}
              exit={{ opacity: 0, transition: { duration: 0.18 } }}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ zIndex: 10 - Math.abs(card.slot) * 3 }}
            >
              <div className="hca2-img-wrap">
                <Image
                  src={`${BASE}/images/${card.src}`}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 160px, 280px"
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

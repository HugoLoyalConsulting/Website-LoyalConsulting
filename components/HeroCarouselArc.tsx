"use client";

/**
 * HeroCarouselArc
 *
 * 3 images travel along a ¼-circle arc (slot -1 → 0 → +1 = 90°).
 * Center card is largest; side cards shrink with the arc curve.
 * New cards enter from slot +2 (right) and exit at slot -2 (left).
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

// ── Arc geometry ────────────────────────────────────────────
// Slots -1, 0, +1 are the 3 visible positions (90° total span).
// Slots ±2 are invisible staging areas for enter/exit transitions.
const R = 260; // arc radius in px
const SLOT_DEG = 45; // degrees per slot step

function slotToArc(slot: number): {
  x: number;
  y: number;
  scale: number;
  opacity: number;
} {
  const rad = (slot * SLOT_DEG * Math.PI) / 180;
  return {
    x: Math.sin(rad) * R,
    y: R * (1 - Math.cos(rad)), // 0 at slot 0, grows along arc
    scale: Math.max(0.42, 1 - Math.abs(slot) * 0.29),
    opacity: slot === 0 ? 1 : Math.max(0, 1 - Math.abs(slot) * 0.55),
  };
}

// Stable entry/exit reference position (slot +2 — off-screen right)
const ENTRY = slotToArc(2);

// ── Card pool management (module-level counters are safe for
//    a single-instance component in a single-page app) ───────
let _uid = 0;
let _nextImg = 5; // next image index to assign (first 5 used for init)

interface ArcCard {
  id: number;
  src: string;
  slot: number;
  isNew: boolean; // controls whether initial animation fires
}

function initCards(): ArcCard[] {
  return [-2, -1, 0, 1, 2].map((slot, i) => ({
    id: _uid++,
    src: IMAGES[i % IMAGES.length],
    slot,
    isNew: false, // initial cards just appear at their positions
  }));
}

// ── Component ────────────────────────────────────────────────
export function HeroCarouselArc() {
  const [cards, setCards] = useState<ArcCard[]>(initCards);

  useEffect(() => {
    const tid = setInterval(() => {
      setCards((prev) => {
        const moved = prev
          .map((c) => ({ ...c, slot: c.slot - 1, isNew: false }))
          .filter((c) => c.slot >= -2); // -2 stays for one tick (opacity 0), then removed

        moved.push({
          id: _uid++,
          src: IMAGES[_nextImg % IMAGES.length],
          slot: 2,
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
              // Initial: new cards enter from slot +2 (off-screen right, opacity 0).
              // Existing initial cards skip animation (initial={false}).
              initial={
                card.isNew
                  ? {
                      x: ENTRY.x,
                      y: ENTRY.y,
                      scale: ENTRY.scale,
                      opacity: 0,
                    }
                  : false
              }
              animate={{ x, y, scale, opacity }}
              exit={{ opacity: 0, transition: { duration: 0.22 } }}
              transition={{ duration: 0.84, ease: [0.25, 0.46, 0.45, 0.94] }}
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

"use client";

/**
 * HeroSpotlightCarousel
 *
 * Auto-advancing diagonal spotlight carousel — inspired by tasteskill.dev.
 * Three images visible at once in a diagonal stack:
 *   • ENTER  (top, small)  → incoming next card
 *   • ACTIVE (center, full) → current featured card
 *   • EXIT   (bottom-right, small) → outgoing card
 *
 * Advances every 3.8 s via framer-motion position transitions.
 * No CSS scroll animation — all driven by React state + Framer Motion.
 */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

/* ── Slot definitions ────────────────────────────────────────
   x / y are translations from the card's "active" base position.
   Container: 360 × 460px.
   Active card base: top=136 left=30, size=300×188px (16:9).
   ─────────────────────────────────────────────────────────── */
const SLOTS = {
  before: { x: -10, y: -190, scale: 0.58, opacity: 0,    rotate:  2, zIndex: 0 },
  enter:  { x: -10, y:  -95, scale: 0.65, opacity: 0.65, rotate:  2, zIndex: 2 },
  active: { x:   0, y:    0, scale: 1.00, opacity: 1.00, rotate: -2, zIndex: 4 },
  exit:   { x:  70, y:  140, scale: 0.65, opacity: 0.65, rotate:  1, zIndex: 2 },
  gone:   { x: 140, y:  265, scale: 0.58, opacity: 0,    rotate:  3, zIndex: 0 },
} as const;

type SlotName = keyof typeof SLOTS;

function getSlot(rel: number): SlotName {
  if (rel === 0)  return "active";
  if (rel === -1) return "enter";
  if (rel ===  1) return "exit";
  return rel < 0 ? "before" : "gone";
}

export function HeroImageReel() {
  const [active, setActive] = useState(0);
  const n = IMAGES.length;

  useEffect(() => {
    const id = setInterval(() => setActive(i => (i + 1) % n), 3800);
    return () => clearInterval(id);
  }, [n]);

  return (
    <div className="hir-root" aria-hidden="true">
      {IMAGES.map((img, idx) => {
        let rel = ((idx - active) % n + n) % n;
        if (rel > Math.floor(n / 2)) rel -= n; // normalize to -⌊n/2⌋ … +⌊n/2⌋
        const slotName = getSlot(rel);
        const { zIndex, ...animProps } = SLOTS[slotName];

        return (
          <motion.div
            key={img}
            className="hir-card"
            initial={animProps}
            animate={animProps}
            transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
            style={{ zIndex }}
          >
            <Image
              src={`${BASE}/images/${img}`}
              alt=""
              fill
              sizes="(max-width: 600px) 200px, 300px"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

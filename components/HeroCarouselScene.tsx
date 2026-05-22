"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroImageReel } from "./HeroImageReel";

/* ── HeroCarouselScene ────────────────────────────────────── */
export function HeroCarouselScene() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="hcs-scene"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.9,
        ease: [0.2, 0.8, 0.2, 1],
        delay: reduceMotion ? 0 : 0.22,
      }}
    >
      {/* Ambient glow orbs — subtle depth, not interactive */}
      <div className="hcs-glow hcs-glow--purple" aria-hidden="true" />
      <div className="hcs-glow hcs-glow--teal" aria-hidden="true" />
      <div className="hcs-glow hcs-glow--amber" aria-hidden="true" />

      <HeroImageReel />
    </motion.div>
  );
}

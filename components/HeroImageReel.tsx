"use client";

/**
 * HeroSpotlightCarousel — continuous, fluid diagonal motion.
 *
 * Three images always visible in a diagonal stack:
 *   ENTER  (bottom-right, small) → ACTIVE (center, full) → EXIT (top, small)
 *
 * Driven by requestAnimationFrame at constant speed — no React state
 * re-renders, no discrete jumps. Direct DOM style updates only.
 *
 * Waypoints (x/y = translate from the card's absolute base position):
 *   base card: top:136px left:30px size:300×188px (16:9) in a 360×460 container
 */

import { useEffect, useRef } from "react";
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

const N = IMAGES.length;
const SPEED = 0.2; // images per second → 1 image every 5 s; full cycle 35 s

/* ── Waypoints ────────────────────────────────────────────── */
interface WP { x: number; y: number; scale: number; opacity: number; rotate: number }

const WP: Record<string, WP> = {
  before: { x:  -20, y: -190, scale: 0.55, opacity: 0,    rotate:  2 }, // off-screen top
  exit:   { x:  -10, y:  -95, scale: 0.65, opacity: 0.65, rotate:  2 }, // top (outgoing)
  active: { x:    0, y:    0, scale: 1.00, opacity: 1.00, rotate: -2 }, // center (featured)
  enter:  { x:   70, y:  140, scale: 0.65, opacity: 0.65, rotate:  1 }, // bottom-right (incoming)
  gone:   { x:  140, y:  265, scale: 0.55, opacity: 0,    rotate:  1 }, // off-screen bottom-right
};

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

function lerpWP(a: WP, b: WP, t: number): WP {
  return {
    x:       lerp(a.x,       b.x,       t),
    y:       lerp(a.y,       b.y,       t),
    scale:   lerp(a.scale,   b.scale,   t),
    opacity: lerp(a.opacity, b.opacity, t),
    rotate:  lerp(a.rotate,  b.rotate,  t),
  };
}

function getProps(rel: number): WP & { zIndex: number } {
  // Normalize rel to the range (-N/2, N/2]
  let r = ((rel % N) + N) % N;
  if (r > N / 2) r -= N;

  let wp: WP;
  let zIndex: number;

  if      (r >= -2 && r <  -1) { wp = lerpWP(WP.gone,   WP.enter,  r + 2); zIndex = 1; }
  else if (r >= -1 && r <   0) { wp = lerpWP(WP.enter,  WP.active, r + 1); zIndex = 3; }
  else if (r === 0)             { wp = WP.active;                            zIndex = 4; }
  else if (r >   0 && r <=  1) { wp = lerpWP(WP.active, WP.exit,   r    ); zIndex = 3; }
  else if (r >   1 && r <=  2) { wp = lerpWP(WP.exit,   WP.before, r - 1); zIndex = 1; }
  else                          { wp = { x: 0, y: 0, scale: 0.5, opacity: 0, rotate: 0 }; zIndex = 0; }

  return { ...wp, zIndex };
}

export function HeroImageReel() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef   = useRef<number>(0);
  const phase    = useRef(0);
  const prevTs   = useRef<number | null>(null);

  useEffect(() => {
    function frame(ts: number) {
      if (prevTs.current !== null) {
        const dt = (ts - prevTs.current) / 1000;
        // Reverse the carousel direction while preserving the same fluid motion profile.
        phase.current = (phase.current - SPEED * dt + N) % N;

        cardRefs.current.forEach((el, idx) => {
          if (!el) return;
          const { x, y, scale, opacity, rotate, zIndex } = getProps(phase.current - idx);
          el.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`;
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
    <div className="hir-root" aria-hidden="true">
      {IMAGES.map((img, idx) => (
        <div
          key={img}
          ref={el => { cardRefs.current[idx] = el; }}
          className="hir-card"
          style={{ opacity: 0 }}
        >
          <Image
            src={`${BASE}/images/${img}`}
            alt=""
            fill
            sizes="(max-width: 600px) 200px, 300px"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}

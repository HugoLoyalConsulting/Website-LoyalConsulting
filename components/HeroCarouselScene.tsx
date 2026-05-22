"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { HeroCarouselArc } from "./HeroCarouselArc";

/* ── Floater definitions ──────────────────────────────────── */
interface FloaterData {
  id: string;
  label: string;
  value: string;
  sub: string;
  icon: string;
  accentColor: string;
  pos: { top?: string; bottom?: string; left?: string; right?: string };
  float: { y: number; r: number; dur: number; delay: number };
  depth: number;
}

const FLOATERS: FloaterData[] = [
  {
    id: "f-kpi",
    label: "Fontes integradas",
    value: "12+",
    sub: "Excel · SQL · CRM · ERP · API",
    icon: "◆",
    accentColor: "#6c63ff",
    pos: { top: "18px", left: "16px" },
    float: { y: 13, r: 1.5, dur: 5.6, delay: 0 },
    depth: 0.13,
  },
  {
    id: "f-speed",
    label: "Velocidade de decisão",
    value: "+60%",
    sub: "No primeiro trimestre",
    icon: "↑",
    accentColor: "#2ee6a6",
    pos: { bottom: "54px", left: "16px" },
    float: { y: 19, r: -1.7, dur: 4.8, delay: 1.25 },
    depth: 0.09,
  },
  {
    id: "f-pipeline",
    label: "Pipeline ativo",
    value: "24/7",
    sub: "Automático · Sem retrabalho",
    icon: "⬡",
    accentColor: "#f59e0b",
    pos: { top: "72px", right: "16px" },
    float: { y: 17, r: 2.3, dur: 6.2, delay: 0.65 },
    depth: 0.17,
  },
];

/* ── FloaterItem — own component so hooks run at top level ── */
function FloaterItem({
  f,
  springX,
  springY,
  reduceMotion,
}: {
  f: FloaterData;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const px = useTransform(springX, (v) => v * f.depth * 52);
  const py = useTransform(springY, (v) => v * f.depth * 36);

  return (
    <motion.div
      style={{
        position: "absolute",
        zIndex: 6,
        x: px,
        y: py,
        ...f.pos,
      }}
    >
      <motion.div
        className="hcs-badge"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -f.float.y, 0], rotate: [0, f.float.r, 0] }
        }
        transition={{
          duration: f.float.dur,
          repeat: Infinity,
          ease: "easeInOut",
          delay: f.float.delay,
        }}
        whileHover={{ scale: 1.05, transition: { duration: 0.18 } }}
      >
        <span className="hcs-badge-icon" style={{ color: f.accentColor }}>
          {f.icon}
        </span>
        <div>
          <p className="hcs-badge-value" style={{ color: f.accentColor }}>
            {f.value}
          </p>
          <p className="hcs-badge-label">{f.label}</p>
          <p className="hcs-badge-sub">{f.sub}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── HeroCarouselScene — main export ─────────────────────── */
export function HeroCarouselScene() {
  const reduceMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 42, damping: 26, mass: 0.6 });
  const springY = useSpring(rawY, { stiffness: 42, damping: 26, mass: 0.6 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - left - width / 2) / width);
    rawY.set((e.clientY - top - height / 2) / height);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      className="hcs-scene"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.9,
        ease: [0.2, 0.8, 0.2, 1],
        delay: reduceMotion ? 0 : 0.22,
      }}
    >
      {/* ── Ambient glow orbs ── */}
      <div className="hcs-glow hcs-glow--purple" aria-hidden="true" />
      <div className="hcs-glow hcs-glow--teal" aria-hidden="true" />
      <div className="hcs-glow hcs-glow--amber" aria-hidden="true" />

      {/* ── Floating glassmorphism badges ── */}
      {FLOATERS.map((f) => (
        <FloaterItem
          key={f.id}
          f={f}
          springX={springX}
          springY={springY}
          reduceMotion={reduceMotion}
        />
      ))}

      {/* ── Arc carousel: 3 images on a ¼-circle ── */}
      <HeroCarouselArc />
    </motion.div>
  );
}

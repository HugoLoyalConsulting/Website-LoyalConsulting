"use client";
import { useEffect, useRef } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const IMAGES = [
  "/images/dashboard-powerbi-vendas.png",
  "/images/dashboard-monitor-colorido.jpg",
  "/images/apresentacao-bi-reuniao-executiva.jpg",
  "/images/executivo-painel-wall.jpg",
  "/images/dashboard-powerbi-timeline.jpg",
  "/images/laptop-analytics-angulo.jpg",
  "/images/dashboard-comunicacao-interna.png",
  "/images/dashboard-ui-kpis.webp",
  "/images/analista-bi-monitores-duplos.jpg",
  "/images/laptop-analytics-aberto.jpg",
  "/images/apresentacao-dashboard-apontando.jpg",
  "/images/monitor-dados-futurista.jpg",
];

const FLOW_SPEED = 30; // px/s downward
const GAP = 14; // px between cards
const CARD_RATIO = 0.28; // card height relative to container
const ENTER_MS = 620; // ms - translateY(-110%) -> in-flow top slot
const EXIT_MS = 600; // ms - translateX(115%) ease-in
const FLOW_COUNT = 4;
const POOL_SIZE = 6;

type CardMode = "idle" | "flow" | "entering" | "exiting";

type LiveCard = {
  el: HTMLDivElement;
  img: HTMLImageElement;
  srcIdx: number;
  mode: CardMode;
  y: number;
  x: number;
  enterStartAt: number;
  enterFromY: number;
  enterToY: number;
  exitStartAt: number;
  exitFromY: number;
  exitToY: number;
};

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function easeInCubic(t: number): number {
  return t * t * t;
}

export function HeroCarouselAuto() {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const imgRefs = useRef<Array<HTMLImageElement | null>>([]);
  const stateRef = useRef<{
    cards: LiveCard[];
    nextSrcIdx: number;
    cardH: number;
    stride: number;
    containerH: number;
  } | null>(null);

  useEffect(() => {
    IMAGES.forEach((src) => {
      const el = new Image();
      el.src = `${BASE}${src}`;
    });

    const root = rootRef.current;
    if (!root) return;

    const cards: LiveCard[] = [];
    for (let i = 0; i < POOL_SIZE; i++) {
      const el = cardRefs.current[i];
      const img = imgRefs.current[i];
      if (!el || !img) return;
      cards.push({
        el,
        img,
        srcIdx: i % IMAGES.length,
        mode: "idle",
        y: -9999,
        x: 0,
        enterStartAt: 0,
        enterFromY: 0,
        enterToY: 0,
        exitStartAt: 0,
        exitFromY: 0,
        exitToY: 0,
      });
    }

    const measure = () => {
      const containerH = root.clientHeight || 510;
      const cardH = Math.round(containerH * CARD_RATIO);
      const stride = cardH + GAP;
      root.style.setProperty("--hca-card-h", `${cardH}px`);
      stateRef.current = {
        cards,
        nextSrcIdx: FLOW_COUNT % IMAGES.length,
        cardH,
        stride,
        containerH,
      };

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.x = 0;
        card.img.src = `${BASE}${IMAGES[card.srcIdx]}`;
        if (i < FLOW_COUNT) {
          card.mode = "flow";
          card.y = i * stride;
          card.el.style.zIndex = "3";
        } else {
          card.mode = "idle";
          card.y = -cardH * 2;
          card.el.style.zIndex = "1";
        }
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(root);

    let rafId = 0;
    let lastTs = -1;

    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick);
      const st = stateRef.current;
      if (!st) return;

      if (lastTs < 0) {
        lastTs = now;
        return;
      }

      const dt = Math.min(now - lastTs, 50);
      lastTs = now;

      const { cardH, stride, containerH } = st;

      for (const card of st.cards) {
        if (card.mode === "flow") {
          card.y += (FLOW_SPEED * dt) / 1000;
        } else if (card.mode === "entering") {
          const t = Math.min((now - card.enterStartAt) / ENTER_MS, 1);
          card.y = card.enterFromY + (card.enterToY - card.enterFromY) * easeOutCubic(t);
          if (t >= 1) {
            card.mode = "flow";
            card.el.style.zIndex = "3";
          }
        } else if (card.mode === "exiting") {
          const t = Math.min((now - card.exitStartAt) / EXIT_MS, 1);
          card.x = easeInCubic(t) * (card.el.clientWidth * 1.15);
          card.y = card.exitFromY + (card.exitToY - card.exitFromY) * easeInCubic(t);
          if (t >= 1) {
            card.mode = "idle";
            card.x = 0;
            card.y = -cardH * 2;
          }
        }
      }

      const flowing = st.cards.filter((card) => card.mode === "flow");
      let leaving: LiveCard | null = null;
      let maxY = -Infinity;
      for (const card of flowing) {
        if (card.y > containerH && card.y > maxY) {
          maxY = card.y;
          leaving = card;
        }
      }

      if (leaving) {
        leaving.mode = "exiting";
        leaving.exitStartAt = now;
        leaving.exitFromY = leaving.y;
        leaving.exitToY = leaving.y + cardH * 0.35;
        leaving.el.style.zIndex = "1";

        const incoming = st.cards.find((card) => card.mode === "idle");
        if (incoming) {
          const topFlowY = Math.min(...st.cards.filter((card) => card.mode === "flow").map((card) => card.y));
          incoming.mode = "entering";
          incoming.enterStartAt = now;
          incoming.enterFromY = -cardH * 1.1;
          incoming.enterToY = topFlowY - stride + (FLOW_SPEED * ENTER_MS) / 1000;
          incoming.y = incoming.enterFromY;
          incoming.x = 0;
          incoming.srcIdx = st.nextSrcIdx;
          incoming.img.src = `${BASE}${IMAGES[incoming.srcIdx]}`;
          incoming.el.style.zIndex = "4";
          st.nextSrcIdx = (st.nextSrcIdx + 1) % IMAGES.length;
        }
      }

      for (const card of st.cards) {
        card.el.style.opacity = "1";
        card.el.style.transform = `translate3d(${card.x.toFixed(1)}px, ${card.y.toFixed(1)}px, 0)`;
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={rootRef} className="hca-root" aria-label="Amostras de trabalho — Loyal Consulting">
      {Array.from({ length: POOL_SIZE }, (_, i) => (
        <div key={i} ref={(el) => { cardRefs.current[i] = el; }} className="hca-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={(el) => { imgRefs.current[i] = el; }}
            src={`${BASE}${IMAGES[i]}`}
            alt=""
            loading="eager"
          />
        </div>
      ))}
    </div>
  );
}



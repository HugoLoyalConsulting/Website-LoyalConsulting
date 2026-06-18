"use client";

import { useEffect, useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const IMAGES = [
  "executivo-painel-wall.jpg",
  "analista-bi-monitores-duplos.jpg",
  "analistas-revisando-dashboard.jpg",
  "apresentacao-dashboard-apontando.jpg",
  "dashboard-monitor-colorido.jpg",
  "laptop-analytics-aberto.jpg",
  "dashboard-ui-kpis.webp",
];

const INTERVAL_MS = 2500;
const FADE_MS     = 600;

export function HeroBackgroundSlideshow() {
  const [idx,     setIdx]     = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx(i     => (i + 1) % IMAGES.length);
      setAnimKey(k => k + 1);
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}
    >
      {/* keyframe lives here — no extra globals.css dependency */}
      <style>{`
        @keyframes hero-slide-pan {
          from { transform: scale(1.07) translateX(-2%); }
          to   { transform: scale(1.0)  translateX(2%);  }
        }
      `}</style>

      {IMAGES.map((img, i) => {
        const active = i === idx;
        return (
          <div
            key={img}
            style={{
              position: "absolute",
              inset: 0,
              opacity: active ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease`,
            }}
          >
            {/* key changes every slide → forces remount → animation always restarts */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={active ? animKey : img}
              src={`${BASE}/images/${img}`}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 30%",
                animation: active
                  ? `hero-slide-pan ${INTERVAL_MS + FADE_MS}ms ease-out forwards`
                  : "none",
              }}
            />
          </div>
        );
      })}

      {/* dark gradient — left heavy for text legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(5,3,18,0.93) 0%, rgba(5,3,18,0.80) 45%, rgba(5,3,18,0.52) 100%)",
        }}
      />

      {/* bottom fade into page bg */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "140px",
          background: "linear-gradient(to bottom, transparent, var(--color-bg, #05031a))",
        }}
      />
    </div>
  );
}

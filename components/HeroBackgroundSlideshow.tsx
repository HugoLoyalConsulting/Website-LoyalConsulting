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
  "dashboard-powerbi-vendas.png",
];

const INTERVAL_MS = 6000;
const FADE_MS = 1300;

export function HeroBackgroundSlideshow() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx(i => (i + 1) % IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}
    >
      {IMAGES.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img}
          src={`${BASE}/images/${img}`}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            transition: `opacity ${FADE_MS}ms ease`,
            opacity: i === idx ? 1 : 0,
            willChange: "opacity",
          }}
        />
      ))}

      {/* dark gradient — left heavy so text is always legible */}
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

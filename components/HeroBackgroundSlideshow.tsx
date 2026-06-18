"use client";

import { useEffect, useRef, useState } from "react";

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

const DISPLAY_MS = 4500;
const FADE_MS = 1000;

const imgStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center 30%",
  display: "block",
};

export function HeroBackgroundSlideshow() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const [front, setFront] = useState<"a" | "b">("a");
  const idxRef = useRef(0);

  useEffect(() => {
    const t = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % IMAGES.length;
      const next = idxRef.current;
      setFront(prev => {
        if (prev === "a") { setB(next); return "b"; }
        else               { setA(next); return "a"; }
      });
    }, DISPLAY_MS);
    return () => clearInterval(t);
  }, []);

  const layerStyle = (active: boolean): React.CSSProperties => ({
    position: "absolute",
    inset: 0,
    opacity: active ? 1 : 0,
    transition: `opacity ${FADE_MS}ms ease-in-out`,
    willChange: "opacity",
  });

  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
      <div style={layerStyle(front === "a")}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${BASE}/images/${IMAGES[a]}`} alt="" style={imgStyle} loading="eager" decoding="async" />
      </div>
      <div style={layerStyle(front === "b")}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${BASE}/images/${IMAGES[b]}`} alt="" style={imgStyle} loading="lazy" decoding="async" />
      </div>

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

"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    src: "https://www.imensosoftware.com/wp-content/uploads/2022/07/1.webp",
    alt: "Dashboard executivo de performance comercial",
  },
  {
    src: "https://learn.microsoft.com/pt-br/power-bi/create-reports/media/sample-retail-analysis/retail1.png",
    alt: "Análise de varejo Power BI",
  },
  {
    src: "https://zoomchartswebstorage.blob.core.windows.net/template-gallery/th-20241219-123923-power-bi-email-communication-report-challenge-thumbnail.png",
    alt: "Relatório de comunicação e marketing",
  },
  {
    src: "https://supermetrics.com/cdn-cgi/image/onerror=redirect,width=1510,height=942,format=png/https://cdn.sanity.io/images/8ly2m84z/production-2025/3ca463f9e698758c2f593295a9d85ec22f7545db-1510x942.png?w=1510&h=942&fit=max",
    alt: "Dashboard Supermetrics analytics",
  },
  {
    src: "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fmy-latest-dashboard-using-power-bi-v0-pj3bz453yd8f1.jpg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3Df54195acdc1553aba71f9259c47ac12e78d00e44&rdt=48741",
    alt: "Dashboard Power BI moderno",
  },
  {
    src: "https://i0.wp.com/www.phdata.io/wp-content/uploads/2022/08/Web-Traffic-Power-BI-Dashboard-Example-Screenshot.png",
    alt: "Dashboard de tráfego web e KPIs",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function goTo(index: number) {
    if (index === active) return;
    setPrev(active);
    setActive(index);
    setTimeout(() => setPrev(null), 700);
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((active + 1) % slides.length);
    }, 3800);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ aspectRatio: "16/9", background: "#0f0f1a" }}
    >
      {/* Border glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
        style={{ boxShadow: "inset 0 0 0 1px rgba(108,99,255,0.18)" }}
      />

      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: i === active ? 1 : 0,
            zIndex: i === active ? 2 : i === prev ? 1 : 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.src}
            alt={slide.alt}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(7,7,14,0.05) 0%, rgba(7,7,14,0.55) 100%)",
            }}
          />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
            style={{
              width: i === active ? "24px" : "8px",
              height: "8px",
              borderRadius: "999px",
              background:
                i === active ? "#6c63ff" : "rgba(255,255,255,0.3)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 300ms ease, background 300ms ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// 18 images distributed across 3 columns (indices 0,3,6… / 1,4,7… / 2,5,8…)
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
  "ipad-google-analytics.jpg",
  "laptop-analytics-aberto.jpg",
  "laptop-analytics-angulo.jpg",
  "monitor-dados-futurista.jpg",
  "documentos-gestao-projetos.jpg",
  "relatorio-financeiro-impresso.jpg",
  "relatorios-impressos-mesa.jpg",
];

const COLS = 3;
const COLUMNS = Array.from({ length: COLS }, (_, ci) =>
  IMAGES.filter((_, i) => i % COLS === ci)
);

export function HeroImageReel() {
  return (
    <div className="hir-root" aria-hidden="true">
      {COLUMNS.map((col, ci) => (
        <div key={ci} className="hir-col">
          <div className={`hir-col-inner hir-col-inner--${ci}`}>
            {/* Duplicate for seamless infinite loop */}
            {[...col, ...col].map((img, ii) => (
              <div key={`${img}-${ii}`} className="hir-img-card">
                <Image
                  src={`${BASE}/images/${img}`}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 90px, 160px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

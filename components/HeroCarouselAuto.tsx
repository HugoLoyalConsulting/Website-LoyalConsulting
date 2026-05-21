// Pure server component — zero JS, CSS-only belt animation
type Card = { src: string; label: string };

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const IMAGES: Card[] = [
  { src: "/images/dashboard-powerbi-vendas.png",         label: "Power BI — Sales Report" },
  { src: "/images/dashboard-monitor-colorido.jpg",       label: "Dashboard analítico" },
  { src: "/images/apresentacao-bi-reuniao-executiva.jpg", label: "BI em reunião executiva" },
  { src: "/images/executivo-painel-wall.jpg",            label: "Painel wall de indicadores" },
  { src: "/images/dashboard-powerbi-timeline.jpg",       label: "Power BI timeline" },
  { src: "/images/laptop-analytics-angulo.jpg",          label: "Analytics em laptop" },
  { src: "/images/dashboard-comunicacao-interna.png",    label: "Dashboard interno" },
  { src: "/images/dashboard-ui-kpis.webp",               label: "KPIs dark UI" },
  { src: "/images/analista-bi-monitores-duplos.jpg",     label: "Monitores duplos de BI" },
  { src: "/images/laptop-analytics-aberto.jpg",          label: "Dashboard analytics" },
  { src: "/images/apresentacao-dashboard-apontando.jpg", label: "Dashboard para diretoria" },
  { src: "/images/monitor-dados-futurista.jpg",          label: "Painel futurista" },
];

const ROW1 = IMAGES.slice(0, 6);
const ROW2 = IMAGES.slice(6);
const ROW3 = [...IMAGES.slice(3, 9), ...IMAGES.slice(9), ...IMAGES.slice(0, 3)]; // offset for variety

function BeltRow({ images, layer }: { images: Card[]; layer: "front" | "mid" | "back" }) {
  const doubled = [...images, ...images];
  return (
    <div className={`hca-belt hca-belt--${layer}`}>
      {doubled.map((img, i) => (
        <div key={i} className="hca-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BASE}${img.src}`} alt={img.label} loading="eager" />
        </div>
      ))}
    </div>
  );
}

export function HeroCarouselAuto() {
  return (
    <div className="hca-root" aria-hidden="true">
      <div className="hca-belt-wrap">
        <BeltRow images={ROW1} layer="front" />
        <BeltRow images={ROW2} layer="mid" />
        <BeltRow images={ROW3} layer="back" />
      </div>
    </div>
  );
}


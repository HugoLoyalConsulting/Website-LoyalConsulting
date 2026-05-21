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

const ENTER_MS = 620;   // ms — slide in from top
const HOLD_MS  = 2200;  // ms — card stays fully visible
const EXIT_MS  = 520;   // ms — slide out to right

export function HeroCarouselAuto() {
  const cardRefs = useRef<[HTMLDivElement | null, HTMLDivElement | null]>([null, null]);
  const imgRefs  = useRef<[HTMLImageElement | null, HTMLImageElement | null]>([null, null]);
  const curSlot  = useRef(0);
  const imgIdx   = useRef(0);

  useEffect(() => {
    IMAGES.forEach(src => { const el = new Image(); el.src = `${BASE}${src}`; });

    const [c0, c1] = cardRefs.current;
    if (!c0 || !c1) return;

    /** Park a card off-screen top with no transition */
    const park = (el: HTMLDivElement) => {
      el.style.transition = "none";
      el.style.transform  = "translateY(-110%)";
      el.style.zIndex     = "1";
    };
    park(c0); park(c1);

    // Slot 0 enters immediately on mount
    c0.style.zIndex = "2";
    requestAnimationFrame(() => requestAnimationFrame(() => {
      c0.style.transition = `transform ${ENTER_MS}ms cubic-bezier(0.22,1,0.36,1)`;
      c0.style.transform  = "translateY(0)";
    }));

    const advance = () => {
      const outIdx = curSlot.current;
      const inIdx  = 1 - outIdx;
      const sOut   = cardRefs.current[outIdx]!;
      const sIn    = cardRefs.current[inIdx]!;
      const imgIn  = imgRefs.current[inIdx]!;

      // Load next image into incoming slot
      imgIdx.current = (imgIdx.current + 1) % IMAGES.length;
      imgIn.src = `${BASE}${IMAGES[imgIdx.current]}`;

      // Park incoming off-screen top (no transition)
      park(sIn);
      sIn.style.zIndex = "2";  // incoming is on top

      requestAnimationFrame(() => requestAnimationFrame(() => {
        // Incoming slides down from top (z=2, covers outgoing)
        sIn.style.transition = `transform ${ENTER_MS}ms cubic-bezier(0.22,1,0.36,1)`;
        sIn.style.transform  = "translateY(0)";

        // Outgoing drops behind, then exits right
        sOut.style.zIndex = "1";
        setTimeout(() => {
          sOut.style.transition = `transform ${EXIT_MS}ms cubic-bezier(0.55,0,1,0.45)`;
          sOut.style.transform  = "translateX(115%)";
        }, 80);

        curSlot.current = inIdx;
      }));
    };

    const id = setInterval(advance, HOLD_MS + ENTER_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hca-root" aria-label="Amostras de trabalho — Loyal Consulting">
      {([0, 1] as const).map((i) => (
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



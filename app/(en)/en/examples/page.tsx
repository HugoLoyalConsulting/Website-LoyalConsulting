import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_COMECAR_EN } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Project Examples",
  description:
    "Sales, Finance, Marketing, HR, Logistics and Operations: areas that already gained clarity with dashboards and KPIs.",
  path: "/en/examples",
});

const exampleProjects = [
  {
    area: "Sales",
    items: [
      "Revenue and billing",
      "Funnel conversion rates",
      "Sales team performance",
      "Average ticket and quota attainment",
    ],
  },
  {
    area: "Finance",
    items: [
      "Cash flow",
      "Income and expenses",
      "Margins and profitability",
      "Delinquency and financial forecasts",
    ],
  },
  {
    area: "Marketing",
    items: [
      "Lead generation",
      "CAC and campaign ROI",
      "Performance by acquisition channel",
      "Conversion along the customer journey",
    ],
  },
  {
    area: "HR",
    items: [
      "Turnover and retention",
      "Average time to hire",
      "Absenteeism indicators",
      "Training and development tracking",
    ],
  },
  {
    area: "Logistics",
    items: [
      "Service level and on-time delivery",
      "Average time between stages",
      "Operational bottleneck detection",
      "Logistics costs and productivity",
    ],
  },
  {
    area: "Operations",
    items: [
      "Team productivity",
      "Average execution times",
      "Goal tracking",
      "Spotting deviations and improvement opportunities",
    ],
  },
];

// ── Dashboard gallery ──────────────────────────────────────────────────────
const galleryImages = [
  { src: "dashboard-powerbi-timeline.jpg", alt: "Power BI dashboard with KPI timeline" },
  { src: "dashboard-ui-kpis.webp", alt: "Executive KPI dashboard" },
  { src: "dashboard-comunicacao-interna.png", alt: "Internal communications dashboard" },
  { src: "dashboard-monitor-colorido.jpg", alt: "Colorful dashboard on a monitor" },
  { src: "dashboard-monitor-dados-futurista.jpg", alt: "Data dashboard on a monitor" },
  { src: "dashboard-crescimento-abstrato.jpg", alt: "KPI growth visualization" },
  { src: "laptop-analytics-aberto.jpg", alt: "Analytics dashboard open on a laptop" },
  { src: "laptop-analytics-angulo.jpg", alt: "Analytics dashboard on a laptop" },
  { src: "ipad-google-analytics.jpg", alt: "KPIs on a tablet" },
  { src: "analista-bi-monitores-duplos.jpg", alt: "Dashboard analysis on dual monitors" },
  { src: "executivo-painel-wall.jpg", alt: "KPI dashboard on a large screen" },
];

export default function ExamplesPage() {
  return (
    <main
      className="ts-page-shell relative w-full max-w-full overflow-x-hidden"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.8rem)",
      }}
    >
      <StickyTopNav locale="en" />

      {/* ── HEADER ──────────────────────────────────────────── */}
      <section className="lc-page-header mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero">
          <div>
            <p className="section-eyebrow reveal-up">Project examples</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}>
              Areas that already<br />
              gained clarity with<br />
              dashboards and KPIs
            </h1>
            <p className="ts-hero-sub reveal-up">
              A few examples of what we usually organize in each area, always adapted to
              your business reality and questions.
            </p>
          </div>
        </div>
      </section>

      {/* ── AREAS GRID ──────────────────────────────────────── */}
      <section id="areas" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-benefits-grid mt-8">
            {exampleProjects.map((proj) => (
              <div key={proj.area} className="lc-benefit-item" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
                <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "rgba(240,237,232,0.95)", letterSpacing: "0.04em", margin: 0 }}>
                  {proj.area}
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  {proj.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", fontSize: "0.86rem", color: "rgba(240,237,232,0.65)", lineHeight: 1.5 }}>
                      <span className="lc-benefit-check" style={{ fontSize: "0.75rem" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD GALLERY ───────────────────────────────── */}
      <section id="galeria" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Gallery</p>
            <h2 className="section-title mt-3">Dashboards in practice</h2>
          </div>
          <div className="lc-examples-gallery mt-10">
            {galleryImages.map((img) => (
              <figure key={img.src} className="lc-examples-gallery-item reveal-up">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/${img.src}`}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX ────────────────────────────────────────── */}
      <div
        className="parallax-break"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/dashboard-powerbi-timeline.jpg')` }}
      >
        <div className="parallax-break__inner">
          <p className="parallax-quote">
            &ldquo;When every number comes from one trusted source, meetings stop being
            debates about which spreadsheet is right, and become conversations
            about what to do.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Business Intelligence</span>
        </div>
      </div>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Didn&apos;t find your area? It certainly works too</h2>
          <p className="lc-cta-sub">
            Any process that relies on spreadsheets and manual reports today can be automated.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_COMECAR_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Talk about my area
            </a>
            <Link href="/en/plans" className="btn-outline">
              See plans
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter locale="en" />
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_DIAGNOSTICO_EN } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description:
    "From scattered data to confident decisions: Data Workflows and Pipelines, Dashboards in Power BI, Tableau, Looker or Python, and Mentoring and Training.",
  path: "/en/how-it-works",
});

// ── How we help (3 service lines) ──────────────────────────────────────────
const services = [
  {
    title: "Data Workflows and Pipelines",
    body: "When each team lives on its own spreadsheet and nobody agrees on which number is right, the problem isn't the analysis; it's the foundation. We build ETL/ELT pipelines that extract, transform, and centralize data from ERPs, CRMs, spreadsheets, and APIs into a single reliable model, with automated refreshes, integrated DataViz, and drill-down capability down to the transaction level.",
    img: "dashboard-monitor-dados-futurista.jpg",
    tag: "Single source of truth",
  },
  {
    title: "Dashboards",
    body: "Meetings stop being debates about which spreadsheet is right when there is one shared reference screen, updated automatically. We build dashboards in Power BI, Tableau, Looker or Python, with the right questions answered in the right place.",
    img: "dashboard-powerbi-vendas.png",
    tag: "Insights in seconds",
  },
  {
    title: "Mentoring and Training",
    body: "Sometimes the problem isn't a missing tool; it is not knowing what to do with the one you have. Practical sessions tailored to your real context: no unnecessary theory, focused on what generates immediate results at work.",
    img: "analistas-revisando-dashboard.jpg",
    tag: "Your team flies solo",
  },
];

// ── Our process ────────────────────────────────────────────────────────────
const processSteps = [
  {
    num: "01",
    title: "Discovery",
    body: "We understand the big picture: which KPIs to prioritize, which systems and data exist, how complex the project is and how urgent it is for your team.",
    tags: ["KPIs", "Systems", "Urgency"],
  },
  {
    num: "02",
    title: "Proposal and budget",
    body: "You receive three delivery tiers, with clear timelines and pricing, and choose what makes the most sense right now.",
    tags: ["3 tiers", "Timelines", "Pricing"],
  },
  {
    num: "03",
    title: "Iterative build",
    body: "We build in short cycles, with your feedback at every round. You watch the dashboard take shape and adjust course before the final delivery.",
    tags: ["Feedback", "Short cycles"],
  },
  {
    num: "04",
    title: "Delivery and deployment",
    body: "We publish the solution in your environment, with automatic refreshes running and everything validated end to end.",
    tags: ["Go-live", "Automation"],
  },
  {
    num: "05",
    title: "Team training",
    body: "Your team learns to use the dashboard day to day: navigating, filtering and pulling answers without depending on anyone.",
    tags: ["Enablement"],
  },
  {
    num: "06",
    title: "Bonus: monthly maintenance",
    body: "Small fixes and adjustments are covered month to month. New features and expansions come in as increments, under a new scope.",
    tags: ["Support", "No surprises"],
  },
];

export default function HowItWorksPage() {
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
            <p className="section-eyebrow reveal-up">How it works</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}>
              From scattered data<br />
              to confident decisions
            </h1>
            <p className="ts-hero-sub reveal-up">
              Three service lines and a simple process — built for people who live in
              spreadsheets and want the numbers ready, in one place.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW WE HELP ─────────────────────────────────────── */}
      <section id="servicos" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">How we help</p>
            <h2 className="section-title mt-3">Three service lines</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {services.map((service) => (
              <div key={service.title} className="lc-how-step">
                <figure className="lc-how-step-img">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/${service.img}`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    style={{ objectFit: "cover", filter: "brightness(0.8) saturate(0.7)" }}
                  />
                </figure>
                <h3 className="lc-how-title" style={{ paddingTop: "1.5rem" }}>{service.title}</h3>
                <p className="lc-how-body">{service.body}</p>
                <div className="lc-how-tags">
                  <span className="lc-how-tag">{service.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ─────────────────────────────────────── */}
      <section id="processo" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Step by step</p>
            <h2 className="section-title mt-3">Our process is simple</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {processSteps.map((step) => (
              <div key={step.num} className="lc-how-step">
                <span className="lc-how-num">{step.num}</span>
                <h3 className="lc-how-title">{step.title}</h3>
                <p className="lc-how-body">{step.body}</p>
                <div className="lc-how-tags">
                  {step.tags.map((tag) => (
                    <span key={tag} className="lc-how-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX — THE REAL COST ────────────────────────── */}
      <div
        className="parallax-break"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/analista-bi-monitores-duplos.jpg')` }}
      >
        <div className="parallax-break__inner">
          <p className="parallax-quote">
            &ldquo;The real cost is not investing in BI. It is continuing to make
            decisions with incomplete information.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Business Intelligence</span>
        </div>
      </div>

      {/* ── THE COST OF NOT ACTING ──────────────────────────── */}
      <section id="custo" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-8">
            <div>
              <p className="section-eyebrow section-eyebrow--red">Worth reflecting on</p>
              <h2 className="section-title mt-3">Three questions for your next month-end close</h2>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--impact">
              <ul className="lc-consequences-list lc-consequences-list--warning">
                <li>How much time does your team spend consolidating data every month?</li>
                <li>How many opportunities are missed because the numbers arrive too late?</li>
                <li>How much does it cost to discover a problem only after it has happened?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Want to see this process applied to your area?</h2>
          <p className="lc-cta-sub">Start with a quick conversation, no strings attached.</p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_DIAGNOSTICO_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
              I want a free assessment
            </a>
            <Link href="/en/examples" className="btn-outline">
              See project examples
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter locale="en" />
    </main>
  );
}

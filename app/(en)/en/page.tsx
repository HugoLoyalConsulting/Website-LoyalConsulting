import Image from "next/image";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { MarqueeBand } from "@/components/MarqueeBand";
import { HeroBackgroundSlideshow } from "@/components/HeroBackgroundSlideshow";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_DIAGNOSTICO_EN, WA_CALCULADORA_EN } from "@/lib/links";

// ── Today × After ─────────────────────────────────────────────────────────
const today = [
  "Spreadsheets scattered across email and WhatsApp",
  "Reports built manually every week",
  "Each team with its own version of the numbers",
  "Copy-pasting to build presentations",
  "Meetings arguing about which version is right",
];

const after = [
  "Data centralized in a single source",
  "Automatic updates, no manual rework",
  "Standardized KPIs across every team",
  "Real-time dashboards",
  "Meetings focused on decisions",
];

// ── How it works ───────────────────────────────────────────────────────────
const processSteps = [
  {
    num: "01",
    title: "Assessment",
    body: "We map your data sources, current indicators and bottlenecks to understand the real starting point.",
  },
  {
    num: "02",
    title: "Data integration",
    body: "We connect spreadsheets, ERPs, CRMs and APIs into a single reliable model, accessible across all teams.",
  },
  {
    num: "03",
    title: "Automation",
    body: "We eliminate manual rework by replacing repetitive processes with automatic update flows.",
  },
  {
    num: "04",
    title: "Dashboards",
    body: "We build panels with the indicators that actually matter for your management: clear, direct and easy to use.",
  },
  {
    num: "05",
    title: "Ongoing support",
    body: "Continuous support for adjustments, team training and indicator expansion as the business grows.",
  },
];

// ── Problems we solve ─────────────────────────────────────────────────────
const problems = [
  "The numbers don't match across teams",
  "Every department has its own spreadsheet",
  "Reports always arrive too late",
  "You don't fully trust the indicators",
  "Your team loses hours consolidating data",
  "You don't know for certain which number is right",
];

// ── Proof and credibility ─────────────────────────────────────────────────
const stats = [
  {
    source: "McKinsey Global Institute",
    title: "The Age of Analytics: Competing in a Data-Driven World",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-age-of-analytics-competing-in-a-data-driven-world",
    text: "47% of global executives say data and analytics have significantly or fundamentally changed competition in their industries, while laggards face growing disadvantage.",
  },
  {
    source: "Deloitte Insights",
    title: "Insight-Driven Organisations",
    url: "https://www.deloitte.com/uk/en/services/consulting/services/insight-driven-organisations.html",
    text: "Companies that become insight-driven speed up decision-making, reduce operational errors and build a sustainable competitive advantage over peers that still depend on manual data preparation.",
  },
  {
    source: "PwC",
    title: "ERP Data Modernization",
    url: "https://www.pwc.com/us/en/services/consulting/business-transformation/data-analytics/erp-data-modernization.html",
    text: "ERP data modernization unlocks value trapped in fragmented systems, turning disconnected data into a strategic asset for forecasting, reporting and confident decision-making.",
  },
];

export default function HomePage() {
  return (
    <main
      id="topo"
      className="ts-page-shell relative w-full max-w-full overflow-x-hidden"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.8rem)",
      }}
    >
      <StickyTopNav locale="en" />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "min(88vh, 820px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <HeroBackgroundSlideshow />
        <div
          className="mx-auto w-full max-w-7xl px-5 sm:px-8"
          style={{ position: "relative", zIndex: 1, paddingTop: "8rem", paddingBottom: "6rem" }}
        >
          <div style={{ maxWidth: "880px" }}>
            <p className="section-eyebrow reveal-up">Loyal Consulting · Business Intelligence</p>
            <h1 className="ts-hero-h1 reveal-up mt-3">
              Tired of pushing for data-driven decisions while your team still lives on spreadsheets?
            </h1>
            <p className="ts-hero-sub reveal-up">
              Your team should be analyzing data, not preparing data. We connect your sources,
              automate reports and deliver dashboards with the right numbers, in the right
              place, at the right time.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_DIAGNOSTICO_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Schedule Free Discovery
              </a>
              <Link href="/en/bi-calculator" className="btn-outline">
                Calculate my data cost →
              </Link>
            </div>
            <p className="reveal-up" style={{ marginTop: "1rem", fontSize: "0.8rem", color: "rgba(240,237,232,0.45)" }}>
              Takes 3 minutes · Free · Immediate result
            </p>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <MarqueeBand />

      {/* ── TRANSFORMATION: TODAY × AFTER ───────────────────── */}
      <section id="transformation" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">The transformation</p>
            <h2 className="section-title mt-3">
              We turn scattered data into a single reliable source for decision-making
            </h2>
          </div>
          <div className="lc-dores-grid mt-12">
            <div className="lc-dores-consequences">
              <p className="lc-dores-while-title" style={{ marginBottom: "1rem" }}>Today at your company</p>
              <ul className="lc-dores-list mt-3">
                {today.map((item) => (
                  <li key={item}>
                    <span className="lc-dores-bullet">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <p className="lc-dores-while-title lc-dores-while-title--cool" style={{ marginBottom: "1rem" }}>
                After Loyal
              </p>
              <ul className="lc-consequences-list mt-3">
                {after.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p
            style={{
              marginTop: "2.5rem",
              textAlign: "center",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(240,237,232,0.32)",
            }}
          >
            Through: Data Integration · Automation · Business Intelligence
          </p>
        </div>
      </section>

      {/* ── TWO PATHS ───────────────────────────────────────── */}
      <section id="assessment" className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <p className="section-eyebrow" style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              Where do you start?
            </p>
            <h2 className="lc-cta-title" style={{ maxWidth: "640px", margin: "0 auto" }}>
              Choose the right entry point for where you are right now
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {/* Card 1 — Discovery */}
            <div
              style={{
                border: "1px solid rgba(46,230,166,0.25)",
                borderRadius: "16px",
                padding: "2rem 1.75rem",
                background: "rgba(46,230,166,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2ee6a6", margin: 0 }}>
                Strategic conversation
              </p>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text, #f0ede8)", lineHeight: 1.3, margin: 0 }}>
                Free Discovery Call
              </h3>
              <p style={{ fontSize: "0.9rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                30 minutes to map your data bottlenecks, understand what&apos;s blocking decisions, and
                walk away with a concrete initial plan. No sales pitch. No commitment.
              </p>
              <p style={{ fontSize: "0.8rem", color: "rgba(240,237,232,0.38)", margin: 0 }}>
                Best for · teams that don&apos;t know where to start
              </p>
              <a
                href={WA_DIAGNOSTICO_EN}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
                style={{ marginTop: "0.5rem", textAlign: "center" }}
              >
                Schedule Discovery
              </a>
            </div>

            {/* Card 2 — Calculator */}
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "2rem 1.75rem",
                background: "rgba(255,255,255,0.03)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(240,237,232,0.45)", margin: 0 }}>
                Self-assessment
              </p>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text, #f0ede8)", lineHeight: 1.3, margin: 0 }}>
                BI Economics Calculator
              </h3>
              <p style={{ fontSize: "0.9rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                Find out how much your team spends each year on manual data work. Takes under
                3 minutes and generates an executive PDF ready to present to leadership.
              </p>
              <p style={{ fontSize: "0.8rem", color: "rgba(240,237,232,0.38)", margin: 0 }}>
                Best for · teams that need to justify a data investment
              </p>
              <Link
                href="/en/bi-calculator"
                className="btn-outline"
                style={{ marginTop: "0.5rem", textAlign: "center" }}
              >
                Calculate now (free) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE × AFTER (VISUAL) ──────────────────────────── */}
      <section id="before-after" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Before and after</p>
            <h2 className="section-title mt-3">From a spreadsheet marathon to a single screen</h2>
          </div>
          <div className="lc-beforeafter-grid mt-12">
            <figure className="lc-ba-card lc-ba-card--antes">
              <span className="lc-ba-label lc-ba-label--antes">× Before</span>
              <div className="lc-ba-img">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/antes-caos-planilhas-excel.png`}
                  alt="Multiple Excel spreadsheets open at the same time"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "top left" }}
                />
              </div>
              <figcaption className="lc-ba-caption">
                Multiple files open, duplicate tabs, hours of copy-paste to answer
                a single question.
              </figcaption>
            </figure>
            <figure className="lc-ba-card lc-ba-card--depois">
              <span className="lc-ba-label lc-ba-label--depois">✓ After</span>
              <div className="lc-ba-img">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/dashboard-ui-kpis.webp`}
                  alt="Power BI dashboard with consolidated KPIs"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <figcaption className="lc-ba-caption">
                One dashboard that updates itself: the big picture and the detail, in the
                same place, without depending on anyone to prepare.
              </figcaption>
            </figure>
          </div>
          <div className="lc-como-wrapper">
            <p className="lc-ba-label lc-ba-label--como" style={{ marginBottom: "0.75rem" }}>HOW IT WORKS IN PRACTICE</p>
            <ZoomableImage
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/pipeline-dados-centralizado.png`}
              alt="Diagram showing data from different sources being centralized and feeding dashboards"
              caption="From disconnected sources to decisions: how we centralize your data into a single reliable flow."
              wrapperStyle={{
                border: "5px solid rgba(240,237,232,0.7)",
                boxShadow: "0 22px 48px rgba(240,237,232,0.15), 0 0 28px rgba(240,237,232,0.12)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section id="how-it-works" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">How it works</p>
            <h2 className="section-title mt-3">From assessment to dashboard in 5 steps</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {processSteps.map((step) => (
              <div key={step.num} className="lc-how-step">
                <span className="lc-how-num">{step.num}</span>
                <h3 className="lc-how-title">{step.title}</h3>
                <p className="lc-how-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMS WE SOLVE ───────────────────────────────── */}
      <section id="problems" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-8">
            <div>
              <p className="section-eyebrow">Problems we solve</p>
              <h2 className="section-title mt-3">
                These situations are preventing your company from growing with clarity
              </h2>
              <p className="section-copy mt-4" style={{ fontSize: "0.9rem" }}>
                If you said yes to any of these, the problem is probably not in the reports.
                It is in how the data is organized.
              </p>
            </div>
            <div>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                }}
              >
                {problems.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.96rem",
                      color: "rgba(240,237,232,0.75)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: "17px",
                        height: "17px",
                        border: "1.5px solid rgba(240,237,232,0.3)",
                        borderRadius: "3px",
                        marginTop: "0.18rem",
                        display: "block",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <div className="ts-cta-row">
                  <Link href="/en/bi-calculator" className="btn-accent">
                    Calculate my data cost
                  </Link>
                  <a href={WA_DIAGNOSTICO_EN} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    Talk on WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF AND CREDIBILITY ────────────────────────────── */}
      <section id="credibility" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Research confirms the problem</p>
            <h2 className="section-title mt-3">It is not just your company</h2>
          </div>
          <div className="lc-benefits-grid mt-12">
            {stats.map((stat) => (
              <div
                key={stat.source}
                className="lc-benefit-item"
                style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.6rem" }}
              >
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#2ee6a6",
                    margin: 0,
                  }}
                >
                  {stat.source}
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(240,237,232,0.65)", lineHeight: 1.65, margin: 0 }}>
                  &ldquo;{stat.text}&rdquo;
                </p>
                <a
                  href={stat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.68rem", color: "rgba(240,237,232,0.28)", textDecoration: "underline", wordBreak: "break-all", lineHeight: 1.4 }}
                >
                  {stat.title} · {stat.source}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX BREAK ──────────────────────────────────── */}
      <div
        className="parallax-break"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/executivo-painel-wall.jpg')` }}
      >
        <div className="parallax-break__inner">
          <p className="parallax-quote">
            &ldquo;If each team has a different number for the same KPI,
            you don&apos;t have data. You have opinions.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Business Intelligence</span>
        </div>
      </div>

      {/* ── ABOUT LOYAL ─────────────────────────────────────── */}
      <section id="about" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-8">
            <div>
              <p className="section-eyebrow">About Loyal</p>
              <h2 className="section-title mt-3">Specialists in turning data into decisions</h2>
            </div>
            <div>
              <p className="section-copy">
                Loyal Consulting helps companies eliminate manual controls, integrate
                information and build reliable indicators for management.
              </p>
              <p className="section-copy" style={{ marginTop: "2rem" }}>
                Our focus is not just building dashboards. It is building the structure that
                makes the numbers meaningful and gets them there in time to influence the
                right decisions. We work alongside directors, managers, coordinators and
                supervisors, with lean projects and practical deliveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Find out where your company is losing time on data.</h2>
          <p className="lc-cta-sub">
            Calculate the real cost in 3 minutes — or schedule a free assessment with our team.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <Link href="/en/bi-calculator" className="btn-accent">
              Calculate my data cost
            </Link>
            <a href={WA_DIAGNOSTICO_EN} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Schedule Free Discovery →
            </a>
          </div>
          <p style={{ marginTop: "0.75rem", fontSize: "0.78rem", color: "rgba(240,237,232,0.45)" }}>
            Free calculator · Executive PDF included · Or 30 min assessment, no commitment
          </p>
        </div>
      </div>

      <SiteFooter locale="en" />
    </main>
  );
}

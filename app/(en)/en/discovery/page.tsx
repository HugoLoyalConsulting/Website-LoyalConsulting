import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroCarouselScene } from "@/components/HeroCarouselScene";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { ZoomableImage } from "@/components/ZoomableImage";
import { MarqueeBand } from "@/components/MarqueeBand";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/StickyTopNav";
import { WA_DIAGNOSTICO_EN, CALENDLY_URL } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Data Assessment",
  description:
    "Find out in 3 minutes how much time your company loses with decentralized data. Free data maturity assessment with practical recommendations.",
  path: "/en/discovery",
});

// ── Today × After ─────────────────────────────────────────────────────────
const today = [
  "Spreadsheets scattered across email and WhatsApp",
  "Reports built manually every week",
  "Copy-pasting to build presentations",
  "Meetings arguing about which number is right",
  "Inconsistent data across teams",
];

const after = [
  "Data centralized and integrated",
  "Automatic updates, no manual rework",
  "Real-time dashboards ready to use",
  "Reliable and standardized KPIs",
  "Meetings focused on decisions",
];

// ── What the assessment will reveal ───────────────────────────────────────
const outcomes = [
  {
    q: "Where your company is losing time on data",
    a: "We identify the manual processes that consume the most of your team's hours and can be automated.",
  },
  {
    q: "Why the numbers don't match across teams",
    a: "We map the sources of inconsistency and show how to centralize data into a single reliable version.",
  },
  {
    q: "Which indicators actually matter for your operation",
    a: "We prioritize the 3 to 5 KPIs with the highest impact on your decisions — and stop measuring what doesn't move the needle.",
  },
  {
    q: "Whether your data is ready for a dashboard or needs to be structured first",
    a: "We map what exists, where it lives and what needs to be adjusted before building anything.",
  },
  {
    q: "What the concrete next step would be — and how long it would take",
    a: "If there is a fit, you receive three delivery options with defined timelines and pricing. You choose the path.",
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

// ── How it works ───────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Free assessment",
    body: "In 30 minutes, we map your data sources, identify bottlenecks and understand what is blocking faster decision-making.",
    img: "ipad-google-analytics.jpg",
    tag: "Free",
  },
  {
    num: "02",
    title: "Data integration",
    body: "We connect spreadsheets, ERPs, CRMs and APIs into a single reliable model, eliminating inconsistencies across teams.",
    img: "analistas-revisando-dashboard.jpg",
    tag: "Single source of truth",
  },
  {
    num: "03",
    title: "Automation",
    body: "We replace repetitive manual processes with automatic update flows. Your team stops copy-pasting.",
    img: "dashboard-monitor-dados-futurista.jpg",
    tag: "No rework",
  },
  {
    num: "04",
    title: "Dashboards",
    body: "We build panels with the indicators that actually matter for your management, updated in real time.",
    img: "dashboard-powerbi-vendas.png",
    tag: "Insights in seconds",
  },
  {
    num: "05",
    title: "Ongoing support",
    body: "Continuous support for adjustments, team training and indicator expansion as the operation grows.",
    img: "apresentacao-dashboard-apontando.jpg",
    tag: "No abandonment",
  },
];

// ── Proof and credibility ─────────────────────────────────────────────────
const stats = [
  {
    source: "McKinsey Global Institute",
    title: "The Age of Analytics: Competing in a Data-Driven World",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-age-of-analytics-competing-in-a-data-driven-world",
    text: "47% of global executives say data and analytics have significantly or fundamentally changed competition in their industries — while laggards face growing disadvantage.",
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
    text: "ERP data modernization unlocks value trapped in fragmented systems — turning disconnected data into a strategic asset for forecasting, reporting and confident decision-making.",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "We tried BI before and no one used it. Why would this be different?",
    a: `That is the most common story. BI projects fail almost always for the same reason: they started with the tool, not the problem. The assessment starts by identifying what data actually matters for each decision — and only then defines the right tool. The dashboard becomes a consequence, not a goal.`,
  },
  {
    q: "Our data lives in too many places. Seems too complex.",
    a: "Most of the companies we work with are in exactly that situation: three systems, two spreadsheets and a report that doesn't agree with either of them. That is not an exception; it is the most common starting point. The assessment exists to map what is there and find the most direct path forward, without overpromising.",
  },
  {
    q: "I'm worried the dashboard will be built but no one will use it.",
    a: "That fear is among the most justified, and it almost always comes true when the dashboard was built without involving the people who will use it. Our process maps from the start who needs to see what, at what frequency and on which device. Adoption doesn't start at training; it starts at design.",
  },
  {
    q: "I don't know exactly what I want. Is it still worth talking?",
    a: `That is exactly what the assessment is for. Knowing that "the numbers arrive too late" or that "nobody agrees on which spreadsheet is right" is already enough to start. Scope clarity is the output of the assessment, not a prerequisite for it.`,
  },
  {
    q: "Does the assessment cost anything?",
    a: "No. It is a 30-minute conversation. No product pitch, no commitment. If moving forward doesn't make sense at the end, you leave with more clarity about the problem than you came in with — which already has value on its own.",
  },
  {
    q: "How long until I have something working?",
    a: `Most companies want a dashboard "within a week." Sometimes that is possible (when the data is already organized). What determines the timeline is the quality of what exists, not the speed of development. The assessment maps that and returns a realistic estimate, without creating expectations that won't be met.`,
  },
  {
    q: "We already have a BI tool that isn't working well. Now what?",
    a: "The tool is rarely the problem. The most common patterns are: poorly structured data feeding a well-built dashboard, or a technically correct panel that nobody knows how to use. The assessment looks at the full picture and only recommends changing tools when there is a concrete reason to do so.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function DiscoveryPage() {
  return (
    <main
      id="topo"
      className="lp-mid-dark ts-page-shell relative w-full max-w-full overflow-x-hidden"
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.8rem)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header className="ts-header-shell">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <nav className="ts-nav">
            <Link className="ts-nav-logo" href="/en" aria-label="Back to the Loyal Consulting site">
              <span className="ts-nav-logo-icon">LC</span>
              <span className="ts-nav-logo-text">Loyal Consulting</span>
            </Link>
            <div className="ts-nav-right">
              <
                href={WA_DIAGNOSTICO_EN}
                target="_blank"
                rel="noopener noreferrer"
                className="ts-nav-wa"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <span className="ts-nav-social" role="img" aria-label="Instagram coming soon" title="Instagram coming soon">
                <InstagramIcon />
              </span>
              <span className="ts-nav-social" role="img" aria-label="LinkedIn coming soon" title="LinkedIn coming soon">
                <LinkedInIcon />
              </span>
              <a
                href={WA_DIAGNOSTICO_EN}
                target="_blank"
                rel="noopener noreferrer"
                className="ts-nav-action"
              >
                Free Assessment
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero">
          <div>
            <p className="section-eyebrow reveal-up">Free assessment · 30 minutes</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ textWrap: "auto" }}>
              Tired of pushing for<br />
              data-driven decisions<br />
              while your team still<br />
              lives on spreadsheets?
            </h1>
            <p className="ts-hero-sub reveal-up">
              Your team should be analyzing data, not preparing data. We automate
              reports, integrate data and build dashboards so your team stops losing
              time hunting for numbers.
            </p>
            <p className="ts-hero-copy reveal-up">
              <strong>No commitment. Initial assessment in under 30 minutes.</strong>{" "}
              You leave with clarity on bottlenecks, priority indicators and a first plan
              to reduce spreadsheet dependency and speed up decisions.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_DIAGNOSTICO_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Get Free Assessment
              </a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-calendly">
                Schedule on Calendly
              </a>
            </div>
            <p className="reveal-up" style={{ marginTop: "1rem", fontSize: "0.8rem", color: "rgba(240,237,232,0.45)" }}>
              Takes 3 minutes · Free · Immediate result
            </p>
          </div>
          <div className="ts-hero-visual" style={{ paddingBottom: "2rem" }}>
            <HeroCarouselScene />
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
              Stop wasting time building reports. See what changes.
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
                After implementation
              </p>
              <ul className="lc-consequences-list mt-3">
                {after.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ASSESSMENT (main offer) ──────────────────────────── */}
      <section id="assessment" className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <p
            className="section-eyebrow"
            style={{ display: "flex", justifyContent: "center", marginBottom: "1.2rem" }}
          >
            Main offer
          </p>
          <h2 className="lc-cta-title" style={{ maxWidth: "680px", margin: "0 auto" }}>
            Find out in 3 minutes how much time your company loses because of decentralized data
          </h2>
          <p className="lc-cta-sub" style={{ maxWidth: "540px", margin: "1rem auto 0" }}>
            Receive a free analysis with practical recommendations to reduce rework,
            increase confidence in your numbers and speed up decision-making.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_DIAGNOSTICO_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Start Assessment
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-calendly">
              Schedule on Calendly
            </a>
          </div>
          <p style={{ marginTop: "0.75rem", fontSize: "0.78rem", color: "rgba(240,237,232,0.45)" }}>
            Free · No commitment · Immediate result
          </p>
        </div>
      </section>

      {/* ── WHAT THE ASSESSMENT WILL REVEAL ─────────────────── */}
      <section id="resultado" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Your team should be analyzing data — not preparing data</p>
            <h2 className="section-title mt-3">30 minutes later, you will leave knowing:</h2>
          </div>
          <ol className="mt-12" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0" }}>
            {outcomes.map((item, i) => (
              <li
                key={item.q}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3rem 1fr",
                  gap: "0 1.5rem",
                  padding: "1.75rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", color: "#2ee6a6", paddingTop: "0.2rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--color-text, #f0ede8)", lineHeight: 1.35 }}>{item.q}</p>
                  <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.6 }}>{item.a}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── BEFORE × AFTER (VISUAL) ──────────────────────────── */}
      <section id="antes-depois" className="lc-benefits-section">
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
                  alt="Several Excel spreadsheets open at the same time on one screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "top left" }}
                />
              </div>
              <figcaption className="lc-ba-caption">
                Multiple open files, duplicated tabs and hours of copy-paste to answer a
                single question.
              </figcaption>
            </figure>
            <figure className="lc-ba-card lc-ba-card--depois">
              <span className="lc-ba-label lc-ba-label--depois">✓ After</span>
              <div className="lc-ba-img">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/dashboard-powerbi-vendas.png`}
                  alt="Power BI dashboard with consolidated KPIs"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <figcaption className="lc-ba-caption">
                A dashboard that updates itself: the big picture and the detail, in the same
                place, without depending on anyone to prepare.
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
      <section id="como-funciona" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">How it works</p>
            <h2 className="section-title mt-3">From assessment to dashboard in 5 steps</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {steps.map((step) => (
              <div key={step.num} className="lc-how-step">
                <figure className="lc-how-step-img">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/${step.img}`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover", filter: "brightness(0.8) saturate(0.7)" }}
                  />
                </figure>
                <span className="lc-how-num">{step.num}</span>
                <h3 className="lc-how-title">{step.title}</h3>
                <p className="lc-how-body">{step.body}</p>
                <div className="lc-how-tags">
                  <span className="lc-how-tag">{step.tag}</span>
                </div>
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
              <p className="section-eyebrow">The problem may be simpler than it looks</p>
              <h2 className="section-title mt-3">
                Maybe it is not a lack of dashboards — it is the lack of a single source of truth
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
                <a href={WA_DIAGNOSTICO_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Start Free Assessment
                </a>
                <p className="lc-cta-caption">30 minutes · Free · No commitment</p>
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
                  {stat.title} — {stat.source}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX ────────────────────────────────────────── */}
      <div
        className="parallax-break"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/relatorios-impressos-mesa.jpg')` }}
      >
        <div className="parallax-break__inner">
          <p className="parallax-quote">
            &ldquo;The problem is almost never a lack of data. It is the opportunity cost of not seeing,
            at the right moment, where profitability is slipping because information still depends on
            an intermediary to reach whoever decides.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Business Intelligence</span>
        </div>
      </div>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section id="faq" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">Frequently asked questions</p>
            <h2 className="section-title mt-3">Questions before getting started</h2>
          </div>
          <div className="mt-10 lc-faq-stagger">
            {faqItems.map((item, i) => (
              <div
                key={item.q}
                className="lc-faq-card"
                style={{ marginLeft: i % 2 !== 0 ? "clamp(1rem, 5vw, 3.5rem)" : "0" }}
              >
                <p className="lc-faq-q">{item.q}</p>
                <p className="lc-faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT LOYAL ────────────────────────────────────── */}
      <section id="about" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-8" style={{ alignItems: "center" }}>
            <figure
              style={{
                position: "relative",
                width: "100%",
                minHeight: "380px",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/analista-bi-monitores-duplos.jpg`}
                alt="Loyal Consulting team analyzing business indicators on dual monitors"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </figure>
            <div>
              <p className="section-eyebrow">About Loyal</p>
              <h2 className="section-title mt-3">Specialists in turning data into decisions</h2>
              <p className="section-copy" style={{ marginTop: "0.75rem", fontWeight: 600 }}>
                Boutique Business Intelligence consultancy
              </p>
              <p className="section-copy" style={{ marginTop: "1.6rem" }}>
                Loyal Consulting helps companies eliminate manual controls, integrate
                information and build reliable indicators for management.
              </p>
              <p className="section-copy" style={{ marginTop: "1.2rem" }}>
                Our focus is not just building dashboards. It is building the structure that
                makes the numbers meaningful — and gets them there in time to influence the
                right decisions.
              </p>
              <div className="mt-8">
                <a href={WA_DIAGNOSTICO_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Get Free Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Find out how much time your team can save.</h2>
          <p className="lc-cta-sub">
            Get a free assessment of your data processes and identify opportunities
            for automation and integration — no cost, no commitment.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_DIAGNOSTICO_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Get Free Assessment
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-calendly">
              Schedule on Calendly
            </a>
          </div>
        </div>
      </div>

      {/* ── FORM + FOOTER ────────────────────────────────────── */}
      <div className="lp-dark-band">
        <LeadCaptureForm locale="en" />
        <footer className="mx-auto mt-16 w-full max-w-7xl px-5 pb-12 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <div>
              <p
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(240,237,232,0.28)",
                }}
              >
                © {new Date().getFullYear()} Loyal Consulting
              </p>
              <p style={{ fontSize: "0.65rem", color: "rgba(240,237,232,0.18)", marginTop: "0.2rem" }}>
                Founded by Hugo Leal
              </p>
            </div>
            <p style={{ fontSize: "0.78rem", color: "rgba(240,237,232,0.38)" }}>
              Automated dashboards for managers who need to see beyond spreadsheets.
            </p>
            <Link
              href="/discovery"
              aria-label="Mudar para português"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "rgba(240,237,232,0.38)",
                textDecoration: "none",
                padding: "0.35rem 0.7rem",
                border: "1px solid rgba(240,237,232,0.14)",
                borderRadius: "4px",
              }}
            >
              PT-BR
            </Link>
          </div>
        </footer>
      </div>

      <a
        href={WA_DIAGNOSTICO_EN}
        target="_blank"
        rel="noopener noreferrer"
        className="ts-float-wa"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </main>
  );
}

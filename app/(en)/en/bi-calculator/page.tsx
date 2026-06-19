import type { Metadata } from "next";
import Link from "next/link";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon, WHATSAPP_URL } from "@/components/StickyTopNav";
import { MarqueeBand } from "@/components/MarqueeBand";
import { WA_CALCULADORA_EN } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "BI Economics Calculator",
  description:
    "Answer 6 questions and discover the real cost of manual data work in your team — and how much you could save with BI and automation.",
  path: "/en/bi-calculator",
});

const benefits = [
  {
    n: "01",
    title: "Under 3 minutes",
    body: "No sign-up, no commitment. Fill in your team data and get the estimate instantly.",
  },
  {
    n: "02",
    title: "By role and activity",
    body: "The real cost at every step of your data chain: extraction, modeling, joining, consolidation, analysis.",
  },
  {
    n: "03",
    title: "Automation scenarios",
    body: "Projected savings at 10%, 50%, and 100% automation — so you can show the impact before any investment.",
  },
  {
    n: "04",
    title: "Executive PDF report",
    body: "Ready to present to leadership or use as the basis for justifying a BI project.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell us about your team",
    body: "Role, salary, and hours per activity: extraction, modeling, joining, consolidation, and analysis.",
  },
  {
    n: "02",
    title: "Describe your operation",
    body: "Data sources consulted, update frequency, and how often numbers diverge between systems.",
  },
  {
    n: "03",
    title: "Get your estimate",
    body: "Annual cost, hours lost, and savings scenarios by automation level — with an executive PDF.",
  },
];

export default function BICalculatorPage() {
  return (
    <main
      id="top"
      className="lp-teal ts-page-shell relative w-full max-w-full overflow-x-hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.8rem)" }}
    >
      {/* ── NAV ─────────────────────────────────────────────── */}
      <header className="ts-header-shell">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <nav className="ts-nav">
            <Link className="ts-nav-logo" href="/en" aria-label="Back to Loyal Consulting">
              <span className="ts-nav-logo-icon" aria-hidden="true">LC</span>
              <span className="ts-nav-logo-text">Loyal Consulting</span>
            </Link>
            <div className="ts-nav-pill">
              <a href="#top">Home</a>
              <a href="#benefits">Benefits</a>
              <a href="#how-it-works">How It Works</a>
              <Link href="/calculadora/">Open Calculator →</Link>
            </div>
            <div className="ts-nav-right">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ts-nav-wa" aria-label="Chat on WhatsApp">
                <WhatsAppIcon />
              </a>
              <span className="ts-nav-social" role="img" aria-label="Instagram coming soon"><InstagramIcon /></span>
              <span className="ts-nav-social" role="img" aria-label="LinkedIn coming soon"><LinkedInIcon /></span>
              <a href="/calculadora/" className="btn-accent" style={{ fontSize: "0.78rem", padding: "0.5rem 1.1rem" }}>
                Calculate now
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "min(72vh, 680px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="mx-auto w-full max-w-7xl px-5 sm:px-8"
          style={{ position: "relative", zIndex: 1, paddingTop: "8rem", paddingBottom: "5rem" }}
        >
          <div style={{ maxWidth: "680px" }}>
            <p className="section-eyebrow reveal-up">BI Economics Calculator · Free</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ textWrap: "auto" }}>
              How much does manual<br />
              data work cost your team<br />
              — per year?
            </h1>
            <p className="ts-hero-sub reveal-up">
              Answer 6 questions and discover the real cost of manual extractions,
              adjustments, and consolidations — and how much you could save with BI and automation.
            </p>
            <p className="ts-hero-copy reveal-up">
              <strong>No sign-up. No commitment.</strong>{" "}
              In under 3 minutes you get an executive report with the numbers organized
              and ready to share with leadership.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href="/calculadora/" className="btn-accent">
                Calculate now (free)
              </a>
              <a href={WA_CALCULADORA_EN} target="_blank" rel="noopener noreferrer" className="btn-calendly">
                I&apos;d rather talk first →
              </a>
            </div>
            <p className="reveal-up" style={{ marginTop: "1rem", fontSize: "0.8rem", color: "rgba(240,237,232,0.45)" }}>
              Under 3 minutes · Free · Executive PDF included
            </p>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <MarqueeBand />

      {/* ── PROBLEM ─────────────────────────────────────────── */}
      <section id="problem" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-8">
            <div>
              <p className="section-eyebrow">The hidden cost of manual data</p>
              <h2 className="section-title mt-3">
                Your team spends hours every week on work a system could do automatically
              </h2>
              <p className="section-copy mt-4" style={{ fontSize: "0.9rem" }}>
                Downloading files, fixing formulas, joining spreadsheets, consolidating reports.
                That time has an exact monetary value — and almost no one has calculated it.
                Without that number, any conversation about investing in BI starts in the dark.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Analysts spend hours each week just preparing data for analysis",
                "Reports arrive late because they depend on manual consolidation",
                "Discrepancies between systems consume meeting time",
                "The real cost of this work has never been measured precisely",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    fontSize: "0.93rem",
                    color: "rgba(240,237,232,0.72)",
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{ flexShrink: 0, color: "#2ee6a6", fontWeight: 700, marginTop: "0.05rem" }}>×</span>
                  {item}
                </div>
              ))}
              <div style={{ marginTop: "0.5rem" }}>
                <a href="/calculadora/" className="btn-accent">
                  Calculate my cost now
                </a>
                <p className="lc-cta-caption">Free · PDF included · No sign-up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────────────── */}
      <section id="benefits" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">What you get</p>
            <h2 className="section-title mt-3">Four deliverables in under 3 minutes</h2>
          </div>
          <ol className="mt-12" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 0 }}>
            {benefits.map((b) => (
              <li
                key={b.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3rem 1fr",
                  gap: "0 1.5rem",
                  padding: "1.75rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", color: "#2ee6a6", paddingTop: "0.2rem" }}>
                  {b.n}
                </span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--color-text, #f0ede8)", lineHeight: 1.35 }}>{b.title}</p>
                  <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.6 }}>{b.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section id="how-it-works" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">How it works</p>
            <h2 className="section-title mt-3">Three steps to the number you need</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {steps.map((s) => (
              <div key={s.n} className="lc-how-step" style={{ background: "none", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "2rem 1.5rem" }}>
                <span className="lc-how-num">{s.n}</span>
                <h3 className="lc-how-title">{s.title}</h3>
                <p className="lc-how-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDIBILITY ─────────────────────────────────────── */}
      <section id="credibility" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8">
            <p className="section-eyebrow">The cost has a name — and a dollar figure</p>
            <h2 className="section-title mt-3">This isn&apos;t a new problem. It just hasn&apos;t been measured at your company yet.</h2>
          </div>
          <div className="lc-benefits-grid mt-12">
            {[
              {
                source: "McKinsey Global Institute",
                title: "The Age of Analytics",
                url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-age-of-analytics-competing-in-a-data-driven-world",
                text: "Data analysts and scientists spend between 60% and 80% of their time preparing and validating data — before any analysis takes place. That time has a direct cost that can be quantified by role and activity.",
              },
              {
                source: "Deloitte Insights",
                title: "Insight-Driven Organisations",
                url: "https://www.deloitte.com/uk/en/services/consulting/services/insight-driven-organisations.html",
                text: "Companies that measure and reduce the time spent on manual data work make faster decisions, make fewer operational errors, and build sustainable competitive advantage.",
              },
              {
                source: "PwC",
                title: "ERP Data Modernization",
                url: "https://www.pwc.com/us/en/services/consulting/business-transformation/data-analytics/erp-data-modernization.html",
                text: "Modernizing data processes unlocks value trapped in manual workflows, turning hours spent on consolidation into real analytical capacity — with measurable returns for management.",
              },
            ].map((s) => (
              <div
                key={s.source}
                className="lc-benefit-item"
                style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.6rem" }}
              >
                <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2ee6a6", margin: 0 }}>
                  {s.source}
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(240,237,232,0.65)", lineHeight: 1.65, margin: 0 }}>
                  &ldquo;{s.text}&rdquo;
                </p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.68rem", color: "rgba(240,237,232,0.28)", textDecoration: "underline", wordBreak: "break-all", lineHeight: 1.4 }}>
                  {s.title} · {s.source}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA CALCULATOR ──────────────────────────────────── */}
      <div className="lc-cta-band" style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(46,230,166,0.08), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center" style={{ position: "relative" }}>
          <p className="section-eyebrow" style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
            BI Economics Calculator · Free
          </p>
          <h2 className="lc-cta-title" style={{ maxWidth: "620px", margin: "0 auto" }}>
            Know the number before making any decision about data
          </h2>
          <p className="lc-cta-sub" style={{ maxWidth: "520px", margin: "1rem auto 0" }}>
            Takes under 3 minutes. You leave with an executive PDF ready to share with the board — no sign-up, no commitment.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <Link href="/calculadora/" className="btn-accent" style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}>
              Open Free Calculator →
            </Link>
            <a href={WA_CALCULADORA_EN} target="_blank" rel="noopener noreferrer" className="btn-calendly">
              I'd prefer to talk first
            </a>
          </div>
          <p style={{ marginTop: "1rem", fontSize: "0.78rem", color: "rgba(240,237,232,0.38)" }}>
            No sign-up · Executive PDF included · Immediate result
          </p>
        </div>
      </div>

      {/* ── NEXT STEPS ──────────────────────────────────────── */}
      <section className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8 text-center" style={{ marginBottom: "2.5rem" }}>
            <p className="section-eyebrow" style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              After you see the number, what comes next?
            </p>
            <h2 className="section-title" style={{ maxWidth: "620px", margin: "0 auto" }}>
              The calculator result is the start of the conversation — not the end
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div style={{ border: "1px solid rgba(46,230,166,0.25)", borderRadius: "16px", padding: "1.75rem", background: "rgba(46,230,166,0.05)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2ee6a6", margin: 0 }}>
                Did the number surprise you?
              </p>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text, #f0ede8)", lineHeight: 1.35, margin: 0 }}>
                Schedule a 30-minute call
              </h3>
              <p style={{ fontSize: "0.88rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                Bring the PDF to the conversation. Our team interprets the results, identifies
                where the quickest gains are, and lays out a concrete path to reduce that cost.
              </p>
              <a href={WA_CALCULADORA_EN} target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ marginTop: "0.5rem", textAlign: "center" }}>
                Talk through the results →
              </a>
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "1.75rem", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(240,237,232,0.45)", margin: 0 }}>
                Still exploring?
              </p>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text, #f0ede8)", lineHeight: 1.35, margin: 0 }}>
                See how the transformation works in practice
              </h3>
              <p style={{ fontSize: "0.88rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                Understand the full process — from assessment to data integration and dashboards —
                and find out which step makes the most sense for where your company is right now.
              </p>
              <Link href="/en/discovery" className="btn-outline" style={{ marginTop: "0.5rem", textAlign: "center" }}>
                See how the Discovery works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <div className="lp-dark-band">
        <footer className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8">
          <div className="section-divider" />
          <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <div>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.28)" }}>
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
              href="/calculadora-bi"
              aria-label="Mudar para Português"
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

      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ts-float-wa" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
    </main>
  );
}

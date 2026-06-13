import Link from "next/link";
import { MarqueeBand } from "@/components/MarqueeBand";
import { HeroCarouselScene } from "@/components/HeroCarouselScene";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_COMECAR_EN, WA_DIAGNOSTICO_EN } from "@/lib/links";

// ── Sound familiar? ────────────────────────────────────────────────────────
const painPoints = [
  "You open several spreadsheets just to understand how the company is doing",
  "Hours are lost consolidating reports by hand",
  "Each team reports a different number for the same KPI",
  "Information arrives too late to act on",
  "There is little trust in the numbers used in meetings",
  "Your team spends more time building reports than analyzing them",
];

// ── Imagine starting the day with answers ──────────────────────────────────
const morningAnswers = [
  "How the main business KPIs are doing",
  "Where results are off-track versus targets",
  "Which areas need attention right now",
  "How the operation has evolved over time",
  "Where the biggest improvement opportunities are",
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
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero">
          <div>
            <p className="section-eyebrow reveal-up">Loyal Consulting · Business Intelligence</p>
            <h1 className="ts-hero-h1 reveal-up mt-3">
              Stop running your<br />
              business through<br />
              dozens of spreadsheets
            </h1>
            <p className="ts-hero-sub reveal-up">
              We bring your spreadsheets and systems together into a single dashboard that
              updates itself and shows what is going on — no rework, no guesswork.
            </p>
            <p className="ts-hero-copy reveal-up">
              <strong>
                See the forest and every single leaf of your business, on one screen.
              </strong>
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_DIAGNOSTICO_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                I want a free assessment
              </a>
              <Link href="/en/how-it-works" className="btn-outline">
                See how it works
              </Link>
            </div>
          </div>
          <div className="ts-hero-visual" style={{ paddingBottom: "2rem" }}>
            <HeroCarouselScene />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <MarqueeBand />

      {/* ── SOUND FAMILIAR? ─────────────────────────────────── */}
      <section id="identifica" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Sound familiar?</p>
            <h2 className="section-title mt-3">Do any of these situations look like your routine?</h2>
          </div>

          <div className="lc-dores-grid mt-12">
            <div>
              <ul className="lc-dores-list">
                {painPoints.map((pain) => (
                  <li key={pain}>
                    <span className="lc-dores-bullet">×</span>
                    {pain}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <p className="lc-dores-while-title lc-dores-while-title--cool">
                If at least two of these are part of your routine...
              </p>
              <h3 className="section-title" style={{ fontSize: "1.2rem" }}>
                ...this can be automated, giving hours back to your team
              </h3>
              <div className="mt-8">
                <a href={WA_DIAGNOSTICO_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  I want a free assessment
                </a>
                <p className="mt-3" style={{ fontSize: "0.82rem", color: "rgba(240,237,232,0.5)" }}>
                  Straight on WhatsApp · No commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGINE STARTING THE DAY WITH ANSWERS ───────────── */}
      <section id="imagine" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14">
            <div>
              <p className="section-eyebrow">The other side</p>
              <h2 className="section-title mt-3">Imagine starting the day with answers ready</h2>
              <p className="section-copy mt-4">
                Instead of hunting numbers across files, you open one screen and instantly see:
              </p>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <ul className="lc-consequences-list">
                {morningAnswers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="section-copy mt-6" style={{ color: "rgba(240,237,232,0.85)", fontWeight: 600 }}>
                All in a single dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT LOYAL ─────────────────────────────────────── */}
      <section id="sobre" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14">
            <div>
              <p className="section-eyebrow">About Loyal</p>
              <h2 className="section-title mt-3">A boutique Business Intelligence consultancy</h2>
            </div>
            <div>
              <p className="section-copy">
                Ten years of data operations, watching entire departments — even inside
                billion-dollar companies — operate blind despite having oceans of information.
              </p>
              <p className="section-copy mt-4">
                We work side by side with coordinators, supervisors and managers to turn
                disconnected spreadsheets and systems into faster, more reliable decisions.
                Lean projects, practical deliveries, no unnecessary complexity.
              </p>
            </div>
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
            &ldquo;Stop spending hours opening spreadsheets to understand how the business
            is doing. Start the day with one dashboard and the answers ready — updated on
            its own, with zero rework.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Business Intelligence</span>
        </div>
      </div>

      {/* ── DISCOVERY ───────────────────────────────────────── */}
      <section id="discovery" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14">
            <div>
              <p className="section-eyebrow">Next step</p>
              <h2 className="section-title mt-3">Want to see this applied to your reality?</h2>
              <p className="section-copy mt-4">
                Discovery is a free 30-minute conversation to understand your routine, pick
                the numbers that matter and outline the path to your dashboard.
              </p>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <p className="lc-dores-while-title lc-dores-while-title--cool">Worth it if you:</p>
              <ul className="lc-consequences-list mt-3">
                <li>Feel like you are making decisions in the dark</li>
                <li>Know the current process doesn&apos;t scale — but don&apos;t know where to start</li>
                <li>Want to understand what is possible before any commitment</li>
              </ul>
              <div className="mt-6">
                <Link href="/en/discovery" className="btn-accent">
                  Request a Discovery
                </Link>
                <p className="mt-3" style={{ fontSize: "0.78rem", color: "rgba(240,237,232,0.5)" }}>
                  Free 30-minute conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Shall we find out how to simplify your data management?</h2>
          <p className="lc-cta-sub">
            Reach out on WhatsApp and get a personalized recommendation on next steps.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_COMECAR_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
              I want to get started
            </a>
            <Link href="/en/contact" className="btn-outline">
              Go to contact
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter locale="en" />
    </main>
  );
}

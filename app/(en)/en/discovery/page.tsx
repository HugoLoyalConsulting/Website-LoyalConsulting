import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroCarouselScene } from "@/components/HeroCarouselScene";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { MarqueeBand } from "@/components/MarqueeBand";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/StickyTopNav";
import { WA_DISCOVERY_EN } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free 30-minute Discovery",
  description:
    "Spending too much time in spreadsheets? In 30 minutes find out how automated dashboards change the routine of managers who need reliable data, fast.",
  path: "/en/discovery",
});

// ── Qualifier ──────────────────────────────────────────────────────────────
const goodFit = [
  "You manage targets, teams or results",
  "Your day starts by opening reports or spreadsheets from different areas",
  "You depend on someone to prepare or consolidate data before deciding",
  "You've wanted a centralized dashboard but don't know where to start",
  "You tried BI before and the project never got off the ground",
];

const badFit = [
  "You don't track any business KPI yet",
  "The goal is to create charts with no clear decision-making need",
  "There is no openness to simplifying current manual processes",
];

// ── What you will leave knowing ────────────────────────────────────────────
const outcomes = [
  "Which 3 KPIs have the most impact on your business right now",
  "Where your data lives and what can already be leveraged",
  "What could be built — and how fast",
  "Whether it makes sense to move forward and what the concrete next step would be",
];

// ── How it works ───────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Book on WhatsApp",
    body: "Send us a message and we pick a time that works for both sides. No complicated form.",
    img: "ipad-google-analytics.jpg",
    tag: "2 minutes",
  },
  {
    num: "02",
    title: "30-minute Discovery",
    body: "A structured conversation: we map your data, prioritize your KPIs and identify what already exists in the company.",
    img: "analistas-revisando-dashboard.jpg",
    tag: "No commitment",
  },
  {
    num: "03",
    title: "Clear proposal",
    body: "If it makes sense to move forward, you receive three delivery options with timelines and pricing. You choose — or not.",
    img: "apresentacao-dashboard-apontando.jpg",
    tag: "No pressure",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "We tried BI before and no one used it. Why would this be different?",
    a: "That is the most common story. BI projects fail almost always for the same reason: they started with the tool, not the problem. When the central question is "what data do I need to make this decision?", the dashboard becomes a consequence, not a goal. Discovery starts there — and does not move forward until that question is answered.",
  },
  {
    q: "Our data lives in too many places. Seems too complex.",
    a: "Most of the companies we work with are in exactly that situation: three systems, two spreadsheets and a report that doesn't agree with either of them. That is not an exception — it is the most common starting point. Discovery exists to map what is there and find the most direct path forward, without overpromising.",
  },
  {
    q: "I'm worried the dashboard will be built but no one will use it.",
    a: "That fear is among the most justified — and it almost always comes true when the dashboard was built without involving the people who will use it. Our process maps from the start who needs to see what, at what frequency and on which device. Adoption doesn't start at training — it starts at design.",
  },
  {
    q: "I don't know exactly what I want. Is it still worth talking?",
    a: "That is exactly what Discovery is for. Knowing that "the numbers arrive too late" or that "nobody agrees on which spreadsheet is right" is already enough to start. Scope clarity is the output of Discovery — not a prerequisite for it.",
  },
  {
    q: "Does the Discovery cost anything?",
    a: "No. It is a 30-minute conversation. No product pitch, no commitment. If moving forward doesn't make sense at the end, you leave with more clarity about the problem than you came in with — which already has value on its own.",
  },
  {
    q: "How long until I have something working?",
    a: "Most companies want a dashboard "within a week." Sometimes that is possible — when the data is already organized. What determines the timeline is the quality of what exists, not the speed of development. Discovery maps that and returns a realistic estimate, without creating expectations that won't be met.",
  },
  {
    q: "We already have a BI tool that isn't working well. Now what?",
    a: "The tool is rarely the problem. The most common patterns are: poorly structured data feeding a well-built dashboard, or a technically correct panel that nobody knows how to use. Discovery looks at the full picture — and only recommends changing tools when there is a concrete reason to do so.",
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
              <Link href="/discovery" className="ts-nav-lang" aria-label="Mudar para português">
                PT
              </Link>
              <a
                href={WA_DISCOVERY_EN}
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
                href={WA_DISCOVERY_EN}
                target="_blank"
                rel="noopener noreferrer"
                className="ts-nav-action"
              >
                Book a Discovery
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero">
          <div>
            <p className="section-eyebrow reveal-up">Free Discovery · 30 minutes · No commitment</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ textWrap: "auto" }}>
              Are your decisions<br />
              still spread across<br />
              many spreadsheets?
            </h1>
            <p className="ts-hero-sub reveal-up">
              Managers who centralize their data in an automated dashboard recover hours
              every week — and walk into meetings knowing exactly what is happening.
              In 30 minutes, find out if this works for your scenario.
            </p>
            <p className="ts-hero-copy reveal-up">
              <strong>No cost. No fluff. No product pitch.</strong>{" "}
              Just a structured conversation where we understand your data, your questions
              and what needs to change so you stop depending on manual reports.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_DISCOVERY_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                I want my free Discovery
              </a>
              <a href="#contato" className="btn-outline">
                I&apos;d rather fill out the form
              </a>
            </div>
          </div>
          <div className="ts-hero-visual" style={{ paddingBottom: "2rem" }}>
            <HeroCarouselScene />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <MarqueeBand />

      {/* ── QUALIFIER ───────────────────────────────────────── */}
      <section id="para-quem" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Who it is for</p>
            <h2 className="section-title mt-3">This conversation was made for you</h2>
          </div>
          <div className="lc-dores-grid mt-12">
            <div>
              <p className="lc-dores-while-title lc-dores-while-title--cool" style={{ marginBottom: "1rem" }}>
                Yes, if you:
              </p>
              <ul className="lc-consequences-list mt-3">
                {goodFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                <a href={WA_DISCOVERY_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  I want my free Discovery
                </a>
                <p className="lc-cta-caption">30 minutes · Free · No commitment</p>
              </div>
            </div>
            <div className="lc-dores-consequences">
              <p className="lc-dores-while-title" style={{ marginBottom: "1rem" }}>
                Maybe not the right time if:
              </p>
              <ul className="lc-dores-list mt-3">
                {badFit.map((item) => (
                  <li key={item}>
                    <span className="lc-dores-bullet">×</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="section-copy mt-6" style={{ fontSize: "0.85rem" }}>
                If you recognized yourself in the items above, it is probably not the right
                moment yet — and that is completely fine. When the context changes, we are here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU WILL LEAVE KNOWING ─────────────────────── */}
      <section id="resultado" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">What you will leave knowing</p>
            <h2 className="section-title mt-3">30 minutes later, you will have:</h2>
          </div>
          <div className="lc-benefits-grid mt-12">
            {outcomes.map((item) => (
              <div key={item} className="lc-benefit-item">
                <span className="lc-benefit-check">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE AND AFTER ────────────────────────────────── */}
      <section id="antes-depois" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
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
            <figure className="lc-ba-card lc-ba-card--antes">
              <span className="lc-ba-label lc-ba-label--antes">× Before</span>
              <div className="lc-ba-img lc-ba-img--dense-sheet">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/antes-planilha-ininteligivel.png`}
                  alt="An overly long spreadsheet with too many columns and dense data"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "right 25% top" }}
                />
              </div>
              <figcaption className="lc-ba-caption">
                An oversized spreadsheet too dense to read fast enough for real decisions.
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
        </div>
      </section>

      {/* ── PARALLAX ────────────────────────────────────────── */}
      <div
        className="parallax-break"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/relatorios-impressos-mesa.jpg')` }}
      >
        <div className="parallax-break__inner">
          <p className="parallax-quote">
            &ldquo;The problem is almost never a lack of data. It is knowing which data
            matters — and having it available without needing an intermediary.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Discovery</span>
        </div>
      </div>

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section id="como-funciona" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">How it works</p>
            <h2 className="section-title mt-3">Three steps. Zero friction</h2>
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

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section id="faq" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Frequently asked questions</p>
            <h2 className="section-title mt-3">Questions before booking</h2>
          </div>
          <div className="mt-10" style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "720px" }}>
            {faqItems.map((item) => (
              <div key={item.q} className="lc-faq-card">
                <p className="lc-faq-q">{item.q}</p>
                <p className="lc-faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Stop opening 5 spreadsheets to answer one question</h2>
          <p className="lc-cta-sub">
            30 minutes is all you need to find out if there is a more efficient path.
            No cost. No commitment. And with clarity on what to do next.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_DISCOVERY_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
              I want my free Discovery
            </a>
            <a href="#contato" className="btn-outline">
              Fill out the form
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
            <p style={{ fontSize: "0.78rem", color: "rgba(240,237,232,0.38)" }}>
              Automated dashboards for managers who need to see beyond spreadsheets.
            </p>
          </div>
        </footer>
      </div>

      <a
        href={WA_DISCOVERY_EN}
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

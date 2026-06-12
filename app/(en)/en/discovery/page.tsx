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
    "Stop opening dozens of spreadsheets to find out whether your company is doing well. Book a free 30-minute conversation and see what your dashboard could look like.",
  path: "/en/discovery",
});

// ── Sound familiar? ────────────────────────────────────────────────────────
const painPoints = [
  "You open several spreadsheets every day to understand what is happening in the company.",
  "Each team presents different numbers to answer the same question.",
  "Reports take so long to get ready that decisions have already lost their timing.",
  "Your team spends hours consolidating information by hand.",
  "You know you need dashboards, but don't know where to start.",
  "You tried BI before, but the project got too complex or was never used.",
];

// ── What happens during the Discovery ──────────────────────────────────────
const discoveryBlocks = [
  {
    num: "01",
    title: "Which answers you need about the business",
    intro: "For example:",
    items: [
      "Are we hitting our targets?",
      "Where are the bottlenecks?",
      "Which customers, products or units need attention?",
    ],
    img: "laptop-analytics-aberto.jpg",
  },
  {
    num: "02",
    title: "How those answers are produced today",
    intro: "We will map:",
    items: [
      "Spreadsheets",
      "Systems in use",
      "Existing reports",
      "Manual processes",
    ],
    img: "documentos-gestao-projetos.jpg",
  },
  {
    num: "03",
    title: "What the highest-impact first delivery would be",
    intro: "By the end, you will have clarity on:",
    items: [
      "Priorities",
      "Potential gains",
      "The next steps best suited to your scenario",
    ],
    img: "dashboard-powerbi-vendas.png",
  },
];

// ── Expected outcome ───────────────────────────────────────────────────────
const expectedOutcomes = [
  "Which KPIs really matter",
  "Which processes are consuming time unnecessarily",
  "Which data already exists inside the company",
  "What the best starting point would be",
  "Whether a BI or automation project makes sense",
];

// ── Who it is for ──────────────────────────────────────────────────────────
const goodFit = [
  "You manage teams or operations",
  "You make decisions based on reports",
  "You use Excel frequently to track results",
  "Your information is spread across different systems",
  "You want more speed and confidence in data analysis",
];

const badFit = [
  "You don't track any business KPI yet",
  "There is no openness to changing current processes",
  "The goal is just to create charts with no clear business need",
];

// ── How it works ───────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Scheduling",
    body: "Pick the best time for us to talk.",
    img: "ipad-google-analytics.jpg",
  },
  {
    num: "02",
    title: "Discovery",
    body: "A meeting of about 30 minutes to understand your current scenario and business goals.",
    img: "analistas-revisando-dashboard.jpg",
  },
  {
    num: "03",
    title: "Next steps",
    body: "If there is a fit, we present a proposal suited to your company's reality.",
    img: "apresentacao-dashboard-apontando.jpg",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "Does the Discovery cost anything?",
    a: "No. The goal is to understand your current context and check whether we can generate value for your business.",
  },
  {
    q: "Do I need to have Power BI?",
    a: "No. The meeting focuses on the problem and the company's needs, regardless of the tools you use today.",
  },
  {
    q: "Do I need to know exactly what I want?",
    a: "Also no. Many companies arrive with nothing more than the feeling that “the current process is not sustainable”. The Discovery exists precisely to bring clarity.",
  },
  {
    q: "Do you only work with dashboards?",
    a: "Not necessarily. Depending on the scenario, we can also look at report automation, data consolidation, simple integrations and other initiatives related to the practical use of data.",
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
      className="lp-light ts-page-shell relative w-full max-w-full overflow-x-hidden"
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.8rem)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ── NAV (lean LP version) ───────────────────────────── */}
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
            <p className="section-eyebrow reveal-up">Free Discovery · 30 minutes</p>
            <h1 className="ts-hero-h1 reveal-up mt-3">
              Stop opening dozens<br />
              of spreadsheets to find out<br />
              if your company is doing well
            </h1>
            <p className="ts-hero-sub reveal-up">
              Find out which numbers really matter for your business — and how to have them
              on a dashboard that updates itself. If you live in Excel and depend on
              scattered reports to decide, this conversation was made for you.
            </p>
            <p className="ts-hero-copy reveal-up">
              <strong>
                Book a free 30-minute Discovery
              </strong>{" "}
              and understand which KPIs to prioritize, which data to use and what the most
              efficient path is to automate your view of the business.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_DISCOVERY_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Shall we book it? It&apos;s on WhatsApp
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

      {/* ── MARQUEE (BI/DataEng stack) ──────────────────────── */}
      <MarqueeBand />

      {/* ── SOUND FAMILIAR? ─────────────────────────────────── */}
      <section id="identifica" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Sound familiar?</p>
            <h2 className="section-title mt-3">Do any of these situations look familiar?</h2>
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
                If any of this sounds familiar...
              </p>
              <h3 className="section-title" style={{ fontSize: "1.2rem" }}>
                ...there is probably an opportunity to simplify your operation
              </h3>
              <p className="section-copy mt-4">
                And to increase confidence in decisions — without depending on manual
                consolidations and late reports.
              </p>
              <div className="mt-8">
                <a href={WA_DISCOVERY_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  I want to book my Discovery
                </a>
                <p className="lc-cta-caption">
                  Free · 30 minutes · No commitment.
                </p>
              </div>
            </div>
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
                A dashboard that updates itself and shows the forest and every leaf:
                the big picture and the detail, in the same place.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── PARALLAX BREAK ──────────────────────────────────── */}
      <div
        className="parallax-break"
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/relatorios-impressos-mesa.jpg')` }}
      >
        <div className="parallax-break__inner">
          <p className="parallax-quote">
            &ldquo;This is not a traditional sales demo. It is a structured conversation to
            understand your scenario.&rdquo;
          </p>
          <span className="parallax-attribution">Loyal Consulting · Discovery</span>
        </div>
      </div>

      {/* ── WHAT HAPPENS DURING THE DISCOVERY ───────────────── */}
      <section id="discovery" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">What happens during the Discovery</p>
            <h2 className="section-title mt-3">A structured conversation to understand:</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {discoveryBlocks.map((block) => (
              <div key={block.num} className="lc-how-step">
                <figure className="lc-how-step-img">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/${block.img}`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover", filter: "brightness(0.8) saturate(0.7)" }}
                  />
                </figure>
                <span className="lc-how-num">{block.num}</span>
                <h3 className="lc-how-title">{block.title}</h3>
                <p className="lc-how-body" style={{ flex: "none" }}>{block.intro}</p>
                <div className="lc-how-tags" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
                  {block.items.map((item) => (
                    <span key={item} className="lc-step-item">
                      <span style={{ color: "#0e9488", flexShrink: 0 }}>·</span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPECTED OUTCOME ────────────────────────────────── */}
      <section id="resultado" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Expected outcome</p>
            <h2 className="section-title mt-3">By the end of the meeting, you will have more clarity on:</h2>
          </div>
          <div className="lc-benefits-grid mt-12">
            {expectedOutcomes.map((item) => (
              <div key={item} className="lc-benefit-item">
                <span className="lc-benefit-check">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT IS FOR ───────────────────────────────────── */}
      <section id="para-quem" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Who it is for</p>
            <h2 className="section-title mt-3">Who is this Discovery recommended for?</h2>
          </div>

          <div className="lc-dores-grid mt-12">
            <div>
              <p className="lc-dores-while-title lc-dores-while-title--cool">Yes, if you:</p>
              <ul className="lc-consequences-list mt-3">
                {goodFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="lc-dores-consequences">
              <p className="lc-dores-while-title">Maybe not the right time if:</p>
              <ul className="lc-dores-list mt-3">
                {badFit.map((item) => (
                  <li key={item}>
                    <span className="lc-dores-bullet">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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
                  <span className="lc-how-tag">Free</span>
                  <span className="lc-how-tag">30 minutes</span>
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
            <h2 className="section-title mt-3">Common questions before booking</h2>
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
          <h2 className="lc-cta-title">Maybe you don&apos;t need another spreadsheet</h2>
          <p className="lc-cta-sub">
            Maybe you just need the right information, organized the right way, to make
            decisions with more confidence. Book your free Discovery and find out the
            smartest next step for your scenario.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_DISCOVERY_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Shall we book it? It&apos;s on WhatsApp
            </a>
            <a href="#contato" className="btn-outline">
              Fill out the Discovery form
            </a>
          </div>
        </div>
      </div>

      {/* ── DISCOVERY FORM + FOOTER (dark band) ─────────────── */}
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
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(240,237,232,0.38)",
            }}
          >
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

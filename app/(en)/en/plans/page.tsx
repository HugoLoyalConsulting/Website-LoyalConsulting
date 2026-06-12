import type { Metadata } from "next";
import Link from "next/link";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_PROPOSTA_EN } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Plans",
  description:
    "BASIC, PRO and PREMIUM: the investment follows project complexity. Automated dashboards starting at R$ 2,000.",
  path: "/en/plans",
});

const plans = [
  {
    tier: "BASIC",
    price: "R$ 2,000+",
    desc: "For teams that need to automate an extraction, organize a data base or take their first steps with data.",
    features: [
      "Pipeline or extraction automation",
      "Up to 2 data sources",
      "Essential KPIs",
      "Practical, objective delivery",
      "Initial training",
    ],
    highlight: false,
  },
  {
    tier: "PRO",
    price: "R$ 5,000+",
    desc: "For areas that need to integrate different sources and get a complete dashboard to track results.",
    features: [
      "Multiple integrated sources",
      "Data modeling and relationships",
      "Dashboard in Power BI, Tableau or Looker",
      "KPIs and business rules",
      "Team training",
    ],
    highlight: true,
  },
  {
    tier: "PREMIUM",
    price: "R$ 10,000+",
    desc: "For more complex operations, with robust automations, multiple dashboards and recurring refreshes.",
    features: [
      "Advanced pipelines and integrations",
      "Many sources and systems",
      "Multiple dashboards",
      "Automated refreshes",
      "Extended mentoring and training",
    ],
    highlight: false,
  },
];

const faqItems = [
  {
    q: "Do we need to have Power BI today?",
    a: "No. We assess your current scenario and recommend the most suitable approach.",
  },
  {
    q: "Do you only work with Power BI?",
    a: "Our main focus is Power BI, automations and data consolidation for decision-making.",
  },
  {
    q: "Can we reuse our current spreadsheets?",
    a: "Yes. In many cases they are the starting point for automating existing processes.",
  },
  {
    q: "How much does a project cost?",
    a: "Projects vary with the complexity of the data and the KPIs required. During the initial assessment we identify the most suitable range for your reality.",
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

export default function PlansPage() {
  return (
    <main
      className="ts-page-shell relative w-full max-w-full overflow-x-hidden"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.8rem)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <StickyTopNav locale="en" />

      {/* ── HEADER ──────────────────────────────────────────── */}
      <section className="lc-page-header mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero">
          <div>
            <p className="section-eyebrow reveal-up">Plans</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}>
              The investment follows<br />
              project complexity
            </h1>
            <p className="ts-hero-sub reveal-up">
              The values below are starting points. The exact scope is defined with you,
              based on the data sources and the KPIs you need.
            </p>
          </div>
        </div>
      </section>

      {/* ── PLANS ───────────────────────────────────────────── */}
      <section id="planos" className="lc-plans-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-plans-grid mt-14">
            {plans.map((plan) => (
              <div
                key={plan.tier}
                className={`lc-plan-card${plan.highlight ? " lc-plan-card--highlight" : ""}`}
              >
                <span className="lc-plan-tier">{plan.tier}</span>
                <div>
                  <p className="lc-plan-price">{plan.price}</p>
                </div>
                <p className="lc-plan-desc">{plan.desc}</p>
                <div>
                  <p className="lc-plan-section-label">Typical complexity</p>
                  <ul className="lc-plan-features">
                    {plan.features.map((f) => (
                      <li key={f} className="lc-plan-feature-item">
                        <span className="lc-plan-feature-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={WA_PROPOSTA_EN} target="_blank" rel="noopener noreferrer" className="lc-plan-cta">
                  Request a proposal
                </a>
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
            <h2 className="section-title mt-3">Common questions before getting started</h2>
          </div>
          <div className="mt-10" style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "720px" }}>
            {faqItems.map((item) => (
              <div
                key={item.q}
                style={{
                  padding: "1.4rem 1.6rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <p style={{ fontWeight: 600, fontSize: "0.98rem", color: "rgba(240,237,232,0.95)", marginBottom: "0.5rem" }}>
                  {item.q}
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(240,237,232,0.6)", lineHeight: 1.6, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Not sure which plan makes sense?</h2>
          <p className="lc-cta-sub">
            The free 30-minute Discovery helps estimate the complexity of your scenario.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <Link href="/en/discovery" className="btn-accent">
              Request a Discovery
            </Link>
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

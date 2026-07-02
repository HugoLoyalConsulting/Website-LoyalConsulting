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
    q: "Our data is a mess. Can we still start?",
    a: "Yes, and that is the most common starting point. Data scattered across spreadsheets, disconnected systems and reports that don't agree are the entry state for most projects. Discovery maps what is there and defines a realistic starting point, without requiring everything to already be organized.",
  },
  {
    q: "How do I know which plan makes sense for my situation?",
    a: "The free 30-minute Discovery exists exactly for that. By the end of the conversation you will have clarity on the complexity of your scenario and which investment range makes the most sense, before any commitment.",
  },
  {
    q: "Will my team actually use the dashboard day to day?",
    a: "That depends on how it was built. Dashboards that nobody uses were almost always built without involving the people who will use them. In our process, team validation and training are part of the delivery; not optional.",
  },
  {
    q: "Can I start with a smaller scope and grow from there?",
    a: "Yes, and it is usually the smarter approach. Starting with a focused dashboard, validating with the team, and expanding from what works generates more value than trying to solve everything at once in a long, complex project.",
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
              The scope follows<br />
              project complexity
            </h1>
            <p className="ts-hero-sub reveal-up">
              Every project is defined together with you, based on your data sources and
              the KPIs you need. Pricing is shared in the free Discovery call.
            </p>
          </div>
        </div>
      </section>

      {/* ── PLANS ───────────────────────────────────────────── */}
      <section id="planos" className="lc-plans-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-plans-grid mt-8">
            {plans.map((plan) => (
              <div
                key={plan.tier}
                className={`lc-plan-card${plan.highlight ? " lc-plan-card--highlight" : ""}`}
              >
                <span className="lc-plan-tier">{plan.tier}</span>
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
          <div className="mt-8">
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

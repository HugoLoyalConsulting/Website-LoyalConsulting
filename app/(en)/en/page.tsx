import Image from "next/image";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { HeroBackgroundSlideshow } from "@/components/HeroBackgroundSlideshow";
import { StickyTopNav } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WA_DISCOVERY_EN } from "@/lib/links";

const serviceLines = [
  {
    title: "Data Analysis",
    body: "We turn raw data into indicators that support faster, safer decisions.",
    value: "Visibility",
  },
  {
    title: "Data Engineering",
    body: "We integrate spreadsheets, systems and databases into automated, scalable processes.",
    value: "Centralization and automation",
  },
  {
    title: "Data Visualization",
    body: "We build executive dashboards that show what really matters for the business.",
    value: "Reliability",
  },
];

const painPoints = [
  "Each team reports different numbers",
  "Reports require manual work",
  "Information arrives too late",
  "Decisions depend on parallel spreadsheets",
  "There is no single business view",
];

const beforeItems = ["Scattered data", "Parallel spreadsheets", "Manual updates", "Slow reporting"];
const afterItems = [
  "Single source of truth",
  "Automated integrations",
  "Up-to-date indicators",
  "Faster decisions",
];

const whoIsFor = [
  "Directors",
  "Managers",
  "Coordinators",
  "Companies with 20 to 500 employees",
  "Teams that already have data but still lack operational intelligence",
];

const discoveryItems = [
  "How your data is generated",
  "Where the bottlenecks are",
  "Which indicators actually matter",
  "How to reduce spreadsheet dependency",
];

const processSteps = [
  {
    num: "01",
    title: "Mapping",
    body: "We map data sources, indicators and decision priorities.",
  },
  {
    num: "02",
    title: "Integration",
    body: "We centralize your data in a reliable, automated flow.",
  },
  {
    num: "03",
    title: "Management",
    body: "We deliver executive dashboards to monitor performance in real time.",
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

      {/* HERO */}
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
          <div style={{ maxWidth: "760px" }}>
            <p className="section-eyebrow reveal-up">Loyal Consulting · Boutique Data Consultancy</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ textWrap: "auto" }}>
              Turn scattered spreadsheets into a data-driven operation.
            </h1>
            <p className="ts-hero-sub reveal-up">
              We centralize data from spreadsheets, ERPs, CRMs and internal systems into one
              trusted source for analysis, automation and decision-making.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_DISCOVERY_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Schedule Discovery
              </a>
              <Link href="/en/examples" className="btn-outline">
                See examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WILL HELP YOU */}
      <section id="sobre" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14" style={{ alignItems: "center" }}>
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
                alt="Hugo Leal in a professional environment reviewing KPIs"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </figure>
            <div>
              <p className="section-eyebrow">Who will help you</p>
              <h2 className="section-title mt-3">Hugo Leal</h2>
              <p className="section-copy" style={{ marginTop: "0.75rem", fontWeight: 600 }}>
                Founder, Loyal Consulting
              </p>
              <p className="section-copy" style={{ marginTop: "1.6rem" }}>
                Over 10 years working with data, automation and business intelligence in large
                organizations.
              </p>
              <p className="section-copy" style={{ marginTop: "1.2rem" }}>
                Along the way, one pattern became clear: most companies do not suffer from lack of
                data. They suffer from too many spreadsheets, disconnected systems and hard-to-trust
                information.
              </p>
              <p className="section-copy" style={{ marginTop: "1.2rem" }}>
                Loyal was built to solve exactly that.
              </p>
              <div className="mt-8">
                <a href={WA_DISCOVERY_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Talk to Hugo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="servicos" className="lc-how-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">What we do</p>
            <h2 className="section-title mt-3">We do not sell dashboards. We deliver data-driven operations.</h2>
          </div>
          <div className="lc-how-steps mt-12">
            {serviceLines.map((item) => (
              <div key={item.title} className="lc-how-step">
                <h3 className="lc-how-title">{item.title}</h3>
                <p className="lc-how-body">{item.body}</p>
                <div className="lc-how-tags">
                  <span className="lc-how-tag">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section id="problemas" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14">
            <div>
              <p className="section-eyebrow">Problems we solve</p>
              <h2 className="section-title mt-3">Your operation generates data. But can you trust it?</h2>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <ul className="lc-consequences-list">
                {painPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE AND AFTER */}
      <section id="before-after" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">Before and after</p>
            <h2 className="section-title mt-3">From operational chaos to executive clarity</h2>
          </div>
          <div className="lc-beforeafter-grid mt-12">
            <div className="lc-ba-card lc-ba-card--antes">
              <span className="lc-ba-label lc-ba-label--antes">Before</span>
              <ul className="lc-consequences-list" style={{ marginTop: "1rem" }}>
                {beforeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="lc-ba-card lc-ba-card--depois">
              <span className="lc-ba-label lc-ba-label--depois">After</span>
              <ul className="lc-consequences-list" style={{ marginTop: "1rem" }}>
                {afterItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section id="for-who" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14">
            <div>
              <p className="section-eyebrow">Who it is for</p>
              <h2 className="section-title mt-3">Built for leaders who need faster, better decisions</h2>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <ul className="lc-consequences-list">
                {whoIsFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="lc-benefits-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="mt-14">
            <p className="section-eyebrow">How it works</p>
            <h2 className="section-title mt-3">A clear path from data sources to business decisions</h2>
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
          <div className="lc-como-wrapper">
            <p className="lc-ba-label lc-ba-label--como" style={{ marginBottom: "0.75rem" }}>
              REFERENCE ARCHITECTURE
            </p>
            <ZoomableImage
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/pipeline-dados-centralizado.png`}
              alt="Data centralization and executive analytics architecture"
              caption="Centralization, governance and visualization in one architecture for business decision-making."
              wrapperStyle={{
                border: "5px solid rgba(240,237,232,0.7)",
                boxShadow: "0 22px 48px rgba(240,237,232,0.15), 0 0 28px rgba(240,237,232,0.12)",
              }}
            />
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section id="discovery" className="lc-dores-section">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="section-divider" />
          <div className="lc-dores-grid mt-14">
            <div>
              <p className="section-eyebrow">Strategic Discovery</p>
              <h2 className="section-title mt-3">One meeting to define your next data move</h2>
              <p className="section-copy mt-4">
                You leave with an initial analytics evolution plan tailored to your company.
              </p>
            </div>
            <div className="lc-dores-consequences lc-dores-consequences--cool">
              <ul className="lc-consequences-list">
                {discoveryItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-6">
                <a href={WA_DISCOVERY_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Schedule Discovery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="lc-cta-band">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="lc-cta-title">Ready to turn your data into a competitive advantage?</h2>
          <p className="lc-cta-sub">
            Most companies already have the data required to grow. The issue is fragmentation.
            Let us define the fastest path to centralize, automate and turn that data into
            better decisions.
          </p>
          <div className="ts-cta-row mt-8" style={{ justifyContent: "center" }}>
            <a href={WA_DISCOVERY_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Schedule Discovery
            </a>
          </div>
          <p className="mt-3" style={{ fontSize: "0.78rem", color: "rgba(240,237,232,0.5)" }}>
            No upfront cost. No commitment.
          </p>
        </div>
      </div>

      <SiteFooter locale="en" />
    </main>
  );
}
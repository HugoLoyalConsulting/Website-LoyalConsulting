import type { Metadata } from "next";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { StickyTopNav, WHATSAPP_URL_EN } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { EMAIL_URL, LINKEDIN_URL, WA_COMECAR_EN } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "You don't need to know exactly what to ask for. If your team spends too much time building reports or debating numbers, it's worth a conversation.",
  path: "/en/contact",
});

export default function ContactPage() {
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
            <p className="section-eyebrow reveal-up">Contact</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}>
              You don&apos;t need to know<br />
              exactly what to ask for
            </h1>
            <p className="ts-hero-sub reveal-up">
              If you feel your team is spending too much time building reports or debating
              numbers, it&apos;s probably worth a conversation.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_COMECAR_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Book a free conversation
              </a>
              <a href="#contato" className="btn-outline">
                I&apos;d rather fill out the form
              </a>
            </div>
            <div className="lc-contact-links" style={{ justifyContent: "flex-start" }}>
              <a href={WHATSAPP_URL_EN} target="_blank" rel="noopener noreferrer" className="btn-outline">
                WhatsApp
              </a>
              <a href={EMAIL_URL} className="btn-outline">
                E-mail
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ────────────────────────────────────────── */}
      <LeadCaptureForm locale="en" />

      <SiteFooter locale="en" />
    </main>
  );
}

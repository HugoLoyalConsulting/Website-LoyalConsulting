import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppIcon, WHATSAPP_URL_EN } from "@/components/StickyTopNav";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Thank you!",
  description: "We received your answers. Want to chat on WhatsApp or schedule a Discovery?",
  path: "/en/thank-you",
  noIndex: true,
});

const WA_DISCOVERY_EN =
  "https://wa.me/5511954824181?text=" +
  encodeURIComponent("Hi! I just filled out the form and I'd like to schedule a short Discovery call.");

export default function ThankYouPage() {
  return (
    <main
      className="ts-page-shell relative w-full max-w-full overflow-x-hidden"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <section className="mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-8">
        <p className="section-eyebrow reveal-up">Form submitted successfully</p>
        <h1 className="ts-hero-h1 reveal-up mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}>
          Thank you for reaching out
        </h1>
        <p className="section-copy reveal-up mt-6">
          We received your answers and will review them carefully. In the meantime, want to
          get a head start on WhatsApp or schedule a short Discovery call?
        </p>
        <div className="ts-cta-row reveal-up mt-10" style={{ justifyContent: "center" }}>
          <a href={WA_DISCOVERY_EN} target="_blank" rel="noopener noreferrer" className="btn-accent">
            Schedule a Discovery call
          </a>
          <a href={WHATSAPP_URL_EN} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Chat on WhatsApp
          </a>
        </div>
        <p className="reveal-up mt-10" style={{ fontSize: "0.82rem", color: "rgba(240,237,232,0.4)" }}>
          Or, if you prefer to wait, we will be in touch shortly.{" "}
          <Link href="/en" style={{ textDecoration: "underline", color: "rgba(240,237,232,0.6)" }}>
            Back to the site
          </Link>
        </p>
      </section>

      <a
        href={WHATSAPP_URL_EN}
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

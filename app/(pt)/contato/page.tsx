import type { Metadata } from "next";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { StickyTopNav, WHATSAPP_URL } from "@/components/StickyTopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { EMAIL_URL, LINKEDIN_URL, WA_COMECAR } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description:
    "Não precisa saber exatamente o que pedir. Se sua equipe gasta tempo demais montando relatórios ou discutindo números, vale a pena conversar.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <main
      className="ts-page-shell relative w-full max-w-full overflow-x-hidden"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.8rem)",
      }}
    >
      <StickyTopNav />

      {/* ── HEADER ──────────────────────────────────────────── */}
      <section className="lc-page-header mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="ts-hero">
          <div>
            <p className="section-eyebrow reveal-up">Contato</p>
            <h1 className="ts-hero-h1 reveal-up mt-3" style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}>
              Não precisa saber<br />
              exatamente o que pedir
            </h1>
            <p className="ts-hero-sub reveal-up">
              Se você sente que sua equipe está gastando tempo demais montando relatórios ou
              discutindo números, provavelmente vale a pena conversar.
            </p>
            <div className="ts-cta-row reveal-up">
              <a href={WA_COMECAR} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Agendar conversa gratuita
              </a>
              <a href="#contato" className="btn-outline">
                Prefiro preencher o formulário
              </a>
            </div>
            <div className="lc-contact-links" style={{ justifyContent: "flex-start" }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
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
      <LeadCaptureForm />

      <SiteFooter />
    </main>
  );
}

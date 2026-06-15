import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppIcon, WHATSAPP_URL } from "@/components/StickyTopNav";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Obrigado!",
  description: "Recebemos suas respostas. Quer falar pelo WhatsApp ou agendar uma Discovery?",
  path: "/obrigado",
  noIndex: true,
});

const WA_DISCOVERY =
  "https://wa.me/5511981316880?text=" +
  encodeURIComponent("Olá! Acabei de preencher o formulário e quero agendar uma breve reunião de Discovery.");

export default function ObrigadoPage() {
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
        <p className="section-eyebrow reveal-up">Formulário enviado com sucesso</p>
        <h1 className="ts-hero-h1 reveal-up mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}>
          Obrigado pelo preenchimento
        </h1>
        <p className="section-copy reveal-up mt-6">
          Recebemos suas respostas e vamos analisá-las com atenção. Enquanto isso, quer
          adiantar a conversa pelo WhatsApp ou já agendar uma breve reunião de Discovery?
        </p>
        <div className="ts-cta-row reveal-up mt-10" style={{ justifyContent: "center" }}>
          <a href={WA_DISCOVERY} target="_blank" rel="noopener noreferrer" className="btn-accent">
            Agendar reunião de Discovery
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Falar pelo WhatsApp
          </a>
        </div>
        <p className="reveal-up mt-10" style={{ fontSize: "0.82rem", color: "rgba(240,237,232,0.4)" }}>
          Ou, se preferir aguardar, entraremos em contato em breve.{" "}
          <Link href="/" style={{ textDecoration: "underline", color: "rgba(240,237,232,0.6)" }}>
            Voltar ao site
          </Link>
        </p>
      </section>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="ts-float-wa"
        aria-label="Falar no WhatsApp"
        title="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </main>
  );
}

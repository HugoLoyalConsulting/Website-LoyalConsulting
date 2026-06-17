import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { WhatsAppIcon, WHATSAPP_URL, WHATSAPP_URL_EN } from "./StickyTopNav";

const PHONE_DISPLAY = "+55 (11) 98131-6880";
const PHONE_HREF = "tel:+5511981316880";

const FOOTER_STRINGS = {
  pt: {
    tagline: "Dashboards automatizados para gestores que precisam enxergar além das planilhas.",
    waAria: "Falar no WhatsApp",
    waUrl: WHATSAPP_URL,
    nav: [
      { href: "/como-funciona", label: "Como Funciona" },
      { href: "/exemplos",      label: "Exemplos" },
      { href: "/planos",        label: "Planos" },
      { href: "/discovery",     label: "Diagnóstico Gratuito" },
      { href: "/contato",       label: "Contato" },
    ],
    contactLabel: "Contato",
    phoneLabel:   "WhatsApp / Telefone",
    securityNote: "Site protegido com HTTPS · Dados tratados com responsabilidade.",
    copyright: "Loyal Consulting · Business Intelligence",
    founderNote: "Fundado por Hugo Leal",
  },
  en: {
    tagline: "Automated dashboards for managers who need to see beyond spreadsheets.",
    waAria: "Chat on WhatsApp",
    waUrl: WHATSAPP_URL_EN,
    nav: [
      { href: "/en/how-it-works", label: "How It Works" },
      { href: "/en/examples",     label: "Examples" },
      { href: "/en/plans",        label: "Plans" },
      { href: "/en/discovery",    label: "Free Assessment" },
      { href: "/en/contact",      label: "Contact" },
    ],
    contactLabel: "Contact",
    phoneLabel:   "WhatsApp / Phone",
    securityNote: "HTTPS-secured site · Data handled responsibly.",
    copyright: "Loyal Consulting · Business Intelligence",
    founderNote: "Founded by Hugo Leal",
  },
} as const;

export function SiteFooter({ locale = "pt" }: { locale?: Locale }) {
  const t = FOOTER_STRINGS[locale];
  return (
    <>
      <footer className="mx-auto mt-16 w-full max-w-7xl px-5 pb-12 sm:px-8">
        <div className="section-divider" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2.5rem",
            marginTop: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <p style={{ fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.28)", marginBottom: "0.6rem" }}>
              © {new Date().getFullYear()} Loyal Consulting
            </p>
            <p style={{ fontSize: "0.82rem", color: "rgba(240,237,232,0.45)", lineHeight: 1.6, maxWidth: "22ch" }}>
              {t.tagline}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.28)", marginBottom: "0.8rem" }}>
              Páginas
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              {t.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{ fontSize: "0.82rem", color: "rgba(240,237,232,0.5)", textDecoration: "none", transition: "color 150ms" }}
                    className="footer-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.28)", marginBottom: "0.8rem" }}>
              {t.contactLabel}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a
                href={t.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "rgba(240,237,232,0.55)", textDecoration: "none" }}
              >
                <span style={{ width: "14px", height: "14px", display: "inline-flex", color: "#25d366" }}>
                  <WhatsAppIcon />
                </span>
                {PHONE_DISPLAY}
              </a>
              <p style={{ fontSize: "0.72rem", color: "rgba(240,237,232,0.28)", margin: 0 }}>
                {t.phoneLabel}
              </p>
            </div>
          </div>

          {/* Security */}
          <div>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.28)", marginBottom: "0.8rem" }}>
              Segurança
            </p>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
              <span style={{ fontSize: "1rem", lineHeight: 1.2 }}>🔒</span>
              <p style={{ fontSize: "0.78rem", color: "rgba(240,237,232,0.4)", lineHeight: 1.65, margin: 0 }}>
                {t.securityNote}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "2rem",
            paddingTop: "1.2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "rgba(240,237,232,0.2)", textTransform: "uppercase" }}>
              {t.copyright}
            </p>
            <p style={{ fontSize: "0.65rem", color: "rgba(240,237,232,0.12)", marginTop: "0.2rem" }}>
              {t.founderNote}
            </p>
          </div>
        </div>
      </footer>

      <a
        href={t.waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ts-float-wa"
        aria-label={t.waAria}
        title="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}

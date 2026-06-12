import type { Locale } from "@/lib/i18n";
import { WhatsAppIcon, WHATSAPP_URL, WHATSAPP_URL_EN } from "./StickyTopNav";

const FOOTER_STRINGS = {
  pt: {
    tagline: "Dashboards automatizados para gestores que precisam enxergar além das planilhas.",
    waAria: "Falar no WhatsApp",
    waUrl: WHATSAPP_URL,
  },
  en: {
    tagline: "Automated dashboards for managers who need to see beyond spreadsheets.",
    waAria: "Chat on WhatsApp",
    waUrl: WHATSAPP_URL_EN,
  },
} as const;

export function SiteFooter({ locale = "pt" }: { locale?: Locale }) {
  const t = FOOTER_STRINGS[locale];
  return (
    <>
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
            {t.tagline}
          </p>
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

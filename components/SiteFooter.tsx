import { WhatsAppIcon, WHATSAPP_URL } from "./StickyTopNav";

export function SiteFooter() {
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
            Dashboards automatizados para gestores que precisam enxergar além das planilhas.
          </p>
        </div>
      </footer>

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
    </>
  );
}

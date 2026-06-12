"use client";

import Link from "next/link";
import { CSSProperties, useEffect, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5511954824181?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20o%20site%20da%20Loyal%20e%20gostaria%20de%20falar%20mais.";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M19.05 4.94A9.87 9.87 0 0 0 12.04 2a9.95 9.95 0 0 0-8.63 14.9L2 22l5.24-1.37A9.95 9.95 0 1 0 19.05 4.94Zm-7.01 15.3a8.22 8.22 0 0 1-4.18-1.14l-.3-.18-3.11.81.84-3.03-.2-.31a8.2 8.2 0 1 1 6.95 3.85Zm4.5-6.15c-.24-.12-1.43-.7-1.65-.77-.22-.08-.39-.12-.55.12-.17.23-.63.77-.77.93-.15.17-.29.19-.53.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.2-1.42-1.34-1.66-.14-.23-.01-.36.11-.48.11-.11.24-.29.36-.44.12-.14.16-.25.24-.42.08-.16.04-.31-.02-.44-.07-.12-.55-1.33-.75-1.82-.2-.49-.4-.42-.55-.42h-.47c-.16 0-.42.06-.65.31s-.85.83-.85 2.03c0 1.21.88 2.38 1 2.54.12.17 1.73 2.65 4.19 3.72.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.47-.07 1.43-.58 1.64-1.13.2-.56.2-1.03.14-1.13-.06-.1-.22-.16-.46-.27Z"
      />
    </svg>
  );
}

export function StickyTopNav() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setProgress(Math.min(y / 220, 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="ts-header-shell"
      style={{ "--ts-nav-progress": progress } as CSSProperties}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <nav className="ts-nav">
          <Link className="ts-nav-logo" href="/" aria-label="Início do site Loyal Consulting">
            <span className="ts-nav-logo-icon">LC</span>
            Loyal Consulting
          </Link>
          <div className="ts-nav-pill hidden sm:flex">
            <Link href="/">Início</Link>
            <Link href="/como-funciona">Como Funciona</Link>
            <Link href="/exemplos">Exemplos</Link>
            <Link href="/planos">Planos</Link>
            <Link href="/contato">Contato</Link>
          </div>
          <div className="ts-nav-right">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ts-nav-wa"
              aria-label="Falar no WhatsApp"
              title="Falar no WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ts-nav-action"
            >
              Falar com especialista →
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export { WHATSAPP_URL, WhatsAppIcon };

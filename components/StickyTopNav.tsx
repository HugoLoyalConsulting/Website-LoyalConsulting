"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties, useEffect, useState } from "react";
import { getAlternatePath, type Locale } from "@/lib/i18n";

const WHATSAPP_URL =
  "https://wa.me/5511981316880?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20o%20site%20da%20Loyal%20e%20gostaria%20de%20falar%20mais.";

const WHATSAPP_URL_EN =
  "https://wa.me/5511981316880?text=Hi!%20I%20found%20the%20Loyal%20Consulting%20website%20and%20I%27d%20like%20to%20know%20more.";

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

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm8.5 1.8h-8.5A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95Zm-4.25 2.85A5.35 5.35 0 1 1 6.65 12 5.35 5.35 0 0 1 12 6.65Zm0 1.8A3.55 3.55 0 1 0 15.55 12 3.55 3.55 0 0 0 12 8.45Zm5.6-3.38a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M5.25 3A2.25 2.25 0 1 1 3 5.25 2.25 2.25 0 0 1 5.25 3ZM3.45 8.1h3.6V21h-3.6Zm6.15 0h3.45v1.76h.05A3.78 3.78 0 0 1 16.5 7.9c3.65 0 4.33 2.4 4.33 5.52V21h-3.6v-6.72c0-1.6-.03-3.66-2.23-3.66s-2.58 1.74-2.58 3.55V21H9.6Z"
      />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  );
}

const NAV_STRINGS = {
  pt: {
    home: "/",
    logoAria: "Início do site Loyal Consulting",
    items: [
      { href: "/", label: "Início" },
      { href: "/como-funciona", label: "Como Funciona" },
      { href: "/exemplos", label: "Exemplos" },
      { href: "/planos", label: "Planos" },
      { href: "/contato", label: "Contato" },
    ],
    waAria: "Falar no WhatsApp",
    igAria: "Instagram em breve",
    liAria: "LinkedIn em breve",
    cta: "Falar com especialista",
    waUrl: WHATSAPP_URL,
    flagUrl: "https://flagcdn.com/w20/us.png",
    flagAlt: "US",
    langText: "EN-US",
    langAria: "Switch to English",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
  },
  en: {
    home: "/en",
    logoAria: "Loyal Consulting home",
    items: [
      { href: "/en", label: "Home" },
      { href: "/en/how-it-works", label: "How It Works" },
      { href: "/en/examples", label: "Examples" },
      { href: "/en/plans", label: "Plans" },
      { href: "/en/contact", label: "Contact" },
    ],
    waAria: "Chat on WhatsApp",
    igAria: "Instagram coming soon",
    liAria: "LinkedIn coming soon",
    cta: "Talk to a specialist",
    waUrl: WHATSAPP_URL_EN,
    flagUrl: "https://flagcdn.com/w20/br.png",
    flagAlt: "BR",
    langText: "PT-BR",
    langAria: "Mudar para português",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
} as const;

export function StickyTopNav({ locale = "pt" }: { locale?: Locale }) {
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = NAV_STRINGS[locale];
  const alternatePath = getAlternatePath(pathname || (locale === "en" ? "/en" : "/"));

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setProgress(Math.min(y / 220, 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className="ts-header-shell"
        style={{ "--ts-nav-progress": progress } as CSSProperties}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <nav className="ts-nav">
            <Link className="ts-nav-logo" href={t.home} aria-label={t.logoAria}>
              <span className="ts-nav-logo-icon" aria-hidden="true">LC</span>
              <span className="ts-nav-logo-text">Loyal Consulting</span>
            </Link>
            <div className="ts-nav-pill">
              {t.items.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </div>
            <div className="ts-nav-right">
              <span className="ts-nav-social" role="img" aria-label={t.igAria} title={t.igAria}>
                <InstagramIcon />
              </span>
              <span className="ts-nav-social" role="img" aria-label={t.liAria} title={t.liAria}>
                <LinkedInIcon />
              </span>
              <a
                href={t.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
                style={{ fontSize: "0.78rem", padding: "0.5rem 1.1rem" }}
              >
                {t.cta}
              </a>
              <button
                className="ts-nav-burger"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? t.menuClose : t.menuOpen}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`ts-nav-drawer${menuOpen ? " ts-nav-drawer--open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
        {...(!menuOpen ? ({ inert: "" } as object) : {})}
      >
        <div className="ts-nav-drawer-inner" onClick={(e) => e.stopPropagation()}>
          {t.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="ts-nav-drawer-link"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={t.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ts-nav-drawer-wa"
            onClick={closeMenu}
          >
            {t.cta}
          </a>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "0.75rem", paddingTop: "0.75rem" }}>
            <Link
              href={alternatePath}
              className="ts-nav-drawer-link"
              onClick={closeMenu}
              aria-label={t.langAria}
              style={{ fontSize: "0.78rem", letterSpacing: "0.14em", color: "rgba(240,237,232,0.45)" }}
            >
              {t.langText} — {t.langAria}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export { WHATSAPP_URL, WHATSAPP_URL_EN, WhatsAppIcon, InstagramIcon, LinkedInIcon };

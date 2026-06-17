"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternatePath, type Locale } from "@/lib/i18n";

const LANG = {
  pt: { label: "EN-US", aria: "Switch to English" },
  en: { label: "PT-BR", aria: "Mudar para português" },
} as const;

export function FooterLangSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const alt = getAlternatePath(pathname || (locale === "en" ? "/en" : "/"));
  const t = LANG[locale];
  return (
    <Link
      href={alt}
      aria-label={t.aria}
      style={{
        fontSize: "0.7rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        fontWeight: 700,
        color: "rgba(240,237,232,0.38)",
        textDecoration: "none",
        padding: "0.35rem 0.7rem",
        border: "1px solid rgba(240,237,232,0.14)",
        borderRadius: "4px",
        transition: "color 150ms, border-color 150ms",
        display: "inline-block",
      }}
      className="footer-lang-link"
    >
      {t.label}
    </Link>
  );
}

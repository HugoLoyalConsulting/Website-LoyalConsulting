// Mapa de rotas PT ↔ EN. Usado pelo seletor de idioma na nav
// e pelo hreflang automático em buildMetadata.
export type Locale = "pt" | "en";

export const PT_TO_EN: Record<string, string> = {
  "/": "/en",
  "/como-funciona": "/en/how-it-works",
  "/exemplos": "/en/examples",
  "/planos": "/en/plans",
  "/contato": "/en/contact",
  "/discovery": "/en/discovery",
  "/obrigado": "/en/thank-you",
};

export const EN_TO_PT: Record<string, string> = Object.fromEntries(
  Object.entries(PT_TO_EN).map(([pt, en]) => [en, pt])
);

// Caminho equivalente no outro idioma (ou raiz do outro idioma se não mapeado)
export function getAlternatePath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (PT_TO_EN[clean]) return PT_TO_EN[clean];
  if (EN_TO_PT[clean]) return EN_TO_PT[clean];
  return clean.startsWith("/en") ? "/" : "/en";
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}

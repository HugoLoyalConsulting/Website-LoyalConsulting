import type { Metadata } from "next";
import { EN_TO_PT, PT_TO_EN } from "@/lib/i18n";

export const SITE_URL = "https://www.loyalconsulting.com.br";
export const SITE_NAME = "Loyal Consulting";
export const OG_IMAGE = "/images/dashboard-powerbi-timeline.jpg";

type PageSeo = {
  title: string;
  description: string;
  path: string; // ex.: "/", "/planos", "/en/plans"
  noIndex?: boolean;
};

function toUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

// Metadata completa por página: canonical + hreflang + Open Graph + Twitter Card.
// O hreflang é resolvido automaticamente pelo mapa PT↔EN de lib/i18n.ts.
// O Open Graph é o que WhatsApp/LinkedIn/Telegram leem para montar o preview.
export function buildMetadata({ title, description, path, noIndex }: PageSeo): Metadata {
  const url = toUrl(path);
  const isEn = path === "/en" || path.startsWith("/en/");
  const counterpart = isEn ? EN_TO_PT[path] : PT_TO_EN[path];

  const languages = counterpart
    ? {
        "pt-BR": toUrl(isEn ? counterpart : path),
        "en-US": toUrl(isEn ? path : counterpart),
        "x-default": toUrl(isEn ? counterpart : path),
      }
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "pt_BR",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 675,
          alt: isEn
            ? "Loyal Consulting Power BI dashboard with business KPIs"
            : "Dashboard Power BI da Loyal Consulting com indicadores do negócio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

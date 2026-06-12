import type { Metadata } from "next";

export const SITE_URL = "https://www.loyalconsulting.com.br";
export const SITE_NAME = "Loyal Consulting";
export const OG_IMAGE = "/images/dashboard-powerbi-timeline.jpg";

type PageSeo = {
  title: string;
  description: string;
  path: string; // ex.: "/", "/planos", "/discovery"
  noIndex?: boolean;
};

// Metadata completa por página: canonical + Open Graph + Twitter Card.
// O Open Graph é o que WhatsApp/LinkedIn/Telegram leem para montar o preview.
export function buildMetadata({ title, description, path, noIndex }: PageSeo): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 675,
          alt: "Dashboard Power BI da Loyal Consulting com indicadores do negócio",
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

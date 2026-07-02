import type { Metadata, Viewport } from "next";
import "../globals.css";
import { SiteTelemetry } from "@/components/SiteTelemetry";
import { ThirdPartyScripts } from "@/components/ThirdPartyScripts";
import { outfit, outfitDisplay } from "@/lib/fonts";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  category: "Business Intelligence",
  keywords: [
    "consultoria de dados",
    "Business Intelligence",
    "Power BI",
    "dashboard",
    "automação de relatórios",
    "integração de dados",
    "indicadores",
    "KPI",
    "planilhas Excel",
    "BI para pequenas e médias empresas",
  ],
  formatDetection: { telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...buildMetadata({
    title: "Loyal Consulting | Dashboards automatizados para a sua gestão",
    description:
      "Juntamos suas planilhas e sistemas em um painel só, que se atualiza sozinho. Dashboards Power BI, automação de relatórios e integração de dados para PMEs.",
    path: "/",
  }),
  title: {
    default: "Loyal Consulting | Dashboards automatizados para a sua gestão",
    template: "%s | Loyal Consulting",
  },
};

export const viewport: Viewport = {
  themeColor: "#090014",
  width: "device-width",
  initialScale: 1,
};

// Dados estruturados (Google: empresa + serviço)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Consultoria boutique de Business Intelligence: dashboards Power BI, automação de relatórios e integração de dados para pequenas e médias empresas brasileiras.",
  image: `${SITE_URL}/images/dashboard-powerbi-timeline.jpg`,
  telephone: "+55-11-95482-4181",
  email: "hugolealsouza9@gmail.com",
  address: { "@type": "PostalAddress", addressCountry: "BR" },
  areaServed: "BR",
  priceRange: "$$",
  sameAs: ["https://www.linkedin.com/company/loyal-consulting/"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dashboards Power BI" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automação de relatórios" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integração de dados" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mentoria e treinamento" } },
  ],
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" href={`${BASE}/images/executivo-painel-wall.jpg`} as="image" type="image/jpeg" />
      </head>
      <body className={`${outfit.variable} ${outfitDisplay.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteTelemetry />
        <ThirdPartyScripts />
        {children}
      </body>
    </html>
  );
}

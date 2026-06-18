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
    "data consulting",
    "Business Intelligence",
    "Power BI",
    "dashboard",
    "report automation",
    "data integration",
    "KPIs",
    "Excel spreadsheets",
    "BI for small and medium businesses",
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
    title: "Loyal Consulting | Automated dashboards for your business",
    description:
      "We bring your spreadsheets and systems together into a single dashboard that updates itself. Power BI dashboards, report automation and data integration.",
    path: "/en",
  }),
  title: {
    default: "Loyal Consulting | Automated dashboards for your business",
    template: "%s | Loyal Consulting",
  },
};

export const viewport: Viewport = {
  themeColor: "#090014",
  width: "device-width",
  initialScale: 1,
};

// Structured data (Google: company + services)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: `${SITE_URL}/en`,
  description:
    "Boutique Business Intelligence consultancy: Power BI dashboards, report automation and data integration for small and medium businesses.",
  image: `${SITE_URL}/images/dashboard-powerbi-timeline.jpg`,
  telephone: "+55-11-95482-4181",
  email: "hugolealsouza9@gmail.com",
  address: { "@type": "PostalAddress", addressCountry: "BR" },
  areaServed: "BR",
  priceRange: "R$ 2.000 - R$ 10.000",
  sameAs: ["https://www.linkedin.com/company/loyal-consulting/"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Power BI Dashboards" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Report automation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data integration" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mentoring and training" } },
  ],
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function EnRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
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

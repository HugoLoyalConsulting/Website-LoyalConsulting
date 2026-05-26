import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import { SiteTelemetry } from "@/components/SiteTelemetry";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loyal Consulting | Growth Intelligence",
  description:
    "Consultoria de dados e performance comercial para transformar marketing e vendas em previsibilidade.",
  applicationName: "Loyal Consulting",
  keywords: ["Consultoria de dados", "BI", "Revenue Operations", "CRM", "Dashboard"],
  openGraph: {
    title: "Loyal Consulting | Growth Intelligence",
    description: "Estruture dados, pipeline e decisão comercial em uma operação realmente previsível.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} ${geist.variable}`}>
        <SiteTelemetry />
        {children}
      </body>
    </html>
  );
}

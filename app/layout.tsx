import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SiteTelemetry } from "@/components/SiteTelemetry";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfitDisplay = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loyal Consulting | Dashboards automatizados para a sua gestão",
  description:
    "Transformamos planilhas, ERPs e sistemas desconectados em dashboards automatizados que mostram exatamente o que está acontecendo na sua operação.",
  applicationName: "Loyal Consulting",
  keywords: ["Consultoria de dados", "BI", "Power BI", "Dashboard", "Automação de relatórios"],
  openGraph: {
    title: "Loyal Consulting | Dashboards automatizados para a sua gestão",
    description:
      "Pare de gerenciar o seu negócio através de dezenas de planilhas. Tenha visibilidade sobre os indicadores que realmente importam.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} ${outfitDisplay.variable}`}>
        <SiteTelemetry />
        {children}
      </body>
    </html>
  );
}

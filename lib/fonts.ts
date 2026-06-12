import { Outfit } from "next/font/google";

// Fontes compartilhadas entre os layouts raiz (pt) e (en).
export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const outfitDisplay = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
  display: "swap",
});

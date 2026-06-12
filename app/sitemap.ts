import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/como-funciona/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/exemplos/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/planos/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contato/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/discovery/`, lastModified, changeFrequency: "weekly", priority: 1 },
  ];
}

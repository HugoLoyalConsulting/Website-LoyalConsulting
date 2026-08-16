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
    { url: `${SITE_URL}/argon/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/en/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/en/how-it-works/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/en/examples/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/en/plans/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/en/contact/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/en/discovery/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
  ];
}

import type { MetadataRoute } from "next";
import { models } from "@/lib/models";

const BASE = "https://viviendasroble.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/planos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/galeria`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/sistema-de-construccion`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/quienes-somos`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/contacto`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  const modelRoutes: MetadataRoute.Sitemap = models.map((m) => ({
    url: `${BASE}/planos#${m.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...modelRoutes];
}

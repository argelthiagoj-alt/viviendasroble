import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Solo se bloquean endpoints sin valor de indexación.
        // /_next/ NO se bloquea: Google necesita el JS y el CSS de ahí
        // para renderizar el sitio y evaluarlo correctamente.
        disallow: ["/api/", "/buscar"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

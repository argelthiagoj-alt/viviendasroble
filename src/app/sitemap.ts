import type { MetadataRoute } from "next";
import { models } from "@/lib/models";
import { indexableLocations, locationPath } from "@/lib/locations";
import { seoLandings } from "@/lib/seo-pages";
import { absoluteUrl } from "@/lib/seo/site";

/**
 * Sitemap.
 *
 * Solo URLs reales e indexables. No se incluyen anchors (/planos#modelo):
 * un ancla no es una URL independiente para un buscador, y listarla solo
 * genera entradas que Google colapsa contra la página padre.
 *
 * Quedan fuera: /buscar (noindex), /aviso-legal y /politica-de-privacidad
 * (noindex) y cualquier landing marcada como no indexable.
 */

const BUILD_DATE = new Date();

type Entry = MetadataRoute.Sitemap[number];

function entry(
  path: string,
  priority: number,
  changeFrequency: Entry["changeFrequency"]
): Entry {
  return {
    url: absoluteUrl(path),
    lastModified: BUILD_DATE,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Home y hubs principales
  const core: MetadataRoute.Sitemap = [
    entry("/", 1.0, "weekly"),
    entry("/modelos", 0.9, "weekly"),
    entry("/planos", 0.8, "monthly"),
  ];

  // Landings semánticas. /casas-prefabricadas es la categoría raíz
  // y además el padre de las landings geográficas.
  const landings: MetadataRoute.Sitemap = seoLandings.map((l) =>
    entry(`/${l.slug}`, l.slug === "casas-prefabricadas" ? 0.9 : 0.8, "monthly")
  );

  // Fichas individuales de modelo
  const modelPages: MetadataRoute.Sitemap = models.map((m) =>
    entry(`/modelos/${m.slug}`, m.featured ? 0.7 : 0.6, "monthly")
  );

  // Landings geográficas: región y provincias pesan más que las ciudades
  const geoPages: MetadataRoute.Sitemap = indexableLocations.map((l) =>
    entry(
      locationPath(l),
      l.kind === "city" ? 0.7 : 0.8,
      l.kind === "city" ? "monthly" : "weekly"
    )
  );

  // Páginas institucionales
  const institutional: MetadataRoute.Sitemap = [
    entry("/sistema-de-construccion", 0.7, "monthly"),
    entry("/galeria", 0.6, "monthly"),
    entry("/contacto", 0.7, "yearly"),
    entry("/quienes-somos", 0.5, "yearly"),
  ];

  return [
    ...core,
    ...landings,
    ...modelPages,
    ...geoPages,
    ...institutional,
  ];
}

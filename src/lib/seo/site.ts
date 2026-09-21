/**
 * Fuente única de verdad para URLs absolutas del sitio.
 * Todo canonical, OpenGraph y JSON-LD debe derivar de acá para evitar
 * que un dominio de preview (vercel.app) se filtre como URL canónica.
 */
export const SITE_URL = "https://viviendasroble.com";

export const SITE_NAME = "Viviendas Roble";

export const DEFAULT_OG_IMAGE = "/assets/gallery/hero-casa-roble.jpeg";

/** Convierte un path interno ("/modelos") en URL absoluta del dominio final. */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

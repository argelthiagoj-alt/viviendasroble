import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, absoluteUrl } from "./site";

type Options = {
  title: string;
  description: string;
  /** Path interno. Define el canonical y la URL de OpenGraph. */
  path: string;
  /** Imagen OG propia. Si no se pasa, usa la del sitio. */
  image?: string | null;
  imageAlt?: string;
  /** `false` en páginas que no deben indexarse. */
  index?: boolean;
};

/**
 * Construye la metadata de una página.
 *
 * Centraliza canonical, OpenGraph y Twitter para que ninguna página
 * publique una URL absoluta a mano y se filtre un dominio de preview.
 * El `title` se compone con el template del layout raíz.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  index = true,
}: Options): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  // OpenGraph no usa el template de Next, así que la marca se agrega acá —
  // salvo que el title ya la traiga (caso de la home).
  const socialTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "es_AR",
      images: [
        {
          url: ogImage,
          alt: imageAlt ?? `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage],
    },
    ...(index ? {} : { robots: { index: false, follow: true } }),
  };
}

import { COMPANY } from "@/lib/constants";
import { cityLocations } from "@/lib/locations";
import type { HouseModel } from "@/lib/models";
import { SITE_URL, SITE_NAME, absoluteUrl } from "./site";

/**
 * Helpers de JSON-LD.
 *
 * Regla del proyecto: solo se declaran datos confirmados dentro del repo.
 * No se emiten Review, AggregateRating, precios ni stock.
 */

export const ORGANIZATION_ID = `${SITE_URL}/#business`;

/** Entidad principal. Se referencia por @id desde el resto de los schemas. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": [
      "LocalBusiness",
      "GeneralContractor",
      "HomeAndConstructionBusiness",
    ],
    "@id": ORGANIZATION_ID,
    name: COMPANY.name,
    legalName: COMPANY.name,
    alternateName: ["Viviendas Roble Neuquén", "Roble Viviendas"],
    description:
      "Empresa de casas prefabricadas y viviendas industrializadas con más de 40 años de trayectoria. +15.000 casas entregadas en Neuquén, Río Negro y la Patagonia. Precio cerrado, entrega planificada y acompañamiento real.",
    slogan:
      "Viviendas industrializadas con precio cerrado y entrega planificada.",
    url: SITE_URL,
    logo: absoluteUrl("/assets/branding/logo.png"),
    image: [
      absoluteUrl("/assets/gallery/hero-casa-roble.jpeg"),
      absoluteUrl("/assets/gallery/casa-roble-2.jpeg"),
      absoluteUrl("/assets/gallery/casa-3.jpeg"),
    ],
    telephone: "+540299440353",
    email: COMPANY.email,
    foundingDate: String(COMPANY.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aguado 2345",
      addressLocality: "Neuquén",
      addressRegion: "Neuquén",
      postalCode: COMPANY.postalCode,
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -38.9516,
      longitude: -68.0591,
    },
    areaServed: [
      { "@type": "State", name: "Neuquén" },
      { "@type": "State", name: "Río Negro" },
      { "@type": "State", name: "La Pampa" },
      { "@type": "State", name: "Chubut" },
      ...cityLocations.map((c) => ({ "@type": "City", name: c.name })),
    ],
    knowsAbout: [
      "Casas prefabricadas",
      "Viviendas industrializadas",
      "Casas industrializadas",
      "Casas modulares",
      "Construcción modular",
      "Construcción en seco",
      "Casas llave en mano",
      "Módulos habitacionales",
      "Casas para terreno propio",
      "Viviendas para clima patagónico",
      "Aislación térmica",
      "Primera vivienda",
      "Modelos de casas prefabricadas",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    hasCredential: COMPANY.certificacion,
    sameAs: [COMPANY.instagram],
  };
}

export type Crumb = { name: string; path: string };

/** BreadcrumbList. `crumbs` NO incluye "Inicio": se antepone automáticamente. */
export function breadcrumbSchema(crumbs: Crumb[]) {
  const all: Crumb[] = [{ name: "Inicio", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/**
 * Product para una vivienda concreta.
 * Sin `offers`: no publicamos precios ni disponibilidad, y un Product con
 * precio inventado es peor que un Product sin precio.
 */
export function modelProductSchema(model: HouseModel) {
  const image = model.photo ?? model.previewImage;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${absoluteUrl(`/modelos/${model.slug}`)}#product`,
    name: `${model.name} — casa prefabricada de ${model.areaLabel}`,
    description: model.description,
    category: "Vivienda industrializada",
    url: absoluteUrl(`/modelos/${model.slug}`),
    sku: model.slug,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": ORGANIZATION_ID },
    ...(image ? { image: absoluteUrl(image) } : {}),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Superficie cubierta",
        value: model.area,
        unitCode: "MTK",
      },
      {
        "@type": "PropertyValue",
        name: "Dormitorios",
        value: model.bedroomsLabel,
      },
      {
        "@type": "PropertyValue",
        name: "Baños",
        value: model.bathroomsLabel,
      },
      {
        "@type": "PropertyValue",
        name: "Sistema constructivo",
        value: "Construcción industrializada en seco",
      },
    ],
  };
}

export type FaqItem = { q: string; a: string };

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** ItemList de modelos. `url` apunta a la ficha individual de cada modelo. */
export function modelListSchema(
  models: HouseModel[],
  { name, description }: { name: string; description?: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    ...(description ? { description } : {}),
    numberOfItems: models.length,
    itemListElement: models.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/modelos/${m.slug}`),
      name: `${m.name} — ${m.areaLabel}`,
    })),
  };
}

/**
 * Service para las landings semánticas y geográficas.
 * `areaServed` se pasa explícito por página.
 */
export function serviceSchema({
  name,
  description,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  areaServed: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    serviceType: "Construcción de viviendas industrializadas",
    url: absoluteUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: areaServed.map((a) => ({ "@type": "Place", name: a })),
  };
}

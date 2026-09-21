import { models, AREA_MIN, AREA_MAX } from "@/lib/models";
import { indexableLocations, locationPath } from "@/lib/locations";
import { seoLandings } from "@/lib/seo-pages";
import { faqItems } from "@/components/sections/FAQSection";

export type SearchResult = {
  type: "model" | "faq" | "page";
  title: string;
  excerpt: string;
  href: string;
};

const pageEntries: SearchResult[] = [
  {
    type: "page",
    title: "Galería de Obras",
    excerpt:
      "Fotos de viviendas prefabricadas entregadas en Neuquén, Cipolletti, General Roca y toda la Patagonia. Proyectos reales, terminaciones premium.",
    href: "/galeria",
  },
  {
    type: "page",
    title: "Sistema de Construcción — Estándar y Roble Patagónica",
    excerpt:
      "Construcción en seco, estructura de madera de Eucalyptus grandis, aislación térmica, telgopor, machimbre, Superboard, MDF Guillermina, CAT N° 2874, apto PROCREAR. Materiales certificados, garantía incluida.",
    href: "/sistema-de-construccion",
  },
  {
    type: "page",
    title: "Quiénes Somos — Historia de Viviendas Roble",
    excerpt:
      "Empresa familiar fundada en 1983 con más de 40 años en la Patagonia. +15.000 casas entregadas en Neuquén, Río Negro, La Pampa y Chubut. Fábrica propia en Plottier.",
    href: "/quienes-somos",
  },
  {
    type: "page",
    title: "Modelos de Casas Prefabricadas",
    excerpt: `Catálogo completo de ${models.length} modelos de ${AREA_MIN} a ${AREA_MAX} m², de monoambiente a 4 dormitorios. Ficha, distribución y plano de cada uno.`,
    href: "/modelos",
  },
  {
    type: "page",
    title: "Planos de Casas Prefabricadas en PDF",
    excerpt: `Descargá los ${models.length} planos en PDF, sin registro y sin compromiso. Ordenados por superficie, de ${AREA_MIN} a ${AREA_MAX} m².`,
    href: "/planos",
  },
  {
    type: "page",
    title: "Contacto — Oficinas Neuquén",
    excerpt:
      "Oficinas en Aguado 2345, Neuquén Capital. WhatsApp, teléfono y formulario de consulta. Lunes a viernes de 10 a 18 hs. Presupuesto sin cargo.",
    href: "/contacto",
  },
  {
    type: "page",
    title: "Garantía de Construcción",
    excerpt:
      "Viviendas Roble garantiza el 100% de seguridad en la entrega: calidad de materiales, terminaciones y servicio posventa. El documento de garantía es parte del contrato.",
    href: "/#garantia",
  },
  {
    type: "page",
    title: "Zonas de Cobertura — Neuquén y Patagonia",
    excerpt:
      "Construimos en Neuquén Capital, Cipolletti, General Roca, Centenario, Plottier, Rincón de los Sauces, Río Negro, La Pampa y Chubut.",
    href: "/#zonas",
  },
];

function buildIndex(): SearchResult[] {
  const modelResults: SearchResult[] = models.map((m) => ({
    type: "model",
    title: `${m.name} — ${m.areaLabel}`,
    excerpt: `${m.bedroomsLabel}, ${m.bathroomsLabel}. ${m.specs}. ${m.description}`,
    href: `/modelos/${m.slug}`,
  }));

  const landingResults: SearchResult[] = seoLandings.map((l) => ({
    type: "page",
    title: l.title,
    excerpt: l.description,
    href: `/${l.slug}`,
  }));

  const locationResults: SearchResult[] = indexableLocations.map((l) => ({
    type: "page",
    title: l.h1,
    excerpt: l.description,
    href: locationPath(l),
  }));

  const faqResults: SearchResult[] = faqItems.map((f) => ({
    type: "faq",
    title: f.q,
    excerpt: f.a,
    href: "/#faq",
  }));

  return [
    ...modelResults,
    ...landingResults,
    ...locationResults,
    ...faqResults,
    ...pageEntries,
  ];
}

export const searchIndex = buildIndex();

function normalize(s: string) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

export function search(query: string): SearchResult[] {
  const q = normalize(query.trim());
  if (q.length < 2) return [];

  const terms = q.split(/\s+/).filter(Boolean);

  return searchIndex.filter((entry) => {
    const haystack = normalize(`${entry.title} ${entry.excerpt}`);
    return terms.every((t) => haystack.includes(t));
  });
}

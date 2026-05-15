import { models } from "@/lib/models";
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
      "Wood frame, steel frame, construcción en seco, aislación térmica, telgopor, machimbre, Superboard, MDF Guillermina, CAT N° 2874, apto PROCREAR, certificado. Materiales certificados, garantía incluida.",
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
    title: "Planos y Modelos de Casas",
    excerpt:
      "Catálogo de modelos desde 15 m² hasta 36 m²: Roble Módulo, Roble Studio, Roble Compact, Roble Mono, Roble Duo, Roble Esencial. Descargá el plano del modelo que te interesa.",
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
    excerpt: `${m.specs}. ${m.description}`,
    href: `/planos#${m.id}`,
  }));

  const faqResults: SearchResult[] = faqItems.map((f) => ({
    type: "faq",
    title: f.q,
    excerpt: f.a,
    href: "/#faq",
  }));

  return [...modelResults, ...faqResults, ...pageEntries];
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

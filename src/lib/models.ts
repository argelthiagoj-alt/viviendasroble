export type ModelGroup = "compacto" | "mediano" | "grande";

export type HouseModel = {
  /** Anclaje histórico usado en /planos#<id>. Se conserva por compatibilidad. */
  id: string;
  /** Slug canónico de la ficha individual: /modelos/<slug>. Único. */
  slug: string;
  /** Franja de superficie, usada para agrupar y sugerir modelos relacionados. */
  group: ModelGroup;
  /** Dormitorios. 0 = monoambiente. min/max coinciden salvo en variantes flexibles. */
  bedroomsMin: number;
  bedroomsMax: number;
  bedroomsLabel: string;
  bathroomsMin: number;
  bathroomsMax: number;
  bathroomsLabel: string;
  name: string;
  area: number;
  areaLabel: string;
  specs: string;
  description: string;
  photo: string | null;
  previewImage: string | null;
  pdfHref: string;
  downloadName: string;
  badge: string | null;
  featured: boolean;
  whatsappMessage: string;
};

const WA_BASE = "https://wa.me/542994532220";

function wa(text: string) {
  return `${WA_BASE}?text=${encodeURIComponent(text)}`;
}

// ² → %C2%B2 in filenames served from /public/plans/
export const models: HouseModel[] = [
  /* ── Compactos ───────────────────────────────── */
  {
    id: "roble-modulo",
    slug: "roble-modulo-15m2",
    group: "compacto",
    bedroomsMin: 0,
    bedroomsMax: 0,
    bedroomsLabel: "Monoambiente",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Módulo",
    area: 15,
    areaLabel: "15 m²",
    specs: "Estudio · 1 Baño",
    description:
      "Micro vivienda completa pensada para la inversión en renta, un primer paso propio o como módulo complementario dentro de un terreno.",
    photo: "/assets/gallery/casa-9.jpeg",
    previewImage: "/assets/plans/15.png",
    pdfHref: "/plans/15m%C2%B2.pdf",
    downloadName: "Plano-Roble-Modulo-15m2-Viviendas-Roble.pdf",
    badge: "Inversión",
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Módulo (15 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-studio",
    slug: "roble-studio-15-60m2",
    group: "compacto",
    bedroomsMin: 0,
    bedroomsMax: 0,
    bedroomsLabel: "Monoambiente",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Studio",
    area: 15.6,
    areaLabel: "15.60 m²",
    specs: "Estudio · 1 Baño",
    description:
      "Eficiencia en cada metro cuadrado. Distribución inteligente con todo lo necesario para vivir cómodo en solitario o alquilar.",
    photo: "/assets/gallery/casa-10.jpeg",
    previewImage: "/assets/plans/1560.png",
    pdfHref: "/plans/1560m%C2%B2.pdf",
    downloadName: "Plano-Roble-Studio-1560m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Studio (15.60 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-compact",
    slug: "roble-compact-20m2",
    group: "compacto",
    bedroomsMin: 0,
    bedroomsMax: 0,
    bedroomsLabel: "Monoambiente",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Compact",
    area: 20,
    areaLabel: "20 m²",
    specs: "1 Ambiente · 1 Baño · Cocina",
    description:
      "Un ambiente bien resuelto: cocina integrada, baño completo y sector de descanso diferenciado. Funcional desde el día uno.",
    photo: "/assets/gallery/casa-7.jpeg",
    previewImage: "/assets/plans/20.png",
    pdfHref: "/plans/20m%C2%B2.pdf",
    downloadName: "Plano-Roble-Compact-20m2-Viviendas-Roble.pdf",
    badge: "Compacto",
    featured: true,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Compact (20 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-mono",
    slug: "roble-mono-25m2",
    group: "compacto",
    bedroomsMin: 1,
    bedroomsMax: 1,
    bedroomsLabel: "1 dormitorio",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Mono",
    area: 25,
    areaLabel: "25 m²",
    specs: "1 Dormitorio · Living · 1 Baño",
    description:
      "Dormitorio independiente, living comedor y cocina bien diferenciada. La elección natural para quien quiere su propio espacio.",
    photo: "/assets/gallery/casa-3.jpeg",
    previewImage: "/assets/plans/25.png",
    pdfHref: "/plans/25m%C2%B2.pdf",
    downloadName: "Plano-Roble-Mono-25m2-Viviendas-Roble.pdf",
    badge: "Popular",
    featured: true,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Mono (25 m²). ¿Me pueden dar más información?"
    ),
  },

  /* ── Medianos ────────────────────────────────── */
  {
    id: "roble-duo",
    slug: "roble-duo-30m2",
    group: "mediano",
    bedroomsMin: 1,
    bedroomsMax: 1,
    bedroomsLabel: "1 dormitorio",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Duo",
    area: 30,
    areaLabel: "30 m²",
    specs: "1 Dormitorio · Living · 1 Baño · Cocina",
    description:
      "Dormitorio generoso, living comedor con buena escala y cocina integrada. Diseñado para una pareja que quiere comodidad real.",
    photo: "/assets/gallery/casa-4.jpeg",
    previewImage: "/assets/plans/30.png",
    pdfHref: "/plans/30m%C2%B2.pdf",
    downloadName: "Plano-Roble-Duo-30m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Duo (30 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-esencial",
    slug: "roble-esencial-36m2",
    group: "mediano",
    bedroomsMin: 1,
    bedroomsMax: 2,
    bedroomsLabel: "1 a 2 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Esencial",
    area: 36,
    areaLabel: "36 m²",
    specs: "1–2 Dormitorios · Living · 1 Baño · Cocina",
    description:
      "Vivienda familiar funcional y completa. Dormitorio amplio, living comedor, cocina y baño bien dimensionado. Base sólida para crecer.",
    photo: "/assets/gallery/casa-roble-2.jpeg",
    previewImage: "/assets/plans/36.png",
    pdfHref: "/plans/36m%C2%B2A.pdf",
    downloadName: "Plano-Roble-Esencial-36m2-Viviendas-Roble.pdf",
    badge: "Familiar",
    featured: true,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Esencial (36 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-esencial-b",
    slug: "roble-esencial-plus-36m2",
    group: "mediano",
    bedroomsMin: 2,
    bedroomsMax: 2,
    bedroomsLabel: "2 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Esencial Plus",
    area: 36,
    areaLabel: "36 m²",
    specs: "2 Dormitorios · Living · 1 Baño · Cocina",
    description:
      "Variante del Esencial con distribución optimizada para dos dormitorios. Ideal para familia chica.",
    photo: null,
    previewImage: "/assets/plans/36B.png",
    pdfHref: "/plans/36m%C2%B2B.pdf",
    downloadName: "Plano-Roble-Esencial-Plus-36m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Esencial Plus (36 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-andes",
    slug: "roble-andes-42m2",
    group: "mediano",
    bedroomsMin: 2,
    bedroomsMax: 2,
    bedroomsLabel: "2 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Andes",
    area: 42,
    areaLabel: "42 m²",
    specs: "2 Dormitorios · Living · 1 Baño · Cocina",
    description:
      "Dos dormitorios, living comedor amplio y cocina integrada. Pensada para crecer con la familia.",
    photo: null,
    previewImage: "/assets/plans/42.png",
    pdfHref: "/plans/42m%C2%B2.pdf",
    downloadName: "Plano-Roble-Andes-42m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Andes (42 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-andes-a",
    slug: "roble-andes-a-42m2",
    group: "mediano",
    bedroomsMin: 2,
    bedroomsMax: 2,
    bedroomsLabel: "2 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Andes A",
    area: 42,
    areaLabel: "42 m²",
    specs: "2 Dormitorios · Living · 1 Baño · Cocina",
    description:
      "Variante A del Andes con distribución alternativa de los ambientes.",
    photo: null,
    previewImage: "/assets/plans/42A.png",
    pdfHref: "/plans/42m%C2%B2A.pdf",
    downloadName: "Plano-Roble-Andes-A-42m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Andes A (42 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-andes-b",
    slug: "roble-andes-b-42m2",
    group: "mediano",
    bedroomsMin: 2,
    bedroomsMax: 2,
    bedroomsLabel: "2 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Andes B",
    area: 42,
    areaLabel: "42 m²",
    specs: "2 Dormitorios · Living · 1 Baño · Cocina",
    description:
      "Variante B del Andes con distribución alternativa de los ambientes.",
    photo: null,
    previewImage: "/assets/plans/42B.png",
    pdfHref: "/plans/42m%C2%B2B.pdf",
    downloadName: "Plano-Roble-Andes-B-42m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Andes B (42 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-valle",
    slug: "roble-valle-49m2",
    group: "mediano",
    bedroomsMin: 2,
    bedroomsMax: 2,
    bedroomsLabel: "2 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Valle",
    area: 49,
    areaLabel: "49 m²",
    specs: "2 Dormitorios · Living · 1 Baño · Cocina",
    description:
      "Casa familiar compacta con dos dormitorios y excelente aprovechamiento de cada metro.",
    photo: null,
    previewImage: "/assets/plans/49A.png",
    pdfHref: "/plans/49m%C2%B2A.pdf",
    downloadName: "Plano-Roble-Valle-49m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Valle (49 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-valle-b",
    slug: "roble-valle-b-49m2",
    group: "mediano",
    bedroomsMin: 2,
    bedroomsMax: 2,
    bedroomsLabel: "2 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Valle B",
    area: 49,
    areaLabel: "49 m²",
    specs: "2 Dormitorios · Living · 1 Baño · Cocina",
    description:
      "Variante B del Valle con otra disposición de espacios.",
    photo: null,
    previewImage: "/assets/plans/49B.png",
    pdfHref: "/plans/49m%C2%B2B.pdf",
    downloadName: "Plano-Roble-Valle-B-49m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Valle B (49 m²). ¿Me pueden dar más información?"
    ),
  },

  /* ── Grandes ─────────────────────────────────── */
  {
    id: "roble-sierra",
    slug: "roble-sierra-56m2",
    group: "grande",
    bedroomsMin: 2,
    bedroomsMax: 3,
    bedroomsLabel: "2 a 3 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Sierra",
    area: 56,
    areaLabel: "56 m²",
    specs: "2–3 Dormitorios · Living · 1 Baño · Cocina",
    description:
      "Espacios más generosos, ideal para familias que buscan comodidad y crecimiento futuro.",
    photo: null,
    previewImage: "/assets/plans/56.png",
    pdfHref: "/plans/56m%C2%B2.pdf",
    downloadName: "Plano-Roble-Sierra-56m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Sierra (56 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-bosque",
    slug: "roble-bosque-57m2",
    group: "grande",
    bedroomsMin: 3,
    bedroomsMax: 3,
    bedroomsLabel: "3 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Bosque",
    area: 57,
    areaLabel: "57 m²",
    specs: "3 Dormitorios · Living · 1 Baño · Cocina",
    description:
      "Tres dormitorios bien dimensionados, living comedor amplio y cocina práctica.",
    photo: null,
    previewImage: "/assets/plans/57.png",
    pdfHref: "/plans/57m%C2%B2.pdf",
    downloadName: "Plano-Roble-Bosque-57m2-Viviendas-Roble.pdf",
    badge: null,
    featured: true,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Bosque (57 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-lago",
    slug: "roble-lago-64m2",
    group: "grande",
    bedroomsMin: 3,
    bedroomsMax: 3,
    bedroomsLabel: "3 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Lago",
    area: 64,
    areaLabel: "64 m²",
    specs: "3 Dormitorios · Living · 1 Baño · Cocina",
    description:
      "Casa familiar completa con tres dormitorios y áreas comunes generosas.",
    photo: null,
    previewImage: "/assets/plans/64A.png",
    pdfHref: "/plans/64m%C2%B2A.pdf",
    downloadName: "Plano-Roble-Lago-64m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Lago (64 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-lago-b",
    slug: "roble-lago-b-64m2",
    group: "grande",
    bedroomsMin: 3,
    bedroomsMax: 3,
    bedroomsLabel: "3 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Lago B",
    area: 64,
    areaLabel: "64 m²",
    specs: "3 Dormitorios · Living · 1 Baño · Cocina",
    description:
      "Variante B del Lago con distribución alternativa.",
    photo: null,
    previewImage: "/assets/plans/64B.png",
    pdfHref: "/plans/64m%C2%B2B.pdf",
    downloadName: "Plano-Roble-Lago-B-64m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Lago B (64 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-cordillera",
    slug: "roble-cordillera-69m2",
    group: "grande",
    bedroomsMin: 3,
    bedroomsMax: 3,
    bedroomsLabel: "3 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 1,
    bathroomsLabel: "1 baño",
    name: "Roble Cordillera",
    area: 69,
    areaLabel: "69 m²",
    specs: "3 Dormitorios · Living · 1 Baño · Cocina",
    description:
      "Vivienda amplia con tres dormitorios, espacios sociales generosos y excelente aprovechamiento.",
    photo: null,
    previewImage: "/assets/plans/69.png",
    pdfHref: "/plans/69m%C2%B2.pdf",
    downloadName: "Plano-Roble-Cordillera-69m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Cordillera (69 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-cumbre",
    slug: "roble-cumbre-72m2",
    group: "grande",
    bedroomsMin: 3,
    bedroomsMax: 3,
    bedroomsLabel: "3 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 2,
    bathroomsLabel: "1 a 2 baños",
    name: "Roble Cumbre",
    area: 72,
    areaLabel: "72 m²",
    specs: "3 Dormitorios · Living · 1–2 Baños · Cocina",
    description:
      "Casa familiar grande con tres dormitorios y áreas sociales muy bien dimensionadas.",
    photo: null,
    previewImage: "/assets/plans/72A.png",
    pdfHref: "/plans/72m%C2%B2A.pdf",
    downloadName: "Plano-Roble-Cumbre-72m2-Viviendas-Roble.pdf",
    badge: null,
    featured: true,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Cumbre (72 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-cumbre-b",
    slug: "roble-cumbre-b-72m2",
    group: "grande",
    bedroomsMin: 3,
    bedroomsMax: 3,
    bedroomsLabel: "3 dormitorios",
    bathroomsMin: 1,
    bathroomsMax: 2,
    bathroomsLabel: "1 a 2 baños",
    name: "Roble Cumbre B",
    area: 72,
    areaLabel: "72 m²",
    specs: "3 Dormitorios · Living · 1–2 Baños · Cocina",
    description:
      "Variante B del Cumbre con otra disposición de espacios.",
    photo: null,
    previewImage: "/assets/plans/72B.png",
    pdfHref: "/plans/72m%C2%B2B.pdf",
    downloadName: "Plano-Roble-Cumbre-B-72m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Cumbre B (72 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-nahuel",
    slug: "roble-nahuel-80m2",
    group: "grande",
    bedroomsMin: 3,
    bedroomsMax: 3,
    bedroomsLabel: "3 dormitorios",
    bathroomsMin: 2,
    bathroomsMax: 2,
    bathroomsLabel: "2 baños",
    name: "Roble Nahuel",
    area: 80,
    areaLabel: "80 m²",
    specs: "3 Dormitorios · Living · 2 Baños · Cocina",
    description:
      "Casa grande con tres dormitorios, dos baños y espacios sociales amplios. Para familias que buscan más confort.",
    photo: null,
    previewImage: "/assets/plans/80.png",
    pdfHref: "/plans/80m%C2%B2.pdf",
    downloadName: "Plano-Roble-Nahuel-80m2-Viviendas-Roble.pdf",
    badge: null,
    featured: false,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Nahuel (80 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-pehuen",
    slug: "roble-pehuen-90m2",
    group: "grande",
    bedroomsMin: 3,
    bedroomsMax: 4,
    bedroomsLabel: "3 a 4 dormitorios",
    bathroomsMin: 2,
    bathroomsMax: 2,
    bathroomsLabel: "2 baños",
    name: "Roble Pehuén",
    area: 90,
    areaLabel: "90 m²",
    specs: "3–4 Dormitorios · Living · 2 Baños · Cocina",
    description:
      "Vivienda familiar premium con espacios amplios, hasta cuatro dormitorios y áreas sociales muy generosas.",
    photo: null,
    previewImage: "/assets/plans/90.png",
    pdfHref: "/plans/90m%C2%B2.pdf",
    downloadName: "Plano-Roble-Pehuen-90m2-Viviendas-Roble.pdf",
    badge: "Premium",
    featured: true,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Pehuén (90 m²). ¿Me pueden dar más información?"
    ),
  },
];

export const WHATSAPP_CUSTOM = wa(
  "Hola, busco una vivienda personalizada y me gustaría conocer las opciones disponibles."
);


/* ── Helpers de catálogo ─────────────────────────── */

export function getModelBySlug(slug: string): HouseModel | undefined {
  return models.find((m) => m.slug === slug);
}

/** Modelos ordenados de menor a mayor superficie. */
export const modelsByArea: HouseModel[] = [...models].sort(
  (a, b) => a.area - b.area
);

/**
 * Sugerencias para la ficha de un modelo: primero los de la misma franja,
 * después los más cercanos en superficie. Nunca se incluye a sí mismo.
 */
export function relatedModels(model: HouseModel, limit = 3): HouseModel[] {
  const others = models.filter((m) => m.slug !== model.slug);
  const sameGroup = others.filter((m) => m.group === model.group);
  const rest = others.filter((m) => m.group !== model.group);

  const byAreaDistance = (a: HouseModel, b: HouseModel) =>
    Math.abs(a.area - model.area) - Math.abs(b.area - model.area);

  return [...sameGroup.sort(byAreaDistance), ...rest.sort(byAreaDistance)].slice(
    0,
    limit
  );
}

/** Modelos con N dormitorios (contempla rangos como "1 a 2 dormitorios"). */
export function modelsWithBedrooms(n: number): HouseModel[] {
  return modelsByArea.filter(
    (m) => m.bedroomsMin <= n && m.bedroomsMax >= n
  );
}

export const AREA_MIN = Math.min(...models.map((m) => m.area));
export const AREA_MAX = Math.max(...models.map((m) => m.area));

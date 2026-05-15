export type HouseModel = {
  id: string;
  name: string;
  area: number;
  areaLabel: string;
  specs: string;
  description: string;
  previewImage: string | null;
  pdfHref: string;
  downloadName: string;
  badge: string | null;
  whatsappMessage: string;
};

const WA_BASE = "https://wa.me/542994532220";

function wa(text: string) {
  return `${WA_BASE}?text=${encodeURIComponent(text)}`;
}

// ² → %C2%B2 in filenames served from /public/plans/
export const models: HouseModel[] = [
  {
    id: "roble-modulo",
    name: "Roble Módulo",
    area: 15,
    areaLabel: "15 m²",
    specs: "Estudio · 1 Baño",
    description:
      "Micro vivienda completa pensada para la inversión en renta, un primer paso propio o como módulo complementario dentro de un terreno.",
    previewImage: "/assets/plans/15.png",
    pdfHref: "/plans/15m%C2%B2.pdf",
    downloadName: "Plano-Roble-Modulo-15m2-Viviendas-Roble.pdf",
    badge: "Inversión",
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Módulo (15 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-studio",
    name: "Roble Studio",
    area: 15.6,
    areaLabel: "15.60 m²",
    specs: "Estudio · 1 Baño",
    description:
      "Eficiencia en cada metro cuadrado. Distribución inteligente con todo lo necesario para vivir cómodo en solitario o alquilar.",
    previewImage: "/assets/plans/1560.png",
    pdfHref: "/plans/1560m%C2%B2.pdf",
    downloadName: "Plano-Roble-Studio-1560m2-Viviendas-Roble.pdf",
    badge: null,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Studio (15.60 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-compact",
    name: "Roble Compact",
    area: 20,
    areaLabel: "20 m²",
    specs: "1 Ambiente · 1 Baño · Cocina",
    description:
      "Un ambiente bien resuelto: cocina integrada, baño completo y sector de descanso diferenciado. Funcional desde el día uno.",
    previewImage: "/assets/plans/20.png",
    pdfHref: "/plans/20m%C2%B2.pdf",
    downloadName: "Plano-Roble-Compact-20m2-Viviendas-Roble.pdf",
    badge: null,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Compact (20 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-mono",
    name: "Roble Mono",
    area: 25,
    areaLabel: "25 m²",
    specs: "1 Dormitorio · Living · 1 Baño",
    description:
      "Dormitorio independiente, living comedor y cocina bien diferenciada. La elección natural para quien quiere su propio espacio.",
    previewImage: "/assets/plans/25.png",
    pdfHref: "/plans/25m%C2%B2.pdf",
    downloadName: "Plano-Roble-Mono-25m2-Viviendas-Roble.pdf",
    badge: "Popular",
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Mono (25 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-duo",
    name: "Roble Duo",
    area: 30,
    areaLabel: "30 m²",
    specs: "1 Dormitorio · Living · 1 Baño · Cocina",
    description:
      "Dormitorio generoso, living comedor con buena escala y cocina integrada. Diseñado para una pareja que quiere comodidad real.",
    previewImage: "/assets/plans/30.png",
    pdfHref: "/plans/30m%C2%B2.pdf",
    downloadName: "Plano-Roble-Duo-30m2-Viviendas-Roble.pdf",
    badge: null,
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Duo (30 m²). ¿Me pueden dar más información?"
    ),
  },
  {
    id: "roble-esencial",
    name: "Roble Esencial",
    area: 36,
    areaLabel: "36 m²",
    specs: "1–2 Dormitorios · Living · 1 Baño · Cocina",
    description:
      "Vivienda familiar funcional y completa. Dormitorio amplio, living comedor, cocina y baño bien dimensionado. Base sólida para crecer.",
    previewImage: "/assets/plans/36.png",
    pdfHref: "/plans/36m%C2%B2A.pdf",
    downloadName: "Plano-Roble-Esencial-36m2-Viviendas-Roble.pdf",
    badge: "Familiar",
    whatsappMessage: wa(
      "Hola, me interesa el modelo Roble Esencial (36 m²). ¿Me pueden dar más información?"
    ),
  },
];

export const WHATSAPP_CUSTOM = wa(
  "Hola, busco una vivienda personalizada y me gustaría conocer las opciones disponibles."
);

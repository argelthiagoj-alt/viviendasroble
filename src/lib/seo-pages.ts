import type { ModelGroup } from "@/lib/models";
import type { Crumb, FaqItem } from "@/lib/seo/schema";
import type { ContentBlock } from "@/components/seo/ContentSection";

/**
 * Landings semánticas de primer nivel.
 *
 * Cada entrada apunta a una intención de búsqueda distinta y escribe su
 * propio contenido. Nada acá afirma materiales, sistemas, plazos ni
 * certificaciones que no estén documentados en el resto del sitio
 * (ver /sistema-de-construccion y la FAQ de la home).
 */

export type LandingSection = {
  eyebrow?: string;
  heading: string;
  lead?: string;
  tone: "cream" | "white";
  columns: 1 | 2;
  blocks: ContentBlock[];
};

/** Criterio para elegir qué modelos mostrar. Sin funciones: es data. */
export type ModelPick = {
  groups?: ModelGroup[];
  /** Filtra modelos que admitan esta cantidad de dormitorios. */
  bedrooms?: number;
  limit: number;
};

export type SeoLanding = {
  slug: string;
  title: string;
  description: string;

  eyebrow: string;
  h1: string;
  intro: string;
  chips: string[];

  breadcrumbs: Crumb[];

  sections: LandingSection[];

  models: {
    eyebrow?: string;
    heading: string;
    lead?: string;
    pick: ModelPick;
    tone: "cream" | "white";
  };

  locations?: {
    eyebrow?: string;
    heading: string;
    lead?: string;
    slugs: string[];
    tone: "cream" | "white";
  };

  faq: FaqItem[];

  cta: { heading: string; body: string };

  /** Para el Service de JSON-LD. */
  serviceName: string;
  serviceAreas: string[];
};

const AREAS_PRINCIPALES = [
  "Neuquén",
  "Río Negro",
  "Neuquén Capital",
  "Plottier",
  "Centenario",
  "Cipolletti",
  "General Roca",
  "Allen",
  "Villa Regina",
  "Cinco Saltos",
];

/* ────────────────────────────────────────────────────────────── */

const casasPrefabricadas: SeoLanding = {
  slug: "casas-prefabricadas",
  // El title no repite el de la home a propósito: la home compite por la
  // marca + la consulta geográfica, y esta página por la categoría en sí.
  title: "Casas Prefabricadas: Qué Incluyen y Plazos",
  description:
    "Qué es una casa prefabricada, qué incluye, cuánto tarda y qué necesitás en tu terreno. 21 modelos de 15 a 90 m² con precio cerrado en Neuquén, Río Negro y Patagonia.",
  eyebrow: "Casas prefabricadas",
  h1: "Casas prefabricadas en Neuquén, Río Negro y Patagonia",
  intro:
    "Una casa prefabricada se fabrica en taller y se monta en tu terreno. Eso cambia dos cosas que en la obra tradicional nunca son seguras: el plazo y el precio. En Viviendas Roble fabricamos en Plottier desde 2004 y entregamos con presupuesto cerrado por escrito.",
  chips: ["Precio cerrado", "21 modelos de 15 a 90 m²", "Planos en PDF sin registro"],
  breadcrumbs: [{ name: "Casas prefabricadas", path: "/casas-prefabricadas" }],
  sections: [
    {
      eyebrow: "Cómo funciona",
      heading: "Qué es exactamente una casa prefabricada",
      lead: "Es la pregunta con la que arranca casi todo el mundo, y vale la pena responderla sin marketing de por medio.",
      tone: "cream",
      columns: 2,
      blocks: [
        {
          heading: "Se fabrica en taller, se monta en tu terreno",
          body: "Los componentes de la vivienda —paneles, estructura, cubierta— se producen bajo condiciones controladas en nuestra planta de Plottier y después se montan en el lote. La obra en el terreno es corta porque el grueso del trabajo ya está hecho.",
        },
        {
          heading: "Prefabricada no significa provisoria",
          body: "Es una vivienda permanente, con instalación eléctrica embutida, sanitarios completos, aberturas de aluminio y terminaciones interiores y exteriores. Se escritura, se habilita y se vive como cualquier otra casa.",
        },
        {
          heading: "El precio se cierra antes de empezar",
          body: "El presupuesto se firma por escrito antes del inicio de obra. Si después decidís cambiar materiales o ampliar el proyecto, se ajusta por escrito. Adicionales sorpresa de nuestra parte no hay.",
        },
        {
          heading: "El plazo también",
          body: "Según el modelo y las condiciones del terreno, el plazo habitual va de 60 a 120 días hábiles desde el inicio de obra. El cronograma detallado se entrega antes de arrancar.",
        },
      ],
    },
    {
      eyebrow: "Para quién",
      heading: "Con qué proyectos trabajamos",
      tone: "white",
      columns: 2,
      blocks: [
        {
          heading: "Tenés el terreno y querés construir",
          body: "Es el caso más frecuente. Con los datos del lote —ubicación, dimensiones, accesos y servicios disponibles— evaluamos qué modelo encaja mejor y qué tareas de preparación hacen falta. Si todavía no escrituraste, igual podemos avanzar con la propuesta.",
        },
        {
          heading: "Primera vivienda",
          body: "Los modelos compactos y medianos permiten empezar con una casa completa y bien resuelta sin una obra que se estire durante años. Varios de ellos son compatibles con líneas de financiación estatales como Procrear.",
        },
        {
          heading: "Casa familiar",
          body: "Los modelos de 2 y 3 dormitorios, de 36 a 90 m², cubren la mayoría de las necesidades de una familia. Todos son personalizables en distribución, terminaciones y materiales.",
        },
        {
          heading: "Inversión o vivienda complementaria",
          body: "Los modelos más chicos se usan habitualmente como unidad de renta o como vivienda complementaria dentro de un terreno que ya tiene una casa. Antes conviene verificar la normativa municipal de tu lote.",
        },
      ],
    },
  ],
  models: {
    eyebrow: "Catálogo",
    heading: "Modelos de casas prefabricadas",
    lead: "Desde el monoambiente de 15 m² hasta la casa de 90 m² con cuatro dormitorios. Cada ficha tiene la distribución, las características y el plano descargable.",
    pick: { limit: 6 },
    tone: "cream",
  },
  locations: {
    eyebrow: "Dónde construimos",
    heading: "Casas prefabricadas por localidad",
    lead: "Cada zona tiene su propia realidad de terrenos, clima y logística. Entrá a la de tu ciudad para ver cómo trabajamos ahí.",
    slugs: [
      "neuquen",
      "rio-negro",
      "patagonia",
      "neuquen-capital",
      "plottier",
      "centenario",
      "cipolletti",
      "general-roca",
    ],
    tone: "white",
  },
  faq: [
    {
      q: "¿Cuánto cuesta una casa prefabricada?",
      a: "Depende del modelo, la superficie, las terminaciones elegidas y la ubicación del terreno. No publicamos una lista de precios porque sería engañosa: para darte un número real necesitamos conocer tu proyecto. El presupuesto es sin cargo y se entrega por escrito con el detalle de qué incluye.",
    },
    {
      q: "¿Qué diferencia hay entre una casa prefabricada y una vivienda industrializada?",
      a: "Son conceptos cercanos. Una casa prefabricada se arma con módulos o paneles fabricados en taller y montados en obra. Una vivienda industrializada aplica además un sistema constructivo planificado de punta a punta, con cronograma, control de calidad y materiales certificados. Nosotros trabajamos con construcción industrializada.",
    },
    {
      q: "¿La casa llega terminada?",
      a: "La propuesta detalla por escrito qué incluye cada caso: estructura, cerramientos, aislaciones, instalaciones y terminaciones interiores y exteriores, además de las tareas que quedan a tu cargo si las hubiera. Lo definimos antes de firmar para que no queden zonas grises.",
    },
    {
      q: "¿Qué necesito tener preparado en mi terreno?",
      a: "Lo evaluamos según tu lote: accesos para el montaje, nivelación y situación de los servicios. Te lo indicamos por escrito en la propuesta.",
    },
    {
      q: "¿Puedo personalizar el modelo?",
      a: "Sí. Los modelos son una base de partida: adaptamos distribución, terminaciones, colores y materiales según tu gusto, tu terreno y tu presupuesto. También hacemos proyectos completamente a medida.",
    },
    {
      q: "¿Cómo solicito un presupuesto?",
      a: "Por WhatsApp o por el formulario de contacto. Contanos dónde está el terreno, para cuántas personas pensás la casa y qué modelo te interesa. Es sin cargo y sin compromiso.",
    },
  ],
  cta: {
    heading: "Pedí el presupuesto de tu casa prefabricada",
    body: "Sin cargo y sin compromiso. Contanos dónde está tu terreno y qué necesitás, y te respondemos con una propuesta concreta.",
  },
  serviceName: "Construcción de casas prefabricadas",
  serviceAreas: AREAS_PRINCIPALES,
};

/* ────────────────────────────────────────────────────────────── */

const viviendasIndustrializadas: SeoLanding = {
  slug: "viviendas-industrializadas",
  title: "Viviendas Industrializadas en Neuquén y Río Negro",
  description:
    "Viviendas industrializadas en Neuquén, Río Negro y Patagonia. Sistema constructivo propio, materiales certificados, precio cerrado y cronograma por escrito.",
  eyebrow: "Viviendas industrializadas",
  h1: "Viviendas industrializadas en Neuquén y Río Negro",
  intro:
    "La construcción industrializada aplica un sistema planificado de punta a punta: los componentes se fabrican en taller bajo condiciones controladas, la obra sigue un cronograma definido y la calidad no depende del clima ni de la disponibilidad de mano de obra de esa semana.",
  chips: [
    "Sistema constructivo propio",
    "Fábrica en Plottier desde 2004",
    "Cronograma por escrito",
  ],
  breadcrumbs: [
    { name: "Viviendas industrializadas", path: "/viviendas-industrializadas" },
  ],
  sections: [
    {
      eyebrow: "Qué la define",
      heading: "Industrializada no es lo mismo que prefabricada",
      lead: "La diferencia no es de marketing: es de proceso. Y cambia qué podés exigirle a la empresa que te construye.",
      tone: "cream",
      columns: 1,
      blocks: [
        {
          heading: "Un sistema, no un ensamblado",
          body: [
            "Una casa prefabricada se arma con módulos o paneles fabricados en taller y montados en obra. Una vivienda industrializada va un paso más allá: hay un sistema constructivo definido, con especificación de materiales, secuencia de montaje y puntos de control en cada etapa.",
            "Eso es lo que permite comprometer un plazo por escrito. Si cada obra se resolviera de manera distinta, el cronograma sería una estimación optimista, no un compromiso.",
          ],
        },
        {
          heading: "Fabricación propia, sin intermediarios",
          body: "Nuestra planta está en Plottier desde 2004 y no tercerizamos la fabricación ni la obra. El equipo técnico supervisa cada etapa. Cuando algo hay que ajustar, se ajusta acá, no en una cadena de proveedores.",
        },
        {
          heading: "Dos sistemas disponibles",
          body: "Trabajamos con el Sistema Estándar y con Roble Patagónica, este último certificado con CAT N° 2874 de la Secretaría de Desarrollo Urbano y Vivienda de la Nación y apto Procrear. La diferencia principal está en la aislación y en las terminaciones: Roble Patagónica incorpora telgopor de 35 mm con densidad 20 kg/m³, superior al estándar.",
        },
      ],
    },
    {
      eyebrow: "Qué ganás",
      heading: "Por qué una familia elige construir así",
      tone: "white",
      columns: 2,
      blocks: [
        {
          heading: "Plazo definido",
          body: "Entre 60 y 120 días hábiles desde el inicio de obra, según el modelo y el terreno. Frente a los 12 a 24 meses de una obra tradicional, la diferencia no es marginal.",
        },
        {
          heading: "Precio cerrado",
          body: "El presupuesto se firma antes de arrancar y no se mueve salvo que vos decidas cambiar algo. Es la protección más concreta que existe contra el desvío de costos.",
        },
        {
          heading: "Calidad uniforme",
          body: "Los componentes se producen en taller, en condiciones controladas. La lluvia, el viento o el frío no afectan la calidad de lo que se fabrica.",
        },
        {
          heading: "Menos desperdicio",
          body: "La construcción en seco genera bastante menos residuo que la obra húmeda. Se nota en el costo y en el estado en que queda tu terreno.",
        },
      ],
    },
  ],
  models: {
    eyebrow: "Modelos",
    heading: "Viviendas industrializadas por superficie",
    lead: "Veintiún modelos de 15 a 90 m², con variantes de distribución en las superficies más pedidas.",
    pick: { limit: 6 },
    tone: "cream",
  },
  locations: {
    eyebrow: "Cobertura",
    heading: "Dónde construimos viviendas industrializadas",
    slugs: [
      "neuquen",
      "rio-negro",
      "neuquen-capital",
      "cipolletti",
      "general-roca",
      "plottier",
    ],
    tone: "white",
  },
  faq: [
    {
      q: "¿Qué incluye una vivienda industrializada?",
      a: "Cada propuesta detalla por escrito qué incluye: estructura, cerramientos, aislaciones, instalaciones, terminaciones interiores y exteriores. También te indicamos qué tareas quedan a tu cargo si las hay, para que no haya zonas grises.",
    },
    {
      q: "¿Es tan resistente como una casa de obra tradicional?",
      a: "Es una vivienda permanente, con estructura, aislaciones e instalaciones diseñadas para uso continuo y para las condiciones de la región. Las especificaciones de materiales de cada sistema están publicadas en la página de sistema de construcción.",
    },
    {
      q: "¿Qué mantenimiento requiere?",
      a: "El mantenimiento normal de cualquier vivienda: revisión periódica de pinturas exteriores, sellados y desagües. Los sistemas en seco están pensados para durar décadas con cuidados básicos.",
    },
    {
      q: "¿Las viviendas son aptas para Procrear?",
      a: "El sistema Roble Patagónica cuenta con certificación CAT N° 2874 de la Secretaría de Desarrollo Urbano y Vivienda de la Nación y es apto Procrear. Te asesoramos en la gestión y la documentación necesaria.",
    },
    {
      q: "¿Se ocupan de los permisos municipales?",
      a: "Te asesoramos y acompañamos en la gestión de planos y habilitación municipal según la ciudad donde construyas, para que la casa quede en regla.",
    },
  ],
  cta: {
    heading: "¿Querés saber qué sistema conviene para tu proyecto?",
    body: "Contanos tu terreno, tu zona y qué necesitás. Te asesoramos sin cargo y te recomendamos la mejor opción.",
  },
  serviceName: "Construcción de viviendas industrializadas",
  serviceAreas: AREAS_PRINCIPALES,
};

/* ────────────────────────────────────────────────────────────── */

const casasModulares: SeoLanding = {
  slug: "casas-modulares",
  title: "Casas Modulares en Neuquén y Río Negro",
  description:
    "Casas modulares y módulos habitacionales en Neuquén, Río Negro y Patagonia. Construcción modular con paneles fabricados en taller, precio cerrado y montaje rápido.",
  eyebrow: "Construcción modular",
  h1: "Casas modulares y módulos habitacionales en la Patagonia",
  intro:
    "La construcción modular resuelve la vivienda por partes: los paneles y componentes se fabrican en taller y se montan en el terreno siguiendo una secuencia definida. Es lo que hace que la obra en el lote sea corta y que el resultado no dependa del clima de esa semana.",
  chips: ["Montaje rápido en obra", "Módulos desde 15 m²", "Precio cerrado"],
  breadcrumbs: [{ name: "Casas modulares", path: "/casas-modulares" }],
  sections: [
    {
      eyebrow: "El sistema",
      heading: "Cómo trabajamos la construcción modular",
      tone: "cream",
      columns: 2,
      blocks: [
        {
          heading: "Producción en taller",
          body: "Los componentes se fabrican en nuestra planta de Plottier bajo condiciones controladas. Ahí se resuelve el grueso del trabajo: estructura, paneles, cortes y preparación de instalaciones.",
        },
        {
          heading: "Montaje en tu terreno",
          body: "En el lote se ejecuta el montaje y las conexiones. Es la etapa más corta del proceso, y por eso la obra molesta mucho menos que una construcción tradicional de meses.",
        },
        {
          heading: "Escalable por superficie",
          body: "El catálogo va del módulo de 15 m² a la vivienda de 90 m². La lógica constructiva es la misma; lo que cambia es la cantidad de superficie y la complejidad de la distribución.",
        },
        {
          heading: "Adaptable al lote",
          body: "Los modelos son una base. Adaptamos distribución, terminaciones y materiales según el terreno y lo que necesites. También hacemos proyectos completamente a medida.",
        },
      ],
    },
    {
      eyebrow: "Usos frecuentes",
      heading: "Para qué se usan los módulos habitacionales",
      lead: "No todo módulo es una casa principal. Estos son los escenarios que más nos consultan.",
      tone: "white",
      columns: 2,
      blocks: [
        {
          heading: "Vivienda complementaria en el terreno",
          body: "Sumar una unidad chica en un lote que ya tiene casa es una consulta habitual, sobre todo en Plottier, Centenario y la zona de chacras del valle. Antes de avanzar conviene verificar la normativa municipal aplicable a tu lote.",
        },
        {
          heading: "Unidad de renta",
          body: "Los modelos compactos funcionan como unidad de alquiler completa: monoambiente resuelto, baño completo y cocina. El Roble Módulo de 15 m² y el Roble Studio son los más elegidos para este uso.",
        },
        {
          heading: "Primera vivienda",
          body: "Para quien ya tiene el terreno, un modelo de 25 a 42 m² permite arrancar con una casa terminada y con precio cerrado, sin esperar años.",
        },
        {
          heading: "Vivienda para personal",
          body: "En zonas como Rincón de los Sauces nos consultan por unidades para personal. Contanos el caso concreto y te indicamos qué modelos encajan y con qué plazos podemos trabajar.",
        },
      ],
    },
  ],
  models: {
    eyebrow: "Modelos",
    heading: "Modelos modulares disponibles",
    lead: "Los compactos y medianos son los que más se usan en proyectos modulares. Todos tienen plano descargable.",
    pick: { groups: ["compacto", "mediano"], limit: 6 },
    tone: "cream",
  },
  locations: {
    eyebrow: "Cobertura",
    heading: "Casas modulares por zona",
    slugs: [
      "neuquen",
      "rio-negro",
      "neuquen-capital",
      "plottier",
      "cipolletti",
      "cinco-saltos",
    ],
    tone: "white",
  },
  faq: [
    {
      q: "¿Una casa modular es lo mismo que una prefabricada?",
      a: "En la práctica se usan como sinónimos. La idea de fondo es la misma: fabricar en taller y montar en obra. Lo importante no es la etiqueta sino el sistema constructivo, los materiales y el respaldo de quien la construye.",
    },
    {
      q: "¿Se puede ampliar después?",
      a: "Es una consulta habitual y conviene plantearla desde el proyecto inicial para dejar la vivienda preparada. Contanos cómo imaginás el crecimiento y lo contemplamos en la propuesta.",
    },
    {
      q: "¿Cuánto tarda el montaje en el terreno?",
      a: "El plazo total, desde el inicio de obra hasta la entrega, va habitualmente de 60 a 120 días hábiles según el modelo y las condiciones del lote. El cronograma detallado se entrega por escrito antes de arrancar.",
    },
    {
      q: "¿Qué superficies manejan?",
      a: "Desde 15 m² hasta 90 m², con variantes de distribución en las superficies más pedidas (36, 42, 49, 64 y 72 m²).",
    },
  ],
  cta: {
    heading: "Contanos qué módulo necesitás",
    body: "Ya sea una vivienda principal, una unidad de renta o un módulo complementario en tu terreno, te armamos la propuesta sin cargo.",
  },
  serviceName: "Construcción modular de viviendas",
  serviceAreas: AREAS_PRINCIPALES,
};

/* ────────────────────────────────────────────────────────────── */

const construccionEnSeco: SeoLanding = {
  slug: "construccion-en-seco",
  title: "Construcción en Seco en Neuquén y Río Negro",
  description:
    "Construcción en seco en Neuquén, Río Negro y Patagonia: estructura de madera, paneles termoacústicos e hidrófugos, aislación térmica y obra rápida con precio cerrado.",
  eyebrow: "Sistema constructivo",
  h1: "Construcción en seco en Neuquén, Río Negro y Patagonia",
  intro:
    "La construcción en seco reemplaza la obra húmeda tradicional por componentes fabricados en taller y ensamblados en el lote. Menos agua, menos tiempo, menos residuos y una envolvente que se aísla mucho mejor que un muro de ladrillo sin tratamiento.",
  chips: [
    "Estructura de madera",
    "Paneles termoacústicos e ignífugos",
    "Menos residuos en obra",
  ],
  breadcrumbs: [
    { name: "Construcción en seco", path: "/construccion-en-seco" },
  ],
  sections: [
    {
      eyebrow: "Con qué construimos",
      heading: "Los materiales que usamos, sin vueltas",
      lead: "Todo lo que sigue está especificado en el detalle de nuestros sistemas constructivos. No describimos sistemas que no aplicamos.",
      tone: "cream",
      columns: 1,
      blocks: [
        {
          heading: "Estructura de madera",
          body: "Tirantes de Eucalyptus grandis en sistema sig-zag. El anclaje se resuelve con clavos espiralados en muros, clavos dentados con cabeza plomo en techos y tornillos y adhesivos específicos en la unión platea-muro. Cada punto tiene su técnica definida.",
        },
        {
          heading: "Paneles interiores",
          body: "MDF Guillermina de 9 mm: termoacústico, hidrófugo e ignífugo. Es el mismo panel en los dos sistemas, estándar y Roble Patagónica.",
        },
        {
          heading: "Cubierta y aislación",
          body: "Chapa de zinc a dos aguas —calibre N° 27 en el sistema estándar, calibre N° 25 en Roble Patagónica—. Roble Patagónica suma aislación de telgopor de 35 mm con densidad 20 kg/m³.",
        },
        {
          heading: "Revestimiento exterior",
          body: "Cuatro opciones en el sistema estándar: machimbre de pino ½\", machimbre bombé 1\", placa cementicia Superboard de 8 mm, o preparación apta para revestir en ladrillo. Roble Patagónica trabaja con machimbre cabañero bombé 1\" o Superboard de 10 mm.",
        },
        {
          heading: "Instalaciones y aberturas",
          body: "Instalación eléctrica con caños y cajas embutidas. Sanitarios de cuatro piezas con grifería FV y termofusión. Ventanas panorámicas de aluminio blanco y puerta principal de doble chapa inyectada con cerradura de seguridad.",
        },
      ],
    },
    {
      eyebrow: "Ventajas reales",
      heading: "Por qué la construcción en seco conviene en el valle",
      tone: "white",
      columns: 2,
      blocks: [
        {
          heading: "La envolvente trabaja completa",
          body: "Paredes, techo y piso se resuelven como un conjunto. En un clima con heladas en invierno y calor seco en verano, eso es lo que mantiene la temperatura adentro sin disparar el consumo.",
        },
        {
          heading: "Obra corta",
          body: "Sin tiempos de fragüe ni dependencia del clima para avanzar. El plazo habitual va de 60 a 120 días hábiles desde el inicio de obra.",
        },
        {
          heading: "Materiales ignífugos",
          body: "Los paneles interiores son termoacústicos, hidrófugos e ignífugos. No es un extra: es el estándar en los dos sistemas.",
        },
        {
          heading: "Menos desperdicio",
          body: "La construcción en seco genera bastante menos residuo que la obra húmeda. Menos volquetes, menos costo y un terreno que queda en mejor estado.",
        },
      ],
    },
  ],
  models: {
    eyebrow: "Modelos",
    heading: "Modelos construidos con este sistema",
    lead: "Todos nuestros modelos se construyen en seco. Estos son algunos de los más consultados.",
    pick: { limit: 6 },
    tone: "cream",
  },
  locations: {
    eyebrow: "Cobertura",
    heading: "Construcción en seco por zona",
    slugs: ["neuquen", "rio-negro", "neuquen-capital", "cipolletti", "plottier"],
    tone: "white",
  },
  faq: [
    {
      q: "¿Usan steel frame?",
      a: "No. Nuestros sistemas se construyen con estructura de madera: tirantes de Eucalyptus grandis en sistema sig-zag. El detalle completo de materiales de cada sistema está publicado en la página de sistema de construcción.",
    },
    {
      q: "¿Qué diferencia hay entre el Sistema Estándar y Roble Patagónica?",
      a: "Roble Patagónica tiene certificación CAT N° 2874 y es apto Procrear, usa chapa calibre N° 25 en lugar de N° 27, suma aislación de telgopor de 35 mm con densidad 20 kg/m³, trabaja con revestimientos exteriores de mayor espesor e incorpora puertas interiores de MDF revestidas en PVC y galería opcional.",
    },
    {
      q: "¿La casa es cálida en invierno?",
      a: "La aislación térmica es uno de los puntos centrales del sistema, y Roble Patagónica la refuerza respecto del estándar. Lo que corresponde definir en cada proyecto es qué solución aplica según la zona y el lote.",
    },
    {
      q: "¿Qué garantía tiene?",
      a: "Viviendas Roble garantiza calidad de materiales, detalles de terminación y servicio posventa. El documento de garantía forma parte del contrato firmado.",
    },
  ],
  cta: {
    heading: "¿Querés ver el detalle técnico completo?",
    body: "En la página de sistema de construcción está la especificación completa de los dos sistemas, material por material. Y si preferís que te lo expliquemos, escribinos.",
  },
  serviceName: "Construcción en seco de viviendas",
  serviceAreas: AREAS_PRINCIPALES,
};

/* ────────────────────────────────────────────────────────────── */

const casasLlaveEnMano: SeoLanding = {
  slug: "casas-llave-en-mano",
  title: "Casas Llave en Mano en Neuquén y Río Negro",
  description:
    "Casas llave en mano en Neuquén, Río Negro y Patagonia: proyecto, fabricación, montaje y terminaciones con precio cerrado y cronograma por escrito.",
  eyebrow: "Llave en mano",
  h1: "Casas llave en mano en Neuquén y Río Negro",
  intro:
    "Llave en mano significa que no tenés que coordinar gremios, comprar materiales ni perseguir a nadie. Nosotros fabricamos, montamos y terminamos la vivienda con un cronograma definido y un presupuesto cerrado por escrito. Vos ponés el terreno y las decisiones de diseño.",
  chips: ["Un solo interlocutor", "Precio cerrado por escrito", "Entrega planificada"],
  breadcrumbs: [{ name: "Casas llave en mano", path: "/casas-llave-en-mano" }],
  sections: [
    {
      eyebrow: "El proceso",
      heading: "De la primera charla a las llaves",
      lead: "Cinco etapas, con puntos de control definidos y comunicación en cada una.",
      tone: "cream",
      columns: 1,
      blocks: [
        {
          heading: "1 · Consulta inicial",
          body: "Nos contás tu terreno, tus necesidades y tu presupuesto. Sin compromiso. Respondemos en menos de 24 horas.",
        },
        {
          heading: "2 · Propuesta y diseño",
          body: "Te presentamos la propuesta adaptada a tu terreno: planos, materiales, tiempos y precio cerrado por escrito. Acá se define todo, antes de poner el primer clavo.",
        },
        {
          heading: "3 · Inicio de obra",
          body: "Aprobado el proyecto, arranca la construcción con cronograma detallado y puntos de control definidos.",
        },
        {
          heading: "4 · Supervisión y avance",
          body: "Nuestro equipo técnico supervisa cada etapa. Recibís actualizaciones del avance sin tener que pedirlas. No tercerizamos la obra.",
        },
        {
          heading: "5 · Entrega",
          body: "Recibís tu casa terminada, revisada y lista para habitar. Estamos en la entrega final junto a vos, y el documento de garantía forma parte del contrato.",
        },
      ],
    },
    {
      eyebrow: "Qué resuelve",
      heading: "Por qué elegir llave en mano",
      tone: "white",
      columns: 2,
      blocks: [
        {
          heading: "Un solo responsable",
          body: "No hay que coordinar entre el albañil, el electricista, el plomero y el corralón. Hay un contrato, un cronograma y un equipo que responde por el resultado.",
        },
        {
          heading: "El precio no se mueve",
          body: "El presupuesto se firma cerrado antes del inicio de obra. Si vos decidís cambiar materiales o ampliar, se ajusta por escrito. Adicionales sorpresa de nuestra parte no hay.",
        },
        {
          heading: "Permisos acompañados",
          body: "Te asesoramos y acompañamos en la gestión de planos y habilitación municipal según la ciudad donde construyas, para que la casa quede en regla.",
        },
        {
          heading: "Todo definido antes de arrancar",
          body: "Plano, terminaciones y materiales se eligen en la etapa de propuesta. El resultado no depende de decisiones tomadas a las apuradas en medio de la obra.",
        },
      ],
    },
  ],
  models: {
    eyebrow: "Modelos",
    heading: "Modelos que entregamos llave en mano",
    lead: "Todo el catálogo se trabaja bajo esta modalidad. Entrá a la ficha del modelo que te interese para ver la distribución y el plano.",
    pick: { limit: 6 },
    tone: "cream",
  },
  locations: {
    eyebrow: "Cobertura",
    heading: "Dónde entregamos llave en mano",
    slugs: [
      "neuquen",
      "rio-negro",
      "neuquen-capital",
      "cipolletti",
      "general-roca",
      "centenario",
    ],
    tone: "white",
  },
  faq: [
    {
      q: "¿Qué incluye exactamente la entrega?",
      a: "Cada propuesta detalla por escrito qué incluye: estructura, cerramientos, aislaciones, instalaciones, terminaciones interiores y exteriores. También te indicamos qué tareas quedan a tu cargo si las hay, por ejemplo conexiones a servicios, para que no haya zonas grises.",
    },
    {
      q: "¿Cuánto tarda?",
      a: "Según el modelo y las condiciones del terreno, el plazo habitual va de 60 a 120 días hábiles desde el inicio de obra. El cronograma se entrega por escrito antes de arrancar.",
    },
    {
      q: "¿Puedo elegir las terminaciones?",
      a: "Sí. Distribución, terminaciones, colores y materiales se definen con vos en la etapa de propuesta, según tu gusto, tu terreno y tu presupuesto.",
    },
    {
      q: "¿Hay garantía?",
      a: "Sí. Viviendas Roble garantiza calidad de materiales, detalles de terminación y servicio posventa. El documento de garantía forma parte del contrato firmado.",
    },
  ],
  cta: {
    heading: "Pedí tu presupuesto llave en mano",
    body: "Contanos dónde está el terreno y qué modelo te interesa. Te respondemos con una propuesta con tiempos y precio cerrado.",
  },
  serviceName: "Construcción de viviendas llave en mano",
  serviceAreas: AREAS_PRINCIPALES,
};

/* ────────────────────────────────────────────────────────────── */

const casasParaPatagonia: SeoLanding = {
  slug: "casas-para-patagonia",
  title: "Casas para Clima Patagónico y Aislación",
  description:
    "Viviendas preparadas para el clima patagónico: aislación térmica, confort en invierno y materiales elegidos para el frío y el viento de Neuquén y Río Negro.",
  eyebrow: "Pensadas para la región",
  h1: "Casas preparadas para el clima patagónico",
  intro:
    "El invierno patagónico no perdona una envolvente mal resuelta. Una casa que se enfría rápido no es un problema de confort: es una factura de gas que se repite todos los meses durante décadas. Por eso la aislación es el punto donde más se nota la diferencia entre una vivienda bien construida y una que no lo está.",
  chips: [
    "Aislación reforzada en Roble Patagónica",
    "Paneles termoacústicos",
    "40+ años construyendo en la región",
  ],
  breadcrumbs: [
    { name: "Casas para Patagonia", path: "/casas-para-patagonia" },
  ],
  sections: [
    {
      eyebrow: "El problema",
      heading: "Qué le exige la Patagonia a una vivienda",
      tone: "cream",
      columns: 2,
      blocks: [
        {
          heading: "Frío sostenido, no puntual",
          body: "No se trata de un par de noches heladas: son meses de temperaturas bajas. Una envolvente que pierde calor lo pierde todos los días, y eso se acumula en el consumo de calefacción.",
        },
        {
          heading: "Amplitud térmica",
          body: "En el valle la diferencia entre el día y la noche es marcada. La casa tiene que amortiguar ese salto, no seguirlo.",
        },
        {
          heading: "Viento",
          body: "El viento del oeste es constante en buena parte de la región. Los detalles de anclaje y de sellado dejan de ser un detalle cuando el viento es parte del clima cotidiano.",
        },
        {
          heading: "Distancias",
          body: "Construir lejos de los centros de provisión encarece y demora la obra tradicional. Fabricar en taller y montar en el lote reduce mucho esa exposición.",
        },
      ],
    },
    {
      eyebrow: "Cómo lo resolvemos",
      heading: "Lo que hacemos al respecto",
      lead: "Todo lo que sigue está especificado en nuestros sistemas constructivos. No publicamos valores de transmitancia ni certificaciones de eficiencia que no tengamos.",
      tone: "white",
      columns: 1,
      blocks: [
        {
          heading: "La envolvente trabaja completa",
          body: "Paredes, techo y piso se resuelven en conjunto para mantener el calor en invierno y la frescura en verano. Aislar bien una pared y dejar el techo sin resolver no sirve de nada.",
        },
        {
          heading: "Roble Patagónica: aislación reforzada",
          body: "Es el sistema pensado específicamente para estas condiciones. Suma aislación de telgopor de 35 mm con densidad 20 kg/m³ —superior a la del sistema estándar— y cubierta de chapa de zinc calibre N° 25. Cuenta con certificación CAT N° 2874 de la Secretaría de Desarrollo Urbano y Vivienda de la Nación y es apto Procrear.",
        },
        {
          heading: "Paneles termoacústicos",
          body: "Los paneles interiores de MDF Guillermina de 9 mm son termoacústicos, hidrófugos e ignífugos en los dos sistemas. Aportan al comportamiento térmico y al confort acústico.",
        },
        {
          heading: "Anclaje resuelto punto por punto",
          body: "Clavos espiralados en muros, clavos dentados con cabeza plomo en techos, tornillos y adhesivos específicos en la unión platea-muro. Cada unión tiene su técnica definida.",
        },
        {
          heading: "Cuarenta años de ajustes",
          body: "Construimos en la región desde 1987 y fabricamos acá desde 2004. Los sistemas no se diseñaron en otra provincia para después adaptarlos: se ajustaron trabajando en este clima.",
        },
      ],
    },
  ],
  models: {
    eyebrow: "Modelos",
    heading: "Modelos para vivir todo el año en Patagonia",
    lead: "Cualquier modelo del catálogo puede construirse con el sistema Roble Patagónica. Estos son los más elegidos para vivienda permanente.",
    pick: { groups: ["mediano", "grande"], limit: 6 },
    tone: "cream",
  },
  locations: {
    eyebrow: "Cobertura",
    heading: "Dónde construimos en la región",
    lead: "Entrá a la landing de tu zona para ver el contexto local y cómo trabajamos ahí.",
    slugs: [
      "patagonia",
      "neuquen",
      "rio-negro",
      "neuquen-capital",
      "cipolletti",
      "bariloche",
    ],
    tone: "white",
  },
  faq: [
    {
      q: "¿Las viviendas sirven para el clima patagónico?",
      a: "Sí. Aplicamos aislación térmica, materiales y detalles constructivos pensados para los inviernos fríos y los vientos de la Patagonia. El sistema Roble Patagónica refuerza la aislación respecto del estándar.",
    },
    {
      q: "¿Qué aislación tiene el sistema Roble Patagónica?",
      a: "Telgopor de 35 mm con densidad 20 kg/m³, superior a la del sistema estándar, más cubierta de chapa de zinc calibre N° 25 y paneles interiores termoacústicos de MDF de 9 mm.",
    },
    {
      q: "¿Sirven para zonas con nieve como Bariloche o San Martín de los Andes?",
      a: "Las soluciones de cubierta, aislación y fundación se definen según el proyecto y el lugar. En la zona cordillerana evaluamos cada caso antes de comprometer una solución y te lo detallamos por escrito en la propuesta.",
    },
    {
      q: "¿Cuánto se ahorra en calefacción?",
      a: "No damos un número porque dependería del modelo, del uso y del tipo de calefacción, y cualquier cifra general sería una estimación sin respaldo. Lo que sí podemos detallarte es qué aislación lleva cada sistema para que compares con lo que estés evaluando.",
    },
  ],
  cta: {
    heading: "Hablemos de tu proyecto en Patagonia",
    body: "Contanos dónde está el terreno y qué clima tenés en tu zona. Te recomendamos el sistema que corresponde y te pasamos el presupuesto sin cargo.",
  },
  serviceName: "Construcción de viviendas para clima patagónico",
  serviceAreas: ["Neuquén", "Río Negro", "La Pampa", "Chubut", "Patagonia"],
};

/* ────────────────────────────────────────────────────────────── */

export const seoLandings: SeoLanding[] = [
  casasPrefabricadas,
  viviendasIndustrializadas,
  casasModulares,
  construccionEnSeco,
  casasLlaveEnMano,
  casasParaPatagonia,
];

export function getLanding(slug: string): SeoLanding | undefined {
  return seoLandings.find((l) => l.slug === slug);
}

/**
 * Datos de las landings geográficas (/casas-prefabricadas/<slug>).
 *
 * Reglas del proyecto:
 * - Cada entrada escribe su propio contenido. No hay plantilla con
 *   "Neuquén" reemplazado por "Cipolletti": eso sería una doorway page.
 * - Solo se afirma lo que el proyecto respalda. Las localidades donde la
 *   operación es puntual lo dicen explícitamente en `coverageText`.
 * - `indexable: false` deja la infraestructura lista sin publicar una
 *   landing pobre. Esas páginas no entran al sitemap y llevan noindex.
 */

export type LocationKind = "region" | "province" | "city";

/** Nivel de operación declarado en el contenido del sitio. */
export type CoverageTier =
  | "principal" // zona de operación habitual
  | "consulta"; // se evalúan proyectos, la logística se confirma caso por caso

export type LocationFaq = { q: string; a: string };

export type Location = {
  slug: string;
  name: string;
  kind: LocationKind;
  tier: CoverageTier;
  /** Provincia a la que pertenece la ciudad. Vacío en provincias y región. */
  province?: string;
  provinceSlug?: string;
  indexable: boolean;

  /* Metadata */
  title: string;
  description: string;

  /* Contenido */
  h1: string;
  intro: string;
  localContext: string;
  climateContext: string;
  coverageText: string;

  /* Enlaces internos */
  nearby: string[];
  /** Franjas de modelos a destacar. Criterio comercial, no una afirmación técnica. */
  featuredGroups: ("compacto" | "mediano" | "grande")[];

  faq: LocationFaq[];
};

/* ────────────────────────────────────────────────────────────────
   Región
   ──────────────────────────────────────────────────────────────── */

const REGIONS: Location[] = [
  {
    slug: "patagonia",
    name: "Patagonia",
    kind: "region",
    tier: "principal",
    indexable: true,
    title: "Casas Prefabricadas en Patagonia",
    description:
      "Casas prefabricadas y viviendas industrializadas para la Patagonia: Neuquén, Río Negro, La Pampa y Chubut. Aislación térmica, precio cerrado y más de 40 años en la región.",
    h1: "Casas prefabricadas para la Patagonia",
    intro:
      "Construir en la Patagonia no es lo mismo que construir en cualquier otro lugar del país. El frío sostenido, la amplitud térmica y el viento condicionan cada decisión constructiva, y las distancias condicionan la logística. Viviendas Roble trabaja en la región desde 1987 y fabrica en Plottier, Neuquén: los modelos, los materiales y los plazos están pensados desde acá, no adaptados desde otro lado.",
    localContext:
      "Nuestra cobertura habitual cubre el corredor del Alto Valle y la capital neuquina, y desde ahí se extiende a Neuquén, Río Negro, La Pampa y Chubut. Más de 15.000 familias construyeron su casa con nosotros en estas provincias. La fábrica propia en Plottier permite producir los componentes en taller y coordinar el montaje sin depender de proveedores de otras regiones.",
    climateContext:
      "Los inviernos patagónicos exigen una envolvente que trabaje completa: paredes, techo y piso. Nuestros sistemas incorporan aislación térmica y materiales elegidos para las condiciones de la región, y el sistema Roble Patagónica suma aislación reforzada sobre el estándar. El objetivo es concreto y se mide en la factura de gas: que la casa mantenga la temperatura.",
    coverageText:
      "Trabajamos de forma habitual en Neuquén y Río Negro. Para proyectos en La Pampa, Chubut o localidades más alejadas evaluamos el caso y te confirmamos logística y plazos antes de presupuestar.",
    nearby: ["neuquen", "rio-negro"],
    featuredGroups: ["compacto", "mediano", "grande"],
    faq: [
      {
        q: "¿Las viviendas están preparadas para el clima patagónico?",
        a: "Sí. Aplicamos aislación térmica, materiales y detalles constructivos pensados para los inviernos fríos y los vientos de la región. El sistema Roble Patagónica incorpora aislación de telgopor de 35 mm y densidad 20 kg/m³, superior a la del sistema estándar.",
      },
      {
        q: "¿Hasta dónde llegan dentro de la Patagonia?",
        a: "Nuestra operación habitual es Neuquén y Río Negro. También entregamos en La Pampa y Chubut. Para localidades alejadas evaluamos el proyecto y confirmamos la logística antes de cerrar presupuesto.",
      },
      {
        q: "¿Cuánto tarda una vivienda industrializada en Patagonia?",
        a: "Según el modelo y las condiciones del terreno, el plazo habitual va de 60 a 120 días hábiles desde el inicio de obra. El cronograma se entrega por escrito antes de arrancar.",
      },
    ],
  },
];

/* ────────────────────────────────────────────────────────────────
   Provincias
   ──────────────────────────────────────────────────────────────── */

const PROVINCES: Location[] = [
  {
    slug: "neuquen",
    name: "Neuquén",
    kind: "province",
    tier: "principal",
    indexable: true,
    title: "Casas Prefabricadas en Neuquén",
    description:
      "Casas prefabricadas y viviendas industrializadas en la provincia de Neuquén: capital, Plottier, Centenario y más. Fábrica propia y precio cerrado.",
    h1: "Casas prefabricadas en la provincia de Neuquén",
    intro:
      "Neuquén es nuestra base. La empresa abrió sus primeras oficinas en la capital en 1987 y en 2004 instaló su fábrica en Plottier, a minutos de la ciudad. Eso significa producción propia, control de calidad sin intermediarios y tiempos de entrega que podemos comprometer por escrito.",
    localContext:
      "La provincia combina realidades muy distintas: la conurbación de la capital con Plottier y Centenario, las ciudades cordilleranas del sur y las localidades del norte petrolero. En todos los casos el patrón se repite — hay terreno disponible y la obra tradicional se vuelve lenta y cara. La vivienda industrializada resuelve exactamente eso: plazo definido y presupuesto cerrado.",
    climateContext:
      "El centro y el este neuquino tienen clima árido, con inviernos fríos, heladas frecuentes y viento predominante del oeste; el sur cordillerano suma nieve. La aislación térmica y la resolución de la envolvente cambian bastante entre una zona y otra, y eso se define en la propuesta de cada proyecto.",
    coverageText:
      "Operamos de forma habitual en Neuquén Capital, Plottier y Centenario. También trabajamos proyectos en San Martín de los Andes, Junín de los Andes y Rincón de los Sauces, donde confirmamos logística caso por caso.",
    nearby: [
      "neuquen-capital",
      "plottier",
      "centenario",
      "rio-negro",
      "patagonia",
    ],
    featuredGroups: ["compacto", "mediano", "grande"],
    faq: [
      {
        q: "¿Dónde está la fábrica de Viviendas Roble?",
        a: "En Plottier, Neuquén, desde 2004. Las oficinas comerciales están en Aguado 2345, Neuquén Capital. Fabricar en la provincia nos permite controlar la calidad y sostener los plazos comprometidos.",
      },
      {
        q: "¿Trabajan en toda la provincia de Neuquén?",
        a: "Nuestra zona de operación habitual es la capital y su área de influencia. Para localidades del interior provincial evaluamos el proyecto y te confirmamos cobertura, logística y plazos antes de presupuestar.",
      },
      {
        q: "¿Puedo construir si ya tengo el terreno en Neuquén?",
        a: "Sí, y es el escenario más frecuente. Con los datos del lote —ubicación, dimensiones, accesos y servicios disponibles— evaluamos qué modelo encaja mejor y qué tareas de preparación hacen falta.",
      },
    ],
  },
  {
    slug: "rio-negro",
    name: "Río Negro",
    kind: "province",
    tier: "principal",
    indexable: true,
    title: "Casas Prefabricadas en Río Negro",
    description:
      "Casas prefabricadas y viviendas industrializadas en Río Negro: Cipolletti, General Roca, Allen, Villa Regina y Cinco Saltos. Precio cerrado y entrega planificada.",
    h1: "Casas prefabricadas en la provincia de Río Negro",
    intro:
      "El Alto Valle rionegrino es una de las zonas donde más construimos. Cipolletti, General Roca, Allen, Villa Regina y Cinco Saltos están sobre el mismo corredor productivo, a distancias cortas de nuestra fábrica en Plottier, lo que hace que el traslado y el montaje sean previsibles y que los plazos se cumplan.",
    localContext:
      "El Alto Valle tiene una característica que favorece a la construcción industrializada: mucho loteo nuevo y muchas chacras subdivididas, con terrenos amplios y regulares donde el montaje se resuelve sin complicaciones. A eso se suma una demanda constante de primera vivienda y de casas para familias que ya tienen el lote y no quieren empezar una obra de dos años.",
    climateContext:
      "El valle tiene inviernos fríos con heladas y veranos calurosos y secos, con fuerte amplitud térmica diaria. Una envolvente bien aislada no es un lujo acá: es lo que hace que la casa sea cómoda en julio y en enero sin gastar de más.",
    coverageText:
      "Trabajamos de forma habitual en Cipolletti, General Roca, Allen, Villa Regina y Cinco Saltos. Para Bariloche y la zona andina evaluamos el proyecto caso por caso.",
    nearby: ["cipolletti", "general-roca", "allen", "neuquen", "patagonia"],
    featuredGroups: ["compacto", "mediano", "grande"],
    faq: [
      {
        q: "¿Construyen en el Alto Valle de Río Negro?",
        a: "Sí. Cipolletti, General Roca, Allen, Villa Regina y Cinco Saltos están dentro de nuestra zona de operación habitual. La cercanía con la fábrica de Plottier hace que la logística sea simple.",
      },
      {
        q: "¿Se ocupan de los permisos municipales en Río Negro?",
        a: "Te asesoramos y acompañamos en la gestión de planos y habilitación municipal según la ciudad donde construyas, para que la casa quede en regla.",
      },
      {
        q: "¿Qué modelos funcionan mejor en terrenos de chacra?",
        a: "Los lotes amplios del valle permiten trabajar cómodo con los modelos medianos y grandes, de 2 y 3 dormitorios. Si el objetivo es una vivienda complementaria dentro de la chacra, los modelos compactos resuelven bien.",
      },
    ],
  },
];

/* ────────────────────────────────────────────────────────────────
   Localidades — Neuquén
   ──────────────────────────────────────────────────────────────── */

const CITY_LOCATIONS: Location[] = [
  {
    slug: "neuquen-capital",
    name: "Neuquén Capital",
    kind: "city",
    tier: "principal",
    province: "Neuquén",
    provinceSlug: "neuquen",
    indexable: true,
    title: "Casas Prefabricadas en Neuquén Capital",
    description:
      "Casas prefabricadas y viviendas industrializadas en Neuquén Capital. Oficinas en Aguado 2345. Precio cerrado, entrega planificada y más de 40 años en la ciudad.",
    h1: "Casas prefabricadas en Neuquén Capital",
    intro:
      "Estamos en Neuquén Capital desde 1987 y nuestras oficinas siguen acá, en Aguado 2345. Si tenés un terreno en la ciudad y estás evaluando construir, podés venir a vernos, mirar los modelos y salir con una propuesta concreta para tu lote.",
    localContext:
      "La capital creció fuerte hacia el oeste y la meseta, con loteos nuevos donde muchas familias compraron el terreno primero y dejaron la construcción para después. Ese es exactamente el punto donde la vivienda industrializada tiene más sentido: el lote ya está, lo que falta es una obra con fecha de entrega y un presupuesto que no se mueva.",
    climateContext:
      "Neuquén tiene clima árido, con inviernos fríos y heladas y veranos secos y calurosos. El viento del oeste es constante. La casa tiene que resolver bien la aislación para que el invierno no se vaya en calefacción y el verano sea habitable.",
    coverageText:
      "Neuquén Capital es nuestra zona de operación principal y la fábrica está en Plottier, a minutos de la ciudad. Coordinamos visita a oficinas o presupuesto a distancia, como te resulte más cómodo.",
    nearby: ["plottier", "centenario", "cipolletti", "neuquen"],
    featuredGroups: ["compacto", "mediano", "grande"],
    faq: [
      {
        q: "¿Dónde quedan las oficinas en Neuquén?",
        a: "En Aguado 2345, Neuquén Capital (8300). Atendemos de lunes a viernes de 10 a 18 hs. También podés escribirnos por WhatsApp fuera de ese horario.",
      },
      {
        q: "¿Puedo ver los modelos antes de decidir?",
        a: "Sí. Podés recorrer el catálogo completo y descargar los planos en PDF sin registrarte, y coordinar una charla en las oficinas para ver materiales y terminaciones.",
      },
    ],
  },
  {
    slug: "plottier",
    name: "Plottier",
    kind: "city",
    tier: "principal",
    province: "Neuquén",
    provinceSlug: "neuquen",
    indexable: true,
    title: "Casas Prefabricadas en Plottier",
    description:
      "Casas prefabricadas en Plottier, Neuquén. Nuestra fábrica está en la ciudad desde 2004: producción propia, plazos controlados y precio cerrado.",
    h1: "Casas prefabricadas en Plottier",
    intro:
      "Plottier es donde fabricamos. Desde 2004 nuestra planta está en la ciudad, así que si tu terreno está acá la casa no viaja: se produce a pocos minutos del lote. Es la logística más corta que podemos ofrecer.",
    localContext:
      "Plottier creció con loteos y chacras subdivididas que dejaron terrenos más amplios que los de la capital. Eso abre opciones que en un lote urbano chico no existen: modelos de mayor superficie, galería, o una vivienda principal más un módulo complementario en el mismo terreno.",
    climateContext:
      "Comparte el clima árido del valle: heladas en invierno, veranos secos y calurosos, viento del oeste. La aislación térmica de la envolvente es lo que define el confort real adentro.",
    coverageText:
      "Plottier es zona de operación principal. Tener la fábrica en la ciudad simplifica el traslado, el montaje y cualquier ajuste durante la obra.",
    nearby: ["neuquen-capital", "centenario", "neuquen", "cipolletti"],
    featuredGroups: ["mediano", "grande"],
    faq: [
      {
        q: "¿La fábrica de Viviendas Roble está en Plottier?",
        a: "Sí. Instalamos la planta en Plottier en 2004 y ahí se fabrican los componentes de las viviendas. No tercerizamos la fabricación.",
      },
      {
        q: "¿Puedo construir una segunda vivienda en mi terreno?",
        a: "Es una consulta frecuente en lotes amplios de la zona. Los modelos compactos funcionan bien como vivienda complementaria dentro de un terreno que ya tiene una casa. Lo que corresponde verificar antes es la normativa municipal aplicable a tu lote.",
      },
    ],
  },
  {
    slug: "centenario",
    name: "Centenario",
    kind: "city",
    tier: "principal",
    province: "Neuquén",
    provinceSlug: "neuquen",
    indexable: true,
    title: "Casas Prefabricadas en Centenario, Neuquén",
    description:
      "Casas prefabricadas y viviendas industrializadas en Centenario, Neuquén. Terrenos de chacra, modelos familiares y precio cerrado por escrito.",
    h1: "Casas prefabricadas en Centenario",
    intro:
      "Centenario está a pocos kilómetros de nuestra fábrica y dentro de la zona de trabajo habitual. Si tenés un lote en la ciudad o en la zona de chacras, podemos presupuestar con plazos firmes.",
    localContext:
      "La ciudad conserva su matriz de chacras sobre el río Neuquén y sumó barrios nuevos en los últimos años. Es una combinación cómoda para construir: terrenos regulares, accesos buenos y familias que ya tienen el lote resuelto.",
    climateContext:
      "Mismo patrón que el resto del valle neuquino: heladas invernales, veranos secos y calurosos, amplitud térmica marcada entre el día y la noche. Es un clima donde la aislación se nota todo el año.",
    coverageText:
      "Centenario es zona de operación principal. La cercanía con Plottier hace que el traslado y el montaje sean directos.",
    nearby: ["neuquen-capital", "plottier", "cinco-saltos", "neuquen"],
    featuredGroups: ["mediano", "grande"],
    faq: [
      {
        q: "¿Qué necesito tener listo en el terreno antes de que llegue la casa?",
        a: "Lo definimos en la propuesta según tu lote: accesos para el montaje, nivelación y la situación de los servicios. Te lo indicamos por escrito para que no queden zonas grises sobre qué hace cada parte.",
      },
      {
        q: "¿Trabajan en la zona de chacras de Centenario?",
        a: "Sí. Lo que evaluamos en esos casos es el acceso al lote para el montaje. Con los datos del terreno te confirmamos si hay alguna tarea previa necesaria.",
      },
    ],
  },
  {
    slug: "san-martin-de-los-andes",
    name: "San Martín de los Andes",
    kind: "city",
    tier: "consulta",
    province: "Neuquén",
    provinceSlug: "neuquen",
    indexable: true,
    title: "Casas Prefabricadas en San Martín de los Andes",
    description:
      "Viviendas industrializadas en San Martín de los Andes, Neuquén. Evaluamos cada proyecto de la zona cordillerana: consultanos por cobertura, logística y plazos.",
    h1: "Casas prefabricadas en San Martín de los Andes",
    intro:
      "San Martín de los Andes tiene condiciones propias: zona cordillerana, nieve en invierno y una normativa municipal exigente en materia de estética y construcción. Por eso los proyectos de la zona los evaluamos uno por uno antes de comprometer plazo y precio.",
    localContext:
      "La demanda en la zona suele repartirse entre vivienda permanente y proyectos de menor escala orientados al alquiler turístico. Son escenarios distintos, con superficies y prioridades distintas, y conviene definirlo desde la primera conversación.",
    climateContext:
      "Es una zona de montaña con inviernos rigurosos y nieve. Las condiciones de cubierta, aislación y fundación se resuelven según el proyecto y el lote: no aplicamos una solución estándar sin haber visto el caso.",
    coverageText:
      "San Martín de los Andes está fuera del corredor de operación habitual. Evaluamos proyectos en la zona y te confirmamos logística, plazos y factibilidad antes de avanzar con un presupuesto. Consultanos por tu terreno.",
    nearby: ["junin-de-los-andes", "bariloche", "neuquen", "patagonia"],
    featuredGroups: ["compacto", "mediano"],
    faq: [
      {
        q: "¿Trabajan en San Martín de los Andes?",
        a: "Evaluamos proyectos en la zona. No es parte de nuestro corredor de operación habitual, así que antes de presupuestar confirmamos logística, plazos y factibilidad para tu terreno en particular.",
      },
      {
        q: "¿Las viviendas sirven para zonas con nieve?",
        a: "Las condiciones de cubierta y estructura se definen según el proyecto y el lugar. En zonas cordilleranas lo revisamos caso por caso antes de comprometer una solución, y te lo detallamos por escrito en la propuesta.",
      },
    ],
  },
  {
    slug: "junin-de-los-andes",
    name: "Junín de los Andes",
    kind: "city",
    tier: "consulta",
    province: "Neuquén",
    provinceSlug: "neuquen",
    indexable: true,
    title: "Casas Prefabricadas en Junín de los Andes",
    description:
      "Viviendas industrializadas en Junín de los Andes, Neuquén. Evaluamos proyectos en la zona cordillerana: consultanos por cobertura, logística y plazos.",
    h1: "Casas prefabricadas en Junín de los Andes",
    intro:
      "Junín de los Andes está en la transición entre la estepa y la cordillera, sobre el río Chimehuin. Es una zona donde trabajamos por consulta: evaluamos el proyecto, el terreno y la logística antes de confirmar plazos.",
    localContext:
      "La ciudad tiene lotes más accesibles que los de las localidades turísticas vecinas y una demanda de vivienda permanente sostenida. Para quien ya tiene el terreno, la construcción industrializada evita las demoras y los sobrecostos típicos de una obra larga lejos de los grandes centros de provisión.",
    climateContext:
      "Clima de transición: más seco que el cordillerano puro, con inviernos fríos y viento marcado. La aislación de la envolvente sigue siendo el factor que define el confort y el consumo de calefacción.",
    coverageText:
      "Junín de los Andes está fuera del corredor de operación habitual. Evaluamos el proyecto y te confirmamos cobertura, logística y plazos antes de presupuestar.",
    nearby: [
      "san-martin-de-los-andes",
      "neuquen",
      "patagonia",
      "neuquen-capital",
    ],
    featuredGroups: ["compacto", "mediano"],
    faq: [
      {
        q: "¿Llegan hasta Junín de los Andes?",
        a: "Evaluamos proyectos en la zona. Antes de presupuestar confirmamos la logística de traslado y montaje para tu terreno, y recién ahí comprometemos plazo y precio.",
      },
      {
        q: "¿Cómo pido un presupuesto si estoy lejos de Neuquén?",
        a: "Podés hacerlo por WhatsApp o por el formulario de contacto. Con los datos del terreno y el modelo que te interesa armamos la propuesta a distancia, sin que tengas que viajar.",
      },
    ],
  },
  {
    slug: "rincon-de-los-sauces",
    name: "Rincón de los Sauces",
    kind: "city",
    tier: "consulta",
    province: "Neuquén",
    provinceSlug: "neuquen",
    indexable: true,
    title: "Casas Prefabricadas en Rincón de los Sauces",
    description:
      "Viviendas industrializadas en Rincón de los Sauces, Neuquén. Evaluamos proyectos en el norte neuquino: consultanos por cobertura, logística y plazos.",
    h1: "Casas prefabricadas en Rincón de los Sauces",
    intro:
      "Rincón de los Sauces está en el norte neuquino, a considerable distancia de la capital. Es una zona donde la demanda de vivienda es alta y la construcción tradicional se complica por la logística de materiales. Evaluamos cada proyecto antes de comprometernos.",
    localContext:
      "La actividad petrolera sostiene una demanda de vivienda constante, tanto permanente como para personal. Los modelos compactos y medianos suelen ser los que mejor resuelven ese escenario, por tiempo de ejecución y por previsibilidad de costo.",
    climateContext:
      "Zona árida del norte neuquino, con amplitud térmica muy marcada, inviernos fríos y viento fuerte. Condiciones donde una envolvente bien resuelta cambia de manera directa el costo de mantener la casa climatizada.",
    coverageText:
      "Rincón de los Sauces está fuera del corredor habitual y la distancia impacta en la logística. Evaluamos el proyecto y te confirmamos factibilidad, plazos y condiciones antes de presupuestar.",
    nearby: ["neuquen-capital", "neuquen", "patagonia", "centenario"],
    featuredGroups: ["compacto", "mediano"],
    faq: [
      {
        q: "¿Construyen en Rincón de los Sauces?",
        a: "Evaluamos proyectos en la zona. Por la distancia desde la fábrica, la logística se confirma caso por caso antes de comprometer plazo y precio.",
      },
      {
        q: "¿Sirven para vivienda de personal o alquiler?",
        a: "Los modelos compactos se usan habitualmente con ese fin. Contanos el caso concreto y te indicamos qué modelos encajan y con qué plazos podemos trabajar.",
      },
    ],
  },

  /* ── Río Negro ───────────────────────────────── */
  {
    slug: "cipolletti",
    name: "Cipolletti",
    kind: "city",
    tier: "principal",
    province: "Río Negro",
    provinceSlug: "rio-negro",
    indexable: true,
    title: "Casas Prefabricadas en Cipolletti",
    description:
      "Casas prefabricadas y viviendas industrializadas en Cipolletti, Río Negro. Obras entregadas en la ciudad, precio cerrado y entrega planificada.",
    h1: "Casas prefabricadas en Cipolletti",
    intro:
      "Cipolletti es una de las ciudades donde más construimos fuera de Neuquén. Está del otro lado del río, a minutos de la capital y muy cerca de nuestra fábrica de Plottier, lo que hace que el traslado y el montaje sean directos.",
    localContext:
      "La ciudad combina el casco urbano consolidado con una franja de chacras que se fue loteando. Esos lotes de chacra, más amplios y regulares, son ideales para trabajar con modelos de 2 y 3 dormitorios y para sumar galería. Hay obras nuestras entregadas en la ciudad.",
    climateContext:
      "Clima del Alto Valle: heladas en invierno, veranos calurosos y secos, fuerte amplitud térmica. Una casa bien aislada acá se nota en el confort y en la boleta de gas.",
    coverageText:
      "Cipolletti es zona de operación principal. Por cercanía con Plottier, la logística es simple y los plazos se sostienen.",
    nearby: ["neuquen-capital", "cinco-saltos", "allen", "rio-negro"],
    featuredGroups: ["mediano", "grande"],
    faq: [
      {
        q: "¿Ya entregaron viviendas en Cipolletti?",
        a: "Sí. Cipolletti es una de las ciudades donde trabajamos de forma habitual y hay obras entregadas que podés ver en la galería de proyectos.",
      },
      {
        q: "¿Qué pasa con los permisos municipales en Cipolletti?",
        a: "Te asesoramos y acompañamos en la gestión de planos y habilitación municipal para que la casa quede en regla según la normativa local.",
      },
    ],
  },
  {
    slug: "general-roca",
    name: "General Roca",
    kind: "city",
    tier: "principal",
    province: "Río Negro",
    provinceSlug: "rio-negro",
    indexable: true,
    title: "Casas Prefabricadas en General Roca, Río Negro",
    description:
      "Casas industrializadas y prefabricadas en General Roca, Río Negro. Obras entregadas en la ciudad, modelos familiares y precio cerrado por escrito.",
    h1: "Casas prefabricadas en General Roca",
    intro:
      "General Roca es uno de los centros urbanos más importantes de Río Negro y está dentro de nuestra zona de trabajo habitual en el Alto Valle. Hay obras nuestras entregadas en la ciudad.",
    localContext:
      "Roca tiene una demanda sostenida de vivienda familiar y una periferia de chacras donde los terrenos son amplios. Para quien ya tiene el lote, el atractivo de la construcción industrializada es concreto: una obra de meses en lugar de años, con el precio cerrado antes de empezar.",
    climateContext:
      "Inviernos fríos con heladas y veranos calurosos y secos, típicos del valle. El diferencial de una casa bien aislada se percibe en las dos estaciones.",
    coverageText:
      "General Roca es zona de operación principal. Trabajamos la ciudad y su área de influencia dentro del Alto Valle.",
    nearby: ["allen", "villa-regina", "cipolletti", "rio-negro"],
    featuredGroups: ["mediano", "grande"],
    faq: [
      {
        q: "¿Qué modelos son los más elegidos para familia en Roca?",
        a: "Los de 2 y 3 dormitorios son los más consultados. La elección depende de la superficie del lote y de cuánto espacio necesites ahora y a futuro: podemos ayudarte a definirlo con los datos de tu terreno.",
      },
      {
        q: "¿Cuánto tarda la obra en General Roca?",
        a: "El plazo habitual va de 60 a 120 días hábiles desde el inicio de obra, según el modelo y las condiciones del terreno. El cronograma se entrega por escrito antes de arrancar.",
      },
    ],
  },
  {
    slug: "allen",
    name: "Allen",
    kind: "city",
    tier: "principal",
    province: "Río Negro",
    provinceSlug: "rio-negro",
    indexable: true,
    title: "Casas Prefabricadas en Allen, Río Negro",
    description:
      "Casas prefabricadas y viviendas industrializadas en Allen, Río Negro. Zona de operación habitual en el Alto Valle. Precio cerrado y plazos por escrito.",
    h1: "Casas prefabricadas en Allen",
    intro:
      "Allen está sobre el corredor del Alto Valle, entre Cipolletti y General Roca, dentro de nuestra zona de trabajo habitual. Si tenés terreno en la ciudad o en la zona de chacras, podemos presupuestar con plazos firmes.",
    localContext:
      "La ciudad mantiene su perfil frutícola y una buena disponibilidad de terrenos, tanto en el ejido urbano como en la periferia de chacras. Es un escenario cómodo para el montaje: lotes regulares y accesos sin complicaciones.",
    climateContext:
      "Clima de valle, con heladas invernales y veranos secos y calurosos. La aislación de la envolvente es lo que sostiene la temperatura interior sin disparar el consumo.",
    coverageText:
      "Allen es zona de operación principal, sobre el mismo corredor que Cipolletti y General Roca.",
    nearby: ["general-roca", "cipolletti", "villa-regina", "rio-negro"],
    featuredGroups: ["compacto", "mediano"],
    faq: [
      {
        q: "¿Trabajan en Allen?",
        a: "Sí. Allen está dentro de nuestra zona de operación habitual en el Alto Valle rionegrino, junto con Cipolletti, General Roca, Villa Regina y Cinco Saltos.",
      },
      {
        q: "¿Puedo adaptar el modelo a mi terreno?",
        a: "Sí. Los modelos son una base de partida: adaptamos distribución, terminaciones y materiales según el lote, tu gusto y tu presupuesto.",
      },
    ],
  },
  {
    slug: "villa-regina",
    name: "Villa Regina",
    kind: "city",
    tier: "principal",
    province: "Río Negro",
    provinceSlug: "rio-negro",
    indexable: true,
    title: "Casas Prefabricadas en Villa Regina",
    description:
      "Casas prefabricadas y viviendas industrializadas en Villa Regina, Río Negro. Zona de operación habitual en el Alto Valle. Presupuesto sin cargo.",
    h1: "Casas prefabricadas en Villa Regina",
    intro:
      "Villa Regina está en el extremo este del Alto Valle y forma parte de nuestra zona de trabajo habitual. La distancia desde la fábrica es mayor que la de Cipolletti o Roca, pero el corredor de la ruta hace que la logística siga siendo previsible.",
    localContext:
      "Regina conserva una fuerte matriz de chacras productivas y un casco urbano compacto. Es habitual que las familias resuelvan primero el terreno —muchas veces dentro de la chacra familiar— y después busquen construir rápido y con costo cerrado.",
    climateContext:
      "Las condiciones del este del valle son algo más rigurosas en invierno que las del oeste, con heladas frecuentes. La aislación térmica de la envolvente es el punto a cuidar.",
    coverageText:
      "Villa Regina es zona de operación habitual dentro del Alto Valle. Confirmamos los plazos de traslado y montaje en la propuesta.",
    nearby: ["general-roca", "allen", "rio-negro", "patagonia"],
    featuredGroups: ["mediano", "grande"],
    faq: [
      {
        q: "¿Construyen en Villa Regina y alrededores?",
        a: "Sí, Villa Regina está dentro de nuestra zona de trabajo en el Alto Valle. Para parajes o chacras alejadas verificamos el acceso al lote antes de confirmar el montaje.",
      },
      {
        q: "¿El presupuesto incluye el traslado hasta Villa Regina?",
        a: "La propuesta detalla por escrito qué incluye para tu caso concreto, incluida la logística. Es parte de lo que definimos antes de que firmes.",
      },
    ],
  },
  {
    slug: "cinco-saltos",
    name: "Cinco Saltos",
    kind: "city",
    tier: "principal",
    province: "Río Negro",
    provinceSlug: "rio-negro",
    indexable: true,
    title: "Casas Prefabricadas en Cinco Saltos",
    description:
      "Casas prefabricadas y viviendas industrializadas en Cinco Saltos, Río Negro. Zona de operación habitual, cerca de nuestra fábrica. Precio cerrado.",
    h1: "Casas prefabricadas en Cinco Saltos",
    intro:
      "Cinco Saltos está en el norte del Alto Valle rionegrino, muy cerca de Centenario y de nuestra fábrica. Es una de las localidades donde la logística nos resulta más simple.",
    localContext:
      "La ciudad tiene terrenos disponibles a valores más accesibles que los de las localidades vecinas más grandes, lo que la convierte en una opción frecuente para primera vivienda. Ese perfil se cruza bien con los modelos compactos y medianos.",
    climateContext:
      "Comparte el clima del valle: heladas invernales, veranos secos y calurosos, amplitud térmica marcada. Una envolvente bien resuelta hace la diferencia todo el año.",
    coverageText:
      "Cinco Saltos es zona de operación habitual. La cercanía con Centenario y Plottier simplifica el traslado y el montaje.",
    nearby: ["centenario", "cipolletti", "neuquen-capital", "rio-negro"],
    featuredGroups: ["compacto", "mediano"],
    faq: [
      {
        q: "¿Es buena opción para una primera vivienda?",
        a: "Es uno de los escenarios más frecuentes en la zona. Los modelos compactos y medianos permiten empezar con una casa completa y bien resuelta, con precio cerrado y sin una obra que se estire durante años.",
      },
      {
        q: "¿Puedo ampliar la casa más adelante?",
        a: "Es una consulta habitual. Conviene plantearlo desde el proyecto inicial para dejar la vivienda preparada. Contanos cómo imaginás el crecimiento y lo contemplamos en la propuesta.",
      },
    ],
  },
  {
    slug: "bariloche",
    name: "Bariloche",
    kind: "city",
    tier: "consulta",
    province: "Río Negro",
    provinceSlug: "rio-negro",
    indexable: true,
    title: "Casas Prefabricadas en Bariloche",
    description:
      "Viviendas industrializadas en Bariloche, Río Negro. Evaluamos cada proyecto de la zona andina: consultanos por cobertura, logística y factibilidad.",
    h1: "Casas prefabricadas en Bariloche",
    intro:
      "Bariloche es la ciudad más grande de la zona andina rionegrina y, al mismo tiempo, el punto más alejado de nuestra planta. Tomamos proyectos acá, pero uno por uno: primero miramos el lote y la logística, después hablamos de fechas. Preferimos decir que no antes que incumplir un plazo.",
    localContext:
      "El crecimiento residencial se concentra en los barrios del este y del oeste, con lotes que muchas veces tienen pendiente y accesos angostos. Eso pesa tanto como el metraje a la hora de decidir qué modelo es viable, y es lo primero que revisamos cuando nos escribe alguien de la ciudad.",
    climateContext:
      "Acá el factor que manda es la nieve, y después la pendiente del lote. Ninguna de las dos cosas se resuelve con una receta: la cubierta, el espesor de aislación y el tipo de fundación salen del análisis del terreno concreto, no de una planilla.",
    coverageText:
      "La distancia desde nuestra planta en Plottier es el límite real: cruzar la línea sur con una vivienda completa no es lo mismo que llevarla a Cipolletti. Por eso antes de hablar de plazo o de precio revisamos el acceso al lote, el traslado y el calendario posible. Escribinos con la ubicación del terreno y te decimos con franqueza si podemos tomarlo.",
    nearby: [
      "san-martin-de-los-andes",
      "rio-negro",
      "patagonia",
      "junin-de-los-andes",
    ],
    featuredGroups: ["compacto", "mediano"],
    faq: [
      {
        q: "¿Toman obras en Bariloche?",
        a: "Depende del caso. Nuestra operación diaria está en el Alto Valle y la capital neuquina, y Bariloche queda muy por fuera de ese radio. Lo que hacemos es mirar cada proyecto: ubicación del lote, acceso, calendario. Si el traslado y el montaje cierran, avanzamos; si no, te lo decimos de entrada en vez de comprometer una fecha que no vamos a cumplir.",
      },
      {
        q: "¿Sus viviendas aguantan la nieve de la cordillera?",
        a: "La carga de nieve cambia la cubierta y la estructura, y eso se calcula para cada proyecto. No tenemos una versión 'de montaña' de catálogo que sirva para cualquier lote andino. Si avanzamos, la solución concreta queda escrita en la propuesta antes de que firmes.",
      },
      {
        q: "¿El Código Urbano de Bariloche condiciona el diseño?",
        a: "La normativa municipal y las exigencias estéticas de la zona son un dato del proyecto, no un detalle posterior. Conviene tenerlas sobre la mesa desde la primera charla para no diseñar algo que después no se pueda aprobar.",
      },
    ],
  },
];

/* ────────────────────────────────────────────────────────────────
   API pública
   ──────────────────────────────────────────────────────────────── */

export const locations: Location[] = [
  ...REGIONS,
  ...PROVINCES,
  ...CITY_LOCATIONS,
];

/** Solo las landings que se publican e indexan. */
export const indexableLocations: Location[] = locations.filter(
  (l) => l.indexable
);

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getNearby(location: Location): Location[] {
  return location.nearby
    .map((slug) => getLocation(slug))
    .filter((l): l is Location => l !== undefined && l.indexable);
}

export const provinces: Location[] = PROVINCES;
export const cityLocations: Location[] = CITY_LOCATIONS;

export function citiesOfProvince(provinceSlug: string): Location[] {
  return CITY_LOCATIONS.filter(
    (c) => c.provinceSlug === provinceSlug && c.indexable
  );
}

/** Ruta canónica de una landing geográfica. */
export function locationPath(location: Location): string {
  return `/casas-prefabricadas/${location.slug}`;
}


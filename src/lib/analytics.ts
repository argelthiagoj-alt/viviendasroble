/**
 * Capa de analytics de Viviendas Roble.
 *
 * El sitio no habla con GA4 directamente: empuja eventos de negocio al
 * dataLayer y Google Tag Manager decide qué hacer con ellos. Por eso acá
 * no hay ningún ID de Google ni referencias a gtag.
 *
 * Regla de privacidad: estos eventos describen acciones y contenido del
 * sitio. Nunca viajan nombre, email, teléfono, dirección ni el contenido
 * del formulario. Los helpers de abajo sólo aceptan datos del catálogo.
 */

type DataLayerEntry = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
  }
}

/** Se inlinea en build: si no es "true", el bloque de debug es código muerto. */
const DEBUG = process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true";

/* ── Vocabulario ─────────────────────────────────── */

export type LeadType = "whatsapp" | "model_whatsapp" | "form" | "phone";

/**
 * Dónde ocurrió la interacción. Unión cerrada a propósito: evita que el
 * mismo lugar termine escrito de tres formas distintas en los informes.
 */
export type CtaLocation =
  | "hero"
  | "navbar"
  | "footer"
  | "floating_whatsapp"
  | "contact_section"
  | "contact_page"
  | "coverage"
  | "final_cta"
  | "home_models"
  | "model_card"
  | "model_page"
  | "models_index"
  | "floorplans"
  | "landing_cta"
  | "location_page"
  | "gallery"
  | "about"
  | "system_page"
  | "not_found";

/** Subconjunto del catálogo que se puede reportar. No hay datos de persona. */
export type TrackedModel = {
  name: string;
  slug: string;
  area: number;
  bedroomsMin: number;
  bedroomsMax: number;
};

type ModelParams = {
  model_name: string;
  model_slug: string;
  model_area_m2: number;
  /** Sólo cuando el modelo tiene una cifra exacta, no un rango. */
  bedrooms?: number;
};

type LeadParams = {
  lead_type: LeadType;
  cta_location: CtaLocation;
} & Partial<ModelParams>;

type QuoteCtaParams = {
  cta_location: CtaLocation;
};

type FloorplanParams = ModelParams & {
  file_name: string;
};

/** Mapa evento → parámetros. Es lo que da type-safety en los call sites. */
type EventMap = {
  generate_lead: LeadParams;
  model_view: ModelParams;
  floorplan_download: FloorplanParams;
  quote_cta_click: QuoteCtaParams;
};

export type AnalyticsEventName = keyof EventMap;

/* ── Emisión ─────────────────────────────────────── */

function push(entry: DataLayerEntry): void {
  // SSR y prerender: no hay window, se ignora en silencio.
  if (typeof window === "undefined") return;

  // Si GTM todavía no cargó, la cola queda esperando y él la procesa al
  // inicializarse. Si el contenedor no existe, esto no rompe nada.
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(entry);

  if (DEBUG) {
    console.info("[analytics]", entry);
  }
}

/**
 * Emite un evento al dataLayer.
 *
 * `page_path` se agrega acá y no en cada llamada, para que siempre sea
 * consistente. Se usa sólo el pathname: la query podría arrastrar datos
 * que no queremos en Analytics.
 */
export function trackEvent<N extends AnalyticsEventName>(
  name: N,
  params: EventMap[N]
): void {
  const clean: DataLayerEntry = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) clean[key] = value;
  }

  push({
    event: name,
    page_path:
      typeof window === "undefined" ? undefined : window.location.pathname,
    ...clean,
  });
}

/* ── Helpers por intención ───────────────────────── */

function modelParams(model: TrackedModel): ModelParams {
  return {
    model_name: model.name,
    model_slug: model.slug,
    model_area_m2: model.area,
    // Un rango ("1 a 2 dormitorios") no se puede reducir a un número sin
    // inventar el dato, así que en ese caso no se envía.
    ...(model.bedroomsMin === model.bedroomsMax
      ? { bedrooms: model.bedroomsMin }
      : {}),
  };
}

/**
 * Clic en cualquier acceso a WhatsApp.
 * Con `model` el lead se marca como `model_whatsapp` y lleva el catálogo.
 */
export function trackWhatsAppClick(args: {
  location: CtaLocation;
  model?: TrackedModel;
}): void {
  trackEvent("generate_lead", {
    lead_type: args.model ? "model_whatsapp" : "whatsapp",
    cta_location: args.location,
    ...(args.model ? modelParams(args.model) : {}),
  });
}

/** Clic en un enlace `tel:`. El número nunca se envía. */
export function trackPhoneClick(args: { location: CtaLocation }): void {
  trackEvent("generate_lead", {
    lead_type: "phone",
    cta_location: args.location,
  });
}

/** Sólo tras una respuesta correcta del backend. Nunca en el submit. */
export function trackFormSubmitSuccess(args: {
  location: CtaLocation;
}): void {
  trackEvent("generate_lead", {
    lead_type: "form",
    cta_location: args.location,
  });
}

/** Vista de la ficha de un modelo. Una vez por navegación. */
export function trackModelView(model: TrackedModel): void {
  trackEvent("model_view", modelParams(model));
}

/** Descarga o apertura del PDF del plano. */
export function trackFloorplanDownload(args: {
  model: TrackedModel;
  fileName: string;
}): void {
  trackEvent("floorplan_download", {
    ...modelParams(args.model),
    file_name: args.fileName,
  });
}

/**
 * CTA de presupuesto que todavía NO es un lead (por ejemplo, ir a la
 * página de contacto). Los CTA que abren WhatsApp no pasan por acá:
 * emiten `generate_lead` y nada más, para no contar dos veces el clic.
 */
export function trackQuoteCtaClick(args: { location: CtaLocation }): void {
  trackEvent("quote_cta_click", { cta_location: args.location });
}

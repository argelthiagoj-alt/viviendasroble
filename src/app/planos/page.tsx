import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import {
  modelsByArea,
  models,
  AREA_MIN,
  AREA_MAX,
  WHATSAPP_CUSTOM,
} from "@/lib/models";
import { WA_PRESUPUESTO } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  type Crumb,
  type FaqItem,
} from "@/lib/seo/schema";

import JsonLd from "@/components/seo/JsonLd";
import {
  FloorplanLink,
  WhatsAppLink,
} from "@/components/analytics/TrackedLinks";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqBlock from "@/components/seo/FaqBlock";
import LandingCTA from "@/components/seo/LandingCTA";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

/* ── Metadata ───────────────────────────────────── */

const crumbs: Crumb[] = [{ name: "Planos", path: "/planos" }];

export const metadata: Metadata = buildMetadata({
  title: "Planos de Casas Prefabricadas en PDF",
  description: `Descargá gratis los planos de casas prefabricadas de Viviendas Roble: ${models.length} planos en PDF de ${AREA_MIN} a ${AREA_MAX} m², sin registro y sin compromiso.`,
  path: "/planos",
});

const faq: FaqItem[] = [
  {
    q: "¿Hay que registrarse para descargar los planos?",
    a: "No. Los planos se descargan directo en PDF, sin formulario, sin dejar el mail y sin compromiso.",
  },
  {
    q: "¿Qué muestra cada plano?",
    a: "La distribución de los ambientes y las dimensiones del modelo. Si querés ver las características completas, la ficha de cada modelo las detalla.",
  },
  {
    q: "¿El plano es el proyecto definitivo?",
    a: "No: es la base de partida. Cuando avanzamos con tu proyecto, el plano se adapta a tu terreno y a los cambios de distribución que definamos juntos.",
  },
  {
    q: "¿Los planos sirven para presentar en el municipio?",
    a: "La documentación para la gestión municipal se prepara como parte del proyecto. Te asesoramos y acompañamos en la gestión de planos y habilitación según la ciudad donde construyas.",
  },
];

/* ── Page ───────────────────────────────────────── */

export default function PlanosPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faq)]} />

      <main>
        {/* ── Hero ──────────────────────────────── */}
        <section className="bg-roble-dark text-white pt-28 pb-16 sm:pt-32 sm:pb-20 px-5 sm:px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={crumbs} className="mb-7 sm:mb-9" />
            <p className="text-roble-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-5">
              Descarga directa · Sin registro
            </p>
            <h1 className="font-serif text-[32px] sm:text-5xl md:text-[56px] font-semibold leading-[1.08] mb-5">
              Planos de casas prefabricadas en PDF
            </h1>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-8">
              Los {models.length} planos de nuestros modelos, de {AREA_MIN} a{" "}
              {AREA_MAX} m². Descargalos, miralos con calma y compará
              distribuciones. Sin dejar tus datos y sin que te llamemos después.
            </p>
            <Link
              href="/modelos"
              className="inline-flex items-center gap-2 border border-white/25 text-white font-medium px-7 py-3.5 rounded-xl hover:bg-white/8 transition-colors duration-200 text-sm"
            >
              Ver las fichas completas de los modelos
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* ── Listado de planos ─────────────────── */}
        <section
          className="py-16 sm:py-20 px-5 sm:px-4 bg-roble-cream"
          aria-labelledby="catalogo-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="catalogo-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-roble-text leading-[1.15] mb-3"
            >
              Todos los planos disponibles
            </h2>
            <p className="text-roble-muted text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              Ordenados de menor a mayor superficie. En las medidas más pedidas
              hay más de una variante de distribución para el mismo metraje.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {modelsByArea.map((model, i) => (
                <li key={model.slug} id={model.id}>
                  <AnimateOnScroll delay={Math.min(i, 6) * 60} className="h-full">
                    <article className="flex flex-col h-full bg-white border border-roble-beige rounded-2xl overflow-hidden">
                      <Link
                        href={`/modelos/${model.slug}`}
                        className="relative aspect-[4/3] bg-roble-cream block group"
                      >
                        {model.previewImage ? (
                          <Image
                            src={model.previewImage}
                            alt={`Plano en PDF del modelo ${model.name} — casa prefabricada de ${model.areaLabel} con ${model.bedroomsLabel.toLowerCase()}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-roble-muted">
                            Plano en PDF
                          </span>
                        )}
                        <span className="absolute bottom-3 right-4 font-serif text-roble-text/80 text-lg font-semibold">
                          {model.areaLabel}
                        </span>
                      </Link>

                      <div className="p-5 flex flex-col flex-1 gap-4">
                        <div className="flex-1">
                          <p className="text-[11px] tracking-[0.15em] text-roble-muted uppercase font-medium mb-1.5">
                            {model.bedroomsLabel} · {model.bathroomsLabel}
                          </p>
                          <h3 className="font-serif text-lg font-semibold text-roble-text leading-snug">
                            <Link
                              href={`/modelos/${model.slug}`}
                              className="hover:text-roble-gold transition-colors duration-200"
                            >
                              {model.name}
                            </Link>
                          </h3>
                        </div>

                        <FloorplanLink
                          href={model.pdfHref}
                          download={model.downloadName}
                          model={model}
                          fileName={model.downloadName}
                          className="flex items-center justify-center gap-2 bg-roble-dark text-white text-sm font-medium py-3 px-5 rounded-xl transition-colors duration-200 hover:bg-roble-dark-hover"
                        >
                          <DownloadIcon />
                          Descargar plano
                        </FloorplanLink>
                      </div>
                    </article>
                  </AnimateOnScroll>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Diseño a medida ───────────────────── */}
        <section className="py-16 px-5 sm:px-4 bg-white border-t border-roble-beige">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-5">
              Diseño a medida
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-roble-text mb-5 leading-snug">
              ¿Querés algo diferente?
            </h2>
            <p className="text-roble-muted text-base sm:text-lg leading-relaxed mb-9">
              Todos los modelos son personalizables. También hacemos proyectos
              completamente a medida según tu terreno, tus necesidades y tu
              presupuesto.
            </p>
            <WhatsAppLink
              href={WHATSAPP_CUSTOM}
              location="floorplans"
              className="inline-flex items-center gap-3 bg-roble-dark text-white font-medium px-8 py-4 rounded-xl hover:bg-roble-dark-hover transition-colors duration-200 text-sm"
            >
              Hablemos por WhatsApp
              <span aria-hidden="true">→</span>
            </WhatsAppLink>
          </div>
        </section>

        <FaqBlock items={faq} heading="Preguntas sobre los planos" />

        <LandingCTA
          heading="¿Ya elegiste un plano?"
          body="Contanos cuál te interesa y dónde está tu terreno. Te armamos la propuesta con tiempos y precio cerrado, sin cargo."
          whatsappHref={WA_PRESUPUESTO}
          secondary={{ label: "Ver fichas de modelos", href: "/modelos" }}
          ctaLocation="floorplans"
        />
      </main>
    </>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

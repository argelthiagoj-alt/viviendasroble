import type { Metadata } from "next";
import { models, WHATSAPP_CUSTOM } from "@/lib/models";
import ModelCard from "@/components/ui/ModelCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

/* ── Metadata ───────────────────────────────────── */

export const metadata: Metadata = {
  title: "Planos y Modelos de Casas Prefabricadas",
  description:
    "Descargá los planos de nuestros 6 modelos de casas prefabricadas en Neuquén, desde 15 m² hasta 36 m². Sin registro. Aptos PROCREAR. Todos personalizables.",
  alternates: {
    canonical: "/planos",
  },
  openGraph: {
    title: "Planos y Modelos de Casas Prefabricadas | Viviendas Roble",
    description:
      "Catálogo completo de vivienda industrializada. Descargá los planos en PDF sin registro y consultá por WhatsApp.",
    type: "website",
    locale: "es_AR",
  },
  keywords: [
    "plano casa prefabricada Neuquén",
    "modelo casa modular 2 habitaciones",
    "plano casa steel frame Patagonia",
    "plano vivienda industrializada",
    "descargar plano casa prefabricada",
    "modelo casa PROCREAR Neuquén",
    "plano casa 25m2",
    "plano casa 36m2",
  ],
};

/* ── JSON-LD ────────────────────────────────────── */

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Modelos de Casas Prefabricadas — Viviendas Roble",
  description:
    "Catálogo de modelos de vivienda industrializada disponibles en Viviendas Roble. Desde 15 m² hasta 36 m². Personalizables y aptos PROCREAR.",
  numberOfItems: models.length,
  itemListElement: models.map((m, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${m.name} — ${m.areaLabel}`,
    description: m.description,
    url: `https://viviendasroble.com/planos#${m.id}`,
  })),
};

/* ── Page ────────────────────────────────────────── */

export default function PlanosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        {/* ── Hero ──────────────────────────────── */}
        <section className="bg-roble-dark text-white py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-roble-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-6">
              Viviendas Roble · Neuquén
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.1] mb-6">
              Planos y modelos de casas prefabricadas
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto">
              Descargá los planos de nuestros modelos en PDF, sin registro y sin
              compromiso. Todos los diseños son personalizables y aptos para
              financiación PROCREAR.
            </p>
          </div>
        </section>

        {/* ── Catalog ──────────────────────────── */}
        <section
          className="py-20 px-4 bg-roble-cream"
          aria-labelledby="catalogo-heading"
        >
          <div className="max-w-6xl mx-auto">
            {/* Hidden H2 with keyword-rich text for SEO */}
            <h2 id="catalogo-heading" className="sr-only">
              Catálogo completo: plano casa prefabricada Neuquén, modelo casa
              modular 2 habitaciones, plano casa steel frame Patagonia
            </h2>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
              aria-label="Catálogo de modelos de vivienda"
            >
              {models.map((model, i) => (
                <AnimateOnScroll
                  key={model.id}
                  delay={i * 80}
                  className="h-full"
                >
                  {/* id anchor for JSON-LD URLs + direct linking */}
                  <div id={model.id} role="listitem" className="h-full">
                    <ModelCard model={model} />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Custom project CTA ────────────────── */}
        <section className="py-20 px-4 bg-white border-t border-roble-beige">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-5">
              Diseño a medida
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-roble-text mb-5 leading-snug">
              ¿Querés algo diferente?
            </h2>
            <p className="text-roble-muted text-lg leading-relaxed mb-10">
              Todos nuestros modelos son personalizables. También hacemos
              proyectos completamente a medida según tu terreno, tus necesidades
              y tu presupuesto.
            </p>
            <a
              href={WHATSAPP_CUSTOM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-roble-dark text-white font-medium px-8 py-4 rounded-xl hover:bg-roble-dark-hover transition-colors duration-200 text-sm"
            >
              Hablemos por WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

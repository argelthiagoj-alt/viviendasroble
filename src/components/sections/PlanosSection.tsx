import Link from "next/link";
import { models, WHATSAPP_CUSTOM } from "@/lib/models";

const featured = models.filter((m) => m.featured);
import ModelCard from "@/components/ui/ModelCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function PlanosSection() {
  return (
    <section
      id="modelos"
      aria-labelledby="modelos-heading"
      className="py-14 sm:py-24 px-5 sm:px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Header ─────────────────────────────── */}
        <AnimateOnScroll className="mb-10 sm:mb-16 text-center max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Modelos de casas
          </p>
          <h2
            id="modelos-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15] mb-5"
          >
            Modelos de casas para familias, parejas y terrenos propios
          </h2>
          <p className="text-roble-muted text-base sm:text-lg leading-relaxed">
            Casas industrializadas de distintos tamaños, desde la primera
            vivienda compacta hasta la casa familiar más amplia. Cada modelo se
            adapta a tu terreno y se entrega con precio cerrado. Mirá la
            distribución y descargá el plano en PDF.
          </p>
        </AnimateOnScroll>

        {/* ── Mobile: carrusel horizontal ──────── */}
        <div
          className="sm:hidden -mx-5 px-5 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
          role="list"
          aria-label="Modelos de vivienda — desliza horizontalmente"
        >
          {featured.map((model) => (
            <div
              key={model.id}
              role="listitem"
              className="snap-start shrink-0 w-[78%] xs:w-[72%]"
            >
              <ModelCard model={model} />
            </div>
          ))}
        </div>

        {/* ── Desktop: grid ───────────────────── */}
        <div
          className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Modelos de vivienda prefabricada disponibles"
        >
          {featured.map((model, i) => (
            <AnimateOnScroll key={model.id} delay={i * 90} className="h-full">
              <div role="listitem" className="h-full">
                <ModelCard model={model} />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* ── Footer CTA ─────────────────────────── */}
        <AnimateOnScroll delay={500} className="mt-10 sm:mt-16 text-center">
          <p className="text-roble-muted text-base mb-6">
            Tenemos más modelos de casas y variantes en el catálogo completo,
            incluyendo casas familiares más amplias y opciones para terrenos
            específicos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/planos"
              className="inline-flex items-center gap-2 bg-roble-dark text-white font-medium px-8 py-4 rounded-xl hover:bg-roble-dark-hover transition-colors duration-200 text-sm"
            >
              Ver más planos disponibles
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={WHATSAPP_CUSTOM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-roble-dark text-roble-dark font-medium px-8 py-4 rounded-xl hover:bg-roble-cream transition-colors duration-200 text-sm"
            >
              Consultá por un diseño a medida
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

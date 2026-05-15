import { models, WHATSAPP_CUSTOM } from "@/lib/models";
import ModelCard from "@/components/ui/ModelCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function PlanosSection() {
  return (
    <section
      id="modelos"
      aria-labelledby="modelos-heading"
      className="py-24 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Header ─────────────────────────────── */}
        <AnimateOnScroll className="mb-16 text-center max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Catálogo de modelos
          </p>
          <h2
            id="modelos-heading"
            className="font-serif text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15] mb-5"
          >
            Encontrá el modelo que se adapta a tu proyecto
          </h2>
          <p className="text-roble-muted text-lg leading-relaxed">
            Seis líneas de vivienda industrializada, desde el módulo más
            compacto hasta la vivienda familiar completa. Todos los planos son
            descargables en PDF y 100&nbsp;% personalizables.
          </p>
        </AnimateOnScroll>

        {/* ── Grid ─────────────────────────────── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Modelos de vivienda prefabricada disponibles"
        >
          {models.map((model, i) => (
            <AnimateOnScroll key={model.id} delay={i * 90} className="h-full">
              <div role="listitem" className="h-full">
                <ModelCard model={model} />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* ── Footer CTA ─────────────────────────── */}
        <AnimateOnScroll delay={500} className="mt-16 text-center">
          <p className="text-roble-muted text-base mb-6">
            ¿Ningún modelo se ajusta exactamente a lo que buscás?
          </p>
          <a
            href={WHATSAPP_CUSTOM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-roble-dark text-roble-dark font-medium px-8 py-4 rounded-xl hover:bg-roble-cream transition-colors duration-200 text-sm"
          >
            Consultá por un diseño personalizado
            <span aria-hidden="true">→</span>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

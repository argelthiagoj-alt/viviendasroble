import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const rows = [
  { tradicional: "Presupuesto variable", roble: "Precio cerrado" },
  { tradicional: "Plazos inciertos", roble: "Entrega planificada" },
  { tradicional: "Difícil seguimiento", roble: "Proceso por etapas" },
  { tradicional: "Más desperdicio", roble: "Construcción eficiente" },
  { tradicional: "Más estrés", roble: "Acompañamiento claro" },
];

export default function ComparisonSection() {
  return (
    <section className="py-14 sm:py-24 px-5 sm:px-4 bg-white" aria-labelledby="comparativa-heading">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Comparativa honesta
          </p>
          <h2
            id="comparativa-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15] mb-5"
          >
            Obra tradicional vs Viviendas Roble
          </h2>
          <p className="text-roble-muted text-base sm:text-lg leading-relaxed">
            Por qué nuestro sistema reduce incertidumbre y te da control real
            sobre tu proyecto.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Columna tradicional */}
            <div className="rounded-2xl border border-roble-beige bg-roble-cream/60 p-6 md:p-8">
              <p className="text-[11px] tracking-[0.18em] text-roble-muted uppercase font-semibold mb-5">
                Obra tradicional
              </p>
              <ul className="space-y-3.5">
                {rows.map((r) => (
                  <li key={r.tradicional} className="flex items-start gap-3 text-roble-muted">
                    <span
                      className="mt-1 inline-flex w-5 h-5 rounded-full bg-roble-beige items-center justify-center text-roble-muted text-xs"
                      aria-hidden="true"
                    >
                      ×
                    </span>
                    <span className="text-sm md:text-base leading-relaxed">{r.tradicional}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna Roble */}
            <div className="rounded-2xl bg-roble-dark text-white p-6 md:p-8 shadow-[0_20px_60px_rgba(28,43,43,0.18)] relative overflow-hidden">
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-roble-gold/15 blur-2xl"
                aria-hidden="true"
              />
              <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-5">
                Viviendas Roble
              </p>
              <ul className="space-y-3.5 relative">
                {rows.map((r) => (
                  <li key={r.roble} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex w-5 h-5 rounded-full bg-roble-gold text-roble-dark items-center justify-center text-xs font-bold shrink-0"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-sm md:text-base leading-relaxed text-white/90">
                      {r.roble}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

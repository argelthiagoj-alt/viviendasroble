import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const diffs = [
  {
    title: "Velocidad real",
    desc: "En obra tradicional, 12 a 24 meses. Con construcción industrializada, entre 60 y 120 días hábiles según el modelo.",
  },
  {
    title: "Precio predecible",
    desc: "Sabés cuánto cuesta antes de firmar. El presupuesto cerrado protege tu inversión desde el día uno.",
  },
  {
    title: "Calidad controlada",
    desc: "Los componentes se fabrican en taller bajo condiciones controladas. Calidad uniforme, sin variables climáticas.",
  },
  {
    title: "Menor desperdicio",
    desc: "La construcción en seco genera hasta un 70 % menos de residuos que la obra húmeda. Mejor para el ambiente y el costo.",
  },
  {
    title: "Diseño que no envejece",
    desc: "Líneas limpias, materiales contemporáneos, integración con el entorno. No es una caja: es un hogar con identidad.",
  },
  {
    title: "Diseñado para Patagonia",
    desc: "Aislación térmica, resistencia al viento y a la nieve. Nuestros sistemas contemplan el clima patagónico.",
  },
];

export default function DifferentialsSection() {
  return (
    <section
      className="py-24 px-4 bg-roble-dark"
      aria-labelledby="diferenciales-heading"
    >
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Construcción industrializada
          </p>
          <h2
            id="diferenciales-heading"
            className="font-serif text-4xl md:text-5xl font-semibold text-white leading-[1.15] mb-5"
          >
            Por qué es una forma mejor de construir
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            No es solo una casa más rápida. Es una manera de construir que te
            da control, calidad y certeza desde el primer día.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
          {diffs.map((diff, i) => (
            <AnimateOnScroll key={diff.title} delay={i * 70}>
              <article className="bg-roble-dark p-8 h-full hover:bg-white/4 transition-colors duration-200">
                <div className="w-8 h-px bg-roble-gold mb-6" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold text-white mb-3 leading-snug">
                  {diff.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">{diff.desc}</p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

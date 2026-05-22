import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const pains = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    problem: '"El presupuesto siempre se dispara"',
    solution:
      "Con Viviendas Roble el precio es cerrado desde el inicio. Sin sorpresas ni adicionales de último momento.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    problem: '"Los tiempos nunca se cumplen"',
    solution:
      "Nuestras obras tienen cronograma real. Sabés cuándo empieza y cuándo termina, antes de arrancar.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    problem: '"Es imposible saber qué está pasando"',
    solution:
      "Te informamos en cada etapa. Comunicación directa con el equipo y actualizaciones del avance de obra.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    problem: '"El resultado no fue lo que imaginé"',
    solution:
      "Diseñamos junto a vos. Plano, terminaciones y materiales se definen antes de poner el primer clavo.",
  },
];

export default function PainPointsSection() {
  return (
    <section className="py-24 px-4 bg-roble-cream" aria-labelledby="pain-heading">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Construir tu casa, sin sorpresas
          </p>
          <h2
            id="pain-heading"
            className="font-serif text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15] mb-5"
          >
            Construir una casa por obra tradicional tiene un problema.{" "}
            <span className="italic">Varios.</span>
          </h2>
          <p className="text-roble-muted text-lg leading-relaxed">
            Si alguna vez quisiste construir una casa en Neuquén o Río Negro,
            ya sabés de qué hablamos. Por eso ofrecemos una alternativa clara
            para quienes buscan construir una vivienda con plazos definidos y
            precio cerrado.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pains.map((item, i) => (
            <AnimateOnScroll key={item.problem} delay={i * 80}>
              <article className="bg-white border border-roble-beige rounded-2xl p-7 h-full">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-roble-cream text-roble-dark mb-5">
                  {item.icon}
                </div>
                <p className="font-serif text-lg font-semibold text-roble-text mb-3 leading-snug">
                  {item.problem}
                </p>
                <p className="text-sm text-roble-muted leading-relaxed">
                  {item.solution}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

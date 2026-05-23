import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    n: "01",
    title: "Consulta inicial",
    desc: "Nos contás tu terreno, tus necesidades y tu presupuesto. Sin compromiso. Respondemos en menos de 24 horas.",
  },
  {
    n: "02",
    title: "Propuesta y diseño",
    desc: "Te presentamos la propuesta adaptada a tu terreno: planos, materiales, tiempos y precio cerrado por escrito.",
  },
  {
    n: "03",
    title: "Inicio de obra",
    desc: "Aprobado el proyecto, arranca la construcción con cronograma detallado y puntos de control definidos.",
  },
  {
    n: "04",
    title: "Supervisión y avance",
    desc: "Nuestro equipo técnico supervisa cada etapa. Recibís actualizaciones del avance sin tener que pedirlas.",
  },
  {
    n: "05",
    title: "Entrega",
    desc: "Recibís tu casa terminada, revisada y lista para habitar. Estamos en la entrega final junto a vos.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="proceso"
      className="py-14 sm:py-24 px-5 sm:px-4 bg-white"
      aria-labelledby="proceso-heading"
    >
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Cómo trabajamos
          </p>
          <h2
            id="proceso-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15] mb-5"
          >
            Así funciona trabajar con Viviendas Roble
          </h2>
          <p className="text-roble-muted text-base sm:text-lg leading-relaxed">
            Un proceso claro, de principio a fin. Sin vueltas, sin sorpresas.
          </p>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="absolute left-7 sm:left-[2.25rem] top-6 sm:top-8 bottom-6 sm:bottom-8 w-px bg-roble-beige"
            aria-hidden="true"
          />

          <ol className="space-y-4 sm:space-y-6">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.n} delay={i * 90}>
                <li className="flex gap-4 sm:gap-6 md:gap-8 items-start">
                  {/* Number circle */}
                  <div className="relative flex-none w-14 h-14 sm:w-[4.5rem] sm:h-[4.5rem] flex items-center justify-center rounded-full border-2 border-roble-beige bg-white z-10 shrink-0">
                    <span className="font-serif text-base sm:text-lg font-semibold text-roble-gold">
                      {step.n}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 sm:pt-3 pb-1 sm:pb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-roble-text mb-1.5 sm:mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-roble-muted text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </li>
              </AnimateOnScroll>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
